"use strict";(self.webpackChunkcarrgan_io=self.webpackChunkcarrgan_io||[]).push([[6109],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return y}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(t),y=o,m=s["".concat(u,".").concat(y)]||s[y]||f[y]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9398:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={sidebar_label:"\u51fd\u6570\u5b9a\u4e49\u5c0f\u8d34\u58eb",title:"\u51fd\u6570\u5b9a\u4e49\u5c0f\u8d34\u58eb",sidebar_position:3},u=void 0,p={unversionedId:"Python/Tips-for-function",id:"Python/Tips-for-function",title:"\u51fd\u6570\u5b9a\u4e49\u5c0f\u8d34\u58eb",description:"\u5728\u51fd\u6570\u8d4b\u503c\u7684\u65f6\u5019 \u6700\u597d \u4e0d\u8981\u8bb2\u51fd\u6570\u9ed8\u8ba4\u503c\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u5177\u4f53\u5f15\u7528\u53d8\u91cf \u8981\u4e0d\u7136\u8fd9\u4e2a\u503c\u4f1a\u8d8a\u53d8\u8d8a\u5927",source:"@site/notes/Python/Tips-for-function.md",sourceDirName:"Python",slug:"/Python/Tips-for-function",permalink:"/notes/Python/Tips-for-function",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"\u51fd\u6570\u5b9a\u4e49\u5c0f\u8d34\u58eb",title:"\u51fd\u6570\u5b9a\u4e49\u5c0f\u8d34\u58eb",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u547d\u540d\u7a7a\u95f4",permalink:"/notes/Python/name-space"},next:{title:"\u751f\u6210\u5668",permalink:"/notes/Python/generator"}},l={},f=[],s={toc:f};function y(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u51fd\u6570\u8d4b\u503c\u7684\u65f6\u5019 \u6700\u597d \u4e0d\u8981\u8bb2\u51fd\u6570\u9ed8\u8ba4\u503c\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u5177\u4f53\u5f15\u7528\u53d8\u91cf \u8981\u4e0d\u7136\u8fd9\u4e2a\u503c\u4f1a\u8d8a\u53d8\u8d8a\u5927"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def a(x=[]):\n    print(x.append(1)) # \u8fd9\u6837\u505a\u6bcf\u6b21\u8c03\u7528\u7684\u65f6\u5019\u90fd\u4f1a\u60f3\u540c\u4e00\u4e2a\u5217\u8868\u91cc\u6dfb\u52a01 \u56e0\u4e3ax\u662f\u516c\u7528\u540c\u4e00\u5757\u5185\u5b58\u5355\u5143\u7684 \na() # [1]\na() # [1, 1]\na() # [1, 1, 1]\n\ndef a (x = None)    # \u8fd9\u6837\u5c31\u53ef\u4ee5\u907f\u514d\u4e0a\u8ff0\u95ee\u9898 \n    if x is None:\n        x = []\n    print(x.append(1))\n    \nx = a   # \u4e0d\u52a0\u62ec\u5f27\u662f\u76f4\u63a5\u5728\u4f7f\u7528\u51fd\u6570\u7684\u5f15\u7528\u540d\nx = a()     # \u52a0\u62ec\u5f27\u8d4b\u503c\u7684\u662f\u51fd\u6570\u7684\u8fd4\u56de\u503c \n")),(0,i.kt)("p",null,"\u6ca1\u6709\u8fd4\u56de\u503c\u7684\u51fd\u6570\u8fd4\u56de\u7684\u662fNone"),(0,i.kt)("p",null,"\u9ad8\u5185\u805a \u51fd\u6570\u7528\u9014\u56fa\u5b9a\n\u4f4e\u8026\u5408 \u51fd\u6570\u548c\u522b\u7684\u51fd\u6570\u5c3d\u91cf\u4e0d\u8981\u6709\u4f9d\u8d56"))}y.isMDXComponent=!0}}]);