(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[238],{2962:function(e,t,n){"use strict";n.d(t,{PB:function(){return u}});var o=n(9008),r=n.n(o),a=n(7294);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var s={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},c=function(e,t,n){void 0===t&&(t=[]);var o=void 0===n?{}:n,r=o.defaultWidth,i=o.defaultHeight;return t.reduce((function(t,n,o){return t.push(a.createElement("meta",{key:"og:"+e+":0"+o,property:"og:"+e,content:n.url})),n.alt&&t.push(a.createElement("meta",{key:"og:"+e+":alt0"+o,property:"og:"+e+":alt",content:n.alt})),n.secureUrl&&t.push(a.createElement("meta",{key:"og:"+e+":secure_url0"+o,property:"og:"+e+":secure_url",content:n.secureUrl.toString()})),n.type&&t.push(a.createElement("meta",{key:"og:"+e+":type0"+o,property:"og:"+e+":type",content:n.type.toString()})),n.width?t.push(a.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:n.width.toString()})):r&&t.push(a.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:r.toString()})),n.height?t.push(a.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:n.height.toString()})):i&&t.push(a.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:i.toString()})),t}),[])},p=function(e){var t,n,o,r=[];e.titleTemplate&&(s.templateTitle=e.titleTemplate);var l="";e.title?(l=e.title,s.templateTitle&&(l=s.templateTitle.replace(/%s/g,(function(){return l})))):e.defaultTitle&&(l=e.defaultTitle),l&&r.push(a.createElement("title",{key:"title"},l));var p,u,d=e.noindex||s.noindex||e.dangerouslySetAllPagesToNoIndex,h=e.nofollow||s.nofollow||e.dangerouslySetAllPagesToNoFollow,f="";if(e.robotsProps){var m=e.robotsProps,g=m.nosnippet,v=m.maxSnippet,y=m.maxImagePreview,b=m.maxVideoPreview,k=m.noarchive,w=m.noimageindex,E=m.notranslate,T=m.unavailableAfter;f=(g?",nosnippet":"")+(v?",max-snippet:"+v:"")+(y?",max-image-preview:"+y:"")+(k?",noarchive":"")+(T?",unavailable_after:"+T:"")+(w?",noimageindex":"")+(b?",max-video-preview:"+b:"")+(E?",notranslate":"")}(d||h?(e.dangerouslySetAllPagesToNoIndex&&(s.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(s.nofollow=!0),r.push(a.createElement("meta",{key:"robots",name:"robots",content:(d?"noindex":"index")+","+(h?"nofollow":"follow")+f}))):r.push(a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+f})),e.description&&r.push(a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&r.push(a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){r.push(a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&r.push(a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&r.push(a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&r.push(a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&r.push(a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||l)&&r.push(a.createElement("meta",{key:"og:title",property:"og:title",content:(null==(p=e.openGraph)?void 0:p.title)||l}));(null!=(n=e.openGraph)&&n.description||e.description)&&r.push(a.createElement("meta",{key:"og:description",property:"og:description",content:(null==(u=e.openGraph)?void 0:u.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&r.push(a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var O=e.openGraph.type.toLowerCase();r.push(a.createElement("meta",{key:"og:type",property:"og:type",content:O})),"profile"===O&&e.openGraph.profile?(e.openGraph.profile.firstName&&r.push(a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&r.push(a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&r.push(a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&r.push(a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===O&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){r.push(a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&r.push(a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&r.push(a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){r.push(a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===O&&e.openGraph.article?(e.openGraph.article.publishedTime&&r.push(a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&r.push(a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&r.push(a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){r.push(a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&r.push(a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){r.push(a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==O&&"video.episode"!==O&&"video.tv_show"!==O&&"video.other"!==O||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&r.push(a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&r.push(a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){r.push(a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){r.push(a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&r.push(a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&r.push(a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){r.push(a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&r.push(a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(s.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(s.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&r.push.apply(r,c("image",e.openGraph.images,{defaultWidth:s.defaultOpenGraphImageWidth,defaultHeight:s.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(s.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(s.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&r.push.apply(r,c("video",e.openGraph.videos,{defaultWidth:s.defaultOpenGraphVideoWidth,defaultHeight:s.defaultOpenGraphVideoHeight})),e.openGraph.locale&&r.push(a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&r.push(a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&r.push(a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,n,o;r.push(a.createElement("meta",i({key:"meta:"+(null!=(t=null!=(n=null!=(o=e.keyOverride)?o:e.name)?n:e.property)?t:e.httpEquiv)},e)))})),null!=(o=e.additionalLinkTags)&&o.length&&e.additionalLinkTags.forEach((function(e){var t;r.push(a.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),r},u=(a.Component,function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.noindex,o=void 0!==n&&n,i=e.nofollow,l=e.robotsProps,s=e.description,c=e.canonical,u=e.openGraph,d=e.facebook,h=e.twitter,f=e.additionalMetaTags,m=e.titleTemplate,g=e.defaultTitle,v=e.mobileAlternate,y=e.languageAlternates,b=e.additionalLinkTags;return a.createElement(r(),null,p({title:t,noindex:o,nofollow:i,robotsProps:l,description:s,canonical:c,facebook:d,openGraph:u,additionalMetaTags:f,twitter:h,titleTemplate:m,defaultTitle:g,mobileAlternate:v,languageAlternates:y,additionalLinkTags:b}))},t}(a.Component)),d=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"});new RegExp("["+Object.keys(d).join("")+"]","g")},3454:function(e,t,n){"use strict";var o,r;e.exports=(null==(o=n.g.process)?void 0:o.env)&&"object"===typeof(null==(r=n.g.process)?void 0:r.env)?n.g.process:n(7663)},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(7294))&&r.__esModule?r:{default:r},i=n(6273),l=n(2725),s=n(3462),c=n(1018),p=n(7190),u=n(1210),d=n(8684);var h="undefined"!==typeof a.default.useTransition,f={};function m(e,t,n,o){if(e&&i.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;f[t+"%"+n+(r?"%"+r:"")]=!0}}var g=a.default.forwardRef((function(e,t){var n,r=e.href,g=e.as,v=e.children,y=e.prefetch,b=e.passHref,k=e.replace,w=e.soft,E=e.shallow,T=e.scroll,O=e.locale,x=e.onClick,_=e.onMouseEnter,G=e.legacyBehavior,S=void 0===G?!0!==Boolean(!1):G,P=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=v,!S||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var C=!1!==y,L=o(h?a.default.useTransition():[],2)[1],H=a.default.useContext(s.RouterContext),j=a.default.useContext(c.AppRouterContext);j&&(H=j);var M,R=a.default.useMemo((function(){var e=o(i.resolveHref(H,r,!0),2),t=e[0],n=e[1];return{href:t,as:g?i.resolveHref(H,g):n||t}}),[H,r,g]),N=R.href,D=R.as,A=a.default.useRef(N),I=a.default.useRef(D);S&&(M=a.default.Children.only(n));var Y=S?M&&"object"===typeof M&&M.ref:t,U=o(p.useIntersection({rootMargin:"200px"}),3),z=U[0],F=U[1],W=U[2],B=a.default.useCallback((function(e){I.current===D&&A.current===N||(W(),I.current=D,A.current=N),z(e),Y&&("function"===typeof Y?Y(e):"object"===typeof Y&&(Y.current=e))}),[D,Y,N,W,z]);a.default.useEffect((function(){var e=F&&C&&i.isLocalURL(N),t="undefined"!==typeof O?O:H&&H.locale,n=f[N+"%"+D+(t?"%"+t:"")];e&&!n&&m(H,N,D,{locale:t})}),[D,N,F,O,C,H]);var V={ref:B,onClick:function(e){S||"function"!==typeof x||x(e),S&&M.props&&"function"===typeof M.props.onClick&&M.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,l,s,c,p){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n)){e.preventDefault();var u=function(){"softPush"in t&&"softReplace"in t?t[a?r?"softReplace":"softPush":r?"replace":"push"](n):t[r?"replace":"push"](n,o,{shallow:l,locale:c,scroll:s})};p?p(u):u()}}(e,H,N,D,k,w,E,T,O,j?L:void 0)},onMouseEnter:function(e){S||"function"!==typeof _||_(e),S&&M.props&&"function"===typeof M.props.onMouseEnter&&M.props.onMouseEnter(e),i.isLocalURL(N)&&m(H,N,D,{priority:!0})}};if(!S||b||"a"===M.type&&!("href"in M.props)){var X="undefined"!==typeof O?O:H&&H.locale,q=H&&H.isLocaleDomain&&u.getDomainLocale(D,X,H.locales,H.domainLocales);V.href=q||d.addBasePath(l.addLocale(D,X,H&&H.defaultLocale))}return S?a.default.cloneElement(M,V):a.default.createElement("a",Object.assign({},P,V),n)}));t.default=g,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var o,r=(o=n(7294))&&o.__esModule?o:{default:o};var a=r.default.createContext(null);t.AppRouterContext=a;var i=r.default.createContext(null);t.AppTreeContext=i;var l=r.default.createContext(null);t.FullAppTreeContext=l},7663:function(e){!function(){var t={308:function(e){var t,n,o=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(o){try{return t.call(null,e,0)}catch(o){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:r}catch(e){t=r}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var l,s=[],c=!1,p=-1;function u(){c&&l&&(c=!1,l.length?s=l.concat(s):p=-1,s.length&&d())}function d(){if(!c){var e=i(u);c=!0;for(var t=s.length;t;){for(l=s,s=[];++p<t;)l&&l[p].run();p=-1,t=s.length}l=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||c||i(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=f,o.addListener=f,o.once=f,o.off=f,o.removeListener=f,o.removeAllListeners=f,o.emit=f,o.prependListener=f,o.prependOnceListener=f,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}},i=!0;try{t[e](a,a.exports,o),i=!1}finally{i&&delete n[e]}return a.exports}o.ab="//";var r=o(308);e.exports=r}()},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},75:function(e,t,n){var o=n(3454);(function(){var t,n,r,a,i,l;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof o&&null!==o&&o.hrtime?(e.exports=function(){return(t()-i)/1e6},n=o.hrtime,a=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),l=1e9*o.uptime(),i=a-l):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},2703:function(e,t,n){"use strict";var o=n(414);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,i){if(i!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4087:function(e,t,n){for(var o=n(75),r="undefined"===typeof window?n.g:window,a=["moz","webkit"],i="AnimationFrame",l=r["request"+i],s=r["cancel"+i]||r["cancelRequest"+i],c=0;!l&&c<a.length;c++)l=r[a[c]+"Request"+i],s=r[a[c]+"Cancel"+i]||r[a[c]+"CancelRequest"+i];if(!l||!s){var p=0,u=0,d=[];l=function(e){if(0===d.length){var t=o(),n=Math.max(0,16.666666666666668-(t-p));p=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(p)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return d.push({handle:++u,callback:e,cancelled:!1}),u},s=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return l.call(r,e)},e.exports.cancel=function(){s.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=l,e.cancelAnimationFrame=s}},1517:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(7294),i=d(a),l=d(n(5697)),s=d(n(6774)),c=d(n(4087)),p=d(n(3028)),u=d(n(4509));function d(e){return e&&e.__esModule?e:{default:e}}function h(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}var f=function(){},m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=function(e){return n.inner=e},n.setHeightOffset=function(){n.setState({height:n.inner?n.inner.offsetHeight:""}),n.resizeTicking=!1},n.getScrollY=function(){return void 0!==n.props.parent().pageYOffset?n.props.parent().pageYOffset:void 0!==n.props.parent().scrollTop?n.props.parent().scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},n.getViewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},n.getDocumentHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,t.scrollHeight,e.offsetHeight,t.offsetHeight,e.clientHeight,t.clientHeight)},n.getElementPhysicalHeight=function(e){return Math.max(e.offsetHeight,e.clientHeight)},n.getElementHeight=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},n.getScrollerPhysicalHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getViewportHeight():n.getElementPhysicalHeight(e)},n.getScrollerHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getDocumentHeight():n.getElementHeight(e)},n.isOutOfBound=function(e){var t=e<0,o=n.getScrollerPhysicalHeight(),r=n.getScrollerHeight();return t||e+o>r},n.handleScroll=function(){n.scrollTicking||(n.scrollTicking=!0,(0,c.default)(n.update))},n.handleResize=function(){n.resizeTicking||(n.resizeTicking=!0,(0,c.default)(n.setHeightOffset))},n.unpin=function(){n.props.onUnpin(),n.setState({translateY:"-100%",className:"headroom headroom--unpinned",animation:!0,state:"unpinned"})},n.unpinSnap=function(){n.props.onUnpin(),n.setState({translateY:"-100%",className:"headroom headroom--unpinned headroom-disable-animation",animation:!1,state:"unpinned"})},n.pin=function(){n.props.onPin(),n.setState({translateY:0,className:"headroom headroom--pinned",animation:!0,state:"pinned"})},n.unfix=function(){n.props.onUnfix(),n.setState({translateY:0,className:"headroom headroom--unfixed headroom-disable-animation",animation:!1},(function(){setTimeout((function(){n.setState({state:"unfixed"})}),0)}))},n.update=function(){if(n.currentScrollY=n.getScrollY(),!n.isOutOfBound(n.currentScrollY)){var e=(0,p.default)(n.lastKnownScrollY,n.currentScrollY,n.props,n.state).action;"pin"===e?n.pin():"unpin"===e?n.unpin():"unpin-snap"===e?n.unpinSnap():"unfix"===e&&n.unfix()}n.lastKnownScrollY=n.currentScrollY,n.scrollTicking=!1},n.currentScrollY=0,n.lastKnownScrollY=0,n.scrollTicking=!1,n.resizeTicking=!1,n.eventListenerOptions=!1,n.state={state:"unfixed",translateY:0,className:"headroom headroom--unfixed"},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return e.disable&&"unfixed"!==t.state?{translateY:0,className:"headroom headroom--unfixed headroom-disable-animation",animation:!1,state:"unfixed"}:null}}]),r(t,[{key:"componentDidMount",value:function(){this.setHeightOffset(),this.eventListenerOptions=!!(0,u.default)()&&{passive:!0,capture:!1},this.props.disable||(this.props.parent().addEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize,this.eventListenerOptions))}},{key:"shouldComponentUpdate",value:function(e,t){return!(0,s.default)(this.props,e)||!(0,s.default)(this.state,t)}},{key:"componentDidUpdate",value:function(e,t){e.children!==this.props.children&&this.setHeightOffset(),!e.disable&&this.props.disable?(this.props.parent().removeEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.parent().removeEventListener("resize",this.handleResize,this.eventListenerOptions),"unfixed"!==t.state&&"unfixed"===this.state.state&&this.props.onUnfix()):e.disable&&!this.props.disable&&(this.props.parent().addEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize,this.eventListenerOptions)),e.pin!==this.props.pin&&this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.props.parent()&&(this.props.parent().removeEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.parent().removeEventListener("resize",this.handleResize,this.eventListenerOptions)),window.removeEventListener("scroll",this.handleScroll,this.eventListenerOptions)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.tag,r=h(e,["className","tag"]);delete r.onUnpin,delete r.onPin,delete r.onUnfix,delete r.disableInlineStyles,delete r.disable,delete r.pin,delete r.parent,delete r.children,delete r.upTolerance,delete r.downTolerance,delete r.pinStart,delete r.calcHeightOnResize;var a=r.style,l=r.wrapperStyle,s=h(r,["style","wrapperStyle"]),c={position:this.props.disable||"unfixed"===this.state.state?"relative":"fixed",top:0,left:0,right:0,zIndex:1,WebkitTransform:"translate3D(0, "+this.state.translateY+", 0)",MsTransform:"translate3D(0, "+this.state.translateY+", 0)",transform:"translate3D(0, "+this.state.translateY+", 0)"},p=this.state.className;this.state.animation&&(c=o({},c,{WebkitTransition:"all .2s ease-in-out",MozTransition:"all .2s ease-in-out",OTransition:"all .2s ease-in-out",transition:"all .2s ease-in-out"}),p+=" headroom--scrolled"),c=this.props.disableInlineStyles?a:o({},c,a);var u=o({},l,{height:this.state.height?this.state.height:null}),d=t?t+" headroom-wrapper":"headroom-wrapper";return i.default.createElement(n,{style:u,className:d},i.default.createElement("div",o({ref:this.setRef},s,{style:c,className:p}),this.props.children))}}]),t}(a.Component);m.propTypes={className:l.default.string,parent:l.default.func,children:l.default.any.isRequired,disableInlineStyles:l.default.bool,disable:l.default.bool,pin:l.default.bool,upTolerance:l.default.number,downTolerance:l.default.number,onPin:l.default.func,onUnpin:l.default.func,onUnfix:l.default.func,wrapperStyle:l.default.object,pinStart:l.default.number,style:l.default.object,calcHeightOnResize:l.default.bool,tag:l.default.string},m.defaultProps={parent:function(){return window},disableInlineStyles:!1,disable:!1,pin:!1,upTolerance:5,downTolerance:0,onPin:f,onUnpin:f,onUnfix:f,wrapperStyle:{},pinStart:0,calcHeightOnResize:!0,tag:"div"},t.Z=m},3028:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=t>=e?"down":"up",a=Math.abs(t-e);return n.disable?{action:"none",scrollDirection:r,distanceScrolled:a}:n.pin?{action:"pinned"!==o.state?"pin":"none",scrollDirection:r,distanceScrolled:a}:t<=n.pinStart&&"unfixed"!==o.state?{action:"unfix",scrollDirection:r,distanceScrolled:a}:t<=o.height&&"down"===r&&"unfixed"===o.state?{action:"none",scrollDirection:r,distanceScrolled:a}:t>o.height+n.pinStart&&"down"===r&&"unfixed"===o.state?{action:"unpin-snap",scrollDirection:r,distanceScrolled:a}:"down"===r&&["pinned","unfixed"].indexOf(o.state)>=0&&t>o.height+n.pinStart&&a>n.downTolerance?{action:"unpin",scrollDirection:r,distanceScrolled:a}:"up"===r&&a>n.upTolerance&&["pinned","unfixed"].indexOf(o.state)<0||"up"===r&&t<=o.height&&["pinned","unfixed"].indexOf(o.state)<0?{action:"pin",scrollDirection:r,distanceScrolled:a}:{action:"none",scrollDirection:r,distanceScrolled:a}}},4509:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=!1;try{var t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(n){e=!1}return e}},5224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(7294),a=(o=r)&&o.__esModule?o:{default:o};t.default=function(){return a.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},a.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},888:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(7294),i=d(a),l=d(n(4184)),s=d(n(5697)),c=d(n(5224)),p=d(n(6963)),u=n(1520);function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,u.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,u.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,u.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["className","icons"])),a=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return i.default.createElement("div",{className:a,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},i.default.createElement("div",{className:"react-toggle-track"},i.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),i.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),i.default.createElement("div",{className:"react-toggle-thumb"}),i.default.createElement("input",o({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(a.PureComponent);t.Z=h,h.displayName="Toggle",h.defaultProps={icons:{checked:i.default.createElement(c.default,null),unchecked:i.default.createElement(p.default,null)}},h.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},1520:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var o=e.pageX;if(void 0!==o)return{x:o,y:e.pageY}}return{x:0,y:0}}},6963:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(7294),a=(o=r)&&o.__esModule?o:{default:o};t.default=function(){return a.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},a.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},6774:function(e){e.exports=function(e,t,n,o){var r=n?n.call(o,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var c=a[s];if(!l(c))return!1;var p=e[c],u=t[c];if(!1===(r=n?n.call(o,p,u,c):void 0)||void 0===r&&p!==u)return!1}return!0}}}]);