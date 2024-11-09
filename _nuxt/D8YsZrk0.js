import{u as H,_ as V}from"./BPgxhD9f.js";import{a as ne,J as A,r as E,K as re,L as ie,M as oe,N as le,E as ce,O as G,P as de,Q as c,I as ue,R as pe,i as Z,S as fe,T as he,U as L,d as I,t as b,v as B,x as i,z as w,y as S,V as z,W as C,X as R,Y as P,Z as me,$ as xe,a0 as ge,a1 as j,a2 as ye,m as _e}from"./IgMk9t1Q.js";const Y=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function be(s,a){a?a={...Y,...a}:a=Y;const n=ee(a);return n.dispatch(s),n.toString()}const ve=Object.freeze(["prototype","__proto__","constructor"]);function ee(s){let a="",n=new Map;const e=t=>{a+=t};return{toString(){return a},getContext(){return n},dispatch(t){return s.replacer&&(t=s.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const r=Object.prototype.toString.call(t);let d="";const x=r.length;x<10?d="unknown:["+r+"]":d=r.slice(8,x-1),d=d.toLowerCase();let l=null;if((l=n.get(t))===void 0)n.set(t,n.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(d!=="object"&&d!=="function"&&d!=="asyncfunction")this[d]?this[d](t):s.ignoreUnknown||this.unkown(t,d);else{let f=Object.keys(t);s.unorderedObjects&&(f=f.sort());let y=[];s.respectType!==!1&&!J(t)&&(y=ve),s.excludeKeys&&(f=f.filter(o=>!s.excludeKeys(o)),y=y.filter(o=>!s.excludeKeys(o))),e("object:"+(f.length+y.length)+":");const u=o=>{this.dispatch(o),e(":"),s.excludeValues||this.dispatch(t[o]),e(",")};for(const o of f)u(o);for(const o of y)u(o)}},array(t,r){if(r=r===void 0?s.unorderedArrays!==!1:r,e("array:"+t.length+":"),!r||t.length<=1){for(const l of t)this.dispatch(l);return}const d=new Map,x=t.map(l=>{const f=ee(s);f.dispatch(l);for(const[y,u]of f.getContext())d.set(y,u);return f.toString()});return n=d,x.sort(),this.array(x,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,r){if(e(r),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),J(t)?this.dispatch("[native]"):this.dispatch(t.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),s.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const r=[...t];return this.array(r,s.unorderedSets!==!1)},set(t){e("set:");const r=[...t];return this.array(r,s.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(s.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const te="[native code] }",we=te.length;function J(s){return typeof s!="function"?!1:Function.prototype.toString.call(s).slice(-we)===te}var Be=Object.defineProperty,ke=(s,a,n)=>a in s?Be(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n,O=(s,a,n)=>(ke(s,typeof a!="symbol"?a+"":a,n),n);class U{constructor(a,n){O(this,"words"),O(this,"sigBytes"),a=this.words=a||[],this.sigBytes=n===void 0?a.length*4:n}toString(a){return(a||$e).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let n=0;n<a.sigBytes;n++){const e=a.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=e<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<a.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=a.words[n>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new U([...this.words])}}const $e={stringify(s){const a=[];for(let n=0;n<s.sigBytes;n++){const e=s.words[n>>>2]>>>24-n%4*8&255;a.push((e>>>4).toString(16),(e&15).toString(16))}return a.join("")}},De={stringify(s){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let e=0;e<s.sigBytes;e+=3){const t=s.words[e>>>2]>>>24-e%4*8&255,r=s.words[e+1>>>2]>>>24-(e+1)%4*8&255,d=s.words[e+2>>>2]>>>24-(e+2)%4*8&255,x=t<<16|r<<8|d;for(let l=0;l<4&&e*8+l*6<s.sigBytes*8;l++)n.push(a.charAt(x>>>6*(3-l)&63))}return n.join("")}},Se={parse(s){const a=s.length,n=[];for(let e=0;e<a;e++)n[e>>>2]|=(s.charCodeAt(e)&255)<<24-e%4*8;return new U(n,a)}},Ee={parse(s){return Se.parse(unescape(encodeURIComponent(s)))}};class Ce{constructor(){O(this,"_data",new U),O(this,"_nDataBytes",0),O(this,"_minBufferSize",0),O(this,"blockSize",512/32)}reset(){this._data=new U,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=Ee.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,n){}_process(a){let n,e=this._data.sigBytes/(this.blockSize*4);a?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,r=Math.min(t*4,this._data.sigBytes);if(t){for(let d=0;d<t;d+=this.blockSize)this._doProcessBlock(this._data.words,d);n=this._data.words.splice(0,t),this._data.sigBytes-=r}return new U(n,r)}}class Re extends Ce{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}var Ue=Object.defineProperty,Fe=(s,a,n)=>a in s?Ue(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n,Le=(s,a,n)=>(Fe(s,a+"",n),n);const Q=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ze=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],F=[];class Ae extends Re{constructor(){super(...arguments),Le(this,"_hash",new U([...Q]))}reset(){super.reset(),this._hash=new U([...Q])}_doProcessBlock(a,n){const e=this._hash.words;let t=e[0],r=e[1],d=e[2],x=e[3],l=e[4],f=e[5],y=e[6],u=e[7];for(let o=0;o<64;o++){if(o<16)F[o]=a[n+o]|0;else{const m=F[o-15],D=(m<<25|m>>>7)^(m<<14|m>>>18)^m>>>3,$=F[o-2],K=($<<15|$>>>17)^($<<13|$>>>19)^$>>>10;F[o]=D+F[o-7]+K+F[o-16]}const g=l&f^~l&y,p=t&r^t&d^r&d,_=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),v=(l<<26|l>>>6)^(l<<21|l>>>11)^(l<<7|l>>>25),k=u+v+g+ze[o]+F[o],h=_+p;u=y,y=f,f=l,l=x+k|0,x=d,d=r,r=t,t=k+h|0}e[0]=e[0]+t|0,e[1]=e[1]+r|0,e[2]=e[2]+d|0,e[3]=e[3]+x|0,e[4]=e[4]+l|0,e[5]=e[5]+f|0,e[6]=e[6]+y|0,e[7]=e[7]+u|0}finalize(a){super.finalize(a);const n=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(e+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Oe(s){return new Ae().finalize(s).toString(De)}function Pe(s,a={}){const n=typeof s=="string"?s:be(s,a);return Oe(n).slice(0,10)}const Ne=s=>s==="defer"||s===!1;function Me(...s){var _;const a=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(a);let[n,e,t={}]=s;if(typeof n!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const r=ne(),d=e,x=()=>A.value,l=()=>r.isHydrating?r.payload.data[n]:r.static.data[n];t.server=t.server??!0,t.default=t.default??x,t.getCachedData=t.getCachedData??l,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??A.deep,t.dedupe=t.dedupe??"cancel";const f=t.getCachedData(n,r),y=f!=null;if(!r._asyncData[n]||!t.immediate){(_=r.payload._errors)[n]??(_[n]=A.errorValue);const v=t.deep?E:re;r._asyncData[n]={data:v(y?f:t.default()),pending:E(!y),error:ie(r.payload._errors,n),status:E("idle"),_default:t.default}}const u={...r._asyncData[n]};delete u._default,u.refresh=u.execute=(v={})=>{if(r._asyncDataPromises[n]){if(Ne(v.dedupe??t.dedupe))return r._asyncDataPromises[n];r._asyncDataPromises[n].cancelled=!0}if(v._initial||r.isHydrating&&v._initial!==!1){const h=v._initial?f:t.getCachedData(n,r);if(h!=null)return Promise.resolve(h)}u.pending.value=!0,u.status.value="pending";const k=new Promise((h,m)=>{try{h(d(r))}catch(D){m(D)}}).then(async h=>{if(k.cancelled)return r._asyncDataPromises[n];let m=h;t.transform&&(m=await t.transform(h)),t.pick&&(m=je(m,t.pick)),r.payload.data[n]=m,u.data.value=m,u.error.value=A.errorValue,u.status.value="success"}).catch(h=>{if(k.cancelled)return r._asyncDataPromises[n];u.error.value=de(h),u.data.value=c(t.default()),u.status.value="error"}).finally(()=>{k.cancelled||(u.pending.value=!1,delete r._asyncDataPromises[n])});return r._asyncDataPromises[n]=k,r._asyncDataPromises[n]},u.clear=()=>Te(r,n);const o=()=>u.refresh({_initial:!0}),g=t.server!==!1&&r.payload.serverRendered;{const v=ue();if(v&&!v._nuxtOnBeforeMountCbs){v._nuxtOnBeforeMountCbs=[];const m=v._nuxtOnBeforeMountCbs;oe(()=>{m.forEach(D=>{D()}),m.splice(0,m.length)}),le(()=>m.splice(0,m.length))}g&&r.isHydrating&&(u.error.value||f!=null)?(u.pending.value=!1,u.status.value=u.error.value?"error":"success"):v&&(r.payload.serverRendered&&r.isHydrating||t.lazy)&&t.immediate?v._nuxtOnBeforeMountCbs.push(o):t.immediate&&o();const k=pe();if(t.watch){const m=ce(t.watch,()=>u.refresh());k&&G(m)}const h=r.hook("app:data:refresh",async m=>{(!m||m.includes(n))&&await u.refresh()});k&&G(h)}const p=Promise.resolve(r._asyncDataPromises[n]).then(()=>u);return Object.assign(p,u),p}function Te(s,a){a in s.payload.data&&(s.payload.data[a]=void 0),a in s.payload._errors&&(s.payload._errors[a]=A.errorValue),s._asyncData[a]&&(s._asyncData[a].data.value=void 0,s._asyncData[a].error.value=A.errorValue,s._asyncData[a].pending.value=!1,s._asyncData[a].status.value="idle"),a in s._asyncDataPromises&&(s._asyncDataPromises[a]&&(s._asyncDataPromises[a].cancelled=!0),s._asyncDataPromises[a]=void 0)}function je(s,a){const n={};for(const e of a)n[e]=s[e];return n}function se(s,a,n){const[e={},t]=typeof a=="string"?[{},a]:[a,n],r=Z(()=>L(s)),d=e.key||Pe([t,typeof r.value=="string"?r.value:"",...He(e)]);if(!d||typeof d!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+d);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const x=d===t?"$f"+d:d;if(!e.baseURL&&typeof r.value=="string"&&r.value[0]==="/"&&r.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:l,lazy:f,default:y,transform:u,pick:o,watch:g,immediate:p,getCachedData:_,deep:v,dedupe:k,...h}=e,m=fe({...he,...h,cache:typeof e.cache=="boolean"?void 0:e.cache}),D={server:l,lazy:f,default:y,transform:u,pick:o,immediate:p,getCachedData:_,deep:v,dedupe:k,watch:g===!1?[]:[m,r,...g||[]]};let $;return Me(x,()=>{var W;(W=$==null?void 0:$.abort)==null||W.call($,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),$=typeof AbortController<"u"?new AbortController:{};const q=L(e.timeout);let M;return q&&(M=setTimeout(()=>$.abort(new DOMException("Request aborted due to timeout.","AbortError")),q),$.signal.onabort=()=>clearTimeout(M)),(e.$fetch||globalThis.$fetch)(r.value,{signal:$.signal,...m}).finally(()=>{clearTimeout(M)})},D)}function He(s){var n;const a=[((n=L(s.method))==null?void 0:n.toUpperCase())||"GET",L(s.baseURL)];for(const e of[s.params||s.query]){const t=L(e);if(!t)continue;const r={};for(const[d,x]of Object.entries(t))r[L(d)]=L(x);a.push(r)}return a}const Ve=s=>navigator.clipboard.writeText(s),Ie=s=>new Promise(a=>setTimeout(a,s*1e3)),T=(s,a,n=1)=>{if(s.length<=0||n<=0)throw new Error("Function args invalid!");return a==="start"?s.slice(0,n):s.slice(-n)},N=s=>s>=1e6?(s/1e6).toFixed(2)+"M":s>=1e3?(s/1e3).toFixed(2)+"K":String(s),Ke=s=>s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),X=s=>("0"+s).slice(-2),qe=s=>{const a=new Date(s);return`${X(a.getMonth()+1)}/${X(a.getDate())}/${a.getFullYear()}`},We=s=>{const a=N(s.market_cap),n=qe(s.created_timestamp);if(s.raydium_pool!==null)return{score:3,volume:a,createTime:n};{let e;switch(!0){case s.market_cap>=5e4:e=4;break;case(s.market_cap>=1e4&&s.market_cap<5e4):e=5;break;default:e=6;break}return{score:e,volume:a,createTime:n}}},Ge=s=>(s.sort((n,e)=>n.created_timestamp-e.created_timestamp),s.slice(0,10).map(n=>We(n))),Ye={class:"w-full bg-[#1C1C1E] rounded-xl border border-[#28282B] py-5 px-4 hover:border-[#0D8A47]"},Je={class:"flex xm:items-center xm:justify-between mb-4 max-xm:flex-col"},Qe={class:"flex items-center max-xm:mb-4"},Xe={class:"ml-2"},Ze={class:"flex items-center"},et={class:"block ml-1 text-[#ABABAD] text-[12px] leading-[20px] font-normal"},tt={key:0,class:"flex items-center rounded-[4px] bg-[#3F0D19] pr-3 pl-2 ml-2"},st={class:"flex items-center"},at=["title","aria-label"],nt={class:"flex items-center h-[32px] rounded-[8px] border border-solid border-[#44E48E] py-1.5 px-2 max-xm:mx-auto"},rt={class:"h-[32px] flex justify-between items-center bg-[#28282B] rounded-[8px] py-1 px-2 mb-2"},it={class:"flex items-center"},ot={class:"flex items-center justify-end"},lt={class:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden w-12 h-12 rounded-lg p-2 bg-gray-800 text-white text-center text-sm shadow-lg group-hover:block leading-8"},ct={class:"grid grid-cols-2 gap-[6px] txl:grid-cols-3 mb-2"},dt={class:"flex items-center"},ut={class:"block ml-1 text-[#ABABAD] leading-4 text-xs"},pt={class:"flex items-center"},ft={class:"block font-bold text-[15px] text-white mr-2"},ht={class:"grid txl:grid-cols-2 gap-[6px] mb-2"},mt={class:"flex items-center"},xt={class:"ml-1 text-[#ABABAD] leading-4 text-xs"},gt={class:"flex items-center"},yt={key:0,class:"block font-bold text-[15px] text-[#44E48E] mr-1"},_t={key:1,class:"block text-[13px] text-[#FEFEFE] mr-1"},ae=I({__name:"Card",props:{data:Object},setup(s){const a=H(),e=s.data,t=e.profile_image||`${a.baseURL}/images/cover_52x52.png`,r=e.username||T(e.wallet,"start",6),d=`${T(e.wallet,"start",4)}...${T(e.wallet,"end",4)}`,x=`https://explorer.solana.com/address/${e.wallet}`,l=Ge(e.coins),f=[{icon:"created",name:"CREATED",value:e.created},{icon:"image_24",name:"KOTH",value:e.koth,percent:{value:Math.round(e.koth/e.created*100),color:"#FFEE58",background:"#3D380D"}},{icon:"Ray",name:"RAYDIUM",value:e.raydium,percent:{value:Math.round(e.raydium/e.created*100),color:"#B746F0",background:"#37144A"}},{icon:"image_28",name:"SNIPERS/INS",value:Ke(e.snipers)},{icon:"image_29",name:"DEV BUY",value:Math.round(e.dev_buy/e.created*100)},{icon:"image_27",name:"BUNDLE",value:Math.round(e.bundle/e.created*100)}],y=[{icon:"image_26",name:"RECENT ATH",value:N(e.recent_ath)},{icon:"image_25",name:"BEST ATH",value:N(e.best_ath)},{icon:"image_fund",name:"FUND FROM",value:e.fund_from||"..."},{icon:"image_25",name:"ATH",value:N(e.best_ath)}];return(u,o)=>{const g=V;return b(),B("div",Ye,[i("div",Je,[i("div",Qe,[w(g,{src:c(t),alt:"profile_image",width:"52px",height:"52px",loading:"lazy"},null,8,["src"]),i("div",Xe,[i("div",Ze,[o[2]||(o[2]=i("span",{class:"block text-[#FEFEFE] font-bold text-[15px]"},"Name",-1)),i("span",et,S(c(r)),1),c(e).farm_dev?(b(),B("div",tt,[w(g,{src:`${c(a).baseURL}/images/warning.png`,alt:"warning",width:"14px",height:"14px",loading:"lazy"},null,8,["src"]),o[1]||(o[1]=i("span",{class:"block ml-1 text-[#F83751] text-[12px] leading-[18px] font-[500]"},"Farm DEV",-1))])):z("",!0)]),i("div",st,[i("div",{class:"rounded-[4px] bg-[#28282B] py-1 px-2 flex items-center",onClick:o[0]||(o[0]=p=>("copyText"in u?u.copyText:c(Ve))(c(e).wallet))},[w(g,{src:`${c(a).baseURL}/images/file_copy.png`,alt:"file_copy",width:"16px",height:"16px",loading:"lazy"},null,8,["src"]),i("span",{class:"block ml-1 text-[#FEFEFE] text-[13px] leading-[16px]"},S(d))]),i("a",{class:"flex items-center ml-2",href:x,target:"_blank",rel:"noopener noreferrer",title:`${c(r)} wallet`,"aria-label":`${c(r)} wallet`},[o[3]||(o[3]=i("span",{class:"text-[#ABABAD] text-[12px] leading-[20px]"},"EXP",-1)),w(g,{class:"block ml-1",src:`${c(a).baseURL}/images/open_in_new.png`,alt:"open_in_new",width:"14px",height:"14px",loading:"lazy"},null,8,["src"])],8,at)])])]),i("button",nt,[w(g,{src:`${c(a).baseURL}/images/bolt.png`,alt:"bolt",width:"14px",height:"14px",loading:"lazy"},null,8,["src"]),o[4]||(o[4]=i("span",{class:"ml-1 uppercase text-white font-bold text-[12px] leading-[20px]"},"Snipe on mevx",-1))])]),i("div",rt,[i("div",it,[w(g,{src:`${c(a).baseURL}/images/image_22.png`,alt:"image_22",width:"16px",height:"16px",loading:"lazy"},null,8,["src"]),o[5]||(o[5]=i("span",{class:"ml-1 text-[#ABABAD] leading-4 text-xs"},"LAUNCHER",-1))]),i("div",ot,[(b(!0),B(C,null,R(c(l),(p,_)=>(b(),B("div",{class:"relative inline-block group mr-1 last:mr-0",key:_},[w(g,{src:`${c(a).baseURL}/images/image_${p.score}.png`,alt:`image_${p.score}`,width:"16px",height:"16px",class:"mr-1 last:mr-0",loading:"lazy"},null,8,["src","alt"]),i("div",lt,S(p.volume),1)]))),128))])]),i("div",ct,[(b(),B(C,null,R(f,(p,_)=>i("div",{class:"h-[32px] bg-[#28282B] rounded-[8px] py-1 px-2 flex justify-between",key:_},[i("div",dt,[w(g,{src:`${c(a).baseURL}/images/${p.icon}.png`,alt:p.icon,height:"16px",loading:"lazy"},null,8,["src","alt"]),i("span",ut,S(p.name),1)]),i("div",pt,[i("span",ft,S(p.value),1),p.percent?(b(),B("span",{key:0,class:P(["block leading-[18px] text-xs px-1",`text-[${p.percent.color}] bg-[${p.percent.background}]`])},S(p.percent.value)+"%",3)):z("",!0)])])),64))]),i("div",ht,[(b(),B(C,null,R(y,(p,_)=>i("div",{class:"h-[32px] bg-[#28282B] rounded-[8px] py-1 px-2 flex justify-between",key:_},[i("div",mt,[w(g,{src:`${c(a).baseURL}/images/${p.icon}.png`,alt:p.icon,height:"16px",loading:"lazy"},null,8,["src","alt"]),i("span",xt,S(p.name),1)]),i("div",gt,[p.name!=="FUND FROM"?(b(),B("span",yt,S(p.value),1)):(b(),B("span",_t,S(p.value),1)),w(g,{class:"ml-1",src:`${c(a).baseURL}/images/open_in_new.png`,alt:"open_in_new",width:"14px",height:"14px"},null,8,["src"])])])),64))])])}}}),bt={key:0,class:"bg-black bg-opacity-50 transition-opacity duration-300 flex items-center justify-center fixed inset-0 z-50"},vt={class:"w-full max-w-[556px] bg-[#1C1C1E] border border-[rgb(40,40,43)] p-4 rounded-[1px]"},wt={class:"w-full h-4 mb-4 flex justify-between items-center"},Bt={class:"w-full relative"},kt={class:"absolute top-0 left-0 peer-focus:hidden flex items-center"},$t={class:"h-[24px] flex items-center mb-4"},Dt={class:"flex items-center mr-4"},St={class:"flex-1 overflow-x-auto"},Et={class:"flex space-x-6"},Ct={class:"w-full flex items-center justify-center min-h-[380px]"},Rt={key:0,class:"flex flex-col items-center justify-center"},Ut={key:1,class:"flex flex-col items-center justify-center"},Ft={key:3,class:"w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"},Lt=I({__name:"SearchBox",props:{open:Boolean},emits:["close"],setup(s,{emit:a}){const n=H(),e=s,t=a,r=Z(()=>e.open),d=()=>{t("close")},x=E("ready"),l=E(""),f=E({}),y=async()=>{var o;x.value="loading";const{data:u}=await se(`/api/wallet/${l.value}`,"$rL74s16h6i");await Ie(1),f.value=u.value,(o=f==null?void 0:f.value)!=null&&o.wallet?x.value="result":x.value="no_result"};return(u,o)=>{const g=V,p=ae;return c(r)?(b(),B("div",bt,[i("div",vt,[i("div",wt,[i("div",Bt,[me(i("input",{class:"peer w-full h-4 bg-transparent focus:outline-none text-center text-white",type:"text","onUpdate:modelValue":o[0]||(o[0]=_=>ge(l)?l.value=_:null),onChange:y,onBlur:y},null,544),[[xe,c(l)]]),i("div",kt,[w(g,{src:`${c(n).baseURL}/images/search.png`,alt:"search",width:"16px",height:"16px",loading:"lazy"},null,8,["src"]),o[1]||(o[1]=i("span",{class:"block ml-1 text-[#ABABAD] text-[12px] leading-[16px]"},"Search",-1))])]),i("div",{class:"w-4 h-4 text-center cursor-pointer",onClick:d},[w(g,{src:`${c(n).baseURL}/images/close.png`,alt:"close",width:"16px",height:"16px"},null,8,["src"])])]),o[6]||(o[6]=i("div",{class:"border border-[#28282B] mb-4"},null,-1)),i("div",$t,[i("div",Dt,[w(g,{src:`${c(n).baseURL}/images/history.png`,alt:"history",width:"16px",height:"16px"},null,8,["src"]),o[2]||(o[2]=i("span",{class:"block ml-1 text-[#ABABAD] text-[12px] leading-[16px]"},"Recent",-1))]),i("div",St,[i("div",Et,[(b(),B(C,null,R([1,2,3,4,5,6,7],_=>i("div",{class:"flex space-x-1 items-center bg-[#28282B]",key:_},[w(g,{src:`${c(n).baseURL}/images/cover_16px.png`,alt:"cover_16px",width:"16px",height:"16px",loading:"lazy",class:"block"},null,8,["src"]),o[3]||(o[3]=i("span",{class:"block text-white text-[13px] leading-[16px]"},"8eus...wtYm",-1)),w(g,{src:`${c(n).baseURL}/images/file_copy.png`,alt:"file_copy",width:"16px",height:"16px",loading:"lazy",class:"block"},null,8,["src"])])),64))])])]),i("div",Ct,[c(x)==="ready"?(b(),B("div",Rt,[w(g,{src:`${c(n).baseURL}/images/quick_reference_all.png`,alt:"quick_reference_all",width:"52px",height:"52px",loading:"lazy",class:"mb-2"},null,8,["src"]),o[4]||(o[4]=i("span",{class:"text-[#4B4D51] text-[12px] leading-[16px]"},"Search Dev Wallet address",-1))])):z("",!0),c(x)==="no_result"?(b(),B("div",Ut,[w(g,{class:"mb-2",src:`${c(n).baseURL}/images/quick_reference.png`,alt:"quick_reference",width:"52px",height:"52px"},null,8,["src"]),o[5]||(o[5]=i("span",{class:"text-[#4B4D51] text-[12px] leading-[16px]"},"Sorry, no result",-1))])):z("",!0),c(x)==="result"&&c(f).wallet?(b(),j(p,{key:2,data:c(f)},null,8,["data"])):z("",!0),c(x)==="loading"?(b(),B("div",Ft)):z("",!0)])])])):z("",!0)}}}),zt={class:"w-screen min-h-screen bg-app bg-no-repeat bg-cover p-4"},At={class:"relative flex items-center justify-center max-md:justify-end mb-4"},Ot={class:"absolute top-0 left-0"},Pt={class:"flex justify-center max-txl:max-w-[576px] max-txl:flex-col max-txl:mx-auto max-xl:hidden"},Nt={class:"block ml-2 font-bold text-[#484869] text-[18px]"},Mt={class:"w-full flex flex-col h-[calc(100vh-184px)] overflow-y-auto"},Tt={class:"xl:hidden mt-4"},jt={class:"fixed bottom-0 left-0 right-0 grid grid-cols-3 text-white"},Ht=["onClick"],Vt={class:"block ml-2 font-bold text-[#484869] max-xm:text-[13px] text-[15px]"},It={class:"max-txl:max-w-[576px] max-txl:mx-auto h-[calc(100vh-148px)] overflow-y-auto text-white"},Gt=I({__name:"index",async setup(s){var o;let a,n;const e=H(),t=E(!1),r=E("NEW DEV"),d=()=>{t.value=!0},{data:x}=([a,n]=ye(()=>se("/api/groups","$pqtWcjQkdb")),a=await a,n(),a),l=x.value,f=()=>{localStorage.removeItem("token"),_e("/login")},y=E((o=l==null?void 0:l.newGroup)==null?void 0:o.items),u=g=>{var p,_,v;switch(r.value=g,g){case"DEGEN DEV":y.value=(p=l==null?void 0:l.degenGroup)==null?void 0:p.items;break;case"SAFE DEV":y.value=(_=l==null?void 0:l.safeGroup)==null?void 0:_.items;break;default:y.value=(v=l==null?void 0:l.newGroup)==null?void 0:v.items;break}};return(g,p)=>{const _=V,v=Lt,k=ae;return b(),B("main",zt,[i("div",At,[i("div",Ot,[w(_,{src:`${c(e).baseURL}/images/logo.png`,alt:"Z99Labs Logo",width:"96px",height:"30px",loading:"lazy"},null,8,["src"])]),i("button",{onClick:d,class:"md:w-[360px] max-md:w-[180px] h-[30px] bg-[#1C1C1E] rounded-[12px] border border-[#28282B] cursor-pointer px-4 flex items-center"},[w(_,{src:`${c(e).baseURL}/images/search.png`,alt:"search",width:"16px",height:"16px",loading:"lazy"},null,8,["src"]),p[1]||(p[1]=i("span",{class:"block ml-1 text-[#ABABAD] text-[12px] leading-[16px]"},"Search",-1))]),w(v,{open:c(t),onClose:p[0]||(p[0]=h=>t.value=!1)},null,8,["open"])]),p[3]||(p[3]=i("div",{class:"border border-[#1d1d1f]"},null,-1)),i("div",Pt,[(b(!0),B(C,null,R(c(l),(h,m)=>(b(),B("div",{class:"txl:w-1/3 txl:border-r last:border-0 txl:border-[#28282B] txl:p-4 flex items-center flex-col",key:m},[i("div",{class:P(["w-full h-[56px] rounded-[12px] mb-4 p-4 flex items-center",`bg-[${h.background}]`])},[w(_,{src:`${c(e).baseURL}/images/${h.icon}.png`,alt:h.icon,width:"24px",height:"24px",loading:"lazy"},null,8,["src","alt"]),i("span",Nt,S(h.text),1)],2),i("div",Mt,[(b(!0),B(C,null,R(h.items,D=>(b(),j(k,{data:D,class:"mb-2 last:mb-0",key:D.wallet},null,8,["data"]))),128))])]))),128))]),i("div",Tt,[i("div",jt,[(b(!0),B(C,null,R(c(l),(h,m)=>(b(),B("div",{key:m,class:P(["h-[64px] p-4 flex items-center justify-center cursor-pointer",`bg-[${h.background}]${c(r)===h.text?" bg-opacity-1":" bg-opacity-50"}`]),onClick:D=>u(h.text)},[w(_,{src:`${c(e).baseURL}/images/${h.icon}.png`,alt:h.icon,width:"16px",height:"16px",loading:"lazy",class:P(`${c(r)===h.text?"opacity-1":"opacity-50"}`)},null,8,["src","alt","class"]),i("span",Vt,S(h.text),1)],10,Ht))),128))]),i("div",It,[(b(!0),B(C,null,R(c(y),h=>(b(),j(k,{data:h,class:"mb-2 last:mb-0",key:h.wallet},null,8,["data"]))),128))])]),i("button",{class:"max-xl:hidden fixed top-3 right-4 rounded-[5px] border border-solid border-[#44E48E] bg-[#44E48E] py-1 px-4",onClick:f},p[2]||(p[2]=[i("span",{class:"text-white font-bold text-[12px] leading-[20px]"},"Logout",-1)]))])}}});export{Gt as default};
