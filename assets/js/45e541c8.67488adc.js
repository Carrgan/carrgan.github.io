"use strict";(self.webpackChunkcarrgan_io=self.webpackChunkcarrgan_io||[]).push([[2372],{2617:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=s(4848),l=s(8453);const i={sidebar_label:"\u7c7b\u578b\u63d0\u793a",title:"\u7c7b\u578b\u63d0\u793a",sidebar_position:10},t=void 0,c={id:"Python/typing",title:"\u7c7b\u578b\u63d0\u793a",description:"\u7b80\u4ecb",source:"@site/notes/Python/typing.md",sourceDirName:"Python",slug:"/Python/typing",permalink:"/notes/Python/typing",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"\u7c7b\u578b\u63d0\u793a",title:"\u7c7b\u578b\u63d0\u793a",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\u4f55\u65f6\u4f7f\u7528Logging",permalink:"/notes/Python/logging"},next:{title:"request",permalink:"/notes/Python/request"}},a={},o=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u7c7b\u578b\u522b\u540d",id:"\u7c7b\u578b\u522b\u540d",level:2},{value:"NewType",id:"newtype",level:2},{value:"\u53ef\u8c03\u5bf9\u8c61\uff08Callable\uff09",id:"\u53ef\u8c03\u5bf9\u8c61callable",level:2},{value:"\u6cdb\u578b\uff08Generic\uff09",id:"\u6cdb\u578bgeneric",level:2},{value:"Any \u7c7b\u578b",id:"any-\u7c7b\u578b",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,r.jsx)(n.p,{children:"Typing\u662f python3.5 \u65b0\u589e\u7684\u7279\u6027\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u529f\u80fd\u7c7b\u4f3cTypescript\uff0c\u5728",(0,r.jsx)(n.strong,{children:"\u8fd0\u884c\u65f6\u6240\u6709\u7c7b\u578b\u63d0\u793a\u5c06\u88ab\u5ffd\u7565"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u7b80\u5355\u6765\u8bf4\uff0c\u662f\u7528\u6765\u7ed9IDE\u4e4b\u7c7b\u7684\u5177\u6709\u7c7b\u578b\u68c0\u67e5\u529f\u80fd\u7684\u5de5\u5177\uff0c\u6765\u5e2e\u52a9\u6211\u4eec\u68c0\u67e5\u903b\u8f91\u7684\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u7b80\u5355\u7684\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def fibonacci(count: int) -> list:\n    pass\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u58f0\u660e\u4e86\u63a5\u53d7\u53c2\u6570count\u662f\u4e00\u4e2a\u6574\u6570\uff0c\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u5217\u8868\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u4f60\u5728IDE\u4e2d\u8c03\u7528fibonacci\u51fd\u6570\u65f6\u672a\u4f20\u5165int\u7c7b\u578b\uff0c\u6216\u8005\u672a\u8fd4\u56delist\u7c7b\u578b\u65f6\u4f1a\u505a\u63d0\u793a\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u7c7b\u578b\u522b\u540d",children:"\u7c7b\u578b\u522b\u540d"}),"\n",(0,r.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u7c7b\u578b\u5b9a\u4e49\u4e00\u4e2a\u522b\u540d"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"ConnectionOptions = dict[str, str]\nAddress = tuple[str, int]\nServer = tuple[Address, ConnectionOptions]\n\n# Server\u7684\u7ed3\u6784\u5b9e\u9645\u4e0a\u662f\nServer = tuple[dict[str, str], tuple[str, int]]\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u6837\u7684\u522b\u540d\u5b9e\u9645\u4e0a\u5927\u5927\u7b80\u5316\u4e86\u6211\u4eec\u5bf9\u590d\u6742\u7ed3\u6784\u7684\u6784\u9020\uff0c\u7ed3\u6784\u4e5f\u66f4\u6e05\u6670\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u5b9e\u9645\u4e0a\u53ef\u4ee5\u53d1\u73b0\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"{2}",children:">>> type(Address)\n<class 'types.GenericAlias'>\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"tuple[str, int]"}),"\u8fd9\u6837\u7684\u8bed\u6cd5\u5b9e\u9645\u662f\u521b\u5efa\u4e86\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"types.GenericAlias"}),"\u7684\u5b9e\u4f8b\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"{2}",children:">>> isinstance(Address, types.GenericAlias)\nTrue\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6240\u4ee5\u5728runtime\u6211\u4eec\u5b9e\u9645\u4e0a\u4e0d\u80fd\u505a\u7c7b\u578b\u5224\u65ad"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:">>> isinstance(('local', 127.0.0.1), Address)\nTraceback (most recent call last):\n  File \"<stdin>\", line 1, in <module>\nTypeError: isinstance() argument 2 cannot be a parameterized generic\n"})}),"\n",(0,r.jsx)(n.h2,{id:"newtype",children:"NewType"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"NewType()"})," \u8f85\u52a9\u51fd\u6570\u53ef\u521b\u5efa\u4e0d\u540c\u7684\u65b0\u7c7b\u578b\uff1a"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u9759\u6001\u7c7b\u578b"}),"\u68c0\u67e5\u5668\u628a\u65b0\u7c7b\u578b\u5f53\u4f5c\u539f\u59cb\u7c7b\u578b\u7684\u5b50\u7c7b\uff0c\u8fd9\u79cd\u65b9\u5f0f\u9002\u7528\u4e8e\u6355\u6349\u903b\u8f91\u9519\u8bef\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from typing import NewType\n\nUserId = NewType('UserId', int)\nsome_id = UserId(524313)\n\ndef get_user_name(user_id: UserId) -> str:\n    ...\n\n# \u7c7b\u578b\u68c0\u67e5\nuser_a = get_user_name(UserId(42351))\n\n# IDE\u63d0\u793a\u5e94\u8be5\u4f20\u5165UserId\nuser_b = get_user_name(-1)\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"UserId \u4e0d\u662f\u4e00\u4e2a\u771f\u7684\u7c7b\uff01"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:">>> type(UserId)\n<class 'function'>\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5b9e\u9645\u4e0aUserId\u662f\u4e00\u4e2a\u7acb\u5373\u8fd4\u56de\u51fd\u6570\uff0c\u4f60\u4f20\u5165\u4ec0\u4e48\u503c\u8fd4\u56de\u4ec0\u4e48\u503c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:">>> UserId(123)\n123\n>>> UserId([])\n[]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53ef\u8c03\u5bf9\u8c61callable",children:"\u53ef\u8c03\u5bf9\u8c61\uff08Callable\uff09"}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u4e8b\u5148\u58f0\u660ecallback\u51fd\u6570\u5c06\u88ab\u4f20\u5165\u4ec0\u4e48\u53c2\u6570\uff0c\u66f4\u6e05\u6670\u7684\u5904\u7406callback"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nfrom collections.abc import Callable\n\ndef async_function(on_success: Callable[Address, ConnectionOptions],\n                on_error: Callable[[int, Exception], Message]) -> None:\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6cdb\u578bgeneric",children:"\u6cdb\u578b\uff08Generic\uff09"}),"\n",(0,r.jsx)(n.p,{children:"\u62bd\u8c61\u7c7b\u578b\u4e2d\u4e0d\u80fd\u88ab\u786e\u5207\u5b9a\u4e49\u7684\u7c7b\u578b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from typing import TypeVar\n\nT = TypeVar('T')      # \u58f0\u660e\u6cdb\u578b\n\nS = TypeVar('S', int, str) # \u679a\u4e3e\u53ef\u80fd\u7684\u7c7b\u578b\n\ndef first(l: Sequence[T]) -> T:   # Generic function\n    return l[0]\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7c7b\u4e2d\u4f7f\u7528\u6cdb\u578b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from typing import TypeVar, Generic\nfrom logging import Logger\n\nT = TypeVar('T')\n\nclass LoggedVar(Generic[T]):\n\n    \"\"\"\n    \u7ee7\u627f\u81eaGeneric\u7684\u5b50\u7c7b\u4e2d\uff0cT\u662f\u6709\u6548\u7684\u7c7b\u578b\u3002\n    \"\"\"\n\n    def __init__(self, value: T, name: str, logger: Logger) -> None:\n        self.name = name\n        self.logger = logger\n        self.value = value\n\n    def set(self, new: T) -> None:\n        self.log('Set ' + repr(self.value))\n        self.value = new\n\n    def get(self) -> T:\n        self.log('Get ' + repr(self.value))\n        return self.value\n\n    def log(self, message: str) -> None:\n        self.logger.info('%s: %s', self.name, message)\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"any-\u7c7b\u578b",children:"Any \u7c7b\u578b"}),"\n",(0,r.jsx)(n.p,{children:"Any \u662f\u4e00\u79cd\u7279\u6b8a\u7684\u7c7b\u578b\u3002\u9759\u6001\u7c7b\u578b\u68c0\u67e5\u5668\u8ba4\u4e3a\u6240\u6709\u7c7b\u578b\u5747\u4e0e Any \u517c\u5bb9\uff0c\u540c\u6837\uff0cAny \u4e5f\u4e0e\u6240\u6709\u7c7b\u578b\u517c\u5bb9\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from typing import Any\n\ndef func(params: Any) -> int:\n    ...\n\nfunc(1) # \u68c0\u67e5\u901a\u8fc7\n\nfunc('str') # \u68c0\u67e5\u901a\u8fc7\n\nfunc([]) # \u68c0\u67e5\u901a\u8fc7\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var r=s(6540);const l={},i=r.createContext(l);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);