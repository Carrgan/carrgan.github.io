"use strict";(self.webpackChunkcarrgan_io=self.webpackChunkcarrgan_io||[]).push([[5307],{1201:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(4848),o=t(8453);const s={},i="How to use the weaviate DB",a={id:"AI&ML/weaviate",title:"How to use the weaviate DB",description:"Pull and run the docker",source:"@site/notes/AI&ML/weaviate.md",sourceDirName:"AI&ML",slug:"/AI&ML/weaviate",permalink:"/notes/AI&ML/weaviate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"\u7b80\u4ecb",permalink:"/notes/"}},c={},l=[{value:"Pull and run the docker",id:"pull-and-run-the-docker",level:2},{value:"Python clint",id:"python-clint",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"how-to-use-the-weaviate-db",children:"How to use the weaviate DB"}),"\n",(0,r.jsx)(n.h2,{id:"pull-and-run-the-docker",children:"Pull and run the docker"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="weaviate.yml"',children:"version: 'latest'\nservices:\n  weaviate:\n    command:\n      - --host\n      - 0.0.0.0\n      - --port\n      - '8080'\n      - --scheme\n      - http\n    image: cr.weaviate.io/semitechnologies/weaviate:1.29.0\n    ports:\n      - \"4001:8080\"\n      - \"50051:50051\"\n    environment:\n      QUERY_DEFAULTS_LIMIT: 25\n      AUTHENTICATION_ANONYMOUS_ACCESS_ENABLED: 'true'\n      PERSISTENCE_DATA_PATH: '/var/lib/weaviate'\n    volumes:\n      - ./weaviate-db:/var/lib/weaviate\n    restart: on-failure:0\n"})}),"\n",(0,r.jsx)(n.p,{children:"Start the docker"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker-compose -f ./weaviate.yml up -d\n"})}),"\n",(0,r.jsx)(n.h2,{id:"python-clint",children:"Python clint"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from sentence_transformers import SentenceTransformer\nimport weaviate\nfrom weaviate.classes.config import Configure\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'model = SentenceTransformer("./paraphrase-multilingual-mpnet-base-v2")\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'client = weaviate.connect_to_local(host="localhost", port=4001, grpc_port=50051)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"client.is_ready()\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from weaviate.collections.classes.config import DataType, Property, VectorDistances\n\nclient.collections.create(\n    name="Document",\n    properties=[\n        Property(\n            name="text",\n            data_type=DataType.TEXT\n        )\n    ],\n    vectorizer_config=Configure.Vectorizer.none(),\n    vector_index_config=Configure.VectorIndex.flat(\n        distance_metric=VectorDistances.COSINE  # Use the COSINE simulation\n    )\n)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'sentences = [\n    "\u6211\u559c\u6b22\u5403\u82f9\u679c",\n    "\u82f9\u679c\u516c\u53f8\u7684\u603b\u90e8\u5728\u7f8e\u56fd",\n    "\u6df1\u5ea6\u5b66\u4e60\u548c\u673a\u5668\u5b66\u4e60\u662f\u4eba\u5de5\u667a\u80fd\u7684\u4e00\u90e8\u5206",\n    "Python\u662f\u4e00\u79cd\u6d41\u884c\u7684\u7f16\u7a0b\u8bed\u8a00",\n    "Je aime manger des pommes",\n    "Bonjour le monde!",\n]\n\nembeddings = model.encode(sentences, convert_to_numpy=True)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'doc_collection = client.collections.get("Document")\nwith doc_collection.batch.dynamic() as batch:\n    for sentence, embedding in zip(sentences, embeddings):\n        batch.add_object(\n            properties={"text": sentence},\n            vector=embedding.tolist()  # \u8f6c\u6362\u4e3aPython list\u683c\u5f0f\n        )\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'def semantic_search(query, k=3):\n    query_embedding = model.encode([query], convert_to_numpy=True)\n    query_vector = query_embedding[0].tolist()\n    \n    results = []\n    response = doc_collection.query.near_vector(\n        near_vector=query_vector,\n        limit=k,\n        return_metadata=["distance"]\n    )\n    \n    for obj in response.objects:\n        results.append({\n            "text": obj.properties["text"],\n            "cosine_similarity": 1 - obj.metadata.distance\n        })\n    return results\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'queries = [\n    "\u82f9\u679c",\n    "machine learning",\n    "Bonjour",\n]\n\nfor query in queries:\n    print(f"\\nQuery: \'{query}\'")\n    results = semantic_search(query, k=2)\n    for res in results:\n        print(f"- {res[\'text\']} (\u76f8\u4f3c\u5ea6: {res[\'cosine_similarity\']:.4f})")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Query: '\u82f9\u679c'"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6211\u559c\u6b22\u5403\u82f9\u679c (\u76f8\u4f3c\u5ea6: 0.7459)"}),"\n",(0,r.jsx)(n.li,{children:"Je aime manger des pommes (\u76f8\u4f3c\u5ea6: 0.7168)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Query: 'machine learning'"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6df1\u5ea6\u5b66\u4e60\u548c\u673a\u5668\u5b66\u4e60\u662f\u4eba\u5de5\u667a\u80fd\u7684\u4e00\u90e8\u5206 (\u76f8\u4f3c\u5ea6: 0.8378)"}),"\n",(0,r.jsx)(n.li,{children:"Python\u662f\u4e00\u79cd\u6d41\u884c\u7684\u7f16\u7a0b\u8bed\u8a00 (\u76f8\u4f3c\u5ea6: 0.1669)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Query: 'Bonjour'"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Bonjour le monde! (\u76f8\u4f3c\u5ea6: 0.8217)"}),"\n",(0,r.jsx)(n.li,{children:"Je aime manger des pommes (\u76f8\u4f3c\u5ea6: 0.2203)"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);