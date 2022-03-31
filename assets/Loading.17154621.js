import{q as b,a0 as S,f,as as I,a9 as B,at as F,d as g,s as T,ai as z,t as i,U as A,x as d,au as M,v as N,L as s,z as j,A as O}from"./index.812d6df8.js";function ve(e){return e.replace(/#|\(|\)|,|\s/g,"_")}const h=B("n-form-item");function be(e,{defaultSize:t="medium",mergedSize:r,mergedDisabled:a}={}){const o=b(h,null);S(h,null);const n=f(r?()=>r(o):()=>{const{size:l}=e;if(l)return l;if(o){const{mergedSize:m}=o;if(m.value!==void 0)return m.value}return t}),R=f(a?()=>a(o):()=>{const{disabled:l}=e;return l!==void 0?l:o?o.disabled.value:!1}),C=f(()=>{const{status:l}=e;return l||(o==null?void 0:o.mergedValidationStatus.value)});return I(()=>{o&&o.restoreValidation()}),{mergedSizeRef:n,mergedDisabledRef:R,mergedStatusRef:C,nTriggerFormBlur(){o&&o.handleContentBlur()},nTriggerFormChange(){o&&o.handleContentChange()},nTriggerFormFocus(){o&&o.handleContentFocus()},nTriggerFormInput(){o&&o.handleContentInput()}}}function U(e,t,r){var a=-1,o=e.length;t<0&&(t=-t>o?0:o+t),r=r>o?o:r,r<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var n=Array(o);++a<o;)n[a]=e[a+t];return n}function V(e,t,r){var a=e.length;return r=r===void 0?a:r,!t&&r>=a?e:U(e,t,r)}var P="\\ud800-\\udfff",E="\\u0300-\\u036f",W="\\ufe20-\\ufe2f",q="\\u20d0-\\u20ff",H=E+W+q,J="\\ufe0e\\ufe0f",K="\\u200d",L=RegExp("["+K+P+H+J+"]");function p(e){return L.test(e)}function X(e){return e.split("")}var w="\\ud800-\\udfff",Y="\\u0300-\\u036f",Z="\\ufe20-\\ufe2f",D="\\u20d0-\\u20ff",G=Y+Z+D,Q="\\ufe0e\\ufe0f",ee="["+w+"]",c="["+G+"]",u="\\ud83c[\\udffb-\\udfff]",te="(?:"+c+"|"+u+")",y="[^"+w+"]",k="(?:\\ud83c[\\udde6-\\uddff]){2}",$="[\\ud800-\\udbff][\\udc00-\\udfff]",re="\\u200d",_=te+"?",x="["+Q+"]?",oe="(?:"+re+"(?:"+[y,k,$].join("|")+")"+x+_+")*",ae=x+_+oe,ne="(?:"+[y+c+"?",c,k,$,ee].join("|")+")",ie=RegExp(u+"(?="+u+")|"+ne+ae,"g");function se(e){return e.match(ie)||[]}function le(e){return p(e)?se(e):X(e)}function de(e){return function(t){t=F(t);var r=p(t)?le(t):void 0,a=r?r[0]:t.charAt(0),o=r?V(r,1).join(""):t.slice(1);return a[e]()+o}}var fe=de("toUpperCase"),ce=fe;function pe(e,t){return g({name:ce(e),setup(){var r;const a=(r=b(T,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var o;const n=(o=a==null?void 0:a.value)===null||o===void 0?void 0:o[e];return n?n():t}}})}var ue=g({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const r=z();return()=>i(A,{name:"icon-switch-transition",appear:r.value},t)}});const{cubicBezierEaseInOut:ge}=M;function v({originalTransform:e="",left:t=0,top:r=0,transition:a=`all .3s ${ge} !important`}={}){return[d("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:t,top:r,opacity:0}),d("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:r,opacity:1}),d("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:r,transition:a})]}var me=d([d("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),d("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),d("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),d("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),N("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[s("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[v()]),s("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[s("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),s("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[s("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[s("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),s("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[s("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),s("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[s("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),s("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[v({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),we=g({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},show:{type:Boolean,default:!0}},setup(e){j("-base-loading",me,O(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:r,stroke:a,scale:o}=this,n=t/o;return i("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},i(ue,null,{default:()=>this.show?i("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},i("div",{class:`${e}-base-loading__container`},i("div",{class:`${e}-base-loading__container-layer`},i("div",{class:`${e}-base-loading__container-layer-left`},i("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*n} ${2*n}`,xmlns:"http://www.w3.org/2000/svg",style:{color:a}},i("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:n,cy:n,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),i("div",{class:`${e}-base-loading__container-layer-patch`},i("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*n} ${2*n}`,xmlns:"http://www.w3.org/2000/svg",style:{color:a}},i("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:n,cy:n,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),i("div",{class:`${e}-base-loading__container-layer-right`},i("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*n} ${2*n}`,xmlns:"http://www.w3.org/2000/svg",style:{color:a}},i("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:n,cy:n,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t})))))):i("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}});export{we as N,v as a,ue as b,ve as c,pe as r,be as u};
