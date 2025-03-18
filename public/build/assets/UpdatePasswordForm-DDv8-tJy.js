import{r as u,G as h,j as s}from"./app-CZiurQAT.js";import{T as n,I as i}from"./TextInput-aRzWNVOz.js";import{I as d}from"./InputLabel-DIBcnpsX.js";import{P as g}from"./PrimaryButton-CoEqH_Bt.js";import{q as v}from"./transition-nsueiMYh.js";function I({className:m=""}){const l=u.useRef(),c=u.useRef(),{data:r,setData:a,errors:t,put:w,reset:o,processing:x,recentlySuccessful:f}=h({current_password:"",password:"",password_confirmation:""}),j=e=>{e.preventDefault(),w(route("password.update"),{preserveScroll:!0,onSuccess:()=>o(),onError:p=>{p.password&&(o("password","password_confirmation"),l.current.focus()),p.current_password&&(o("current_password"),c.current.focus())}})};return s.jsxs("section",{className:m,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Şifre güncelle"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Güvenliğinizi korumak için hesabınızın uzun ve rastgele bir şifre kullandığından emin olun."})]}),s.jsxs("form",{onSubmit:j,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(d,{htmlFor:"current_password",value:"Mevcut Şifre"}),s.jsx(n,{id:"current_password",ref:c,value:r.current_password,onChange:e=>a("current_password",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s.jsx(i,{message:t.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(d,{htmlFor:"password",value:"Yeni Şifre"}),s.jsx(n,{id:"password",ref:l,value:r.password,onChange:e=>a("password",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(i,{message:t.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(d,{htmlFor:"password_confirmation",value:"Şifreyi Onayla"}),s.jsx(n,{id:"password_confirmation",value:r.password_confirmation,onChange:e=>a("password_confirmation",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(i,{message:t.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(g,{disabled:x,children:"Kaydet"}),s.jsx(v,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Kaydedildi."})})]})]})]})}export{I as default};
