"use strict";(self.webpackChunkcarrgan_io=self.webpackChunkcarrgan_io||[]).push([[2176],{5507:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=t(74848),a=t(28453);const r={slug:"dynamic-height-container",title:"CSS\u81ea\u9002\u5e94\u56fa\u5b9a\u957f\u6b3e\u6bd4\u5bb9\u5668",authors:"carrgan",tags:["Front end","CSS"]},c="CSS\u5b9e\u73b0\u81ea\u9002\u5e94\u957f\u6b3e\u6bd4\u7684\u5bb9\u5668",s={permalink:"/tech-blog/dynamic-height-container",source:"@site/tech-blog/2022-03-27-dynamic-height.md",title:"CSS\u81ea\u9002\u5e94\u56fa\u5b9a\u957f\u6b3e\u6bd4\u5bb9\u5668",description:"Padding",date:"2022-03-27T00:00:00.000Z",tags:[{inline:!0,label:"Front end",permalink:"/tech-blog/tags/front-end"},{inline:!0,label:"CSS",permalink:"/tech-blog/tags/css"}],readingTime:1.13,hasTruncateMarker:!1,authors:[{name:"Carrgan Yang",title:"Software Engineer @ Ericsson",url:"https://github.com/carrgan",imageURL:"https://carrgan.github.io/img/avantar/carrgan.jpg",key:"carrgan"}],frontMatter:{slug:"dynamic-height-container",title:"CSS\u81ea\u9002\u5e94\u56fa\u5b9a\u957f\u6b3e\u6bd4\u5bb9\u5668",authors:"carrgan",tags:["Front end","CSS"]},unlisted:!1,prevItem:{title:"\u524d\u7aef\u7684\u73af\u5883\u53d8\u91cf",permalink:"/tech-blog/process-env-node-env"},nextItem:{title:"\u7528Hook\u505a\u9ad8\u7ea7\u5c01\u88c5",permalink:"/tech-blog/react/hook/advance-encapsulation"}},o={authorsImageUrls:[void 0]},d=[{value:"Padding",id:"padding",level:2},{value:"\u5bb9\u5668\u5b9e\u73b0",id:"\u5bb9\u5668\u5b9e\u73b0",level:2}];function l(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"padding",children:"Padding"}),"\n",(0,i.jsxs)(e.p,{children:["\u5b9e\u73b0\u81ea\u9002\u5e94\u957f\u6b3e\u6bd4\u7684\u5173\u952e\u5c31\u662fpadding\uff0c\u5728\u8bbe\u7f6epadding\u7684\u65f6\u5019\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"%"})," \u8ba1\u7b97\u7684\u503c\u662f\u6839\u636e\u5bbd\u5ea6\u8ba1\u7b97\u7684\uff0c"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4e5f\u5c31\u662f\u8bf4 ",(0,i.jsx)(e.code,{children:"padding: 50%"})," \u5176\u5b9e\u662f\u57fa\u4e8e\u5bb9\u5668\u5bbd\u5ea6\u768450%\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5bb9\u5668\u5b9e\u73b0",children:"\u5bb9\u5668\u5b9e\u73b0"}),"\n",(0,i.jsx)(e.p,{children:"\u6839\u636epadding\u7684\u8fd9\u4e00\u7279\u6027\u5b9e\u73b0\u8fd9\u4e00\u5bb9\u5668\u5c31\u5f88\u7b80\u5355\u4e86"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",metastring:'title="16/9\u5360\u6ee1\u5c4f\u5e55\u7684\u5bb9\u5668"',children:'<div class="container">\n  <div class="content"></div>\n</div>\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-css",metastring:'title="16/9\u5360\u6ee1\u5c4f\u5e55\u7684\u5bb9\u5668"',children:".container {\n    width: 100%;\n    padding-bottom: 56.25%\n}\n.content {\n    width: 100%;\n    height: 100%;\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u540c\u7406\u53ef\u5bf9\u4e00\u4e2a\u5bb9\u5668\u5b9e\u73b0\u4e00\u4e2a\u906e\u7f69\u5c42"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",metastring:'title="16/9\u5360\u6ee1\u5c4f\u5e55\u7684\u80cc\u666f\u548c\u4e00\u4e2a\u60ac\u6d6e\u5c45\u4e2d\u7684\u56fe\u6807"',children:'<div class="container">\n  <div class="background"></div>\n  <div class="content">\n    <svg width="35px" height="35px"></svg>\n  </div>\n</div>\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-css",metastring:'title="16/9\u5360\u6ee1\u5c4f\u5e55\u7684\u80cc\u666f\u548c\u4e00\u4e2a\u60ac\u6d6e\u5c45\u4e2d\u7684\u56fe\u6807"',children:".container {\n    width: 100%;\n    padding-bottom: 56.25%;\n    position: relative;\n    top: 0;\n    left: 0;\n}\n.background {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n}\n.content {\n    width: 100%;\n    position: absolute;\n    top: calc(50% - 35px);\n    left: calc(50% - 35px);\n    z-index: 2;\n}\n"})})]})}function g(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>s});var i=t(96540);const a={},r=i.createContext(a);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);