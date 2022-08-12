import{a0 as S,a1 as J,a2 as M,b as R,a3 as W,l as I,a4 as q,a5 as x,u as _,a as m,a6 as L,d as D,a7 as O,a8 as Q,a9 as X,aa as Y,x as Z,ab as oo,o as u,c as k,H as eo,r as B,D as y,w,G as z,n as h,g as e,F as E,E as G,J as to,j as P,ac as ao,W as so,ad as T,k as no,ae as lo}from"./index.a42153da.js";const F=Symbol("buttonGroupContextKey"),ro=()=>{const a=S(J,void 0),r=S(M,void 0);return{form:a,formItem:r}},io=["default","primary","success","warning","info","danger","text",""],co=["button","submit","reset"],C=R({size:W,disabled:Boolean,type:{type:String,values:io,default:""},icon:{type:I,default:""},nativeType:{type:String,values:co,default:"button"},loading:Boolean,loadingIcon:{type:I,default:()=>q},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),uo={click:a=>a instanceof MouseEvent};function c(a,r=20){return a.mix("#141414",r).toString()}function bo(a){const r=x(),s=_("button");return m(()=>{let n={};const i=a.color;if(i){const t=new L(i),b=a.dark?t.tint(20).toString():c(t,20);if(a.plain)n=s.cssVarBlock({"bg-color":a.dark?c(t,90):t.tint(90).toString(),"text-color":i,"border-color":a.dark?c(t,50):t.tint(50).toString(),"hover-text-color":`var(${s.cssVarName("color-white")})`,"hover-bg-color":i,"hover-border-color":i,"active-bg-color":b,"active-text-color":`var(${s.cssVarName("color-white")})`,"active-border-color":b}),r.value&&(n[s.cssVarBlockName("disabled-bg-color")]=a.dark?c(t,90):t.tint(90).toString(),n[s.cssVarBlockName("disabled-text-color")]=a.dark?c(t,50):t.tint(50).toString(),n[s.cssVarBlockName("disabled-border-color")]=a.dark?c(t,80):t.tint(80).toString());else{const l=a.dark?c(t,30):t.tint(30).toString(),f=t.isDark()?`var(${s.cssVarName("color-white")})`:`var(${s.cssVarName("color-black")})`;if(n=s.cssVarBlock({"bg-color":i,"text-color":f,"border-color":i,"hover-bg-color":l,"hover-text-color":f,"hover-border-color":l,"active-bg-color":b,"active-border-color":b}),r.value){const v=a.dark?c(t,50):t.tint(50).toString();n[s.cssVarBlockName("disabled-bg-color")]=v,n[s.cssVarBlockName("disabled-text-color")]=a.dark?"rgba(255, 255, 255, 0.5)":`var(${s.cssVarName("color-white")})`,n[s.cssVarBlockName("disabled-border-color")]=v}}}return n})}const po=["aria-disabled","disabled","autofocus","type"],mo={name:"ElButton"},fo=D({...mo,props:C,emits:uo,setup(a,{expose:r,emit:s}){const n=a,i=O();Q({from:"type.text",replacement:"type.link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},m(()=>n.type==="text"));const t=S(F,void 0),b=X("button"),l=_("button"),{form:f}=ro(),v=Y(m(()=>t==null?void 0:t.size)),g=x(),$=Z(),N=m(()=>n.type||(t==null?void 0:t.type)||""),j=m(()=>{var o,d,p;return(p=(d=n.autoInsertSpace)!=null?d:(o=b.value)==null?void 0:o.autoInsertSpace)!=null?p:!1}),V=m(()=>{var o;const d=(o=i.default)==null?void 0:o.call(i);if(j.value&&(d==null?void 0:d.length)===1){const p=d[0];if((p==null?void 0:p.type)===oo){const H=p.children;return/^\p{Unified_Ideograph}{2}$/u.test(H.trim())}}return!1}),U=bo(n),A=o=>{n.nativeType==="reset"&&(f==null||f.resetFields()),s("click",o)};return r({ref:$,size:v,type:N,disabled:g,shouldAddSpace:V}),(o,d)=>(u(),k("button",{ref_key:"_ref",ref:$,class:h([e(l).b(),e(l).m(e(N)),e(l).m(e(v)),e(l).is("disabled",e(g)),e(l).is("loading",o.loading),e(l).is("plain",o.plain),e(l).is("round",o.round),e(l).is("circle",o.circle),e(l).is("text",o.text),e(l).is("link",o.link),e(l).is("has-bg",o.bg)]),"aria-disabled":e(g)||o.loading,disabled:e(g)||o.loading,autofocus:o.autofocus,type:o.nativeType,style:to(e(U)),onClick:A},[o.loading?(u(),k(eo,{key:0},[o.$slots.loading?B(o.$slots,"loading",{key:0}):(u(),y(e(E),{key:1,class:h(e(l).is("loading"))},{default:w(()=>[(u(),y(z(o.loadingIcon)))]),_:1},8,["class"]))],64)):o.icon||o.$slots.icon?(u(),y(e(E),{key:1},{default:w(()=>[o.icon?(u(),y(z(o.icon),{key:0})):B(o.$slots,"icon",{key:1})]),_:3})):G("v-if",!0),o.$slots.default?(u(),k("span",{key:2,class:h({[e(l).em("text","expand")]:e(V)})},[B(o.$slots,"default")],2)):G("v-if",!0)],14,po))}});var vo=P(fo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const go={size:C.size,type:C.type},yo={name:"ElButtonGroup"},ko=D({...yo,props:go,setup(a){const r=a;ao(F,so({size:T(r,"size"),type:T(r,"type")}));const s=_("button");return(n,i)=>(u(),k("div",{class:h(`${e(s).b("group")}`)},[B(n.$slots,"default")],2))}});var K=P(ko,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const ho=no(vo,{ButtonGroup:K});lo(K);export{ho as E};