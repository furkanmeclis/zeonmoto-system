import{j as n,r as o}from"./app-CZiurQAT.js";function f({message:r,className:e="",...t}){return r?n.jsx("p",{...t,className:"text-sm text-red-600 dark:text-red-400 "+e,children:r}):null}const l=o.forwardRef(function({type:e="text",className:t="",isFocused:u=!1,...d},s){const a=s||o.useRef();return o.useEffect(()=>{u&&a.current.focus()},[]),n.jsx("input",{...d,type:e,className:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-yellow-500 dark:focus:border-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600 rounded-md shadow-sm "+t,ref:a})});export{f as I,l as T};
