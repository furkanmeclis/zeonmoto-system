import{r as o,P as ae,O as j,c as N,l as Q,D as pe,I as fe,R as L,j as i,S as de,A as K}from"./app-CZiurQAT.js";import{A as ve}from"./AuthenticatedLayout-LAl4trxn.js";import{C as ne,u as se,a as oe,b as ge,c as be,P as ye,B as h}from"./button.esm-ChyviPlN.js";import{T as he}from"./toast.esm-BQU4SXxQ.js";import{B as je}from"./blockui.esm-BrCbEI74.js";import{g as xe}from"./helper-CgTmtTxK.js";import{D as Se}from"./dialog.esm-BaIYeTIe.js";import{O as k}from"./overlayservice.esm-C-Ahge2y.js";import"./ApplicationLogo-CV42NSlc.js";import"./transition-nsueiMYh.js";import"./index.esm-eDc8XsfV.js";import"./index.esm-D2_URpED.js";import"./index.esm-BdKgDte0.js";var Pe={root:"p-card p-component",header:"p-card-header",title:"p-card-title",subTitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer",body:"p-card-body"},Ne=`
@layer primereact {
    .p-card-header img {
        width: 100%;
    }
}
`,U=ne.extend({defaultProps:{__TYPE:"Card",id:null,header:null,footer:null,title:null,subTitle:null,style:null,className:null,children:void 0},css:{classes:Pe,styles:Ne}}),X=o.forwardRef(function(t,e){var r=se(),n=o.useContext(ae),a=U.getProps(t,n),p=o.useRef(e),m=U.setMetaData({props:a}),u=m.ptm,s=m.cx,C=m.isUnstyled;oe(U.css.styles,C,{name:"card"});var E=function(){var v=r({className:s("header")},u("header"));return a.header?o.createElement("div",v,j.getJSXElement(a.header,a)):null},_=function(){var v=r({className:s("title")},u("title")),c=a.title&&o.createElement("div",v,j.getJSXElement(a.title,a)),R=r({className:s("subTitle")},u("subTitle")),A=a.subTitle&&o.createElement("div",R,j.getJSXElement(a.subTitle,a)),F=r({className:s("content")},u("content")),O=a.children&&o.createElement("div",F,a.children),D=r({className:s("footer")},u("footer")),g=a.footer&&o.createElement("div",D,j.getJSXElement(a.footer,a)),P=r({className:s("body")},u("body"));return o.createElement("div",P,c,A,O,g)};o.useEffect(function(){j.combinedRefs(p,e)},[p,e]);var M=r({id:a.id,ref:p,style:a.style,className:N(a.className,s("root"))},U.getOtherProps(a),u("root")),x=E(),S=_();return o.createElement("div",M,x,S)});X.displayName="Card";function W(){return W=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},W.apply(null,arguments)}function Ce(t){if(Array.isArray(t))return t}function Ee(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n,a,p,m,u=[],s=!0,C=!1;try{if(p=(r=r.call(t)).next,e!==0)for(;!(s=(n=p.call(r)).done)&&(u.push(n.value),u.length!==e);s=!0);}catch(E){C=!0,a=E}finally{try{if(!s&&r.return!=null&&(m=r.return(),Object(m)!==m))return}finally{if(C)throw a}}return u}}function Z(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function Oe(t,e){if(t){if(typeof t=="string")return Z(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(t,e):void 0}}function we(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(t,e){return Ce(t)||Ee(t,e)||Oe(t,e)||we()}function H(t){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(t)}function Te(t,e){if(H(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(H(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ke(t){var e=Te(t,"string");return H(e)=="symbol"?e:e+""}function Be(t,e,r){return(e=ke(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var Re={root:"p-confirm-dialog",message:"p-confirm-dialog-message",icon:"p-confirm-dialog-icon",acceptButton:"p-confirm-dialog-accept",rejectButton:function(e){var r=e.getPropValue;return N("p-confirm-dialog-reject",{"p-button-text":!r("rejectClassName")})}},V=ne.extend({defaultProps:{__TYPE:"ConfirmDialog",accept:null,acceptClassName:null,acceptIcon:null,acceptLabel:null,appendTo:null,breakpoints:null,children:void 0,className:null,content:null,defaultFocus:"accept",footer:null,icon:null,message:null,onHide:null,reject:null,rejectClassName:null,rejectIcon:null,rejectLabel:null,tagKey:void 0,visible:void 0},css:{classes:Re}});function te(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?te(Object(r),!0).forEach(function(n){Be(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}var re=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e=T(T({},e),{visible:e.visible===void 0?!0:e.visible}),e.visible&&k.emit("confirm-dialog",e);var r=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};k.emit("confirm-dialog",T(T(T({},e),p),{visible:!0}))},n=function(){k.emit("confirm-dialog",{visible:!1})};return{show:r,hide:n}},ie=o.memo(o.forwardRef(function(t,e){var r=se(),n=o.useContext(ae),a=V.getProps(t,n),p=o.useState(a.visible),m=ee(p,2),u=m[0],s=m[1],C=o.useState(!1),E=ee(C,2),_=E[0],M=E[1],x=o.useRef(null),S=o.useRef(!1),B=o.useRef(null),v=function(){var l=a.group;return x.current&&(l=x.current.group),Object.assign({},a,x.current,{group:l})},c=function(l){return v()[l]},R=function(l){for(var d=arguments.length,b=new Array(d>1?d-1:0),y=1;y<d;y++)b[y-1]=arguments[y];return j.getPropValue(c(l),b)},A=c("acceptLabel")||Q("accept"),F=c("rejectLabel")||Q("reject"),O={props:a,state:{visible:u}},D=V.setMetaData(O),g=D.ptm,P=D.cx,le=D.isUnstyled;oe(V.css.styles,le,{name:"confirmdialog"});var q=function(){S.current||(S.current=!0,R("accept"),w("accept"))},G=function(){S.current||(S.current=!0,R("reject"),w("reject"))},$=function(){var l=v();l.group===a.group&&(s(!0),S.current=!1,B.current=document.activeElement)},w=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"cancel";s(!1),R("onHide",{result:l}),pe.focus(B.current),B.current=null},I=function(l){if(l.tagKey===a.tagKey){var d=u!==l.visible,b=c("target")!==l.target;b&&!a.target?(w(),x.current=l,M(!0)):d&&(x.current=l,l.visible?$():w())}};o.useEffect(function(){a.visible?$():w()},[a.visible]),o.useEffect(function(){return!a.target&&!a.message&&k.on("confirm-dialog",I),function(){k.off("confirm-dialog",I)}},[a.target]),ge(function(){_&&$()},[_]),be(function(){k.off("confirm-dialog",I)}),o.useImperativeHandle(e,function(){return{props:a,confirm:I}});var ce=function(){var l=c("defaultFocus"),d=N("p-confirm-dialog-accept",c("acceptClassName")),b=N("p-confirm-dialog-reject",{"p-button-text":!c("rejectClassName")},c("rejectClassName")),y=r({label:F,autoFocus:l==="reject",icon:c("rejectIcon"),className:N(c("rejectClassName"),P("rejectButton",{getPropValue:c})),onClick:G,pt:g("rejectButton"),unstyled:a.unstyled,__parentMetadata:{parent:O}},g("rejectButton")),J=r({label:A,autoFocus:l===void 0||l==="accept",icon:c("acceptIcon"),className:N(c("acceptClassName"),P("acceptButton")),onClick:q,pt:g("acceptButton"),unstyled:a.unstyled,__parentMetadata:{parent:O}},g("acceptButton")),z=o.createElement(o.Fragment,null,o.createElement(h,y),o.createElement(h,J));if(c("footer")){var Y={accept:q,reject:G,acceptClassName:d,rejectClassName:b,acceptLabel:A,rejectLabel:F,element:z,props:v()};return j.getJSXElement(c("footer"),Y)}return z},ue=function(){var l=v(),d=j.getJSXElement(c("message"),l),b=r({className:P("icon")},g("icon")),y=fe.getJSXIcon(c("icon"),T({},b),{props:l}),J=ce(),z=r({className:P("message")},g("message")),Y=r({visible:u,className:N(c("className"),P("root")),footer:J,onHide:w,breakpoints:c("breakpoints"),pt:l.pt,unstyled:a.unstyled,appendTo:c("appendTo"),__parentMetadata:{parent:O}},V.getOtherProps(l));return o.createElement(Se,W({},Y,{content:t==null?void 0:t.content}),y,o.createElement("span",z,d))},me=ue();return o.createElement(ye,{element:me,appendTo:c("appendTo")})}));ie.displayName="ConfirmDialog";function $e({auth:t,csrf_token:e}){const[r,n]=L.useState(!0),[a,p]=L.useState(null);L.useState("");const m=L.useRef(null);return o.useEffect(()=>{xe(e).then(({status:u,data:s})=>{u?p(s.counts):m.current.show({severity:"error",summary:"Hata",detail:"Veriler yüklenirken bir hata oluştu.",life:3e3})}).catch(u=>{console.error(u),m.current.show({severity:"error",summary:"Hata",detail:"Veriler yüklenirken bir hata oluştu.",life:3e3})}).finally(()=>{n(!1)})},[]),i.jsxs(ve,{user:t.user,header:"Anasayfa",children:[i.jsx(de,{title:"Anasayfa"}),i.jsx(he,{ref:m}),i.jsx("div",{className:"py-6",children:i.jsx("div",{className:"max-w-[85rem] mx-auto sm:px-6 lg:px-8",children:i.jsx(je,{blocked:r,template:i.jsx("i",{className:"pi pi-spin pi-spinner",style:{fontSize:"3rem"}}),children:!r&&i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:[i.jsx(X,{title:"Ürünler",subTitle:i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"pi pi-box"})," ",a.products," Adet Ürün"]}),children:i.jsxs("div",{className:"flex justify-between gap-x-2",children:[i.jsx(h,{label:"Yeni Ürün Ekle",icon:"pi pi-plus-circle",size:"small",onClick:()=>K.visit(route("products.index")),className:"p-button-success"}),i.jsx(h,{label:"Ürünler",icon:"pi pi-box",onClick:()=>K.visit(route("products.index")),size:"small",className:"p-button-info"})]})}),i.jsx(X,{title:"Katalog",subTitle:i.jsx(i.Fragment,{children:"Tanıtım Kataloğu"}),children:i.jsxs("div",{className:"flex justify-between gap-x-2",children:[i.jsx(h,{label:"Katalog(Firma İçi)",icon:"pi pi-images",size:"small",onClick:()=>K.visit(route("products.katalog")),className:"p-button-success"}),i.jsx(h,{label:"Katalog",icon:"pi pi-external-link",onClick:()=>K.visit(route("home")),size:"small",className:"p-button-info"})]})}),i.jsx(X,{title:"Tehlike Bildirimleri",subTitle:i.jsx(i.Fragment,{children:"Sistemi Sıfırla"}),children:i.jsxs("div",{className:"flex justify-between gap-x-2",children:[i.jsx(h,{label:"Veritabanı Sıfırla",icon:"pi pi-database",size:"small",onClick:u=>{re({message:"Tüm ürünler sıfırlanacak. Devam etmek istediğinize emin misiniz?",header:"Onay",icon:"pi pi-exclamation-triangle",accept:()=>{n(!0),fetch(route("resetDatabase"),{headers:{"X-CSRF-TOKEN":e},method:"POST"}).then(s=>s.json()).then(s=>{s.status?m.current.show({severity:"success",summary:"Başarılı",detail:s.message}):m.current.show({severity:"error",summary:"Hata",detail:s.message})}).catch(s=>{m.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{n(!1)})}})},className:"p-button-danger"}),i.jsx(h,{label:"Resimleri Temizle",icon:"pi pi-images",onClick:u=>{re({message:"Tüm resimler silinecek. Devam etmek istediğinize emin misiniz?",header:"Onay",icon:"pi pi-exclamation-triangle",accept:()=>{n(!0),fetch(route("resetImages"),{headers:{"X-CSRF-TOKEN":e},method:"POST"}).then(s=>s.json()).then(s=>{s.status?m.current.show({severity:"success",summary:"Başarılı",detail:s.message}):m.current.show({severity:"error",summary:"Hata",detail:s.message})}).catch(s=>{m.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{n(!1)})}})},className:"p-button-info"})]})})]})})})}),i.jsx(ie,{})]})}export{$e as default};
