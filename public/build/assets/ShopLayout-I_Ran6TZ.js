import{r as l,P as ge,Z as J,d as V,c as B,D as X,O as G,l as we,I as je,R as Ne,u as ke,j as e,x as Se}from"./app-DiBPUVjf.js";import{C as Ee,u as Ce,a as Ie,g as Oe,f as Pe,E as Te,i as _e,d as De,b as Q,c as Le,P as Me,R as Re}from"./tooltip.esm-B-PJnqeq.js";import{C as se,T as Ae}from"./index.esm-CaQb3noq.js";import{_ as He}from"./utils-CZYjYUQL.js";import{D as ae}from"./dialog.esm-f0X1myzo.js";import{I as ze}from"./inputtext.esm-CUF2kBIX.js";import{T as Be}from"./toast.esm-Cs_lN6Eo.js";import{m as D}from"./proxy-BtVpVGKh.js";function O(){return O=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},O.apply(null,arguments)}function L(n){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},L(n)}function Ve(n,r){if(L(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,r||"default");if(L(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function Ue(n){var r=Ve(n,"string");return L(r)=="symbol"?r:r+""}function Ze(n,r,t){return(r=Ue(r))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function $e(n){if(Array.isArray(n))return n}function Ke(n,r){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,s,m,b,u=[],x=!0,w=!1;try{if(m=(t=t.call(n)).next,r!==0)for(;!(x=(i=m.call(t)).done)&&(u.push(i.value),u.length!==r);x=!0);}catch(E){w=!0,s=E}finally{try{if(!x&&t.return!=null&&(b=t.return(),Object(b)!==b))return}finally{if(w)throw s}}return u}}function ie(n,r){(r==null||r>n.length)&&(r=n.length);for(var t=0,i=Array(r);t<r;t++)i[t]=n[t];return i}function Fe(n,r){if(n){if(typeof n=="string")return ie(n,r);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ie(n,r):void 0}}function We(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(n,r){return $e(n)||Ke(n,r)||Fe(n,r)||We()}var qe={closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",mask:function(r){var t=r.props,i=r.maskVisibleState,s=["left","right","top","bottom"],m=s.find(function(b){return b===t.position});return B("p-sidebar-mask",m&&!t.fullScreen?"p-sidebar-".concat(m):"",{"p-component-overlay p-component-overlay-enter":t.modal,"p-sidebar-mask-scrollblocker":t.blockScroll,"p-sidebar-visible":i,"p-sidebar-full":t.fullScreen},t.maskClassName)},header:function(r){var t=r.props;return B("p-sidebar-header",{"p-sidebar-custom-header":t.header})},content:"p-sidebar-content",icons:"p-sidebar-icons",root:function(r){r.props;var t=r.context;return B("p-sidebar p-component",{"p-input-filled":t&&t.inputStyle==="filled"||V.inputStyle==="filled","p-ripple-disabled":t&&t.ripple===!1||V.ripple===!1})},transition:"p-sidebar"},Ye=`
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
`,Je={mask:function(r){var t=r.props;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t.position==="left"?"flex-start":t.position==="right"?"flex-end":"center",alignItems:t.position==="top"?"flex-start":t.position==="bottom"?"flex-end":"center"}}},z=Ee.extend({defaultProps:{__TYPE:"Sidebar",appendTo:null,ariaCloseLabel:null,baseZIndex:0,blockScroll:!1,children:void 0,className:null,closeIcon:null,closeOnEscape:!0,content:null,dismissable:!0,fullScreen:!1,header:null,icons:null,id:null,maskClassName:null,maskStyle:null,modal:!0,onHide:null,onShow:null,position:"left",showCloseIcon:!0,style:null,transitionOptions:null,visible:!1},css:{classes:qe,styles:Ye,inlineStyles:Je}});function le(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);r&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,i)}return t}function Xe(n){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?le(Object(t),!0).forEach(function(i){Ze(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):le(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}var oe=l.forwardRef(function(n,r){var t=Ce(),i=l.useContext(ge),s=z.getProps(n,i),m=l.useState(!1),b=ee(m,2),u=b[0],x=b[1],w=l.useState(!1),E=ee(w,2),N=E[0],C=E[1],y=z.setMetaData({props:s,state:{containerVisible:u}}),h=y.ptm,p=y.cx,o=y.sx,M=y.isUnstyled;Ie(z.css.styles,M,{name:"sidebar"});var f=l.useRef(null),v=l.useRef(null),j=l.useRef(null),P=N&&s.closeOnEscape,T=Oe("sidebar",P);Pe({callback:function(c){S(c)},when:P&&T,priority:[Te.SIDEBAR,T]});var U=_e({type:"click",listener:function(c){c.button===0&&Z(c)&&S(c)}}),k=ee(U,2),R=k[0],A=k[1],Z=function(c){return f&&f.current&&!f.current.contains(c.target)},$=function(){var c=document.activeElement,_=c&&f&&f.current.contains(c);!_&&s.showCloseIcon&&j.current&&j.current.focus()},K=function(c){s.dismissable&&s.modal&&v.current===c.target&&S(c)},S=function(c){s.onHide(),c.preventDefault()},F=function(){s.onShow&&s.onShow(),$(),Y()},W=function(){s.modal&&!M()&&X.addClass(v.current,"p-component-overlay-leave")},q=function(){J.clear(v.current),x(!1),a()},Y=function(){s.dismissable&&!s.modal&&R(),s.blockScroll&&X.blockBodyScroll()},a=function(){A(),s.blockScroll&&X.unblockBodyScroll()};l.useImperativeHandle(r,function(){return{props:s,getElement:function(){return f.current},getMask:function(){return v.current},getCloseIcon:function(){return j.current}}}),De(function(){s.visible&&x(!0)}),Q(function(){s.visible&&!u&&x(!0),s.visible!==N&&u&&C(s.visible)},[s.visible]),Q(function(){u&&(J.set("modal",v.current,i&&i.autoZIndex||V.autoZIndex,s.baseZIndex||i&&i.zIndex.modal||V.zIndex.modal),C(!0))},[u]),Q(function(){N&&(A(),s.dismissable&&!s.modal&&R())},[s.dismissable,s.modal,N]),Le(function(){a(),v.current&&J.clear(v.current)});var g=function(){var c=s.ariaCloseLabel||we("close"),_=t({type:"button",ref:j,className:p("closeButton"),onClick:function(ye){return S(ye)},"aria-label":c},h("closeButton")),H=t({className:p("closeIcon")},h("closeIcon")),xe=s.closeIcon||l.createElement(Ae,H),ve=je.getJSXIcon(xe,Xe({},H),{props:s});return s.showCloseIcon?l.createElement("button",_,ve,l.createElement(Re,null)):null},I=function(){return s.header?G.getJSXElement(s.header,s):null},ce=function(){return s.icons?G.getJSXElement(s.icons,s):null},te=t({ref:v,style:o("mask"),className:p("mask",{maskVisibleState:u}),onMouseDown:function(c){return K(c)}},h("mask")),ne=t({id:s.id,className:B(s.className,p("root",{context:i})),style:s.style,role:"complementary"},z.getOtherProps(s),h("root")),de=t({className:p("header")},h("header")),pe=t({className:p("content")},h("content")),me=t({className:p("icons")},h("icons")),ue={enter:s.fullScreen?150:300,exit:s.fullScreen?150:300},re=t({classNames:p("transition"),in:N,timeout:ue,options:s.transitionOptions,unmountOnExit:!0,onEntered:F,onExiting:W,onExited:q},h("transition")),be=function(){var c={closeIconRef:j,hide:S};return l.createElement("div",te,l.createElement(se,O({nodeRef:f},re),l.createElement("div",O({ref:f},ne),G.getJSXElement(n.content,c))))},fe=function(){var c=g(),_=ce(),H=I();return l.createElement("div",te,l.createElement(se,O({nodeRef:f},re),l.createElement("div",O({ref:f},ne),l.createElement("div",de,H,l.createElement("div",me,_,c)),l.createElement("div",pe,s.children))))},he=function(){var c=n!=null&&n.content?be():fe();return l.createElement(Me,{element:c,appendTo:s.appendTo,visible:!0})};return u&&he()});oe.displayName="Sidebar";const lt=({children:n})=>{const[r,t]=l.useState(!1),[i,s]=l.useState(!1),[m,b]=l.useState(""),[u,x]=l.useState(!1),[w,E]=l.useState(""),[N,C]=l.useState(!1),[y,h]=l.useState(""),p=Ne.useRef(null),{cart:o,loading:M,updateCartName:f,clearCart:v,updateQuantity:j,getShareLink:P,fetchCart:T,removeFromCart:U,pricesVisible:k,checkPin:R,resetPricesVisibility:A}=ke();l.useEffect(()=>{const a=()=>{s(window.scrollY>0)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),l.useEffect(()=>{const a=localStorage.getItem("cart_name");a&&b(a)},[]),l.useEffect(()=>{o!=null&&o.cart_name&&(b(o.cart_name),localStorage.setItem("cart_name",o.cart_name))},[o==null?void 0:o.cart_name]);const Z=async a=>{const g=a.target.value;b(g),localStorage.setItem("cart_name",g)},$=async()=>{if(m.trim())try{await f(m),await T(),localStorage.setItem("cart_name",m)}catch(a){console.error("Sepet ismi güncellenirken hata oluştu:",a)}},K=async()=>{try{const a=await P();E(a.share_url),x(!0)}catch(a){console.error("Paylaşım linki alınırken hata oluştu:",a)}},S=async()=>{try{const a=await P(),g=encodeURIComponent(`Merhaba Zeon MOTO, sepetim linktedir dönüşünüzü bekliyor olacağım

${a.share_url}`),I=document.createElement("a");I.href=`https://wa.me/905070004777?text=${g}`,I.target="_blank",I.rel="noopener noreferrer",I.click(),await T()}catch(a){console.error("WhatsApp siparişi oluşturulurken hata oluştu:",a)}},F=async()=>{if(window.confirm("Sepetinizi boşaltmak istediğinize emin misiniz?"))try{await v()}catch(a){console.error("Sepet boşaltılırken hata oluştu:",a)}},W=()=>!o||!o.items||o.items.length===0?0:o.items.reduce((a,g)=>a+g.product.price*g.quantity,0),q=async()=>{if(y.length!==6||!/^\d+$/.test(y)){p.current.show({severity:"error",summary:"Hata",detail:"PIN 6 haneli rakam olmalıdır.",life:3e3});return}try{(await R(y)).valid?(p.current.show({severity:"success",summary:"Başarılı",detail:"PIN doğrulandı. Fiyatlar görünür.",life:3e3}),C(!1),h("")):p.current.show({severity:"error",summary:"Hata",detail:"Geçersiz PIN.",life:3e3})}catch{p.current.show({severity:"error",summary:"Hata",detail:"PIN kontrolü sırasında bir hata oluştu.",life:3e3})}},Y=()=>{A(),p.current.show({severity:"info",summary:"Bilgi",detail:"Fiyat görünürlüğü kapatıldı.",life:3e3})};return e.jsxs(e.Fragment,{children:[e.jsx(Be,{ref:p}),e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx(D.nav,{initial:{y:-100},animate:{y:0},className:`fixed w-full z-50 transition-all duration-300 ${i?"bg-white shadow-lg":"bg-transparent"}`,children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsxs(Se,{href:route("new-shop.index"),className:"flex items-center space-x-2",children:[e.jsx("img",{src:"/logo.png",alt:"Zeon Moto",className:"h-10 w-10"}),e.jsx("span",{className:"text-xl font-bold text-yellow-600",children:"ZEON MOTO"})]}),e.jsx("div",{className:"flex items-center space-x-4",children:e.jsxs(D.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>t(!0),className:"relative p-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-yellow-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),o&&o.items&&o.items.length>0&&e.jsx(D.span,{initial:{scale:0},animate:{scale:1},className:"absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center",children:o.items.length})]})})]})})}),e.jsx("main",{className:"pt-16",children:n}),e.jsx(oe,{visible:r,position:"right",header:e.jsx("div",{className:"flex items-center justify-between ",children:e.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"Sepetim"})}),onHide:()=>t(!1),className:"w-full sm:w-[400px]",children:e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsx("div",{className:"shadow-sm",children:e.jsx("div",{className:"px-4 py-3",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("label",{htmlFor:"cart_name",className:"text-sm font-medium text-gray-700 whitespace-nowrap",children:"Sepet İsmi:"}),e.jsx("input",{type:"text",id:"cart_name",value:m,onChange:Z,placeholder:"Sepetinize bir isim verin...",className:"flex-1 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 rounded-md shadow-sm text-sm"})]}),e.jsx("button",{onClick:$,disabled:!m.trim(),className:"w-full bg-yellow-500 text-white py-2 px-4 rounded-md font-medium hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2",children:"Kaydet"})]})})}),e.jsx("div",{className:"flex-1 overflow-y-auto p-4",children:M?e.jsx("div",{className:"flex items-center justify-center h-full",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"})}):!o||!o.items||o.items.length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-gray-500",children:[e.jsx("svg",{className:"w-16 h-16 mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),e.jsx("p",{children:"Sepetiniz boş"})]}):e.jsx("div",{className:"space-y-4",children:o.items.map(a=>e.jsxs(D.div,{layout:!0,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm",children:[e.jsx("img",{src:a.product.images[0]||"/logo.png",alt:a.product.name,className:"w-20 h-20 object-cover rounded-md"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-medium text-gray-800",children:a.product.name}),e.jsxs("p",{className:"text-sm text-gray-500",children:["#",a.product.sku]}),e.jsxs("div",{className:"mt-2 flex items-center space-x-2",children:[e.jsx("button",{onClick:()=>j(a.id,Math.max(1,a.quantity-1)),className:"p-1 hover:bg-gray-100 rounded",children:"-"}),e.jsx("span",{className:"w-8 text-center",children:a.quantity}),e.jsx("button",{onClick:()=>j(a.id,a.quantity+1),className:"p-1 hover:bg-gray-100 rounded",children:"+"})]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:"font-medium text-yellow-500",children:[k?(a.product.price*a.quantity).toLocaleString("tr-TR"):"***"," ₺"]}),e.jsx("button",{onClick:()=>U(a.id),className:"mt-2 text-red-500 hover:text-red-600 text-sm",children:"Kaldır"})]})]},a.id))})}),o&&o.items&&o.items.length>0&&e.jsxs("div",{className:"border-t p-4 bg-white",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("span",{className:"text-gray-600",children:"Toplam"}),e.jsxs("span",{className:"text-xl font-bold text-yellow-500",children:[W().toLocaleString("tr-TR")," ₺"]})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("button",{onClick:K,className:"w-full bg-yellow-500 text-white py-2 px-4 rounded-md font-medium hover:bg-yellow-600 transition-colors flex items-center justify-center space-x-2",children:[e.jsx("i",{className:"pi pi-link text-sm"}),e.jsx("span",{children:"Linki Kopyala"})]}),e.jsxs("button",{onClick:S,className:"w-full bg-green-500 text-white py-2 px-4 rounded-md font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2",children:[e.jsx("i",{className:"pi pi-whatsapp text-sm"}),e.jsx("span",{children:"WhatsApp Sipariş"})]}),e.jsxs("button",{onClick:F,className:"w-full bg-red-500 text-white py-2 px-4 rounded-md font-medium hover:bg-red-600 transition-colors flex items-center justify-center space-x-2",children:[e.jsx("i",{className:"pi pi-trash text-sm"}),e.jsx("span",{children:"Sepeti Boşalt"})]})]})]})]})}),e.jsx(ae,{visible:u,onHide:()=>x(!1),header:"Sepet Paylaşım Linki",className:"w-[90vw] md:w-[600px]",children:e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"flex flex-col items-center justify-center p-4",children:e.jsx(He,{value:w,size:200})}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"text",value:w,readOnly:!0,className:"flex-1 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 rounded-md shadow-sm"}),e.jsx("button",{onClick:()=>{navigator.clipboard.writeText(w),p.current.show({severity:"success",summary:"Başarılı",detail:"Link kopyalandı.",life:3e3})},className:"bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition-colors",children:e.jsx("i",{className:"pi pi-copy text-sm"})})]})]})}),e.jsx(ae,{visible:N,onHide:()=>C(!1),header:"PIN Doğrulama",className:"w-[90vw] md:w-[400px]",children:e.jsxs("div",{className:"space-y-6 p-4",children:[e.jsx("p",{className:"text-gray-600 mb-4",children:"Fiyatları görmek için 6 haneli PIN kodunu giriniz:"}),e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsx(ze,{value:y,onChange:a=>h(a.target.value),keyfilter:"int",maxLength:6,placeholder:"6 haneli PIN",className:"p-inputtext-lg"}),e.jsx("button",{onClick:q,className:"w-full bg-yellow-500 text-white py-2 px-4 rounded-md font-medium hover:bg-yellow-600 transition-colors",children:"Doğrula"})]})]})}),e.jsx("div",{className:"fixed bottom-6 left-6 z-50",children:e.jsx(D.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>k?Y():C(!0),className:`p-3 rounded-full shadow-lg ${k?"bg-green-500":"bg-red-500"} text-white`,children:k?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})})}),e.jsx("footer",{className:"bg-gray-900 text-white mt-16",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-500 mb-4",children:"ZEON MOTO"}),e.jsx("p",{className:"text-gray-400",children:"Motosiklet tutkunları için en kaliteli parçalar ve aksesuarlar."})]}),e.jsx("div",{}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-500 mb-4",children:"İletişim"}),e.jsxs("ul",{className:"space-y-2 text-gray-400",children:[e.jsxs("li",{children:["Tel:",e.jsx("a",{href:"tel:+905070004777",children:"+90 507 000 4777"})]}),e.jsx("li",{children:"Adres: NAMIK KEMAL MAH.MÜCAHİTLER CAD.NO:62 D:1 SEYHAN /ADANA"})]})]})]}),e.jsx("div",{className:"border-t border-gray-800 mt-8 pt-8 text-center text-gray-400",children:e.jsxs("p",{children:["© ",new Date().getFullYear()," ZEON MOTO. Tüm hakları saklıdır."]})})]})})]})]})};export{lt as S};
