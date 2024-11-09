import { u as useConfig, _ as _sfc_main$3, a as useRequestFetch } from './useConfig-BSFPfGQu.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, mergeProps, unref, computed, toValue, reactive, shallowRef, toRef, getCurrentInstance, onServerPrefetch } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { B as hash } from '../_/nitro.mjs';
import { f as fetchDefaults, u as useNuxtApp, a as asyncDataDefaults, c as createError } from './server.mjs';
import '@unhead/shared';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'node:path';
import 'unhead';
import 'vue-router';

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h;
  var _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const initialCachedData = options.getCachedData(key, nuxtApp);
  const hasCachedData = initialCachedData != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_h = (_b = nuxtApp.payload._errors)[key]) != null ? _h : _b[key] = asyncDataDefaults.errorValue;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(hasCachedData ? initialCachedData : options.default()),
      pending: ref(!hasCachedData),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial || nuxtApp.isHydrating && opts._initial !== false) {
      const cachedData = opts._initial ? initialCachedData : options.getCachedData(key, nuxtApp);
      if (cachedData != null) {
        return Promise.resolve(cachedData);
      }
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = [{}, arg1];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const getChars = (str, position, length = 1) => {
  if (str.length <= 0 || length <= 0) throw new Error("Function args invalid!");
  if (position === "start") return str.slice(0, length);
  return str.slice(-length);
};
const formatNumber = (num) => {
  if (num >= 1e6) return (num / 1e6).toFixed(2) + "M";
  if (num >= 1e3) return (num / 1e3).toFixed(2) + "K";
  return String(num);
};
const formatNumberWithDot = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
const checkSingleDigit = (digit) => ("0" + digit).slice(-2);
const timestampConver = (timestamp) => {
  const date = new Date(timestamp);
  return `${checkSingleDigit(date.getMonth() + 1)}/${checkSingleDigit(date.getDate())}/${date.getFullYear()}`;
};
const classifyRaydium = (coin) => {
  const volume = formatNumber(coin.market_cap);
  const createTime = timestampConver(coin.created_timestamp);
  if (coin.raydium_pool !== null) return { score: 3, volume, createTime };
  else {
    let score;
    switch (true) {
      case coin.market_cap >= 5e4:
        score = 4;
        break;
      case (coin.market_cap >= 1e4 && coin.market_cap < 5e4):
        score = 5;
        break;
      default:
        score = 6;
        break;
    }
    return { score, volume, createTime };
  }
};
const coinsQuality = (coins) => {
  coins.sort((a, b) => a.created_timestamp - b.created_timestamp);
  const _coins = coins.slice(0, 10);
  return _coins.map((coin) => classifyRaydium(coin));
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: { data: Object },
  setup(__props) {
    const config = useConfig();
    const props = __props;
    const data = props.data;
    let profileImage = data.profile_image || `${config.baseURL}/images/cover_52x52.png`;
    if (/(((?!\/ipfs\/).)+)(\/ipfs\/.+)/i.test(profileImage))
      profileImage = profileImage.replace(/(((?!\/ipfs\/).)+)(\/ipfs\/.+)/i, "https://gateway.pinata.cloud$3");
    const username = data.username ? `@${data.username}` : `@${getChars(data.wallet, "start", 6)}`;
    const shortWallet = `${getChars(data.wallet, "start", 4)}...${getChars(data.wallet, "end", 4)}`;
    const walletLink = `https://explorer.solana.com/address/${data.wallet}`;
    const coinsScore = coinsQuality(data.coins);
    const cradSmallElements = [
      {
        icon: "created",
        name: "CREATED",
        value: data.created
      },
      {
        icon: "image_24",
        name: "KOTH",
        value: data.koth,
        percent: {
          value: Math.round(data.koth / data.created * 100),
          color: "#FFEE58",
          background: "#3D380D"
        }
      },
      {
        icon: "Ray",
        name: "RAYDIUM",
        value: data.raydium,
        percent: {
          value: Math.round(data.raydium / data.created * 100),
          color: "#B746F0",
          background: "#37144A"
        }
      },
      {
        icon: "image_28",
        name: "SNIPERS/INS",
        value: formatNumberWithDot(data.snipers)
      },
      {
        icon: "image_29",
        name: "DEV BUY",
        value: Math.round(data.dev_buy / data.created * 100)
      },
      {
        icon: "image_27",
        name: "BUNDLE",
        value: Math.round(data.bundle / data.created * 100)
      }
    ];
    const cradBigElements = [
      {
        icon: "image_26",
        name: "RECENT ATH",
        value: formatNumber(data.recent_ath)
      },
      {
        icon: "image_25",
        name: "BEST ATH",
        value: formatNumber(data.best_ath)
      },
      {
        icon: "image_fund",
        name: "FUND FROM",
        value: data.fund_from || "..."
      },
      {
        icon: "image_25",
        name: "ATH",
        value: formatNumber(data.best_ath)
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-[#1C1C1E] rounded-xl border border-[#28282B] py-5 px-4 hover:border-[#0D8A47]" }, _attrs))}><div class="flex items-center justify-between mb-4"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: unref(profileImage),
        alt: "profile_image",
        width: "52px",
        height: "52px",
        loading: "lazy"
      }, null, _parent));
      _push(`<div class="ml-2"><div class="flex items-center"><span class="block text-[#FEFEFE] font-bold text-[15px]">Name</span><span class="block ml-1 text-[#ABABAD] text-[12px] leading-[20px] font-normal">${ssrInterpolate(unref(username))}</span>`);
      if (unref(data).farm_dev) {
        _push(`<div class="flex items-center rounded-[4px] bg-[#3F0D19] pr-3 pl-2 ml-2">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `${unref(config).baseURL}/images/warning.png`,
          alt: "warning",
          width: "14px",
          height: "14px",
          loading: "lazy"
        }, null, _parent));
        _push(`<span class="block ml-1 text-[#F83751] text-[12px] max-xm:text-[10px] leading-[18px] font-[500]">Farm DEV</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center"><div class="rounded-[4px] bg-[#28282B] py-1 px-2 flex items-center cursor-pointer relative group">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `${unref(config).baseURL}/images/file_copy.png`,
        alt: "file_copy",
        width: "16px",
        height: "16px",
        loading: "lazy"
      }, null, _parent));
      _push(`<span class="block ml-1 text-[#FEFEFE] text-[13px] leading-[16px]">${ssrInterpolate(shortWallet)}</span><div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-[120px] hidden rounded-lg p-2 bg-gray-800 text-white text-center text-sm shadow-lg group-hover:block"> Copy wallet </div></div><a class="flex items-center ml-2"${ssrRenderAttr("href", walletLink)} target="_blank" rel="noopener noreferrer"${ssrRenderAttr("title", `${unref(username)} wallet`)}${ssrRenderAttr("aria-label", `${unref(username)} wallet`)}><span class="text-[#ABABAD] text-[12px] leading-[20px]">EXP</span>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "block ml-1",
        src: `${unref(config).baseURL}/images/open_in_new.png`,
        alt: "open_in_new",
        width: "14px",
        height: "14px",
        loading: "lazy"
      }, null, _parent));
      _push(`</a></div></div></div><button class="flex items-center h-[32px] rounded-[8px] border border-solid border-[#44E48E] py-1.5 px-2">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `${unref(config).baseURL}/images/bolt.png`,
        alt: "bolt",
        width: "14px",
        height: "14px",
        loading: "lazy"
      }, null, _parent));
      _push(`<span class="ml-1 uppercase text-white font-bold text-[12px] leading-[20px] xm:hidden">Snipe</span><span class="ml-1 uppercase text-white font-bold text-[12px] leading-[20px] max-xm:hidden">Snipe on mevx</span></button></div><div class="h-[32px] flex justify-between items-center bg-[#28282B] rounded-[8px] py-1 px-2 mb-2"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `${unref(config).baseURL}/images/image_22.png`,
        alt: "image_22",
        width: "16px",
        height: "16px",
        loading: "lazy"
      }, null, _parent));
      _push(`<span class="ml-1 text-[#ABABAD] leading-4 text-xs">LAUNCHER</span></div><div class="flex items-center justify-end"><!--[-->`);
      ssrRenderList(unref(coinsScore), (item, index) => {
        _push(`<div class="relative inline-block group mr-1 last:mr-0">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `${unref(config).baseURL}/images/image_${item.score}.png`,
          alt: `image_${item.score}`,
          width: "16px",
          height: "16px",
          class: "mr-1 last:mr-0",
          loading: "lazy"
        }, null, _parent));
        _push(`<div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden w-[60px] rounded-lg p-2 bg-gray-800 text-white text-center text-sm shadow-lg group-hover:block">${ssrInterpolate(item.volume)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="grid grid-cols-2 gap-[6px] txl:grid-cols-3 mb-2"><!--[-->`);
      ssrRenderList(cradSmallElements, (card, index) => {
        _push(`<div class="h-[32px] bg-[#28282B] rounded-[8px] py-1 px-2 flex justify-between"><div class="flex items-center">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `${unref(config).baseURL}/images/${card.icon}.png`,
          alt: card.icon,
          height: "16px",
          loading: "lazy"
        }, null, _parent));
        _push(`<span class="block ml-1 text-[#ABABAD] leading-4 text-xs">${ssrInterpolate(card.name)}</span></div><div class="flex items-center"><span class="block font-bold text-[15px] text-white mr-2">${ssrInterpolate(card.value)}</span>`);
        if (card.percent) {
          _push(`<span class="${ssrRenderClass([`text-[${card.percent.color}] bg-[${card.percent.background}]`, "block leading-[18px] text-xs px-1"])}">${ssrInterpolate(card.percent.value)}%</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="grid txl:grid-cols-2 gap-[6px] mb-2"><!--[-->`);
      ssrRenderList(cradBigElements, (card, index) => {
        _push(`<div class="h-[32px] bg-[#28282B] rounded-[8px] py-1 px-2 flex justify-between"><div class="flex items-center">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `${unref(config).baseURL}/images/${card.icon}.png`,
          alt: card.icon,
          height: "16px",
          loading: "lazy"
        }, null, _parent));
        _push(`<span class="ml-1 text-[#ABABAD] leading-4 text-xs">${ssrInterpolate(card.name)}</span></div><div class="flex items-center">`);
        if (card.name !== "FUND FROM") {
          _push(`<span class="block font-bold text-[15px] text-[#44E48E] mr-1">${ssrInterpolate(card.value)}</span>`);
        } else {
          _push(`<span class="block text-[13px] text-[#FEFEFE] mr-1">${ssrInterpolate(card.value)}</span>`);
        }
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "ml-1",
          src: `${unref(config).baseURL}/images/open_in_new.png`,
          alt: "open_in_new",
          width: "14px",
          height: "14px"
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchBox",
  __ssrInlineRender: true,
  props: { open: Boolean },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const config = useConfig();
    const props = __props;
    const searchIsOpen = computed(() => props.open);
    const status = ref("ready");
    const wallet = ref("");
    const data = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$3;
      const _component_Card = _sfc_main$2;
      if (unref(searchIsOpen)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black bg-opacity-50 transition-opacity duration-300 flex items-center justify-center fixed inset-0 z-50" }, _attrs))}><div class="w-full max-w-[556px] bg-[#1C1C1E] border border-[rgb(40,40,43)] p-4 rounded-[1px]"><div class="w-full h-4 mb-4 flex justify-between items-center"><div class="w-full relative"><input class="peer w-full h-4 bg-transparent focus:outline-none text-center text-white" type="text"${ssrRenderAttr("value", unref(wallet))}><div class="absolute top-0 left-0 peer-focus:hidden flex items-center">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `${unref(config).baseURL}/images/search.png`,
          alt: "search",
          width: "16px",
          height: "16px",
          loading: "lazy"
        }, null, _parent));
        _push(`<span class="block ml-1 text-[#ABABAD] text-[12px] leading-[16px]">Search</span></div></div><div class="w-4 h-4 text-center cursor-pointer">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `${unref(config).baseURL}/images/close.png`,
          alt: "close",
          width: "16px",
          height: "16px"
        }, null, _parent));
        _push(`</div></div><div class="border border-[#28282B] mb-4"></div><div class="h-[24px] flex items-center mb-4"><div class="flex items-center mr-4">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `${unref(config).baseURL}/images/history.png`,
          alt: "history",
          width: "16px",
          height: "16px"
        }, null, _parent));
        _push(`<span class="block ml-1 text-[#ABABAD] text-[12px] leading-[16px]">Recent</span></div><div class="flex-1 overflow-x-auto"><div class="flex space-x-6"><!--[-->`);
        ssrRenderList([1, 2, 3, 4, 5, 6, 7], (i) => {
          _push(`<div class="flex space-x-1 items-center bg-[#28282B]">`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: `${unref(config).baseURL}/images/cover_16px.png`,
            alt: "cover_16px",
            width: "16px",
            height: "16px",
            loading: "lazy",
            class: "block"
          }, null, _parent));
          _push(`<span class="block text-white text-[13px] leading-[16px]">8eus...wtYm</span>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: `${unref(config).baseURL}/images/file_copy.png`,
            alt: "file_copy",
            width: "16px",
            height: "16px",
            loading: "lazy",
            class: "block"
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div><div class="w-full flex items-center justify-center min-h-[380px]">`);
        if (unref(status) === "ready") {
          _push(`<div class="flex flex-col items-center justify-center">`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: `${unref(config).baseURL}/images/quick_reference_all.png`,
            alt: "quick_reference_all",
            width: "52px",
            height: "52px",
            loading: "lazy",
            class: "mb-2"
          }, null, _parent));
          _push(`<span class="text-[#4B4D51] text-[12px] leading-[16px]">Search Dev Wallet address</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(status) === "no_result") {
          _push(`<div class="flex flex-col items-center justify-center">`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            class: "mb-2",
            src: `${unref(config).baseURL}/images/quick_reference.png`,
            alt: "quick_reference",
            width: "52px",
            height: "52px"
          }, null, _parent));
          _push(`<span class="text-[#4B4D51] text-[12px] leading-[16px]">Sorry, no result</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(status) === "result" && unref(data).wallet) {
          _push(ssrRenderComponent(_component_Card, { data: unref(data) }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(status) === "loading") {
          _push(`<div class="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const config = useConfig();
    const searchIsOpen = ref(false);
    const tabActive = ref("NEW DEV");
    const { data: respData } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/groups", "$pqtWcjQkdb")), __temp = await __temp, __restore(), __temp);
    const data = respData.value;
    const tabData = ref((_a = data == null ? void 0 : data.newGroup) == null ? void 0 : _a.items);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$3;
      const _component_SearchBox = _sfc_main$1;
      const _component_Card = _sfc_main$2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-screen min-h-screen bg-app bg-no-repeat bg-cover p-4 max-xm:px-2" }, _attrs))}><div class="relative flex items-center justify-center max-md:justify-end mb-4"><div class="absolute top-0 left-0">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `${unref(config).baseURL}/images/logo.png`,
        alt: "Z99Labs Logo",
        width: "96px",
        height: "30px",
        loading: "lazy"
      }, null, _parent));
      _push(`</div><button class="md:w-[360px] max-md:w-[180px] h-[30px] bg-[#1C1C1E] rounded-[12px] border border-[#28282B] cursor-pointer px-4 flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `${unref(config).baseURL}/images/search.png`,
        alt: "search",
        width: "16px",
        height: "16px",
        loading: "lazy"
      }, null, _parent));
      _push(`<span class="block ml-1 text-[#ABABAD] text-[12px] leading-[16px]">Search</span></button>`);
      _push(ssrRenderComponent(_component_SearchBox, {
        open: unref(searchIsOpen),
        onClose: ($event) => searchIsOpen.value = false
      }, null, _parent));
      _push(`</div><div class="border border-[#1d1d1f]"></div><div class="flex justify-center max-txl:max-w-[576px] max-txl:flex-col max-txl:mx-auto max-xl:hidden"><!--[-->`);
      ssrRenderList(unref(data), (groupData, groupName) => {
        _push(`<div class="txl:w-1/3 txl:border-r last:border-0 txl:border-[#28282B] txl:p-4 flex items-center flex-col"><div class="${ssrRenderClass([`bg-[${groupData.background}]`, "w-full h-[56px] rounded-[12px] mb-4 p-4 flex items-center"])}">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `${unref(config).baseURL}/images/${groupData.icon}.png`,
          alt: groupData.icon,
          width: "24px",
          height: "24px",
          loading: "lazy"
        }, null, _parent));
        _push(`<span class="block ml-2 font-bold text-[#484869] text-[18px]">${ssrInterpolate(groupData.text)}</span></div><div class="w-full flex flex-col h-[calc(100vh-184px)] pr-2 overflow-y-auto"><!--[-->`);
        ssrRenderList(groupData.items, (dev) => {
          _push(ssrRenderComponent(_component_Card, {
            data: dev,
            class: "mb-2 last:mb-0",
            key: dev.wallet
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="xl:hidden mt-4"><div class="fixed bottom-0 left-0 right-0 grid grid-cols-3 p-2"><!--[-->`);
      ssrRenderList(unref(data), (groupData, groupName) => {
        _push(`<div class="${ssrRenderClass([`bg-[${groupData.background}]${unref(tabActive) === groupData.text ? " bg-opacity-1" : " bg-opacity-50"}${groupData.text === "NEW DEV" ? " rounded-l-[10px]" : ""}${groupData.text === "SAFE DEV" ? " rounded-r-[10px]" : ""}`, "h-[64px] p-4 flex items-center justify-center cursor-pointer"])}">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `${unref(config).baseURL}/images/${groupData.icon}.png`,
          alt: groupData.icon,
          width: "16px",
          height: "16px",
          loading: "lazy",
          class: `${unref(tabActive) === groupData.text ? "opacity-1" : "opacity-50"}`
        }, null, _parent));
        _push(`<span class="${ssrRenderClass([{ "text-white": unref(tabActive) === groupData.text }, "block ml-2 font-bold text-[#484869] max-xm:text-[12px] text-[15px]"])}">${ssrInterpolate(groupData.text)}</span></div>`);
      });
      _push(`<!--]--></div><div class="max-txl:max-w-[576px] max-txl:mx-auto h-[calc(100vh-160px)] overflow-y-auto pr-2"><!--[-->`);
      ssrRenderList(unref(tabData), (dev) => {
        _push(ssrRenderComponent(_component_Card, {
          data: dev,
          class: "mb-2 last:mb-0",
          key: dev.wallet
        }, null, _parent));
      });
      _push(`<!--]--></div></div><button class="max-xl:hidden fixed top-3 right-4 rounded-[5px] border border-solid border-[#44E48E] bg-[#44E48E] py-1 px-4"><span class="text-white font-bold text-[12px] leading-[20px]">Logout</span></button></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CpXTz9Er.mjs.map
