// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function t(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var n,r=t(Object.freeze({__proto__:null,default:{}})),c=r;function o(e,t){n(e,(function(e){if(2===t.length)return e?t(e,!1):t(null,!0);if(e)return t(!1);return t(!0)}))}n="function"==typeof c.access?c.access:c.stat;var s,u=r;function f(e){try{s(e)}catch(e){return!1}return!0}s="function"==typeof u.accessSync?u.accessSync:u.statSync,e(o,"sync",f);export{o as default,f as sync};
//# sourceMappingURL=index.mjs.map