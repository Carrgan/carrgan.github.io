"use strict";(self.webpackChunkcarrgan_io=self.webpackChunkcarrgan_io||[]).push([[7471],{2290:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>j,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var s=l(4848),i=l(8453);const d={sidebar_position:1},r="SQL",a={id:"database/SQL/SQL Classification",title:"SQL",description:"SQL\uff08Structured Query Language\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u7ba1\u7406\u548c\u64cd\u4f5c\u5173\u7cfb\u6570\u636e\u5e93\u7684\u6807\u51c6\u8bed\u8a00\u3002SQL\u8bed\u53e5\u6839\u636e\u5176\u529f\u80fd\u548c\u7528\u9014\u53ef\u4ee5\u5206\u4e3a\u4ee5\u4e0b\u51e0\u7c7b\uff1a",source:"@site/notes/database/SQL/SQL Classification.md",sourceDirName:"database/SQL",slug:"/database/SQL/SQL Classification",permalink:"/notes/database/SQL/SQL Classification",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Redis",permalink:"/notes/database/NoSQL/redis"},next:{title:"View",permalink:"/notes/database/SQL/View"}},c={},h=[{value:"SQL\u8bed\u53e5\u5206\u7c7b\u603b\u7ed3",id:"sql\u8bed\u53e5\u5206\u7c7b\u603b\u7ed3",level:2},{value:"\u6570\u636e\u5b9a\u4e49\u8bed\u8a00\uff08DDL - Data Definition Language\uff09",id:"\u6570\u636e\u5b9a\u4e49\u8bed\u8a00ddl---data-definition-language",level:2},{value:"\u529f\u80fd",id:"\u529f\u80fd",level:4},{value:"\u5e38\u89c1\u8bed\u53e5",id:"\u5e38\u89c1\u8bed\u53e5",level:4},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:4},{value:"\u6570\u636e\u64cd\u4f5c\u8bed\u8a00\uff08DML - Data Manipulation Language\uff09",id:"\u6570\u636e\u64cd\u4f5c\u8bed\u8a00dml---data-manipulation-language",level:2},{value:"\u529f\u80fd",id:"\u529f\u80fd-1",level:4},{value:"\u5e38\u89c1\u8bed\u53e5",id:"\u5e38\u89c1\u8bed\u53e5-1",level:4},{value:"\u7279\u70b9",id:"\u7279\u70b9-1",level:4},{value:"\u6570\u636e\u63a7\u5236\u8bed\u8a00\uff08DCL - Data Control Language\uff09",id:"\u6570\u636e\u63a7\u5236\u8bed\u8a00dcl---data-control-language",level:2},{value:"\u529f\u80fd",id:"\u529f\u80fd-2",level:4},{value:"\u5e38\u89c1\u8bed\u53e5",id:"\u5e38\u89c1\u8bed\u53e5-2",level:4},{value:"\u7279\u70b9",id:"\u7279\u70b9-2",level:4},{value:"\u4e8b\u52a1\u63a7\u5236\u8bed\u8a00\uff08TCL - Transaction Control Language\uff09",id:"\u4e8b\u52a1\u63a7\u5236\u8bed\u8a00tcl---transaction-control-language",level:2},{value:"\u529f\u80fd",id:"\u529f\u80fd-3",level:4},{value:"\u5e38\u89c1\u8bed\u53e5",id:"\u5e38\u89c1\u8bed\u53e5-3",level:4},{value:"\u7279\u70b9",id:"\u7279\u70b9-3",level:4},{value:"\u6570\u636e\u5b9a\u4e49\u8bed\u8a00\uff08DDL - Data Definition Language\uff09",id:"\u6570\u636e\u5b9a\u4e49\u8bed\u8a00ddl---data-definition-language-1",level:2},{value:"\u529f\u80fd",id:"\u529f\u80fd-4",level:4},{value:"\u5e38\u89c1\u8bed\u53e5",id:"\u5e38\u89c1\u8bed\u53e5-4",level:4},{value:"SELECT \u8bed\u53e5\u7684\u57fa\u672c\u7528\u6cd5",id:"select-\u8bed\u53e5\u7684\u57fa\u672c\u7528\u6cd5",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"\u7279\u70b9",id:"\u7279\u70b9-4",level:4}];function x(n){const e={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"sql",children:"SQL"}),"\n",(0,s.jsx)(e.p,{children:"SQL\uff08Structured Query Language\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u7ba1\u7406\u548c\u64cd\u4f5c\u5173\u7cfb\u6570\u636e\u5e93\u7684\u6807\u51c6\u8bed\u8a00\u3002SQL\u8bed\u53e5\u6839\u636e\u5176\u529f\u80fd\u548c\u7528\u9014\u53ef\u4ee5\u5206\u4e3a\u4ee5\u4e0b\u51e0\u7c7b\uff1a"}),"\n",(0,s.jsx)(e.h2,{id:"sql\u8bed\u53e5\u5206\u7c7b\u603b\u7ed3",children:"SQL\u8bed\u53e5\u5206\u7c7b\u603b\u7ed3"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"DDL\uff08Data Definition Language\uff09"}),"\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f5c\u7528\uff1a\u5b9a\u4e49\u548c\u4fee\u6539\u6570\u636e\u5e93\u7ed3\u6784\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u5e38\u89c1\u8bed\u53e5\uff1a",(0,s.jsx)(e.code,{children:"CREATE"}),"\u3001",(0,s.jsx)(e.code,{children:"ALTER"}),"\u3001",(0,s.jsx)(e.code,{children:"DROP"}),"\u3001",(0,s.jsx)(e.code,{children:"TRUNCATE"})]}),"\n",(0,s.jsx)(e.li,{children:"\u7279\u70b9\uff1a\u81ea\u52a8\u63d0\u4ea4\uff0c\u4e0d\u53ef\u56de\u6eda\uff0c\u5f71\u54cd\u6570\u636e\u5e93\u5bf9\u8c61\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"DML\uff08Data Manipulation Language\uff09"}),"\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f5c\u7528\uff1a\u64cd\u4f5c\u6570\u636e\u5e93\u8868\u4e2d\u7684\u6570\u636e\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u5e38\u89c1\u8bed\u53e5\uff1a",(0,s.jsx)(e.code,{children:"INSERT"}),"\u3001",(0,s.jsx)(e.code,{children:"UPDATE"}),"\u3001",(0,s.jsx)(e.code,{children:"DELETE"})]}),"\n",(0,s.jsx)(e.li,{children:"\u7279\u70b9\uff1a\u53ef\u56de\u6eda\uff0c\u9891\u7e41\u4f7f\u7528\uff0c\u5f71\u54cd\u6570\u636e\u5185\u5bb9\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"DQL\uff08Data Query Language\uff09"}),"\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f5c\u7528\uff1a\u67e5\u8be2\u548c\u68c0\u7d22\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u5e38\u89c1\u8bed\u53e5\uff1a",(0,s.jsx)(e.code,{children:"SELECT"})]}),"\n",(0,s.jsx)(e.li,{children:"\u7279\u70b9\uff1a\u53ea\u8bfb\u64cd\u4f5c\uff0c\u7075\u6d3b\u6027\u9ad8\uff0c\u53ef\u7ec4\u5408\u4f7f\u7528\u591a\u79cd\u5b50\u53e5\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"DCL\uff08Data Control Language\uff09"}),"\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f5c\u7528\uff1a\u63a7\u5236\u6570\u636e\u5e93\u7684\u8bbf\u95ee\u6743\u9650\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u5e38\u89c1\u8bed\u53e5\uff1a",(0,s.jsx)(e.code,{children:"GRANT"}),"\u3001",(0,s.jsx)(e.code,{children:"REVOKE"})]}),"\n",(0,s.jsx)(e.li,{children:"\u7279\u70b9\uff1a\u5f71\u54cd\u6570\u636e\u5e93\u5b89\u5168\uff0c\u7531DBA\u6267\u884c\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"TCL\uff08Transaction Control Language\uff09"}),"\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f5c\u7528\uff1a\u7ba1\u7406\u6570\u636e\u5e93\u4e8b\u52a1\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u5e38\u89c1\u8bed\u53e5\uff1a",(0,s.jsx)(e.code,{children:"COMMIT"}),"\u3001",(0,s.jsx)(e.code,{children:"ROLLBACK"}),"\u3001",(0,s.jsx)(e.code,{children:"SAVEPOINT"}),"\u3001",(0,s.jsx)(e.code,{children:"SET TRANSACTION"})]}),"\n",(0,s.jsx)(e.li,{children:"\u7279\u70b9\uff1a\u786e\u4fdd\u6570\u636e\u4e00\u81f4\u6027\u548c\u5b8c\u6574\u6027\uff0c\u63a7\u5236\u63d0\u4ea4\u548c\u56de\u6eda\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6570\u636e\u5b9a\u4e49\u8bed\u8a00ddl---data-definition-language",children:"\u6570\u636e\u5b9a\u4e49\u8bed\u8a00\uff08DDL - Data Definition Language\uff09"}),"\n",(0,s.jsx)(e.h4,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"DDL\u7528\u4e8e\u5b9a\u4e49\u548c\u7ba1\u7406\u6570\u636e\u5e93\u7ed3\u6784\u548c\u5bf9\u8c61\uff0c\u5982\u8868\u3001\u7d22\u5f15\u3001\u89c6\u56fe\u548c\u5b58\u50a8\u8fc7\u7a0b\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"\u5e38\u89c1\u8bed\u53e5",children:"\u5e38\u89c1\u8bed\u53e5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"CREATE"}),"\uff1a\u521b\u5efa\u6570\u636e\u5e93\u5bf9\u8c61\uff08\u5982\u8868\u3001\u7d22\u5f15\u3001\u89c6\u56fe\u7b49\uff09\u3002","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE employees (\n    id INT PRIMARY KEY,\n    name VARCHAR(100),\n    salary DECIMAL(10, 2)\n);\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ALTER"}),"\uff1a\u4fee\u6539\u5df2\u6709\u7684\u6570\u636e\u5e93\u5bf9\u8c61\u3002","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE employees ADD COLUMN address VARCHAR(255);\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"DROP"}),"\uff1a\u5220\u9664\u6570\u636e\u5e93\u5bf9\u8c61\u3002","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"DROP TABLE employees;\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"TRUNCATE"}),"\uff1a\u5220\u9664\u8868\u4e2d\u6240\u6709\u8bb0\u5f55\uff0c\u4f46\u4fdd\u7559\u8868\u7ed3\u6784\u3002","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"TRUNCATE TABLE employees;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"\u7279\u70b9",children:"\u7279\u70b9"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5f71\u54cd\u6570\u636e\u5e93\u7ed3\u6784\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u901a\u5e38\u81ea\u52a8\u63d0\u4ea4\uff08\u4e0d\u80fd\u56de\u6eda\uff09\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u7ed3\u6784\u6027\u7684\u64cd\u4f5c\uff0c\u901a\u5e38\u4e0d\u6d89\u53ca\u6570\u636e\u5185\u5bb9\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6570\u636e\u64cd\u4f5c\u8bed\u8a00dml---data-manipulation-language",children:"\u6570\u636e\u64cd\u4f5c\u8bed\u8a00\uff08DML - Data Manipulation Language\uff09"}),"\n",(0,s.jsx)(e.h4,{id:"\u529f\u80fd-1",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"DML\u7528\u4e8e\u5bf9\u6570\u636e\u5e93\u8868\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u67e5\u8be2\u548c\u64cd\u4f5c\uff08\u589e\u3001\u5220\u3001\u6539\uff09\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"\u5e38\u89c1\u8bed\u53e5-1",children:"\u5e38\u89c1\u8bed\u53e5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"SELECT"}),"\uff1a\u67e5\u8be2\u6570\u636e\u3002","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM employees;\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"INSERT"}),"\uff1a\u63d2\u5165\u6570\u636e\u3002","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"INSERT INTO employees (id, name, salary) VALUES (1, 'Alice', 50000.00);\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"UPDATE"}),"\uff1a\u66f4\u65b0\u6570\u636e\u3002","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"UPDATE employees SET salary = 60000.00 WHERE id = 1;\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"DELETE"}),"\uff1a\u5220\u9664\u6570\u636e\u3002","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"DELETE FROM employees WHERE id = 1;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"\u7279\u70b9-1",children:"\u7279\u70b9"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u64cd\u4f5c\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u5185\u5bb9\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u53ef\u56de\u6eda\uff08\u4e8b\u52a1\u63a7\u5236\uff09\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5e38\u7528\u8bed\u53e5\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u9891\u7e41\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6570\u636e\u63a7\u5236\u8bed\u8a00dcl---data-control-language",children:"\u6570\u636e\u63a7\u5236\u8bed\u8a00\uff08DCL - Data Control Language\uff09"}),"\n",(0,s.jsx)(e.h4,{id:"\u529f\u80fd-2",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"DCL\u7528\u4e8e\u5b9a\u4e49\u6570\u636e\u5e93\u7684\u8bbf\u95ee\u6743\u9650\u548c\u5b89\u5168\u7ea7\u522b\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"\u5e38\u89c1\u8bed\u53e5-2",children:"\u5e38\u89c1\u8bed\u53e5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"GRANT"}),"\uff1a\u6388\u4e88\u7528\u6237\u6743\u9650\u3002","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"GRANT SELECT, INSERT ON employees TO user_name;\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"REVOKE"}),"\uff1a\u64a4\u9500\u7528\u6237\u6743\u9650\u3002","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"REVOKE SELECT, INSERT ON employees FROM user_name;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"\u7279\u70b9-2",children:"\u7279\u70b9"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u63a7\u5236\u7528\u6237\u8bbf\u95ee\u548c\u6743\u9650\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5f71\u54cd\u6570\u636e\u5e93\u5b89\u5168\u6027\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u901a\u5e38\u7531\u6570\u636e\u5e93\u7ba1\u7406\u5458\uff08DBA\uff09\u6267\u884c\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4e8b\u52a1\u63a7\u5236\u8bed\u8a00tcl---transaction-control-language",children:"\u4e8b\u52a1\u63a7\u5236\u8bed\u8a00\uff08TCL - Transaction Control Language\uff09"}),"\n",(0,s.jsx)(e.h4,{id:"\u529f\u80fd-3",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"TCL\u7528\u4e8e\u7ba1\u7406\u6570\u636e\u5e93\u4e8b\u52a1\uff0c\u786e\u4fdd\u6570\u636e\u7684\u4e00\u81f4\u6027\u548c\u5b8c\u6574\u6027\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"\u5e38\u89c1\u8bed\u53e5-3",children:"\u5e38\u89c1\u8bed\u53e5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"COMMIT"}),"\uff1a\u63d0\u4ea4\u4e8b\u52a1\uff0c\u4fdd\u5b58\u6240\u6709\u53d8\u66f4\u3002","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"COMMIT;\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ROLLBACK"}),"\uff1a\u56de\u6eda\u4e8b\u52a1\uff0c\u64a4\u9500\u6240\u6709\u672a\u63d0\u4ea4\u7684\u53d8\u66f4\u3002","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"ROLLBACK;\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"SAVEPOINT"}),"\uff1a\u8bbe\u7f6e\u4fdd\u5b58\u70b9\uff0c\u5141\u8bb8\u90e8\u5206\u56de\u6eda\u3002","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SAVEPOINT savepoint_name;\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"SET TRANSACTION"}),"\uff1a\u8bbe\u7f6e\u4e8b\u52a1\u7279\u6027\u3002","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"\u7279\u70b9-3",children:"\u7279\u70b9"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7ba1\u7406\u4e8b\u52a1\u7684\u539f\u5b50\u6027\u3001\u4e00\u81f4\u6027\u3001\u9694\u79bb\u6027\u548c\u6301\u4e45\u6027\uff08ACID\u7279\u6027\uff09\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u63a7\u5236\u6570\u636e\u7684\u63d0\u4ea4\u548c\u56de\u6eda\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u786e\u4fdd\u6570\u636e\u64cd\u4f5c\u7684\u5b89\u5168\u548c\u5b8c\u6574\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6570\u636e\u5b9a\u4e49\u8bed\u8a00ddl---data-definition-language-1",children:"\u6570\u636e\u5b9a\u4e49\u8bed\u8a00\uff08DDL - Data Definition Language\uff09"}),"\n",(0,s.jsx)(e.h4,{id:"\u529f\u80fd-4",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"DQL\u7528\u4e8e\u67e5\u8be2\u548c\u68c0\u7d22\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\uff0c\u662f\u6570\u636e\u5e93\u64cd\u4f5c\u4e2d\u6700\u5e38\u7528\u7684\u90e8\u5206\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"\u5e38\u89c1\u8bed\u53e5-4",children:"\u5e38\u89c1\u8bed\u53e5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"SELECT"}),"\uff1a\u67e5\u8be2\u6570\u636e\uff0c\u8fd9\u662fDQL\u4e2d\u552f\u4e00\u4e14\u6700\u4e3b\u8981\u7684\u8bed\u53e5\u3002\u901a\u8fc7",(0,s.jsx)(e.code,{children:"SELECT"}),"\u8bed\u53e5\uff0c\u53ef\u4ee5\u4ece\u4e00\u4e2a\u6216\u591a\u4e2a\u8868\u4e2d\u68c0\u7d22\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"select-\u8bed\u53e5\u7684\u57fa\u672c\u7528\u6cd5",children:"SELECT \u8bed\u53e5\u7684\u57fa\u672c\u7528\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT column1, column2, ...\nFROM table_name;\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT name, salary FROM employees;\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u7279\u70b9-4",children:"\u7279\u70b9"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u67e5\u8be2\u6570\u636e"}),"\uff1a\u7528\u4e8e\u4ece\u6570\u636e\u5e93\u4e2d\u63d0\u53d6\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u7075\u6d3b\u6027\u9ad8"}),"\uff1a\u53ef\u4ee5\u4f7f\u7528\u5404\u79cd\u5b50\u53e5\u3001\u8fd0\u7b97\u7b26\u548c\u51fd\u6570\u6765\u8fc7\u6ee4\u3001\u6392\u5e8f\u548c\u5206\u7ec4\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u53ea\u8bfb\u64cd\u4f5c"}),"\uff1a",(0,s.jsx)(e.code,{children:"SELECT"}),"\u8bed\u53e5\u4e0d\u4fee\u6539\u6570\u636e\uff0c\u53ea\u8bfb\u53d6\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u7ec4\u5408\u5176\u4ed6\u5b50\u53e5"}),"\uff1a","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"WHERE"}),"\uff1a\u6761\u4ef6\u8fc7\u6ee4","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT name, salary FROM employees WHERE salary > 50000;\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ORDER BY"}),"\uff1a\u6392\u5e8f","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT name, salary FROM employees ORDER BY salary DESC;\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"GROUP BY"}),"\uff1a\u5206\u7ec4","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT department, AVG(salary) FROM employees GROUP BY department;\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"HAVING"}),"\uff1a\u8fc7\u6ee4\u5206\u7ec4\u7ed3\u679c","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT department, AVG(salary) FROM employees GROUP BY department HAVING AVG(salary) > 50000;\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"JOIN"}),"\uff1a\u8fde\u63a5\u591a\u4e2a\u8868","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT employees.name, departments.name \nFROM employees\nJOIN departments ON employees.department_id = departments.id;\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function j(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>r,x:()=>a});var s=l(6540);const i={},d=s.createContext(i);function r(n){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);