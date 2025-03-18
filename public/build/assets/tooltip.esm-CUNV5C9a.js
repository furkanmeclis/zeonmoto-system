import{r as d,P as et,Z as k,c as Oe,D as y,d as Ce,O as tt}from"./app-CN6VT3k1.js";import{I as nt,C as rt,u as ot,a as at,f as it,E as lt,m as ut,n as st,d as ct,b as V,c as pt,P as ft}from"./portal.esm-xRo3z1_z.js";function q(){return q=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var s in n)({}).hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},q.apply(null,arguments)}var dt=d.memo(d.forwardRef(function(t,r){var n=nt.getPTI(t);return d.createElement("svg",q({ref:r,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),d.createElement("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"}))}));dt.displayName="SpinnerIcon";function $(){return $=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var s in n)({}).hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},$.apply(null,arguments)}function T(t){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},T(t)}function vt(t,r){if(T(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,r||"default");if(T(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function mt(t){var r=vt(t,"string");return T(r)=="symbol"?r:r+""}function xe(t,r,n){return(r=mt(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function J(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,s=Array(r);n<r;n++)s[n]=t[n];return s}function ht(t){if(Array.isArray(t))return J(t)}function yt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Pe(t,r){if(t){if(typeof t=="string")return J(t,r);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(t,r):void 0}}function bt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gt(t){return ht(t)||yt(t)||Pe(t)||bt()}function Et(t){if(Array.isArray(t))return t}function wt(t,r){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var s,a,O,w,h=[],S=!0,x=!1;try{if(O=(n=n.call(t)).next,r!==0)for(;!(S=(s=O.call(n)).done)&&(h.push(s.value),h.length!==r);S=!0);}catch(P){x=!0,a=P}finally{try{if(!S&&n.return!=null&&(w=n.return(),Object(w)!==w))return}finally{if(x)throw a}}return h}}function St(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(t,r){return Et(t)||wt(t,r)||Pe(t,r)||St()}var Ct={root:function(r){var n=r.positionState,s=r.classNameState;return Oe("p-tooltip p-component",xe({},"p-tooltip-".concat(n),!0),s)},arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Tt={arrow:function(r){var n=r.context;return{top:n.bottom?"0":n.right||n.left||!n.right&&!n.left&&!n.top&&!n.bottom?"50%":null,bottom:n.top?"0":null,left:n.right||!n.right&&!n.left&&!n.top&&!n.bottom?"0":n.top||n.bottom?"50%":null,right:n.left?"0":null}}},Ot=`
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
`,W=rt.extend({defaultProps:{__TYPE:"Tooltip",appendTo:null,at:null,autoHide:!0,autoZIndex:!0,baseZIndex:0,className:null,closeOnEscape:!1,content:null,disabled:!1,event:null,hideDelay:0,hideEvent:"mouseleave",id:null,mouseTrack:!1,mouseTrackLeft:5,mouseTrackTop:5,my:null,onBeforeHide:null,onBeforeShow:null,onHide:null,onShow:null,position:"right",showDelay:0,showEvent:"mouseenter",showOnDisabled:!1,style:null,target:null,updateDelay:0,children:void 0},css:{classes:Ct,styles:Ot,inlineStyles:Tt}});function Te(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,s)}return n}function xt(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Te(Object(n),!0).forEach(function(s){xe(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}var Pt=d.memo(d.forwardRef(function(t,r){var n=ot(),s=d.useContext(et),a=W.getProps(t,s),O=d.useState(!1),w=C(O,2),h=w[0],S=w[1],x=d.useState(a.position||"right"),P=C(x,2),E=P[0],B=P[1],Re=d.useState(""),Q=C(Re,2),ee=Q[0],te=Q[1],Ie=d.useState(!1),ne=C(Ie,2),De=ne[0],re=ne[1],oe={props:a,state:{visible:h,position:E,className:ee},context:{right:E==="right",left:E==="left",top:E==="top",bottom:E==="bottom"}},R=W.setMetaData(oe),Z=R.ptm,U=R.cx,je=R.sx,Le=R.isUnstyled;at(W.css.styles,Le,{name:"tooltip"}),it({callback:function(){b()},when:a.closeOnEscape,priority:[lt.TOOLTIP,0]});var p=d.useRef(null),I=d.useRef(null),f=d.useRef(null),D=d.useRef(null),j=d.useRef(!0),ae=d.useRef({}),ie=d.useRef(null),Ae=ut({listener:function(e){!y.isTouchDevice()&&b(e)}}),le=C(Ae,2),Me=le[0],Ne=le[1],_e=st({target:f.current,listener:function(e){b(e)},when:h}),ue=C(_e,2),He=ue[0],ke=ue[1],We=function(e){return!(a.content||v(e,"tooltip"))},$e=function(e){return!(a.content||v(e,"tooltip")||a.children)},F=function(e){return v(e,"mousetrack")||a.mouseTrack},se=function(e){return v(e,"disabled")==="true"||pe(e,"disabled")||a.disabled},ce=function(e){return v(e,"showondisabled")||a.showOnDisabled},L=function(){return v(f.current,"autohide")||a.autoHide},v=function(e,o){return pe(e,"data-pr-".concat(o))?e.getAttribute("data-pr-".concat(o)):null},pe=function(e,o){return e&&e.hasAttribute(o)},fe=function(e){var o=[v(e,"showevent")||a.showEvent],c=[v(e,"hideevent")||a.hideEvent];if(F(e))o=["mousemove"],c=["mouseleave"];else{var l=v(e,"event")||a.event;l==="focus"&&(o=["focus"],c=["blur"]),l==="both"&&(o=["focus","mouseenter"],c=De?["blur"]:["mouseleave","blur"])}return{showEvents:o,hideEvents:c}},de=function(e){return v(e,"position")||E},Be=function(e){var o=v(e,"mousetracktop")||a.mouseTrackTop,c=v(e,"mousetrackleft")||a.mouseTrackLeft;return{top:o,left:c}},ve=function(e,o){if(I.current){var c=v(e,"tooltip")||a.content;c?(I.current.innerHTML="",I.current.appendChild(document.createTextNode(c)),o()):a.children&&o()}},me=function(e){ve(f.current,function(){var o=ie.current,c=o.pageX,l=o.pageY;a.autoZIndex&&!k.get(p.current)&&k.set("tooltip",p.current,s&&s.autoZIndex||Ce.autoZIndex,a.baseZIndex||s&&s.zIndex.tooltip||Ce.zIndex.tooltip),p.current.style.left="",p.current.style.top="",L()&&(p.current.style.pointerEvents="none");var u=F(f.current)||e==="mouse";(u&&!D.current||u)&&(D.current={width:y.getOuterWidth(p.current),height:y.getOuterHeight(p.current)}),he(f.current,{x:c,y:l},e)})},A=function(e){e.type&&e.type==="focus"&&re(!0),f.current=e.currentTarget;var o=se(f.current),c=$e(ce(f.current)&&o?f.current.firstChild:f.current);if(!(c||o))if(ie.current=e,h)M("updateDelay",me);else{var l=N(a.onBeforeShow,{originalEvent:e,target:f.current});l&&M("showDelay",function(){S(!0),N(a.onShow,{originalEvent:e,target:f.current})})}},b=function(e){if(e&&e.type==="blur"&&re(!1),ye(),h){var o=N(a.onBeforeHide,{originalEvent:e,target:f.current});o&&M("hideDelay",function(){!L()&&j.current===!1||(k.clear(p.current),y.removeClass(p.current,"p-tooltip-active"),S(!1),N(a.onHide,{originalEvent:e,target:f.current}))})}},he=function(e,o,c){var l=0,u=0,m=c||E;if((F(e)||m=="mouse")&&o){var g={width:y.getOuterWidth(p.current),height:y.getOuterHeight(p.current)};l=o.x,u=o.y;var Ee=Be(e),_=Ee.top,H=Ee.left;switch(m){case"left":l=l-(g.width+H),u=u-(g.height/2-_);break;case"right":case"mouse":l=l+H,u=u-(g.height/2-_);break;case"top":l=l-(g.width/2-H),u=u-(g.height+_);break;case"bottom":l=l-(g.width/2-H),u=u+_;break}l<=0||D.current.width>g.width?(p.current.style.left="0px",p.current.style.right=window.innerWidth-g.width-l+"px"):(p.current.style.right="",p.current.style.left=l+"px"),p.current.style.top=u+"px",y.addClass(p.current,"p-tooltip-active")}else{var X=y.findCollisionPosition(m),Ve=v(e,"my")||a.my||X.my,qe=v(e,"at")||a.at||X.at;p.current.style.padding="0px",y.flipfitCollision(p.current,e,Ve,qe,function(G){var we=G.at,z=we.x,Je=we.y,Qe=G.my.x,Se=a.at?z!=="center"&&z!==Qe?z:Je:G.at["".concat(X.axis)];p.current.style.padding="",B(Se),Ze(Se),y.addClass(p.current,"p-tooltip-active")})}},Ze=function(e){if(p.current){var o=getComputedStyle(p.current);e==="left"?p.current.style.left=parseFloat(o.left)-parseFloat(o.paddingLeft)*2+"px":e==="top"&&(p.current.style.top=parseFloat(o.top)-parseFloat(o.paddingTop)*2+"px")}},Ue=function(){L()||(j.current=!1)},Fe=function(e){L()||(j.current=!0,b(e))},Ke=function(e){if(e){var o=fe(e),c=o.showEvents,l=o.hideEvents,u=be(e);c.forEach(function(m){return u==null?void 0:u.addEventListener(m,A)}),l.forEach(function(m){return u==null?void 0:u.addEventListener(m,b)})}},Ye=function(e){if(e){var o=fe(e),c=o.showEvents,l=o.hideEvents,u=be(e);c.forEach(function(m){return u==null?void 0:u.removeEventListener(m,A)}),l.forEach(function(m){return u==null?void 0:u.removeEventListener(m,b)})}},M=function(e,o){ye();var c=v(f.current,e.toLowerCase())||a[e];c?ae.current["".concat(e)]=setTimeout(function(){return o()},c):o()},N=function(e){if(e){for(var o=arguments.length,c=new Array(o>1?o-1:0),l=1;l<o;l++)c[l-1]=arguments[l];var u=e.apply(void 0,c);return u===void 0&&(u=!0),u}return!0},ye=function(){Object.values(ae.current).forEach(function(e){return clearTimeout(e)})},be=function(e){if(e){if(ce(e)){if(!e.hasWrapper){var o=document.createElement("div"),c=e.nodeName==="INPUT";return c?y.addMultipleClasses(o,"p-tooltip-target-wrapper p-inputwrapper"):y.addClass(o,"p-tooltip-target-wrapper"),e.parentNode.insertBefore(o,e),o.appendChild(e),e.hasWrapper=!0,o}return e.parentElement}else if(e.hasWrapper){var l;(l=e.parentElement).replaceWith.apply(l,gt(e.parentElement.childNodes)),delete e.hasWrapper}return e}return null},Xe=function(e){Y(e),K(e)},K=function(e){ge(e||a.target,Ke)},Y=function(e){ge(e||a.target,Ye)},ge=function(e,o){if(e=tt.getRefElement(e),e)if(y.isElement(e))o(e);else{var c=function(u){var m=y.find(document,u);m.forEach(function(g){o(g)})};e instanceof Array?e.forEach(function(l){c(l)}):c(e)}};ct(function(){h&&f.current&&se(f.current)&&b()}),V(function(){return K(),function(){Y()}},[A,b,a.target]),V(function(){if(h){var i=de(f.current),e=v(f.current,"classname");B(i),te(e),me(i),Me(),He()}else B(a.position||"right"),te(""),f.current=null,D.current=null,j.current=!0;return function(){Ne(),ke()}},[h]),V(function(){var i=de(f.current);h&&i!=="mouse"&&M("updateDelay",function(){ve(f.current,function(){he(f.current)})})},[a.content]),pt(function(){b(),k.clear(p.current)}),d.useImperativeHandle(r,function(){return{props:a,updateTargetEvents:Xe,loadTargetEvents:K,unloadTargetEvents:Y,show:A,hide:b,getElement:function(){return p.current},getTarget:function(){return f.current}}});var Ge=function(){var e=We(f.current),o=n({id:a.id,className:Oe(a.className,U("root",{positionState:E,classNameState:ee})),style:a.style,role:"tooltip","aria-hidden":h,onMouseEnter:function(m){return Ue()},onMouseLeave:function(m){return Fe(m)}},W.getOtherProps(a),Z("root")),c=n({className:U("arrow"),style:je("arrow",xt({},oe))},Z("arrow")),l=n({className:U("text")},Z("text"));return d.createElement("div",$({ref:p},o),d.createElement("div",c),d.createElement("div",$({ref:I},l),e&&a.children))};if(h){var ze=Ge();return d.createElement(ft,{element:ze,appendTo:a.appendTo,visible:!0})}return null}));Pt.displayName="Tooltip";export{dt as S,Pt as T};
