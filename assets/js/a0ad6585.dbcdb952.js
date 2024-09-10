"use strict";(self.webpackChunkcarrgan_io=self.webpackChunkcarrgan_io||[]).push([[7829],{8189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var o=n(4848),r=n(8453);const c={slug:"charp-db-context-out-of-controller",title:"\u5728Controller\u8fd4\u56de\u4e4b\u540e\uff0c\u5982\u4f55\u7ee7\u7eed\u4f7f\u7528DBContext",authors:"carrgan",tags:["csharp"]},a=void 0,l={permalink:"/tech-blog/charp-db-context-out-of-controller",source:"@site/tech-blog/2023-7-28-charp-db-context-out-of-controller.md",title:"\u5728Controller\u8fd4\u56de\u4e4b\u540e\uff0c\u5982\u4f55\u7ee7\u7eed\u4f7f\u7528DBContext",description:"\u5728 .NET \u4e2d\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u9700\u8981\u5f02\u6b65\u6267\u884c\u4e00\u4e9b\u4ee3\u7801\u7684\u60c5\u51b5\uff0c\u5728 Controller \u8fd4\u56de\u4e4b\u540e\uff0c\u5c1d\u8bd5\u4f7f\u7528\u6ce8\u5165\u7684 DbContext \u4f1a\u51fa\u9519\u3002\u8fd9\u901a\u5e38\u662f\u56e0\u4e3a DbContext \u7684\u751f\u547d\u5468\u671f\u4e0e Controller \u4e0d\u540c\uff0c\u5bfc\u81f4 DbContext \u5df2\u7ecf\u5931\u6548\u6216\u5df2\u88ab\u9500\u6bc1\u3002",date:"2023-07-28T00:00:00.000Z",tags:[{inline:!0,label:"csharp",permalink:"/tech-blog/tags/csharp"}],readingTime:2.81,hasTruncateMarker:!1,authors:[{name:"Carrgan Yang",title:"Software Engineer @ Ericsson",url:"https://github.com/carrgan",imageURL:"https://carrgan.github.io/img/avantar/carrgan.jpg",key:"carrgan"}],frontMatter:{slug:"charp-db-context-out-of-controller",title:"\u5728Controller\u8fd4\u56de\u4e4b\u540e\uff0c\u5982\u4f55\u7ee7\u7eed\u4f7f\u7528DBContext",authors:"carrgan",tags:["csharp"]},unlisted:!1,prevItem:{title:"Code beat first MVP",permalink:"/tech-blog/code-beat-first-mvp"},nextItem:{title:"\u524d\u7aef\u7684\u73af\u5883\u53d8\u91cf",permalink:"/tech-blog/process-env-node-env"}},s={authorsImageUrls:[void 0]},i=[];function p(e){const t={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"\u5728 .NET \u4e2d\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u9700\u8981\u5f02\u6b65\u6267\u884c\u4e00\u4e9b\u4ee3\u7801\u7684\u60c5\u51b5\uff0c\u5728 Controller \u8fd4\u56de\u4e4b\u540e\uff0c\u5c1d\u8bd5\u4f7f\u7528\u6ce8\u5165\u7684 DbContext \u4f1a\u51fa\u9519\u3002\u8fd9\u901a\u5e38\u662f\u56e0\u4e3a DbContext \u7684\u751f\u547d\u5468\u671f\u4e0e Controller \u4e0d\u540c\uff0c\u5bfc\u81f4 DbContext \u5df2\u7ecf\u5931\u6548\u6216\u5df2\u88ab\u9500\u6bc1\u3002"}),"\n",(0,o.jsx)(t.p,{children:"\u5728 ASP.NET Core \u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u4f9d\u8d56\u6ce8\u5165\u6765\u7ba1\u7406 DbContext \u7684\u751f\u547d\u5468\u671f\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cASP.NET Core \u4f7f\u7528 Scoped \u751f\u547d\u5468\u671f\u6765\u6ce8\u518c DbContext\uff0c\u8fd9\u610f\u5473\u7740\u6bcf\u4e2a\u8bf7\u6c42\u5c06\u83b7\u5f97\u4e00\u4e2a\u72ec\u7acb\u7684 DbContext \u5b9e\u4f8b\u3002\u8fd9\u901a\u5e38\u662f\u5f88\u597d\u7684\uff0c\u56e0\u4e3a\u8fd9\u79cd\u751f\u547d\u5468\u671f\u7684 DbContext \u53ef\u4ee5\u5728\u8bf7\u6c42\u5904\u7406\u671f\u95f4\u6301\u4e45\u5316\u8de8\u8d8a\u591a\u4e2a\u64cd\u4f5c\u7684\u72b6\u6001\u3002"}),"\n",(0,o.jsx)(t.p,{children:"\u5982\u679c\u4f60\u5728 Controller \u8fd4\u56de\u4e4b\u540e\u4ecd\u9700\u8981\u4f7f\u7528\u5df2\u6ce8\u5165\u7684 DbContext\uff0c\u5219\u53ef\u4ee5\u5c1d\u8bd5\u4ee5\u4e0b\u65b9\u6cd5\u4e4b\u4e00\uff1a"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"\u5c06 DbContext \u6ce8\u518c\u4e3a Singleton \u751f\u547d\u5468\u671f\u3002"}),"\n",(0,o.jsx)(t.p,{children:"\u5982\u679c\u4f60\u660e\u786e\u4e86\u89e3\u4f60\u5e94\u7528\u4e2d DbContext \u7684\u751f\u547d\u5468\u671f\uff0c\u5e76\u4e14\u4f60\u9700\u8981\u5728 Controller \u7ed3\u675f\u65f6\u540e\u7ee7\u7eed\u4f7f\u7528 DbContext \u5b9e\u4f8b\uff0c\u5219\u53ef\u4ee5\u5c06\u5176\u6ce8\u518c\u4e3a Singleton \u751f\u547d\u5468\u671f\u3002\u4f46\u662f\u8fd9\u901a\u5e38\u4e0d\u662f\u4e00\u4e2a\u597d\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u56e0\u4e3a DbContext \u662f\u4e0d\u662f\u4e00\u4e2a\u7ebf\u7a0b\u5b89\u5168\u7684\u5bf9\u8c61\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:"services.AddSingleton<MyDbContext>();\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"\u4f7f\u7528 DbContextPool"}),"\n",(0,o.jsx)(t.p,{children:"ASP.NET Core \u4e2d\u7684 DbContext \u6c60\u5316\u63d0\u4f9b\u4e86\u4e00\u79cd DbContext \u7684\u91cd\u65b0\u5229\u7528\u673a\u5236\uff0c\u53ef\u4ee5\u5728 DbContext \u5b9e\u4f8b\u4e0d\u518d\u4f7f\u7528\u65f6\u81ea\u52a8\u9500\u6bc1 DbContext\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002\u82e5\u8981\u4f7f\u7528 DbContextPool\uff0c\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"}),"\n",(0,o.jsx)(t.p,{children:"\u9996\u5148\uff0c\u9700\u8981\u5c06 DbContext \u6ce8\u518c\u4e3a Scoped \u751f\u547d\u5468\u671f\uff0c\u7136\u540e\u5728 Startup \u7c7b\u7684 ConfigureServices \u65b9\u6cd5\u4e2d\u542f\u7528 context \u6c60:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:'services.AddDbContextPool<MyDbContext>(options =>\n    options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"))\n         .UseLoggerFactory(loggerFactory) // \u9009\u586b\u65e5\u5fd7\u5de5\u5382\n         .EnableSensitiveDataLogging(true)); // \u542f\u7528\u654f\u611f\u6570\u636e\u8bb0\u5f55\n'})}),"\n",(0,o.jsx)(t.p,{children:"\u63a5\u4e0b\u6765\uff0c\u5728\u9700\u8981\u4f7f\u7528 DbContext \u7684\u5730\u65b9\uff0c\u9700\u8981\u5728 IServiceScopeFactory \u63a5\u53e3\u4e2d\u4f7f\u7528 scoped \u670d\u52a1\u5bf9\u8c61\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:"public class MyController : ControllerBase\n{\n    private readonly IServiceScopeFactory _scopeFactory;\n\npublic MyController(IServiceScopeFactory scopeFactory)\n{\n     _scopeFactory = scopeFactory;\n}\n\nprivate async Task<MyEntity> GetMyEntityAsync(int id)\n{\n    using (var scope = _scopeFactory.CreateScope())\n  {\n      var dbContext = scope.ServiceProvider.GetRequiredService<MyDbContext>();\n      return await dbContext.MyEntities.FindAsync(id);\n  }\n}\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u5728\u4e0a\u8ff0\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u4f7f\u7528 scoped \u751f\u547d\u5468\u671f\u7684 DbContext \u7684\u4f5c\u7528\u57df\uff0c\u7136\u540e\u4f7f\u7528\u8be5\u4f5c\u7528\u57df\u4e2d\u7684 DbContext \u6765\u5230\u67e5\u8be2 MyEntity \u5b9e\u4f53\u7684\u8bb0\u5f55\u3002\u4e4b\u6240\u4ee5\u8981\u4f7f\u7528\u4f5c\u7528\u57df\uff0c\u662f\u56e0\u4e3a\u5728 Controller \u8fd4\u56de\u4e4b\u540e\uff0c\u4f5c\u7528\u57df\u5c06\u88ab\u9500\u6bc1\uff0c\u7531\u6b64\u4ea7\u751f\u7684 DbContext \u5b9e\u4f8b\u4e5f\u5c06\u88ab\u9500\u6bc1\u6216\u91cd\u65b0\u653e\u5165 DbContext \u6c60\u4e2d\uff0c\u4ee5\u4fbf\u5c06\u6765\u7684\u8bf7\u6c42\u4f7f\u7528\u3002"}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var o=n(6540);const r={},c=o.createContext(r);function a(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);