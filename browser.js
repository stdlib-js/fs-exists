// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,c=n.__defineSetter__,u=n.__lookupGetter__,i=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var l,f,p,s;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||i.call(e,t)?(l=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=l):e[t]=r.value),p="get"in r,s="set"in r,f&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,t,r.get),s&&c&&c.call(e,t,r.set),e};var l=e;function f(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];r.push.apply(r,arguments);var n=Function.bind.apply(t,r);return new n}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var p,s=f(Object.freeze({__proto__:null,default:{}})),y=s;function _(e,t){p(e,(function(e){return 2===t.length?e?t(e,!1):t(null,!0):t(!e)}))}p="function"==typeof y.access?y.access:y.stat;var d,b=s;return d="function"==typeof b.accessSync?b.accessSync:b.statSync,l(_,"sync",{configurable:!1,enumerable:!1,writable:!1,value:function(e){try{d(e)}catch(e){return!1}return!0}}),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).exists=t();
//# sourceMappingURL=browser.js.map