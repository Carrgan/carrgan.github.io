"use strict";(self.webpackChunkcarrgan_io=self.webpackChunkcarrgan_io||[]).push([[5533],{27887:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(74848),r=t(28453);const s={},c="\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u901a\u884c\u65b9\u5f0f",o={id:"Java/intercommunication-in-distributed-systems",title:"\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u901a\u884c\u65b9\u5f0f",description:"\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\uff0c\u4e0d\u540c\u7684\u7ec4\u4ef6\u6216\u670d\u52a1\u53ef\u80fd\u90e8\u7f72\u5728\u4e0d\u540c\u7684\u7269\u7406\u6216\u865a\u62df\u673a\u4e0a\uff0c\u5b83\u4eec\u901a\u8fc7\u7f51\u7edc\u8fdb\u884c\u901a\u4fe1\u3002\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u7684\u7ec4\u4ef6\u4e4b\u95f4\u901a\u5e38\u4f7f\u7528\u7f51\u7edc\u534f\u8bae\u6765\u8fdb\u884c\u4e92\u76f8\u8c03\u7528\u3002\u4ee5\u4e0b\u662f\u5e38\u89c1\u7684\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e4b\u95f4\u4e92\u76f8\u8c03\u7528\u7684\u65b9\u5f0f\uff1a",source:"@site/notes/Java/intercommunication-in-distributed-systems.md",sourceDirName:"Java",slug:"/Java/intercommunication-in-distributed-systems",permalink:"/notes/Java/intercommunication-in-distributed-systems",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u52a1\u5904\u7406\u4e2d\u95f4",permalink:"/notes/Java/Middleware/transaction-processing-middleware"},next:{title:"Midi",permalink:"/notes/LogicPro/midi"}},a={},l=[];function d(n){const e={h1:"h1",li:"li",ol:"ol",p:"p",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u901a\u884c\u65b9\u5f0f",children:"\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u901a\u884c\u65b9\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\uff0c\u4e0d\u540c\u7684\u7ec4\u4ef6\u6216\u670d\u52a1\u53ef\u80fd\u90e8\u7f72\u5728\u4e0d\u540c\u7684\u7269\u7406\u6216\u865a\u62df\u673a\u4e0a\uff0c\u5b83\u4eec\u901a\u8fc7\u7f51\u7edc\u8fdb\u884c\u901a\u4fe1\u3002\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u7684\u7ec4\u4ef6\u4e4b\u95f4\u901a\u5e38\u4f7f\u7528\u7f51\u7edc\u534f\u8bae\u6765\u8fdb\u884c\u4e92\u76f8\u8c03\u7528\u3002\u4ee5\u4e0b\u662f\u5e38\u89c1\u7684\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e4b\u95f4\u4e92\u76f8\u8c03\u7528\u7684\u65b9\u5f0f\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\uff08Remote Procedure Call, RPC\uff09\uff1a\nRPC\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e4b\u95f4\u901a\u4fe1\u7684\u65b9\u5f0f\u3002\u5728RPC\u4e2d\uff0c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u8c03\u7528\u53e6\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u8fc7\u7a0b\u6216\u65b9\u6cd5\uff0c\u5c31\u50cf\u8c03\u7528\u672c\u5730\u65b9\u6cd5\u4e00\u6837\u3002\u5e95\u5c42\u901a\u4fe1\u7ec6\u8282\u88ab\u5c01\u88c5\u5728RPC\u6846\u67b6\u4e2d\uff0c\u5f00\u53d1\u4eba\u5458\u4e0d\u9700\u8981\u624b\u52a8\u5904\u7406\u7f51\u7edc\u901a\u4fe1\u3002\n\u5e38\u89c1\u7684RPC\u6846\u67b6\u6709gRPC\u3001Apache Thrift\u3001Apache Dubbo\u7b49\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"RESTful API\uff1a\nRESTful API\u662f\u53e6\u4e00\u79cd\u5e38\u89c1\u7684\u5206\u5e03\u5f0f\u7cfb\u7edf\u901a\u4fe1\u65b9\u5f0f\u3002\u5728RESTful API\u4e2d\uff0c\u6bcf\u4e2a\u7ec4\u4ef6\u901a\u8fc7HTTP\u534f\u8bae\u63d0\u4f9bAPI\u63a5\u53e3\uff0c\u5176\u4ed6\u7ec4\u4ef6\u53ef\u4ee5\u4f7f\u7528HTTP\u8bf7\u6c42\u6765\u8c03\u7528\u8fd9\u4e9bAPI\u3002\u901a\u5e38\uff0c\u8fd9\u4e9bAPI\u8fd4\u56deJSON\u6216XML\u7b49\u683c\u5f0f\u7684\u6570\u636e\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6d88\u606f\u961f\u5217\uff1a\n\u6d88\u606f\u961f\u5217\u662f\u4e00\u79cd\u5f02\u6b65\u901a\u4fe1\u7684\u65b9\u5f0f\uff0c\u7528\u4e8e\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u53d1\u9001\u548c\u63a5\u6536\u6d88\u606f\u3002\u4e00\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u5c06\u6d88\u606f\u53d1\u9001\u5230\u6d88\u606f\u961f\u5217\u4e2d\uff0c\u5176\u4ed6\u7ec4\u4ef6\u53ef\u4ee5\u8ba2\u9605\u8be5\u6d88\u606f\u5e76\u5904\u7406\u5b83\u3002\u8fd9\u79cd\u65b9\u5f0f\u652f\u6301\u89e3\u8026\u548c\u5f02\u6b65\u901a\u4fe1\uff0c\u53ef\u4ee5\u63d0\u9ad8\u7cfb\u7edf\u7684\u53ef\u4f38\u7f29\u6027\u548c\u53ef\u9760\u6027\u3002\n\u5e38\u89c1\u7684\u6d88\u606f\u961f\u5217\u7cfb\u7edf\u6709Apache Kafka\u3001RabbitMQ\u3001ActiveMQ\u7b49\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"gRPC-Web\uff1a\ngRPC-Web\u662fgRPC\u7684Web\u7248\u672c\uff0c\u5b83\u5141\u8bb8\u5728Web\u6d4f\u89c8\u5668\u4e2d\u4f7f\u7528gRPC\u3002\u7531\u4e8e\u539f\u751f\u7684gRPC\u53ea\u652f\u6301HTTP/2\uff0c\u800cWeb\u6d4f\u89c8\u5668\u4e2d\u7684JavaScript\u4ee3\u7801\u53ea\u80fd\u4f7f\u7528HTTP/1.1\uff0c\u56e0\u6b64gRPC-Web\u5728Web\u73af\u5883\u4e0b\u63d0\u4f9b\u4e86gRPC\u529f\u80fd\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"WebSocket\uff1a\nWebSocket\u662f\u4e00\u79cd\u5168\u53cc\u5de5\u901a\u4fe1\u534f\u8bae\uff0c\u5b83\u5141\u8bb8\u5728\u4e00\u4e2a\u5355\u4e00\u7684TCP\u8fde\u63a5\u4e0a\u8fdb\u884c\u53cc\u5411\u901a\u4fe1\u3002WebSocket\u5e38\u7528\u4e8e\u5b9e\u65f6\u5e94\u7528\u7a0b\u5e8f\uff0c\u5982\u804a\u5929\u5e94\u7528\u7a0b\u5e8f\u548c\u5b9e\u65f6\u6e38\u620f\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\uff0c\u4e0a\u8ff0\u901a\u4fe1\u65b9\u5f0f\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\uff0c\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u9002\u5f53\u7684\u901a\u4fe1\u65b9\u5f0f\u3002\u4f8b\u5982\uff0c\u524d\u7aef\u5e94\u7528\u53ef\u4ee5\u901a\u8fc7RESTful API\u4e0e\u540e\u7aef\u670d\u52a1\u901a\u4fe1\uff0c\u540e\u7aef\u670d\u52a1\u4e4b\u95f4\u53ef\u4ee5\u4f7f\u7528RPC\u6216\u6d88\u606f\u961f\u5217\u8fdb\u884c\u901a\u4fe1\u3002\u4e0d\u540c\u7684\u901a\u4fe1\u65b9\u5f0f\u6709\u4e0d\u540c\u7684\u9002\u7528\u573a\u666f\u548c\u7279\u70b9\uff0c\u56e0\u6b64\u5728\u8bbe\u8ba1\u5206\u5e03\u5f0f\u7cfb\u7edf\u65f6\u9700\u8981\u7efc\u5408\u8003\u8651\u5404\u79cd\u56e0\u7d20\u3002"})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function c(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);