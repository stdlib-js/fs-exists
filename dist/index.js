"use strict";var f=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var y=f(function(h,a){
var n=require("fs"),u;typeof n.access=="function"?u=n.access:u=n.stat;function l(t,e){u(t,r);function r(s){return e.length===2?s?e(s,!1):e(null,!0):e(!s)}}a.exports=l
});var v=f(function(g,o){
var c=require("fs"),i;typeof c.accessSync=="function"?i=c.accessSync:i=c.statSync;function p(t){try{i(t)}catch(e){return!1}return!0}o.exports=p
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=y(),S=v();q(x,"sync",S);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
