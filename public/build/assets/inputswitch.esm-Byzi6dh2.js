import{r as a,P as B,D as g,O as h,c as w}from"./app-CN6VT3k1.js";import{C as N,u as _,a as T,d as V}from"./portal.esm-xRo3z1_z.js";import{T as M}from"./tooltip.esm-CUNV5C9a.js";function p(){return p=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)({}).hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},p.apply(null,arguments)}function f(n){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(n)}function H(n,t){if(f(n)!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var o=r.call(n,t||"default");if(f(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function K(n){var t=H(n,"string");return f(t)=="symbol"?t:t+""}function U(n,t,r){return(t=K(t))in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var $={root:function(t){var r=t.props,o=t.checked;return w("p-inputswitch p-component",{"p-highlight":o,"p-disabled":r.disabled,"p-invalid":r.invalid})},input:"p-inputswitch-input",slider:"p-inputswitch-slider"},m=N.extend({defaultProps:{__TYPE:"InputSwitch",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,id:null,inputId:null,inputRef:null,invalid:!1,name:null,onBlur:null,onChange:null,onFocus:null,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,children:void 0},css:{classes:$}});function O(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.push.apply(r,o)}return r}function A(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(o){U(n,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(r,o))})}return n}var Y=a.memo(a.forwardRef(function(n,t){var r=_(),o=a.useContext(B),e=m.getProps(n,o),b=m.setMetaData({props:e}),d=b.ptm,v=b.cx,j=b.isUnstyled;T(m.css.styles,j,{name:"inputswitch"});var y=a.useRef(null),l=a.useRef(e.inputRef),s=e.checked===e.trueValue,S=function(u){if(e.onChange){var i=s?e.falseValue:e.trueValue;e.onChange({originalEvent:u,value:i,stopPropagation:function(){u==null||u.stopPropagation()},preventDefault:function(){u==null||u.preventDefault()},target:{name:e.name,id:e.id,value:i}})}},E=function(u){var i;e==null||(i=e.onFocus)===null||i===void 0||i.call(e,u)},I=function(u){var i;e==null||(i=e.onBlur)===null||i===void 0||i.call(e,u)};a.useImperativeHandle(t,function(){return{props:e,focus:function(){return g.focus(l.current)},getElement:function(){return y.current},getInput:function(){return l.current}}}),a.useEffect(function(){h.combinedRefs(l,e.inputRef)},[l,e.inputRef]),V(function(){e.autoFocus&&g.focus(l.current,e.autoFocus)});var x=h.isNotEmpty(e.tooltip),P=m.getOtherProps(e),R=h.reduceKeys(P,g.ARIA_PROPS),k=r({className:w(e.className,v("root",{checked:s})),style:e.style,role:"checkbox","aria-checked":s,"data-p-highlight":s,"data-p-disabled":e.disabled},P,d("root")),C=r(A({type:"checkbox",id:e.inputId,name:e.name,checked:s,onChange:S,onFocus:E,onBlur:I,disabled:e.disabled,role:"switch",tabIndex:e.tabIndex,"aria-checked":s,className:v("input")},R),d("input")),D=r({className:v("slider")},d("slider"));return a.createElement(a.Fragment,null,a.createElement("div",p({id:e.id,ref:y},k),a.createElement("input",p({ref:l},C)),a.createElement("span",D)),x&&a.createElement(M,p({target:y,content:e.tooltip,pt:d("tooltip")},e.tooltipOptions)))}));Y.displayName="InputSwitch";export{Y as I};
