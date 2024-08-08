"use strict";(self.webpackChunkcarrgan_io=self.webpackChunkcarrgan_io||[]).push([[1770],{82463:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(36021),a=r(86016),i=r(74848);const s=e=>{let{children:t}=e;return(0,i.jsx)(a.A,{children:(0,i.jsx)(n.Zr,{defaultMode:"dark",children:t})})}},78067:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(96540),a=r(62864),i=r(74848);const s=e=>{let{value:t,onChange:r,max:s,min:l,startDecorator:o}=e;const[d,c]=(0,n.useState)(t);(0,n.useEffect)((()=>{c(t)}),[t]);return(0,i.jsx)(a.Ay,{type:"number",startDecorator:"21",value:d,startDecorator:o,onChange:e=>{const t=e.target.value;if(""===t)return void c("");const n=Number(t);s&&n>s||l&&n<l||(c(n),r(n))}})}},86016:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(78478),a=r(96540),i=r(40473),s=r(74848);const l=e=>{let{children:t}=e;return(0,s.jsx)("div",{style:{height:"95vh",display:"flex",width:"100%",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:t})},o=()=>(0,s.jsx)(l,{children:(0,s.jsx)(i.A,{})}),d=(0,a.lazy)((()=>Promise.resolve().then(r.bind(r,10781)))),c=e=>{let{children:t}=e;return(0,s.jsx)(n.A,{children:()=>(0,s.jsx)(a.Suspense,{fallback:(0,s.jsx)(o,{}),children:(0,s.jsx)(d,{children:t})})})}},40473:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(96540),a=r(17437),i=r(1785),s=r(74848);const l=a.i7`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,o=(0,i.A)("span")({height:"100%",width:"100%"},(e=>{let{theme:t,ownerState:r}=e;return a.AH`
    display: ${r.inline?"inline":"block"};
    position: ${r.overlay?"absolute":r.inline?"initial":"relative"};
    overflow: hidden;
    cursor: default;
    pointer-events: none;

    & > * {
      visibility: hidden;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }

    &::before {
      z-index: 9;
      border-radius: ${t.vars.radius.xs};
      background: ${t.vars.palette.background.level2};
      width: 100%;
    }

    /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
    -webkit-mask-image: -webkit-radial-gradient(white, black);

    &::after {
      animation: ${l} 1.6s linear 0.5s infinite;
      background: linear-gradient(90deg, transparent, rgba(0 0 0 / 0.08), transparent);
      transform: translateX(-100%); /* Avoid flash during server-side hydration */
      z-index: 10;
    }
  `}));function d(e){let{overlay:t,hidden:r,inline:a,children:i,...l}=e;const d={overlay:t,hidden:r,inline:a,...l};return r?(0,s.jsx)(n.Fragment,{children:n.isValidElement(i)?n.cloneElement(i,l):i}):(0,s.jsx)(o,{ownerState:d,...l,children:i})}},24265:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var n=r(96540),a=r(21432),i=r(68668),s=r(17143),l=r(65206);const o="lengthInput_weql",d="slider_kjWu",c="codeBlock_tuL1";var u=r(78067),h=r(90831),m=r(61094),x=r(65833),v=r(35273),p=r(74848);const g=e=>{let{selectedItems:t,items:r,onChange:a}=e;const i=(0,n.useMemo)((()=>t.map((e=>e.value))),[t]),s=(0,n.useCallback)((e=>i.includes(e.value)),[i]);return(0,p.jsx)(m.A,{orientation:"horizontal",wrap:!0,sx:{"--List-gap":"8px","--ListItem-radius":"20px","--ListItem-minHeight":"32px"},children:r.map(((e,r)=>(0,p.jsxs)(x.A,{children:[s(e)&&(0,p.jsx)(v.A,{fontSize:"medium",color:"primary",sx:{ml:-.5,mr:.5,zIndex:2,pointerEvents:"none"}}),(0,p.jsx)(h.A,{size:"sm",disabled:e.disable,disableIcon:!0,overlay:!0,label:e.title,checked:s(e),variant:s(e)?"soft":"outlined",onChange:r=>{r.target.checked?a([...t,e]):a(t.filter((t=>t.value!==e.value)))},slotProps:{action:e=>{let{checked:t}=e;return{sx:t?{border:"1px solid",borderColor:"primary.500"}:{}}}}})]},e.value)))})},b=65,f=90,j=97,y=122,w=48,k=57,A="@#$%^&*",C=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)),S=e=>String.fromCharCode(e),z=e=>{let t=0;switch(e){case"uppercase":return t=C(b,f),S(t);case"lowercase":return t=C(j,y),S(t);case"number":return t=C(w,k),S(t);case"symbol":return t=C(0,6),A[t]||""}},I=(e,t)=>{let r=0;if(e.length<1)return console.warn("Type can't be empty"),"";let n="";for(;r<t;){r+=1;const t=C(0,e.length-1);n+=z(e[t])}return n},M=[{title:"Number",value:"number"},{title:"Uppercase",value:"uppercase"},{title:"Lowercase",value:"lowercase"},{title:"Symbol",value:"symbol"}],_=()=>{const[e,t]=(0,n.useState)(32),[r,h]=(0,n.useState)(M),[m,x]=(0,n.useState)(I(M.map((e=>e.value)),e)),v=e=>{t(e);const n=I(r.map((e=>e.value)),e);x(n)},b=(0,n.useMemo)((()=>e*r.length),[e,r]);return(0,p.jsxs)("div",{children:[(0,p.jsx)(a.A,{className:c,children:m}),(0,p.jsx)(i.A,{style:{color:b<25?"#77061a":b<100?"#d4a82d":"#0d5e25"},determinate:!0,value:b>100?100:b}),(0,p.jsxs)("div",{className:o,children:[(0,p.jsx)(s.A,{value:e,onChange:(e,t)=>v(t),valueLabelDisplay:"auto",max:128,min:1,className:d,size:"lg"}),(0,p.jsx)(u.A,{value:e,onChange:v,min:1,max:128})]}),(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",paddingTop:16},children:[(0,p.jsx)("div",{children:(0,p.jsx)(g,{onChange:t=>{if(0===t.length)return;h(t);const r=I(t.map((e=>e.value)),e);x(r)},items:M,selectedItems:r})}),(0,p.jsx)("div",{children:(0,p.jsx)(l.A,{onClick:()=>{x(I(r.map((e=>e.value)),e))},children:"Refresh"})})]})]})};var L=r(82463);function N(){return(0,p.jsx)(L.A,{children:(0,p.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:24},children:(0,p.jsxs)("div",{style:{height:"80vh",width:"60vw",maxWidth:"1600px",background:"#25252d",borderRadius:"5px",padding:24},children:[(0,p.jsxs)("header",{children:[(0,p.jsx)("h1",{children:"Password generation"}),(0,p.jsxs)("div",{className:"container_x5Un margin-vert--md",children:["Version 1.0 @"," ",(0,p.jsx)("time",{dateTime:"2023-07-2T00:00:00.000Z",itemProp:"datePublished",children:"2023.07.02"})]})]}),(0,p.jsx)(_,{})]})})})}}}]);