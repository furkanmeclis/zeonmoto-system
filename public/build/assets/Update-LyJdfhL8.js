import{R as k,r as x,j as s}from"./app-D1V09nEy.js";import{D as w}from"./dialog.esm-BO4qate5.js";import{I as y}from"./inputtext.esm-QYM9SqcV.js";import{u as C}from"./formik.esm-C98XJDOY.js";import{D as c}from"./dropdown.esm-DD8Mdocu.js";import{I as F}from"./inputnumber.esm-Cqsvld8W.js";import{C as h}from"./checkbox.esm-CyUkVkTw.js";import{D}from"./divider.esm-BaO6L2I7.js";import{B as b}from"./button.esm-Db8hLOIQ.js";import"./tooltip.esm-Cz0_cVT6.js";import"./index.esm-DYJmn6Hc.js";import"./index.esm-Da1ZI416.js";import"./overlayservice.esm-_7A-84Sl.js";import"./index.esm-KrLzGG33.js";const Z=({csrf_token:v,visible:j,setVisible:d,categories:t,onChange:_=()=>{},products:g,toast:r,product:e})=>{k.createRef();const[l,o]=x.useState(!1),{values:n,handleChange:f,setFieldValue:i}=C({initialValues:{preorder:!1,order:e==null?void 0:e.order,sku:e==null?void 0:e.sku,name:e==null?void 0:e.name,category:e==null?void 0:e.category,price:e==null?void 0:e.price,is_new:(e==null?void 0:e.is_new)===1,is_discount:(e==null?void 0:e.is_discount)===1,is_tl:(e==null?void 0:e.is_tl)===1,is_active:(e==null?void 0:e.is_active)===1,selectedCategory:t.find(a=>a.name===(e==null?void 0:e.category)),selectedProduct:null}});x.useEffect(()=>{i("preorder",!1),i("sku",e==null?void 0:e.sku),i("name",e==null?void 0:e.name),i("order",e==null?void 0:e.order),i("category",e==null?void 0:e.category),i("price",e==null?void 0:e.price),i("is_new",(e==null?void 0:e.is_new)===1),i("is_discount",(e==null?void 0:e.is_discount)===1),i("is_tl",(e==null?void 0:e.is_tl)===1),i("is_active",(e==null?void 0:e.is_active)===1),i("selectedCategory",t.find(a=>a.name===(e==null?void 0:e.category))),i("selectedProduct",null)},[e]);const N=()=>{if(n.sku.length===0){r.current.show({severity:"error",summary:"Hata",detail:"Stok Kodu Zorunludur!"});return}if(n.name.length===0){r.current.show({severity:"error",summary:"Hata",detail:"Ürün Adı Zorunludur!"});return}if(n.category.length===0){r.current.show({severity:"error",summary:"Hata",detail:"Kategori Zorunludur!"});return}if(n.price<=0){r.current.show({severity:"error",summary:"Hata",detail:"Fiyat 0 dan büyük olmalıdır!"});return}if(n.preorder&&!n.selectedProduct){r.current.show({severity:"error",summary:"Hata",detail:"Önceden Sıralanacak Ürünü Seçmelisiniz!"});return}o(!0);let a=new FormData;a.append("sku",n.sku),a.append("name",n.name),a.append("category",n.category),a.append("price",n.price),a.append("is_new",n.is_new?1:0),a.append("is_discount",n.is_discount?1:0),a.append("is_tl",n.is_tl?1:0),a.append("is_active",n.is_active?1:0),a.append("order",n.order),a.append("_method","PUT"),fetch(route("products.update",e==null?void 0:e.id),{method:"POST",headers:{"X-CSRF-TOKEN":v},body:a}).then(m=>m.json()).then(m=>{m.status?(r.current.show({severity:"success",summary:"Başarılı",detail:m.message}),i("sku",""),i("name",""),i("category",t[0].name),i("price",1),i("is_new",!1),i("is_discount",!1),i("is_tl",!0),i("is_active",!0),i("selectedCategory",t[0]),i("selectedProduct",null),_(m.products),d(!1)):r.current.show({severity:"error",summary:"Hata",detail:m.message})}).catch(m=>{r.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{o(!1)})};return s.jsx(s.Fragment,{children:s.jsx(w,{header:"'"+(e==null?void 0:e.name)+"' Ürünü Düzenle",maximizable:!0,visible:j,style:{width:"50vw"},onHide:()=>d(!1),footer:s.jsxs(s.Fragment,{children:[s.jsx(b,{label:"Kapat",icon:"pi pi-times",size:"small",loading:l,severity:"secondary",onClick:()=>d(!1)}),s.jsx(b,{label:"Kaydet",icon:"pi pi-save",size:"small",loading:l,className:"p-button-success",onClick:N})]}),children:s.jsxs("div",{className:"p-fluid",children:[s.jsxs("div",{className:"mb-3 flex items-center",children:[s.jsx(h,{inputId:"preorder",disabled:l,name:"preorder",onChange:a=>{i("preorder",a.checked)},checked:n.preorder}),s.jsx("label",{htmlFor:"preorder",className:"ml-3 font-bold",children:"Ürün Yerini Değiştir"})]}),n.preorder&&s.jsxs("div",{className:"mb-3",children:[s.jsxs("label",{htmlFor:"preorderProducts",className:"font-bold",children:["Hangi Ürünün Altına Koymak İstediğinizi Seçiniz ",s.jsx("span",{className:"font-semibold text-red-400",children:"*"})]}),s.jsx(c,{disabled:l,inputId:"preorderProducts",options:g.map(a=>{if(a.id!==(e==null?void 0:e.id))return a}).filter(a=>a!==void 0),optionLabel:"name",value:n.selectedProduct,filter:!0,showClear:!1,onChange:a=>{i("order",a.value.order),i("selectedProduct",a.value)}})]}),s.jsx(D,{}),s.jsxs("div",{className:"mb-3",children:[s.jsxs("label",{htmlFor:"email",className:"font-bold",children:["Ürün Stok Kodu ",s.jsx("span",{className:"font-semibold text-red-400",children:"*"})]}),s.jsx(y,{disabled:l,id:"email",type:"text",name:"sku",onChange:f,value:n.sku})]}),s.jsxs("div",{className:"mb-3",children:[s.jsxs("label",{htmlFor:"name",className:"font-bold",children:["Ürün Adı ",s.jsx("span",{className:"font-semibold text-red-400",children:"*"})]}),s.jsx(y,{disabled:l,id:"name",type:"text",name:"name",onChange:f,value:n.name})]}),s.jsxs("div",{className:"mb-3",children:[s.jsxs("label",{htmlFor:" ",className:"font-bold",children:["Ürün Kategorisi ",s.jsx("span",{className:"font-semibold text-red-400",children:"*"})]}),s.jsx(c,{disabled:l,inputId:"category",options:t,optionLabel:"name",value:n.selectedCategory,filter:!0,showClear:!1,onChange:a=>{i("category",a.value.name),i("selectedCategory",a.value)}})]}),s.jsxs("div",{className:"mb-3",children:[s.jsxs("label",{htmlFor:"price",className:"font-bold",children:["Ürün Fiyatı ",s.jsx("span",{className:"font-semibold text-red-400",children:"*"})]}),s.jsx(F,{disabled:l,inputId:"price",name:"price",mode:"currency",currency:n.is_tl?"TRY":"USD",min:0,onChange:a=>{i("price",a.value)},value:n.price})]}),s.jsxs("div",{className:"mb-3 flex items-center",children:[s.jsx(h,{disabled:l,inputId:"is_new",name:"is_new",onChange:a=>{i("is_new",a.checked)},checked:n.is_new}),s.jsxs("label",{htmlFor:"is_new",className:"ml-3 font-bold",children:["Yeni Ürün ",s.jsx("span",{className:"font-semibold text-red-400",children:"*"})]})]}),s.jsxs("div",{className:"mb-3 flex items-center",children:[s.jsx(h,{disabled:l,inputId:"is_discount",name:"is_discount",onChange:a=>{i("is_discount",a.checked)},checked:n.is_discount}),s.jsxs("label",{htmlFor:"is_discount",className:"ml-3 font-bold",children:["İndirimli Ürün ",s.jsx("span",{className:"font-semibold text-red-400",children:"*"})]})]})]})})})};export{Z as default};
