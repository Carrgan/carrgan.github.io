"use strict";(self.webpackChunkcarrgan_io=self.webpackChunkcarrgan_io||[]).push([[4766],{5883:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var i=s(74848),r=s(28453);const l={},c="WebRTC",t={id:"WebRTC/index",title:"WebRTC",description:"\u7b80\u4ecb",source:"@site/notes/WebRTC/index.md",sourceDirName:"WebRTC",slug:"/WebRTC/",permalink:"/notes/WebRTC/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u56fe\u7247\u6258\u7ba1\u7f51\u7ad9",permalink:"/notes/Sites/image-hosting-site"},next:{title:"\u5b9e\u73b0\u4e00\u4e2aWEB RTC\u5e94\u7528",permalink:"/notes/WebRTC/implement"}},d={},h=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4fe1\u4ee4\u670d\u52a1\u5668",id:"\u4fe1\u4ee4\u670d\u52a1\u5668",level:2},{value:"\u67b6\u6784",id:"\u67b6\u6784",level:2},{value:"ICE",id:"ice",level:2},{value:"ICE\u670d\u52a1\u5668\u7684\u4f5c\u7528",id:"ice\u670d\u52a1\u5668\u7684\u4f5c\u7528",level:3},{value:"STUN \u548c TURN \u670d\u52a1\u5668",id:"stun-\u548c-turn-\u670d\u52a1\u5668",level:3}];function o(n){const e={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"webrtc",children:"WebRTC"}),"\n",(0,i.jsx)(e.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,i.jsx)(e.p,{children:"WebRTC\uff0c\u5168\u79f0Web\u5b9e\u65f6\u901a\u4fe1\uff08Web Real-Time Communication\uff09\uff0c\u662f\u4e00\u7ec4\u5f00\u6e90\u6280\u672f\u548c\u534f\u8bae\uff0c\u7528\u4e8e\u5b9e\u73b0\u4e92\u8054\u7f51\u4e0a\u7684\u5b9e\u65f6\u901a\u4fe1\u3002\u5b83\u5141\u8bb8\u76f4\u63a5\u5728Web\u6d4f\u89c8\u5668\u6216\u5176\u4ed6\u517c\u5bb9\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u8fdb\u884c\u70b9\u5bf9\u70b9\u97f3\u9891\u3001\u89c6\u9891\u548c\u6570\u636e\u5171\u4eab\uff0c\u65e0\u9700\u63d2\u4ef6\u6216\u989d\u5916\u7684\u8f6f\u4ef6\u5b89\u88c5\u3002WebRTC\u4e3b\u8981\u7528\u4e8e\u89c6\u9891\u4f1a\u8bae\u3001\u8bed\u97f3\u901a\u8bdd\u548c\u5b9e\u65f6\u6570\u636e\u4ea4\u6362\u7b49\u5e94\u7528\u3002"}),"\n",(0,i.jsx)(e.p,{children:"WebRTC\u5728\u73b0\u4ee3Web\u6d4f\u89c8\u5668\uff08\u5982Chrome\u3001Firefox\u3001Safari\u548cEdge\uff09\u4e2d\u5f97\u5230\u5e7f\u6cdb\u652f\u6301\uff0c\u56e0\u6b64\u5b83\u662f\u5728Web\u4e0a\u6784\u5efa\u5b9e\u65f6\u901a\u4fe1\u5e94\u7528\u7a0b\u5e8f\u7684\u5f3a\u5927\u5de5\u5177\u3002\u5b83\u8fd8\u7528\u4e8e\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u3001\u7269\u8054\u7f51\uff08Internet of Things\uff0cIoT\uff09\u8bbe\u5907\u4ee5\u53ca\u5176\u4ed6\u5404\u79cd\u9700\u8981\u4f4e\u5ef6\u8fdf\u5b9e\u65f6\u901a\u4fe1\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,i.jsx)(e.p,{children:"WebRTC\u975e\u5e38\u6ce8\u91cd\u5b89\u5168\u6027\u548c\u9690\u79c1\u3002\u5b83\u91c7\u7528\u52a0\u5bc6\u548c\u8eab\u4efd\u9a8c\u8bc1\u673a\u5236\u6765\u4fdd\u62a4\u6570\u636e\u7684\u673a\u5bc6\u6027\u548c\u5b8c\u6574\u6027\u3002\u6b64\u5916\uff0c\u7531\u4e8eWebRTC\u5141\u8bb8\u76f4\u63a5\u70b9\u5bf9\u70b9\u901a\u4fe1\uff0c\u56e0\u6b64\u53ef\u4ee5\u51cf\u5c11\u901a\u8fc7\u96c6\u4e2d\u5f0f\u670d\u52a1\u5668\u4e2d\u7ee7\u6570\u636e\u7684\u9700\u6c42\uff0c\u8fd9\u53ef\u4ee5\u63d0\u9ad8\u9690\u79c1\u6027\u5e76\u51cf\u5c11\u5ef6\u8fdf\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"WebRTC\u7684\u5173\u952e\u7ec4\u4ef6\u5305\u62ec\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"MediaStream API"}),"\uff1a\u8be5API\u5141\u8bb8\u8bbf\u95ee\u7528\u6237\u7684\u6444\u50cf\u5934\u548c\u9ea6\u514b\u98ce\uff0c\u4ece\u800c\u5b9e\u73b0\u97f3\u9891\u548c\u89c6\u9891\u6d41\u7684\u6355\u83b7\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"RTCPeerConnection"}),"\uff1a\u8fd9\u662fWebRTC\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u8d1f\u8d23\u5efa\u7acb\u548c\u7ba1\u7406\u70b9\u5bf9\u70b9\u901a\u4fe1\uff0c\u5305\u62ec\u5728\u8bbe\u5907\u4e4b\u95f4\u4f20\u8f93\u97f3\u9891\u548c\u89c6\u9891\u6570\u636e\u3002\u5b83\u8fd8\u5904\u7406NAT\u548c\u9632\u706b\u5899\u904d\u5386\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"RTCDataChannel"}),"\uff1a\u9664\u4e86\u97f3\u9891\u548c\u89c6\u9891\uff0cWebRTC\u8fd8\u63d0\u4f9b\u4e86\u7528\u4e8e\u5b9e\u65f6\u70b9\u5bf9\u70b9\u6570\u636e\u4ea4\u6362\u7684\u6570\u636e\u901a\u9053\uff0c\u53ef\u7528\u4e8e\u6e38\u620f\u6216\u6587\u4ef6\u5171\u4eab\u7b49\u5e94\u7528\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"WebRTC API"}),"\uff1aWebRTC\u901a\u8fc7Web\u6d4f\u89c8\u5668\u4e2d\u7684JavaScript API\u8bbf\u95ee\uff0c\u4f7fWeb\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u5c06\u5b9e\u65f6\u901a\u4fe1\u8f7b\u677e\u96c6\u6210\u5230\u5176\u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4fe1\u4ee4\u670d\u52a1\u5668",children:"\u4fe1\u4ee4\u670d\u52a1\u5668"}),"\n",(0,i.jsx)(e.p,{children:"\u4fe1\u4ee4\u670d\u52a1\u5668\uff08Signalling Server\uff09\u662fWebRTC\uff08Web\u5b9e\u65f6\u901a\u4fe1\uff09\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u53e6\u4e00\u4e2a\u5173\u952e\u7ec4\u4ef6\u3002\u5b83\u7684\u4e3b\u8981\u4f5c\u7528\u662f\u534f\u8c03\u548c\u7ba1\u7406\u5efa\u7acbWebRTC\u901a\u4fe1\u7684\u8fc7\u7a0b(\u5e2e\u52a9\u5ba2\u6237\u7aef\u627e\u5230\u5f7c\u6b64\uff0c\u5ba2\u6237\u7aef\u5148\u548c\u4fe1\u4ee4\u670d\u52a1\u5668\u94fe\u63a5\uff0c\u5e76\u83b7\u53d6\u9700\u8981\u4f20\u8f93\u7684\u5bf9\u8c61\u548c\u5185\u5bb9\u7684\u7c7b\u578b\u7f16\u7801\uff0c\u4e3b\u8981\u534f\u5546\u5ba2\u6237\u7aef\u4e4b\u95f4\u7684\u53c2\u6570\u800c\u4e0d\u771f\u6b63\u5efa\u7acb\u5ba2\u6237\u7aef\u4e4b\u95f4\u7684\u94fe\u63a5\u7b49)\uff0c\u5305\u62ec\u8bbe\u5907\u4e4b\u95f4\u7684\u8fde\u63a5\u3001\u4f1a\u8bdd\u63a7\u5236\u3001\u5a92\u4f53\u53c2\u6570\u534f\u5546\u548c\u5176\u4ed6\u76f8\u5173\u4efb\u52a1\u3002\u4ee5\u4e0b\u662f\u4fe1\u4ee4\u670d\u52a1\u5668\u7684\u5173\u952e\u4f5c\u7528\u548c\u529f\u80fd\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u5efa\u7acb\u8fde\u63a5"}),"\uff1a\u4fe1\u4ee4\u670d\u52a1\u5668\u5141\u8bb8WebRTC\u7ec8\u7aef\u4e4b\u95f4\u5efa\u7acb\u8fde\u63a5\u3002\u5728\u70b9\u5bf9\u70b9\u901a\u4fe1\u4e2d\uff0c\u6bcf\u4e2a\u8bbe\u5907\u90fd\u9700\u8981\u8fde\u63a5\u5230\u4fe1\u4ee4\u670d\u52a1\u5668\uff0c\u4ee5\u4fbf\u5b83\u4eec\u53ef\u4ee5\u4e92\u76f8\u53d1\u73b0\u548c\u8bc6\u522b\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u7528\u6237\u9a8c\u8bc1\u548c\u8eab\u4efd\u9a8c\u8bc1"}),"\uff1a\u4fe1\u4ee4\u670d\u52a1\u5668\u53ef\u4ee5\u5904\u7406\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\uff0c\u786e\u4fdd\u53ea\u6709\u6388\u6743\u7684\u7528\u6237\u80fd\u591f\u52a0\u5165\u901a\u4fe1\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u7528\u6237\u540d\u548c\u5bc6\u7801\u3001\u4ee4\u724c\u6216\u5176\u4ed6\u8ba4\u8bc1\u673a\u5236\u6765\u5b9e\u73b0\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u534f\u5546\u4f1a\u8bdd\u53c2\u6570"}),"\uff1aWebRTC\u901a\u4fe1\u9700\u8981\u534f\u5546\u97f3\u9891\u3001\u89c6\u9891\u548c\u6570\u636e\u6d41\u7684\u53c2\u6570\uff0c\u5982\u7f16\u89e3\u7801\u5668\u3001\u5206\u8fa8\u7387\u548c\u5e26\u5bbd\u3002\u4fe1\u4ee4\u670d\u52a1\u5668\u534f\u52a9\u8bbe\u5907\u4e4b\u95f4\u534f\u5546\u8fd9\u4e9b\u53c2\u6570\uff0c\u4ee5\u786e\u4fdd\u5b83\u4eec\u5177\u6709\u76f8\u4e92\u517c\u5bb9\u7684\u914d\u7f6e\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u4f20\u8f93SDP\uff08Session Description Protocol\uff09"}),"\uff1a\u8bbe\u5907\u901a\u8fc7SDP\u6765\u63cf\u8ff0\u5176\u97f3\u9891\u3001\u89c6\u9891\u548c\u6570\u636e\u6d41\u7684\u7279\u6027\u3002\u4fe1\u4ee4\u670d\u52a1\u5668\u4f20\u9012\u8fd9\u4e9bSDP\u4fe1\u606f\uff0c\u4ee5\u4fbf\u8bbe\u5907\u53ef\u4ee5\u4e92\u76f8\u4e86\u89e3\u5f7c\u6b64\u7684\u8981\u6c42\u548c\u80fd\u529b\uff0c\u4ece\u800c\u534f\u5546\u51fa\u6700\u4f73\u7684\u8fde\u63a5\u914d\u7f6e\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u5904\u7406\u8fde\u63a5\u72b6\u6001"}),"\uff1a\u4fe1\u4ee4\u670d\u52a1\u5668\u8ddf\u8e2a\u8bbe\u5907\u7684\u8fde\u63a5\u72b6\u6001\uff0c\u5305\u62ec\u5efa\u7acb\u3001\u7ef4\u62a4\u548c\u65ad\u5f00\u8fde\u63a5\u3002\u8fd9\u6709\u52a9\u4e8e\u5904\u7406\u8fde\u63a5\u7684\u9519\u8bef\u548c\u91cd\u65b0\u8fde\u63a5\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u6d88\u606f\u4f20\u9012"}),"\uff1a\u4fe1\u4ee4\u670d\u52a1\u5668\u8fd8\u53ef\u4ee5\u7528\u4e8e\u4f20\u9012\u6587\u672c\u6d88\u606f\u6216\u5176\u4ed6\u6570\u636e\uff0c\u4f7f\u8bbe\u5907\u80fd\u591f\u8fdb\u884c\u804a\u5929\u6216\u53d1\u9001\u5143\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u5904\u7406\u5a92\u4f53\u6d41\u7684\u4ea4\u6362"}),"\uff1a\u4e00\u65e6\u8fde\u63a5\u5efa\u7acb\uff0c\u4fe1\u4ee4\u670d\u52a1\u5668\u4e0d\u76f4\u63a5\u4f20\u8f93\u5a92\u4f53\u6d41\uff08\u97f3\u9891\u3001\u89c6\u9891\u7b49\uff09\uff0c\u800c\u662f\u7528\u4e8e\u5efa\u7acb\u8fde\u63a5\u540e\uff0c\u8bbe\u5907\u76f4\u63a5\u70b9\u5bf9\u70b9\u4f20\u8f93\u5a92\u4f53\u6d41\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u4e2d\u7ee7\u670d\u52a1"}),"\uff1a\u6709\u65f6\uff0c\u7279\u522b\u662f\u5728NAT\u7a7f\u8d8a\u5931\u8d25\u65f6\uff0c\u4fe1\u4ee4\u670d\u52a1\u5668\u53ef\u80fd\u9700\u8981\u5145\u5f53TURN\u670d\u52a1\u5668\uff0c\u7528\u4e8e\u4e2d\u7ee7\u6570\u636e\u6d41\u91cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u4fe1\u4ee4\u670d\u52a1\u5668\u901a\u5e38\u4f7f\u7528WebSocket\u3001HTTP\u3001\u6216\u5176\u4ed6\u534f\u8bae\u4e0eWebRTC\u7ec8\u7aef\u901a\u4fe1\u3002\u8fd9\u4e9b\u670d\u52a1\u5668\u901a\u5e38\u662f\u81ea\u5b9a\u4e49\u7684\uff0c\u6839\u636e\u7279\u5b9a\u5e94\u7528\u7a0b\u5e8f\u7684\u9700\u6c42\u8fdb\u884c\u5f00\u53d1\u548c\u90e8\u7f72\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u67b6\u6784",children:"\u67b6\u6784"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:s(73162).A+"",width:"438",height:"517"})}),"\n",(0,i.jsx)(e.p,{children:"\u5ffd\u7565\u5ba2\u6237\u7aef\u4ece\u9759\u6001\u670d\u52a1\u5668\u83b7\u53d6HTML/JS/Css\u7684\u8fc7\u7a0b\uff0c\u5ba2\u6237\u7aef\u4f1a\u5148\u548c\u4fe1\u4ee4\u670d\u52a1\u5668\uff08Signalling Server\uff09\u901a\u884c\uff0c\u627e\u5230\u5bf9\u5e94\u9700\u8981\u94fe\u63a5\u53e6\u5916\u7684\u5ba2\u6237\u7aef\uff0c\u4e4b\u540e\u5411ICE\u8bf7\u6c42\u5efa\u7acb\u94fe\u63a5\uff0cICE\u670d\u52a1\u5668\u4f1a\u5e2e\u52a9\u5ba2\u6237\u7aef\u94fe\u63a5\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"ice",children:"ICE"}),"\n",(0,i.jsx)(e.p,{children:"ICE\uff08Interactive Connectivity Establishment\uff09\u670d\u52a1\u5668\u662f\u4e0eWebRTC\uff08Web\u5b9e\u65f6\u901a\u4fe1\uff09\u4e00\u8d77\u4f7f\u7528\u7684\u91cd\u8981\u7ec4\u4ef6\u4e4b\u4e00\u3002ICE\u670d\u52a1\u5668\u5e2e\u52a9WebRTC\u5728\u4e0d\u540c\u7f51\u7edc\u73af\u5883\u4e0b\u5efa\u7acb\u70b9\u5bf9\u70b9\u8fde\u63a5\uff0c\u5305\u62ec\u5904\u7406\u7f51\u7edc\u5730\u5740\u8f6c\u6362\uff08NAT\uff09\u548c\u9632\u706b\u5899\u7b49\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"ice\u670d\u52a1\u5668\u7684\u4f5c\u7528",children:"ICE\u670d\u52a1\u5668\u7684\u4f5c\u7528"}),"\n",(0,i.jsx)(e.p,{children:"ICE\u670d\u52a1\u5668\u7684\u4e3b\u8981\u4f5c\u7528\u662f\u534f\u52a9WebRTC\u5bf9\u7b49\u8fde\u63a5\u7684\u5efa\u7acb(\u4e3b\u8981\u662f\u6307\u7f51\u7edc\u4e0a\u7684\u94fe\u63a5\uff09\u3002\u5728\u4e00\u4e2a\u5178\u578b\u7684WebRTC\u901a\u4fe1\u4e2d\uff0c\u4e24\u4e2a\u8bbe\u5907\uff08\u4f8b\u5982\uff0c\u4e24\u4e2a\u6d4f\u89c8\u5668\uff09\u5c1d\u8bd5\u5efa\u7acb\u70b9\u5bf9\u70b9\u7684\u5b9e\u65f6\u8fde\u63a5\u3002\u7136\u800c\uff0c\u8fd9\u4e9b\u8bbe\u5907\u901a\u5e38\u4f4d\u4e8e\u4e0d\u540c\u7684\u7f51\u7edc\u73af\u5883\u4e2d\uff0c\u53ef\u80fd\u53d7\u5230NAT\u548c\u9632\u706b\u5899\u7684\u9650\u5236\u3002ICE\u670d\u52a1\u5668\u7684\u4efb\u52a1\u662f\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0c\u4ee5\u786e\u4fdd\u8fde\u63a5\u6210\u529f\u5efa\u7acb\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5177\u4f53\u800c\u8a00\uff0cICE\u670d\u52a1\u5668\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u6536\u96c6\u5019\u9009\u5730\u5740"}),"\uff1aICE\u670d\u52a1\u5668\u4f1a\u6536\u96c6\u8bbe\u5907\u7684\u672c\u5730IP\u5730\u5740\u3001\u5916\u90e8IP\u5730\u5740\u548c\u7aef\u53e3\u7b49\u4fe1\u606f\uff0c\u4ee5\u53ca\u53ef\u80fd\u901a\u8fc7STUN\uff08Session Traversal Utilities for NAT\uff09\u670d\u52a1\u5668\u548cTURN\uff08Traversal Using Relays around NAT\uff09\u670d\u52a1\u5668\u83b7\u5f97\u7684\u53ef\u7528\u5019\u9009\u5730\u5740\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u7b5b\u9009\u548c\u6392\u5e8f\u5019\u9009\u5730\u5740"}),"\uff1aICE\u670d\u52a1\u5668\u4f1a\u6839\u636e\u7f51\u7edc\u8fde\u63a5\u6027\u80fd\u5bf9\u5019\u9009\u5730\u5740\u8fdb\u884c\u7b5b\u9009\u548c\u6392\u5e8f\uff0c\u4ee5\u786e\u5b9a\u54ea\u4e9b\u5730\u5740\u6700\u9002\u5408\u5efa\u7acb\u8fde\u63a5\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u534f\u5546\u8fde\u63a5"}),"\uff1a\u8bbe\u5907\u4e4b\u95f4\u7684WebRTC\u8fde\u63a5\u501f\u52a9ICE\u670d\u52a1\u5668\u6765\u534f\u5546\u6700\u4f73\u7684\u8fde\u63a5\u8def\u5f84\uff0c\u4ee5\u786e\u4fdd\u6570\u636e\u80fd\u591f\u5728\u8bbe\u5907\u4e4b\u95f4\u6d41\u7545\u4f20\u8f93\u3002\u8fd9\u53ef\u80fd\u6d89\u53ca\u5728NAT\u8bbe\u5907\u4e0a\u521b\u5efa\u6620\u5c04\u6216\u4f7f\u7528\u4e2d\u7ee7\u670d\u52a1\u5668\uff08TURN\u670d\u52a1\u5668\uff09\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u5904\u7406\u9632\u706b\u5899\u548cNAT"}),"\uff1aICE\u670d\u52a1\u5668\u5e2e\u52a9WebRTC\u8bbe\u5907\u7a7f\u8d8a\u9632\u706b\u5899\u548cNAT\uff0c\u4ee5\u786e\u4fdd\u53cc\u65b9\u53ef\u4ee5\u76f4\u63a5\u901a\u4fe1\uff0c\u800c\u65e0\u9700\u4f9d\u8d56\u4e2d\u7ee7\u670d\u52a1\u5668\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u5931\u8d25\u5904\u7406"}),"\uff1a\u5982\u679c\u67d0\u4e9b\u8fde\u63a5\u8def\u5f84\u4e0d\u53ef\u7528\u6216\u5931\u8d25\uff0cICE\u670d\u52a1\u5668\u5c06\u534f\u52a9\u8bbe\u5907\u627e\u5230\u66ff\u4ee3\u8def\u5f84\uff0c\u4ee5\u786e\u4fdd\u8fde\u63a5\u7684\u7a33\u5b9a\u6027\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"stun-\u548c-turn-\u670d\u52a1\u5668",children:"STUN \u548c TURN \u670d\u52a1\u5668"}),"\n",(0,i.jsx)(e.p,{children:"ICE\u670d\u52a1\u5668\u901a\u5e38\u7531STUN\u670d\u52a1\u5668\uff08\u7528\u4e8e\u83b7\u53d6\u516c\u5171IP\u5730\u5740\u548c\u7aef\u53e3\uff09\u548cTURN\u670d\u52a1\u5668\uff08\u7528\u4e8e\u4e2d\u7ee7\u6570\u636e\u6d41\u91cf\uff0c\u7279\u522b\u662f\u5728NAT\u7a7f\u8d8a\u5931\u8d25\u65f6\uff09\u7ec4\u6210\u3002STUN\u670d\u52a1\u5668\u7528\u4e8e\u53d1\u73b0\u8bbe\u5907\u7684\u516c\u5171IP\u5730\u5740\u548c\u7aef\u53e3\uff0c\u800cTURN\u670d\u52a1\u5668\u5728NAT\u7a7f\u8d8a\u5931\u8d25\u65f6\u5145\u5f53\u4e2d\u7ee7\uff0c\u5e2e\u52a9\u8bbe\u5907\u5efa\u7acb\u8fde\u63a5\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u603b\u4e4b\uff0cICE\u670d\u52a1\u5668\u662fWebRTC\u4e2d\u4e0d\u53ef\u6216\u7f3a\u7684\u7ec4\u4ef6\uff0c\u5b83\u901a\u8fc7\u5904\u7406\u7f51\u7edc\u5730\u5740\u8f6c\u6362\u548c\u9632\u706b\u5899\u7b49\u95ee\u9898\uff0c\u5e2e\u52a9\u8bbe\u5907\u5efa\u7acb\u53ef\u9760\u7684\u5b9e\u65f6\u901a\u4fe1\u8fde\u63a5\u3002\u8fd9\u6709\u52a9\u4e8e\u5b9e\u73b0\u9ad8\u8d28\u91cf\u7684\u97f3\u9891\u3001\u89c6\u9891\u548c\u6570\u636e\u4f20\u8f93\uff0c\u5c24\u5176\u662f\u5728\u8bbe\u5907\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u73af\u5883\u4e2d\u65f6\u3002"})]})}function x(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},73162:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/architecture-af4bc4e017911db159b835ed698c9d4e.png"},28453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>t});var i=s(96540);const r={},l=i.createContext(r);function c(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);