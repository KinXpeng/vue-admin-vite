var Yt=Object.defineProperty;var Zt=(t,e,r)=>e in t?Yt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var X=(t,e,r)=>(Zt(t,typeof e!="symbol"?e+"":e,r),r);import{b as gt,d as se,u as Ct,a as _,i as Ne,o as O,c as re,r as Pe,e as ae,w as J,f as bt,v as wt,g as h,h as xe,n as P,t as Rt,T as St,j as Ot,k as Kt,l as er,m as ze,p as tr,q as Tt,s as rr,x as V,y as Je,z as nr,A as sr,B as ar,C as or,D as F,E as z,F as Ve,G as ir,H as ur,I as lr,J as cr,K as fr,L as dr,M as pr,N as We,O as Xe,P as At,Q as _t,R as hr,S as mr,U as Ge,V as vr,W as Er,X as yr,Y as gr,Z as Cr,$ as G}from"./index.95851a34.js";import{E as br}from"./el-button.0d167221.js";const wr=gt({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Rr=["textContent"],Sr={name:"ElBadge"},Or=se({...Sr,props:wr,setup(t,{expose:e}){const r=t,s=Ct("badge"),n=_(()=>r.isDot?"":Ne(r.value)&&Ne(r.max)?r.max<r.value?`${r.max}+`:`${r.value}`:`${r.value}`);return e({content:n}),(a,o)=>(O(),re("div",{class:P(h(s).b())},[Pe(a.$slots,"default"),ae(St,{name:`${h(s).namespace.value}-zoom-in-center`,persisted:""},{default:J(()=>[bt(xe("sup",{class:P([h(s).e("content"),h(s).em("content",a.type),h(s).is("fixed",!!a.$slots.default),h(s).is("dot",a.isDot)]),textContent:Rt(h(n))},null,10,Rr),[[wt,!a.hidden&&(h(n)||a.isDot)]])]),_:1},8,["name"])],2))}});var Tr=Ot(Or,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const Ar=Kt(Tr),Nt=["success","info","warning","error"],g=tr({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:"",id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:Tt?document.body:void 0}),_r=gt({customClass:{type:String,default:g.customClass},center:{type:Boolean,default:g.center},dangerouslyUseHTMLString:{type:Boolean,default:g.dangerouslyUseHTMLString},duration:{type:Number,default:g.duration},icon:{type:er,default:g.icon},id:{type:String,default:g.id},message:{type:ze([String,Object,Function]),default:g.message},onClose:{type:ze(Function),required:!1},showClose:{type:Boolean,default:g.showClose},type:{type:String,values:Nt,default:g.type},offset:{type:Number,default:g.offset},zIndex:{type:Number,default:g.zIndex},grouping:{type:Boolean,default:g.grouping},repeatNum:{type:Number,default:g.repeatNum}}),Nr={destroy:()=>!0},T=rr([]),xr=t=>{const e=T.findIndex(n=>n.id===t),r=T[e];let s;return e>0&&(s=T[e-1]),{current:r,prev:s}},Dr=t=>{const{prev:e}=xr(t);return e?e.vm.exposeProxy.bottom:0},Pr=["id"],Ur=["innerHTML"],Br={name:"ElMessage"},Lr=se({...Br,props:_r,emits:Nr,setup(t,{expose:e}){const r=t,{Close:s}=fr,n=Ct("message"),a=V(),o=V(!1),i=V(0);let u;const f=_(()=>r.type?r.type==="error"?"danger":r.type:"info"),d=_(()=>{const m=r.type;return{[n.bm("icon",m)]:m&&Je[m]}}),p=_(()=>r.icon||Je[r.type]||""),l=_(()=>Dr(r.id)),y=_(()=>r.offset+l.value),ce=_(()=>i.value+y.value),N=_(()=>({top:`${y.value}px`,zIndex:r.zIndex}));function A(){r.duration!==0&&({stop:u}=dr(()=>{S()},r.duration))}function x(){u==null||u()}function S(){o.value=!1}function D({code:m}){m===pr.esc&&S()}return nr(()=>{A(),o.value=!0}),sr(()=>r.repeatNum,()=>{x(),A()}),ar(document,"keydown",D),or(a,()=>{i.value=a.value.getBoundingClientRect().height}),e({visible:o,bottom:ce,close:S}),(m,c)=>(O(),F(St,{name:h(n).b("fade"),onBeforeLeave:m.onClose,onAfterLeave:c[0]||(c[0]=Me=>m.$emit("destroy")),persisted:""},{default:J(()=>[bt(xe("div",{id:m.id,ref_key:"messageRef",ref:a,class:P([h(n).b(),{[h(n).m(m.type)]:m.type&&!m.icon},h(n).is("center",m.center),h(n).is("closable",m.showClose),m.customClass]),style:cr(h(N)),role:"alert",onMouseenter:x,onMouseleave:A},[m.repeatNum>1?(O(),F(h(Ar),{key:0,value:m.repeatNum,type:h(f),class:P(h(n).e("badge"))},null,8,["value","type","class"])):z("v-if",!0),h(p)?(O(),F(h(Ve),{key:1,class:P([h(n).e("icon"),h(d)])},{default:J(()=>[(O(),F(ir(h(p))))]),_:1},8,["class"])):z("v-if",!0),Pe(m.$slots,"default",{},()=>[m.dangerouslyUseHTMLString?(O(),re(ur,{key:1},[z(" Caution here, message could've been compromised, never use user's input as message "),xe("p",{class:P(h(n).e("content")),innerHTML:m.message},null,10,Ur)],2112)):(O(),re("p",{key:0,class:P(h(n).e("content"))},Rt(m.message),3))]),m.showClose?(O(),F(h(Ve),{key:2,class:P(h(n).e("closeBtn")),onClick:lr(S,["stop"])},{default:J(()=>[ae(h(s))]),_:1},8,["class","onClick"])):z("v-if",!0)],46,Pr),[[wt,o.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Ir=Ot(Lr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let qr=1;const xt=t=>{const e=!t||Xe(t)||At(t)||_t(t)?{message:t}:t,r={...g,...e};if(!r.appendTo)r.appendTo=document.body;else if(Xe(r.appendTo)){let s=document.querySelector(r.appendTo);hr(s)||(s=document.body),r.appendTo=s}return r},$r=t=>{const e=T.indexOf(t);if(e===-1)return;T.splice(e,1);const{handler:r}=t;r.close()},Fr=({appendTo:t,...e},r)=>{const{nextZIndex:s}=mr(),n=`message_${qr++}`,a=e.onClose,o=document.createElement("div"),i={...e,zIndex:s()+e.zIndex,id:n,onClose:()=>{a==null||a(),$r(p)},onDestroy:()=>{Ge(null,o)}},u=ae(Ir,i,_t(i.message)||At(i.message)?{default:i.message}:null);u.appContext=r||k._context,Ge(u,o),t.appendChild(o.firstElementChild);const f=u.component,p={id:n,vnode:u,vm:f,handler:{close:()=>{f.exposeProxy.visible=!1}},props:u.component.props};return p},k=(t={},e)=>{if(!Tt)return{close:()=>{}};if(Ne(We.max)&&T.length>=We.max)return{close:()=>{}};const r=xt(t);if(r.grouping&&T.length){const n=T.find(({vnode:a})=>{var o;return((o=a.props)==null?void 0:o.message)===r.message});if(n)return n.props.repeatNum+=1,n.props.type=r.type,n.handler}const s=Fr(r,e);return T.push(s),s.handler};Nt.forEach(t=>{k[t]=(e={},r)=>{const s=xt(e);return k({...s,type:t},r)}});function kr(t){for(const e of T)(!t||t===e.props.type)&&e.handler.close()}k.closeAll=kr;k._context=null;const Z=vr(k,"$message"),Dt=(t=!1)=>{const e=V(t);return[e,s=>{if(s!==void 0)return e.value=s;e.value=!e.value}]},Q=(t,e)=>{if(!t){const r=`api ${e} is ${t}, \u8BF7\u5728useCRUD\u53C2\u6570\u4E2D\u4F20\u9012`;throw Z.error(r),new Error(r)}};function Mr(t){const e=V([]);async function r(i){return Q(t.create,"create"),console.log("api create success",i),"success"}async function s(i){return Q(t.read,"read"),console.log("api read success",i),"read"}async function n(i){return Q(t.delete,"delete"),console.log("api delete success",i),"delete"}async function a(i){return Q(t.update,"update"),console.log("api update success",i),"update"}async function o(i,u){return await{create:r,read:s,update:a,delete:n}[i](u)}return{list:e,_on:o}}const jr=(t={page:1,size:10})=>{const e=Er({page:1,size:10,...t}),[r,s]=Dt();return[e,r,s]},Hr=gr("\u6743\u9650\u6309\u94AE"),zr={name:"AuthButton"},Jr=se({...zr,props:{auth:{default:""}},emits:["authClick"],setup(t,{emit:e}){const r=t,[s,n]=Dt(),a=()=>{s.value=!0,e("authClick",n)},o=_(()=>["add"].includes(r.auth));return(i,u)=>{const f=br;return h(o)?(O(),F(f,yr({key:0},i.$attrs,{onClick:a,loading:h(s)}),{default:J(()=>[Pe(i.$slots,"default",{},()=>[Hr])]),_:3},16,["loading"])):z("",!0)}}});var Pt={exports:{}},Ue={exports:{}},Ut=function(e,r){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(r,n)}},Vr=Ut,Be=Object.prototype.toString,Le=function(t){return function(e){var r=Be.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function L(t){return t=t.toLowerCase(),function(r){return Le(r)===t}}function Ie(t){return Array.isArray(t)}function ne(t){return typeof t>"u"}function Wr(t){return t!==null&&!ne(t)&&t.constructor!==null&&!ne(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var Bt=L("ArrayBuffer");function Xr(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Bt(t.buffer),e}function Gr(t){return typeof t=="string"}function Qr(t){return typeof t=="number"}function Lt(t){return t!==null&&typeof t=="object"}function K(t){if(Le(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var Yr=L("Date"),Zr=L("File"),Kr=L("Blob"),en=L("FileList");function qe(t){return Be.call(t)==="[object Function]"}function tn(t){return Lt(t)&&qe(t.pipe)}function rn(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||Be.call(t)===e||qe(t.toString)&&t.toString()===e)}var nn=L("URLSearchParams");function sn(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function an(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function $e(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),Ie(t))for(var r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function De(){var t={};function e(n,a){K(t[a])&&K(n)?t[a]=De(t[a],n):K(n)?t[a]=De({},n):Ie(n)?t[a]=n.slice():t[a]=n}for(var r=0,s=arguments.length;r<s;r++)$e(arguments[r],e);return t}function on(t,e,r){return $e(e,function(n,a){r&&typeof n=="function"?t[a]=Vr(n,r):t[a]=n}),t}function un(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function ln(t,e,r,s){t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,r&&Object.assign(t.prototype,r)}function cn(t,e,r){var s,n,a,o={};e=e||{};do{for(s=Object.getOwnPropertyNames(t),n=s.length;n-- >0;)a=s[n],o[a]||(e[a]=t[a],o[a]=!0);t=Object.getPrototypeOf(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e}function fn(t,e,r){t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;var s=t.indexOf(e,r);return s!==-1&&s===r}function dn(t){if(!t)return null;var e=t.length;if(ne(e))return null;for(var r=new Array(e);e-- >0;)r[e]=t[e];return r}var pn=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),E={isArray:Ie,isArrayBuffer:Bt,isBuffer:Wr,isFormData:rn,isArrayBufferView:Xr,isString:Gr,isNumber:Qr,isObject:Lt,isPlainObject:K,isUndefined:ne,isDate:Yr,isFile:Zr,isBlob:Kr,isFunction:qe,isStream:tn,isURLSearchParams:nn,isStandardBrowserEnv:an,forEach:$e,merge:De,extend:on,trim:sn,stripBOM:un,inherits:ln,toFlatObject:cn,kindOf:Le,kindOfTest:L,endsWith:fn,toArray:dn,isTypedArray:pn,isFileList:en},q=E;function Qe(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var It=function(e,r,s){if(!r)return e;var n;if(s)n=s(r);else if(q.isURLSearchParams(r))n=r.toString();else{var a=[];q.forEach(r,function(u,f){u===null||typeof u>"u"||(q.isArray(u)?f=f+"[]":u=[u],q.forEach(u,function(p){q.isDate(p)?p=p.toISOString():q.isObject(p)&&(p=JSON.stringify(p)),a.push(Qe(f)+"="+Qe(p))}))}),n=a.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},hn=E;function oe(){this.handlers=[]}oe.prototype.use=function(e,r,s){return this.handlers.push({fulfilled:e,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};oe.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};oe.prototype.forEach=function(e){hn.forEach(this.handlers,function(s){s!==null&&e(s)})};var mn=oe,vn=E,En=function(e,r){vn.forEach(e,function(n,a){a!==r&&a.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[a])})},qt=E;function M(t,e,r,s,n){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),s&&(this.request=s),n&&(this.response=n)}qt.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var $t=M.prototype,Ft={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){Ft[t]={value:t}});Object.defineProperties(M,Ft);Object.defineProperty($t,"isAxiosError",{value:!0});M.from=function(t,e,r,s,n,a){var o=Object.create($t);return qt.toFlatObject(t,o,function(u){return u!==Error.prototype}),M.call(o,t.message,e,r,s,n),o.name=t.name,a&&Object.assign(o,a),o};var H=M,kt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},R=E;function yn(t,e){e=e||new FormData;var r=[];function s(a){return a===null?"":R.isDate(a)?a.toISOString():R.isArrayBuffer(a)||R.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,o){if(R.isPlainObject(a)||R.isArray(a)){if(r.indexOf(a)!==-1)throw Error("Circular reference detected in "+o);r.push(a),R.forEach(a,function(u,f){if(!R.isUndefined(u)){var d=o?o+"."+f:f,p;if(u&&!o&&typeof u=="object"){if(R.endsWith(f,"{}"))u=JSON.stringify(u);else if(R.endsWith(f,"[]")&&(p=R.toArray(u))){p.forEach(function(l){!R.isUndefined(l)&&e.append(d,s(l))});return}}n(u,d)}}),r.pop()}else e.append(o,s(a))}return n(t),e}var Mt=yn,he,Ye;function gn(){if(Ye)return he;Ye=1;var t=H;return he=function(r,s,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?r(n):s(new t("Request failed with status code "+n.status,[t.ERR_BAD_REQUEST,t.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},he}var me,Ze;function Cn(){if(Ze)return me;Ze=1;var t=E;return me=t.isStandardBrowserEnv()?function(){return{write:function(s,n,a,o,i,u){var f=[];f.push(s+"="+encodeURIComponent(n)),t.isNumber(a)&&f.push("expires="+new Date(a).toGMTString()),t.isString(o)&&f.push("path="+o),t.isString(i)&&f.push("domain="+i),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(s){var n=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(s){this.write(s,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),me}var bn=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},wn=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},Rn=bn,Sn=wn,jt=function(e,r){return e&&!Rn(r)?Sn(e,r):r},ve,Ke;function On(){if(Ke)return ve;Ke=1;var t=E,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return ve=function(s){var n={},a,o,i;return s&&t.forEach(s.split(`
`),function(f){if(i=f.indexOf(":"),a=t.trim(f.substr(0,i)).toLowerCase(),o=t.trim(f.substr(i+1)),a){if(n[a]&&e.indexOf(a)>=0)return;a==="set-cookie"?n[a]=(n[a]?n[a]:[]).concat([o]):n[a]=n[a]?n[a]+", "+o:o}}),n},ve}var Ee,et;function Tn(){if(et)return Ee;et=1;var t=E;return Ee=t.isStandardBrowserEnv()?function(){var r=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a"),n;function a(o){var i=o;return r&&(s.setAttribute("href",i),i=s.href),s.setAttribute("href",i),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:s.pathname.charAt(0)==="/"?s.pathname:"/"+s.pathname}}return n=a(window.location.href),function(i){var u=t.isString(i)?a(i):i;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}(),Ee}var ye,tt;function ie(){if(tt)return ye;tt=1;var t=H,e=E;function r(s){t.call(this,s==null?"canceled":s,t.ERR_CANCELED),this.name="CanceledError"}return e.inherits(r,t,{__CANCEL__:!0}),ye=r,ye}var ge,rt;function An(){return rt||(rt=1,ge=function(e){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""}),ge}var Ce,nt;function st(){if(nt)return Ce;nt=1;var t=E,e=gn(),r=Cn(),s=It,n=jt,a=On(),o=Tn(),i=kt,u=H,f=ie(),d=An();return Ce=function(l){return new Promise(function(ce,N){var A=l.data,x=l.headers,S=l.responseType,D;function m(){l.cancelToken&&l.cancelToken.unsubscribe(D),l.signal&&l.signal.removeEventListener("abort",D)}t.isFormData(A)&&t.isStandardBrowserEnv()&&delete x["Content-Type"];var c=new XMLHttpRequest;if(l.auth){var Me=l.auth.username||"",Gt=l.auth.password?unescape(encodeURIComponent(l.auth.password)):"";x.Authorization="Basic "+btoa(Me+":"+Gt)}var fe=n(l.baseURL,l.url);c.open(l.method.toUpperCase(),s(fe,l.params,l.paramsSerializer),!0),c.timeout=l.timeout;function je(){if(!!c){var w="getAllResponseHeaders"in c?a(c.getAllResponseHeaders()):null,I=!S||S==="text"||S==="json"?c.responseText:c.response,B={data:I,status:c.status,statusText:c.statusText,headers:w,config:l,request:c};e(function(pe){ce(pe),m()},function(pe){N(pe),m()},B),c=null}}if("onloadend"in c?c.onloadend=je:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(je)},c.onabort=function(){!c||(N(new u("Request aborted",u.ECONNABORTED,l,c)),c=null)},c.onerror=function(){N(new u("Network Error",u.ERR_NETWORK,l,c,c)),c=null},c.ontimeout=function(){var I=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded",B=l.transitional||i;l.timeoutErrorMessage&&(I=l.timeoutErrorMessage),N(new u(I,B.clarifyTimeoutError?u.ETIMEDOUT:u.ECONNABORTED,l,c)),c=null},t.isStandardBrowserEnv()){var He=(l.withCredentials||o(fe))&&l.xsrfCookieName?r.read(l.xsrfCookieName):void 0;He&&(x[l.xsrfHeaderName]=He)}"setRequestHeader"in c&&t.forEach(x,function(I,B){typeof A>"u"&&B.toLowerCase()==="content-type"?delete x[B]:c.setRequestHeader(B,I)}),t.isUndefined(l.withCredentials)||(c.withCredentials=!!l.withCredentials),S&&S!=="json"&&(c.responseType=l.responseType),typeof l.onDownloadProgress=="function"&&c.addEventListener("progress",l.onDownloadProgress),typeof l.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",l.onUploadProgress),(l.cancelToken||l.signal)&&(D=function(w){!c||(N(!w||w&&w.type?new f:w),c.abort(),c=null)},l.cancelToken&&l.cancelToken.subscribe(D),l.signal&&(l.signal.aborted?D():l.signal.addEventListener("abort",D))),A||(A=null);var de=d(fe);if(de&&["http","https","file"].indexOf(de)===-1){N(new u("Unsupported protocol "+de+":",u.ERR_BAD_REQUEST,l));return}c.send(A)})},Ce}var be,at;function _n(){return at||(at=1,be=null),be}var v=E,ot=En,it=H,Nn=kt,xn=Mt,Dn={"Content-Type":"application/x-www-form-urlencoded"};function ut(t,e){!v.isUndefined(t)&&v.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Pn(){var t;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(t=st()),t}function Un(t,e,r){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(t)}var ue={transitional:Nn,adapter:Pn(),transformRequest:[function(e,r){if(ot(r,"Accept"),ot(r,"Content-Type"),v.isFormData(e)||v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return ut(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var s=v.isObject(e),n=r&&r["Content-Type"],a;if((a=v.isFileList(e))||s&&n==="multipart/form-data"){var o=this.env&&this.env.FormData;return xn(a?{"files[]":e}:e,o&&new o)}else if(s||n==="application/json")return ut(r,"application/json"),Un(e);return e}],transformResponse:[function(e){var r=this.transitional||ue.transitional,s=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,a=!s&&this.responseType==="json";if(a||n&&v.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?it.from(o,it.ERR_BAD_RESPONSE,this,null,this.response):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_n()},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};v.forEach(["delete","get","head"],function(e){ue.headers[e]={}});v.forEach(["post","put","patch"],function(e){ue.headers[e]=v.merge(Dn)});var Fe=ue,Bn=E,Ln=Fe,In=function(e,r,s){var n=this||Ln;return Bn.forEach(s,function(o){e=o.call(n,e,r)}),e},we,lt;function Ht(){return lt||(lt=1,we=function(e){return!!(e&&e.__CANCEL__)}),we}var ct=E,Re=In,qn=Ht(),$n=Fe,Fn=ie();function Se(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Fn}var kn=function(e){Se(e),e.headers=e.headers||{},e.data=Re.call(e,e.data,e.headers,e.transformRequest),e.headers=ct.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ct.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||$n.adapter;return r(e).then(function(n){return Se(e),n.data=Re.call(e,n.data,n.headers,e.transformResponse),n},function(n){return qn(n)||(Se(e),n&&n.response&&(n.response.data=Re.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},b=E,zt=function(e,r){r=r||{};var s={};function n(d,p){return b.isPlainObject(d)&&b.isPlainObject(p)?b.merge(d,p):b.isPlainObject(p)?b.merge({},p):b.isArray(p)?p.slice():p}function a(d){if(b.isUndefined(r[d])){if(!b.isUndefined(e[d]))return n(void 0,e[d])}else return n(e[d],r[d])}function o(d){if(!b.isUndefined(r[d]))return n(void 0,r[d])}function i(d){if(b.isUndefined(r[d])){if(!b.isUndefined(e[d]))return n(void 0,e[d])}else return n(void 0,r[d])}function u(d){if(d in r)return n(e[d],r[d]);if(d in e)return n(void 0,e[d])}var f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u};return b.forEach(Object.keys(e).concat(Object.keys(r)),function(p){var l=f[p]||a,y=l(p);b.isUndefined(y)&&l!==u||(s[p]=y)}),s},Oe,ft;function Jt(){return ft||(ft=1,Oe={version:"0.27.2"}),Oe}var Mn=Jt().version,U=H,ke={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){ke[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});var dt={};ke.transitional=function(e,r,s){function n(a,o){return"[Axios v"+Mn+"] Transitional option '"+a+"'"+o+(s?". "+s:"")}return function(a,o,i){if(e===!1)throw new U(n(o," has been removed"+(r?" in "+r:"")),U.ERR_DEPRECATED);return r&&!dt[o]&&(dt[o]=!0,console.warn(n(o," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(a,o,i):!0}};function jn(t,e,r){if(typeof t!="object")throw new U("options must be an object",U.ERR_BAD_OPTION_VALUE);for(var s=Object.keys(t),n=s.length;n-- >0;){var a=s[n],o=e[a];if(o){var i=t[a],u=i===void 0||o(i,a,t);if(u!==!0)throw new U("option "+a+" must be "+u,U.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new U("Unknown option "+a,U.ERR_BAD_OPTION)}}var Hn={assertOptions:jn,validators:ke},Vt=E,zn=It,pt=mn,ht=kn,le=zt,Jn=jt,Wt=Hn,$=Wt.validators;function j(t){this.defaults=t,this.interceptors={request:new pt,response:new pt}}j.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=le(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var s=r.transitional;s!==void 0&&Wt.assertOptions(s,{silentJSONParsing:$.transitional($.boolean),forcedJSONParsing:$.transitional($.boolean),clarifyTimeoutError:$.transitional($.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(r)===!1||(a=a&&y.synchronous,n.unshift(y.fulfilled,y.rejected))});var o=[];this.interceptors.response.forEach(function(y){o.push(y.fulfilled,y.rejected)});var i;if(!a){var u=[ht,void 0];for(Array.prototype.unshift.apply(u,n),u=u.concat(o),i=Promise.resolve(r);u.length;)i=i.then(u.shift(),u.shift());return i}for(var f=r;n.length;){var d=n.shift(),p=n.shift();try{f=d(f)}catch(l){p(l);break}}try{i=ht(f)}catch(l){return Promise.reject(l)}for(;o.length;)i=i.then(o.shift(),o.shift());return i};j.prototype.getUri=function(e){e=le(this.defaults,e);var r=Jn(e.baseURL,e.url);return zn(r,e.params,e.paramsSerializer)};Vt.forEach(["delete","get","head","options"],function(e){j.prototype[e]=function(r,s){return this.request(le(s||{},{method:e,url:r,data:(s||{}).data}))}});Vt.forEach(["post","put","patch"],function(e){function r(s){return function(a,o,i){return this.request(le(i||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}j.prototype[e]=r(),j.prototype[e+"Form"]=r(!0)});var Vn=j,Te,mt;function Wn(){if(mt)return Te;mt=1;var t=ie();function e(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var s;this.promise=new Promise(function(o){s=o});var n=this;this.promise.then(function(a){if(!!n._listeners){var o,i=n._listeners.length;for(o=0;o<i;o++)n._listeners[o](a);n._listeners=null}}),this.promise.then=function(a){var o,i=new Promise(function(u){n.subscribe(u),o=u}).then(a);return i.cancel=function(){n.unsubscribe(o)},i},r(function(o){n.reason||(n.reason=new t(o),s(n.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.prototype.subscribe=function(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]},e.prototype.unsubscribe=function(s){if(!!this._listeners){var n=this._listeners.indexOf(s);n!==-1&&this._listeners.splice(n,1)}},e.source=function(){var s,n=new e(function(o){s=o});return{token:n,cancel:s}},Te=e,Te}var Ae,vt;function Xn(){return vt||(vt=1,Ae=function(e){return function(s){return e.apply(null,s)}}),Ae}var _e,Et;function Gn(){if(Et)return _e;Et=1;var t=E;return _e=function(r){return t.isObject(r)&&r.isAxiosError===!0},_e}var yt=E,Qn=Ut,ee=Vn,Yn=zt,Zn=Fe;function Xt(t){var e=new ee(t),r=Qn(ee.prototype.request,e);return yt.extend(r,ee.prototype,e),yt.extend(r,e),r.create=function(n){return Xt(Yn(t,n))},r}var C=Xt(Zn);C.Axios=ee;C.CanceledError=ie();C.CancelToken=Wn();C.isCancel=Ht();C.VERSION=Jt().version;C.toFormData=Mt;C.AxiosError=H;C.Cancel=C.CanceledError;C.all=function(e){return Promise.all(e)};C.spread=Xn();C.isAxiosError=Gn();Ue.exports=C;Ue.exports.default=C;(function(t){t.exports=Ue.exports})(Pt);const Kn=Cr(Pt.exports);var W=(t=>(t[t.SUCCESS=200]="SUCCESS",t[t.BAD_REQUEST=400]="BAD_REQUEST",t[t.No_AUTHENTICATION=401]="No_AUTHENTICATION",t[t.Fail=500]="Fail",t))(W||{}),te=(t=>(t.CODE="code",t.RESULT="data",t.MESSAGE="message",t))(te||{});const es={[W.Fail](){console.log("\u5931\u8D25")},[W.BAD_REQUEST](){console.log("\u574F\u8BF7\u6C42")},[W.No_AUTHENTICATION](){console.log("\u6CA1\u6709token")}};class ts{constructor(e,r=""){X(this,"instance",null);X(this,"get",(e,r={},s={})=>{const n={url:e,method:"GET",params:r,...s};return this.request(n)});X(this,"post",(e,r={},s={})=>{const n={url:e,method:"POST",data:r,...s};return this.request(n)});const{baseURL:s,...n}=e;this.instance=Kn.create({baseURL:r?s+r:s,timeout:1e3*20,withCredentials:!0,...n}),this.requestInterceptor(),this.responseInterceptor()}requestInterceptor(){this.instance.interceptors.request.use((e={})=>(e.headers&&(e.headers.token="eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxMjM3MDMwIiwidGVuYW50SWQiOiIxMjM3MDI3IiwiaWF0IjoxNjU5OTM3NTUzLCJleHAiOjE2NjAwMjM5NTN9.ruYBVlDabATDICx82V3ZInJoym0snaY-77nMNIs5NWo"),e),e=>(Z({type:"error",message:e.message}),Promise.reject(e)))}responseInterceptor(){this.instance.interceptors.response.use(e=>new Promise((r,s)=>{const{status:n,data:a}=e;n!==200&&s(a),a[te.CODE]!==W.SUCCESS&&(Z({type:"error",message:a[te.MESSAGE]}),es[a[te.CODE]](),s(a)),r(a)}),e=>(Z({type:"error",message:e.message}),Promise.reject(e)))}request(e){return this.instance.request(e)}}const{get:rs,post:os}=new ts({baseURL:"/api"}),Y=()=>rs("/admin/cart/get-all"),is=se({__name:"a1",async setup(t){let e,r;const{_on:s,list:n}=Mr({read:Y,create:Y,update:Y,delete:Y}),[a]=jr({size:100});[e,r]=G(()=>s("create",{username:123})),await e,r(),[e,r]=G(()=>s("delete",[2])),await e,r(),[e,r]=G(()=>s("update",{id:1})),await e,r(),[e,r]=G(()=>s("read",a)),await e,r(),console.log(n.value,"value");const o=(i,u)=>{console.log(u),setTimeout(()=>i(),3e3)};return(i,u)=>{const f=Jr;return O(),re("div",null,[ae(f,{auth:"add",onAuthClick:u[0]||(u[0]=d=>o(d,123))})])}}});export{is as default};
