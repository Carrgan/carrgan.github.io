"use strict";(self.webpackChunkcarrgan_io=self.webpackChunkcarrgan_io||[]).push([[327],{46774:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=i(74848),o=i(28453);const c={},t=void 0,a={id:"Java/Basic/configration-annotation",title:"configration-annotation",description:"@Configration",source:"@site/notes/Java/Basic/configration-annotation.md",sourceDirName:"Java/Basic",slug:"/Java/Basic/configration-annotation",permalink:"/notes/Java/Basic/configration-annotation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Services",permalink:"/notes/DotNet/Services"},next:{title:"scope-annotation",permalink:"/notes/Java/Basic/scope-annotation"}},s={},d=[];function l(n){const e={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"@Configration"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728 Java \u4e2d\uff0c",(0,r.jsx)(e.code,{children:"@Configuration"})," \u6ce8\u89e3\u7528\u4e8e\u6807\u8bb0\u4e00\u4e2a\u7c7b\u4f5c\u4e3a Spring \u7684\u914d\u7f6e\u7c7b\u3002Spring \u914d\u7f6e\u7c7b\u4e3b\u8981\u7528\u4e8e\u5b9a\u4e49 Spring Bean \u7684\u521b\u5efa\u548c\u914d\u7f6e\uff0c\u4ee5\u53ca\u6267\u884c\u5176\u4ed6\u914d\u7f6e\u76f8\u5173\u7684\u4efb\u52a1\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5f53\u4f60\u5728\u4e00\u4e2a\u7c7b\u4e0a\u6dfb\u52a0 ",(0,r.jsx)(e.code,{children:"@Configuration"})," \u6ce8\u89e3\u65f6\uff0c\u5b83\u8868\u660e\u8fd9\u4e2a\u7c7b\u5c06\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,r.jsx)(e.code,{children:"@Bean"})," \u6ce8\u89e3\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u7528\u4e8e\u58f0\u660e\u548c\u5b9a\u4e49 Spring Bean\u3002",(0,r.jsx)(e.code,{children:"@Bean"})," \u6ce8\u89e3\u544a\u8bc9 Spring \u5bb9\u5668\u5982\u4f55\u521b\u5efa\u548c\u7ba1\u7406\u8fd9\u4e9b Bean\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u4e00\u4e2a\u7b80\u5355\u7684\u914d\u7f6e\u7c7b\u53ef\u80fd\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"@Configuration\npublic class AppConfig {\n\n    @Bean\n    public MyService myService() {\n        return new MyService();\n    }\n\n    // \u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a @Bean \u6ce8\u89e3\u7684\u65b9\u6cd5\n\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c",(0,r.jsx)(e.code,{children:"AppConfig"})," \u7c7b\u88ab\u6807\u8bb0\u4e3a\u914d\u7f6e\u7c7b\uff0c\u5e76\u4e14\u58f0\u660e\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,r.jsx)(e.code,{children:"myService"})," \u7684 Bean\u3002Spring \u5bb9\u5668\u5c06\u8c03\u7528 ",(0,r.jsx)(e.code,{children:"myService()"})," \u65b9\u6cd5\uff0c\u521b\u5efa\u4e00\u4e2a ",(0,r.jsx)(e.code,{children:"MyService"})," \u7c7b\u7684\u5b9e\u4f8b\uff0c\u5e76\u5c06\u5176\u7eb3\u5165\u5230\u5bb9\u5668\u7684\u7ba1\u7406\u4e2d\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u9664\u4e86\u5b9a\u4e49 Bean\uff0c\u914d\u7f6e\u7c7b\u8fd8\u53ef\u4ee5\u5305\u542b\u5176\u4ed6\u914d\u7f6e\u76f8\u5173\u7684\u4efb\u52a1\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"@ComponentScan"})," \u6ce8\u89e3\u6307\u5b9a\u8981\u626b\u63cf\u7684\u5305\uff0c\u4ee5\u81ea\u52a8\u6ce8\u518c\u5176\u4ed6\u7ec4\u4ef6\uff0c\u5305\u62ec ",(0,r.jsx)(e.code,{children:"@Service"}),"\u3001",(0,r.jsx)(e.code,{children:"@Component"})," \u7b49\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"@PropertySource"})," \u6ce8\u89e3\u6307\u5b9a\u5916\u90e8\u5c5e\u6027\u6587\u4ef6\uff0c\u4ee5\u4fbf\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"@Import"})," \u6ce8\u89e3\u5f15\u5165\u5176\u4ed6\u914d\u7f6e\u7c7b\uff0c\u4ee5\u7ec4\u5408\u591a\u4e2a\u914d\u7f6e\u7c7b\u7684\u529f\u80fd\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u914d\u7f6e\u7c7b\u5728 Spring \u5e94\u7528\u7a0b\u5e8f\u4e2d\u626e\u6f14\u7740\u91cd\u8981\u7684\u89d2\u8272\uff0c\u5b83\u4f7f\u5f97\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7 Java \u4ee3\u7801\u800c\u4e0d\u662f XML \u6587\u4ef6\u6765\u5b9a\u4e49\u548c\u7ec4\u7ec7 Spring Bean\uff0c\u4f7f\u914d\u7f6e\u66f4\u52a0\u7075\u6d3b\u548c\u65b9\u4fbf\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u914d\u7f6e\u7c7b\u9700\u8981\u548c\u5176\u4ed6\u7ec4\u4ef6\u4e00\u6837\uff0c\u88ab Spring \u5bb9\u5668\u626b\u63cf\u548c\u52a0\u8f7d\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u4f60\u9700\u8981\u5c06\u914d\u7f6e\u7c7b\u548c\u5176\u4ed6\u4e3b\u8981\u7ec4\u4ef6\u653e\u5728 Spring \u5bb9\u5668\u80fd\u591f\u626b\u63cf\u5230\u7684\u5305\u4e2d\uff0c\u6216\u8005\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"@ComponentScan"})," \u6ce8\u89e3\u6307\u5b9a\u8981\u626b\u63cf\u7684\u5305\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u540c\u6837\u53ef\u4ee5\u662f\u901a\u8fc7",(0,r.jsx)(e.code,{children:"@Scope"}),"\u6765\u6539\u53d8",(0,r.jsx)(e.code,{children:"@Bean"}),"\u7684\u751f\u547d\u5468\u671f"]})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>a});var r=i(96540);const o={},c=r.createContext(o);function t(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:t(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);