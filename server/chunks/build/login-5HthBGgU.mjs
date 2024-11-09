import { u as useConfig, _ as _sfc_main$1 } from './useConfig-BSFPfGQu.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import '@unhead/shared';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'node:path';
import './server.mjs';
import 'unhead';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useConfig();
    const token = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center px-3 w-screen h-screen bg-app bg-no-repeat bg-cover" }, _attrs))}><form class="flex flex-col text-white bg-[#1C1C1E] w-[534px] h-[230px] max-w-full rounded-[12px] border-solid border-[#28282A] border py-5 px-4"><div class="w-[96px] h-[30px] mx-auto mb-6">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `${unref(config).baseURL}/images/logo.png`,
        alt: "logo",
        width: "96px",
        height: "30px",
        loading: "lazy"
      }, null, _parent));
      _push(`</div><div class="flex justify-center items-center mb-6">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `${unref(config).baseURL}/images/leaf.png`,
        alt: "leaf",
        width: "24px",
        height: "24px",
        loading: "lazy"
      }, null, _parent));
      _push(`<h2 class="mx-2 uppercase font-bold text-[18px]">Enter your key</h2>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `${unref(config).baseURL}/images/leaf.png`,
        alt: "leaf",
        width: "24px",
        height: "24px",
        loading: "lazy"
      }, null, _parent));
      _push(`</div><input type="text" class="bg-[#28282B] py-1 px-2 rounded-[8px] text-center mb-6 focus:outline-none focus:placeholder-transparent" placeholder="..."${ssrRenderAttr("value", unref(token))}><button type="submit" class="inline-flex items-center h-[32px] rounded-[8px] border border-solid border-[#44E48E] py-1.5 px-2 mx-auto">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `${unref(config).baseURL}/images/bolt.png`,
        alt: "bolt",
        width: "14px",
        height: "14px",
        loading: "lazy"
      }, null, _parent));
      _push(`<span class="ml-1 uppercase font-bold text-[12px] leading-[20px]">Enter now!</span></button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-5HthBGgU.mjs.map
