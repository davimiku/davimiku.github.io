(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1931)}])},7467:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});var n=t(1799);function i(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=t(5893),s=t(4789),c=t(1784),d=t.n(c),u=t(1664),l=t.n(u);function p(e){var r=e.children,t=a(e,["children"]),c=(0,s.G)(d(),"card");return(0,o.jsx)("article",i((0,n.Z)({className:c},t),{children:r}))}p.Header=function(e){var r=e.children;return(0,o.jsx)("header",{className:d()["card-header"],children:r})},p.Title=function(e){var r=e.title,t=e.href,n=e.headingLevel,i=void 0===n?"h3":n,a=d()["card-title"],s=t?(0,o.jsx)(l(),{href:t,children:(0,o.jsx)("a",{className:a,children:r})}):(0,o.jsx)("span",{className:a,children:r}),c=i;return(0,o.jsx)(c,{children:s})},p.Body=function(e){var r=e.children;return(0,o.jsx)("section",{className:d()["card-body"],children:r})},p.Footer=function(e){var r=e.children,t=(0,s.G)(d(),"card-footer");return(0,o.jsx)("footer",{className:t,children:r})}},8880:function(e,r,t){"use strict";t.d(r,{U:function(){return i},q:function(){return n}});var n=[t(2935)].map((function(e){return e.meta})),i=[{name:"davimiku.github.io",tagline:"Static site generated with Next.js and React",description:'Responsive design implemented without "breakpoints" (width-based media queries) as a personal challenge.',technologies:["TypeScript","Next.js","React","SCSS"],topics:["static site generation","fluid design","blog"],repo:{name:"davimiku.github.io",path:"davimiku/davimiku.github.io",url:"https://github.com/davimiku/davimiku.github.io",description:"My personal website"}},{name:"AudNauseum",tagline:"Loop-based digital recorder & sampler (audio looper)",technologies:["Python","PyQt","numpy"],topics:["audio processing","gui","state machine"],imageUrl:"/images/projects/audnauseum.png",repo:{name:"AudNauseum",path:"AudNauseum/AudNauseum",url:"https://github.com/AudNauseum/AudNauseum",description:"Software emulated loop-based digital recorder/sampler"}},{name:"JSONata",tagline:"Implementation of JSON Query and Transformation language",technologies:["Rust"],topics:["interpreters","JSON","parser","functional programming"],repo:{name:"jsonata-rs",path:"davimiku/jsonata-rs",url:"https://github.com/davimiku/jsonata-rs",description:"Implementation of JSONata query language in Rust "}},{name:"JSON Parser",tagline:"Parser for JSON using iterative and combinator strategies",technologies:["Rust"],topics:["parsers","combinator parsers","json"],repo:{name:"json_parser",path:"davimiku/json_parser",url:"https://github.com/davimiku/json_parser",description:"Implementation of a parser for JSON data"}}]},1931:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return x}});var n=t(5893),i=t(7467),a=t(6292),o=t(6747),s=t(4408),c=t.n(s);function d(e){var r,t=e.meta,s=Boolean(t.publishedOn);return(0,n.jsxs)(i.Z,{id:"link-".concat(t.slug),children:[(0,n.jsx)(i.Z.Header,{children:(0,n.jsx)(i.Z.Title,{title:t.title,href:s?"/blog/".concat(t.slug):void 0})}),(0,n.jsxs)(i.Z.Body,{children:[(0,n.jsx)(o.W,{date:t.publishedOn}),(0,n.jsx)("p",{children:t.tagline})]}),(0,n.jsx)(i.Z.Footer,{children:(0,n.jsx)("div",{className:c()["badge-container"],children:null===(r=t.tags)||void 0===r?void 0:r.map((function(e){return(0,n.jsx)(a.N,{technology:e},e)}))})})]})}var u=t(2279),l=t.n(u);function p(e){var r=e.cards;return(0,n.jsx)("div",{className:l()["card-grid"],children:r})}t(7294);var h=t(9583),m=t(6144),g=t(8005);function f(e){var r=e.project,t=r.repo;return(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(i.Z.Header,{children:(0,n.jsx)(i.Z.Title,{title:r.name,href:"/projects#".concat(r.repo.name)})}),(0,n.jsxs)(i.Z.Body,{children:[(0,n.jsx)("p",{children:r.tagline}),(0,n.jsx)("p",{children:r.technologies.map((function(e){return(0,n.jsx)(m.N,{technology:e},e)}))})]}),(0,n.jsx)(i.Z.Footer,{children:(0,n.jsxs)(g.d,{href:t.url,children:[(0,n.jsx)(h.hJX,{}),"\xa0",t.name]})})]})}var j=t(2197),b=t(8880),v=t(1274);function x(){var e=b.U.slice(0,2).map((function(e){return(0,n.jsx)(f,{project:e},e.repo.name)})),r=b.q.map((function(e){return(0,n.jsx)(d,{meta:e},e.slug)}));return(0,n.jsxs)(v.Z,{title:"David's Website",description:"My Projects",children:[(0,n.jsx)("h1",{children:"David Mikulis"}),(0,n.jsxs)("p",{children:["Hello! My name is David and I am a ",(0,n.jsx)("strong",{children:"software engineer"})," who focuses on full-stack web development. I frequently work with Typescript, though I enjoy learning and using new tools. Besides Typescript, I often work with Python and Rust."]}),(0,n.jsx)("h2",{children:"About Me"}),(0,n.jsx)("p",{children:"At my day job, I develop data processing pipelines and web applications for healthcare providers."}),(0,n.jsxs)("p",{children:["I strive for a deep understanding of any topic that I am studying. Recently, I have become interested in the topic of ",(0,n.jsx)("em",{children:"compilers and interpreters"}),". The current project that I am focusing on is an implementation of a"," ",(0,n.jsx)(g.d,{href:"https://github.com/davimiku/unknown-lang",children:"statically-typed imperative programming language"})," ","language in Rust. I have found that studying programming languages has brought me a deeper understanding of how software works."]}),(0,n.jsx)("h2",{children:"Projects"}),(0,n.jsx)(p,{cards:e}),(0,n.jsx)(j.Z,{href:"/projects",children:"See all projects"}),(0,n.jsx)("h2",{children:"Blog posts"}),(0,n.jsx)(p,{cards:r})]})}},4408:function(e){e.exports={"badge-container":"BlogSummaryCard_badge-container__iF1UF"}},1784:function(e){e.exports={card:"Card_card__D5nzx","card-header":"Card_card-header__t6u9y","card-body":"Card_card-body__GVvtj","card-footer":"Card_card-footer__HtTy0","card--dark":"Card_card--dark__FllXU"}},2279:function(e){e.exports={"card-grid":"CardGrid_card-grid__P7gWB"}}},function(e){e.O(0,[415,445,260,866,294,238,669,774,888,179],(function(){return r=8312,e(e.s=r);var r}));var r=e.O();_N_E=r}]);