/*
 SeaJS - A Module Loader for the Web
 v1.2.1 | seajs.org | MIT Licensed
*/
this.seajs={_seajs:this.seajs};seajs.version="1.2.1";seajs._util={};seajs._config={debug:"",preload:[]};
(function(a){var c=Object.prototype.toString,d=Array.prototype;a.isString=function(a){return"[object String]"===c.call(a)};a.isFunction=function(a){return"[object Function]"===c.call(a)};a.isRegExp=function(a){return"[object RegExp]"===c.call(a)};a.isObject=function(a){return a===Object(a)};a.isArray=Array.isArray||function(a){return"[object Array]"===c.call(a)};a.indexOf=d.indexOf?function(a,c){return a.indexOf(c)}:function(a,c){for(var b=0;b<a.length;b++)if(a[b]===c)return b;return-1};var b=a.forEach=
d.forEach?function(a,c){a.forEach(c)}:function(a,c){for(var b=0;b<a.length;b++)c(a[b],b,a)};a.map=d.map?function(a,c){return a.map(c)}:function(a,c){var e=[];b(a,function(a,b,d){e.push(c(a,b,d))});return e};a.filter=d.filter?function(a,c){return a.filter(c)}:function(a,c){var e=[];b(a,function(a,b,d){c(a,b,d)&&e.push(a)});return e};var e=a.keys=Object.keys||function(a){var c=[],b;for(b in a)a.hasOwnProperty(b)&&c.push(b);return c};a.unique=function(a){var c={};b(a,function(a){c[a]=1});return e(c)};
a.now=Date.now||function(){return(new Date).getTime()}})(seajs._util);(function(a,c){var d=Array.prototype;a.log=function(){if("undefined"!==typeof console){var a=d.slice.call(arguments),e="log";console[a[a.length-1]]&&(e=a.pop());if("log"!==e||c.debug)a="dir"===e?a[0]:d.join.call(a," "),console[e](a)}}})(seajs._util,seajs._config);
(function(a,c,d){function b(a){a=a.match(n);return(a?a[0]:".")+"/"}function e(a){f.lastIndex=0;f.test(a)&&(a=a.replace(f,"$1/"));if(-1===a.indexOf("."))return a;for(var c=a.split("/"),b=[],e,d=0;d<c.length;d++)if(e=c[d],".."===e){if(0===b.length)throw Error("The path is invalid: "+a);b.pop()}else"."!==e&&b.push(e);return b.join("/")}function o(a){var a=e(a),c=a.charAt(a.length-1);if("/"===c)return a;"#"===c?a=a.slice(0,-1):-1===a.indexOf("?")&&!g.test(a)&&(a+=".js");0<a.indexOf(":80/")&&(a=a.replace(":80/",
"/"));return a}function k(a){if("#"===a.charAt(0))return a.substring(1);var b=c.alias;if(b&&q(a)){var e=a.split("/"),d=e[0];b.hasOwnProperty(d)&&(e[0]=b[d],a=e.join("/"))}return a}function h(a){return 0<a.indexOf("://")||0===a.indexOf("//")}function j(a){return"/"===a.charAt(0)&&"/"!==a.charAt(1)}function q(a){var c=a.charAt(0);return-1===a.indexOf("://")&&"."!==c&&"/"!==c}var n=/.*(?=\/.*$)/,f=/([^:\/])\/\/+/g,g=/\.(?:css|js)$/,l=/^(.*?\w)(?:\/|$)/,i={},d=d.location,p=d.protocol+"//"+d.host+function(a){"/"!==
a.charAt(0)&&(a="/"+a);return a}(d.pathname);0<p.indexOf("\\")&&(p=p.replace(/\\/g,"/"));a.dirname=b;a.realpath=e;a.normalize=o;a.parseAlias=k;a.parseMap=function(b){var e=c.map||[];if(!e.length)return b;for(var d=b,f=0;f<e.length;f++){var h=e[f];if(a.isArray(h)&&2===h.length){var j=h[0];if(a.isString(j)&&-1<d.indexOf(j)||a.isRegExp(j)&&j.test(d))d=d.replace(j,h[1])}else a.isFunction(h)&&(d=h(d))}d!==b&&(i[d]=b);return d};a.unParseMap=function(a){return i[a]||a};a.id2Uri=function(a,d){if(!a)return"";
a=k(a);d||(d=p);var e;h(a)?e=a:0===a.indexOf("./")||0===a.indexOf("../")?(0===a.indexOf("./")&&(a=a.substring(2)),e=b(d)+a):e=j(a)?d.match(l)[1]+a:c.base+"/"+a;return o(e)};a.isAbsolute=h;a.isRoot=j;a.isTopLevel=q;a.pageUri=p})(seajs._util,seajs._config,this);
(function(a,c){function d(a,b){a.onload=a.onerror=a.onreadystatechange=function(){n.test(a.readyState)&&(a.onload=a.onerror=a.onreadystatechange=null,a.parentNode&&!c.debug&&h.removeChild(a),a=void 0,b())}}function b(c,b){i||p?(a.log("Start poll to fetch css"),setTimeout(function(){e(c,b)},1)):c.onload=c.onerror=function(){c.onload=c.onerror=null;c=void 0;b()}}function e(a,c){var b;if(i)a.sheet&&(b=!0);else if(a.sheet)try{a.sheet.cssRules&&(b=!0)}catch(d){"NS_ERROR_DOM_SECURITY_ERR"===d.name&&(b=
!0)}setTimeout(function(){b?c():e(a,c)},1)}function o(){}var k=document,h=k.head||k.getElementsByTagName("head")[0]||k.documentElement,j=h.getElementsByTagName("base")[0],q=/\.css(?:\?|$)/i,n=/loaded|complete|undefined/,f,g;a.fetch=function(c,e,i){var k=q.test(c),g=document.createElement(k?"link":"script");i&&(i=a.isFunction(i)?i(c):i)&&(g.charset=i);e=e||o;"SCRIPT"===g.nodeName?d(g,e):b(g,e);k?(g.rel="stylesheet",g.href=c):(g.async="async",g.src=c);f=g;j?h.insertBefore(g,j):h.appendChild(g);f=null};
a.getCurrentScript=function(){if(f)return f;if(g&&"interactive"===g.readyState)return g;for(var a=h.getElementsByTagName("script"),c=0;c<a.length;c++){var b=a[c];if("interactive"===b.readyState)return g=b}};a.getScriptAbsoluteSrc=function(a){return a.hasAttribute?a.src:a.getAttribute("src",4)};a.importStyle=function(a,c){if(!c||!k.getElementById(c)){var b=k.createElement("style");c&&(b.id=c);h.appendChild(b);b.styleSheet?b.styleSheet.cssText=a:b.appendChild(k.createTextNode(a))}};var l=navigator.userAgent,
i=536>Number(l.replace(/.*AppleWebKit\/(\d+)\..*/,"$1")),p=0<l.indexOf("Firefox")&&!("onload"in document.createElement("link"))})(seajs._util,seajs._config,this);(function(a){var c=/(?:^|[^.$])\brequire\s*\(\s*(["'])([^"'\s\)]+)\1\s*\)/g;a.parseDependencies=function(d){var b=[],e,d=d.replace(/^\s*\/\*[\s\S]*?\*\/\s*$/mg,"").replace(/^\s*\/\/.*$/mg,"");for(c.lastIndex=0;e=c.exec(d);)e[2]&&b.push(e[2]);return a.unique(b)}})(seajs._util);
(function(a,c,d){function b(a,c){this.uri=a;this.status=c||0}function e(a,d){return c.isString(a)?b._resolve(a,d):c.map(a,function(a){return e(a,d)})}function o(a,e){var m=c.parseMap(a);w[m]?(f[a]=f[m],e()):p[m]?s[m].push(e):(p[m]=!0,s[m]=[e],b._fetch(m,function(){w[m]=!0;var b=f[a];b.status===i.FETCHING&&(b.status=i.FETCHED);t&&(k(a,t),t=null);r&&b.status===i.FETCHED&&(f[a]=r,r.realUri=a);r=null;p[m]&&delete p[m];s[m]&&(c.forEach(s[m],function(a){a()}),delete s[m])},d.charset))}function k(a,d){var m=
f[a]||(f[a]=new b(a));m.status<i.SAVED&&(m.id=d.id||a,m.dependencies=e(c.filter(d.dependencies||[],function(a){return!!a}),a),m.factory=d.factory,m.status=i.SAVED);return m}function h(a,c){var b=a(c.require,c.exports,c);void 0!==b&&(c.exports=b)}function j(a){var b=a.realUri||a.uri,d=g[b];d&&(c.forEach(d,function(c){h(c,a)}),delete g[b])}function q(a){var b=a.uri;return c.filter(a.dependencies,function(a){u=[b];if(a=n(f[a],b))u.push(b),c.log("Found circular dependencies:",u.join(" --\> "),void 0);
return!a})}function n(a,b){if(!a||a.status!==i.SAVED)return!1;u.push(a.uri);var d=a.dependencies;if(d.length){if(-1<c.indexOf(d,b))return!0;for(var e=0;e<d.length;e++)if(n(f[d[e]],b))return!0}return!1}var f={},g={},l=[],i={FETCHING:1,FETCHED:2,SAVED:3,READY:4,COMPILING:5,COMPILED:6};b.prototype._use=function(a,b){c.isString(a)&&(a=[a]);var d=e(a,this.uri);this._load(d,function(){var a=c.map(d,function(a){return a?f[a]._compile():null});b&&b.apply(null,a)})};b.prototype._load=function(a,d){function e(a){(a||
{}).status<i.READY&&(a.status=i.READY);0===--j&&d()}var h=c.filter(a,function(a){return a&&(!f[a]||f[a].status<i.READY)}),g=h.length;if(0===g)d();else for(var j=g,k=0;k<g;k++)(function(a){function d(){h=f[a];if(h.status>=i.SAVED){var x=q(h);x.length?b.prototype._load(x,function(){e(h)}):e(h)}else c.log("It is not a valid CMD module: "+a),e()}var h=f[a]||(f[a]=new b(a,i.FETCHING));h.status>=i.FETCHED?d():o(a,d)})(h[k])};b.prototype._compile=function(){function a(c){c=e(c,b.uri);c=f[c];if(!c)return null;
if(c.status===i.COMPILING)return c.exports;c.parent=b;return c._compile()}var b=this;if(b.status===i.COMPILED)return b.exports;if(b.status<i.READY&&!g[b.realUri||b.uri])return null;b.status=i.COMPILING;a.async=function(a,c){b._use(a,c)};a.resolve=function(a){return e(a,b.uri)};a.cache=f;b.require=a;b.exports={};var d=b.factory;c.isFunction(d)?(l.push(b),h(d,b),l.pop()):void 0!==d&&(b.exports=d);b.status=i.COMPILED;j(b);return b.exports};b._define=function(a,b,d){var h=arguments.length;1===h?(d=a,
a=void 0):2===h&&(d=b,b=void 0,c.isArray(a)&&(b=a,a=void 0));!c.isArray(b)&&c.isFunction(d)&&(b=c.parseDependencies(d.toString()));var h={id:a,dependencies:b,factory:d},g;if(document.attachEvent){var j=c.getCurrentScript();j&&(g=c.unParseMap(c.getScriptAbsoluteSrc(j)));g||c.log("Failed to derive URI from interactive script for:",d.toString(),"warn")}if(j=a?e(a):g){if(j===g){var l=f[g];l&&(l.realUri&&l.status===i.SAVED)&&(f[g]=null)}h=k(j,h);if(g){if((f[g]||{}).status===i.FETCHING)f[g]=h,h.realUri=
g}else r||(r=h)}else t=h};b._getCompilingModule=function(){return l[l.length-1]};b._find=function(a){var b=[];c.forEach(c.keys(f),function(d){if(c.isString(a)&&-1<d.indexOf(a)||c.isRegExp(a)&&a.test(d))d=f[d],d.exports&&b.push(d.exports)});return b};b._modify=function(b,c){var d=e(b),j=f[d];j&&j.status===i.COMPILED?h(c,j):(g[d]||(g[d]=[]),g[d].push(c));return a};b.STATUS=i;b._resolve=c.id2Uri;b._fetch=c.fetch;b.cache=f;var p={},w={},s={},t=null,r=null,u=[],v=new b(c.pageUri,i.COMPILED);a.use=function(c,
b){var e=d.preload;e.length?v._use(e,function(){d.preload=[];v._use(c,b)}):v._use(c,b);return a};a.define=b._define;a.cache=b.cache;a.find=b._find;a.modify=b._modify;a.pluginSDK={Module:b,util:c,config:d}})(seajs,seajs._util,seajs._config);
(function(a,c,d){var b="seajs-ts="+c.now(),e=document.getElementById("seajsnode");e||(e=document.getElementsByTagName("script"),e=e[e.length-1]);var o=c.getScriptAbsoluteSrc(e)||c.pageUri,o=c.dirname(function(a){if(a.indexOf("??")===-1)return a;var b=a.split("??"),a=b[0],b=c.filter(b[1].split(","),function(a){return a.indexOf("sea.js")!==-1});return a+b[0]}(o));c.loaderDir=o;var k=o.match(/^(.+\/)seajs\/[\d\.]+\/$/);k&&(o=k[1]);d.base=o;if(e=e.getAttribute("data-main"))d.main=e;d.charset="utf-8";
a.config=function(e){for(var j in e)if(e.hasOwnProperty(j)){var k=d[j],n=e[j];if(k&&j==="alias")for(var f in n){if(n.hasOwnProperty(f)){var g=k[f],l=n[f];/^\d+\.\d+\.\d+$/.test(l)&&(l=f+"/"+l+"/"+f);g&&g!==l&&c.log("The alias config is conflicted:","key =",'"'+f+'"',"previous =",'"'+g+'"',"current =",'"'+l+'"',"warn");k[f]=l}}else if(k&&(j==="map"||j==="preload")){c.isString(n)&&(n=[n]);c.forEach(n,function(a){a&&k.push(a)})}else d[j]=n}if((e=d.base)&&!c.isAbsolute(e))d.base=c.id2Uri((c.isRoot(e)?
"":"./")+e+"/");if(d.debug===2){d.debug=1;a.config({map:[[/^.*$/,function(a){a.indexOf("seajs-ts=")===-1&&(a=a+((a.indexOf("?")===-1?"?":"&")+b));return a}]]})}if(d.debug)a.debug=!!d.debug;return this};d.debug&&(a.debug=!!d.debug)})(seajs,seajs._util,seajs._config);
(function(a,c,d){a.log=c.log;a.importStyle=c.importStyle;a.config({alias:{seajs:c.loaderDir}});c.forEach(function(){var a=[],e=d.location.search,e=e.replace(/(seajs-\w+)(&|$)/g,"$1=1$2"),e=e+(" "+document.cookie);e.replace(/seajs-(\w+)=[1-9]/g,function(c,d){a.push(d)});return c.unique(a)}(),function(b){a.use("seajs/plugin-"+b);"debug"===b&&(a._use=a.use,a._useArgs=[],a.use=function(){a._useArgs.push(arguments);return a})})})(seajs,seajs._util,this);
(function(a,c,d){var b=a._seajs;if(b&&!b.args)d.seajs=a._seajs;else{d.define=a.define;c.main&&a.use(c.main);if(c=(b||0).args)for(var b={"0":"config",1:"use",2:"define"},e=0;e<c.length;e+=2)a[b[c[e]]].apply(a,c[e+1]);d.define.cmd={};delete a.define;delete a._util;delete a._config;delete a._seajs}})(seajs,seajs._config,this);

/* SeaJS config*/
seajs.config({
	base: ('https:' == document.location.protocol) ? 'https://passport.winxuan.com/libs2/' : "http://static.winxuancdn.com/libs2/",
	alias:{
		"jQuery":"jQuery/1.6.2/jQuery.js",
		"config":"module/config.js?20140304",
		"present":"core/present",
		"presentcard":"core/presentcard",
		"points":"core/points",
		"areaSelector":"module/area-selector.js?20131225",
		"jQueryUI":"module/jquery-ui",
		"wysiwyg-css":"http://static.winxuancdn.com/css/jquery.wysiwyg.css",
		"jQueryUI-css":"http://static.winxuancdn.com/css/jquery-ui-1.8.14.custom.css",
		"autoComplete-css":"http://static.winxuancdn.com/css/jquery.autocomplete.css?20130709",
		"widgets-css":"http://static.winxuancdn.com/css/widgets.css?20130815",
		"jqzoom-css":"http://static.winxuancdn.com/css/jquery.jqzoom.css",
		"validator":"module/jquery-validate-min",
		"searchAssister":"module/searchAssister.js?20141117",
		"score":"module/score",
		"visit":"module/visit.js?20140916",
		"selector":"module/label-select",
		"favorite":"core/favorite",
		"cart":"core/cart",
		"widgets":"module/portal-widgets",
		"winxuan-bar":"module/winxuan-bar",
		"login":"core/login.js?201304221552",
		"ui":"core/ui",
		"address":"core/address.js?201310161653",
		"portrait":"module/portrait",
		"notify":"core/notify.js?20120816",
		"slider":"widgets/slider",
		"roller":"widgets/roller",
		"limit":"widgets/limit.js?20130523",
		"limitbuy":"widgets/limitbuy.js?20140523",
		"bookingslider":"widgets/bookingslider.js?20140710",
		"newSlider":"widgets/newSlider.js?20140813",
		"pagescroll":"widgets/pagescroll.js?20140813",
		"switchable":"widgets/switchable.js?20140813",
		"pageturn":"widgets/pageturn.js?20140710",
		"header":"module/header.js?20140818",
		"top":"module/top.js?20140818",
		"category-menu":"module/category-menu.js?20140224",
		"table":"widgets/table",
		"cms":"cms/cms.js?20121016",
		"cms-css":"http://static.winxuancdn.com/css/cms.css?20130712",
		"cms-module":"cms/module.js?20121016",
		"cms-editor":"cms/editor.js?20140925",
		"cms-banner":"cms/banner.js?20121016",
		"cms-cachemanager":"cms/cacheManager.js?20121016",
		"cms-flushCache":"cms/flushCache.js?20121016",
		"jQuery-drag":"jQuery/1.6.2/drag",
		"wysiwyg":"jQuery/1.6.2/wysiwyg",
		"jqzoom":"jQuery/plugin/jquery.jqzoom-core-pack",
		"category":"cms/category",
		"inputTip":"widgets/inputTip",
		"star":"widgets/star",
		"feedback":"module/feedback",
		"toolkit":"widgets/toolkit.js?20131014",
		"shopslide":"module/shopslide",
		"validate":"core/validate.js?20120414",
		"lazyimg":"widgets/lazyImg",
		"MediaMenu":"module/media-menu",
		"tips":"widgets/tips",
		"MallMenu":"module/mall-menu",
		"returnTop":"module/returntop.js?201408181609",
		"memcache":"module/memcache.js?20120414",
		"eventTrack":"widgets/eventTrack.js?20121009",
		"combBuy":"widgets/combBuy.js?20121012",
		"checkPwd":"widgets/ckpwd.js?20130930",
		"checkpass-css":"http://static.winxuancdn.com/css/checkpass.css?20130109",
		"ui-base-css":"http://static.winxuancdn.com/css/v1/util/ui.css",
		"messenger":"widgets/messenger.js?20130725",
		"miniATF":"widgets/miniATF.js?20130917",
        "turn":"widgets/turn.js?20140225",
        "qrcode":"widgets/qrcode.js?20140304",
        "iplocation":"core/iplocation",
        "xss":"widgets/xss.js?20141119"
	}
});
