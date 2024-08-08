"use strict";(self.webpackChunkcarrgan_io=self.webpackChunkcarrgan_io||[]).push([[4744],{21005:(e,n,r)=>{r.d(n,{A:()=>D});var t=r(58168),i=r(98587),l=r(96540),a=r(34164),o=r(28473),s=r(31609),c=r(75659);const d=(0,r(85329).Ay)();var u=r(28610),p=r(82858),h=r(39599),f=r(34814);const g=(e,n,r)=>{const t=e.keys[0];if(Array.isArray(n))n.forEach(((n,t)=>{r(((n,r)=>{t<=e.keys.length-1&&(0===t?Object.assign(n,r):n[e.up(e.keys[t])]=r)}),n)}));else if(n&&"object"==typeof n){(Object.keys(n).length>e.keys.length?e.keys:(i=e.keys,l=Object.keys(n),i.filter((e=>l.includes(e))))).forEach((i=>{if(-1!==e.keys.indexOf(i)){const l=n[i];void 0!==l&&r(((n,r)=>{t===i?Object.assign(n,r):n[e.up(i)]=r}),l)}}))}else"number"!=typeof n&&"string"!=typeof n||r(((e,n)=>{Object.assign(e,n)}),n);var i,l};function v(e){return e?`Level${e}`:""}function m(e){return e.unstable_level>0&&e.container}function x(e){return function(n){return`var(--Grid-${n}Spacing${v(e.unstable_level)})`}}function b(e){return function(n){return 0===e.unstable_level?`var(--Grid-${n}Spacing)`:`var(--Grid-${n}Spacing${v(e.unstable_level-1)})`}}function w(e){return 0===e.unstable_level?"var(--Grid-columns)":`var(--Grid-columns${v(e.unstable_level-1)})`}const y=({theme:e,ownerState:n})=>{const r=x(n),t={};return g(e.breakpoints,n.gridSize,((e,i)=>{let l={};!0===i&&(l={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===i&&(l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof i&&(l={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${i} / ${w(n)}${m(n)?` + ${r("column")}`:""})`}),e(t,l)})),t},j=({theme:e,ownerState:n})=>{const r={};return g(e.breakpoints,n.gridOffset,((e,t)=>{let i={};"auto"===t&&(i={marginLeft:"auto"}),"number"==typeof t&&(i={marginLeft:0===t?"0px":`calc(100% * ${t} / ${w(n)})`}),e(r,i)})),r},A=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=m(n)?{[`--Grid-columns${v(n.unstable_level)}`]:w(n)}:{"--Grid-columns":12};return g(e.breakpoints,n.columns,((e,t)=>{e(r,{[`--Grid-columns${v(n.unstable_level)}`]:t})})),r},S=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=b(n),t=m(n)?{[`--Grid-rowSpacing${v(n.unstable_level)}`]:r("row")}:{};return g(e.breakpoints,n.rowSpacing,((r,i)=>{var l;r(t,{[`--Grid-rowSpacing${v(n.unstable_level)}`]:"string"==typeof i?i:null==(l=e.spacing)?void 0:l.call(e,i)})})),t},$=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=b(n),t=m(n)?{[`--Grid-columnSpacing${v(n.unstable_level)}`]:r("column")}:{};return g(e.breakpoints,n.columnSpacing,((r,i)=>{var l;r(t,{[`--Grid-columnSpacing${v(n.unstable_level)}`]:"string"==typeof i?i:null==(l=e.spacing)?void 0:l.call(e,i)})})),t},k=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={};return g(e.breakpoints,n.direction,((e,n)=>{e(r,{flexDirection:n})})),r},G=({ownerState:e})=>{const n=x(e),r=b(e);return(0,t.A)({minWidth:0,boxSizing:"border-box"},e.container&&(0,t.A)({display:"flex",flexWrap:"wrap"},e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},{margin:`calc(${n("row")} / -2) calc(${n("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${n("row")} * -1) 0px 0px calc(${n("column")} * -1)`}),(!e.container||m(e))&&(0,t.A)({padding:`calc(${r("row")} / 2) calc(${r("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${r("row")} 0px 0px ${r("column")}`}))},O=e=>{const n=[];return Object.entries(e).forEach((([e,r])=>{!1!==r&&void 0!==r&&n.push(`grid-${e}-${String(r)}`)})),n},_=(e,n="xs")=>{function r(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(r(e))return[`spacing-${n}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){const n=[];return Object.entries(e).forEach((([e,t])=>{r(t)&&n.push(`spacing-${e}-${String(t)}`)})),n}return[]},E=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map((([e,n])=>`direction-${e}-${n}`)):[`direction-xs-${String(e)}`];var N=r(74848);const q=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],z=(0,f.A)(),C=d("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function R(e){return(0,u.A)({props:e,name:"MuiGrid",defaultTheme:z})}var B=r(1785),P=r(39750);const W=function(e={}){const{createStyledComponent:n=C,useThemeProps:r=R,componentName:d="MuiGrid"}=e,u=l.createContext(void 0),f=n(A,$,S,y,k,G,j),g=l.forwardRef((function(e,n){var g,v,m,x,b,w,y,j;const A=(0,p.A)(),S=r(e),$=(0,h.A)(S),k=l.useContext(u),{className:G,children:z,columns:C=12,container:R=!1,component:B="div",direction:P="row",wrap:W="wrap",spacing:D=0,rowSpacing:M=D,columnSpacing:T=D,disableEqualOverflow:X,unstable_level:L=0}=$,F=(0,i.A)($,q);let J=X;L&&void 0!==X&&(J=e.disableEqualOverflow);const V={},H={},I={};Object.entries(F).forEach((([e,n])=>{void 0!==A.breakpoints.values[e]?V[e]=n:void 0!==A.breakpoints.values[e.replace("Offset","")]?H[e.replace("Offset","")]=n:I[e]=n}));const Z=null!=(g=e.columns)?g:L?void 0:C,K=null!=(v=e.spacing)?v:L?void 0:D,Q=null!=(m=null!=(x=e.rowSpacing)?x:e.spacing)?m:L?void 0:M,U=null!=(b=null!=(w=e.columnSpacing)?w:e.spacing)?b:L?void 0:T,Y=(0,t.A)({},$,{level:L,columns:Z,container:R,direction:P,wrap:W,spacing:K,rowSpacing:Q,columnSpacing:U,gridSize:V,gridOffset:H,disableEqualOverflow:null!=(y=null!=(j=J)?j:k)&&y,parentDisableEqualOverflow:k}),ee=((e,n)=>{const{container:r,direction:t,spacing:i,wrap:l,gridSize:a}=e,o={root:["root",r&&"container","wrap"!==l&&`wrap-xs-${String(l)}`,...E(t),...O(a),...r?_(i,n.breakpoints.keys[0]):[]]};return(0,c.A)(o,(e=>(0,s.Ay)(d,e)),{})})(Y,A);let ne=(0,N.jsx)(f,(0,t.A)({ref:n,as:B,ownerState:Y,className:(0,a.A)(ee.root,G)},I,{children:l.Children.map(z,(e=>{var n;return l.isValidElement(e)&&(0,o.A)(e,["Grid"])?l.cloneElement(e,{unstable_level:null!=(n=e.props.unstable_level)?n:L+1}):e}))}));return void 0!==J&&J!==(null!=k&&k)&&(ne=(0,N.jsx)(u.Provider,{value:J,children:ne})),ne}));return g.muiName="Grid",g}({createStyledComponent:(0,B.A)("div",{name:"JoyGrid",slot:"Root",overridesResolver:(e,n)=>n.root}),useThemeProps:e=>(0,P.A)({props:e,name:"JoyGrid"})}),D=W},82463:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var t=r(36021),i=r(86016),l=r(74848);const a=e=>{let{children:n}=e;return(0,l.jsx)(i.A,{children:(0,l.jsx)(t.Zr,{defaultMode:"dark",children:n})})}},86016:(e,n,r)=>{r.d(n,{A:()=>d});var t=r(78478),i=r(96540),l=r(40473),a=r(74848);const o=e=>{let{children:n}=e;return(0,a.jsx)("div",{style:{height:"95vh",display:"flex",width:"100%",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:n})},s=()=>(0,a.jsx)(o,{children:(0,a.jsx)(l.A,{})}),c=(0,i.lazy)((()=>Promise.resolve().then(r.bind(r,10781)))),d=e=>{let{children:n}=e;return(0,a.jsx)(t.A,{children:()=>(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(s,{}),children:(0,a.jsx)(c,{children:n})})})}},40473:(e,n,r)=>{r.d(n,{A:()=>c});var t=r(96540),i=r(17437),l=r(1785),a=r(74848);const o=i.i7`
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
`,s=(0,l.A)("span")({height:"100%",width:"100%"},(e=>{let{theme:n,ownerState:r}=e;return i.AH`
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
      border-radius: ${n.vars.radius.xs};
      background: ${n.vars.palette.background.level2};
      width: 100%;
    }

    /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
    -webkit-mask-image: -webkit-radial-gradient(white, black);

    &::after {
      animation: ${o} 1.6s linear 0.5s infinite;
      background: linear-gradient(90deg, transparent, rgba(0 0 0 / 0.08), transparent);
      transform: translateX(-100%); /* Avoid flash during server-side hydration */
      z-index: 10;
    }
  `}));function c(e){let{overlay:n,hidden:r,inline:i,children:l,...o}=e;const c={overlay:n,hidden:r,inline:i,...o};return r?(0,a.jsx)(t.Fragment,{children:t.isValidElement(l)?t.cloneElement(l,o):l}):(0,a.jsx)(s,{ownerState:c,...o,children:l})}},32134:(e,n,r)=>{r.r(n),r.d(n,{default:()=>d});var t=r(96540),i=r(82463),l=r(40473),a=r(21005),o=r(74848);const s=()=>(0,o.jsx)("div",{style:{height:"1050px",width:"100%"},children:(0,o.jsxs)(a.A,{container:!0,spacing:2,sx:{flexGrow:1},style:{height:"100vh",padding:20},children:[(0,o.jsxs)(a.A,{xs:6,children:[(0,o.jsx)(a.A,{container:!0,spacing:2,sx:{flexGrow:1},children:(0,o.jsxs)(a.A,{style:{display:"flex"},children:[(0,o.jsx)("div",{style:{height:"40px",width:"143px",paddingRight:"16px"},children:(0,o.jsx)(l.A,{})}),(0,o.jsx)("div",{style:{height:"40px",width:"318px",padding:"2px"},children:(0,o.jsx)(l.A,{})})]})}),(0,o.jsx)("div",{style:{width:"100%",height:"925px",marginTop:"16px"},children:(0,o.jsx)(l.A,{})})]}),(0,o.jsxs)(a.A,{xs:6,children:[(0,o.jsx)("div",{style:{width:"100%",height:"412px",marginBottom:"16px"},children:(0,o.jsx)(l.A,{})}),(0,o.jsx)("div",{style:{width:"100%",height:"566px",marginBottom:"16px"},children:(0,o.jsx)(l.A,{})})]})]})}),c=(0,t.lazy)((()=>Promise.all([r.e(1869),r.e(1432),r.e(9717),r.e(6412),r.e(5983)]).then(r.bind(r,91644)))),d=()=>(0,o.jsx)(i.A,{children:(0,o.jsx)(t.Suspense,{fallback:(0,o.jsx)(s,{}),children:(0,o.jsx)(c,{})})})}}]);