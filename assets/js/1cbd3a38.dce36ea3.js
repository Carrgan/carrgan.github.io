"use strict";(self.webpackChunkcarrgan_io=self.webpackChunkcarrgan_io||[]).push([[6092],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||s[g]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8393:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={slug:"dynamic-height-container",title:"CSS\u81ea\u9002\u5e94\u56fa\u5b9a\u957f\u6b3e\u6bd4\u5bb9\u5668",authors:"carrgan",tags:["Front End","CSS"]},l="CSS\u5b9e\u73b0\u81ea\u9002\u5e94\u957f\u6b3e\u6bd4\u7684\u5bb9\u5668",p={permalink:"/tech-blog/dynamic-height-container",source:"@site/tech-blog/2022-03-27-dynamic-height.md",title:"CSS\u81ea\u9002\u5e94\u56fa\u5b9a\u957f\u6b3e\u6bd4\u5bb9\u5668",description:"Padding",date:"2022-03-27T00:00:00.000Z",formattedDate:"2022\u5e743\u670827\u65e5",tags:[{label:"Front End",permalink:"/tech-blog/tags/front-end"},{label:"CSS",permalink:"/tech-blog/tags/css"}],readingTime:1.13,truncated:!1,authors:[{name:"Carrgan Yang",title:"Software Engineer @ Ericsson",url:"https://github.com/carrgan",imageURL:"https://carrgan.github.io/img/avantar/carrgan.jpg",key:"carrgan"}],frontMatter:{slug:"dynamic-height-container",title:"CSS\u81ea\u9002\u5e94\u56fa\u5b9a\u957f\u6b3e\u6bd4\u5bb9\u5668",authors:"carrgan",tags:["Front End","CSS"]},prevItem:{title:"\u524d\u7aef\u7684\u73af\u5883\u53d8\u91cf",permalink:"/tech-blog/process-env-node-env"},nextItem:{title:"\u7528Hook\u505a\u9ad8\u7ea7\u5c01\u88c5",permalink:"/tech-blog/react/hook/advance-encapsulation"}},u={authorsImageUrls:[void 0]},s=[{value:"Padding",id:"padding",level:2},{value:"\u5bb9\u5668\u5b9e\u73b0",id:"\u5bb9\u5668\u5b9e\u73b0",level:2}],d={toc:s};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"padding"},"Padding"),(0,i.kt)("p",null,"\u5b9e\u73b0\u81ea\u9002\u5e94\u957f\u6b3e\u6bd4\u7684\u5173\u952e\u5c31\u662fpadding\uff0c\u5728\u8bbe\u7f6epadding\u7684\u65f6\u5019\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"%")," \u8ba1\u7b97\u7684\u503c\u662f\u6839\u636e\u5bbd\u5ea6\u8ba1\u7b97\u7684\uff0c"),(0,i.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4 ",(0,i.kt)("inlineCode",{parentName:"p"},"padding: 50%")," \u5176\u5b9e\u662f\u57fa\u4e8e\u5bb9\u5668\u5bbd\u5ea6\u768450%\u3002"),(0,i.kt)("h2",{id:"\u5bb9\u5668\u5b9e\u73b0"},"\u5bb9\u5668\u5b9e\u73b0"),(0,i.kt)("p",null,"\u6839\u636epadding\u7684\u8fd9\u4e00\u7279\u6027\u5b9e\u73b0\u8fd9\u4e00\u5bb9\u5668\u5c31\u5f88\u7b80\u5355\u4e86"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="16/9\u5360\u6ee1\u5c4f\u5e55\u7684\u5bb9\u5668"',title:'"16/9\u5360\u6ee1\u5c4f\u5e55\u7684\u5bb9\u5668"'},'<div class="container">\n  <div class="content"></div>\n</div>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="16/9\u5360\u6ee1\u5c4f\u5e55\u7684\u5bb9\u5668"',title:'"16/9\u5360\u6ee1\u5c4f\u5e55\u7684\u5bb9\u5668"'},".container {\n    width: 100%;\n    padding-bottom: 56.25%\n}\n.content {\n    width: 100%;\n    height: 100%;\n}\n")),(0,i.kt)("p",null,"\u540c\u7406\u53ef\u5bf9\u4e00\u4e2a\u5bb9\u5668\u5b9e\u73b0\u4e00\u4e2a\u906e\u7f69\u5c42"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="16/9\u5360\u6ee1\u5c4f\u5e55\u7684\u80cc\u666f\u548c\u4e00\u4e2a\u60ac\u6d6e\u5c45\u4e2d\u7684\u56fe\u6807"',title:'"16/9\u5360\u6ee1\u5c4f\u5e55\u7684\u80cc\u666f\u548c\u4e00\u4e2a\u60ac\u6d6e\u5c45\u4e2d\u7684\u56fe\u6807"'},'<div class="container">\n  <div class="background"></div>\n  <div class="content">\n    <svg width="35px" height="35px"></svg>\n  </div>\n</div>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="16/9\u5360\u6ee1\u5c4f\u5e55\u7684\u80cc\u666f\u548c\u4e00\u4e2a\u60ac\u6d6e\u5c45\u4e2d\u7684\u56fe\u6807"',title:'"16/9\u5360\u6ee1\u5c4f\u5e55\u7684\u80cc\u666f\u548c\u4e00\u4e2a\u60ac\u6d6e\u5c45\u4e2d\u7684\u56fe\u6807"'},".container {\n    width: 100%;\n    padding-bottom: 56.25%;\n    position: relative;\n    top: 0;\n    left: 0;\n}\n.background {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n}\n.content {\n    width: 100%;\n    position: absolute;\n    top: calc(50% - 35px);\n    left: calc(50% - 35px);\n    z-index: 2;\n}\n")))}g.isMDXComponent=!0}}]);