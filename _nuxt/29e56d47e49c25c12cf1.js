(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{237:function(t,e,n){"use strict";var r=n(7),o="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function c(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach((function(r){var o=n?Reflect.getOwnMetadata(r,e,n):Reflect.getOwnMetadata(r,e);n?Reflect.defineMetadata(r,o,t,n):Reflect.defineMetadata(r,o,t)}))}var f={__proto__:[]}instanceof Array;function d(t){return function(e,n,r){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof r&&(r=void 0),o.__decorators__.push((function(e){return t(e,n,r)}))}}var l=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function v(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(l.indexOf(t)>-1)e[t]=n[t];else{var r=Object.getOwnPropertyDescriptor(n,t);void 0!==r.value?"function"==typeof r.value?(e.methods||(e.methods={}))[t]=r.value:(e.mixins||(e.mixins=[])).push({data:function(){var e;return(e={})[t]=r.value,e}}):(r.get||r.set)&&((e.computed||(e.computed={}))[t]={get:r.get,set:r.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return function(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var r in t.$options.props)t.hasOwnProperty(r)||n.push(r);n.forEach((function(n){"_"!==n.charAt(0)&&Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var data=new e;e.prototype._init=n;var r={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(r[t]=data[t])})),r}(this,t)}});var d=t.__decorators__;d&&(d.forEach((function(t){return t(e)})),delete t.__decorators__);var v,h,O=Object.getPrototypeOf(t.prototype),m=O instanceof r.default?O.constructor:r.default,_=m.extend(e);return function(t,e,n){Object.getOwnPropertyNames(e).forEach((function(r){if(!y[r]){var o=Object.getOwnPropertyDescriptor(t,r);if(!o||o.configurable){var c,d,l=Object.getOwnPropertyDescriptor(e,r);if(!f){if("cid"===r)return;var v=Object.getOwnPropertyDescriptor(n,r);if(c=l.value,d=typeof c,null!=c&&("object"===d||"function"===d)&&v&&v.value===l.value)return}0,Object.defineProperty(t,r,l)}}}))}(_,t,m),o&&(c(v=_,h=t),Object.getOwnPropertyNames(h.prototype).forEach((function(t){c(v.prototype,h.prototype,t)})),Object.getOwnPropertyNames(h).forEach((function(t){c(v,h,t)}))),_}var y={prototype:!0,arguments:!0,callee:!0,caller:!0};function h(t){return"function"==typeof t?v(t):function(e){return v(e,t)}}h.registerHooks=function(t){l.push.apply(l,t)};var O=h;n.d(e,"c",(function(){return w})),n.d(e,"d",(function(){return j})),n.d(e,"e",(function(){return P})),n.d(e,"h",(function(){return R})),n.d(e,"b",(function(){return k})),n.d(e,"f",(function(){return E})),n.d(e,"a",(function(){return O})),n.d(e,"g",(function(){return r.default}));var m="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function _(t,e,n){m&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,n)))}function w(t,e){return void 0===e&&(e={}),function(n,r){_(e,n,r),d((function(n,r){(n.props||(n.props={}))[r]=e,n.model={prop:r,event:t||r}}))(n,r)}}function j(t){return void 0===t&&(t={}),function(e,n){_(t,e,n),d((function(e,n){(e.props||(e.props={}))[n]=t}))(e,n)}}function P(t,e){return void 0===e&&(e={}),function(n,r){_(e,n,r),d((function(n,r){(n.props||(n.props={}))[t]=e,(n.computed||(n.computed={}))[r]={get:function(){return this[t]},set:function(e){this.$emit("update:"+t,e)}}}))(n,r)}}function R(path,t){void 0===t&&(t={});var e=t.deep,n=void 0!==e&&e,r=t.immediate,o=void 0!==r&&r;return d((function(t,e){"object"!=typeof t.watch&&(t.watch=Object.create(null));var r=t.watch;"object"!=typeof r[path]||Array.isArray(r[path])?void 0===r[path]&&(r[path]=[]):r[path]=[r[path]],r[path].push({handler:e,deep:n,immediate:o})}))}var x=/\B([A-Z])/g,M=function(t){return t.replace(x,"-$1").toLowerCase()};function k(t){return function(e,n,r){n=M(n);var o=r.value;r.value=function(){for(var e=this,r=[],c=0;c<arguments.length;c++)r[c]=arguments[c];var f=function(o){void 0!==o&&r.unshift(o),e.$emit.apply(e,[t||n].concat(r))},d=o.apply(this,r);return $(d)?d.then((function(t){f(t)})):f(d),d}}}function E(t){return d((function(e,n){e.computed=e.computed||{},e.computed[n]={cache:!1,get:function(){return this.$refs[t||n]}}}))}function $(t){return t instanceof Promise||t&&"function"==typeof t.then}},319:function(t,e,n){"use strict";n.r(e);var r=n(10),o=n(12),c=n(19),f=n(14),d=n(20),l=n(15),v=n(237),y=n(117),h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"originUrl",get:function(){var t=this.$route.query.url;if(!t||"string"!=typeof t)throw new Error("Query Param url is missing or malformed!");return Object(y.d)(Object(y.b)(t))}}]),e}(v.g),m=O=h([Object(v.a)({head:function(){return{title:"No Video! - OpenVideo"}}})],O),_=n(53),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex fixed-top fixed-bottom bg-dark"},[n("b-media",{staticClass:"m-auto",scopedSlots:t._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:"/logos/logo256.png",alt:"OpenVideo Icon",width:"100"}})]},proxy:!0}])},[t._v(" "),n("h2",[t._v("No Video was found!")]),t._v(" "),n("p",[t._v("\n      The video was probably deleted. Try using a different hoster or a\n      different link. "),n("br"),t._v("\n      If you think this is a mistake you can visit the original site\n      "),n("a",{attrs:{href:t.originUrl}},[t._v("here")]),t._v(".\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);