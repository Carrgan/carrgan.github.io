(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[735],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,S=m["".concat(u,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(S,i(i({ref:t},p),{},{components:n})):r.createElement(S,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2341:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={},u=void 0,s={unversionedId:"Linux/SSH",id:"Linux/SSH",isDocsHomePage:!1,title:"SSH",description:"SSH",source:"@site/notes/Linux/SSH.md",sourceDirName:"Linux",slug:"/Linux/SSH",permalink:"/notes/Linux/SSH",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Crontab",permalink:"/notes/Linux/Crontab"},next:{title:"\u8ba4\u8bc6\u7cfb\u7edf\u670d\u52a1",permalink:"/notes/Linux/system-server"}},p=[{value:"SSH",id:"ssh",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ssh"},"SSH"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u9ed8\u8ba4\u72b6\u6001\u4e0b\uff0cSSH\u670d\u52a1\u4e3b\u8981\u63d0\u4f9b\u4e24\u4e2a\u670d\u52a1\u529f\u80fd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u7c7b\u4f3cTelnet\u8fdc\u7a0b\u8fde\u63a5\u670d\u52a1\u5668\u7684\u670d\u52a1\uff0cSSH\u6570\u636e\u52a0\u5bc6\u529f\u80fd"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u7c7bFTP\u670d\u52a1\u7684sftp-server\uff0c\u501f\u52a9SSH\u534f\u8bae\u6765\u4f20\u8f93\u6570\u636e\uff0c\u63d0\u4f9b\u66f4\u5b89\u5168\u7684SFTP\u670d\u52a1(vsftp,proftp)"),(0,a.kt)("li",{parentName:"ul"},"SSH\u5305\u542b\u8fdc\u7a0b\u62f7\u8d1d\u547d\u4ee4scp"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"openssh\u662fSSH\u670d\u52a1\u7aef\u8f6f\u4ef6\u4e4b\u4e00\uff0c\u53ef\u4ee5\u540c\u65f6\u652f\u6301SSH1\u548cSSH2\u7248\u672c\u534f\u8bae\uff0c\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528protocol\u6307\u4ee4\uff0c\u6307\u5b9a\u53ea\u652f\u6301\u5176\u4e2d\u4e00\u79cd\u6216\u8005\u4e24\u79cd\u90fd\u652f\u6301\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7cfb\u7edf\u9ed8\u8ba4\u914d\u7f6e\u7684\u662f\u4ec5\u652f\u6301SSH2\u534f\u8bae")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SSH\u670d\u52a1\u7531\u670d\u52a1\u7aef\u8f6f\u4ef6OpenSSH(Openssl)\u548c\u5ba2\u6237\u7aef\u5e38\u89c1\u7684\u6709SSH(linux),secureCRT,putty,Xshell\u7ec4\u6210.SSH\u670d\u52a1\u9ed8\u8ba4\u4f7f\u752822\u7aef\u53e3\u63d0\u4f9b\u670d\u52a1,\u4ed6\u6709\u4e24\u4e2a\u4e0d\u517c\u5bb9\u7684SSH\u534f\u8bae\u7248\u672c,\u5206\u522b\u662f1.x\u548c2.x"))),(0,a.kt)("p",null,"sudo apt-get install openssh-server"),(0,a.kt)("p",null,"sudo service ssh start"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u4e3a\u81ea\u542f\u52a8\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539ssh_config\u6587\u4ef6\u3002\u547d\u4ee4\uff1avim /etc/ssh/sshd_config"),(0,a.kt)("li",{parentName:"ol"},"\u5c06#PasswordAuthentication no\u7684\u6ce8\u91ca\u53bb\u6389\uff0c\u5e76\u4e14\u5c06NO\u4fee\u6539\u4e3aYES  //\u6211\u7684ubuntu_meta\u4e2d\u9ed8\u8ba4\u662fyes"),(0,a.kt)("li",{parentName:"ol"},"\u5c06#PermitRootLogin yes\u7684\u6ce8\u91ca\u53bb\u6389//\u6211\u7684ubuntu_meta\u4e2d\u9ed8\u8ba4\u53bb\u6389\u4e86\u6ce8\u91ca"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4fdd\u5b58\u4e0d\u6210\u529f\uff0c\u5207\u6362root\u7528\u6237\u518d\u7f16\u8f91\uff1asu root\uff0c\u91cd\u590d\u4ee5\u4e0a1\u52303\u5c0f\u6b65"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u542f\u52a8SSH\u670d\u52a1\uff0c\u547d\u4ee4\u4e3a\uff1a/etc/init.d/ssh start // \u6216\u8005service ssh start"),(0,a.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1SSH\u670d\u52a1\u72b6\u6001\uff0c\u547d\u4ee4\u4e3a\uff1a/etc/init.d/ssh status"),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u5f00\u673a\u81ea\u542f\u52a8  update-rc.d ssh enable    \u5173\u95ed\u5219\u4e3a\uff1aupdate-rc.d ssh disabled"),(0,a.kt)("li",{parentName:"ol"},"\u81ea\u542f\u52a8\u9700\u8981\u91cd\u542f\u751f\u6548\uff1asudo reboot")))}m.isMDXComponent=!0}}]);