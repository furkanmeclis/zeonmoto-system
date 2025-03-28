import{j as t,r as o,S as D,F as f}from"./app-D1V09nEy.js";import{A as Y}from"./AuthenticatedLayout-BMC7xelg.js";import{T as U}from"./toolbar.esm-Di5yyCnd.js";import{B as p}from"./button.esm-Db8hLOIQ.js";import{D as G,C as d}from"./column.esm-CCZL5W4o.js";import{C as X,c as _}from"./confirmpopup.esm-INzCL5X9.js";import{T as $}from"./toast.esm-BrIFXdm5.js";import{D as E}from"./dropdown.esm-DD8Mdocu.js";import{I as N}from"./inputswitch.esm-DfSb7yo0.js";import J from"./Images-Cr6u-lN-.js";import Q from"./Categories-Vx1TFMgv.js";import q from"./Create-D6DHobjs.js";import W from"./Update-LyJdfhL8.js";import{D as Z}from"./dialog.esm-BO4qate5.js";import"./html2canvas.esm-BfYXEYrK.js";import{I as O}from"./inputtext.esm-QYM9SqcV.js";import{D as ee}from"./divider.esm-BaO6L2I7.js";import{I as te}from"./inputnumber.esm-Cqsvld8W.js";import{b as R}from"./helper-CgTmtTxK.js";import{C as re}from"./checkbox.esm-CyUkVkTw.js";import"./ApplicationLogo-Bgi2Sy8y.js";import"./transition-DoLqjYhz.js";import"./tooltip.esm-Cz0_cVT6.js";import"./index.esm-Da1ZI416.js";import"./index.esm-KrLzGG33.js";import"./index.esm-CMRBVtWB.js";import"./index.esm-DYJmn6Hc.js";import"./overlayservice.esm-_7A-84Sl.js";import"./index.esm-fHibjLxL.js";import"./image.esm-BV6pYyNF.js";import"./progressbar.esm-CUxEEpGs.js";import"./formik.esm-C98XJDOY.js";const se=()=>t.jsx(t.Fragment,{}),Le=({auth:x,csrf_token:n,categories:h})=>{const[y,m]=o.useState([]),[z,H]=o.useState(!1);o.useState(!1);const s=o.useRef(null),[g,u]=o.useState(!0),[C,j]=o.useState(null),[K,S]=o.useState(!1),[L,k]=o.useState(!1),[V,v]=o.useState(!1),[w,I]=o.useState(h),[M,P]=o.useState(!1),[A,F]=o.useState(!1),[T,B]=o.useState(!0);o.useEffect(()=>{R(n).then(e=>{e.status?m(e.data):s.current.show({severity:"error",summary:"Hata",detail:"Ürünler yüklenirken bir hata oluştu."})}).catch(e=>{console.log(e),s.current.show({severity:"error",summary:"Hata",detail:"Ürünler yüklenirken bir hata oluştu."})}).finally(()=>u(!1))},[]);const b=({rowData:e,field:r,newValue:i})=>{if(e[r]===i){s.current.show({severity:"info",summary:"Uyarı",detail:"Değişiklik Olmadı"});return}let a=e.id;e={...e,[r]:i},u(!0);let l=new FormData;l.append("sku",e.sku),l.append("name",e.name),l.append("category",e.category),l.append("price",e.price),l.append("is_new",e.is_new?1:0),l.append("is_discount",e.is_discount?1:0),l.append("is_active",e.is_active?1:0),l.append("order",e.order),l.append("_method","PUT"),fetch(route("products.update",a),{method:"POST",headers:{"X-CSRF-TOKEN":n},body:l}).then(c=>c.json()).then(c=>{c.status?(s.current.show({severity:"success",summary:"Başarılı",detail:c.message}),m(c.products)):s.current.show({severity:"error",summary:"Hata",detail:c.message})}).catch(c=>{s.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{u(!1)})};return t.jsx(t.Fragment,{children:t.jsxs(Y,{user:x.user,header:"Ürünler",info:[{icon:"pi-box",text:`${y.length} adet ürün bulunmaktadır.`},{icon:"pi-check",text:`${y.map(e=>e.is_active===1?!0:null).filter(Boolean).length} adet aktif ürün bulunmaktadır.`},{icon:"pi-times",text:`${y.map(e=>e.is_active===0?!0:null).filter(Boolean).length} adet pasif ürün bulunmaktadır.`}],buttons:[{icon:"pi pi-plus",tooltip:"Yeni Ürün Ekle",severity:"success",tooltipOptions:{position:"bottom"},size:"small",onClick:()=>{P(!0)}}],children:[t.jsx($,{ref:s}),t.jsx(D,{title:"Ürünler"}),t.jsx(X,{}),t.jsx("div",{className:"py-6",children:t.jsx("div",{className:"max-w-[90rem] mx-auto sm:px-6 lg:px-8",children:t.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:t.jsxs(G,{value:y,removableSort:!0,paginator:!0,stripedRows:!0,editMode:"cell",reorderableRows:!0,onRowReorder:e=>{let r=e.value.map(({id:a},l)=>({id:a,sort:l+1}));m(e.value);let i=new FormData;i.append("data",JSON.stringify(r)),u(!0),fetch(route("products.updateOrder"),{method:"POST",headers:{"X-CSRF-TOKEN":n},body:i}).then(a=>a.json()).then(a=>{a.status?(s.current.show({severity:"success",summary:"Başarılı",detail:a.message}),m(a.products)):s.current.show({severity:"error",summary:"Hata",detail:a.message})}).catch(a=>{s.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{u(!1)})},filterDisplay:"row",paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",rowsPerPageOptions:[5,10,25,50],rows:10,dataKey:"id",filters:{name:{value:null,matchMode:f.CONTAINS},sku:{value:null,matchMode:f.CONTAINS},category:{value:null,matchMode:f.EQUALS},price:{value:null,matchMode:f.CONTAINS},is_active:{value:null,matchMode:f.EQUALS}},loading:g,header:t.jsx(t.Fragment,{children:t.jsx(U,{start:()=>t.jsx(t.Fragment,{children:t.jsx(p,{icon:"pi pi-arrow-right-arrow-left",severity:"success",tooltip:"Bu Ekrandan Kategorileri Yönetebilirsiniz.",tooltipOptions:{position:"top"},label:"Ürün Eşitle",onClick:()=>{v(!0)}})}),end:()=>t.jsx(t.Fragment,{children:t.jsx(p,{icon:"pi pi-bars",severity:"info",tooltip:"Bu Ekrandan Kategorileri Yönetebilirsiniz.",tooltipOptions:{position:"top"},label:"Kategoriler",onClick:()=>{k(!0)}})})})}),emptyMessage:"Ürün bulunamadı.",currentPageReportTemplate:"{first}. ile {last}. arası toplam {totalRecords} kayıttan",children:[t.jsx(d,{rowReorder:!0,style:{width:"3rem"}}),t.jsx(d,{field:"order",sortable:!0,header:"#"}),t.jsx(d,{field:"is_active",style:{width:"3rem"},header:"Aktif",body:e=>t.jsx(N,{checked:!!e.is_active,onChange:({value:r})=>{u(!0);let i=new FormData;i.append("is_active",r===!0?1:0),fetch(route("products.updateIsActive",e.id),{method:"POST",headers:{"X-CSRF-TOKEN":n},body:i}).then(a=>a.json()).then(a=>{a.status?(s.current.show({severity:"success",summary:"Başarılı",detail:a.message}),m(l=>l.map(c=>(c.id===e.id&&(c.is_active=r===!0?1:0),c)))):s.current.show({severity:"error",summary:"Hata",detail:a.message})}).catch(a=>{s.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{u(!1)})}}),filter:!0,showFilterMenu:!1,filterElement:e=>t.jsx(N,{checked:e.value===1,onChange:({value:r})=>{e.filterApplyCallback(r===!0?1:0)}})}),t.jsx(d,{field:"sku",filter:!0,showFilterMenu:!1,filterPlaceholder:"Ürün Koduna Göre",onCellEditComplete:e=>b(e),editor:e=>t.jsx(O,{type:"text",value:e.value,onChange:r=>e.editorCallback(r.target.value),onKeyDown:r=>r.stopPropagation()}),sortable:!0,header:"Ürün Kodu"}),t.jsx(d,{field:"name",filter:!0,showFilterMenu:!1,filterPlaceholder:"Ürün Adına Göre",sortable:!0,header:"Ürün Adı",onCellEditComplete:e=>b(e),editor:e=>t.jsx(O,{type:"text",value:e.value,onChange:r=>e.editorCallback(r.target.value),onKeyDown:r=>r.stopPropagation()})}),t.jsx(d,{field:"category",filter:!0,showFilterMenu:!1,filterPlaceholder:"Kategoriye Göre",sortable:!0,onCellEditComplete:e=>b(e),editor:e=>t.jsx(E,{options:h,onChange:r=>e.editorCallback(r.value.name),placeholder:"Kategori Seçiniz",optionLabel:"name",value:h.find(r=>r.name===e.value)}),header:"Kategori",filterElement:e=>t.jsx(E,{options:h,onChange:r=>e.filterApplyCallback(r.value.name),placeholder:"Kategori Seçiniz",optionLabel:"name",value:h.find(r=>r.name===e.value)})}),t.jsx(d,{field:"price",filter:!0,showFilterMenu:!1,filterPlaceholder:"Ürün Fiyatına Göre",editor:e=>t.jsx(te,{placeholder:"Ürün Fiyatı",mode:"currency",disabled:g,onChange:r=>e.editorCallback(r.value),value:e.value,currency:"TRY"}),sortable:!0,header:"Ürün Fiyatı",body:({price:e,is_tl:r})=>t.jsxs("span",{className:"p-tag text-md p-tag-success",children:[e," ","₺"]}),onCellEditComplete:e=>{b(e)}}),t.jsx(d,{header:"İşlemler",body:e=>t.jsxs("div",{className:"flex justify-center gap-x-2",children:[t.jsx(p,{icon:"pi pi-images",size:"small",tooltip:"Resimleri Görüntüle",tooltipOptions:{position:"top"},severity:"help",onClick:()=>{j(e),S(!0)}}),t.jsx(p,{icon:"pi pi-pencil",size:"small",tooltip:"Ürünü Düzenle",tooltipOptions:{position:"top"},severity:"info",onClick:()=>{j(e),F(!0)}}),t.jsx(p,{icon:"pi pi-trash",size:"small",tooltip:"Ürünü Sil",tooltipOptions:{position:"top"},severity:"danger",onClick:r=>_({target:r.currentTarget,message:"Ürünü silmek istediğinize emin misiniz?",icon:"pi pi-exclamation-triangle",acceptClassName:"p-button-danger",acceptLabel:"Sil",rejectLabel:"Vazgeç",accept:()=>{u(!0),fetch(route("products.destroy",e.id),{method:"DELETE",headers:{"X-CSRF-TOKEN":n}}).then(i=>i.json()).then(i=>{i.status?(s.current.show({severity:"success",summary:"Başarılı",detail:i.message}),m(i.products)):s.current.show({severity:"error",summary:"Hata",detail:i.message})}).catch(i=>{s.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{u(!1)})}})})]})})]})})})}),t.jsx(W,{csrf_token:n,visible:A,products:y.map(({id:e,order:r,name:i,sku:a})=>({id:e,order:r,name:(a+" - "+i).substring(0,70)})),setVisible:F,toast:s,categories:w,onChange:e=>{m(e)},product:C}),t.jsx(q,{csrf_token:n,visible:M,products:y.map(({id:e,order:r,name:i,sku:a})=>({id:e,order:r,name:(a+" - "+i).substring(0,70)})),setVisible:P,toast:s,categories:w,onChange:e=>{m(e)}}),t.jsx(Q,{csrf_token:n,toast:s,visible:L,categoriesAll:h,setVisible:k,onChange:e=>I(e)}),t.jsx(J,{product:C,visible:K,setVisible:S,toast:s,csrf_token:n}),t.jsx(se,{csrf_token:n,visible:z,setVisible:H,auth:x}),t.jsxs(Z,{visible:V,style:{width:"50vw"},footer:t.jsxs(t.Fragment,{children:[t.jsx(p,{label:"Kapat",icon:"pi pi-times",size:"small",loading:g,severity:"secondary",onClick:()=>v(!1)}),t.jsx(p,{label:"Eşitlemeyi Başlat",icon:"pi pi-sync",onClick:()=>{u(!0),fetch(route("products.syncCkymotoservice"),{method:"POST",headers:{"X-CSRF-TOKEN":n},body:JSON.stringify({includePrice:T})}).then(e=>e.json()).then(e=>{e.status?(s.current.show({severity:"success",summary:"Başarılı",detail:e.message}),R(n).then(r=>{r.status?m(r.data):s.current.show({severity:"error",summary:"Hata",detail:"Ürünler yüklenirken bir hata oluştu."})}).catch(r=>{console.log(r),s.current.show({severity:"error",summary:"Hata",detail:"Ürünler yüklenirken bir hata oluştu."})}).finally(()=>u(!1))):s.current.show({severity:"error",summary:"Hata",detail:e.message})}).catch(e=>{s.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{u(!1)})},size:"small",loading:g,className:"p-button-success"})]}),onHide:()=>v(!1),header:"Ürün Eşitlemesi",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx(re,{inputId:"ingredient1",name:"pizza",value:"Cheese",onChange:e=>{B(e.target.checked)},checked:T}),t.jsx("label",{htmlFor:"ingredient1",className:"ml-2",children:"Ürün Fiyatlarını Dahil Et"})]}),t.jsx(ee,{}),t.jsxs("p",{className:"text-semibold",children:["Eşitleme Kaynağı ",t.jsx("b",{className:"text-red-500",children:"CKYMOTOSERVICE.COM"})]})]})]})})};export{Le as default};
