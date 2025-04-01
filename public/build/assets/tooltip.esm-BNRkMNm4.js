import{r as s,D as b,U as Nn,O as S,P as ae,m as Pe,d as q,c as oe,k as Hn,Z as he}from"./app-CucHdo3g.js";function Un(n){if(Array.isArray(n))return n}function Kn(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,c,u,i=[],l=!0,f=!1;try{if(c=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=c.call(t)).done)&&(i.push(r.value),i.length!==e);l=!0);}catch(p){f=!0,o=p}finally{try{if(!l&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw o}}return i}}function $e(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function ln(n,e){if(n){if(typeof n=="string")return $e(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?$e(n,e):void 0}}function Wn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(n,e){return Un(n)||Kn(n,e)||ln(n,e)||Wn()}var Ee=function(e){var t=s.useRef(null);return s.useEffect(function(){return t.current=e,function(){t.current=null}},[e]),t.current},J=function(e){return s.useEffect(function(){return e},[])},De=function(e){var t=e.target,r=t===void 0?"document":t,o=e.type,c=e.listener,u=e.options,i=e.when,l=i===void 0?!0:i,f=s.useRef(null),p=s.useRef(null),v=Ee(c),h=Ee(u),m=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},w=O.target;S.isNotEmpty(w)&&(L(),(O.when||l)&&(f.current=b.getTargetElement(w))),!p.current&&f.current&&(p.current=function(A){return c&&c(A)},f.current.addEventListener(o,p.current,u))},L=function(){p.current&&(f.current.removeEventListener(o,p.current,u),p.current=null)},T=function(){L(),v=null,h=null},C=s.useCallback(function(){l?f.current=b.getTargetElement(r):(L(),f.current=null)},[r,l]);return s.useEffect(function(){C()},[C]),s.useEffect(function(){var R="".concat(v)!=="".concat(c),O=h!==u,w=p.current;w&&(R||O)?(L(),l&&m()):w||T()},[c,u,l]),J(function(){T()}),[m,L]},Kt=function(e,t){var r=s.useState(e),o=B(r,2),c=o[0],u=o[1],i=s.useState(e),l=B(i,2),f=l[0],p=l[1],v=s.useRef(!1),h=s.useRef(null),m=function(){return window.clearTimeout(h.current)};return fe(function(){v.current=!0}),J(function(){m()}),s.useEffect(function(){v.current&&(m(),h.current=window.setTimeout(function(){p(c)},t))},[c,t]),[c,f,u]},Q={},Wt=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=s.useState(function(){return Nn()}),o=B(r,1),c=o[0],u=s.useState(0),i=B(u,2),l=i[0],f=i[1];return s.useEffect(function(){if(t){Q[e]||(Q[e]=[]);var p=Q[e].push(c);return f(p),function(){delete Q[e][p-1];var v=Q[e].length-1,h=S.findLastIndex(Q[e],function(m){return m!==void 0});h!==v&&Q[e].splice(h+1),f(void 0)}}},[e,c,t]),l};function Fn(n){if(Array.isArray(n))return $e(n)}function zn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Gn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nn(n){return Fn(n)||zn(n)||ln(n)||Gn()}var Yn={SIDEBAR:100,SLIDE_MENU:200,DIALOG:300,IMAGE:400,MENU:500,OVERLAY_PANEL:600,PASSWORD:700,CASCADE_SELECT:800,SPLIT_BUTTON:900,SPEED_DIAL:1e3,TOOLTIP:1200},cn={escKeyListeners:new Map,onGlobalKeyDown:function(e){if(e.code==="Escape"){var t=cn.escKeyListeners,r=Math.max.apply(Math,nn(t.keys())),o=t.get(r),c=Math.max.apply(Math,nn(o.keys())),u=o.get(c);u(e)}},refreshGlobalKeyDownListener:function(){var e=b.getTargetElement("document");this.escKeyListeners.size>0?e.addEventListener("keydown",this.onGlobalKeyDown):e.removeEventListener("keydown",this.onGlobalKeyDown)},addListener:function(e,t){var r=this,o=B(t,2),c=o[0],u=o[1],i=this.escKeyListeners;i.has(c)||i.set(c,new Map);var l=i.get(c);if(l.has(u))throw new Error("Unexpected: global esc key listener with priority [".concat(c,", ").concat(u,"] already exists."));return l.set(u,e),this.refreshGlobalKeyDownListener(),function(){l.delete(u),l.size===0&&i.delete(c),r.refreshGlobalKeyDownListener()}}},Vn=function(e){var t=e.callback,r=e.when,o=e.priority;s.useEffect(function(){if(r)return cn.addListener(t,o)},[t,r,o])},pn=function(){var e=s.useContext(ae);return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return Pe(r,e==null?void 0:e.ptOptions)}},fe=function(e){var t=s.useRef(!1);return s.useEffect(function(){if(!t.current)return t.current=!0,e&&e()},[])},fn=function(e){var t=e.target,r=e.listener,o=e.options,c=e.when,u=c===void 0?!0:c,i=s.useContext(ae),l=s.useRef(null),f=s.useRef(null),p=s.useRef([]),v=Ee(r),h=Ee(o),m=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(S.isNotEmpty(O.target)&&(L(),(O.when||u)&&(l.current=b.getTargetElement(O.target))),!f.current&&l.current){var w=i?i.hideOverlaysOnDocumentScrolling:q.hideOverlaysOnDocumentScrolling,A=p.current=b.getScrollableParents(l.current,w);f.current=function(j){return r&&r(j)},A.forEach(function(j){return j.addEventListener("scroll",f.current,o)})}},L=function(){if(f.current){var O=p.current;O.forEach(function(w){return w.removeEventListener("scroll",f.current,o)}),f.current=null}},T=function(){L(),p.current=null,v=null,h=null},C=s.useCallback(function(){u?l.current=b.getTargetElement(t):(L(),l.current=null)},[t,u]);return s.useEffect(function(){C()},[C]),s.useEffect(function(){var R="".concat(v)!=="".concat(r),O=h!==o,w=f.current;w&&(R||O)?(L(),u&&m()):w||T()},[r,o,u]),J(function(){T()}),[m,L]},dn=function(e){var t=e.listener,r=e.when,o=r===void 0?!0:r;return De({target:"window",type:"resize",listener:t,when:o})},Ft=function(e){var t=e.target,r=e.overlay,o=e.listener,c=e.when,u=c===void 0?!0:c,i=e.type,l=i===void 0?"click":i,f=s.useRef(null),p=s.useRef(null),v=De({target:"window",type:l,listener:function(M){o&&o(M,{type:"outside",valid:M.which!==3&&y(M)})}}),h=B(v,2),m=h[0],L=h[1],T=dn({target:"window",listener:function(M){o&&o(M,{type:"resize",valid:!b.isTouchDevice()})}}),C=B(T,2),R=C[0],O=C[1],w=De({target:"window",type:"orientationchange",listener:function(M){o&&o(M,{type:"orientationchange",valid:!0})}}),A=B(w,2),j=A[0],$=A[1],z=fn({target:t,listener:function(M){o&&o(M,{type:"scroll",valid:!0})}}),D=B(z,2),I=D[0],W=D[1],y=function(M){return f.current&&!(f.current.isSameNode(M.target)||f.current.contains(M.target)||p.current&&p.current.contains(M.target))},G=function(){m(),R(),j(),I()},x=function(){L(),O(),$(),W()};return s.useEffect(function(){u?(f.current=b.getTargetElement(t),p.current=b.getTargetElement(r)):(x(),f.current=p.current=null)},[t,r,u]),J(function(){x()}),[G,x]},Bn=0,se=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.useState(!1),o=B(r,2),c=o[0],u=o[1],i=s.useRef(null),l=s.useContext(ae),f=b.isClient()?window.document:void 0,p=t.document,v=p===void 0?f:p,h=t.manual,m=h===void 0?!1:h,L=t.name,T=L===void 0?"style_".concat(++Bn):L,C=t.id,R=C===void 0?void 0:C,O=t.media,w=O===void 0?void 0:O,A=function(I){var W=I.querySelector('style[data-primereact-style-id="'.concat(T,'"]'));if(W)return W;if(R!==void 0){var y=v.getElementById(R);if(y)return y}return v.createElement("style")},j=function(I){c&&e!==I&&(i.current.textContent=I)},$=function(){if(!(!v||c)){var I=(l==null?void 0:l.styleContainer)||v.head;i.current=A(I),i.current.isConnected||(i.current.type="text/css",R&&(i.current.id=R),w&&(i.current.media=w),b.addNonce(i.current,l&&l.nonce||q.nonce),I.appendChild(i.current),T&&i.current.setAttribute("data-primereact-style-id",T)),i.current.textContent=e,u(!0)}},z=function(){!v||!i.current||(b.removeInlineStyle(i.current),u(!1))};return s.useEffect(function(){m||$()},[m]),{id:R,name:T,update:j,unload:z,load:$,isLoaded:c}},zt=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,o=s.useRef(null),c=s.useRef(null),u=s.useCallback(function(){return clearTimeout(o.current)},[o.current]);return s.useEffect(function(){c.current=e}),s.useEffect(function(){function i(){c.current()}if(r)return o.current=setTimeout(i,t),u;u()},[t,r]),J(function(){u()}),[u]},ee=function(e,t){var r=s.useRef(!1);return s.useEffect(function(){if(!r.current){r.current=!0;return}return e&&e()},t)};function Ie(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function Zn(n){if(Array.isArray(n))return Ie(n)}function Xn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function qn(n,e){if(n){if(typeof n=="string")return Ie(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ie(n,e):void 0}}function Jn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tn(n){return Zn(n)||Xn(n)||qn(n)||Jn()}function le(n){"@babel/helpers - typeof";return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(n)}function Qn(n,e){if(le(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(le(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function et(n){var e=Qn(n,"string");return le(e)=="symbol"?e:e+""}function je(n,e,t){return(e=et(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function rn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function H(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?rn(Object(t),!0).forEach(function(r){je(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):rn(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var nt=`
.p-hidden-accessible {
    border: 0;
    padding: 0;
    margin: -1px;
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    white-space: nowrap;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`,tt=`
.p-button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-group .p-button {
    margin: 0;
}

.p-button-group .p-button:not(:last-child) {
    border-right: 0 none;
}

.p-button-group .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-button-group .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-button-group .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-button-group .p-button:focus {
    position: relative;
    z-index: 1;
}
`,rt=`
.p-inputtext {
    margin: 0;
}

.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -0.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label,
.p-float-label .p-mention ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label,
.p-float-label .p-tooltip-target-wrapper ~ label {
    top: -0.75rem;
    font-size: 12px;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-right > i,
.p-input-icon-left > svg,
.p-input-icon-right > svg,
.p-input-icon-left > .p-input-prefix,
.p-input-icon-right > .p-input-suffix {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`,ot=`
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

svg.p-icon {
    pointer-events: auto;
}

svg.p-icon g,
.p-disabled svg.p-icon {
    pointer-events: none;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,at=`
@layer primereact {
    .p-component, .p-component * {
        box-sizing: border-box;
    }

    .p-hidden {
        display: none;
    }

    .p-hidden-space {
        visibility: hidden;
    }

    .p-reset {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        text-decoration: none;
        font-size: 100%;
        list-style: none;
    }

    .p-disabled, .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-component-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-unselectable-text {
        user-select: none;
    }

    .p-scrollbar-measure {
        width: 100px;
        height: 100px;
        overflow: scroll;
        position: absolute;
        top: -9999px;
    }

    @-webkit-keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }

    .p-link {
        text-align: left;
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-link:disabled {
        cursor: default;
    }

    /* Non react overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity .1s linear;
    }

    /* React based overlay animations */
    .p-connected-overlay-enter {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-enter-active {
        opacity: 1;
        transform: scaleY(1);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-enter-done {
        transform: none;
    }

    .p-connected-overlay-exit {
        opacity: 1;
    }

    .p-connected-overlay-exit-active {
        opacity: 0;
        transition: opacity .1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter {
        max-height: 0;
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        max-height: 1000px;
        transition: max-height 1s ease-in-out;
    }

    .p-toggleable-content-enter-done {
        transform: none;
    }

    .p-toggleable-content-exit {
        max-height: 1000px;
    }

    .p-toggleable-content-exit-active {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-sr-only {
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        word-wrap: normal;
    }

    /* @todo Refactor */
    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    `.concat(tt,`
    `).concat(rt,`
    `).concat(ot,`
}
`),N={cProps:void 0,cParams:void 0,cName:void 0,defaultProps:{pt:void 0,ptOptions:void 0,unstyled:!1},context:{},globalCSS:void 0,classes:{},styles:"",extend:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.css,r=H(H({},e.defaultProps),N.defaultProps),o={},c=function(p){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return N.context=v,N.cProps=p,S.getMergedProps(p,r)},u=function(p){return S.getDiffProps(p,r)},i=function(){var p,v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},L=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;v.hasOwnProperty("pt")&&v.pt!==void 0&&(v=v.pt);var T=h,C=/./g.test(T)&&!!m[T.split(".")[0]],R=C?S.toFlatCase(T.split(".")[1]):S.toFlatCase(T),O=m.hostName&&S.toFlatCase(m.hostName),w=O||m.props&&m.props.__TYPE&&S.toFlatCase(m.props.__TYPE)||"",A=R==="transition",j="data-pc-",$=function(k){return k!=null&&k.props?k.hostName?k.props.__TYPE===k.hostName?k.props:$(k.parent):k.parent:void 0},z=function(k){var ne,ue;return((ne=m.props)===null||ne===void 0?void 0:ne[k])||((ue=$(m))===null||ue===void 0?void 0:ue[k])};N.cParams=m,N.cName=w;var D=z("ptOptions")||N.context.ptOptions||{},I=D.mergeSections,W=I===void 0?!0:I,y=D.mergeProps,G=y===void 0?!1:y,x=function(){var k=X.apply(void 0,arguments);return Array.isArray(k)?{className:oe.apply(void 0,tn(k))}:S.isString(k)?{className:k}:k!=null&&k.hasOwnProperty("className")&&Array.isArray(k.className)?{className:oe.apply(void 0,tn(k.className))}:k},F=L?C?vn(x,T,m):mn(x,T,m):void 0,M=C?void 0:xe(Oe(v,w),x,T,m),Z=!A&&H(H({},R==="root"&&je({},"".concat(j,"name"),m.props&&m.props.__parentMetadata?S.toFlatCase(m.props.__TYPE):w)),{},je({},"".concat(j,"section"),R));return W||!W&&M?G?Pe([F,M,Object.keys(Z).length?Z:{}],{classNameMergeFunction:(p=N.context.ptOptions)===null||p===void 0?void 0:p.classNameMergeFunction}):H(H(H({},F),M),Object.keys(Z).length?Z:{}):H(H({},M),Object.keys(Z).length?Z:{})},l=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=p.props,h=p.state,m=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return i((v||{}).pt,w,H(H({},p),A))},L=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return i(w,A,j,!1)},T=function(){return N.context.unstyled||q.unstyled||v.unstyled},C=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return T()?void 0:X(t&&t.classes,w,H({props:v,state:h},A))},R=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(j){var $,z=X(t&&t.inlineStyles,w,H({props:v,state:h},A)),D=X(o,w,H({props:v,state:h},A));return Pe([D,z],{classNameMergeFunction:($=N.context.ptOptions)===null||$===void 0?void 0:$.classNameMergeFunction})}};return{ptm:m,ptmo:L,sx:R,cx:C,isUnstyled:T}};return H(H({getProps:c,getOtherProps:u,setMetaData:l},e),{},{defaultProps:r})}},X=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=String(S.toFlatCase(t)).split("."),c=o.shift(),u=S.isNotEmpty(e)?Object.keys(e).find(function(i){return S.toFlatCase(i)===c}):"";return c?S.isObject(e)?X(S.getItemValue(e[u],r),o.join("."),r):void 0:S.getItemValue(e,r)},Oe=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,o=e==null?void 0:e._usept,c=function(i){var l,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=r?r(i):i,v=S.toFlatCase(t);return(l=f?v!==N.cName?p==null?void 0:p[v]:void 0:p==null?void 0:p[v])!==null&&l!==void 0?l:p};return S.isNotEmpty(o)?{_usept:o,originalValue:c(e.originalValue),value:c(e.value)}:c(e,!0)},xe=function(e,t,r,o){var c=function(T){return t(T,r,o)};if(e!=null&&e.hasOwnProperty("_usept")){var u=e._usept||N.context.ptOptions||{},i=u.mergeSections,l=i===void 0?!0:i,f=u.mergeProps,p=f===void 0?!1:f,v=u.classNameMergeFunction,h=c(e.originalValue),m=c(e.value);return h===void 0&&m===void 0?void 0:S.isString(m)?m:S.isString(h)?h:l||!l&&m?p?Pe([h,m],{classNameMergeFunction:v}):H(H({},h),m):m}return c(e)},it=function(){return Oe(N.context.pt||q.pt,void 0,function(e){return S.getItemValue(e,N.cParams)})},ut=function(){return Oe(N.context.pt||q.pt,void 0,function(e){return X(e,N.cName,N.cParams)||S.getItemValue(e,N.cParams)})},vn=function(e,t,r){return xe(it(),e,t,r)},mn=function(e,t,r){return xe(ut(),e,t,r)},st=function(e){var t=arguments.length>2?arguments[2]:void 0,r=t.name,o=t.styled,c=o===void 0?!1:o,u=t.hostName,i=u===void 0?"":u,l=vn(X,"global.css",N.cParams),f=S.toFlatCase(r),p=se(nt,{name:"base",manual:!0}),v=p.load,h=se(at,{name:"common",manual:!0}),m=h.load,L=se(l,{name:"global",manual:!0}),T=L.load,C=se(e,{name:r,manual:!0}),R=C.load,O=function(A){if(!i){var j=xe(Oe((N.cProps||{}).pt,f),X,"hooks.".concat(A)),$=mn(X,"hooks.".concat(A));j==null||j(),$==null||$()}};O("useMountEffect"),fe(function(){v(),T(),m(),c||R()}),ee(function(){O("useUpdateEffect")}),J(function(){O("useUnmountEffect")})},ke={defaultProps:{__TYPE:"IconBase",className:null,label:null,spin:!1},getProps:function(e){return S.getMergedProps(e,ke.defaultProps)},getOtherProps:function(e){return S.getDiffProps(e,ke.defaultProps)},getPTI:function(e){var t=S.isEmpty(e.label),r=ke.getOtherProps(e),o={className:oe("p-icon",{"p-icon-spin":e.spin},e.className),role:t?void 0:"img","aria-label":t?void 0:e.label,"aria-hidden":t};return S.getMergedProps(r,o)}};function Me(){return Me=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Me.apply(null,arguments)}function ce(n){"@babel/helpers - typeof";return ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ce(n)}function lt(n,e){if(ce(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(ce(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ct(n){var e=lt(n,"string");return ce(e)=="symbol"?e:e+""}function pt(n,e,t){return(e=ct(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ft(n){if(Array.isArray(n))return n}function dt(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,c,u,i=[],l=!0,f=!1;try{if(c=(t=t.call(n)).next,e!==0)for(;!(l=(r=c.call(t)).done)&&(i.push(r.value),i.length!==e);l=!0);}catch(p){f=!0,o=p}finally{try{if(!l&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw o}}return i}}function on(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function vt(n,e){if(n){if(typeof n=="string")return on(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?on(n,e):void 0}}function mt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gt(n,e){return ft(n)||dt(n,e)||vt(n,e)||mt()}var yt=`
@layer primereact {
    .p-ripple {
        overflow: hidden;
        position: relative;
    }
    
    .p-ink {
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        transform: scale(0);
    }
    
    .p-ink-active {
        animation: ripple 0.4s linear;
    }
    
    .p-ripple-disabled .p-ink {
        display: none;
    }
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

`,bt={root:"p-ink"},re=N.extend({defaultProps:{__TYPE:"Ripple",children:void 0},css:{styles:yt,classes:bt},getProps:function(e){return S.getMergedProps(e,re.defaultProps)},getOtherProps:function(e){return S.getDiffProps(e,re.defaultProps)}});function an(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function ht(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?an(Object(t),!0).forEach(function(r){pt(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):an(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var wt=s.memo(s.forwardRef(function(n,e){var t=s.useState(!1),r=gt(t,2),o=r[0],c=r[1],u=s.useRef(null),i=s.useRef(null),l=pn(),f=s.useContext(ae),p=re.getProps(n,f),v=f&&f.ripple||q.ripple,h={props:p};se(re.css.styles,{name:"ripple",manual:!v});var m=re.setMetaData(ht({},h)),L=m.ptm,T=m.cx,C=function(){return u.current&&u.current.parentElement},R=function(){i.current&&i.current.addEventListener("pointerdown",w)},O=function(){i.current&&i.current.removeEventListener("pointerdown",w)},w=function(I){var W=b.getOffset(i.current),y=I.pageX-W.left+document.body.scrollTop-b.getWidth(u.current)/2,G=I.pageY-W.top+document.body.scrollLeft-b.getHeight(u.current)/2;A(y,G)},A=function(I,W){!u.current||getComputedStyle(u.current,null).display==="none"||(b.removeClass(u.current,"p-ink-active"),$(),u.current.style.top=W+"px",u.current.style.left=I+"px",b.addClass(u.current,"p-ink-active"))},j=function(I){b.removeClass(I.currentTarget,"p-ink-active")},$=function(){if(u.current&&!b.getHeight(u.current)&&!b.getWidth(u.current)){var I=Math.max(b.getOuterWidth(i.current),b.getOuterHeight(i.current));u.current.style.height=I+"px",u.current.style.width=I+"px"}};if(s.useImperativeHandle(e,function(){return{props:p,getInk:function(){return u.current},getTarget:function(){return i.current}}}),fe(function(){c(!0)}),ee(function(){o&&u.current&&(i.current=C(),$(),R())},[o]),ee(function(){u.current&&!i.current&&(i.current=C(),$(),R())}),J(function(){u.current&&(i.current=null,O())}),!v)return null;var z=l({"aria-hidden":!0,className:oe(T("root"))},re.getOtherProps(p),L("root"));return s.createElement("span",Me({role:"presentation",ref:u},z,{onAnimationEnd:j}))}));wt.displayName="Ripple";function Pt(n){if(Array.isArray(n))return n}function Et(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,c,u,i=[],l=!0,f=!1;try{if(c=(t=t.call(n)).next,e!==0)for(;!(l=(r=c.call(t)).done)&&(i.push(r.value),i.length!==e);l=!0);}catch(p){f=!0,o=p}finally{try{if(!l&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw o}}return i}}function un(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function St(n,e){if(n){if(typeof n=="string")return un(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?un(n,e):void 0}}function Ot(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xt(n,e){return Pt(n)||Et(n,e)||St(n,e)||Ot()}var Ne={defaultProps:{__TYPE:"Portal",element:null,appendTo:null,visible:!1,onMounted:null,onUnmounted:null,children:void 0},getProps:function(e){return S.getMergedProps(e,Ne.defaultProps)},getOtherProps:function(e){return S.getDiffProps(e,Ne.defaultProps)}},gn=s.memo(function(n){var e=Ne.getProps(n),t=s.useContext(ae),r=s.useState(e.visible&&b.isClient()),o=xt(r,2),c=o[0],u=o[1];fe(function(){b.isClient()&&!c&&(u(!0),e.onMounted&&e.onMounted())}),ee(function(){e.onMounted&&e.onMounted()},[c]),J(function(){e.onUnmounted&&e.onUnmounted()});var i=e.element||e.children;if(i&&c){var l=e.appendTo||t&&t.appendTo||q.appendTo;return S.isFunction(l)&&(l=l()),l||(l=document.body),l==="self"?i:Hn.createPortal(i,l)}return null});gn.displayName="Portal";function Se(){return Se=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Se.apply(null,arguments)}function pe(n){"@babel/helpers - typeof";return pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe(n)}function Tt(n,e){if(pe(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(pe(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function _t(n){var e=Tt(n,"string");return pe(e)=="symbol"?e:e+""}function yn(n,e,t){return(e=_t(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function He(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function Rt(n){if(Array.isArray(n))return He(n)}function Lt(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function bn(n,e){if(n){if(typeof n=="string")return He(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?He(n,e):void 0}}function At(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ct(n){return Rt(n)||Lt(n)||bn(n)||At()}function kt(n){if(Array.isArray(n))return n}function $t(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,c,u,i=[],l=!0,f=!1;try{if(c=(t=t.call(n)).next,e!==0)for(;!(l=(r=c.call(t)).done)&&(i.push(r.value),i.length!==e);l=!0);}catch(p){f=!0,o=p}finally{try{if(!l&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw o}}return i}}function Dt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(n,e){return kt(n)||$t(n,e)||bn(n,e)||Dt()}var It={root:function(e){var t=e.positionState,r=e.classNameState;return oe("p-tooltip p-component",yn({},"p-tooltip-".concat(t),!0),r)},arrow:"p-tooltip-arrow",text:"p-tooltip-text"},jt={arrow:function(e){var t=e.context;return{top:t.bottom?"0":t.right||t.left||!t.right&&!t.left&&!t.top&&!t.bottom?"50%":null,bottom:t.top?"0":null,left:t.right||!t.right&&!t.left&&!t.top&&!t.bottom?"0":t.top||t.bottom?"50%":null,right:t.left?"0":null}}},Mt=`
@layer primereact {
    .p-tooltip {
        position: absolute;
        padding: .25em .5rem;
        /* #3687: Tooltip prevent scrollbar flickering */
        top: -9999px;
        left: -9999px;
    }
    
    .p-tooltip.p-tooltip-right,
    .p-tooltip.p-tooltip-left {
        padding: 0 .25rem;
    }
    
    .p-tooltip.p-tooltip-top,
    .p-tooltip.p-tooltip-bottom {
        padding:.25em 0;
    }
    
    .p-tooltip .p-tooltip-text {
       white-space: pre-line;
       word-break: break-word;
    }
    
    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    
    .p-tooltip-right .p-tooltip-arrow {
        top: 50%;
        left: 0;
        margin-top: -.25rem;
        border-width: .25em .25em .25em 0;
    }
    
    .p-tooltip-left .p-tooltip-arrow {
        top: 50%;
        right: 0;
        margin-top: -.25rem;
        border-width: .25em 0 .25em .25rem;
    }
    
    .p-tooltip.p-tooltip-top {
        padding: .25em 0;
    }
    
    .p-tooltip-top .p-tooltip-arrow {
        bottom: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: .25em .25em 0;
    }
    
    .p-tooltip-bottom .p-tooltip-arrow {
        top: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: 0 .25em .25rem;
    }

    .p-tooltip-target-wrapper {
        display: inline-flex;
    }
}
`,we=N.extend({defaultProps:{__TYPE:"Tooltip",appendTo:null,at:null,autoHide:!0,autoZIndex:!0,baseZIndex:0,className:null,closeOnEscape:!1,content:null,disabled:!1,event:null,hideDelay:0,hideEvent:"mouseleave",id:null,mouseTrack:!1,mouseTrackLeft:5,mouseTrackTop:5,my:null,onBeforeHide:null,onBeforeShow:null,onHide:null,onShow:null,position:"right",showDelay:0,showEvent:"mouseenter",showOnDisabled:!1,style:null,target:null,updateDelay:0,children:void 0},css:{classes:It,styles:Mt,inlineStyles:jt}});function sn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Nt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?sn(Object(t),!0).forEach(function(r){yn(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):sn(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var Ht=s.memo(s.forwardRef(function(n,e){var t=pn(),r=s.useContext(ae),o=we.getProps(n,r),c=s.useState(!1),u=te(c,2),i=u[0],l=u[1],f=s.useState(o.position||"right"),p=te(f,2),v=p[0],h=p[1],m=s.useState(""),L=te(m,2),T=L[0],C=L[1],R=s.useState(!1),O=te(R,2),w=O[0],A=O[1],j={props:o,state:{visible:i,position:v,className:T},context:{right:v==="right",left:v==="left",top:v==="top",bottom:v==="bottom"}},$=we.setMetaData(j),z=$.ptm,D=$.cx,I=$.sx,W=$.isUnstyled;st(we.css.styles,W,{name:"tooltip"}),Vn({callback:function(){Y()},when:o.closeOnEscape,priority:[Yn.TOOLTIP,0]});var y=s.useRef(null),G=s.useRef(null),x=s.useRef(null),F=s.useRef(null),M=s.useRef(!0),Z=s.useRef({}),ie=s.useRef(null),k=dn({listener:function(a){!b.isTouchDevice()&&Y(a)}}),ne=te(k,2),ue=ne[0],hn=ne[1],wn=fn({target:x.current,listener:function(a){Y(a)},when:i}),Ue=te(wn,2),Pn=Ue[0],En=Ue[1],Sn=function(a){return!(o.content||U(a,"tooltip"))},On=function(a){return!(o.content||U(a,"tooltip")||o.children)},Te=function(a){return U(a,"mousetrack")||o.mouseTrack},Ke=function(a){return U(a,"disabled")==="true"||Fe(a,"disabled")||o.disabled},We=function(a){return U(a,"showondisabled")||o.showOnDisabled},de=function(){return U(x.current,"autohide")||o.autoHide},U=function(a,d){return Fe(a,"data-pr-".concat(d))?a.getAttribute("data-pr-".concat(d)):null},Fe=function(a,d){return a&&a.hasAttribute(d)},ze=function(a){var d=[U(a,"showevent")||o.showEvent],_=[U(a,"hideevent")||o.hideEvent];if(Te(a))d=["mousemove"],_=["mouseleave"];else{var P=U(a,"event")||o.event;P==="focus"&&(d=["focus"],_=["blur"]),P==="both"&&(d=["focus","mouseenter"],_=w?["blur"]:["mouseleave","blur"])}return{showEvents:d,hideEvents:_}},Ge=function(a){return U(a,"position")||v},xn=function(a){var d=U(a,"mousetracktop")||o.mouseTrackTop,_=U(a,"mousetrackleft")||o.mouseTrackLeft;return{top:d,left:_}},Ye=function(a,d){if(G.current){var _=U(a,"tooltip")||o.content;_?(G.current.innerHTML="",G.current.appendChild(document.createTextNode(_)),d()):o.children&&d()}},Ve=function(a){Ye(x.current,function(){var d=ie.current,_=d.pageX,P=d.pageY;o.autoZIndex&&!he.get(y.current)&&he.set("tooltip",y.current,r&&r.autoZIndex||q.autoZIndex,o.baseZIndex||r&&r.zIndex.tooltip||q.zIndex.tooltip),y.current.style.left="",y.current.style.top="",de()&&(y.current.style.pointerEvents="none");var E=Te(x.current)||a==="mouse";(E&&!F.current||E)&&(F.current={width:b.getOuterWidth(y.current),height:b.getOuterHeight(y.current)}),Be(x.current,{x:_,y:P},a)})},ve=function(a){a.type&&a.type==="focus"&&A(!0),x.current=a.currentTarget;var d=Ke(x.current),_=On(We(x.current)&&d?x.current.firstChild:x.current);if(!(_||d))if(ie.current=a,i)me("updateDelay",Ve);else{var P=ge(o.onBeforeShow,{originalEvent:a,target:x.current});P&&me("showDelay",function(){l(!0),ge(o.onShow,{originalEvent:a,target:x.current})})}},Y=function(a){if(a&&a.type==="blur"&&A(!1),Ze(),i){var d=ge(o.onBeforeHide,{originalEvent:a,target:x.current});d&&me("hideDelay",function(){!de()&&M.current===!1||(he.clear(y.current),b.removeClass(y.current,"p-tooltip-active"),l(!1),ge(o.onHide,{originalEvent:a,target:x.current}))})}},Be=function(a,d,_){var P=0,E=0,K=_||v;if((Te(a)||K=="mouse")&&d){var V={width:b.getOuterWidth(y.current),height:b.getOuterHeight(y.current)};P=d.x,E=d.y;var Je=xn(a),ye=Je.top,be=Je.left;switch(K){case"left":P=P-(V.width+be),E=E-(V.height/2-ye);break;case"right":case"mouse":P=P+be,E=E-(V.height/2-ye);break;case"top":P=P-(V.width/2-be),E=E-(V.height+ye);break;case"bottom":P=P-(V.width/2-be),E=E+ye;break}P<=0||F.current.width>V.width?(y.current.style.left="0px",y.current.style.right=window.innerWidth-V.width-P+"px"):(y.current.style.right="",y.current.style.left=P+"px"),y.current.style.top=E+"px",b.addClass(y.current,"p-tooltip-active")}else{var Le=b.findCollisionPosition(K),Dn=U(a,"my")||o.my||Le.my,In=U(a,"at")||o.at||Le.at;y.current.style.padding="0px",b.flipfitCollision(y.current,a,Dn,In,function(Ae){var Qe=Ae.at,Ce=Qe.x,jn=Qe.y,Mn=Ae.my.x,en=o.at?Ce!=="center"&&Ce!==Mn?Ce:jn:Ae.at["".concat(Le.axis)];y.current.style.padding="",h(en),Tn(en),b.addClass(y.current,"p-tooltip-active")})}},Tn=function(a){if(y.current){var d=getComputedStyle(y.current);a==="left"?y.current.style.left=parseFloat(d.left)-parseFloat(d.paddingLeft)*2+"px":a==="top"&&(y.current.style.top=parseFloat(d.top)-parseFloat(d.paddingTop)*2+"px")}},_n=function(){de()||(M.current=!1)},Rn=function(a){de()||(M.current=!0,Y(a))},Ln=function(a){if(a){var d=ze(a),_=d.showEvents,P=d.hideEvents,E=Xe(a);_.forEach(function(K){return E==null?void 0:E.addEventListener(K,ve)}),P.forEach(function(K){return E==null?void 0:E.addEventListener(K,Y)})}},An=function(a){if(a){var d=ze(a),_=d.showEvents,P=d.hideEvents,E=Xe(a);_.forEach(function(K){return E==null?void 0:E.removeEventListener(K,ve)}),P.forEach(function(K){return E==null?void 0:E.removeEventListener(K,Y)})}},me=function(a,d){Ze();var _=U(x.current,a.toLowerCase())||o[a];_?Z.current["".concat(a)]=setTimeout(function(){return d()},_):d()},ge=function(a){if(a){for(var d=arguments.length,_=new Array(d>1?d-1:0),P=1;P<d;P++)_[P-1]=arguments[P];var E=a.apply(void 0,_);return E===void 0&&(E=!0),E}return!0},Ze=function(){Object.values(Z.current).forEach(function(a){return clearTimeout(a)})},Xe=function(a){if(a){if(We(a)){if(!a.hasWrapper){var d=document.createElement("div"),_=a.nodeName==="INPUT";return _?b.addMultipleClasses(d,"p-tooltip-target-wrapper p-inputwrapper"):b.addClass(d,"p-tooltip-target-wrapper"),a.parentNode.insertBefore(d,a),d.appendChild(a),a.hasWrapper=!0,d}return a.parentElement}else if(a.hasWrapper){var P;(P=a.parentElement).replaceWith.apply(P,Ct(a.parentElement.childNodes)),delete a.hasWrapper}return a}return null},Cn=function(a){Re(a),_e(a)},_e=function(a){qe(a||o.target,Ln)},Re=function(a){qe(a||o.target,An)},qe=function(a,d){if(a=S.getRefElement(a),a)if(b.isElement(a))d(a);else{var _=function(E){var K=b.find(document,E);K.forEach(function(V){d(V)})};a instanceof Array?a.forEach(function(P){_(P)}):_(a)}};fe(function(){i&&x.current&&Ke(x.current)&&Y()}),ee(function(){return _e(),function(){Re()}},[ve,Y,o.target]),ee(function(){if(i){var g=Ge(x.current),a=U(x.current,"classname");h(g),C(a),Ve(g),ue(),Pn()}else h(o.position||"right"),C(""),x.current=null,F.current=null,M.current=!0;return function(){hn(),En()}},[i]),ee(function(){var g=Ge(x.current);i&&g!=="mouse"&&me("updateDelay",function(){Ye(x.current,function(){Be(x.current)})})},[o.content]),J(function(){Y(),he.clear(y.current)}),s.useImperativeHandle(e,function(){return{props:o,updateTargetEvents:Cn,loadTargetEvents:_e,unloadTargetEvents:Re,show:ve,hide:Y,getElement:function(){return y.current},getTarget:function(){return x.current}}});var kn=function(){var a=Sn(x.current),d=t({id:o.id,className:oe(o.className,D("root",{positionState:v,classNameState:T})),style:o.style,role:"tooltip","aria-hidden":i,onMouseEnter:function(K){return _n()},onMouseLeave:function(K){return Rn(K)}},we.getOtherProps(o),z("root")),_=t({className:D("arrow"),style:I("arrow",Nt({},j))},z("arrow")),P=t({className:D("text")},z("text"));return s.createElement("div",Se({ref:y},d),s.createElement("div",_),s.createElement("div",Se({ref:G},P),a&&o.children))};if(i){var $n=kn();return s.createElement(gn,{element:$n,appendTo:o.appendTo,visible:!0})}return null}));Ht.displayName="Tooltip";export{N as C,Yn as E,ke as I,gn as P,wt as R,Ht as T,st as a,ee as b,J as c,fe as d,zt as e,Vn as f,Wt as g,Ft as h,De as i,Kt as j,Ee as k,se as l,dn as m,pn as u};
