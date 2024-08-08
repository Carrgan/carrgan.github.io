"use strict";(self.webpackChunkcarrgan_io=self.webpackChunkcarrgan_io||[]).push([[8547],{99836:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(65206),i=n(50690),a=n(96540),l=n(74848);const s=e=>{let{onChange:t,accept:n}=e;const[s,o]=(0,a.useState)(),[c,d]=(0,a.useState)("Upload a file"),h=(0,a.createRef)();return(0,a.useEffect)((()=>{s&&(d(s.name),t(s))}),[s]),(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{style:{display:"none"},ref:h,type:"file",accept:n,onChange:e=>(e=>{e?.files?.[0]&&o(e.files[0])})(e.target)}),(0,l.jsx)(r.A,{onClick:()=>{h.current?.click()},startDecorator:(0,l.jsx)(i.A,{}),children:(0,l.jsx)("span",{style:{maxWidth:"100px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:c})})]})}},82463:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(36021),i=n(86016),a=n(74848);const l=e=>{let{children:t}=e;return(0,a.jsx)(i.A,{children:(0,a.jsx)(r.Zr,{defaultMode:"dark",children:t})})}},78067:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(96540),i=n(62864),a=n(74848);const l=e=>{let{value:t,onChange:n,max:l,min:s,startDecorator:o}=e;const[c,d]=(0,r.useState)(t);(0,r.useEffect)((()=>{d(t)}),[t]);return(0,a.jsx)(i.Ay,{type:"number",startDecorator:"21",value:c,startDecorator:o,onChange:e=>{const t=e.target.value;if(""===t)return void d("");const r=Number(t);l&&r>l||s&&r<s||(d(r),n(r))}})}},86016:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(78478),i=n(96540),a=n(40473),l=n(74848);const s=e=>{let{children:t}=e;return(0,l.jsx)("div",{style:{height:"95vh",display:"flex",width:"100%",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:t})},o=()=>(0,l.jsx)(s,{children:(0,l.jsx)(a.A,{})}),c=(0,i.lazy)((()=>Promise.resolve().then(n.bind(n,10781)))),d=e=>{let{children:t}=e;return(0,l.jsx)(r.A,{children:()=>(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)(o,{}),children:(0,l.jsx)(c,{children:t})})})}},40473:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(96540),i=n(17437),a=n(1785),l=n(74848);const s=i.i7`
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
`,o=(0,a.A)("span")({height:"100%",width:"100%"},(e=>{let{theme:t,ownerState:n}=e;return i.AH`
    display: ${n.inline?"inline":"block"};
    position: ${n.overlay?"absolute":n.inline?"initial":"relative"};
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
      animation: ${s} 1.6s linear 0.5s infinite;
      background: linear-gradient(90deg, transparent, rgba(0 0 0 / 0.08), transparent);
      transform: translateX(-100%); /* Avoid flash during server-side hydration */
      z-index: 10;
    }
  `}));function c(e){let{overlay:t,hidden:n,inline:i,children:a,...s}=e;const c={overlay:t,hidden:n,inline:i,...s};return n?(0,l.jsx)(r.Fragment,{children:r.isValidElement(a)?r.cloneElement(a,s):a}):(0,l.jsx)(o,{ownerState:c,...s,children:a})}},3035:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(96540),i=n(82463),a=n(58311),l=n(62864),s=n(65206),o=n(99836),c=n(71710),d=n.n(c);var h=n(78067);const u="fileSplit_udtO",f="container_gpTJ",p="fileUploader_C0zY";var x=n(74848);const v=()=>{const[e,t]=(0,r.useState)(1e4),[n,i]=(0,r.useState)("Trunk"),[c,v]=(0,r.useState)(!1),[g,j]=(0,r.useState)();return(0,x.jsx)("div",{className:f,children:(0,x.jsxs)(a.A,{children:[(0,x.jsx)("h1",{children:"File split"}),(0,x.jsx)("p",{children:"version 1.0 @ 2023/7/20, split single text file to multiple with limited lines."}),(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)(h.A,{value:e,onChange:e=>t(e),startDecorator:"Max line: "}),(0,x.jsx)(l.Ay,{value:n,startDecorator:"Trunk name: ",onChange:e=>i(e.target.value)}),(0,x.jsx)(s.A,{onClick:()=>{if(g){const t=new FileReader;t.onloadstart=()=>v(!0),t.onloadend=()=>v(!1),t.onload=t=>{const r=t.target?.result;if(r){const t=((e,t)=>{let n=0;const r=[];for(;n<e.length-1;)r.push(e.slice(n,n+=t));return r})(r.split("\n"),e).map((e=>new Blob([e.join("\n")],{type:"text/plain"}))),i=new(d()),a=i.folder("files");t.forEach(((e,t)=>{a?.file(n+"-"+t+`.${g.name.split(".").pop()||"txt"}`,e)})),i.generateAsync({type:"blob"}).then((e=>{((e,t)=>{const n=document.createElement("a"),r=window.URL.createObjectURL(e);n.href=r,n.download=t,n.click(),window.URL.revokeObjectURL(r)})(e,"split.zip")}))}},t.readAsText(g)}},disabled:!g,loading:c,children:"Split file"})]}),(0,x.jsx)("div",{className:p,children:(0,x.jsx)(o.A,{onChange:e=>{j(e)},accept:"*"})})]})})},g=()=>(0,x.jsx)(i.A,{children:(0,x.jsx)(v,{})})}}]);