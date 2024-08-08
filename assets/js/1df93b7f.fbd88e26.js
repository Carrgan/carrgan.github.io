"use strict";(self.webpackChunkcarrgan_io=self.webpackChunkcarrgan_io||[]).push([[4583],{86016:(e,n,i)=>{i.d(n,{A:()=>c});var t=i(78478),r=i(96540),a=i(40473),l=i(74848);const s=e=>{let{children:n}=e;return(0,l.jsx)("div",{style:{height:"95vh",display:"flex",width:"100%",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:n})},o=()=>(0,l.jsx)(s,{children:(0,l.jsx)(a.A,{})}),d=(0,r.lazy)((()=>Promise.resolve().then(i.bind(i,10781)))),c=e=>{let{children:n}=e;return(0,l.jsx)(t.A,{children:()=>(0,l.jsx)(r.Suspense,{fallback:(0,l.jsx)(o,{}),children:(0,l.jsx)(d,{children:n})})})}},40473:(e,n,i)=>{i.d(n,{A:()=>d});var t=i(96540),r=i(17437),a=i(1785),l=i(74848);const s=r.i7`
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
`,o=(0,a.A)("span")({height:"100%",width:"100%"},(e=>{let{theme:n,ownerState:i}=e;return r.AH`
    display: ${i.inline?"inline":"block"};
    position: ${i.overlay?"absolute":i.inline?"initial":"relative"};
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
      border-radius: ${n.vars.radius.xs};
      background: ${n.vars.palette.background.level2};
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
  `}));function d(e){let{overlay:n,hidden:i,inline:r,children:a,...s}=e;const d={overlay:n,hidden:i,inline:r,...s};return i?(0,l.jsx)(t.Fragment,{children:t.isValidElement(a)?t.cloneElement(a,s):a}):(0,l.jsx)(o,{ownerState:d,...s,children:a})}},36866:(e,n,i)=>{i.r(n),i.d(n,{default:()=>s});var t=i(96540),r=i(86016),a=i(74848);const l=(0,t.lazy)((()=>Promise.all([i.e(1869),i.e(9231),i.e(4814)]).then(i.bind(i,94814))));function s(){return(0,a.jsx)(r.A,{children:(0,a.jsx)(l,{})})}}}]);