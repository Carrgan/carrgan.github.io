"use strict";(self.webpackChunkcarrgan_io=self.webpackChunkcarrgan_io||[]).push([[9352],{64505:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=t(74848),r=t(28453);const s={sidebar_label:"\u4f55\u65f6\u4f7f\u7528Logging",title:"\u4f55\u65f6\u4f7f\u7528Logging",sidebar_position:9},l=void 0,d={id:"Python/logging",title:"\u4f55\u65f6\u4f7f\u7528Logging",description:"| \u4f60\u60f3\u8981\u6267\u884c\u7684\u4efb\u52a1 | \u6b64\u4efb\u52a1\u6700\u597d\u7684\u5de5\u5177 |",source:"@site/notes/Python/logging.md",sourceDirName:"Python",slug:"/Python/logging",permalink:"/notes/Python/logging",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"\u4f55\u65f6\u4f7f\u7528Logging",title:"\u4f55\u65f6\u4f7f\u7528Logging",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u6b63\u5219",permalink:"/notes/Python/regular"},next:{title:"\u7c7b\u578b\u63d0\u793a",permalink:"/notes/Python/typing"}},o={},c=[{value:"\u8bb0\u5f55\u65e5\u5fd7\u5230\u6587\u4ef6",id:"\u8bb0\u5f55\u65e5\u5fd7\u5230\u6587\u4ef6",level:2}];function g(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u4f60\u60f3\u8981\u6267\u884c\u7684\u4efb\u52a1"}),(0,i.jsx)(e.th,{children:"\u6b64\u4efb\u52a1\u6700\u597d\u7684\u5de5\u5177"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u5bf9\u4e8e\u547d\u4ee4\u884c\u6216\u7a0b\u5e8f\u7684\u5e94\u7528\uff0c\u7ed3\u679c\u663e\u793a\u5728\u63a7\u5236\u53f0"}),(0,i.jsx)(e.td,{children:"print()"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u5bf9\u7a0b\u5e8f\u666e\u901a\u64cd\u4f5c\u53d1\u751f\u65f6\u63d0\u4ea4\u4e8b\u4ef6\u62a5\u544a"}),(0,i.jsx)(e.td,{children:"logging.info()\u51fd\u6570\uff0c\u5f53\u6709\u8bca\u65ad\u76ee\u7684\u9700\u8981\u8be6\u7ec6\u8f93\u51fa\u4fe1\u606f\u65f6\u4f7f\u7528 logging.debug() \u51fd\u6570)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u63d0\u51fa\u4e00\u4e2a\u8b66\u544a\u4fe1\u606f\u57fa\u4e8e\u4e00\u4e2a\u7279\u6b8a\u7684\u8fd0\u884c\u65f6\u4e8b\u4ef6"}),(0,i.jsx)(e.td,{children:"warnings.warn() \u4f4d\u4e8e\u4ee3\u7801\u5e93\u4e2d\uff0c\u8be5\u4e8b\u4ef6\u662f\u53ef\u4ee5\u907f\u514d\u7684\uff0c\u9700\u8981\u4fee\u6539\u5ba2\u6237\u7aef\u5e94\u7528\u4ee5\u6d88\u9664\u544a\u8b66\uff0clogging.warning() \u4e0d\u9700\u8981\u4fee\u6539\u5ba2\u6237\u7aef\u5e94\u7528\uff0c\u4f46\u662f\u8be5\u4e8b\u4ef6\u8fd8\u662f\u9700\u8981\u5f15\u8d77\u5173\u6ce8"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u5bf9\u4e00\u4e2a\u7279\u6b8a\u7684\u8fd0\u884c\u65f6\u4e8b\u4ef6\u62a5\u544a\u9519\u8bef"}),(0,i.jsx)(e.td,{children:"\u5f15\u53d1\u5f02\u5e38"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u62a5\u544a\u9519\u8bef\u800c\u4e0d\u5f15\u53d1\u5f02\u5e38(\u5982\u5728\u957f\u65f6\u95f4\u8fd0\u884c\u4e2d\u7684\u670d\u52a1\u7aef\u8fdb\u7a0b\u7684\u9519\u8bef\u5904\u7406)"}),(0,i.jsx)(e.td,{children:"logging.error(), logging.exception() \u6216 logging.critical() \u5206\u522b\u9002\u7528\u4e8e\u7279\u5b9a\u7684\u9519\u8bef\u53ca\u5e94\u7528\u9886\u57df"})]})]})]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u7ea7\u522b"}),(0,i.jsx)(e.th,{children:"\u4f55\u65f6\u4f7f\u7528"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"DEBUG"}),(0,i.jsx)(e.td,{children:"\u7ec6\u8282\u4fe1\u606f\uff0c\u4ec5\u5f53\u8bca\u65ad\u95ee\u9898\u65f6\u9002\u7528"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"INFO"}),(0,i.jsx)(e.td,{children:"\u786e\u8ba4\u7a0b\u5e8f\u6309\u9884\u671f\u8fd0\u884c"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"WARNING"}),(0,i.jsx)(e.td,{children:"\u8868\u660e\u6709\u5df2\u7ecf\u6216\u5373\u5c06\u53d1\u751f\u7684\u610f\u5916\uff08\u4f8b\u5982\uff1a\u78c1\u76d8\u7a7a\u95f4\u4e0d\u8db3\uff09\u3002\u7a0b\u5e8f\u4ecd\u6309\u9884\u671f\u8fdb\u884c"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"ERROR"}),(0,i.jsx)(e.td,{children:"\u7531\u4e8e\u4e25\u91cd\u7684\u95ee\u9898\uff0c\u7a0b\u5e8f\u7684\u67d0\u4e9b\u529f\u80fd\u5df2\u7ecf\u4e0d\u80fd\u6b63\u5e38\u6267\u884c"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"\u4e25\u91cd\u7684\u9519\u8bef\uff0c\u8868\u660e\u7a0b\u5e8f\u5df2\u4e0d\u80fd\u7ee7\u7eed\u6267\u884c"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8bb0\u5f55\u65e5\u5fd7\u5230\u6587\u4ef6",children:"\u8bb0\u5f55\u65e5\u5fd7\u5230\u6587\u4ef6"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import logging\n\n\"\"\"\nlogging.basicConfig\u51fd\u6570\u5404\u53c2\u6570:\nfilename: \u6307\u5b9a\u65e5\u5fd7\u6587\u4ef6\u540d\nfilemode: \u548cfile\u51fd\u6570\u610f\u4e49\u76f8\u540c\uff0c\u6307\u5b9a\u65e5\u5fd7\u6587\u4ef6\u7684\u6253\u5f00\u6a21\u5f0f\uff0c'w'\u6216'a'\nformat: \u6307\u5b9a\u8f93\u51fa\u7684\u683c\u5f0f\u548c\u5185\u5bb9\uff0cformat\u53ef\u4ee5\u8f93\u51fa\u5f88\u591a\u6709\u7528\u4fe1\u606f\uff0c\u5982\u4e0a\u4f8b\u6240\u793a:\n %(levelno)s: \u6253\u5370\u65e5\u5fd7\u7ea7\u522b\u7684\u6570\u503c\n %(levelname)s: \u6253\u5370\u65e5\u5fd7\u7ea7\u522b\u540d\u79f0\n %(pathname)s: \u6253\u5370\u5f53\u524d\u6267\u884c\u7a0b\u5e8f\u7684\u8def\u5f84\uff0c\u5176\u5b9e\u5c31\u662fsys.argv[0]\n %(filename)s: \u6253\u5370\u5f53\u524d\u6267\u884c\u7a0b\u5e8f\u540d\n %(funcName)s: \u6253\u5370\u65e5\u5fd7\u7684\u5f53\u524d\u51fd\u6570\n %(lineno)d: \u6253\u5370\u65e5\u5fd7\u7684\u5f53\u524d\u884c\u53f7\n %(asctime)s: \u6253\u5370\u65e5\u5fd7\u7684\u65f6\u95f4\n %(thread)d: \u6253\u5370\u7ebf\u7a0bID\n %(threadName)s: \u6253\u5370\u7ebf\u7a0b\u540d\u79f0\n %(process)d: \u6253\u5370\u8fdb\u7a0bID\n %(message)s: \u6253\u5370\u65e5\u5fd7\u4fe1\u606f\ndatefmt: \u6307\u5b9a\u65f6\u95f4\u683c\u5f0f\uff0c\u540ctime.strftime()\nlevel: \u8bbe\u7f6e\u65e5\u5fd7\u7ea7\u522b\uff0c\u9ed8\u8ba4\u4e3alogging.WARNING\nstream: \u6307\u5b9a\u5c06\u65e5\u5fd7\u7684\u8f93\u51fa\u6d41\uff0c\u53ef\u4ee5\u6307\u5b9a\u8f93\u51fa\u5230sys.stderr,sys.stdout\u6216\u8005\u6587\u4ef6\uff0c\u9ed8\u8ba4\u8f93\u51fa\u5230sys.stderr\uff0c\u5f53stream\u548cfilename\u540c\u65f6\u6307\u5b9a\u65f6\uff0cstream\u88ab\u5ffd\u7565\n\"\"\"\nlogger = logging.getLogger(__name__)    # \u5982\u679c\u5728\u5305\u91cc\u9762\u53ef\u4ee5\u663e\u793a\u5177\u4f53\u4f4d\u7f6e\nlogging.basicConfig(level=logging.DEBUG,\n                    format='%(levelname)s %(asctime)s %(threadName)s  %(funcName)s  %(filename)s[line:%(lineno)d] %('\n                           'message)s',\n                    datefmt='%a, %d %b %Y %H:%M:%S',\n                    #    filename=logfile_path,\n                    filemode='w')\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u2018r\u2019\t\u53ea\u8bfb\u6a21\u5f0f\uff0c\u5982\u679c\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u8fd4\u56de\u5f02\u5e38FileNotFoundError,\u9ed8\u8ba4\u503c\n\u2018w\u2019\t\u8986\u76d6\u5199\u6a21\u5f0f,\u6587\u4ef6\u4e0d\u5b58\u5728\u5219\u521b\u5efa\uff0c\u5b58\u5728\u5219\u5b8c\u5168\u8986\u76d6\n\u2018x\u2019\t\u521b\u5efa\u5199\u6a21\u5f0f,\u6587\u4ef6\u4e0d\u5b58\u5728\u5219\u521b\u5efa\uff0c\u5b58\u5728\u5219\u8fd4\u56de\u5f02\u5e38FileExistsError\n\u2018a\u2019\t\u8ffd\u52a0\u5199\u6a21\u5f0f,\u6587\u4ef6\u4e0d\u5b58\u5728\u5219\u521b\u5efa\uff0c\u5b58\u5728\u5219\u5728\u6587\u4ef6\u6700\u540e\u8ffd\u52a0\u5185\u5bb9\n\u2018b\u2019\t\u4e8c\u8fdb\u5236\u6587\u4ef6\u6a21\u5f0f\n\u2018t\u2019\t\u6587\u672c\u6587\u4ef6\u6a21\u5f0f,\u9ed8\u8ba4\u503c\n\u2018+\u2019\t\u4e0er/w/x/a \u4e00\u540c\u4f7f\u7528\uff0c\u5728\u539f\u529f\u80fd\u57fa\u7840\u4e0a\u589e\u52a0\u540c\u65f6\u8bfb\u5199\u529f\u80fd"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u666e\u901a\u9879\u76ee\u4e2d"}),"\n",(0,i.jsx)(e.li,{children:"import logging"}),"\n",(0,i.jsx)(e.li,{children:"logging.BasicConfig(...) #\u8bbe\u7f6e\u65e5\u5fd7\u8f93\u51fa\u7684\u6837\u5f0f\uff0c\u683c\u5f0f"}),"\n",(0,i.jsxs)(e.li,{children:["\u5b9e\u4f8b\u5316\u4e00\u4e2a ",(0,i.jsx)(e.code,{children:"1oger = logging.getLogger(__nane__)"})]}),"\n",(0,i.jsx)(e.li,{children:"\u5728\u4efb\u4f55 py \u6587\u4ef6\u4e2d\u8c03\u7528 logger \u5373\u53ef"}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(g,{...n})}):g(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>d});var i=t(96540);const r={},s=i.createContext(r);function l(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);