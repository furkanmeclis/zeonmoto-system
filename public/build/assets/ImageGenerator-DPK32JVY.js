import{R as t,j as e}from"./app-CN6VT3k1.js";import{B as u}from"./button.esm-BxPn3Chk.js";import{D as v}from"./dialog.esm-BS8NU80U.js";import{h as z}from"./html2canvas.esm-BfYXEYrK.js";import{I as N}from"./inputtext.esm-D2OUYmO9.js";import{D as q}from"./divider.esm-BBdPQ0Vp.js";import"./portal.esm-xRo3z1_z.js";import"./tooltip.esm-CUNV5C9a.js";import"./index.esm-C46o4hzb.js";const A="_bgh_1jbqz_2",I="_container_1jbqz_5",L="_border_1jbqz_13",w="_card_1jbqz_16",C="_toptop_1jbqz_24",R="_top_1jbqz_24",D="_bottom_1jbqz_42",k="_priceArea_1jbqz_50",S="_empty_1jbqz_55",B="_price_1jbqz_50",K="_priceLogo_1jbqz_65",M="_priceLogoImg_1jbqz_72",T="_priceCurrency_1jbqz_76",E="_priceAmount_1jbqz_81",G="_imageArea_1jbqz_84",H="_imageLogo_1jbqz_91",F="_productImage_1jbqz_100",O="_logoAbc_1jbqz_105",a={bgh:A,container:I,border:L,card:w,toptop:C,top:R,bottom:D,priceArea:k,empty:S,price:B,priceLogo:K,priceLogoImg:M,priceCurrency:T,priceAmount:E,imageArea:G,imageLogo:H,productImage:F,logoAbc:O},ee=({product:o,visible:i,setVisible:l,toast:n})=>{var _;const[g,c]=t.useState(!1),p=t.useRef(null),[m,h]=t.useState(""),[b,d]=t.useState([]),x=()=>{c(!0),fetch(route("products.getImages",o.id)).then(s=>s.json()).then(s=>{s.status?d(s.media):n.current.show({severity:"error",summary:"Hata",detail:s.message})}).catch(s=>{n.current.show({severity:"error",summary:"Hata",detail:"Bir hata oluştu"})}).finally(()=>{c(!1)})};t.useEffect(()=>{i?x():d([])},[i]);function f(s){return Math.floor(Math.random()*s)}const y=async()=>{c(!0);const s=p.current,j=(await z(s,{useCORS:!0,imageTimeout:0})).toDataURL("image/png"),r=document.createElement("a");typeof r.download=="string"?(r.href=j,r.download=o.sku+"-"+f(9999)+".png",document.body.appendChild(r),r.click(),document.body.removeChild(r)):window.open(j),c(!1),n.current.show({severity:"success",summary:"Başarılı",detail:"Görsel başarıyla indirildi"})};return e.jsx(e.Fragment,{children:e.jsx(v,{header:"Kampanya Görseli İndir",maximizable:!0,visible:i,fullScreen:!0,style:{width:"60vw"},onHide:()=>l(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsxs("div",{className:"w-full flex justify-between items-center",children:[e.jsx(N,{value:m,onChange:s=>h(s.target.value),placeholder:"Kampanya Metni"}),e.jsxs("div",{children:[e.jsx(u,{label:"Kapat",icon:"pi pi-times",size:"small",loading:g,severity:"secondary",onClick:()=>l(!1)}),e.jsx(u,{label:"Kaydet",icon:"pi pi-save",size:"small",loading:g,className:"p-button-success",onClick:y})]})]})]}),children:e.jsx("div",{className:a.bgh,children:e.jsx("div",{className:a.container,children:e.jsxs("div",{className:`${a.card}`,ref:p,children:[e.jsxs("div",{className:a.top,children:[m!==""&&e.jsx("p",{className:a.toptop,children:m}),o==null?void 0:o.name]}),e.jsxs("div",{className:a.bottom,children:[e.jsxs("div",{className:a.priceArea,children:[e.jsx("div",{className:a.empty}),e.jsxs("div",{className:a.price,children:[e.jsx("div",{className:a.priceCurrency,children:"₺"}),e.jsx("div",{className:a.priceAmount,children:o==null?void 0:o.campaign_price})]}),e.jsx("div",{className:a.priceLogo,children:e.jsx("img",{src:"/storage/images/logo.png",className:a.priceLogoImg})})]}),e.jsxs("div",{className:a.imageArea,children:[e.jsx("img",{className:a.imageLogo,src:"/storage/images/logo.png"}),e.jsx("img",{src:"/storage/images/logo.png",className:a.logoAbc}),e.jsx("img",{className:a.productImage,src:(_=b[0])==null?void 0:_.url})]})]})]})})})})})};export{ee as default};
