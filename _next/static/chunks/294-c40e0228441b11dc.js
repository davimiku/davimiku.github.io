(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[294],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},4184:function(e,t){var n;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=r.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var l in n)i.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,r=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,f=void 0!==a&&a,p=e.priority,h=void 0!==p&&p,z=e.loading,O=e.lazyRoot,_=void 0===O?null:O,I=e.lazyBoundary,E=e.className,R=e.quality,M=e.width,P=e.height,C=e.style,L=e.objectFit,q=e.objectPosition,N=e.onLoadingComplete,W=e.placeholder,B=void 0===W?"empty":W,D=e.blurDataURL,U=m(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),F=l.useContext(d.ImageConfigContext),H=l.useMemo((function(){var e=y||F||u.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return g({},e,{allSizes:t,deviceSizes:n})}),[F]),V=U,Z=n?"responsive":"intrinsic";"layout"in V&&(V.layout&&(Z=V.layout),delete V.layout);var T=A;if("loader"in V){if(V.loader){var G=V.loader;T=function(e){e.config;var t=m(e,["config"]);return G(t)}}delete V.loader}var J="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var Q=S(t)?t.default:t;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(D=D||Q.blurDataURL,J=Q.src,(!Z||"fill"!==Z)&&(P=P||Q.height,M=M||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}var K=!h&&("lazy"===z||"undefined"===typeof z);((t="string"===typeof t?t:J).startsWith("data:")||t.startsWith("blob:"))&&(f=!0,K=!1);b.has(t)&&(K=!1);v&&(f=!0);var X,Y=r(l.useState(!1),2),$=Y[0],ee=Y[1],te=r(s.useIntersection({rootRef:_,rootMargin:I||"200px",disabled:!K}),3),ne=te[0],ie=te[1],re=te[2],oe=!K||ie,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,ue={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:L,objectPosition:q},se=x(M),de=x(P),fe=x(R);0;var ge=Object.assign({},C,ue),pe="blur"!==B||$?{}:{backgroundSize:L||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(D,'")')};if("fill"===Z)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof se&&"undefined"!==typeof de){var me=de/se,he=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===Z?(ae.display="block",ae.position="relative",ce=!0,le.paddingTop=he):"intrinsic"===Z?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",ce=!0,le.maxWidth="100%",X="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(se,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===Z&&(ae.display="inline-block",ae.position="relative",ae.width=se,ae.height=de)}else 0;var ve={src:w,srcSet:void 0,sizes:void 0};oe&&(ve=j({config:H,src:t,unoptimized:f,layout:Z,width:se,quality:fe,sizes:n,loader:T}));var ye=t;0;var be;0;var we=(i(be={},"imagesrcset",ve.srcSet),i(be,"imagesizes",ve.sizes),be),ze=l.default.useLayoutEffect,Se=l.useRef(N),je=l.useRef(t);l.useEffect((function(){Se.current=N}),[N]),ze((function(){je.current!==t&&(re(),je.current=t)}),[re,t]);var xe=g({isLazy:K,imgAttributes:ve,heightInt:de,widthInt:se,qualityInt:fe,layout:Z,className:E,imgStyle:ge,blurStyle:pe,loading:z,config:H,unoptimized:f,placeholder:B,loader:T,srcString:ye,onLoadingCompleteRef:Se,setBlurComplete:ee,setIntersection:ne,isVisible:oe,noscriptSizes:n},V);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:ae},ce?l.default.createElement("span",{style:le},X?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:X}):null):null,l.default.createElement(k,Object.assign({},xe))),h?l.default.createElement(c.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},we))):null)};var a,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(5443))&&a.__esModule?a:{default:a},u=n(9309),s=n(7190),d=n(9977),f=(n(3794),n(2392));function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},g.apply(this,arguments)}function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function m(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalUnoptimized:!0}||{},v=h.experimentalUnoptimized,y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalUnoptimized:!0},b=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var z=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t.path).concat(_(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(_(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(_(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function j(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,a=e.width,l=e.quality,c=e.sizes,u=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,i){var r=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,u=[];l=c.exec(i);l)u.push(parseInt(l[2]));if(u.length){var s,d=.01*(s=Math).min.apply(s,o(u));return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,c),d=s.widths,f=s.kind,g=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,i){return"".concat(u({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:u({config:t,src:n,quality:l,width:d[g]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=z.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(n))}function O(e,t,n,i,r,o){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===i&&o(!0),null==r?void 0:r.current)){var n=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:a})}})))}var k=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,o=e.className,a=e.imgStyle,c=e.blurStyle,u=e.isLazy,s=e.placeholder,d=e.loading,f=e.srcString,p=e.config,h=e.unoptimized,v=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,z=e.onLoad,S=e.onError,x=(e.isVisible,e.noscriptSizes),A=m(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=u?"lazy":d,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":r,className:o,style:g({},a,c),ref:l.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&O(e,f,0,s,y,b)}),[w,f,r,s,y,b]),onLoad:function(e){O(e.currentTarget,f,0,s,y,b),z&&z(e)},onError:function(e){"blur"===s&&b(!0),S&&S(e)}})),(u||"blur"===s)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},A,j({config:p,src:f,unoptimized:h,layout:r,width:n,quality:i,sizes:x,loader:v}),{decoding:"async","data-nimg":r,style:a,className:o,loading:d}))))};function _(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,u=e.disabled||!a,s=r.useRef(),d=i(r.useState(!1),2),f=d[0],g=d[1],p=i(r.useState(null),2),m=p[0],h=p[1];r.useEffect((function(){if(a){if(s.current&&(s.current(),s.current=void 0),u||f)return;return m&&m.tagName&&(s.current=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=l.get(i)))return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:r},c.push(n),l.set(n,t),t}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(r);var t=c.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&c.splice(t,1)}}}(m,(function(e){return e&&g(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==s.current||s.current(),s.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return g(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[m,u,n,t,f]);var v=r.useCallback((function(){g(!1)}),[]);return[h,f,v]};var r=n(7294),o=n(9311),a="function"===typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,n){e.exports=n(8045)}}]);