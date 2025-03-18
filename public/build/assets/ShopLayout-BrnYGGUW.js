import{r as o,P as ye,Z as z,d as A,c as L,D as B,O as U,l as ge,I as we,u as je,j as e,x as Se}from"./app-DWU1Fm4c.js";import{C as Ne,u as ke,a as Ee,g as Ce,f as Oe,E as Ie,i as _e,d as Pe,b as Z,c as Me,P as Te,R as De}from"./portal.esm-DicAkOg8.js";import{C as Y,T as Re}from"./index.esm-mn0KBL92.js";import{_ as Le}from"./utils-BpcRv5go.js";import{D as Ae}from"./dialog.esm-KEOGxQdm.js";import{m as D}from"./proxy-C6B_zEHo.js";function N(){return N=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},N.apply(null,arguments)}function O(n){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},O(n)}function He(n,r){if(O(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,r||"default");if(O(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function ze(n){var r=He(n,"string");return O(r)=="symbol"?r:r+""}function Be(n,r,t){return(r=ze(r))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function Ue(n){if(Array.isArray(n))return n}function Ze(n,r){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,a,p,u,m=[],f=!0,g=!1;try{if(p=(t=t.call(n)).next,r!==0)for(;!(f=(i=p.call(t)).done)&&(m.push(i.value),m.length!==r);f=!0);}catch(j){g=!0,a=j}finally{try{if(!f&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(g)throw a}}return m}}function J(n,r){(r==null||r>n.length)&&(r=n.length);for(var t=0,i=Array(r);t<r;t++)i[t]=n[t];return i}function $e(n,r){if(n){if(typeof n=="string")return J(n,r);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?J(n,r):void 0}}function Ke(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $(n,r){return Ue(n)||Ze(n,r)||$e(n,r)||Ke()}var Ve={closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",mask:function(r){var t=r.props,i=r.maskVisibleState,a=["left","right","top","bottom"],p=a.find(function(u){return u===t.position});return L("p-sidebar-mask",p&&!t.fullScreen?"p-sidebar-".concat(p):"",{"p-component-overlay p-component-overlay-enter":t.modal,"p-sidebar-mask-scrollblocker":t.blockScroll,"p-sidebar-visible":i,"p-sidebar-full":t.fullScreen},t.maskClassName)},header:function(r){var t=r.props;return L("p-sidebar-header",{"p-sidebar-custom-header":t.header})},content:"p-sidebar-content",icons:"p-sidebar-icons",root:function(r){r.props;var t=r.context;return L("p-sidebar p-component",{"p-input-filled":t&&t.inputStyle==="filled"||A.inputStyle==="filled","p-ripple-disabled":t&&t.ripple===!1||A.ripple===!1})},transition:"p-sidebar"},We=`
@layer primereact {
    .p-sidebar-mask {
        display: none;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        background-color: transparent;
        transition-property: background-color;
    }
    
    .p-sidebar-visible {
        display: flex;
    }
    
    .p-sidebar-mask.p-component-overlay {
        pointer-events: auto;
    }
    
    .p-sidebar {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
    }
    
    .p-sidebar-content {
        overflow-y: auto;
        flex-grow: 1;
    }
    
    .p-sidebar-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    .p-sidebar-custom-header {
        justify-content: space-between;
    }
    
    .p-sidebar-icons {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
    
    .p-sidebar-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-sidebar-full .p-sidebar {
        transition: none;
        transform: none;
        width: 100vw;
        height: 100vh;
        max-height: 100%;
        top: 0px;
        left: 0px;
    }
    
    /* Animation */
    /* Top, Bottom, Left and Right */
    .p-sidebar-top .p-sidebar-enter,
    .p-sidebar-top .p-sidebar-exit-active {
        transform: translate3d(0px, -100%, 0px);
    }
    
    .p-sidebar-bottom .p-sidebar-enter,
    .p-sidebar-bottom .p-sidebar-exit-active {
        transform: translate3d(0px, 100%, 0px);
    }
    
    .p-sidebar-left .p-sidebar-enter,
    .p-sidebar-left .p-sidebar-exit-active {
        transform: translate3d(-100%, 0px, 0px);
    }
    
    .p-sidebar-right .p-sidebar-enter,
    .p-sidebar-right .p-sidebar-exit-active {
        transform: translate3d(100%, 0px, 0px);
    }
    
    .p-sidebar-top .p-sidebar-enter-active,
    .p-sidebar-bottom .p-sidebar-enter-active,
    .p-sidebar-left .p-sidebar-enter-active,
    .p-sidebar-right .p-sidebar-enter-active {
        transform: translate3d(0px, 0px, 0px);
        transition: all 0.3s;
    }
    
    .p-sidebar-top .p-sidebar-enter-done,
    .p-sidebar-bottom .p-sidebar-enter-done,
    .p-sidebar-left .p-sidebar-enter-done,
    .p-sidebar-right .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-top .p-sidebar-exit-active,
    .p-sidebar-bottom .p-sidebar-exit-active,
    .p-sidebar-left .p-sidebar-exit-active,
    .p-sidebar-right .p-sidebar-exit-active {
        transition: all 0.3s;
    }
    
    /* Full */
    .p-sidebar-full .p-sidebar-enter {
        opacity: 0;
        transform: scale(0.5);
    }
    
    .p-sidebar-full .p-sidebar-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 0.15s cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-sidebar-full .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-full .p-sidebar-exit-active {
        opacity: 0;
        transform: scale(0.5);
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Size */
    .p-sidebar-left .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-right .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-top .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-bottom .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-left .p-sidebar-sm,
    .p-sidebar-right .p-sidebar-sm {
        width: 20rem;
    }
    
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-md {
        width: 40rem;
    }
    
    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-lg {
        width: 60rem;
    }
    
    .p-sidebar-top .p-sidebar-sm,
    .p-sidebar-bottom .p-sidebar-sm {
        height: 10rem;
    }
    
    .p-sidebar-top .p-sidebar-md,
    .p-sidebar-bottom .p-sidebar-md {
        height: 20rem;
    }
    
    .p-sidebar-top .p-sidebar-lg,
    .p-sidebar-bottom .p-sidebar-lg {
        height: 30rem;
    }
    
    .p-sidebar-left .p-sidebar-view,
    .p-sidebar-right .p-sidebar-view,
    .p-sidebar-top .p-sidebar-view,
    .p-sidebar-bottom .p-sidebar-view {
        width: 100%;
        height: 100%;
    }
    
    .p-sidebar-left .p-sidebar-content,
    .p-sidebar-right .p-sidebar-content,
    .p-sidebar-top .p-sidebar-content,
    .p-sidebar-bottom .p-sidebar-content {
        width: 100%;
        height: 100%;
    }
    
    @media screen and (max-width: 64em) {
        .p-sidebar-left .p-sidebar-lg,
        .p-sidebar-left .p-sidebar-md,
        .p-sidebar-right .p-sidebar-lg,
        .p-sidebar-right .p-sidebar-md {
            width: 20rem;
        }
    }        
}
`,qe={mask:function(r){var t=r.props;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t.position==="left"?"flex-start":t.position==="right"?"flex-end":"center",alignItems:t.position==="top"?"flex-start":t.position==="bottom"?"flex-end":"center"}}},R=Ne.extend({defaultProps:{__TYPE:"Sidebar",appendTo:null,ariaCloseLabel:null,baseZIndex:0,blockScroll:!1,children:void 0,className:null,closeIcon:null,closeOnEscape:!0,content:null,dismissable:!0,fullScreen:!1,header:null,icons:null,id:null,maskClassName:null,maskStyle:null,modal:!0,onHide:null,onShow:null,position:"left",showCloseIcon:!0,style:null,transitionOptions:null,visible:!1},css:{classes:Ve,styles:We,inlineStyles:qe}});function X(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);r&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,i)}return t}function Fe(n){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?X(Object(t),!0).forEach(function(i){Be(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}var G=o.forwardRef(function(n,r){var t=ke(),i=o.useContext(ye),a=R.getProps(n,i),p=o.useState(!1),u=$(p,2),m=u[0],f=u[1],g=o.useState(!1),j=$(g,2),l=j[0],I=j[1],S=R.setMetaData({props:a,state:{containerVisible:m}}),h=S.ptm,y=S.cx,_=S.sx,k=S.isUnstyled;Ee(R.css.styles,k,{name:"sidebar"});var b=o.useRef(null),x=o.useRef(null),w=o.useRef(null),P=l&&a.closeOnEscape,M=Ce("sidebar",P);Oe({callback:function(c){E(c)},when:P&&M,priority:[Ie.SIDEBAR,M]});var H=_e({type:"click",listener:function(c){c.button===0&&Q(c)&&E(c)}}),s=$(H,2),v=s[0],K=s[1],Q=function(c){return b&&b.current&&!b.current.contains(c.target)},ee=function(){var c=document.activeElement,C=c&&b&&b.current.contains(c);!C&&a.showCloseIcon&&w.current&&w.current.focus()},te=function(c){a.dismissable&&a.modal&&x.current===c.target&&E(c)},E=function(c){a.onHide(),c.preventDefault()},ne=function(){a.onShow&&a.onShow(),ee(),se()},re=function(){a.modal&&!k()&&B.addClass(x.current,"p-component-overlay-leave")},ae=function(){z.clear(x.current),f(!1),V()},se=function(){a.dismissable&&!a.modal&&v(),a.blockScroll&&B.blockBodyScroll()},V=function(){K(),a.blockScroll&&B.unblockBodyScroll()};o.useImperativeHandle(r,function(){return{props:a,getElement:function(){return b.current},getMask:function(){return x.current},getCloseIcon:function(){return w.current}}}),Pe(function(){a.visible&&f(!0)}),Z(function(){a.visible&&!m&&f(!0),a.visible!==l&&m&&I(a.visible)},[a.visible]),Z(function(){m&&(z.set("modal",x.current,i&&i.autoZIndex||A.autoZIndex,a.baseZIndex||i&&i.zIndex.modal||A.zIndex.modal),I(!0))},[m]),Z(function(){l&&(K(),a.dismissable&&!a.modal&&v())},[a.dismissable,a.modal,l]),Me(function(){V(),x.current&&z.clear(x.current)});var ie=function(){var c=a.ariaCloseLabel||ge("close"),C=t({type:"button",ref:w,className:y("closeButton"),onClick:function(ve){return E(ve)},"aria-label":c},h("closeButton")),T=t({className:y("closeIcon")},h("closeIcon")),he=a.closeIcon||o.createElement(Re,T),xe=we.getJSXIcon(he,Fe({},T),{props:a});return a.showCloseIcon?o.createElement("button",C,xe,o.createElement(De,null)):null},le=function(){return a.header?U.getJSXElement(a.header,a):null},oe=function(){return a.icons?U.getJSXElement(a.icons,a):null},W=t({ref:x,style:_("mask"),className:y("mask",{maskVisibleState:m}),onMouseDown:function(c){return te(c)}},h("mask")),q=t({id:a.id,className:L(a.className,y("root",{context:i})),style:a.style,role:"complementary"},R.getOtherProps(a),h("root")),ce=t({className:y("header")},h("header")),de=t({className:y("content")},h("content")),pe=t({className:y("icons")},h("icons")),me={enter:a.fullScreen?150:300,exit:a.fullScreen?150:300},F=t({classNames:y("transition"),in:l,timeout:me,options:a.transitionOptions,unmountOnExit:!0,onEntered:ne,onExiting:re,onExited:ae},h("transition")),ue=function(){var c={closeIconRef:w,hide:E};return o.createElement("div",W,o.createElement(Y,N({nodeRef:b},F),o.createElement("div",N({ref:b},q),U.getJSXElement(n.content,c))))},be=function(){var c=ie(),C=oe(),T=le();return o.createElement("div",W,o.createElement(Y,N({nodeRef:b},F),o.createElement("div",N({ref:b},q),o.createElement("div",ce,T,o.createElement("div",pe,C,c)),o.createElement("div",de,a.children))))},fe=function(){var c=n!=null&&n.content?ue():be();return o.createElement(Te,{element:c,appendTo:a.appendTo,visible:!0})};return m&&fe()});G.displayName="Sidebar";const nt=({children:n})=>{const[r,t]=o.useState(!1),[i,a]=o.useState(!1),[p,u]=o.useState(""),[m,f]=o.useState(!1),[g,j]=o.useState(""),{cart:l,loading:I,updateCartName:S,clearCart:h,createOrder:y,getShareLink:_,fetchCart:k}=je();o.useEffect(()=>{const s=()=>{a(window.scrollY>0)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),o.useEffect(()=>{const s=localStorage.getItem("cart_name");s&&u(s)},[]),o.useEffect(()=>{l!=null&&l.cart_name&&(u(l.cart_name),localStorage.setItem("cart_name",l.cart_name))},[l==null?void 0:l.cart_name]);const b=async s=>{const v=s.target.value;u(v),localStorage.setItem("cart_name",v)},x=async()=>{if(p.trim())try{await S(p),await k(),localStorage.setItem("cart_name",p)}catch(s){console.error("Sepet ismi güncellenirken hata oluştu:",s)}},w=async()=>{try{const s=await _();j(s.share_url),f(!0)}catch(s){console.error("Paylaşım linki alınırken hata oluştu:",s)}},P=async()=>{try{const s=await _(),v=encodeURIComponent(`Merhaba Zeon MOTO, sepetim linktedir dönüşünüzü bekliyor olacağım

${s.share_url}`);window.open(`https://wa.me/905070004777?text=${v}`,"_blank"),await k()}catch(s){console.error("WhatsApp siparişi oluşturulurken hata oluştu:",s)}},M=async()=>{if(window.confirm("Sepetinizi boşaltmak istediğinize emin misiniz?"))try{await h()}catch(s){console.error("Sepet boşaltılırken hata oluştu:",s)}},H=()=>!l||!l.items||l.items.length===0?0:l.items.reduce((s,v)=>s+v.product.price*v.quantity,0);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx(D.nav,{initial:{y:-100},animate:{y:0},className:`fixed w-full z-50 transition-all duration-300 ${i?"bg-white shadow-lg":"bg-transparent"}`,children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsxs(Se,{href:route("new-shop.index"),className:"flex items-center space-x-2",children:[e.jsx("img",{src:"/logo.png",alt:"Zeon Moto",className:"h-10 w-10"}),e.jsx("span",{className:"text-xl font-bold text-yellow-600",children:"ZEON MOTO"})]}),e.jsx("div",{className:"flex items-center space-x-4",children:e.jsxs(D.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>t(!0),className:"relative p-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-yellow-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),l&&l.items&&l.items.length>0&&e.jsx(D.span,{initial:{scale:0},animate:{scale:1},className:"absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center",children:l.items.length})]})})]})})}),e.jsx("main",{className:"pt-16",children:n}),e.jsx(G,{visible:r,position:"right",header:e.jsx("div",{className:"flex items-center justify-between ",children:e.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"Sepetim"})}),onHide:()=>t(!1),className:"w-full sm:w-[400px]",children:e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsx("div",{className:"shadow-sm",children:e.jsx("div",{className:"px-4 py-3",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("label",{htmlFor:"cart_name",className:"text-sm font-medium text-gray-700 whitespace-nowrap",children:"Sepet İsmi:"}),e.jsx("input",{type:"text",id:"cart_name",value:p,onChange:b,placeholder:"Sepetinize bir isim verin...",className:"flex-1 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 rounded-md shadow-sm text-sm"})]}),e.jsx("button",{onClick:x,disabled:!p.trim(),className:"w-full bg-yellow-500 text-white py-2 px-4 rounded-md font-medium hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2",children:"Kaydet"})]})})}),e.jsx("div",{className:"flex-1 overflow-y-auto p-4",children:I?e.jsx("div",{className:"flex items-center justify-center h-full",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"})}):!l||!l.items||l.items.length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-gray-500",children:[e.jsx("svg",{className:"w-16 h-16 mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),e.jsx("p",{children:"Sepetiniz boş"})]}):e.jsx("div",{className:"space-y-4",children:l.items.map(s=>e.jsxs(D.div,{layout:!0,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm",children:[e.jsx("img",{src:s.product.images[0]||"/logo.png",alt:s.product.name,className:"w-20 h-20 object-cover rounded-md"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-medium text-gray-800",children:s.product.name}),e.jsxs("p",{className:"text-sm text-gray-500",children:["#",s.product.sku]}),e.jsxs("div",{className:"mt-2 flex items-center space-x-2",children:[e.jsx("button",{onClick:()=>updateQuantity(s.id,Math.max(1,s.quantity-1)),className:"p-1 hover:bg-gray-100 rounded",children:"-"}),e.jsx("span",{className:"w-8 text-center",children:s.quantity}),e.jsx("button",{onClick:()=>updateQuantity(s.id,s.quantity+1),className:"p-1 hover:bg-gray-100 rounded",children:"+"})]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:"font-medium text-yellow-500",children:[(s.product.price*s.quantity).toLocaleString("tr-TR")," ",s.product.is_tl===1?"₺":"$"]}),e.jsx("button",{onClick:()=>removeFromCart(s.id),className:"mt-2 text-red-500 hover:text-red-600 text-sm",children:"Kaldır"})]})]},s.id))})}),l&&l.items&&l.items.length>0&&e.jsxs("div",{className:"border-t p-4 bg-white",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("span",{className:"text-gray-600",children:"Toplam"}),e.jsxs("span",{className:"text-xl font-bold text-yellow-500",children:[H().toLocaleString("tr-TR")," ₺"]})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("button",{onClick:w,className:"w-full bg-yellow-500 text-white py-2 px-4 rounded-md font-medium hover:bg-yellow-600 transition-colors flex items-center justify-center space-x-2",children:[e.jsx("i",{className:"pi pi-link text-sm"}),e.jsx("span",{children:"Linki Kopyala"})]}),e.jsxs("button",{onClick:P,className:"w-full bg-green-500 text-white py-2 px-4 rounded-md font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2",children:[e.jsx("i",{className:"pi pi-whatsapp text-sm"}),e.jsx("span",{children:"WhatsApp Sipariş"})]}),e.jsxs("button",{onClick:M,className:"w-full bg-red-500 text-white py-2 px-4 rounded-md font-medium hover:bg-red-600 transition-colors flex items-center justify-center space-x-2",children:[e.jsx("i",{className:"pi pi-trash text-sm"}),e.jsx("span",{children:"Sepeti Boşalt"})]})]})]})]})}),e.jsx(Ae,{visible:m,onHide:()=>f(!1),header:"Sepet Paylaşım Linki",className:"w-[90vw] md:w-[600px]",children:e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"flex flex-col items-center justify-center p-4",children:e.jsx(Le,{value:g,size:200})}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"text",value:g,readOnly:!0,className:"flex-1 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 rounded-md shadow-sm"}),e.jsx("button",{onClick:()=>{navigator.clipboard.writeText(g)},className:"bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition-colors",children:e.jsx("i",{className:"pi pi-copy text-sm"})})]})]})}),e.jsx("footer",{className:"bg-gray-900 text-white mt-16",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-500 mb-4",children:"ZEON MOTO"}),e.jsx("p",{className:"text-gray-400",children:"Motosiklet tutkunları için en kaliteli parçalar ve aksesuarlar."})]}),e.jsx("div",{}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-500 mb-4",children:"İletişim"}),e.jsxs("ul",{className:"space-y-2 text-gray-400",children:[e.jsxs("li",{children:["Tel:",e.jsx("a",{href:"tel:+905070004777",children:"+90 507 000 4777"})]}),e.jsx("li",{children:"Adres: NAMIK KEMAL MAH.MÜCAHİTLER CAD.NO:62 D:1 SEYHAN /ADANA"})]})]})]}),e.jsx("div",{className:"border-t border-gray-800 mt-8 pt-8 text-center text-gray-400",children:e.jsxs("p",{children:["© ",new Date().getFullYear()," ZEON MOTO. Tüm hakları saklıdır."]})})]})})]})})};export{nt as S};
