(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5075)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,o=i(4941).Z,r=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i,s=e.src,l=e.sizes,h=e.unoptimized,p=void 0!==h&&h,b=e.priority,z=void 0!==b&&b,A=e.loading,k=e.lazyRoot,N=e.lazyBoundary,E=e.className,I=e.quality,L=e.width,R=e.height,C=e.style,P=e.objectFit,q=e.objectPosition,H=e.onLoadingComplete,M=e.placeholder,D=void 0===M?"empty":M,W=e.blurDataURL,B=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),Z=d.useContext(g.ImageConfigContext),V=d.useMemo(function(){var e=$||Z||f.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:i})},[Z]),T=B,F=l?"responsive":"intrinsic";"layout"in T&&(T.layout&&(F=T.layout),delete T.layout);var G=j;if("loader"in T){if(T.loader){var O=T.loader;G=function(e){e.config;var t=c(e,["config"]);return O(t)}}delete T.loader}var U,Q,X="";if(U=s,"object"==typeof U&&(x(U)||void 0!==(Q=U).src)){var K=x(s)?s.default:s;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(W=W||K.blurDataURL,X=K.src,(!F||"fill"!==F)&&(R=R||K.height,L=L||K.width,!K.height||!K.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}s="string"==typeof s?s:X;var Y=!z&&("lazy"===A||void 0===A);(s.startsWith("data:")||s.startsWith("blob:"))&&(p=!0,Y=!1),v.has(s)&&(Y=!1),V.unoptimized&&(p=!0);var J=o(d.useState(!1),2),ee=J[0],et=J[1],ei=o(m.useIntersection({rootRef:void 0===k?null:k,rootMargin:N||"200px",disabled:!Y}),3),en=ei[0],eo=ei[1],er=ei[2],ea=!Y||eo,es={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},el={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ec=!1,ed=_(L),eu=_(R),ef=_(I),em=Object.assign({},C,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:q}),eg="blur"!==D||ee?{}:{backgroundSize:P||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===F)es.display="block",es.position="absolute",es.top=0,es.left=0,es.bottom=0,es.right=0;else if(void 0!==ed&&void 0!==eu){var eh=eu/ed,ep=isNaN(eh)?"100%":"".concat(100*eh,"%");"responsive"===F?(es.display="block",es.position="relative",ec=!0,el.paddingTop=ep):"intrinsic"===F?(es.display="inline-block",es.position="relative",es.maxWidth="100%",ec=!0,el.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ed,"%27%20height=%27").concat(eu,"%27/%3e")):"fixed"===F&&(es.display="inline-block",es.position="relative",es.width=ed,es.height=eu)}var e$={src:y,srcSet:void 0,sizes:void 0};ea&&(e$=w({config:V,src:s,unoptimized:p,layout:F,width:ed,quality:ef,sizes:l,loader:G}));var ev=s,ey="imagesizes";ey="imageSizes";var eb=(n(i={},"imageSrcSet",e$.srcSet),n(i,ey,e$.sizes),i),ex=d.default.useLayoutEffect,e8=d.useRef(H),ew=d.useRef(s);d.useEffect(function(){e8.current=H},[H]),ex(function(){ew.current!==s&&(er(),ew.current=s)},[er,s]);var e_=a({isLazy:Y,imgAttributes:e$,heightInt:eu,widthInt:ed,qualityInt:ef,layout:F,className:E,imgStyle:em,blurStyle:eg,loading:A,config:V,unoptimized:p,placeholder:D,loader:G,srcString:ev,onLoadingCompleteRef:e8,setBlurComplete:et,setIntersection:en,isVisible:ea,noscriptSizes:l},T);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:es},ec?d.default.createElement("span",{style:el},t?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,d.default.createElement(S,Object.assign({},e_))),z?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+e$.src+e$.srcSet+e$.sizes,rel:"preload",as:"image",href:e$.srcSet?void 0:e$.src},eb))):null)};var a=i(6495).Z,s=i(2648).Z,l=i(1598).Z,c=i(7273).Z,d=l(i(7294)),u=s(i(5443)),f=i(9309),m=i(7190),g=i(9977);i(3794);var h=i(2392);function p(e){return"/"===e[0]?e.slice(1):e}var $={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},v=new Set,y="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",b=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,r=new URL("".concat(t.path).concat(p(i))),a=r.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString()),r.href}],["cloudinary",function(e){var t,i=e.config,n=e.src,o=e.width,r=["f_auto","c_limit","w_"+o,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(r).concat(p(n))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(p(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function x(e){return void 0!==e.default}function w(e){var t=e.config,i=e.src,n=e.unoptimized,o=e.layout,a=e.width,s=e.quality,l=e.sizes,c=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var o=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var s=/(^|\s)(1?\d?\d)vw/g,l=[];c=s.exec(n);c)l.push(parseInt(c[2]));if(l.length){var c,d,u=.01*(d=Math).min.apply(d,r(l));return{widths:a.filter(function(e){return e>=o[0]*u}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:o,kind:"w"}:{widths:r(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,o,l),u=d.widths,f=d.kind,m=u.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:u.map(function(e,n){return"".concat(c({config:t,src:i,quality:s,width:e})," ").concat("w"===f?e:n+1).concat(f)}).join(", "),src:c({config:t,src:i,quality:s,width:u[m]})}}function _(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function j(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=b.get(i);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function z(e,t,i,n,o,r){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(v.add(t),"blur"===n&&r(!0),null==o?void 0:o.current)){var i=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:i,naturalHeight:a})}}))}var S=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,o=e.layout,r=e.className,s=e.imgStyle,l=e.blurStyle,u=e.isLazy,f=e.placeholder,m=e.loading,g=e.srcString,h=e.config,p=e.unoptimized,$=e.loader,v=e.onLoadingCompleteRef,y=e.setBlurComplete,b=e.setIntersection,x=e.onLoad,_=e.onError,j=(e.isVisible,e.noscriptSizes),S=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return m=u?"lazy":m,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},S,t,{decoding:"async","data-nimg":o,className:r,style:a({},s,l),ref:d.useCallback(function(e){b(e),(null==e?void 0:e.complete)&&z(e,g,o,f,v,y)},[b,g,o,f,v,y,]),onLoad:function(e){z(e.currentTarget,g,o,f,v,y),x&&x(e)},onError:function(e){"blur"===f&&y(!0),_&&_(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},S,w({config:h,src:g,unoptimized:p,layout:o,width:i,quality:n,sizes:j,loader:$}),{decoding:"async","data-nimg":o,style:s,className:r,loading:m}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,i=e.rootRef,c=e.rootMargin,d=e.disabled||!a,u=n(o.useState(!1),2),f=u[0],m=u[1],g=n(o.useState(null),2),h=g[0],p=g[1];return o.useEffect(function(){if(a){if(!d&&!f&&h&&h.tagName){var e,t,n,o,u,g,p;return e=h,t=function(e){return e&&m(e)},u=(o=function(e){var t,i={root:e.root||null,margin:e.rootMargin||""},n=l.find(function(e){return e.root===i.root&&e.margin===i.margin});if(n&&(t=s.get(n)))return t;var o=new Map;return t={id:i,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)})},e),elements:o},l.push(i),s.set(i,t),t}(n={root:null==i?void 0:i.current,rootMargin:c})).id,g=o.observer,(p=o.elements).set(e,t),g.observe(e),function(){if(p.delete(e),g.unobserve(e),0===p.size){g.disconnect(),s.delete(u);var t=l.findIndex(function(e){return e.root===u.root&&e.margin===u.margin});t>-1&&l.splice(t,1)}}}}else if(!f){var $=r.requestIdleCallback(function(){return m(!0)});return function(){return r.cancelIdleCallback($)}}},[h,d,c,i,f]),[p,f,o.useCallback(function(){m(!1)},[])]};var o=i(7294),r=i(9311),a="function"==typeof IntersectionObserver,s=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5075:function(e,t,i){"use strict";i.r(t);var n=i(5893),o=i(9008),r=i.n(o),a=i(5675),s=i.n(a),l=i(214),c=i.n(l),d=function(){return(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:c().main,children:[(0,n.jsxs)("h1",{className:c().title,children:["Welcome to ",(0,n.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,n.jsxs)("p",{className:c().description,children:["Get started by editing"," ",(0,n.jsx)("code",{className:c().code,children:"pages/index.js"})]}),(0,n.jsxs)("div",{className:c().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs",className:c().card,children:[(0,n.jsx)("h2",{children:"Documentation →"}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn",className:c().card,children:[(0,n.jsx)("h2",{children:"Learn →"}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,n.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:c().card,children:[(0,n.jsx)("h2",{children:"Examples →"}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:c().card,children:[(0,n.jsx)("h2",{children:"Deploy →"}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,n.jsx)("footer",{className:c().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:c().logo,children:(0,n.jsx)(s(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})};t.default=d},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,i){e.exports=i(5443)},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);