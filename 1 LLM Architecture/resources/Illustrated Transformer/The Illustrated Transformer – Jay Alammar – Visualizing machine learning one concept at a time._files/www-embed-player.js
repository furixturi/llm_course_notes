(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ia(a){return a.raw=a}
function ja(a,b){a.raw=b;return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function la(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ma(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var pa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ma(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||pa});
var qa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ra=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=qa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),sa;
if("function"==typeof Object.setPrototypeOf)sa=Object.setPrototypeOf;else{var ta;a:{var ua={a:!0},va={};try{va.__proto__=ua;ta=va.a;break a}catch(a){}ta=!1}sa=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=sa;
function x(a,b){a.prototype=qa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function xa(){this.A=!1;this.u=null;this.i=void 0;this.h=1;this.m=this.l=0;this.K=this.j=null}
function ya(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
xa.prototype.D=function(a){this.i=a};
function za(a,b){a.j={exception:b,nd:!0};a.h=a.l||a.m}
xa.prototype.return=function(a){this.j={return:a};this.h=this.m};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.B=function(a){this.h=a};
function Aa(a,b,c){a.l=b;void 0!=c&&(a.m=c)}
function Ba(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){var b=a.K.splice(0)[0];(b=a.j=a.j||b)?b.nd?a.h=a.l||a.m:void 0!=b.B&&a.m<b.B?(a.h=b.B,a.j=null):a.h=a.m:a.h=0}
function Da(a){this.h=new xa;this.i=a}
function Ea(a,b){ya(a.h);var c=a.h.u;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.u=null,za(a.h,g),Ga(a)}a.h.u=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.nd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){ya(a.h);a.h.u?b=Fa(a,a.h.u.next,b,a.h.D):(a.h.D(b),b=Ga(a));return b};
this.throw=function(b){ya(a.h);a.h.u?b=Fa(a,a.h.u["throw"],b,a.h.D):(za(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ia(new Ha(new Da(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ra});
u("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.ba),reject:g(this.u)}};
b.prototype.ba=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.X(g):this.m(g)}};
b.prototype.X=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}"function"==typeof h?this.ha(h,g):this.m(g)};
b.prototype.u=function(g){this.D(2,g)};
b.prototype.m=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ea();this.K()};
b.prototype.ea=function(){var g=this;e(function(){if(g.T()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.T=function(){if(this.A)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.K=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.fa=function(g){var h=this.l();g.Xb(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,r){return"function"==typeof t?function(v){try{l(t(v))}catch(y){n(y)}}:r}
var l,n,p=new b(function(t,r){l=t;n=r});
this.Xb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Xb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),n=l.next();!n.done;n=l.next())d(n.value).Xb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(v){return function(y){t[v]=y;r--;0==r&&l(t)}}
var t=[],r=0;do t.push(void 0),r++,d(k.value).Xb(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ma(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ma(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ma(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ma(k,g)&&ma(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ma(k,g)&&ma(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return fa(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&ma(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Object.setPrototypeOf",function(a){return a||wa});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ma(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ma(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||da});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ma(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return null!=a?a:b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Va=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ta:Ua;return Va.apply(null,arguments)}
function Wa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Xa(){return Date.now()}
function Ya(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Za(a){return a}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Ya($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function bb(){}
function cb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},eb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},gb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},hb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
eb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ib(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function jb(a,b){b=db(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function qb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function rb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function tb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<vb.length;f++)c=vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var xb;function yb(){if(void 0===xb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Za,createScript:Za,createScriptURL:Za})}catch(c){C.console&&C.console.error(c.message)}xb=a}else xb=a}return xb}
;function zb(a,b){this.h=a===Ab&&b||""}
zb.prototype.toString=function(){return this.h};
function Bb(a){return new zb(Ab,a)}
var Ab={};Bb("");function Cb(a){this.h=a}
Cb.prototype.toString=function(){return this.h+""};
function Db(a){if(a instanceof Cb&&a.constructor===Cb)return a.h;Na(a);return"type_error:TrustedResourceUrl"}
var Eb={};function Fb(a){var b=yb();a=b?b.createScriptURL(a):a;return new Cb(a,Eb)}
;var Gb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Hb(a){this.h=a}
Hb.prototype.toString=function(){return this.h.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);var Kb=Ma(610401301,!1),Lb=Ma(572417392,!0);function Mb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Nb,Ob=C.navigator;Nb=Ob?Ob.userAgentData||null:null;function Pb(a){return Kb?Nb?Nb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Mb().indexOf(a)}
;function Qb(){return Kb?!!Nb&&0<Nb.brands.length:!1}
function Rb(){return Qb()?!1:F("Opera")}
function Sb(){return Qb()?!1:F("Trident")||F("MSIE")}
function Tb(){return F("Firefox")||F("FxiOS")}
function Ub(){return Qb()?Pb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Qb()?0:F("Edge"))||F("Silk")}
;function Vb(a){this.h=a}
Vb.prototype.toString=function(){return this.h.toString()};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Wb={};function Xb(){}
Xb.prototype.toString=function(){return this.td.toString()};function Yb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $b(a){return a?decodeURI(a):a}
function ac(a,b){return b.match(Zb)[a]||null}
function bc(a){return $b(ac(3,a))}
function cc(a){var b=a.match(Zb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function dc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function ec(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)fc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function hc(a){var b=[],c;for(c in a)fc(c,a[c],b);return b.join("&")}
function ic(a,b){b=hc(b);return ec(a,b)}
function jc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return ec(a,b+c)}
function kc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var lc=/#|$/,mc=/[?&]($|#)/;function nc(a,b){for(var c=a.search(lc),d=0,e,f=[];0<=(e=kc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(mc,"$1")}
;function oc(a){this.h=a}
;function pc(a,b,c){this.j=a;this.u=b;this.i=c||[];this.h=new Map}
m=pc.prototype;m.Nd=function(a){var b=B.apply(1,arguments),c=this.xc(b);c?c.push(new oc(a)):this.Ad(a,b)};
m.Ad=function(a){var b=this.getKey(B.apply(1,arguments));this.h.set(b,[new oc(a)])};
m.xc=function(){var a=this.getKey(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
m.ee=function(){var a=this.xc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.h.clear()};
m.getKey=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function qc(a,b){pc.call(this,a,3,b)}
x(qc,pc);qc.prototype.l=function(a){var b=B.apply(1,arguments),c=0,d=this.ee(b);d&&(c=d.h);this.Ad(c+a,b)};function rc(a,b){pc.call(this,a,2,b)}
x(rc,pc);rc.prototype.record=function(a){this.Nd(a,B.apply(1,arguments))};function sc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function tc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Oa(d)?tc.apply(null,d):sc(d)}}
;function G(){this.pb=this.pb;this.u=this.u}
m=G.prototype;m.pb=!1;m.Z=function(){return this.pb};
m.dispose=function(){this.pb||(this.pb=!0,this.S())};
function uc(a,b){a.addOnDisposeCallback(Wa(sc,b))}
m.addOnDisposeCallback=function(a,b){this.pb?void 0!==b?a.call(b):a():(this.u||(this.u=[]),this.u.push(void 0!==b?Va(a,b):a))};
m.S=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function vc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
vc.prototype.stopPropagation=function(){this.j=!0};
vc.prototype.preventDefault=function(){this.defaultPrevented=!0};function wc(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function xc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=yc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,zc[c])c=zc[c];else{c=String(c);if(!zc[c]){var f=/function\s+([^\(]+)/m.exec(c);zc[c]=f?f[1]:"[Anonymous]"}c=zc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function yc(a,b){b||(b={});b[Ac(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Ac(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=yc(a,b));return c}
function Ac(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var zc={};var Bc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Cc(){return Kb?!!Nb&&!!Nb.platform:!1}
function Dc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Ec(a){Ec[" "](a);return a}
Ec[" "]=function(){};var Fc=Rb(),Gc=Sb(),Hc=F("Edge"),Ic=F("Gecko")&&!(-1!=Mb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Jc=-1!=Mb().toLowerCase().indexOf("webkit")&&!F("Edge");Jc&&F("Mobile");Cc()||F("Macintosh");Cc()||F("Windows");(Cc()?"Linux"===Nb.platform:F("Linux"))||Cc()||F("CrOS");var Kc=Cc()?"Android"===Nb.platform:F("Android");Dc();F("iPad");F("iPod");Dc()||F("iPad")||F("iPod");Mb().toLowerCase().indexOf("kaios");
function Lc(){var a=C.document;return a?a.documentMode:void 0}
var Mc;a:{var Nc="",Oc=function(){var a=Mb();if(Ic)return/rv:([^\);]+)(\)|;)/.exec(a);if(Hc)return/Edge\/([\d\.]+)/.exec(a);if(Gc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Jc)return/WebKit\/(\S+)/.exec(a);if(Fc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Oc&&(Nc=Oc?Oc[1]:"");if(Gc){var Rc=Lc();if(null!=Rc&&Rc>parseFloat(Nc)){Mc=String(Rc);break a}}Mc=Nc}var Sc=Mc,Tc;if(C.document&&Gc){var Uc=Lc();Tc=Uc?Uc:parseInt(Sc,10)||void 0}else Tc=void 0;var Vc=Tc;function Wc(a,b){vc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Ya(Wc,vc);var Xc={2:"touch",3:"pen",4:"mouse"};
Wc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Ic){a:{try{Ec(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Xc[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Wc.Aa.preventDefault.call(this)};
Wc.prototype.stopPropagation=function(){Wc.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Wc.prototype.preventDefault=function(){Wc.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Yc="closure_listenable_"+(1E6*Math.random()|0);var Zc=0;function $c(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.cc=e;this.key=++Zc;this.Nb=this.Wb=!1}
function ad(a){a.Nb=!0;a.listener=null;a.proxy=null;a.src=null;a.cc=null}
;function bd(a){this.src=a;this.listeners={};this.h=0}
bd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=cd(a,b,d,e);-1<g?(b=a[g],c||(b.Wb=!1)):(b=new $c(b,this.src,f,!!d,e),b.Wb=c,a.push(b));return b};
bd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=cd(e,b,c,d);return-1<b?(ad(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function dd(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&(ad(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function cd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Nb&&f.listener==b&&f.capture==!!c&&f.cc==d)return e}return-1}
;var ed="closure_lm_"+(1E6*Math.random()|0),fd={},gd=0;function hd(a,b,c,d,e){if(d&&d.once)id(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)hd(a,b[f],c,d,e);else c=jd(c),a&&a[Yc]?a.listen(b,c,Pa(d)?!!d.capture:!!d,e):kd(a,b,c,!1,d,e)}
function kd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=ld(a);h||(a[ed]=h=new bd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=md();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Bc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(nd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");gd++}}
function md(){function a(c){return b.call(a.src,a.listener,c)}
var b=od;return a}
function id(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)id(a,b[f],c,d,e);else c=jd(c),a&&a[Yc]?a.h.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):kd(a,b,c,!0,d,e)}
function pd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)pd(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=jd(c),a&&a[Yc])?a.h.remove(String(b),c,d,e):a&&(a=ld(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=cd(b,c,d,e)),(c=-1<a?b[a]:null)&&qd(c))}
function qd(a){if("number"!==typeof a&&a&&!a.Nb){var b=a.src;if(b&&b[Yc])dd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(nd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);gd--;(c=ld(b))?(dd(c,a),0==c.h&&(c.src=null,b[ed]=null)):ad(a)}}}
function nd(a){return a in fd?fd[a]:fd[a]="on"+a}
function od(a,b){if(a.Nb)a=!0;else{b=new Wc(b,this);var c=a.listener,d=a.cc||a.src;a.Wb&&qd(a);a=c.call(d,b)}return a}
function ld(a){a=a[ed];return a instanceof bd?a:null}
var rd="__closure_events_fn_"+(1E9*Math.random()>>>0);function jd(a){if("function"===typeof a)return a;a[rd]||(a[rd]=function(b){return a.handleEvent(b)});
return a[rd]}
;function sd(){G.call(this);this.h=new bd(this);this.Za=this;this.fa=null}
Ya(sd,G);sd.prototype[Yc]=!0;m=sd.prototype;m.addEventListener=function(a,b,c,d){hd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){pd(this,a,b,c,d)};
function td(a,b){var c=a.fa;if(c){var d=[];for(var e=1;c;c=c.fa)d.push(c),++e}a=a.Za;c=b.type||b;"string"===typeof b?b=new vc(b,a):b instanceof vc?b.target=b.target||a:(e=b,b=new vc(c,a),wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=ud(g,c,!0,b)&&e}b.j||(g=b.h=a,e=ud(g,c,!0,b)&&e,b.j||(e=ud(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=ud(g,c,!1,b)&&e}
m.S=function(){sd.Aa.S.call(this);this.removeAllListeners();this.fa=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,ad(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function ud(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Nb&&g.capture==c){var h=g.listener,k=g.cc||g.src;g.Wb&&dd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function vd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
vd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function wd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function xd(a,b){return a+Math.random()*(b-a)}
;function yd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=yd.prototype;m.clone=function(){return new yd(this.x,this.y)};
m.equals=function(a){return a instanceof yd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function zd(a,b){this.width=a;this.height=b}
m=zd.prototype;m.clone=function(){return new zd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.Hb=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Ad(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Bd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Cd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Dd;function Ed(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Bd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Sb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.bd;c.bd=null;e()}};
return function(e){d.next={bd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Fd(a){C.setTimeout(function(){throw a;},0)}
;function Gd(){this.i=this.h=null}
Gd.prototype.add=function(a,b){var c=Hd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Gd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Hd=new vd(function(){return new Id},function(a){return a.reset()});
function Id(){this.next=this.scope=this.h=null}
Id.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Id.prototype.reset=function(){this.next=this.scope=this.h=null};var Jd,Kd=!1,Ld=new Gd;function Md(a,b){Jd||Nd();Kd||(Jd(),Kd=!0);Ld.add(a,b)}
function Nd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Jd=function(){a.then(Od)}}else Jd=function(){var b=Od;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Qb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Dd||(Dd=Ed()),Dd(b)):C.setImmediate(b)}}
function Od(){for(var a;a=Ld.remove();){try{a.h.call(a.scope)}catch(b){Fd(b)}wd(Hd,a)}Kd=!1}
;function Pd(a){this.h=0;this.A=void 0;this.l=this.i=this.j=null;this.u=this.m=!1;if(a!=bb)try{var b=this;a.call(void 0,function(c){Qd(b,2,c)},function(c){Qd(b,3,c)})}catch(c){Qd(this,3,c)}}
function Rd(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Rd.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Sd=new vd(function(){return new Rd},function(a){a.reset()});
function Td(a,b,c){var d=Sd.get();d.i=a;d.h=b;d.context=c;return d}
function Ud(a){return new Pd(function(b,c){c(a)})}
Pd.prototype.then=function(a,b,c){return Vd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Pd.prototype.$goog_Thenable=!0;m=Pd.prototype;m.oc=function(a,b){return Vd(this,null,a,b)};
m.catch=Pd.prototype.oc;m.cancel=function(a){if(0==this.h){var b=new Wd(a);Md(function(){Xd(this,b)},this)}};
function Xd(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Xd(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Yd(c),Zd(c,e,3,b)))}a.j=null}else Qd(a,3,b)}
function $d(a,b){a.i||2!=a.h&&3!=a.h||ae(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Vd(a,b,c,d){var e=Td(null,null,null);e.child=new Pd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Wd?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;$d(a,e);return e.child}
m.df=function(a){this.h=0;Qd(this,2,a)};
m.ef=function(a){this.h=0;Qd(this,3,a)};
function Qd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.df,f=a.ef;if(d instanceof Pd){$d(d,Td(e||bb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){be(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.h=b,a.j=null,ae(a),3!=b||c instanceof Wd||ce(a,c))}}
function be(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ae(a){a.m||(a.m=!0,Md(a.Zd,a))}
function Yd(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.Zd=function(){for(var a;a=Yd(this);)Zd(this,a,this.h,this.A);this.m=!1};
function Zd(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.u;a=a.j)a.u=!1;if(b.child)b.child.j=null,de(b,c,d);else try{b.j?b.i.call(b.context):de(b,c,d)}catch(e){fe.call(null,e)}wd(Sd,b)}
function de(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ce(a,b){a.u=!0;Md(function(){a.u&&fe.call(null,b)})}
var fe=Fd;function Wd(a){$a.call(this,a)}
Ya(Wd,$a);Wd.prototype.name="cancel";function ge(a,b){sd.call(this);this.j=a||1;this.i=b||C;this.l=Va(this.bf,this);this.m=Xa()}
Ya(ge,sd);m=ge.prototype;m.enabled=!1;m.Fa=null;m.setInterval=function(a){this.j=a;this.Fa&&this.enabled?(this.stop(),this.start()):this.Fa&&this.stop()};
m.bf=function(){if(this.enabled){var a=Xa()-this.m;0<a&&a<.8*this.j?this.Fa=this.i.setTimeout(this.l,this.j-a):(this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null),td(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Fa||(this.Fa=this.i.setTimeout(this.l,this.j),this.m=Xa())};
m.stop=function(){this.enabled=!1;this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null)};
m.S=function(){ge.Aa.S.call(this);this.stop();delete this.i};
function he(a,b,c){if("function"===typeof a)c&&(a=Va(a,c));else if(a&&"function"==typeof a.handleEvent)a=Va(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function ie(a){G.call(this);this.D=a;this.j=0;this.l=100;this.m=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new ge(this.flushInterval);this.h.listen("tick",this.mb,!1,this);uc(this,this.h)}
x(ie,G);m=ie.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function je(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.mb()}
m.mb=function(){var a=this.i.values();a=[].concat(la(a)).filter(function(b){return b.h.size});
a.length&&this.D.flush(a,this.m);ke(a);this.j=0;this.h.enabled&&this.h.stop()};
m.sc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new qc(a,b))};
m.Wc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new rc(a,b))};
function le(a,b){return a.A.has(b)?void 0:a.i.get(b)}
m.Rb=function(a){this.Md.apply(this,[a,1].concat(la(B.apply(1,arguments))))};
m.Md=function(a,b){var c=B.apply(2,arguments),d=le(this,a);d&&d instanceof qc&&(d.l(b,c),je(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=le(this,a);d&&d instanceof rc&&(d.record(b,c),je(this))};
function ke(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function me(a){this.h=a;this.h.sc("/client_streamz/bg/fic",{Ca:3,Ba:"ke"})}
function ne(a){this.h=a;this.h.sc("/client_streamz/bg/fiec",{Ca:3,Ba:"rk"},{Ca:3,Ba:"ke"},{Ca:2,Ba:"ec"},{Ca:3,Ba:"em"})}
function oe(a,b,c,d,e){a.h.Rb("/client_streamz/bg/fiec",b,c,d,e)}
function pe(a){this.h=a;this.h.Wc("/client_streamz/bg/fil",{Ca:3,Ba:"rk"},{Ca:3,Ba:"ke"})}
pe.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function qe(a){this.h=a;this.h.sc("/client_streamz/bg/fsc",{Ca:3,Ba:"rk"},{Ca:3,Ba:"ke"})}
function re(a){this.h=a;this.h.Wc("/client_streamz/bg/fsl",{Ca:3,Ba:"rk"},{Ca:3,Ba:"ke"})}
re.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};var se={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function te(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=ue(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=ve(a,h),d+=ve(a,h+4),e+=ve(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return se.toString(e)}
function ue(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function ve(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Tb();var we=Dc()||F("iPod"),xe=F("iPad");!F("Android")||Ub()||Tb()||Rb()||F("Silk");Ub();var ye=F("Safari")&&!(Ub()||(Qb()?0:F("Coast"))||Rb()||(Qb()?0:F("Edge"))||(Qb()?Pb("Microsoft Edge"):F("Edg/"))||(Qb()?Pb("Opera"):F("OPR"))||Tb()||F("Silk")||F("Android"))&&!(Dc()||F("iPad")||F("iPod"));var ze={},Ae=null;function Be(a,b){Oa(a);void 0===b&&(b=0);Ce();b=ze[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function De(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ee(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Ee(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Ae[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Ce();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Ce(){if(!Ae){Ae={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));ze[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Ae[f]&&(Ae[f]=e)}}}}
;var Fe="undefined"!==typeof Uint8Array,Ge=!Gc&&"function"===typeof btoa;function He(a){if(!Ge)return Be(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Ie=/[-_.]/g,Je={"-":"+",_:"/",".":"="};function Ke(a){return Je[a]||""}
function Le(a){return Fe&&null!=a&&a instanceof Uint8Array}
var Me={};var Ne;function Oe(a){if(a!==Me)throw Error("illegal external caller");}
function Pe(a,b){Oe(b);this.value_=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Pe.prototype.Hb=function(){return null==this.value_};
Pe.prototype.sizeBytes=function(){Oe(Me);var a=this.value_;if(null!=a&&!Le(a))if("string"===typeof a)if(Ge){Ie.test(a)&&(a=a.replace(Ie,Ke));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=De(a);else Na(a),a=null;return(a=null==a?a:this.value_=a)?a.length:0};function Qe(){return"function"===typeof BigInt}
var Re=!Lb,Se=!Lb;function Te(a){return Array.prototype.slice.call(a)}
;var Ue;Ue="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,la(Object.values({Hf:1,Ff:2,Ef:4,Kf:8,Jf:16,If:32,vf:64,Mf:128,Df:256,Cf:512,Gf:1024,Af:2048,Lf:4096,Bf:8192})));var Ve=Ue?function(a,b){a[Ue]|=b}:function(a,b){void 0!==a.Sa?a.Sa|=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function We(a){var b=Xe(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Te(a)),Ye(a,b|1))}
function Ze(a,b,c){return c?a|b:a&~b}
var Xe=Ue?function(a){return a[Ue]|0}:function(a){return a.Sa|0},$e=Ue?function(a){return a[Ue]}:function(a){return a.Sa},Ye=Ue?function(a,b){a[Ue]=b}:function(a,b){void 0!==a.Sa?a.Sa=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function af(){var a=[];Ve(a,1);return a}
function bf(a,b){Ye(b,(a|0)&-14591)}
function cf(a,b){Ye(b,(a|34)&-14557)}
function df(a){a=a>>14&1023;return 0===a?536870912:a}
;var ef={},ff={};function gf(a){return!(!a||"object"!==typeof a||a.ag!==ff)}
function hf(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var jf,kf=!Lb;function lf(a,b){if(null==a){if(!b)throw Error();}else if("string"===typeof a)a=a?new Pe(a,Me):Ne||(Ne=new Pe(null,Me));else if(a.constructor!==Pe)if(Le(a))a instanceof Uint8Array||Array.isArray(a),a=a.length?new Pe(new Uint8Array(a),Me):Ne||(Ne=new Pe(null,Me));else throw Error();return a}
function mf(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=Xe(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;Ye(a,d|1);return!0}
var nf,of=[];Ye(of,55);nf=Object.freeze(of);function pf(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});var qf=0,rf=0;function sf(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(tf(c,a)),b=c.next().value,a=c.next().value,c=b);qf=c>>>0;rf=a>>>0}
function uf(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Qe()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+vf(c)+vf(a));return c}
function vf(a){a=String(a);return"0000000".slice(a.length)+a}
function wf(){var a=qf,b=rf;b&2147483648?Qe()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(tf(a,b)),a=b.next().value,b=b.next().value,a="-"+uf(a,b)):a=uf(a,b);return a}
function tf(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function xf(){var a=Error();wc(a,"incident");Fd(a)}
function yf(a){a=Error(a);wc(a,"warning");return a}
;function zf(a){return a.displayName||a.name||"unknown type name"}
function Af(a){if(null!=a&&"boolean"!==typeof a)throw Error("Expected boolean but got "+Na(a)+": "+a);return a}
var Bf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Cf(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:Bf.test(a)}
function Df(a){if(null!=a){if("number"!==typeof a)throw yf("int32");if(!Number.isFinite(a))throw yf("int32");a|=0}return a}
function Ef(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}
function Ff(a){if(null!=a){var b=!!b;if(!Cf(a))throw yf("int64");a="string"===typeof a?Gf(a):b?Hf(a):If(a)}return a}
function Jf(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function If(a){Cf(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){sf(a);var b=qf,c=rf;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Hf(a){Cf(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Jf(b)?a=b:(sf(a),a=wf())}return a}
function Gf(a){Cf(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));a.indexOf(".");if(!Jf(a)){if(16>a.length)sf(Number(a));else if(Qe())a=BigInt(a),qf=Number(a&BigInt(4294967295))>>>0,rf=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);rf=qf=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),rf*=1E6,qf=1E6*qf+d,4294967296<=qf&&(rf+=Math.trunc(qf/4294967296),rf>>>=0,qf>>>=0);b&&(b=w(tf(qf,rf)),
a=b.next().value,b=b.next().value,qf=a,rf=b)}a=wf()}return a}
function Kf(a){if("string"!==typeof a)throw Error();return a}
function Lf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Mf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+zf(b)+" but got "+(a&&zf(a.constructor)));}
function Nf(a,b,c){if(null!=a&&"object"===typeof a&&a.Ic===ef)return a;if(Array.isArray(a)){var d=Xe(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&Ye(a,e);return new b(a)}}
;var Of;function Pf(a,b){Xe(b);Of=b;a=new a(b);Of=void 0;return a}
function Qf(a,b,c){null==a&&(a=Of);Of=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=Xe(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1;if(hf(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}Ye(a,d);return a}
;function Rf(a,b){return Sf(b)}
function Sf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return kf||!mf(a,void 0,9999)?a:void 0;if(Le(a))return He(a);if(a instanceof Pe){var b=a.value_;return null==b?"":"string"===typeof b?b:a.value_=He(b)}}}return a}
;function Tf(a,b,c){a=Te(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Uf(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Xe(a)&1?void 0:f&&Xe(a)&2?a:Vf(a,b,c,void 0!==d,e,f);else if(hf(a)){var g={},h;for(h in a)g[h]=Uf(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Vf(a,b,c,d,e,f){var g=d||c?Xe(a):0;d=d?!!(g&32):void 0;a=Te(a);for(var h=0;h<a.length;h++)a[h]=Uf(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Wf(a){return a.Ic===ef?a.toJSON():Sf(a)}
;function Xf(a,b,c){c=void 0===c?cf:c;if(null!=a){if(Fe&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Xe(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(Ye(a,(d|34)&-12293),a):Vf(a,Xf,d&4?cf:c,!0,!1,!0)}a.Ic===ef&&(c=a.F,d=$e(c),a=d&2?a:Pf(a.constructor,Yf(c,d,!0)));return a}}
function Yf(a,b,c){var d=c||b&2?cf:bf,e=!!(b&32);a=Tf(a,b,function(f){return Xf(f,e,d)});
Ve(a,32|(c?2:0));return a}
function Zf(a){var b=a.F,c=$e(b);return c&2?Pf(a.constructor,Yf(b,c,!1)):a}
;function $f(a,b){a=a.F;return ag(a,$e(a),b)}
function ag(a,b,c,d){if(-1===c)return null;if(c>=df(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function bg(a,b,c){var d=a.F,e=$e(d);pf(e);cg(d,e,b,c);return a}
function cg(a,b,c,d,e){hf(d);var f=df(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&Ye(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function dg(a){return void 0!==eg(a,fg,11,!1)}
function gg(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function hg(a,b,c,d){var e=a.F,f=$e(e);pf(f);if(null==c)return cg(e,f,b),a;Array.isArray(c)||xf();var g=Xe(c),h=g,k=!!(2&g)||Object.isFrozen(c),l=!k&&!1;if(!(4&g))for(g=21,k&&(c=Te(c),h=0,g=ig(g,f,!0)),k=0;k<c.length;k++)c[k]=d(c[k]);l&&(c=Te(c),h=0,g=ig(g,f,!0));g!==h&&Ye(c,g);cg(e,f,b,c);return a}
function jg(a,b,c,d){a=a.F;var e=$e(a);pf(e);for(var f=e,g=0,h=0;h<c.length;h++){var k=c[h];null!=ag(a,f,k)&&(0!==g&&(f=cg(a,f,g)),g=k)}(c=g)&&c!==b&&null!=d&&(e=cg(a,e,c));cg(a,e,b,d)}
function eg(a,b,c,d){a=a.F;var e=$e(a),f=ag(a,e,c,d);b=Nf(f,b,e);b!==f&&null!=b&&cg(a,e,c,b,d);return b}
function kg(a,b,c,d){d=void 0===d?!1:d;b=eg(a,b,c,d);if(null==b)return b;a=a.F;var e=$e(a);if(!(e&2)){var f=Zf(b);f!==b&&(b=f,cg(a,e,c,b,d))}return b}
function lg(a,b,c,d){null!=d?Mf(d,b):d=void 0;return bg(a,c,d)}
function mg(a,b,c,d){var e=a.F,f=$e(e);pf(f);if(null==d)return cg(e,f,c),a;Array.isArray(d)||xf();for(var g=Xe(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&!1,p=!0,t=!0,r=0;r<d.length;r++){var v=d[r];Mf(v,b);k||(v=!!(Xe(v.F)&2),p&&(p=!v),t&&(t=v))}k||(g=Ze(g,5,!0),g=Ze(g,8,p),g=Ze(g,16,t));if(n||l&&g!==h)d=Te(d),h=0,g=ig(g,f,!0);g!==h&&Ye(d,g);cg(e,f,c,d);return a}
function ig(a,b,c){a=Ze(a,2,!!(2&b));a=Ze(a,32,!!(32&b)&&c);return a=Ze(a,2048,!1)}
function ng(a,b){a=$f(a,b);var c;null==a?c=a:Cf(a)?"number"===typeof a?c=If(a):c=Gf(a):c=void 0;return c}
function og(a){a=$f(a,1);var b=void 0===b?!1:b;b=null==a?a:Cf(a)?"string"===typeof a?Gf(a):b?Hf(a):If(a):void 0;return b}
function pg(a){a=$f(a,1);return null==a?a:Number.isFinite(a)?a|0:void 0}
function qg(a){return lf(a,!1)}
function rg(a,b,c){return bg(a,b,Lf(c))}
function sg(a,b,c){if(null!=c){if(!Number.isFinite(c))throw yf("enum");c|=0}return bg(a,b,c)}
;function tg(a,b,c){this.F=Qf(a,b,c)}
m=tg.prototype;m.toJSON=function(){if(jf)var a=ug(this,this.F,!1);else a=Vf(this.F,Wf,void 0,void 0,!1,!1),a=ug(this,a,!0);return a};
m.serialize=function(){jf=!0;try{return JSON.stringify(this.toJSON(),Rf)}finally{jf=!1}};
function vg(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Ve(b,32);return Pf(a,b)}
m.clone=function(){var a=this.F,b=$e(a);return Pf(this.constructor,Yf(a,b,!1))};
m.Ic=ef;m.toString=function(){return ug(this,this.F,!1).toString()};
function ug(a,b,c){var d=a.constructor.Ua,e=$e(c?a.F:b),f=df(e),g=!1;if(d&&kf){if(!c){b=Te(b);var h;if(b.length&&hf(h=b[b.length-1]))for(g=0;g<d.length;g++)if(d[g]>=f){Object.assign(b[b.length-1]={},h);break}g=!0}f=b;c=!c;h=$e(a.F);a=df(h);h=+!!(h&512)-1;for(var k,l,n=0;n<d.length;n++)if(l=d[n],l<a){l+=h;var p=f[l];null==p?f[l]=c?nf:af():c&&p!==nf&&We(p)}else k||(p=void 0,f.length&&hf(p=f[f.length-1])?k=p:f.push(k={})),p=k[l],null==k[l]?k[l]=c?nf:af():c&&p!==nf&&We(p)}k=b.length;if(!k)return b;var t;
if(hf(f=b[k-1])){a:{var r=f;c={};a=!1;for(var v in r){h=r[v];if(Array.isArray(h)){n=h;if(!Se&&mf(h,d,+v)||!Re&&gf(h)&&0===h.size)h=null;h!=n&&(a=!0)}null!=h?c[v]=h:a=!0}if(a){for(var y in c){r=c;break a}r=null}}r!=f&&(t=!0);k--}for(e=+!!(e&512)-1;0<k;k--){v=k-1;f=b[v];if(!(null==f||!Se&&mf(f,d,v-e)||!Re&&gf(f)&&0===f.size))break;var z=!0}if(!t&&!z)return b;var H;g?H=b:H=Array.prototype.slice.call(b,0,k);b=H;g&&(b.length=k);r&&b.push(r);return b}
;function wg(a){this.F=Qf(a)}
x(wg,tg);var xg=[1,2,3];function yg(a){this.F=Qf(a)}
x(yg,tg);var zg=[1,2,3];function Ag(a){this.F=Qf(a)}
x(Ag,tg);Ag.Ua=[1];function Bg(a){this.F=Qf(a)}
x(Bg,tg);Bg.Ua=[3,6,4];function Cg(a){this.F=Qf(a)}
x(Cg,tg);Cg.Ua=[1];function Dg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Eg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var v=e[1],y=e[2],z=e[3],H=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var L=z^v&(y^z);var I=1518500249}else L=v^y^z,I=1859775393;else 60>r?(L=v&y|z&(v|y),I=2400959708):(L=v^y^z,I=3395469782);L=((p<<5|p>>>27)&4294967295)+L+H+I+t[r]&4294967295;H=z;z=y;y=(v<<30|v>>>2)&4294967295;v=p;p=L}e[0]=e[0]+p&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+H&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],v=0,y=p.length;v<y;++v)r.push(p.charCodeAt(v));p=r}t||(t=p.length);r=0;if(0==l)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<t;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var v=24;0<=v;v-=8)p[t++]=e[r]>>v&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Vd:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function Fg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Gg(Dg(d),a,c||null)].join(" "):null}
function Gg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],eb(d,function(h){e.push(h)}),Hg(e.join(" "));
var f=[],g=[];eb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];eb(d,function(h){e.push(h)});
a=Hg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Hg(a){var b=Eg();b.update(a);return b.Vd().toLowerCase()}
;var Ig={};function Jg(a){this.h=a||{cookie:""}}
m=Jg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.Hb())return!0;this.set("TESTCOOKIESENABLED","1",{fc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.jg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.fc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Gb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{fc:0,path:b,domain:c});return d};
m.Ac=function(){return Kg(this).keys};
m.Hb=function(){return!this.h.cookie};
m.clear=function(){for(var a=Kg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Kg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Gb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Lg=new Jg("undefined"==typeof document?null:document);function Mg(a){return!!Ig.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Ng(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Mg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Jg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Mg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Og(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Jg(document)).get(b));return a?Fg(a,c,d):null}
function Pg(a,b){b=void 0===b?!1:b;var c=Dg(String(C.location.href)),d=[];if(Ng(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new Jg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Fg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Mg(b)&&((b=Og("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Og("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function Qg(a){this.F=Qf(a)}
x(Qg,tg);Qg.Ua=[2];function Rg(a){sd.call(this);this.intervalMs=a;this.enabled=!1;this.i=function(){return Xa()};
this.j=this.i()}
x(Rg,sd);Rg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Rg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.j=this.i())};
Rg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Rg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.i()-this.j,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),td(this,"tick"),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Sg(a){this.F=Qf(a)}
x(Sg,tg);function Tg(a){this.F=Qf(a)}
x(Tg,tg);function Ug(a){this.h=this.i=this.j=a}
Ug.prototype.reset=function(){this.h=this.i=this.j};
Ug.prototype.getValue=function(){return this.i};function Vg(a){this.F=Qf(a)}
x(Vg,tg);Vg.prototype.Bc=function(){return pg(this)};function Wg(a){this.F=Qf(a)}
x(Wg,tg);function Xg(a){this.F=Qf(a)}
x(Xg,tg);function Yg(a,b){mg(a,Wg,1,b)}
Xg.Ua=[1];function fg(a){this.F=Qf(a)}
x(fg,tg);var Zg=["platform","platformVersion","architecture","model","uaFullVersion"],$g=new Xg,ah=null;function bh(a,b){b=void 0===b?Zg:b;if(!ah){var c;a=null==(c=a.navigator)?void 0:c.userAgentData;if(!a||"function"!==typeof a.getHighEntropyValues)return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(d){var e=new Wg;e=rg(e,1,d.brand);return rg(e,2,d.version)});
Yg(bg($g,2,Af(a.mobile)),c);ah=a.getHighEntropyValues(b)}return ah.then(function(d){var e=$g.clone();b.includes("platform")&&rg(e,3,d.platform);b.includes("platformVersion")&&rg(e,4,d.platformVersion);b.includes("architecture")&&rg(e,5,d.architecture);b.includes("model")&&rg(e,6,d.model);b.includes("uaFullVersion")&&rg(e,7,d.uaFullVersion);return e}).catch(function(){return $g.clone()})}
;function ch(a){this.F=Qf(a)}
x(ch,tg);function dh(a){this.F=Qf(a,4)}
x(dh,tg);function eh(a){this.F=Qf(a,35)}
x(eh,tg);eh.Ua=[3,20,27];function fh(a){this.F=Qf(a,19)}
x(fh,tg);fh.prototype.Ob=function(a){return sg(this,2,a)};
fh.Ua=[3,5];function gh(a){this.F=Qf(a,7)}
x(gh,tg);var hh=function(a){return function(b){return vg(a,b)}}(gh);
gh.Ua=[5,6];function ih(a){this.F=Qf(a)}
x(ih,tg);var jh;jh=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=kg;this.defaultValue=void 0}(175237375,{Vf:0},ih);function kh(a){G.call(this);var b=this;this.componentId="";this.j=[];this.fa="";this.ha=this.X=-1;this.ba=!1;this.A=this.experimentIds=null;this.T=this.m=0;this.ta=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Gb=a.Gb||function(){};
this.i=new lh(a.logSource,a.eb);this.network=a.network;this.Mb=a.Mb||null;this.bufferSize=1E3;this.Ga=Wa(xd,0,1);this.K=a.ff||null;this.sessionIndex=a.sessionIndex||null;this.Eb=a.Eb||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.ed;this.eb=a.eb||!1;this.ea="undefined"!==typeof URLSearchParams;var c=sg(new ch,1,1);mh(this.i,c);this.l=new Ug(1E4);this.h=new Rg(this.l.getValue());a=nh(this,a.Xc);hd(this.h,"tick",a,!1,this);this.D=new Rg(6E5);hd(this.D,"tick",a,!1,this);this.Eb||
this.D.start();this.eb||(hd(document,"visibilitychange",function(){"hidden"===document.visibilityState&&b.vc()}),hd(document,"pagehide",this.vc,!1,this))}
x(kh,G);function nh(a,b){return a.ea?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
m=kh.prototype;m.S=function(){this.vc();this.h.stop();this.D.stop();G.prototype.S.call(this)};
function oh(a,b){a.l=new Ug(1>b?1:b);a.h.setInterval(a.l.getValue())}
m.log=function(a){a=a.clone();var b=this.ta++;a=bg(a,21,Ff(b));this.componentId&&rg(a,26,this.componentId);if(!og(a)){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";bg(b,1,Ff(c))}null==ng(a,15)&&bg(a,15,Ff(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=a,c=this.experimentIds.clone(),lg(b,Qg,16,c));b=this.j.length-this.bufferSize+1;0<b&&(this.j.splice(0,b),this.m+=b);this.j.push(a);this.Eb||this.h.enabled||this.h.start()};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else{var d=Date.now();if(this.ha>d&&this.X<d)b&&b("throttled");else{this.network&&("function"===typeof this.network.Bc?ph(this.i,this.network.Bc()):ph(this.i,0));var e=qh(this.i,this.j,this.m,this.T,this.Mb);d={};var f=this.Gb();f&&(d.Authorization=f);this.K||(this.K=.01>this.Ga()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");var g=this.K;this.sessionIndex&&(d["X-Goog-AuthUser"]=
this.sessionIndex,g=jc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=jc(g,"pageId",this.pageId));if(f&&this.fa===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.m=0;var h=e.serialize(),k;this.A&&this.A.isSupported(h.length)&&(k=this.A.compress(h));var l={url:g,body:h,Rd:1,Oc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(r){c.l.reset();c.h.setInterval(c.l.getValue());if(r){var v=
null;try{var y=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));v=hh(y)}catch(H){}if(v){r=Number;y="-1";y=void 0===y?"0":y;var z=og(v);r=r(null!=z?z:y);0<r&&(c.X=Date.now(),c.ha=c.X+r);v=jh.ctor?jh.i(v,jh.ctor,jh.h,!0):jh.i(v,jh.h,null,!0);if(r=null===v?void 0:v)v=-1,v=void 0===v?0:v,r=Ef($f(r,1)),v=null!=r?r:v,-1!==v&&(c.ba||oh(c,v))}}a&&a();c.T=0},p=function(r,v){var y=e.F;
var z=$e(y),H=z,L=!(2&z),I=!!(2&H),T=I?1:2;z=1===T;T=2===T;L&&(L=!I);I=ag(y,H,3);I=Array.isArray(I)?I:nf;var J=Xe(I),ha=!!(4&J);if(!ha){var M=J;0===M&&(M=ig(M,H,!1));M=Ze(M,1,!0);J=I;var Y=H,ea=!!(2&M);ea&&(Y=Ze(Y,2,!0));for(var na=!ea,oa=!0,ub=0,Pc=0;ub<J.length;ub++){var Qc=Nf(J[ub],eh,Y);if(Qc instanceof eh){if(!ea){var ee=!!(Xe(Qc.F)&2);na&&(na=!ee);oa&&(oa=ee)}J[Pc++]=Qc}}Pc<ub&&(J.length=Pc);M=Ze(M,4,!0);M=Ze(M,16,oa);M=Ze(M,8,na);Ye(J,M);ea&&Object.freeze(J);J=M}M=!!(8&J)||z&&!I.length;if(L&&
!M){gg(J)&&(I=Te(I),J=ig(J,H,!1),H=cg(y,H,3,I));L=I;for(M=0;M<L.length;M++)Y=L[M],ea=Zf(Y),Y!==ea&&(L[M]=ea);J=Ze(J,8,!0);J=Ze(J,16,!L.length);Ye(L,J)}gg(J)||(L=J,z?J=Ze(J,!I.length||16&J&&(!ha||32&J)?2:2048,!0):J=Ze(J,32,!1),J!==L&&Ye(I,J),z&&Object.freeze(I));T&&gg(J)&&(I=Te(I),J=ig(J,H,!1),Ye(I,J),cg(y,H,3,I));y=I;H=ng(e,14);z=c.l;z.h=Math.min(3E5,2*z.h);z.i=Math.min(3E5,z.h+Math.round(.2*(Math.random()-.5)*z.h));c.h.setInterval(c.l.getValue());401===r&&f&&(c.fa=f);H&&(c.m+=H);void 0===v&&(v=c.isRetryable(r));
v&&(c.j=y.concat(c.j),c.Eb||c.h.enabled||c.h.start());b&&b("net-send-failed",r);++c.T},t=function(){c.network&&c.network.send(l,n,p)};
k?k.then(function(r){l.Oc["Content-Encoding"]="gzip";l.Oc["Content-Type"]="application/binary";l.body=r;l.Rd=2;t()},function(){t()}):t()}}}};
m.vc=function(){rh(this.i,!0);this.flush();rh(this.i,!1)};
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function lh(a,b){this.eb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new fh;Number.isInteger(a)&&this.h.Ob(a);b||(this.locale=document.documentElement.getAttribute("lang"));mh(this,new ch)}
lh.prototype.Ob=function(a){this.h.Ob(a);return this};
function mh(a,b){lg(a.h,ch,1,b);pg(b)||sg(b,1,1);if(!a.eb){b=sh(a);var c=$f(b,5);(null==c||"string"===typeof c)&&c||rg(b,5,a.locale)}a.uach&&(b=sh(a),kg(b,Xg,9)||lg(b,Xg,9,a.uach))}
function ph(a,b){dg(th(a))&&(a=uh(a),sg(a,1,b))}
function rh(a,b){dg(th(a))&&(a=uh(a),bg(a,2,Af(b)))}
function th(a){return kg(a.h,ch,1)}
function vh(a,b){var c=void 0===c?Zg:c;var d=a.eb?void 0:window;d?b(d,c).then(function(e){a.uach=e;e=sh(a);lg(e,Xg,9,a.uach);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function sh(a){a=th(a);var b=kg(a,fg,11);b||(b=new fg,lg(a,fg,11,b));return b}
function uh(a){a=sh(a);var b=kg(a,Vg,10);b||(b=new Vg,bg(b,2,Af(!1)),lg(a,Vg,10,b));return b}
function qh(a,b,c,d,e){var f=0,g=0;c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(dg(th(a))){var h=uh(a);bg(h,3,Df(d))}dg(th(a))&&(d=uh(a),bg(d,4,Df(f)));dg(th(a))&&(f=uh(a),bg(f,5,Df(g)));a=a.h.clone();g=Date.now().toString();a=bg(a,4,Ff(g));b=mg(a,eh,3,b);e&&(a=new Sg,e=bg(a,13,Df(e)),a=new Tg,e=lg(a,Sg,2,e),a=new dh,e=lg(a,Tg,1,e),e=sg(e,2,9),lg(b,dh,18,e));c&&bg(b,14,Ff(c));return b}
;function wh(){}
wh.prototype.serialize=function(a){var b=[];xh(this,a,b);return b.join("")};
function xh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),xh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),yh(d,c),c.push(":"),xh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":yh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var zh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ah=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function yh(a,b){b.push('"',a.replace(Ah,function(c){var d=zh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),zh[c]=d);return d}),'"')}
;function Bh(){}
Bh.prototype.h=null;Bh.prototype.getOptions=function(){var a;(a=this.h)||(a={},Ch(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Dh;function Eh(){}
Ya(Eh,Bh);function Fh(a){return(a=Ch(a))?new ActiveXObject(a):new XMLHttpRequest}
function Ch(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Dh=new Eh;function Gh(a){sd.call(this);this.headers=new Map;this.T=a||null;this.i=!1;this.K=this.J=null;this.l=this.ea="";this.j=this.ba=this.A=this.X=!1;this.m=0;this.D=null;this.Ga="";this.ha=this.ta=!1}
Ya(Gh,sd);var Hh=/^https?$/i,Ih=["POST","PUT"],Jh=[];function Kh(a,b,c,d,e,f,g){var h=new Gh;Jh.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Td,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.ta=g);h.send(a,c,d,e)}
m=Gh.prototype;m.Td=function(){this.dispose();jb(Jh,this)};
m.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ea+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ea=a;this.l="";this.X=!1;this.i=!0;this.J=this.T?Fh(this.T):Fh(Dh);this.K=this.T?this.T.getOptions():Dh.getOptions();this.J.onreadystatechange=Va(this.qd,this);try{this.getStatus(),this.ba=!0,this.J.open(b,String(a),!0),this.ba=!1}catch(g){this.getStatus();Lh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=w(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=db(Ih,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=w(c);for(d=b.next();!d.done;d=b.next())c=w(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.Ga&&(this.J.responseType=this.Ga);"withCredentials"in this.J&&this.J.withCredentials!==this.ta&&(this.J.withCredentials=this.ta);try{Mh(this),0<this.m&&(this.ha=Nh(this.J),this.getStatus(),this.ha?(this.J.timeout=this.m,this.J.ontimeout=Va(this.Fd,
this)):this.D=he(this.Fd,this.m,this)),this.getStatus(),this.A=!0,this.J.send(a),this.A=!1}catch(g){this.getStatus(),Lh(this,g)}};
function Nh(a){return Gc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Fd=function(){"undefined"!=typeof La&&this.J&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),td(this,"timeout"),this.abort(8))};
function Lh(a,b){a.i=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.l=b;Oh(a);Ph(a)}
function Oh(a){a.X||(a.X=!0,td(a,"complete"),td(a,"error"))}
m.abort=function(){this.J&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.J.abort(),this.j=!1,td(this,"complete"),td(this,"abort"),Ph(this))};
m.S=function(){this.J&&(this.i&&(this.i=!1,this.j=!0,this.J.abort(),this.j=!1),Ph(this,!0));Gh.Aa.S.call(this)};
m.qd=function(){this.Z()||(this.ba||this.A||this.j?Qh(this):this.Ae())};
m.Ae=function(){Qh(this)};
function Qh(a){if(a.i&&"undefined"!=typeof La)if(a.K[1]&&4==Rh(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==Rh(a))he(a.qd,0,a);else if(td(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Sh(a))td(a,"complete"),td(a,"success");else{try{var b=2<Rh(a)?a.J.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";Oh(a)}}finally{Ph(a)}}}
function Ph(a,b){if(a.J){Mh(a);var c=a.J,d=a.K[0]?function(){}:null;
a.J=null;a.K=null;b||td(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Mh(a){a.J&&a.ha&&(a.J.ontimeout=null);a.D&&(C.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.J};
m.isComplete=function(){return 4==Rh(this)};
function Sh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=ac(1,String(a.ea)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Hh.test(a?a.toLowerCase():"");c=b}return c}
function Rh(a){return a.J?a.J.readyState:0}
m.getStatus=function(){try{return 2<Rh(this)?this.J.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function Th(){}
Th.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
Kh(a.url,function(d){d=d.target;if(Sh(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Oc,a.timeoutMillis,a.withCredentials)};
Th.prototype.Bc=function(){return 1};function Uh(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.j=!1;this.componentId="";this.network=new Th}
x(Uh,G);Uh.prototype.ed=function(){this.X=!0;return this};function Vh(a,b,c,d,e,f,g){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;G.call(this);this.logSource=a;this.componentId=b;f?a=f:(a=new Uh(a,"0"),a.componentId=b,uc(this,a),""!==c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),g&&(a.network=g),b=new kh({logSource:a.logSource,Gb:a.Gb?a.Gb:Pg,sessionIndex:a.sessionIndex,ff:a.i,eb:a.j,Eb:!1,ed:a.X,pageId:a.pageId,Xc:a.Xc,network:a.network?a.network:void 0}),uc(a,b),a.A&&mh(b.i,a.A),a.h&&(c=a.h,d=sh(b.i),rg(d,7,c)),a.m&&(b.A=
a.m),a.componentId&&(b.componentId=a.componentId),a.Mb&&(b.Mb=a.Mb),a.l&&((d=a.l)?(b.experimentIds||(b.experimentIds=new Qg),c=b.experimentIds,d=d.serialize(),rg(c,4,d)):b.experimentIds&&bg(b.experimentIds,4)),a.K&&(c=a.K,b.experimentIds||(b.experimentIds=new Qg),hg(b.experimentIds,2,c,qg)),a.D&&(c=a.D,b.ba=!0,oh(b,c)),vh(b.i,bh),a.T&&vh(b.i,a.T),a.network.Ob&&a.network.Ob(a.logSource),a.network.Ue&&a.network.Ue(b),a=b);this.h=a}
x(Vh,G);
Vh.prototype.flush=function(a){var b=a||[];if(b.length){a=new Cg;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new Bg;f=rg(f,1,e.j);for(var g=[],h=0;h<e.i.length;h++)g.push(e.i[h].Ba);f=hg(f,3,g,Kf);g=[];h=[];for(var k=w(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var n=e.u;for(var p=e.xc(l)||[],t=[],r=0;r<p.length;r++){var v=p[r],y=v&&v.h;v=new yg;switch(n){case 3:y=Number(y);Number.isFinite(y)&&jg(v,1,zg,Ff(y));break;case 2:y=Number(y);if(null!=
y&&"number"!==typeof y)throw Error("Value of float/double field must be a number, found "+typeof y+": "+y);jg(v,2,zg,y)}t.push(v)}n=t;for(p=0;p<n.length;p++){t=n[p];r=new Ag;t=lg(r,yg,2,t);r=l;v=[];y=[];for(var z=0;z<e.i.length;z++)y.push(e.i[z].Ca);for(z=0;z<y.length;z++){var H=y[z],L=r[z],I=new wg;switch(H){case 3:jg(I,1,xg,Lf(String(L)));break;case 2:H=Number(L);Number.isFinite(H)&&jg(I,2,xg,Df(H));break;case 1:jg(I,3,xg,Af("true"===L))}v.push(I)}mg(t,wg,1,v);g.push(t)}}mg(f,Ag,4,g);c.push(f);
e.clear()}mg(a,Bg,1,c);b=this.h;b.ea&&(a instanceof eh?b.log(a):(c=new eh,a=a.serialize(),a=rg(c,8,a),b.log(a)));this.h.flush()}};function Wh(a,b){this.h=b;this.u=void 0;this.D=new Vh(1828,"","",!1,"",void 0,new Th);this.i=new ie(this.D);this.K=new pe(this.i);this.m=new qe(this.i);this.A=new re(this.i);this.l=new ne(this.i);this.j=te(a);(new me(this.i)).h.Rb("/client_streamz/bg/fic",this.h)}
function Xh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Yh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Zh(a){function b(z,H,L){Promise.resolve().then(function(){var I;null!=(I=c.qa)&&void 0!==I.u&&I.K.record(Xh()-I.u,I.j,I.h);h.resolve({Pd:z,Xe:H,eg:L})})}
var c=this;this.h=!1;var d=a.program;var e=a.he;if(!1!==a.Ge){var f,g;this.qa=null!=(g=a.qa)?g:new Wh(e,null!=(f=a.dg)?f:"_")}var h=new Yh;this.i=h.promise;if(!C[e]){var k;null!=(k=this.qa)&&oe(k.l,k.j,k.h,1,"");var l;null!=(l=this.qa)&&l.i.mb()}else if(!C[e].a){var n;null!=(n=this.qa)&&oe(n.l,n.j,n.h,2,"");var p;null!=(p=this.qa)&&p.i.mb()}try{var t=C[e].a,r;null!=(r=this.qa)&&(r.u=Xh());this.j=w(t(d,b,!0,a.og)).next().value;this.We=h.promise.then(function(){})}catch(z){var v;
null!=(v=this.qa)&&oe(v.l,v.j,v.h,4,z.message);var y;null!=(y=this.qa)&&y.i.mb();throw z;}}
Zh.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");var c=Xh(),d;null!=(d=this.qa)&&d.m.h.Rb("/client_streamz/bg/fsc",d.j,d.h);return this.i.then(function(e){var f=e.Pd;return new Promise(function(g){f(function(h){var k;null!=(k=b.qa)&&k.A.record(Xh()-c,k.j,k.h);g(h)},[a.dd,
a.Ye,a.hf])})})};
Zh.prototype.Cd=function(a){if(this.h)throw Error("Already disposed");var b=Xh(),c;null!=(c=this.qa)&&c.m.h.Rb("/client_streamz/bg/fsc",c.j,c.h);a=this.j([a.dd,a.Ye,a.hf]);var d;null!=(d=this.qa)&&d.A.record(Xh()-b,d.j,d.h);return a};
Zh.prototype.dispose=function(){var a;null!=(a=this.qa)&&a.i.mb();this.h=!0;this.i.then(function(b){(b=b.Xe)&&b()})};
Zh.prototype.Z=function(){return this.h};var $h=window;Bb("csi.gstatic.com");Bb("googleads.g.doubleclick.net");Bb("partner.googleadservices.com");Bb("pubads.g.doubleclick.net");Bb("securepubads.g.doubleclick.net");Bb("tpc.googlesyndication.com");var ai=ia([""]),bi=ja(["\x00"],["\\0"]),ci=ja(["\n"],["\\n"]),di=ja(["\x00"],["\\u0000"]);function ei(a){return-1===a.toString().indexOf("`")}
ei(function(a){return a(ai)})||ei(function(a){return a(bi)})||ei(function(a){return a(ci)})||ei(function(a){return a(di)});function fi(a){this.re=a}
function gi(a){return new fi(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var hi=[gi("data"),gi("http"),gi("https"),gi("mailto"),gi("ftp"),new fi(function(a){return/^[^:]*([/?#]|$)/.test(a)})],ii="function"===typeof URL;
function ji(a){if(a instanceof Hb)a instanceof Hb&&a.constructor===Hb?a=a.h:(Na(a),a="type_error:SafeUrl");else{b:if(ii){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;function ki(a,b){b=ji(b);void 0!==b&&(a.href=b)}
;function li(){}
function mi(a){this.h=a}
x(mi,li);mi.prototype.toString=function(){return this.h};function ni(a){var b="true".toString(),c=[new mi(oi[0].toLowerCase(),Wb)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof mi)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function pi(){throw Error("unknown trace type");}
;var qi="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function ri(a,b){if(b instanceof Cb)a.href=Db(b).toString();else{if(-1===qi.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=ji(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function si(a){var b,c;return(a=null==(c=(b=a.document).querySelector)?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function ti(a){var b=si(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function ui(a,b){if(b instanceof Xb)b=b.td;else throw Error("");a.textContent=b;ti(a)}
function vi(a,b){a.src=Db(b);ti(a)}
;function wi(a){var b=xi;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function yi(){var a=[];wi(function(b){a.push(b)});
return a}
var xi={jf:"allow-forms",kf:"allow-modals",lf:"allow-orientation-lock",mf:"allow-pointer-lock",nf:"allow-popups",pf:"allow-popups-to-escape-sandbox",qf:"allow-presentation",rf:"allow-same-origin",sf:"allow-scripts",tf:"allow-top-navigation",uf:"allow-top-navigation-by-user-activation"},zi=cb(function(){return yi()});
function Ai(){var a=Bi(),b={};eb(zi(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Bi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Ci(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Di=(new Date).getTime();function Ei(a){sd.call(this);var b=this;this.A=this.j=0;this.Ea=null!=a?a:{na:function(e,f){return setTimeout(e,f)},
oa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(Fi(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.A||Gi(this)}
x(Ei,sd);function Hi(){var a=Ii;Ei.h||(Ei.h=new Ei(a));return Ei.h}
Ei.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Ea.oa(this.A);delete Ei.h};
Ei.prototype.wa=function(){return this.i};
function Gi(a){a.A=a.Ea.na(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.B(3):c.yield(Fi(a),3):c.yield(Fi(a),3);Gi(a);c.h=0})},3E4)}
function Fi(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Ea.na(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.K=[h.j];h.l=0;h.m=0;a.m=void 0;a.j&&(a.Ea.oa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?td(a,"networkstatus-online"):td(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Ba(h),g=!1,h.B(3)}})})}
;function Ji(){this.data=[];this.h=-1}
Ji.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Ji.prototype.get=function(a){return!!this.data[a]};
function Ki(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Li(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
Li.prototype[Symbol.iterator]=function(){return this};
Li.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Mi(a,b){return new Li(a,b)}
;function Ni(){this.blockSize=-1}
;function Oi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Ya(Oi,Ni);Oi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Pi(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Oi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(0==f)for(;d<=c;)Pi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Pi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Pi(this,e);f=0;break}}this.i=f;this.l+=b}};
Oi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.u[c]=b&255,b/=256;Pi(this,this.u);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Qi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ri(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Si(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Qi(a).match(/\S+/g)||[],b=0<=db(a,b));return b}
function Ti(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Si(a,"inverted-hdpi")&&Ri(a,Array.prototype.filter.call(a.classList?a.classList:Qi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Ui(){}
Ui.prototype.next=function(){return Vi};
var Vi={done:!0,value:void 0};function Wi(a){return{value:a,done:!1}}
Ui.prototype.Ha=function(){return this};function Xi(a){if(a instanceof Yi||a instanceof Zi||a instanceof $i)return a;if("function"==typeof a.next)return new Yi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Yi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ha)return new Yi(function(){return a.Ha()});
throw Error("Not an iterator or iterable.");}
function Yi(a){this.i=a}
Yi.prototype.Ha=function(){return new Zi(this.i())};
Yi.prototype[Symbol.iterator]=function(){return new $i(this.i())};
Yi.prototype.h=function(){return new $i(this.i())};
function Zi(a){this.i=a}
x(Zi,Ui);Zi.prototype.next=function(){return this.i.next()};
Zi.prototype[Symbol.iterator]=function(){return new $i(this.i)};
Zi.prototype.h=function(){return new $i(this.i)};
function $i(a){Yi.call(this,function(){return a});
this.j=a}
x($i,Yi);$i.prototype.next=function(){return this.j.next()};function aj(a,b){this.i={};this.h=[];this.Wa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof aj)for(c=a.Ac(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=aj.prototype;m.Ac=function(){bj(this);return this.h.concat()};
m.has=function(a){return cj(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||dj;bj(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function dj(a,b){return a===b}
m.Hb=function(){return 0==this.size};
m.clear=function(){this.i={};this.Wa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return cj(this.i,a)?(delete this.i[a],--this.size,this.Wa++,this.h.length>2*this.size&&bj(this),!0):!1};
function bj(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];cj(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],cj(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return cj(this.i,a)?this.i[a]:b};
m.set=function(a,b){cj(this.i,a)||(this.size+=1,this.h.push(a),this.Wa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Ac(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new aj(this)};
m.keys=function(){return Xi(this.Ha(!0)).h()};
m.values=function(){return Xi(this.Ha(!1)).h()};
m.entries=function(){var a=this;return Mi(this.keys(),function(b){return[b,a.get(b)]})};
m.Ha=function(a){bj(this);var b=0,c=this.Wa,d=this,e=new Ui;e.next=function(){if(c!=d.Wa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Vi;var f=d.h[b++];return Wi(a?f:d.i[f])};
return e};
function cj(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function K(a){G.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.A=!!a}
Ya(K,G);m=K.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Ab(a)}return!1};
m.Ab=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&jb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Ya=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];ej(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.Z();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Ab(c)}}return 0!=e}return!1};
function ej(a,b,c){Md(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Ab,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.S=function(){K.Aa.S.call(this);this.clear();this.j.length=0};function fj(a){this.h=a}
fj.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new wh).serialize(b))};
fj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
fj.prototype.remove=function(a){this.h.remove(a)};function gj(a){this.h=a}
Ya(gj,fj);function hj(a){this.data=a}
function ij(a){return void 0===a||a instanceof hj?a:new hj(a)}
gj.prototype.set=function(a,b){gj.Aa.set.call(this,a,ij(b))};
gj.prototype.i=function(a){a=gj.Aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
gj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function jj(a){this.h=a}
Ya(jj,gj);jj.prototype.set=function(a,b,c){if(b=ij(b)){if(c){if(c<Xa()){jj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Xa()}jj.Aa.set.call(this,a,b)};
jj.prototype.i=function(a){var b=jj.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Xa()||c&&c>Xa())jj.prototype.remove.call(this,a);else return b}};function kj(){}
;function lj(){}
Ya(lj,kj);lj.prototype[Symbol.iterator]=function(){return Xi(this.Ha(!0)).h()};
lj.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function mj(a){this.h=a;this.i=null}
Ya(mj,lj);m=mj.prototype;m.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&("QuotaExceededError"===c.name||22===c.code||1014===c.code||"NS_ERROR_DOM_QUOTA_REACHED"===c.name)&&a&&0!==a.length}else b=!1;return this.i=b};
m.set=function(a,b){nj(this);try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){nj(this);a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){nj(this);this.h.removeItem(a)};
m.Ha=function(a){nj(this);var b=0,c=this.h,d=new Ui;d.next=function(){if(b>=c.length)return Vi;var e=c.key(b++);if(a)return Wi(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Wi(e)};
return d};
m.clear=function(){nj(this);this.h.clear()};
m.key=function(a){nj(this);return this.h.key(a)};
function nj(a){if(null==a.h)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.i)?b:a.isAvailable())||Fd(Error("Storage mechanism: Storage unavailable"))}
;function oj(){var a=null;try{a=C.localStorage||null}catch(b){}mj.call(this,a)}
Ya(oj,mj);function pj(a,b){this.i=a;this.h=null;var c;if(c=Gc)c=!(9<=Number(Vc));if(c){qj||(qj=new aj);this.h=qj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),qj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Ya(pj,lj);var rj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},qj=null;function sj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return rj[b]})}
m=pj.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(sj(a),b);tj(this)};
m.get=function(a){a=this.h.getAttribute(sj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(sj(a));tj(this)};
m.Ha=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ui;d.next=function(){if(b>=c.length)return Vi;var e=c[b++];if(a)return Wi(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Wi(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);tj(this)};
function tj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function uj(a,b){this.i=a;this.h=b+"::"}
Ya(uj,lj);uj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
uj.prototype.get=function(a){return this.i.get(this.h+a)};
uj.prototype.remove=function(a){this.i.remove(this.h+a)};
uj.prototype.Ha=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ui;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Wi(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},vj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var wj={nb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},xj={nb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){return[].concat.apply([],a)}};
N.Ve=function(){vj?(N.lb=Uint8Array,N.Ja=Uint16Array,N.Ld=Int32Array,N.assign(N,wj)):(N.lb=Array,N.Ja=Array,N.Ld=Array,N.assign(N,xj))};
N.Ve();var yj=!0;try{new Uint8Array(1)}catch(a){yj=!1}
function zj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.lb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Aj={};Aj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Bj={},Cj,Dj=[],Ej=0;256>Ej;Ej++){Cj=Ej;for(var Fj=0;8>Fj;Fj++)Cj=Cj&1?3988292384^Cj>>>1:Cj>>>1;Dj[Ej]=Cj}Bj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Dj[(a^b[d])&255];return a^-1};var Gj={};Gj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Hj(a){for(var b=a.length;0<=--b;)a[b]=0}
var Ij=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Jj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Kj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Lj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Mj=Array(576);Hj(Mj);var Nj=Array(60);Hj(Nj);var Oj=Array(512);Hj(Oj);var Pj=Array(256);Hj(Pj);var Qj=Array(29);Hj(Qj);var Rj=Array(30);Hj(Rj);function Sj(a,b,c,d,e){this.Dd=a;this.be=b;this.ae=c;this.Wd=d;this.xe=e;this.ld=a&&a.length}
var Tj,Uj,Vj;function Wj(a,b){this.gd=a;this.wb=0;this.Va=b}
function Xj(a,b){a.W[a.pending++]=b&255;a.W[a.pending++]=b>>>8&255}
function Yj(a,b,c){a.ga>16-c?(a.ma|=b<<a.ga&65535,Xj(a,a.ma),a.ma=b>>16-a.ga,a.ga+=c-16):(a.ma|=b<<a.ga&65535,a.ga+=c)}
function Zj(a,b,c){Yj(a,c[2*b],c[2*b+1])}
function ak(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function bk(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=ak(d[e]++,e))}
function ck(a){var b;for(b=0;286>b;b++)a.ra[2*b]=0;for(b=0;30>b;b++)a.bb[2*b]=0;for(b=0;19>b;b++)a.ia[2*b]=0;a.ra[512]=1;a.Pa=a.zb=0;a.ya=a.matches=0}
function dk(a){8<a.ga?Xj(a,a.ma):0<a.ga&&(a.W[a.pending++]=a.ma);a.ma=0;a.ga=0}
function ek(a,b,c){dk(a);Xj(a,c);Xj(a,~c);N.nb(a.W,a.window,b,c,a.pending);a.pending+=c}
function fk(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function gk(a,b,c){for(var d=a.Y[c],e=c<<1;e<=a.Na;){e<a.Na&&fk(b,a.Y[e+1],a.Y[e],a.depth)&&e++;if(fk(b,d,a.Y[e],a.depth))break;a.Y[c]=a.Y[e];c=e;e<<=1}a.Y[c]=d}
function hk(a,b,c){var d=0;if(0!==a.ya){do{var e=a.W[a.Db+2*d]<<8|a.W[a.Db+2*d+1];var f=a.W[a.Fc+d];d++;if(0===e)Zj(a,f,b);else{var g=Pj[f];Zj(a,g+256+1,b);var h=Ij[g];0!==h&&(f-=Qj[g],Yj(a,f,h));e--;g=256>e?Oj[e]:Oj[256+(e>>>7)];Zj(a,g,c);h=Jj[g];0!==h&&(e-=Rj[g],Yj(a,e,h))}}while(d<a.ya)}Zj(a,256,b)}
function ik(a,b){var c=b.gd,d=b.Va.Dd,e=b.Va.ld,f=b.Va.Wd,g,h=-1;a.Na=0;a.rb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.Y[++a.Na]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Na;){var k=a.Y[++a.Na]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Pa--;e&&(a.zb-=d[2*k+1])}b.wb=h;for(g=a.Na>>1;1<=g;g--)gk(a,c,g);k=f;do g=a.Y[1],a.Y[1]=a.Y[a.Na--],gk(a,c,1),d=a.Y[1],a.Y[--a.rb]=g,a.Y[--a.rb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.Y[1]=k++,gk(a,c,1);while(2<=a.Na);a.Y[--a.rb]=
a.Y[1];g=b.gd;k=b.wb;d=b.Va.Dd;e=b.Va.ld;f=b.Va.be;var l=b.Va.ae,n=b.Va.xe,p,t=0;for(p=0;15>=p;p++)a.Ka[p]=0;g[2*a.Y[a.rb]+1]=0;for(b=a.rb+1;573>b;b++){var r=a.Y[b];p=g[2*g[2*r+1]+1]+1;p>n&&(p=n,t++);g[2*r+1]=p;if(!(r>k)){a.Ka[p]++;var v=0;r>=l&&(v=f[r-l]);var y=g[2*r];a.Pa+=y*(p+v);e&&(a.zb+=y*(d[2*r+1]+v))}}if(0!==t){do{for(p=n-1;0===a.Ka[p];)p--;a.Ka[p]--;a.Ka[p+1]+=2;a.Ka[n]--;t-=2}while(0<t);for(p=n;0!==p;p--)for(r=a.Ka[p];0!==r;)d=a.Y[--b],d>k||(g[2*d+1]!==p&&(a.Pa+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),r--)}bk(c,h,a.Ka)}
function jk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ia[2*l]+=g:0!==l?(l!==e&&a.ia[2*l]++,a.ia[32]++):10>=g?a.ia[34]++:a.ia[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function kk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Zj(a,l,a.ia);while(0!==--g)}else 0!==l?(l!==e&&(Zj(a,l,a.ia),g--),Zj(a,16,a.ia),Yj(a,g-3,2)):10>=g?(Zj(a,17,a.ia),Yj(a,g-3,3)):(Zj(a,18,a.ia),Yj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function lk(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ra[2*c])return 0;if(0!==a.ra[18]||0!==a.ra[20]||0!==a.ra[26])return 1;for(c=32;256>c;c++)if(0!==a.ra[2*c])return 1;return 0}
var mk=!1;function nk(a,b,c){a.W[a.Db+2*a.ya]=b>>>8&255;a.W[a.Db+2*a.ya+1]=b&255;a.W[a.Fc+a.ya]=c&255;a.ya++;0===b?a.ra[2*c]++:(a.matches++,b--,a.ra[2*(Pj[c]+256+1)]++,a.bb[2*(256>b?Oj[b]:Oj[256+(b>>>7)])]++);return a.ya===a.Jb-1}
;function ok(a,b){a.msg=Gj[b];return b}
function pk(a){for(var b=a.length;0<=--b;)a[b]=0}
function qk(a){var b=a.state,c=b.pending;c>a.P&&(c=a.P);0!==c&&(N.nb(a.output,b.W,b.Lb,c,a.xb),a.xb+=c,b.Lb+=c,a.Sc+=c,a.P-=c,b.pending-=c,0===b.pending&&(b.Lb=0))}
function rk(a,b){var c=0<=a.va?a.va:-1,d=a.o-a.va,e=0;if(0<a.level){2===a.I.uc&&(a.I.uc=lk(a));ik(a,a.ec);ik(a,a.Zb);jk(a,a.ra,a.ec.wb);jk(a,a.bb,a.Zb.wb);ik(a,a.Yc);for(e=18;3<=e&&0===a.ia[2*Lj[e]+1];e--);a.Pa+=3*(e+1)+14;var f=a.Pa+3+7>>>3;var g=a.zb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Yj(a,b?1:0,3),ek(a,c,d);else if(4===a.strategy||g===f)Yj(a,2+(b?1:0),3),hk(a,Mj,Nj);else{Yj(a,4+(b?1:0),3);c=a.ec.wb+1;d=a.Zb.wb+1;e+=1;Yj(a,c-257,5);Yj(a,d-1,5);Yj(a,e-4,4);for(f=0;f<e;f++)Yj(a,a.ia[2*
Lj[f]+1],3);kk(a,a.ra,c-1);kk(a,a.bb,d-1);hk(a,a.ra,a.bb)}ck(a);b&&dk(a);a.va=a.o;qk(a.I)}
function O(a,b){a.W[a.pending++]=b}
function sk(a,b){a.W[a.pending++]=b>>>8&255;a.W[a.pending++]=b&255}
function tk(a,b){var c=a.od,d=a.o,e=a.xa,f=a.pd,g=a.o>a.ka-262?a.o-(a.ka-262):0,h=a.window,k=a.Xa,l=a.Ia,n=a.o+258,p=h[d+e-1],t=h[d+e];a.xa>=a.kd&&(c>>=2);f>a.v&&(f=a.v);do{var r=b;if(h[r+e]===t&&h[r+e-1]===p&&h[r]===h[d]&&h[++r]===h[d+1]){d+=2;for(r++;h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&d<n;);r=258-(n-d);d=n-258;if(r>e){a.vb=b;e=r;if(r>=f)break;p=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.v?e:a.v}
function uk(a){var b=a.ka,c;do{var d=a.Jd-a.v-a.o;if(a.o>=b+(b-262)){N.nb(a.window,a.window,b,b,0);a.vb-=b;a.o-=b;a.va-=b;var e=c=a.dc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.I.la)break;e=a.I;c=a.window;f=a.o+a.v;var g=e.la;g>d&&(g=d);0===g?c=0:(e.la-=g,N.nb(c,e.input,e.hb,g,f),1===e.state.wrap?e.H=Aj(e.H,c,g,f):2===e.state.wrap&&(e.H=Bj(e.H,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.v+=c;if(3<=a.v+a.sa)for(d=a.o-a.sa,a.M=a.window[d],
a.M=(a.M<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.M=(a.M<<a.Ma^a.window[d+3-1])&a.La,a.Ia[d&a.Xa]=a.head[a.M],a.head[a.M]=d,d++,a.sa--,3>a.v+a.sa););}while(262>a.v&&0!==a.I.la)}
function vk(a,b){for(var c;;){if(262>a.v){uk(a);if(262>a.v&&0===b)return 1;if(0===a.v)break}c=0;3<=a.v&&(a.M=(a.M<<a.Ma^a.window[a.o+3-1])&a.La,c=a.Ia[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);0!==c&&a.o-c<=a.ka-262&&(a.R=tk(a,c));if(3<=a.R)if(c=nk(a,a.o-a.vb,a.R-3),a.v-=a.R,a.R<=a.Gc&&3<=a.v){a.R--;do a.o++,a.M=(a.M<<a.Ma^a.window[a.o+3-1])&a.La,a.Ia[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o;while(0!==--a.R);a.o++}else a.o+=a.R,a.R=0,a.M=a.window[a.o],a.M=(a.M<<a.Ma^a.window[a.o+1])&a.La;else c=nk(a,0,
a.window[a.o]),a.v--,a.o++;if(c&&(rk(a,!1),0===a.I.P))return 1}a.sa=2>a.o?a.o:2;return 4===b?(rk(a,!0),0===a.I.P?3:4):a.ya&&(rk(a,!1),0===a.I.P)?1:2}
function wk(a,b){for(var c,d;;){if(262>a.v){uk(a);if(262>a.v&&0===b)return 1;if(0===a.v)break}c=0;3<=a.v&&(a.M=(a.M<<a.Ma^a.window[a.o+3-1])&a.La,c=a.Ia[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);a.xa=a.R;a.sd=a.vb;a.R=2;0!==c&&a.xa<a.Gc&&a.o-c<=a.ka-262&&(a.R=tk(a,c),5>=a.R&&(1===a.strategy||3===a.R&&4096<a.o-a.vb)&&(a.R=2));if(3<=a.xa&&a.R<=a.xa){d=a.o+a.v-3;c=nk(a,a.o-1-a.sd,a.xa-3);a.v-=a.xa-1;a.xa-=2;do++a.o<=d&&(a.M=(a.M<<a.Ma^a.window[a.o+3-1])&a.La,a.Ia[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);
while(0!==--a.xa);a.fb=0;a.R=2;a.o++;if(c&&(rk(a,!1),0===a.I.P))return 1}else if(a.fb){if((c=nk(a,0,a.window[a.o-1]))&&rk(a,!1),a.o++,a.v--,0===a.I.P)return 1}else a.fb=1,a.o++,a.v--}a.fb&&(nk(a,0,a.window[a.o-1]),a.fb=0);a.sa=2>a.o?a.o:2;return 4===b?(rk(a,!0),0===a.I.P?3:4):a.ya&&(rk(a,!1),0===a.I.P)?1:2}
function xk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.v){uk(a);if(258>=a.v&&0===b)return 1;if(0===a.v)break}a.R=0;if(3<=a.v&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.R=258-(e-d);a.R>a.v&&(a.R=a.v)}3<=a.R?(c=nk(a,1,a.R-3),a.v-=a.R,a.o+=a.R,a.R=0):(c=nk(a,0,a.window[a.o]),a.v--,a.o++);if(c&&(rk(a,!1),0===a.I.P))return 1}a.sa=0;return 4===b?(rk(a,!0),0===a.I.P?3:4):
a.ya&&(rk(a,!1),0===a.I.P)?1:2}
function yk(a,b){for(var c;;){if(0===a.v&&(uk(a),0===a.v)){if(0===b)return 1;break}a.R=0;c=nk(a,0,a.window[a.o]);a.v--;a.o++;if(c&&(rk(a,!1),0===a.I.P))return 1}a.sa=0;return 4===b?(rk(a,!0),0===a.I.P?3:4):a.ya&&(rk(a,!1),0===a.I.P)?1:2}
function zk(a,b,c,d,e){this.je=a;this.we=b;this.ze=c;this.ue=d;this.de=e}
var Ak;Ak=[new zk(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.v){uk(a);if(0===a.v&&0===b)return 1;if(0===a.v)break}a.o+=a.v;a.v=0;var d=a.va+c;if(0===a.o||a.o>=d)if(a.v=a.o-d,a.o=d,rk(a,!1),0===a.I.P)return 1;if(a.o-a.va>=a.ka-262&&(rk(a,!1),0===a.I.P))return 1}a.sa=0;if(4===b)return rk(a,!0),0===a.I.P?3:4;a.o>a.va&&rk(a,!1);return 1}),
new zk(4,4,8,4,vk),new zk(4,5,16,8,vk),new zk(4,6,32,32,vk),new zk(4,4,16,16,wk),new zk(8,16,32,32,wk),new zk(8,16,128,128,wk),new zk(8,32,128,256,wk),new zk(32,128,258,1024,wk),new zk(32,258,258,4096,wk)];
function Bk(){this.I=null;this.status=0;this.W=null;this.wrap=this.pending=this.Lb=this.za=0;this.G=null;this.Da=0;this.method=8;this.tb=-1;this.Xa=this.Uc=this.ka=0;this.window=null;this.Jd=0;this.head=this.Ia=null;this.pd=this.kd=this.strategy=this.level=this.Gc=this.od=this.xa=this.v=this.vb=this.o=this.fb=this.sd=this.R=this.va=this.Ma=this.La=this.Cc=this.dc=this.M=0;this.ra=new N.Ja(1146);this.bb=new N.Ja(122);this.ia=new N.Ja(78);pk(this.ra);pk(this.bb);pk(this.ia);this.Yc=this.Zb=this.ec=
null;this.Ka=new N.Ja(16);this.Y=new N.Ja(573);pk(this.Y);this.rb=this.Na=0;this.depth=new N.Ja(573);pk(this.depth);this.ga=this.ma=this.sa=this.matches=this.zb=this.Pa=this.Db=this.ya=this.Jb=this.Fc=0}
function Ck(a,b){if(!a||!a.state||5<b||0>b)return a?ok(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.la||666===c.status&&4!==b)return ok(a,0===a.P?-5:-2);c.I=a;var d=c.tb;c.tb=b;if(42===c.status)if(2===c.wrap)a.H=0,O(c,31),O(c,139),O(c,8),c.G?(O(c,(c.G.text?1:0)+(c.G.Ra?2:0)+(c.G.extra?4:0)+(c.G.name?8:0)+(c.G.comment?16:0)),O(c,c.G.time&255),O(c,c.G.time>>8&255),O(c,c.G.time>>16&255),O(c,c.G.time>>24&255),O(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),O(c,c.G.os&255),c.G.extra&&c.G.extra.length&&
(O(c,c.G.extra.length&255),O(c,c.G.extra.length>>8&255)),c.G.Ra&&(a.H=Bj(a.H,c.W,c.pending,0)),c.Da=0,c.status=69):(O(c,0),O(c,0),O(c,0),O(c,0),O(c,0),O(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),O(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;sk(c,e+(31-e%31));0!==c.o&&(sk(c,a.H>>>16),sk(c,a.H&65535));a.H=1}if(69===c.status)if(c.G.extra){for(e=c.pending;c.Da<(c.G.extra.length&65535)&&(c.pending!==c.za||
(c.G.Ra&&c.pending>e&&(a.H=Bj(a.H,c.W,c.pending-e,e)),qk(a),e=c.pending,c.pending!==c.za));)O(c,c.G.extra[c.Da]&255),c.Da++;c.G.Ra&&c.pending>e&&(a.H=Bj(a.H,c.W,c.pending-e,e));c.Da===c.G.extra.length&&(c.Da=0,c.status=73)}else c.status=73;if(73===c.status)if(c.G.name){e=c.pending;do{if(c.pending===c.za&&(c.G.Ra&&c.pending>e&&(a.H=Bj(a.H,c.W,c.pending-e,e)),qk(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Da<c.G.name.length?c.G.name.charCodeAt(c.Da++)&255:0;O(c,f)}while(0!==f);c.G.Ra&&c.pending>
e&&(a.H=Bj(a.H,c.W,c.pending-e,e));0===f&&(c.Da=0,c.status=91)}else c.status=91;if(91===c.status)if(c.G.comment){e=c.pending;do{if(c.pending===c.za&&(c.G.Ra&&c.pending>e&&(a.H=Bj(a.H,c.W,c.pending-e,e)),qk(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Da<c.G.comment.length?c.G.comment.charCodeAt(c.Da++)&255:0;O(c,f)}while(0!==f);c.G.Ra&&c.pending>e&&(a.H=Bj(a.H,c.W,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.G.Ra?(c.pending+2>c.za&&qk(a),c.pending+2<=c.za&&(O(c,a.H&
255),O(c,a.H>>8&255),a.H=0,c.status=113)):c.status=113);if(0!==c.pending){if(qk(a),0===a.P)return c.tb=-1,0}else if(0===a.la&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return ok(a,-5);if(666===c.status&&0!==a.la)return ok(a,-5);if(0!==a.la||0!==c.v||0!==b&&666!==c.status){d=2===c.strategy?yk(c,b):3===c.strategy?xk(c,b):Ak[c.level].de(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.P&&(c.tb=-1),0;if(2===d&&(1===b?(Yj(c,2,3),Zj(c,256,Mj),16===c.ga?(Xj(c,c.ma),c.ma=0,c.ga=0):8<=c.ga&&
(c.W[c.pending++]=c.ma&255,c.ma>>=8,c.ga-=8)):5!==b&&(Yj(c,0,3),ek(c,0,0),3===b&&(pk(c.head),0===c.v&&(c.o=0,c.va=0,c.sa=0))),qk(a),0===a.P))return c.tb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(O(c,a.H&255),O(c,a.H>>8&255),O(c,a.H>>16&255),O(c,a.H>>24&255),O(c,a.kb&255),O(c,a.kb>>8&255),O(c,a.kb>>16&255),O(c,a.kb>>24&255)):(sk(c,a.H>>>16),sk(c,a.H&65535));qk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Dk={};Dk=function(){this.input=null;this.kb=this.la=this.hb=0;this.output=null;this.Sc=this.P=this.xb=0;this.msg="";this.state=null;this.uc=2;this.H=0};var Ek=Object.prototype.toString;
function Fk(a){if(!(this instanceof Fk))return new Fk(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.I=new Dk;this.I.P=0;var b=this.I;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=ok(b,-2);else{8===e&&(e=9);var k=new Bk;b.state=k;k.I=b;k.wrap=h;k.G=null;k.Uc=e;k.ka=1<<k.Uc;k.Xa=k.ka-1;k.Cc=f+7;k.dc=1<<k.Cc;k.La=k.dc-1;k.Ma=~~((k.Cc+3-1)/3);k.window=new N.lb(2*k.ka);k.head=new N.Ja(k.dc);k.Ia=new N.Ja(k.ka);k.Jb=1<<f+6;k.za=4*k.Jb;k.W=new N.lb(k.za);k.Db=1*k.Jb;k.Fc=3*k.Jb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.kb=b.Sc=0;b.uc=2;c=b.state;c.pending=0;c.Lb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.H=2===c.wrap?
0:1;c.tb=0;if(!mk){d=Array(16);for(f=g=0;28>f;f++)for(Qj[f]=g,e=0;e<1<<Ij[f];e++)Pj[g++]=f;Pj[g-1]=f;for(f=g=0;16>f;f++)for(Rj[f]=g,e=0;e<1<<Jj[f];e++)Oj[g++]=f;for(g>>=7;30>f;f++)for(Rj[f]=g<<7,e=0;e<1<<Jj[f]-7;e++)Oj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Mj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Mj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Mj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Mj[2*e+1]=8,e++,d[8]++;bk(Mj,287,d);for(e=0;30>e;e++)Nj[2*e+1]=5,Nj[2*e]=ak(e,5);Tj=new Sj(Mj,Ij,257,286,15);Uj=new Sj(Nj,
Jj,0,30,15);Vj=new Sj([],Kj,0,19,7);mk=!0}c.ec=new Wj(c.ra,Tj);c.Zb=new Wj(c.bb,Uj);c.Yc=new Wj(c.ia,Vj);c.ma=0;c.ga=0;ck(c);c=0}else c=ok(b,-2);0===c&&(b=b.state,b.Jd=2*b.ka,pk(b.head),b.Gc=Ak[b.level].we,b.kd=Ak[b.level].je,b.pd=Ak[b.level].ze,b.od=Ak[b.level].ue,b.o=0,b.va=0,b.v=0,b.sa=0,b.R=b.xa=2,b.fb=0,b.M=0);b=c}}else b=-2;if(0!==b)throw Error(Gj[b]);a.header&&(b=this.I)&&b.state&&2===b.state.wrap&&(b.state.G=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=zj(a.dictionary):
"[object ArrayBuffer]"===Ek.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.I;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.v)b=-2;else{1===b&&(a.H=Aj(a.H,f,g,0));l.wrap=0;g>=l.ka&&(0===b&&(pk(l.head),l.o=0,l.va=0,l.sa=0),c=new N.lb(l.ka),N.nb(c,f,g-l.ka,l.ka,0),f=c,g=l.ka);c=a.la;d=a.hb;e=a.input;a.la=g;a.hb=0;a.input=f;for(uk(l);3<=l.v;){f=l.o;g=l.v-2;do l.M=(l.M<<l.Ma^l.window[f+3-1])&l.La,l.Ia[f&l.Xa]=l.head[l.M],l.head[l.M]=f,f++;while(--g);
l.o=f;l.v=2;uk(l)}l.o+=l.v;l.va=l.o;l.sa=l.v;l.v=0;l.R=l.xa=2;l.fb=0;a.hb=d;a.input=e;a.la=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Gj[b]);this.Nf=!0}}
Fk.prototype.push=function(a,b){var c=this.I,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=zj(a):"[object ArrayBuffer]"===Ek.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.la=c.input.length;do{0===c.P&&(c.output=new N.lb(d),c.xb=0,c.P=d);a=Ck(c,e);if(1!==a&&0!==a)return Gk(this,a),this.ended=!0,!1;if(0===c.P||0===c.la&&(4===e||2===e))if("string"===this.options.to){var f=N.Rc(c.output,c.xb);b=f;f=f.length;if(65537>f&&(b.subarray&&yj||!b.subarray))b=
String.fromCharCode.apply(null,N.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Rc(c.output,c.xb),this.chunks.push(b)}while((0<c.la||0===c.P)&&1!==a);if(4===e)return(c=this.I)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=ok(c,-2):(c.state=null,a=113===d?ok(c,-3):0)):a=-2,Gk(this,a),this.ended=!0,0===a;2===e&&(Gk(this,0),c.P=0);return!0};
function Gk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):N.hd(a.chunks));a.chunks=[];a.err=b;a.msg=a.I.msg}
function Hk(a,b){b=b||{};b.gzip=!0;b=new Fk(b);b.push(a,!0);if(b.err)throw b.msg||Gj[b.err];return b.result}
;function Ik(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=Fb(a):b=null;return b}
;function Jk(a){return Fb(null===a?"null":void 0===a?"undefined":a)}
;function Kk(a){this.name=a}
;var Lk=new Kk("rawColdConfigGroup");var Mk=new Kk("rawHotConfigGroup");function Nk(a){this.F=Qf(a)}
x(Nk,tg);var Ok=new Kk("continuationCommand");var Pk=new Kk("webCommandMetadata");var Qk=new Kk("signalServiceEndpoint");var Rk={zf:"EMBEDDED_PLAYER_MODE_UNKNOWN",wf:"EMBEDDED_PLAYER_MODE_DEFAULT",yf:"EMBEDDED_PLAYER_MODE_PFP",xf:"EMBEDDED_PLAYER_MODE_PFL"};var Sk=new Kk("feedbackEndpoint");function Tk(a){this.F=Qf(a)}
x(Tk,tg);Tk.prototype.setTrackingParams=function(a){return bg(this,1,lf(a,!0))};var Uk=new Kk("webPlayerShareEntityServiceEndpoint");var Vk=new Kk("playlistEditEndpoint");var Wk=new Kk("modifyChannelNotificationPreferenceEndpoint");var Xk=new Kk("unsubscribeEndpoint");var Yk=new Kk("subscribeEndpoint");function Zk(){var a=$k;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function al(a){D("yt.ads.biscotti.lastId_",a)}
;function bl(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var cl=C.window,dl,el,fl=(null==cl?void 0:null==(dl=cl.yt)?void 0:dl.config_)||(null==cl?void 0:null==(el=cl.ytcfg)?void 0:el.data_)||{};D("yt.config_",fl);function gl(){bl(fl,arguments)}
function P(a,b){return a in fl?fl[a]:b}
function hl(a){var b=fl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var il=[];function jl(a){il.forEach(function(b){return b(a)})}
function kl(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ll(b)}}:a}
function ll(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),gl("ERRORS",b));jl(a)}
function ml(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=P("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),gl("ERRORS",f))}
;var nl=/^[\w.]*$/,ol={q:!0,search_query:!0};function pl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=ql(f[0]||""),h=ql(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?kb(k,h):c[g]=[k,h]}else c[g]=h}catch(t){var l=t,n=f[0],p=String(pl);l.args=[{key:n,value:f[1],query:a,method:rl===p?"unchanged":p}];ol.hasOwnProperty(n)||ml(l)}}return c}
var rl=String(pl);function sl(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];eb(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function tl(a){"?"===a.charAt(0)&&(a=a.substring(1));return pl(a,"&")}
function ul(a){return-1!==a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),tl(1<a.length?a[1]:a[0])):{}}
function vl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=tl(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ic(a,e)+d}
function wl(a){if(!b)var b=window.location.href;var c=ac(1,a),d=bc(a);c&&d?(a=a.match(Zb),b=b.match(Zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?bc(b)===d&&(Number(ac(4,b))||null)===(Number(ac(4,a))||null):!0;return a}
function ql(a){return a&&a.match(nl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function xl(a){var b=yl;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Di;e.flash="0";a:{try{var f=b.h.top.location.href}catch(oa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?$h:g;try{var h=g.history.length}catch(oa){h=0}e.u_his=h;var k;e.u_h=null==(k=$h.screen)?void 0:k.height;var l;e.u_w=null==(l=$h.screen)?void 0:l.width;var n;e.u_ah=null==(n=$h.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=$h.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=$h.screen)?void 0:t.colorDepth}catch(oa){}h=b.h;try{var r=h.screenX;var v=h.screenY}catch(oa){}try{var y=h.outerWidth;var z=h.outerHeight}catch(oa){}try{var H=h.innerWidth;var L=h.innerHeight}catch(oa){}try{var I=h.screenLeft;var T=h.screenTop}catch(oa){}try{H=h.innerWidth,L=h.innerHeight}catch(oa){}try{var J=h.screen.availWidth;var ha=h.screen.availTop}catch(oa){}r=[I,T,r,v,J,ha,y,z,H,L];try{var M=(b.h.top||window).document,Y="CSS1Compat"==
M.compatMode?M.documentElement:M.body;var ea=(new zd(Y.clientWidth,Y.clientHeight)).round()}catch(oa){ea=new zd(-12245933,-12245933)}M=ea;ea={};var na=void 0===na?C:na;Y=new Ji;"SVGElement"in na&&"createElementNS"in na.document&&Y.set(0);v=Ai();v["allow-top-navigation-by-user-activation"]&&Y.set(1);v["allow-popups-to-escape-sandbox"]&&Y.set(2);na.crypto&&na.crypto.subtle&&Y.set(3);"TextDecoder"in na&&"TextEncoder"in na&&Y.set(4);na=Ki(Y);ea.bc=na;ea.bih=M.height;ea.biw=M.width;ea.brdim=r.join();b=
b.i;b=(ea.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ea.wgl=!!$h.WebGLRenderingContext,ea);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var yl=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return sl(xl(a))});Xa();navigator.userAgent.indexOf(" (CrKey ");function R(a){a=zl(a);return"string"===typeof a&&"false"===a?!1:!!a}
function S(a,b){a=zl(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function zl(a){return P("EXPERIMENT_FLAGS",{})[a]}
function Al(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var Bl="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Cl(){if(!Bl)return null;var a=Bl();return"open"in a?a:null}
function Dl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function El(a,b){"function"===typeof a&&(a=kl(a));return window.setTimeout(a,b)}
;var Fl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(la(Fl),["client_dev_set_cookie"]);var Gl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Hl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(la(Fl)),Il=!1;
function Jl(a,b){b=void 0===b?{}:b;var c=wl(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in Gl){var f=P(Gl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=P("VISITOR_DATA"));!f||!c&&bc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===P("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&P("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!bc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());
if(c||!bc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&bc(a)||(b["X-YouTube-Ad-Signals"]=sl(xl()));return b}
function Kl(a){var b=window.location.search,c=bc(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&wl(a)&&(c=document.location.hostname);var d=$b(ac(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=tl(b),f={};eb(Hl,function(g){e[g]&&(f[g]=e[g])});
return vl(a,f||{},!1)}
function Ll(a,b){var c=b.format||"JSON";a=Ml(a,b);var d=Nl(a,b),e=!1,f=Ol(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Dl(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=Pl(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=El(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Ml(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=vl(a,b||{},!0);return a}
function Nl(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||bc(a)&&!b.withCredentials&&bc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=tl(e),wb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):hc(e));f=e||f&&!ob(f);!Il&&f&&"POST"!=b.method&&(Il=!0,ll(Error("AJAX request with postData should use POST")));return e}
function Pl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,ml(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ql(a):null)e={},eb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Rl(g)})}d&&Sl(e);
return e}
function Sl(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=yb();d=e?e.createHTML(d):d;a[c]=new Vb(d)}else Sl(a[b])}}
function Ql(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Rl(a){var b="";eb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Tl(a,b){b.method="POST";b.postParams||(b.postParams={});return Ll(a,b)}
function Ol(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&kl(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=Cl();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;R("debug_forward_web_query_parameters")&&(a=Kl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Jl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Ul=[{Hc:function(a){return"Cannot read property '"+a.key+"'"},
hc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Hc:function(a){return"Cannot call '"+a.key+"'"},
hc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Hc:function(a){return a.key+" is not defined"},
hc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Wl={Ta:[],Qa:[{callback:Vl,weight:500}]};function Vl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Xl(){this.Qa=[];this.Ta=[]}
var Yl;function Zl(){if(!Yl){var a=Yl=new Xl;a.Ta.length=0;a.Qa.length=0;Wl.Ta&&a.Ta.push.apply(a.Ta,Wl.Ta);Wl.Qa&&a.Qa.push.apply(a.Qa,Wl.Qa)}return Yl}
;var $l=new K;function am(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=bm(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=bm(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=bm(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function bm(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function cm(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=dm(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=am(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?dm(f+".ve",g,h,k):0;d+=f;d+=dm(e,a[e],b,c);if(500<d)break}}else c[b]=em(a),d+=c[b].length;else c[b]=em(a),d+=c[b].length;return d}
function dm(a,b,c,d){c+="."+a;a=em(b);d[c]=a;return c.length+a.length}
function em(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function fm(){this.Ze=!0}
function gm(){fm.h||(fm.h=new fm);return fm.h}
function hm(a,b){a={};var c=Pg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in fl||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in fl&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return a}
;var im={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function jm(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function km(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function lm(a,b,c,d,e){Lg.set(""+a,b,{fc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function mm(a){return Lg.get(""+a,void 0)}
function nm(a,b,c){Lg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function om(){if(!Lg.isEnabled())return!1;if(!Lg.Hb())return!0;Lg.set("TESTCOOKIESENABLED","1",{fc:60});if("1"!==Lg.get("TESTCOOKIESENABLED"))return!1;Lg.remove("TESTCOOKIESENABLED");return!0}
;var pm=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",pm);function qm(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=mm(this.h);a&&this.parse(a)}
var rm;function sm(){rm||(rm=new qm);return rm}
m=qm.prototype;m.get=function(a,b){tm(a);um(a);a=void 0!==pm[a]?pm[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){tm(a);um(a);if(null==b)throw Error("ExpectedNotNull");pm[a]=b.toString()};
function wm(a){return!!((xm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){tm(a);um(a);delete pm[a]};
m.clear=function(){for(var a in pm)delete pm[a]};
function um(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function tm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function xm(a){a=void 0!==pm[a]?pm[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(pm[d]=c.toString())}};var ym={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},zm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Am(){var a=C.navigator;return a?a.connection:void 0}
function Bm(){var a=Am();if(a){var b=ym[a.type||"unknown"]||"CONN_UNKNOWN";a=ym[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Cm(){var a=Am();if(null!=a&&a.effectiveType)return zm.hasOwnProperty(a.effectiveType)?zm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(la(b))}
x(U,Error);function Dm(){try{return Em(),!0}catch(a){return!1}}
function Em(a){if(void 0!==P("DATASYNC_ID"))return P("DATASYNC_ID");throw new U("Datasync ID not set",void 0===a?"unknown":a);}
;function Fm(){}
function Gm(a,b){return Ii.ab(a,0,b)}
Fm.prototype.na=function(a,b){return this.ab(a,1,b)};
Fm.prototype.Bb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Hm=S("web_emulated_idle_callback_delay",300),Im=1E3/60-3,Jm=[8,5,4,3,2,1,0];
function Km(a){a=void 0===a?{}:a;G.call(this);this.i=[];this.j={};this.ba=this.h=0;this.X=this.m=!1;this.K=[];this.T=this.ea=!1;for(var b=w(Jm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.qc=a.timeout||1;this.D=Im;this.A=0;this.ha=this.Be.bind(this);this.pc=this.cf.bind(this);this.Ga=this.Od.bind(this);this.Za=this.ke.bind(this);this.Sb=this.Ee.bind(this);this.ta=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!R("disable_scheduler_requestIdleCallback");(this.fa=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ha)}
x(Km,G);m=Km.prototype;m.Bb=function(a){var b=Xa();Lm(this,a);a=Xa()-b;this.m||(this.D-=a)};
m.ab=function(a,b,c){++this.ba;if(10===b)return this.Bb(a),this.ba;var d=this.ba;this.j[d]=a;this.m&&!c?this.K.push({id:d,priority:b}):(this.i[b].push(d),this.X||this.m||(0!==this.h&&Mm(this)!==this.A&&this.stop(),this.start()));return d};
m.oa=function(a){delete this.j[a]};
function Nm(a){a.K.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function Om(a){return!a.isHidden()&&a.fa}
function Mm(a){if(a.i[8].length){if(a.T)return 4;if(Om(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?Om(a)?3:2:1;return 0}
m.Kb=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Lm(a,b){try{b()}catch(c){a.Kb(c)}}
function Pm(a){for(var b=w(Jm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.ke=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ea=!0;Qm(this,b);this.ea=!1};
m.cf=function(){Qm(this)};
m.Od=function(){Rm(this)};
m.Ee=function(a){this.T=!0;var b=Mm(this);4===b&&b!==this.A&&(this.stop(),this.start());Qm(this,void 0,a);this.T=!1};
m.Be=function(){this.isHidden()||Rm(this);this.h&&(this.stop(),this.start())};
function Rm(a){a.stop();a.m=!0;for(var b=Xa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Lm(a,e)}Sm(a);a.m=!1;Pm(a)&&a.start();b=Xa()-b;a.D-=b}
function Sm(a){for(var b=0,c=a.K.length;b<c;b++){var d=a.K[b];a.i[d.priority].push(d.id)}a.K.length=0}
function Qm(a,b,c){a.T&&4===a.A&&a.h||a.stop();a.m=!0;b=Xa()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Kb(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Lm(a,f);d=a.ea?0:1;d=a.l>d?a.l:d;if(!(Xa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Lm(a,c)}while(c&&Xa()<b)}a.m=!1;Sm(a);a.D=Im;Pm(a)&&a.start()}
m.start=function(){this.X=!1;if(0===this.h)switch(this.A=Mm(this),this.A){case 1:var a=this.Za;this.h=this.ta?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Hm);break;case 2:this.h=window.setTimeout(this.pc,this.qc);break;case 3:this.h=window.requestAnimationFrame(this.Sb);break;case 4:this.h=window.setTimeout(this.Ga,0)}};
m.pause=function(){this.stop();this.X=!0};
m.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.ta?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.S=function(){Nm(this);this.stop();this.fa&&document.removeEventListener("visibilitychange",this.ha);G.prototype.S.call(this)};var Tm=E("yt.scheduler.instance.timerIdMap_")||{},Um=S("kevlar_tuner_scheduler_soft_state_timer_ms",800),Vm=0,Wm=0;function Xm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Z())a=new Km(P("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Ym(){Zm();var a=E("ytglobal.schedulerInstanceInstance_");a&&(sc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Zm(){Nm(Xm());for(var a in Tm)Tm.hasOwnProperty(a)&&delete Tm[Number(a)]}
function $m(a,b,c){if(!c)return c=void 0===c,-Xm().ab(a,b,c);var d=window.setTimeout(function(){var e=Xm().ab(a,b);Tm[d]=e},c);
return d}
function an(a){Xm().Bb(a)}
function bn(a){var b=Xm();if(0>a)b.oa(-a);else{var c=Tm[a];c?(b.oa(c),delete Tm[a]):window.clearTimeout(a)}}
function cn(){dn()}
function dn(){window.clearTimeout(Vm);Xm().start()}
function en(){Xm().pause();window.clearTimeout(Vm);Vm=window.setTimeout(cn,Um)}
function fn(){window.clearTimeout(Wm);Wm=window.setTimeout(function(){gn(0)},Um)}
function gn(a){fn();var b=Xm();b.l=a;b.start()}
function hn(a){fn();var b=Xm();b.l>a&&(b.l=a,b.start())}
function jn(){window.clearTimeout(Wm);var a=Xm();a.l=0;a.start()}
function kn(){E("yt.scheduler.initialized")||(D("yt.scheduler.instance.dispose",Ym),D("yt.scheduler.instance.addJob",$m),D("yt.scheduler.instance.addImmediateJob",an),D("yt.scheduler.instance.cancelJob",bn),D("yt.scheduler.instance.cancelAllJobs",Zm),D("yt.scheduler.instance.start",dn),D("yt.scheduler.instance.pause",en),D("yt.scheduler.instance.setPriorityThreshold",gn),D("yt.scheduler.instance.enablePriorityThreshold",hn),D("yt.scheduler.instance.clearPriorityThreshold",jn),D("yt.scheduler.initialized",
!0))}
;function ln(){Fm.apply(this,arguments)}
x(ln,Fm);function mn(){ln.h||(ln.h=new ln);return ln.h}
ln.prototype.ab=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):El(a,c||0)};
ln.prototype.oa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
ln.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
ln.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Ii=mn();R("web_scheduler_auto_init")&&kn();function nn(a){var b=new oj;(b=b.isAvailable()?a?new uj(b,a):b:null)||(a=new pj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new jj(a):null;this.i=document.domain||window.location.hostname}
nn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new wh).serialize(b))}catch(f){return}else e=escape(b);lm(a,e,c,this.i)};
nn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=mm(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
nn.prototype.remove=function(a){this.h&&this.h.remove(a);nm(a,"/",this.i)};var on=function(){var a;return function(){a||(a=new nn("ytidb"));return a}}();
function pn(){var a;return null==(a=on())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var qn=[],rn,sn=!1;function tn(){var a={};for(rn=new un(void 0===a.handleError?vn:a.handleError,void 0===a.logEvent?wn:a.logEvent);0<qn.length;)switch(a=qn.shift(),a.type){case "ERROR":rn.Kb(a.payload);break;case "EVENT":rn.logEvent(a.eventType,a.payload)}}
function xn(a){sn||(rn?rn.Kb(a):(qn.push({type:"ERROR",payload:a}),10<qn.length&&qn.shift()))}
function yn(a,b){sn||(rn?rn.logEvent(a,b):(qn.push({type:"EVENT",eventType:a,payload:b}),10<qn.length&&qn.shift()))}
;function zn(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function An(a){return a.substr(0,a.indexOf(":"))||a}
;var Bn=we||xe;function Cn(a){var b=Mb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Dn={},En=(Dn.AUTH_INVALID="No user identifier specified.",Dn.EXPLICIT_ABORT="Transaction was explicitly aborted.",Dn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Dn.MISSING_INDEX="Index not created.",Dn.MISSING_OBJECT_STORES="Object stores not created.",Dn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Dn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Dn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Dn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Dn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Dn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Dn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Dn),Fn={},Gn=(Fn.AUTH_INVALID="ERROR",Fn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Fn.EXPLICIT_ABORT="IGNORED",Fn.IDB_NOT_SUPPORTED="ERROR",Fn.MISSING_INDEX=
"WARNING",Fn.MISSING_OBJECT_STORES="ERROR",Fn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Fn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Fn.QUOTA_EXCEEDED="WARNING",Fn.QUOTA_MAYBE_EXCEEDED="WARNING",Fn.UNKNOWN_ABORT="WARNING",Fn.INCOMPATIBLE_DB_VERSION="WARNING",Fn),Hn={},In=(Hn.AUTH_INVALID=!1,Hn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Hn.EXPLICIT_ABORT=!1,Hn.IDB_NOT_SUPPORTED=!1,Hn.MISSING_INDEX=!1,Hn.MISSING_OBJECT_STORES=!1,Hn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Hn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Hn.QUOTA_EXCEEDED=!1,Hn.QUOTA_MAYBE_EXCEEDED=!0,Hn.UNKNOWN_ABORT=!0,Hn.INCOMPATIBLE_DB_VERSION=!1,Hn);function Jn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?En[a]:c;d=void 0===d?Gn[a]:d;e=void 0===e?In[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Jn.prototype)}
x(Jn,U);function Kn(a,b){Jn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},En.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Kn.prototype)}
x(Kn,Jn);function Ln(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Ln.prototype)}
x(Ln,Error);var Mn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Nn(a,b,c,d){b=An(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Jn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Jn("QUOTA_EXCEEDED",a);if(ye&&"UnknownError"===e.name)return new Jn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Ln)return new Jn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Mn.some(function(f){return e.message.includes(f)}))return new Jn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Jn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",rd:e.name})];e.level="WARNING";return e}
function On(a,b,c){var d=pn();return new Jn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Pn(a){if(!a)throw Error();throw a;}
function Qn(a){return a}
function Rn(a){this.h=a}
function Sn(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Sn.all=function(a){return new Sn(new Rn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={sb:0};f.sb<a.length;f={sb:f.sb},++f.sb)Sn.resolve(a[f.sb]).then(function(g){return function(h){d[g.sb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Sn.resolve=function(a){return new Sn(new Rn(function(b,c){a instanceof Sn?a.then(b,c):b(a)}))};
Sn.reject=function(a){return new Sn(new Rn(function(b,c){c(a)}))};
Sn.prototype.then=function(a,b){var c=this,d=null!=a?a:Qn,e=null!=b?b:Pn;return new Sn(new Rn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Tn(c,c,d,f,g)}),c.i.push(function(){Un(c,c,e,f,g)})):"FULFILLED"===c.state.status?Tn(c,c,d,f,g):"REJECTED"===c.state.status&&Un(c,c,e,f,g)}))};
Sn.prototype.catch=function(a){return this.then(void 0,a)};
function Tn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Sn?Vn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Un(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Sn?Vn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Vn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Sn?Vn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Wn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Xn(a){return new Promise(function(b,c){Wn(a,b,c)})}
function Yn(a){return new Sn(new Rn(function(b,c){Wn(a,b,c)}))}
;function Zn(a,b){return new Sn(new Rn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var $n=window,V=$n.ytcsi&&$n.ytcsi.now?$n.ytcsi.now:$n.performance&&$n.performance.timing&&$n.performance.now&&$n.performance.timing.navigationStart?function(){return $n.performance.timing.navigationStart+$n.performance.now()}:function(){return(new Date).getTime()};function ao(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}
m=ao.prototype;m.add=function(a,b,c){return bo(this,[a],{mode:"readwrite",ja:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return bo(this,[a],{mode:"readwrite",ja:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return bo(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).count(b)})};
function co(a,b,c){a=a.h.createObjectStore(b,c);return new eo(a)}
m.delete=function(a,b){return bo(this,[a],{mode:"readwrite",ja:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return bo(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).get(b)})};
function fo(a,b,c){return bo(a,[b],{mode:"readwrite",ja:!0},function(d){d=d.objectStore(b);return Yn(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function bo(a,b,c,d){var e,f,g,h,k,l,n,p,t,r,v,y;return A(function(z){switch(z.h){case 1:var H={mode:"readonly",ja:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ja?3:1;g=0;case 2:if(h){z.B(4);break}g++;k=Math.round(V());Aa(z,5);l=a.h.transaction(b,e.mode);H=z.yield;var L=new go(l);L=ho(L,d);return H.call(z,L,7);case 7:return n=z.i,p=Math.round(V()),io(a,k,p,g,void 0,b.join(),e),z.return(n);case 5:t=Ba(z);r=Math.round(V());v=Nn(t,
a.h.name,b.join(),a.h.version);if((y=v instanceof Jn&&!v.h)||g>=f)io(a,k,r,g,v,b.join(),e),h=v;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function io(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Jn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&yn("QUOTA_EXCEEDED",{dbName:An(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Jn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),yn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),jo(a,!1,d,f,b,g.tag),xn(e)):jo(a,!0,d,f,b,g.tag)}
function jo(a,b,c,d,e,f){yn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function eo(a){this.h=a}
m=eo.prototype;m.add=function(a,b){return Yn(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Yn(this.h.clear()).then(function(){})};
function ko(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Yn(this.h.count(a))};
function lo(a,b){return mo(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?lo(this,a):Yn(this.h.delete(a))};
m.get=function(a){return Yn(this.h.get(a))};
m.index=function(a){try{return new no(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Ln(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function mo(a,b,c){a=a.h.openCursor(b.query,b.direction);return oo(a).then(function(d){return Zn(d,c)})}
function go(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Jn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function ho(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
go.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Jn("EXPLICIT_ABORT");};
go.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new eo(a),this.i.set(a,b));return b};
function no(a){this.h=a}
m=no.prototype;m.count=function(a){return Yn(this.h.count(a))};
m.delete=function(a){return po(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Yn(this.h.get(a))};
m.getKey=function(a){return Yn(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function po(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return oo(a).then(function(d){return Zn(d,c)})}
function qo(a,b){this.request=a;this.cursor=b}
function oo(a){return Yn(a).then(function(b){return b?new qo(a,b):null})}
m=qo.prototype;m.advance=function(a){this.cursor.advance(a);return oo(this.request)};
m.continue=function(a){this.cursor.continue(a);return oo(this.request)};
m.delete=function(){return Yn(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Yn(this.cursor.update(a))};function ro(a,b,c){return new Promise(function(d,e){function f(){t||(t=new ao(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Qd,k=c.blocking,l=c.af,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&yn("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:An(a)});var v=f(),y=new go(g.transaction);
n&&n(v,function(z){return r.oldVersion<z&&r.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){yn("IDB_UNEXPECTEDLY_CLOSED",{dbName:An(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function so(a,b,c){c=void 0===c?{}:c;return ro(a,b,c)}
function to(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Qd)&&c.addEventListener("blocked",function(){e()}),g.yield(Xn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Ba(g),Nn(f,a,"",-1);})}
;function uo(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.l=0}
uo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return so(a,b,c)};
uo.prototype.delete=function(a){a=void 0===a?{}:a;return to(this.name,a)};
function vo(a,b){return new Jn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function wo(a,b){if(!b)throw On("openWithToken",An(a.name));return a.open()}
uo.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,r,v;return A(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",Aa(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=y.i,H=c.options,L=[],I=w(Object.keys(H.yb)),T=I.next();!T.done;T=I.next()){T=T.value;var J=H.yb[T],ha=void 0===J.He?Number.MAX_VALUE:J.He;!(z.h.version>=J.Cb)||z.h.version>=ha||z.h.objectStoreNames.contains(T)||L.push(T)}k=L;if(0===k.length){y.B(5);break}l=Object.keys(c.options.yb);n=h.objectStoreNames();
if(c.u<S("ytidb_reopen_db_retries",0))return c.u++,h.close(),xn(new Jn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<S("ytidb_remake_db_retries",1))){y.B(6);break}c.l++;return y.yield(c.delete(),7);case 7:return xn(new Jn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new Kn(n,l);case 5:return y.return(h);case 2:p=Ba(y);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){y.B(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;r=t.h.version;if(void 0!==c.options.version&&r>c.options.version+1)throw t.close(),c.j=!1,vo(c,r);return y.return(t);case 8:throw b(),p instanceof Error&&!R("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Nn(p,c.name,"",null!=(v=c.options.version)?v:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw vo(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,af:b,upgrade:this.options.upgrade};return this.h=d=a()};var xo=new uo("YtIdbMeta",{yb:{databases:{Cb:1}},upgrade:function(a,b){b(1)&&co(a,"databases",{keyPath:"actualName"})}});
function yo(a,b){var c;return A(function(d){if(1==d.h)return d.yield(wo(xo,b),2);c=d.i;return d.return(bo(c,["databases"],{ja:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Yn(f.h.put(a,void 0)).then(function(){})})}))})}
function zo(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(wo(xo,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Ao(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(wo(xo,b),2)):3!=e.h?(d=e.i,e.yield(bo(d,["databases"],{ja:!0,mode:"readonly"},function(f){c.length=0;return mo(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Bo(a){return Ao(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Co(a,b,c){return Ao(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Do(a){var b,c;return A(function(d){if(1==d.h)return b=Em("YtIdbMeta hasAnyMeta other"),d.yield(Ao(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Eo,Fo=new function(){}(new function(){});
function Go(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=pn();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Bn)f=/WebKit\/([0-9]+)/.exec(Mb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Mb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Hc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(yo(d,Fo),4);case 4:return e.yield(zo("yt-idb-test-do-not-use",Fo),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Ho(){if(void 0!==Eo)return Eo;sn=!0;return Eo=Go().then(function(a){sn=!1;var b;if(null!=(b=on())&&b.h){var c;b={hasSucceededOnce:(null==(c=pn())?void 0:c.hasSucceededOnce)||a};var d;null==(d=on())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Io(){return E("ytglobal.idbToken_")||void 0}
function Jo(){var a=Io();return a?Promise.resolve(a):Ho().then(function(b){(b=b?Fo:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Ko=0;function Lo(a,b){Ko||(Ko=Ii.na(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Jo(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(Co(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.B(6);break}f=e[0];return h.yield(to(f.actualName),7);case 7:return h.yield(zo(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Ba(h),xn(g),d=!1;case 4:Ii.oa(Ko),Ko=0,d&&Lo(a,b),h.h=0}})}))}
function Mo(){var a;return A(function(b){return 1==b.h?b.yield(Jo(),2):(a=b.i)?b.return(Do(a)):b.return(!1)})}
new Yh;function No(a){if(!Dm())throw a=new Jn("AUTH_INVALID",{dbName:a}),xn(a),a;var b=Em();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Oo(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Jo(),2);case 2:g=n.i;if(!g)throw h=On("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),xn(h),h;zn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:No(a);Aa(n,3);return n.yield(yo(k,g),5);case 5:return n.yield(so(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Ba(n),Aa(n,7),n.yield(zo(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Ba(n);case 8:throw l;}})}
function Po(a,b,c){c=void 0===c?{}:c;return Oo(a,b,!1,c)}
function Qo(a,b,c){c=void 0===c?{}:c;return Oo(a,b,!0,c)}
function Ro(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(Jo(),2);if(3!=e.h){c=e.i;if(!c)return e.return();zn(a);d=No(a);return e.yield(to(d.actualName,b),3)}return e.yield(zo(d.actualName,c),0)})}
function So(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(to(d.actualName,b),2):e.yield(zo(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function To(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(Jo(),2);if(3!=d.h){b=d.i;if(!b)return d.return();zn("LogsDatabaseV2");return d.yield(Bo(b),3)}c=d.i;return d.yield(So(c,a,b),0)})}
function Uo(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(Jo(),2);if(3!=d.h){c=d.i;if(!c)return d.return();zn(a);return d.yield(to(a,b),3)}return d.yield(zo(a,c),0)})}
;function Vo(a,b){uo.call(this,a,b);this.options=b;zn(a)}
x(Vo,uo);function Wo(a,b){var c;return function(){c||(c=new Vo(a,b));return c}}
Vo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.nc?Qo:Po)(a,b,Object.assign({},c))};
Vo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.nc?Uo:Ro)(this.name,a)};
function Xo(a,b){return Wo(a,b)}
;var Yo={},Zo=Xo("ytGcfConfig",{yb:(Yo.coldConfigStore={Cb:1},Yo.hotConfigStore={Cb:1},Yo),nc:!1,upgrade:function(a,b){b(1)&&(ko(co(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),ko(co(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function $o(a){return wo(Zo(),a)}
function ap(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:V()},g.yield($o(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(fo(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function bp(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},h.yield($o(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(fo(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function cp(a){var b,c;return A(function(d){return 1==d.h?d.yield($o(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(bo(b,["coldConfigStore"],{mode:"readwrite",ja:!0},function(e){return po(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function dp(a){var b,c;return A(function(d){return 1==d.h?d.yield($o(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(bo(b,["hotConfigStore"],{mode:"readwrite",ja:!0},function(e){return po(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function ep(){G.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(la(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
x(ep,G);ep.prototype.S=function(){for(var a=w(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;G.prototype.S.call(this)};function fp(){this.h=0;this.i=new ep}
function gp(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:P("RAW_HOT_CONFIG_GROUP")}
function hp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!R("start_client_gcf")){g.B(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=Io();if(!d){g.B(3);break}if(c){g.B(4);break}return g.yield(dp(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(ap(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function ip(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!R("start_client_gcf"))return h.B(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Io())?c?h.B(4):h.yield(cp(d),5):h.B(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return h.yield(bp(c,b,g,d),0)})}
function jp(){if(!fp.h){var a=new fp;fp.h=a}a=fp.h;var b=V()-a.h;if(!(0!==a.h&&b<S("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=V());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
fp.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function kp(){return"INNERTUBE_API_KEY"in fl&&"INNERTUBE_API_VERSION"in fl}
function lp(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),le:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),md:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Uf:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),ne:P("INNERTUBE_CONTEXT_HL"),me:P("INNERTUBE_CONTEXT_GL"),oe:P("INNERTUBE_HOST_OVERRIDE")||"",qe:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),pe:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function mp(a){var b={client:{hl:a.ne,gl:a.me,clientName:a.md,clientVersion:a.innertubeContextClientVersion,configInfo:a.le}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Al();0<c.length&&(b.request={internalExperimentFlags:c});c=a.md;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=km()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(R("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Bm())&&b&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&(a=Cm())&&
b&&(b.client.effectiveConnectionType=a);R("start_client_gcf")&&(e=jp())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=w(Object.entries(tl(P("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function np(a,b,c){c=void 0===c?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||P("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Of:(a=hm(gm()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var op="undefined"!==typeof TextEncoder?new TextEncoder:null,pp=op?function(a){return op.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function qp(a,b){this.version=a;this.args=b}
qp.prototype.serialize=function(){return{version:this.version,args:this.args}};function rp(a,b){this.topic=a;this.h=b}
rp.prototype.toString=function(){return this.topic};var sp=E("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Ab;K.prototype.publish=K.prototype.Ya;K.prototype.clear=K.prototype.clear;D("ytPubsub2Pubsub2Instance",sp);var tp=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",tp);var up=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",up);var vp=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",vp);
D("ytPubsub2Pubsub2SkipSubKey",null);function wp(a,b){var c=xp();c&&c.publish.call(c,a.toString(),a,b)}
function yp(a){var b=zp,c=xp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(tp[d])try{if(f&&b instanceof rp&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Wa){var l=new h;h.Wa=l.version}var n=h.Wa}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var t=k.args,r=t.length;if(0<r){var v=Array(r);for(k=0;k<r;k++)v[k]=t[k];var y=v}else y=[];f=p.call(n,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){ll(z)}},vp[b.toString()]?E("yt.scheduler.instance")?Ii.na(g):El(g,0):g())});
tp[d]=!0;up[b.toString()]||(up[b.toString()]=[]);up[b.toString()].push(d);return d}
function Ap(){var a=Bp,b=yp(function(c){a.apply(void 0,arguments);Cp(b)});
return b}
function Cp(a){var b=xp();b&&("number"===typeof a&&(a=[a]),eb(a,function(c){b.unsubscribeByKey(c);delete tp[c]}))}
function xp(){return E("ytPubsub2Pubsub2Instance")}
;function Dp(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&wp("meta_logging_csi_event",{timerName:a,ng:b})}
;var Ep=void 0,Fp=void 0;function Gp(){Fp||(Fp=Ik(P("WORKER_SERIALIZATION_URL")));return Fp||void 0}
function Hp(){var a=Gp();Ep||void 0===a||(Ep=new Worker(Db(a),void 0));return Ep}
;var Ip=S("max_body_size_to_compress",5E5),Jp=S("min_body_size_to_compress",500),Kp=!0,Lp=0,Mp=0,Np=S("compression_performance_threshold_lr",250),Op=S("slow_compressions_before_abandon_count",4),Pp=!1,Qp=new Map,Rp=1,Sp=!0;function Tp(){if("function"===typeof Worker&&Gp()&&!Pp){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Qp.get(c.key);d&&(Up(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Qp.delete(c.key))}},b=Hp();
b&&(b.addEventListener("message",a),b.onerror=function(){Qp.clear()},Pp=!0)}}
function Vp(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:V(),ticks:{},infos:{}};if(Kp)try{var g=Wp(b);if(null!=g&&(g>Ip||g<Jp))d(a,c);else{if(R("gzip_gel_with_worker")&&(R("initial_gzip_use_main_thread")&&!Sp||!R("initial_gzip_use_main_thread"))){Pp||Tp();var h=Hp();if(h&&!e){Qp.set(Rp,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Rp});Rp++;return}}var k=Hk(pp(b));Up(k,f,a,c,d)}}catch(l){ml(l),d(a,c)}else d(a,c)}
function Up(a,b,c,d,e){Sp=!1;var f=V();b.ticks.gelc=f;Mp++;R("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Np&&(Lp++,R("abandon_compression_after_N_slow_zips")?Mp===S("compression_disable_point")&&Lp>Op&&(Kp=!1):Kp=!1);Xp(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Yp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=V(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Kp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Wp(g);if(null!=h&&(h>Ip||h<Jp))return a;c=b?{level:1}:void 0;f=Hk(pp(g),c);var k=V();e.ticks.gelc=k;if(b){Mp++;if((R("disable_compression_due_to_performance_degredation")||R("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Np)if(Lp++,R("abandon_compression_after_N_slow_zips")||R("abandon_compression_after_N_slow_zips_lr")){b=Lp/Mp;var l=Op/S("compression_disable_point");0<Mp&&0===Mp%S("compression_disable_point")&&b>=l&&(Kp=!1)}else Kp=!1;Xp(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return ml(n),a}}else return a}
function Wp(a){try{return(new Blob(a.split(""))).size}catch(b){return ml(b),null}}
function Xp(a){R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||Dp("gel_compression",a,{sampleRate:.1})}
;function Zp(a){a=Object.assign({},a);delete a.Authorization;var b=Pg();if(b){var c=new Oi;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=Be(c.digest(),3)}return a}
;var $p;function aq(){$p||($p=new nn("yt.innertube"));return $p}
function bq(a,b,c,d){if(d)return null;d=aq().get("nextId",!0)||1;var e=aq().get("requests",!0)||{};e[d]={method:a,request:b,authState:Zp(c),requestTime:Math.round(V())};aq().set("nextId",d+1,86400,!0);aq().set("requests",e,86400,!0);return d}
function cq(a){var b=aq().get("requests",!0)||{};delete b[a];aq().set("requests",b,86400,!0)}
function dq(a){var b=aq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(V())-d.requestTime)){var e=d.authState,f=Zp(np(!1));rb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),eq(a,d.method,e,{}));delete b[c]}}aq().set("requests",b,86400,!0)}}
;function fq(a){this.Vb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.qb=function(){};
this.now=Date.now;this.Fb=!1;var b;this.Ed=null!=(b=a.Ed)?b:100;var c;this.yd=null!=(c=a.yd)?c:1;var d;this.wd=null!=(d=a.wd)?d:2592E6;var e;this.ud=null!=(e=a.ud)?e:12E4;var f;this.xd=null!=(f=a.xd)?f:5E3;var g;this.U=null!=(g=a.U)?g:void 0;this.ac=!!a.ac;var h;this.Yb=null!=(h=a.Yb)?h:.1;var k;this.jc=null!=(k=a.jc)?k:10;a.handleError&&(this.handleError=a.handleError);a.qb&&(this.qb=a.qb);a.Fb&&(this.Fb=a.Fb);a.Vb&&(this.Vb=a.Vb);this.V=a.V;this.Ea=a.Ea;this.da=a.da;this.aa=a.aa;this.sendFn=a.sendFn;
this.Nc=a.Nc;this.Kc=a.Kc;gq(this)&&(!this.V||this.V("networkless_logging"))&&hq(this)}
function hq(a){gq(a)&&!a.Fb&&(a.h=!0,a.ac&&Math.random()<=a.Yb&&a.da.Sd(a.U),iq(a),a.aa.wa()&&a.Qb(),a.aa.listen(a.Nc,a.Qb.bind(a)),a.aa.listen(a.Kc,a.Zc.bind(a)))}
m=fq.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(gq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.da.set(d,this.U).then(function(e){d.id=e;c.aa.wa()&&jq(c,d)}).catch(function(e){jq(c,d);
kq(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(gq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.V&&this.V("nwl_skip_retry")&&(e.skipRetry=c);if(this.aa.wa()||this.V&&this.V("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.da.set(e,d.U).catch(function(l){kq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.da.set(e,this.U).catch(function(g){d.sendFn(a,b,e.skipRetry);
kq(d,g)})}else this.sendFn(a,b,this.V&&this.V("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(gq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.da.ob(d.id,c.U):e=!0;c.aa.gb&&c.V&&c.V("vss_network_hint")&&c.aa.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.da.set(d,this.U).then(function(g){d.id=g;e&&c.da.ob(d.id,c.U)}).catch(function(g){kq(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Qb=function(){var a=this;if(!gq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ea.na(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.da.jd("NEW",a.U),2);if(3!=c.h)return b=c.i,b?c.yield(jq(a,b),3):(a.Zc(),c.return());a.i&&(a.i=0,a.Qb());c.h=0})},this.Ed))};
m.Zc=function(){this.Ea.oa(this.i);this.i=0};
function jq(a,b){var c;return A(function(d){switch(d.h){case 1:if(!gq(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return d.yield(a.da.te(b.id,a.U),3);case 3:(c=d.i)||a.qb(Error("The request cannot be found in the database."));case 2:if(lq(a,b,a.wd)){d.B(4);break}a.qb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return d.yield(a.da.ob(b.id,a.U),5);case 5:return d.return();case 4:b.skipRetry||(b=mq(a,
b));if(!b){d.B(0);break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return d.yield(a.da.ob(b.id,a.U),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function mq(a,b){if(!gq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=nq(f);(h=oq(f))&&a.V&&a.V("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.V&&a.V("nwl_consider_error_code")&&g||a.V&&!a.V("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.jc)){n.B(2);break}if(!a.aa.mc){n.B(3);break}return n.yield(a.aa.mc(),3);case 3:if(a.aa.wa()){n.B(2);break}c(e,f);if(!a.V||!a.V("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.B(6);
break}return n.yield(a.da.Pc(b.id,a.U,!1),6);case 6:return n.return();case 2:if(a.V&&a.V("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.jc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.B(8);break}return b.sendCount<a.yd?n.yield(a.da.Pc(b.id,a.U,!0,h?!1:void 0),12):n.yield(a.da.ob(b.id,a.U),8);case 12:a.Ea.na(function(){a.aa.wa()&&a.Qb()},a.xd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):h.yield(a.da.ob(b.id,a.U),2);a.aa.gb&&a.V&&a.V("vss_network_hint")&&a.aa.gb(!0);d(e,f);h.h=0})};
return b}
function lq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function iq(a){if(!gq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.da.jd("QUEUED",a.U).then(function(b){b&&!lq(a,b,a.ud)?a.Ea.na(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.B(2):c.yield(a.da.Pc(b.id,a.U),2);iq(a);c.h=0})}):a.aa.wa()&&a.Qb()})}
function kq(a,b){a.Kd&&!a.aa.wa()?a.Kd(b):a.handleError(b)}
function gq(a){return!!a.U||a.Vb}
function nq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function oq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var pq;
function qq(){if(pq)return pq();var a={};pq=Xo("LogsDatabaseV2",{yb:(a.LogsRequestsStore={Cb:2},a),nc:!1,upgrade:function(b,c,d){c(2)&&co(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),ko(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return pq()}
;function rq(a){return wo(qq(),a)}
function sq(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(rq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(fo(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=V();tq(c);return g.return(f)})}
function uq(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(rq(b),2);if(3!=l.h)return d=l.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(bo(d,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(n){return po(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===
a&&(k.status="QUEUED",p.update(k)))})}),3);
c.ticks.tc=V();tq(c);return l.return(k)})}
function vq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(rq(b),2);c=d.i;return d.return(bo(c,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Yn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function wq(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(rq(b),2);e=f.i;return f.return(bo(e,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Yn(h.h.put(k,void 0)).then(function(){return k})):Sn.resolve(void 0)})}))})}
function xq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(rq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function yq(a){var b,c;return A(function(d){if(1==d.h)return d.yield(rq(a),2);b=d.i;c=V()-2592E6;return d.yield(bo(b,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){return mo(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function zq(){A(function(a){return a.yield(To(),0)})}
function tq(a){R("nwl_csi_killswitch")||Dp("networkless_performance",a,{sampleRate:1})}
;var Aq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495};var Bq={},Cq=Xo("ServiceWorkerLogsDatabase",{yb:(Bq.SWHealthLog={Cb:1},Bq),nc:!0,upgrade:function(a,b){b(1)&&ko(co(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Dq(a){return wo(Cq(),a)}
function Eq(a){var b,c;A(function(d){if(1==d.h)return d.yield(Dq(a),2);b=d.i;c=V()-2592E6;return d.yield(bo(b,["SWHealthLog"],{mode:"readwrite",ja:!0},function(e){return mo(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Fq(a){var b;return A(function(c){if(1==c.h)return c.yield(Dq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Gq={},Hq=0;function Iq(a){var b=new Image,c=""+Hq++;Gq[c]=b;b.onload=b.onerror=function(){delete Gq[c]};
b.src=a}
;function Jq(){this.h=new Map;this.i=!1}
function Kq(){if(!Jq.h){var a=E("yt.networkRequestMonitor.instance")||new Jq;D("yt.networkRequestMonitor.instance",a);Jq.h=a}return Jq.h}
Jq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Jq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Jq.prototype.removeParams=function(a){return a.split("?")[0]};
Jq.prototype.removeParams=Jq.prototype.removeParams;Jq.prototype.isEndpointCFR=Jq.prototype.isEndpointCFR;Jq.prototype.requestComplete=Jq.prototype.requestComplete;Jq.getInstance=Kq;var Lq;function Mq(){Lq||(Lq=new nn("yt.offline"));return Lq}
function Nq(a){if(R("offline_error_handling")){var b=Mq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Mq().set("errors",b,2592E3,!0)}}
;function Oq(){sd.call(this);var a=this;this.j=!1;this.i=Hi();this.i.listen("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=Mq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;ll(d)}Mq().set("errors",{},2592E3,!0)}}})}
x(Oq,sd);function Pq(){if(!Oq.h){var a=E("yt.networkStatusManager.instance")||new Oq;D("yt.networkStatusManager.instance",a);Oq.h=a}return Oq.h}
m=Oq.prototype;m.wa=function(){return this.i.wa()};
m.gb=function(a){this.i.i=a};
m.ge=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Xd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.mc=function(a){a=Fi(this.i,a);a.then(function(b){R("use_cfr_monitor")&&Kq().requestComplete("generate_204",b)});
return a};
Oq.prototype.sendNetworkCheckRequest=Oq.prototype.mc;Oq.prototype.listen=Oq.prototype.listen;Oq.prototype.enableErrorFlushing=Oq.prototype.Xd;Oq.prototype.getWindowStatus=Oq.prototype.ge;Oq.prototype.networkStatusHint=Oq.prototype.gb;Oq.prototype.isNetworkAvailable=Oq.prototype.wa;Oq.getInstance=Pq;function Qq(a){a=void 0===a?{}:a;sd.call(this);var b=this;this.i=this.m=0;this.j=Pq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Rq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Rq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){td(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){td(b,"publicytnetworkstatus-offline")})))}
x(Qq,sd);Qq.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Qq.prototype.gb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Qq.prototype.mc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&Kq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function Rq(a,b){a.rateLimit?a.i?(Ii.oa(a.m),a.m=Ii.na(function(){a.l!==b&&(td(a,b),a.l=b,a.i=V())},a.rateLimit-(V()-a.i))):(td(a,b),a.l=b,a.i=V()):td(a,b)}
;var Sq;function Tq(){var a=fq.call;Sq||(Sq=new Qq({Zf:!0,Sf:!0}));a.call(fq,this,{da:{Sd:yq,ob:xq,jd:uq,te:vq,Pc:wq,set:sq},aa:Sq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;ml(new U(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else ll(b)},
qb:ml,sendFn:Uq,now:V,Kd:Nq,Ea:mn(),Nc:"publicytnetworkstatus-online",Kc:"publicytnetworkstatus-offline",ac:!0,Yb:.1,jc:S("potential_esf_error_limit",10),V:R,Fb:!(Dm()&&Vq())});this.j=new Yh;R("networkless_immediately_drop_all_requests")&&zq();Uo("LogsDatabaseV2")}
x(Tq,fq);function Wq(){var a=E("yt.networklessRequestController.instance");a||(a=new Tq,D("yt.networklessRequestController.instance",a),R("networkless_logging")&&Jo().then(function(b){a.U=b;hq(a);a.j.resolve();a.ac&&Math.random()<=a.Yb&&a.U&&Eq(a.U);R("networkless_immediately_drop_sw_health_store")&&Xq(a)}));
return a}
Tq.prototype.writeThenSend=function(a,b){b||(b={});Dm()||(this.h=!1);fq.prototype.writeThenSend.call(this,a,b)};
Tq.prototype.sendThenWrite=function(a,b,c){b||(b={});Dm()||(this.h=!1);fq.prototype.sendThenWrite.call(this,a,b,c)};
Tq.prototype.sendAndWrite=function(a,b){b||(b={});Dm()||(this.h=!1);fq.prototype.sendAndWrite.call(this,a,b)};
Tq.prototype.awaitInitialization=function(){return this.j.promise};
function Xq(a){var b;A(function(c){if(!a.U)throw b=On("clearSWHealthLogsDb"),b;return c.return(Fq(a.U).catch(function(d){a.handleError(d)}))})}
function Uq(a,b,c,d){d=void 0===d?!1:d;b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_cfr_monitor")&&Yq(a,b);if(R("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)Ol(a,void 0,"POST",f);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||
h)Ol(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new ab({url:a});if(k.j&&k.i||k.l){var l=$b(ac(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(lc),t=kc(a,0,"ri",p);if(0>t)var r=null;else{var v=a.indexOf("&",t);if(0>v||v>p)v=p;r=decodeURIComponent(a.slice(t+3,-1!==v?v:0).replace(/\+/g," "))}n="1"!==r}var y=!n;break b}}catch(H){}y=!1}if(y){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(H){}z=!1}c=z?!0:!1}else c=
!1;c||Iq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Vp(a,b.postBody,b,Ll,d)):Vp(a,JSON.stringify(b.postParams),b,Tl,d):Ll(a,b)}
function Yq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Kq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Kq().requestComplete(a,!0);d(e,f)}}
function Vq(){return"www.youtube-nocookie.com"!==bc(document.location.toString())}
;var Zq=!1,$q=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Zq};D("ytNetworklessLoggingInitializationOptions",$q);function ar(){var a;A(function(b){if(1==b.h)return b.yield(Jo(),2);a=b.i;if(!a||!Dm()&&!R("nwl_init_require_datasync_id_killswitch")||!Vq())return b.B(0);Zq=!0;$q.isNwlInitialized=Zq;return b.yield(Wq().awaitInitialization(),0)})}
;function br(a){var b=this;this.config_=null;a?this.config_=a:kp()&&(this.config_=lp());Gm(function(){dq(b)},5E3)}
br.prototype.isReady=function(){!this.config_&&kp()&&(this.config_=lp());return!!this.config_};
function eq(a,b,c,d){function e(v){v=void 0===v?!1:v;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(v||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=bq(b,c,l,k)),y)){var z=g.onSuccess,H=g.onFetchSuccess;g.onSuccess=function(T,J){cq(y);z(T,J)};
c.onFetchSuccess=function(T,J){cq(y);H(T,J)}}try{if(v&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Wq().writeThenSend(r,g):Wq().sendAndWrite(r,g);
else if(d.compress){var L=!d.networklessOptions.writeThenSend;if(g.postBody){var I=g.postBody;"string"!==typeof I&&(I=JSON.stringify(g.postBody));Vp(r,I,g,Ll,L)}else Vp(r,JSON.stringify(g.postParams),g,Tl,L)}else R("web_all_payloads_via_jspb")?Ll(r,g):Tl(r,g)}catch(T){if("InvalidAccessError"==T.name)y&&(cq(y),y=0),ml(Error("An extension is blocking network request."));else throw T;}y&&Gm(function(){dq(a)},5E3)}
!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&ml(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);ll(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(v,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,y){if(d.onError)d.onError(y)},
onFetchError:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.oe)&&(h=f);var k=a.config_.qe||!1,l=np(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.pe&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.innertubeApiKey);var r=vl(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
$q.isNwlInitialized:Zq)?Ho().then(function(v){e(v)}):e(!1)}
;var cr=0,dr=Jc?"webkit":Ic?"moz":Gc?"ms":Fc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++cr});var er={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function fr(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in er||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function gr(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
fr.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
fr.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
fr.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",nb);var hr=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",hr);
function ir(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&rb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var jr=cb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function kr(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ir(a,b,c,d);if(e)return e;e=++hr.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new fr(h);if(!Cd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new fr(h);
h.currentTarget=a;return c.call(a,h)};
g=kl(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),jr()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d];return e}
function lr(a){a&&("string"==typeof a&&(a=[a]),eb(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?jr()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;function mr(a){this.D=a;this.h=null;this.l=0;this.A=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.T=kr(window,"mousemove",Va(this.X,this));a=Va(this.K,this);"function"===typeof a&&(a=kl(a));this.ba=window.setInterval(a,25)}
Ya(mr,G);mr.prototype.X=function(a){void 0===a.h&&gr(a);var b=a.h;void 0===a.i&&gr(a);this.h=new yd(b,a.i)};
mr.prototype.K=function(){if(this.h){var a=V();if(0!=this.l){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.A=this.h;this.j=(this.j+1)%4}};
mr.prototype.S=function(){window.clearInterval(this.ba);lr(this.T)};var nr={};
function or(a){var b=void 0===a?{}:a;a=void 0===b.De?!1:b.De;b=void 0===b.Yd?!0:b.Yd;if(null==E("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&pr();kr(document,"keydown",pr);kr(document,"keyup",pr);kr(document,"mousedown",pr);kr(document,"mouseup",pr);a?kr(window,"touchmove",function(){qr("touchmove",200)},{passive:!0}):(kr(window,"resize",function(){qr("resize",200)}),b&&kr(window,"scroll",function(){qr("scroll",200)}));
new mr(function(){qr("mouse",100)});
kr(document,"touchstart",pr,{passive:!0});kr(document,"touchend",pr,{passive:!0})}}
function qr(a,b){nr[a]||(nr[a]=!0,Ii.na(function(){pr();nr[a]=!1},b))}
function pr(){null==E("_lact",window)&&or();var a=Date.now();D("_lact",a,window);-1==E("_fact",window)&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function rr(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var sr=C.ytPubsubPubsubInstance||new K,tr=C.ytPubsubPubsubSubscribedKeys||{},ur=C.ytPubsubPubsubTopicToKeys||{},vr=C.ytPubsubPubsubIsSynchronous||{};function wr(a,b){var c=xr();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){tr[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{vr[a]?f():El(f,0)}catch(g){ll(g)}},void 0);
tr[d]=!0;ur[a]||(ur[a]=[]);ur[a].push(d);return d}return 0}
function yr(a){var b=xr();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),eb(a,function(c){b.unsubscribeByKey(c);delete tr[c]}))}
function zr(a,b){var c=xr();c&&c.publish.apply(c,arguments)}
function Ar(a){var b=xr();if(b)if(b.clear(a),a)Br(a);else for(var c in ur)Br(c)}
function xr(){return C.ytPubsubPubsubInstance}
function Br(a){ur[a]&&(a=ur[a],eb(a,function(b){tr[b]&&delete tr[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Ab;K.prototype.publish=K.prototype.Ya;K.prototype.clear=K.prototype.clear;D("ytPubsubPubsubInstance",sr);D("ytPubsubPubsubTopicToKeys",ur);D("ytPubsubPubsubIsSynchronous",vr);D("ytPubsubPubsubSubscribedKeys",tr);var Cr=Symbol("injectionDeps");function Dr(a){this.name=a}
Dr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Er(a){this.key=a}
function Fr(){this.i=new Map;this.j=new Map;this.h=new Map}
function Gr(a,b){a.i.set(b.lc,b);var c=a.j.get(b.lc);c&&c.ig(a.resolve(b.lc))}
Fr.prototype.resolve=function(a){return a instanceof Er?Hr(this,a.key,[],!0):Hr(this,a,[])};
function Hr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(void 0!==d.Hd)var e=d.Hd;else if(d.gf)e=d[Cr]?Ir(a,d[Cr],c):[],e=d.gf.apply(d,la(e));else if(d.Gd){e=d.Gd;var f=e[Cr]?Ir(a,e[Cr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(la(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.mg||a.h.set(b,e);return e}
function Ir(a,b,c){return b?b.map(function(d){return d instanceof Er?Hr(a,d.key,c,!0):Hr(a,d,c)}):[]}
;var Jr;function Kr(){Jr||(Jr=new Fr);return Jr}
;var Lr=window;function Mr(){var a,b;return"h5vcc"in Lr&&(null==(a=Lr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Lr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Lr&&Lr.performance.mark&&Lr.performance.measure?2:0}
function Nr(a){switch(Mr()){case 1:Lr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Lr.performance.mark(a+"-start");break;case 0:break;default:pi()}}
function Or(a){switch(Mr()){case 1:Lr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Lr.performance.mark(c);Lr.performance.measure(a,b,c);break;case 0:break;default:pi()}}
;var Pr=R("web_enable_lifecycle_monitoring")&&0!==Mr(),Qr=R("web_enable_lifecycle_monitoring");function Rr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?mn():d;this.j=c;this.scheduler=d;this.i=new Yh;this.h=a;for(a={cb:0};a.cb<this.h.length;a={ic:void 0,cb:a.cb},a.cb++)a.ic=this.h[a.cb],c=function(e){return function(){e.ic.Ec();b.h[e.cb].kc=!0;b.h.every(function(f){return!0===f.kc})&&b.i.resolve()}}(a),d=this.getPriority(a.ic),d=this.scheduler.ab(c,d),this.h[a.cb]=Object.assign({},a.ic,{Ec:c,
jobId:d})}
function Sr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.kc||(a.scheduler.oa(c.jobId),a.scheduler.ab(c.Ec,10))}
Rr.prototype.cancel=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.kc||this.scheduler.oa(b.jobId),b.kc=!0;this.i.resolve()};
Rr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Tr(a){this.state=a;this.plugins=[];this.l=void 0;this.A={};Pr&&Nr(this.state)}
m=Tr.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Pr&&Or(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Sr(this.j),this.j=void 0);Ur(this,a,b);this.state=a;Pr&&Nr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Vr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Vr(a,b){var c=b.filter(function(e){return 10===Wr(a,e)}),d=b.filter(function(e){return 10!==Wr(a,e)});
return a.A.lg?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Ke.apply(a,[c].concat(la(e))),2);a.Bd.apply(a,[d].concat(la(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Le.apply(a,[c].concat(la(e)));a.Bd.apply(a,[d].concat(la(e)))}}
m.Le=function(a){for(var b=B.apply(1,arguments),c=mn(),d=w(a),e=d.next(),f={};!e.done;f={Ib:void 0},e=d.next())f.Ib=e.value,c.Bb(function(g){return function(){Xr(g.Ib.name);g.Ib.callback.apply(g.Ib,la(b));Yr(g.Ib.name)}}(f))};
m.Ke=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=mn(),d=w(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.B(0);f.ub=e.value;f.Tb=void 0;g=function(k){return function(){Xr(k.ub.name);var l=k.ub.callback.apply(k.ub,la(b));"function"===typeof(null==l?void 0:l.then)?k.Tb=l.then(function(){Yr(k.ub.name)}):Yr(k.ub.name)}}(f);
c.Bb(g);return f.Tb?h.yield(f.Tb,3):h.B(3)}f={ub:void 0,Tb:void 0};e=d.next();return h.B(2)})};
m.Bd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Ec:function(){Xr(e.name);e.callback.apply(e,la(b));Yr(e.name)},
priority:Wr(c,e)}});
d.length&&(this.j=new Rr(d))};
function Wr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Xr(a){Pr&&a&&Nr(a)}
function Yr(a){Pr&&a&&Or(a)}
function Ur(a,b,c){Qr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(Tr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Zr(a){Tr.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var $r;x(Zr,Tr);Zr.prototype.i=function(a,b){var c=this;this.h=Gm(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Zr.prototype.u=function(a,b){this.h&&(Ii.oa(this.h),this.h=null);a(null==b?void 0:b.event)};
function as(){$r||($r=new Zr);return $r}
;var bs=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return bs});function cs(){this.store={};this.h={}}
cs.prototype.storePayload=function(a,b){a=ds(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
cs.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=es(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,la(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,la(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,la(this.smartExtractMatchingEntries(a))));return c};
cs.prototype.extractMatchingEntries=function(a){a=es(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,la(this.store[a[c]])),delete this.store[a[c]]);return b};
cs.prototype.getSequenceCount=function(a){a=es(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function es(a,b){var c=ds(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&ds(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(gs(b.auth,g[0])){var h=b.isJspb;gs(void 0===h?"undefined":h?"true":"false",g[1])&&gs(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),gs(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function gs(a,b){return void 0===a||"undefined"===a?!0:a===b}
cs.prototype.getSequenceCount=cs.prototype.getSequenceCount;cs.prototype.extractMatchingEntries=cs.prototype.extractMatchingEntries;cs.prototype.smartExtractMatchingEntries=cs.prototype.smartExtractMatchingEntries;cs.prototype.storePayload=cs.prototype.storePayload;function ds(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function hs(a,b){if(a)return a[b.name]}
;var is=S("initial_gel_batch_timeout",2E3),js=S("gel_queue_timeout_max_ms",6E4),ks=Math.pow(2,16)-1,ls=S("gel_min_batch_size",5),ms=void 0;function ns(){this.l=this.h=this.i=0;this.j=!1}
var ps=new ns,qs=new ns,rs=new ns,ss=new ns,ts,us=!0,vs=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",vs);var ws={};function xs(){var a=E("yt.logging.ims");a||(a=new cs,D("yt.logging.ims",a));return a}
function ys(a,b){if("log_event"===a.endpoint){zs();var c=As(a),d=Bs(a.payload)||"";a:{if(R("enable_web_tiered_gel")){var e=Aq[d||""];var f,g,h,k=null==Kr().resolve(new Er(fp))?void 0:null==(f=gp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!R("web_payload_policy_disabled_killswitch"))return;k=Cs(e.tier);if(400===k){Ds(a,b);return}}ws[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};xs().storePayload(e,a.payload);Es(b,c,e,"gelDebuggingEvent"===d)}}
function Es(a,b,c,d){function e(){Fs({writeThenSend:!0},R("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(ms=new a);a=S("tvhtml5_logging_max_batch_ads_fork")||S("web_logging_max_batch")||100;var g=V(),h=Gs(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=xs().getSequenceCount(c));1E3<=d?e():d>=a?ts||(ts=Hs(function(){e();ts=void 0},0)):10<=g-k&&(Is(f,c.tier),h.l=g)}
function Ds(a,b){if("log_event"===a.endpoint){zs();var c=As(a),d=new Map;d.set(c,[a.payload]);var e=Bs(a.payload)||"";b&&(ms=new b);return new Pd(function(f,g){ms&&ms.isReady()?Js(d,ms,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function As(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);vs[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Fs(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Pd(function(e,f){var g=Gs(c,d),h=g.j;g.j=!1;Ks(g.i);Ks(g.h);g.h=0;ms&&ms.isReady()?void 0===d&&R("enable_web_tiered_gel")?Ls(e,f,a,b,c,300,h):Ls(e,f,a,b,c,d,h):(Is(c,d),e())})}
function Ls(a,b,c,d,e,f,g){var h=ms;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=R("enable_web_tiered_gel")?xs().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):xs().extractMatchingEntries(e),k.set(d,f);else for(d=w(Object.keys(ws)),l=d.next();!l.done;l=d.next())l=l.value,e=R("enable_web_tiered_gel")?xs().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):xs().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete ws[l];Js(k,h,a,b,c,!1,g)}
function Is(a,b){function c(){Fs({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Gs(a,b),e=d===ss||d===rs?5E3:js;R("web_gel_timeout_cap")&&!d.h&&(e=Hs(function(){c()},e),d.h=e);
Ks(d.i);e=P("LOGGING_BATCH_TIMEOUT",S("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&us&&(e=is);e=Hs(function(){0<S("gel_min_batch_size")?xs().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=ls&&c():c()},e);
d.i=e}
function Js(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(V()),k=a.size,l=(void 0===g?0:g)&&R("vss_through_gel_video_stats")?"video_stats":"log_event";a=w(a);var n=a.next();for(g={};!n.done;g={Jc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Mc:void 0,Lc:void 0},n=a.next()){var p=w(n.value);n=p.next().value;p=p.next().value;g.batchRequest=tb({context:mp(b.config_||lp())});if(!Oa(p)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=vs[n])&&
Ms(g.batchRequest,n,p);delete vs[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;Ns(g.batchRequest,h,g.dangerousLogToVisitorSession);R("always_send_and_write")&&(e.writeThenSend=!1);g.Mc=function(t){R("start_client_gcf")&&Ii.na(function(){return A(function(r){return r.yield(Os(t),0)})});
k--;k||c()};
g.Jc=0;g.Lc=function(t){return function(){t.Jc++;if(e.bypassNetworkless&&1===t.Jc)try{eq(b,l,t.batchRequest,Ps({writeThenSend:!0},t.dangerousLogToVisitorSession,t.Mc,t.Lc,f)),us=!1}catch(r){ll(r),d()}k--;k||c()}}(g);
try{eq(b,l,g.batchRequest,Ps(e,g.dangerousLogToVisitorSession,g.Mc,g.Lc,f)),us=!1}catch(t){ll(t),d()}}}
function Ps(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Pf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};Qs()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function Ns(a,b,c){Qs()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&((c=P("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*ks/2)),c++,c>ks&&(c=1),gl("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Ms(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function zs(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=zl("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(bs=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",bs),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Qs(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Hs(a,b){return!1===R("embeds_transport_use_scheduler")?El(a,b):R("logging_avoid_blocking_during_navigation")||R("lr_logging_avoid_blocking_during_navigation")?Gm(function(){if("none"===as().currentState)a();else{var c={};as().install((c.none={callback:a},c))}},b):Gm(a,b)}
function Ks(a){R("transport_use_scheduler")?Ii.oa(a):window.clearTimeout(a)}
function Os(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=hs(d,Mk),g=null==(f=d)?void 0:f.hotHashData,h=hs(d,Lk),l=null==(k=d)?void 0:k.coldHashData,(n=Kr().resolve(new Er(fp)))?g?e?p.yield(hp(n,g,e),2):p.yield(hp(n,g),2):p.B(2):p.return()):l?h?p.yield(ip(n,l,h),0):p.yield(ip(n,l),0):p.B(0)})}
function Gs(a,b){b=void 0===b?200:b;return a?300===b?ss:qs:300===b?rs:ps}
function Bs(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Aq[b])return b}
function Cs(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Rs=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Rs);
function Ss(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=rr();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!R("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Rs[b]=b in Rs?Rs[b]+1:0,a.sequence={index:Rs[b],groupKey:b},d.endOfSequence&&delete Rs[d.sequenceGroup]);(d.sendIsolatedPayload?Ds:ys)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function wn(a,b,c){c=void 0===c?{}:c;var d=br;P("ytLoggingEventsDefaultDisabled",!1)&&br===br&&(d=null);R("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=rr(),c.timestamp=V());Ss(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Ts=new Set,Us=0,Vs=0,Ws=0,Xs=[],Ys=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function vn(a){Zs(a)}
function $s(a){Zs(a,"WARNING")}
function at(a){a instanceof Error?Zs(a):(a=Pa(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",$s(a))}
function Zs(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),R("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Us))){d=Xs;var k=xc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(p=cm(a.args[t],"params."+t,c,p),
500<=p);t++);else if(a.hasOwnProperty("params")&&a.params){var r=a.params;if("object"===typeof a.params)for(t in r){if(r[t]){var v="params."+t,y=em(r[t]);c[v]=y;p+=v.length+y.length;if(500<p)break}}else c.params=em(r)}if(d.length)for(t=0;t<d.length&&!(p=cm(d[t],"params.context."+t,c,p),500<=p);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Zl();c=w(a.Ta);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.cg)){a=d.weight;break a}a=w(a.Qa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=w(Ul);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.hc[t.name])for(e=w(c.hc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Hc(f);break}t.params||(t.params={});a=Zl();t.params["params.errorServiceSignature"]="msg="+a.Ta.length+"&cb="+a.Qa.length;t.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Bb("sample").constructor!==zb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!Ts.has(t.message)){if(g&&R("web_enable_error_204"))bt(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?($l.Ya("handleError",t),R("record_app_crashed_web")&&0===Ws&&1===t.sampleWeight&&(Ws++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},R("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),wn("appCrashed",g)),Vs++):"WARNING"===b&&$l.Ya("handleWarning",t);if(R("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=w(Ys);for(c=a.next();!c.done;c=a.next())if(Cn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];P("FEXP_EXPERIMENTS")&&(h.experimentIds=P("FEXP_EXPERIMENTS"));d=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!hl("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=w(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=t.params)for(e=w(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=P("SERVER_NAME");e=P("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(wn("clientError",h),("ERROR"===g||R("errors_flush_gel_always_killswitch"))&&Fs(void 0,void 0,!1))}R("suppress_error_204_logging")||bt(b,t)}try{Ts.add(t.message)}catch(z){}Us++}}}
function bt(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:P("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=P("SERVER_NAME");b=P("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Ll(P("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function ct(){this.register=new Map}
function dt(a){a=w(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.gg("ABORTED")}
ct.prototype.clear=function(){dt(this);this.register.clear()};
var et=new ct;var ft=Date.now().toString();
function gt(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ft)for(a=1,b=0;b<ft.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ft.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ht,jt=C.ytLoggingDocDocumentNonce_;jt||(jt=gt(),D("ytLoggingDocDocumentNonce_",jt));ht=jt;function kt(a){this.h=a}
m=kt.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Tk;void 0!==this.h.trackingParams?a.setTrackingParams(this.h.trackingParams):(void 0!==this.h.veType&&bg(a,2,Df(this.h.veType)),void 0!==this.h.veCounter&&bg(a,6,Df(this.h.veCounter)),void 0!==this.h.elementIndex&&bg(a,3,Df(this.h.elementIndex)),this.h.isCounterfactual&&bg(a,5,Af(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();lg(a,Tk,7,b)}void 0!==this.h.youtubeData&&lg(a,Nk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function lt(a){return P("client-screen-nonce-store",{})[void 0===a?0:a]}
function mt(a,b){b=void 0===b?0:b;var c=P("client-screen-nonce-store");c||(c={},gl("client-screen-nonce-store",c));c[b]=a}
function nt(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ot(a){return P(nt(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",ot);function pt(){var a=P("csn-to-ctt-auth-info");a||(a={},gl("csn-to-ctt-auth-info",a));return a}
function qt(){return Object.values(P("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function rt(a){a=lt(void 0===a?0:a);if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",rt);function st(a,b,c){var d=pt();(c=rt(c))&&delete d[c];b&&(d[a]=b)}
function tt(a){return pt()[a]}
D("yt_logging_screen.getCttAuthInfo",tt);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==lt(c)||b!==P(nt(c)))if(st(a,d,c),mt(a,c),gl(nt(c),b),b=function(){setTimeout(function(){a&&wn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ht,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var ut=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",ut);function vt(a){bl(ut,arguments)}
;function wt(){var a=sb(xt),b;return(new Pd(function(c,d){a.onSuccess=function(e){Dl(e)?c(new zt(e)):d(new At("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new At("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new At("Request timed out","net.timeout",e))};
b=Ll("//googleads.g.doubleclick.net/pagead/id",a)})).oc(function(c){c instanceof Wd&&b.abort();
return Ud(c)})}
function At(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
x(At,$a);function zt(a){this.xhr=a}
;function Bt(){this.h=0;this.value_=null}
Bt.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.value_))&&"function"===typeof a.then?a:Ct(a):2===this.h&&b?(a=b.call(c,this.value_))&&"function"===typeof a.then?a:Dt(a):this};
Bt.prototype.getValue=function(){return this.value_};
Bt.prototype.isRejected=function(){return 2==this.h};
Bt.prototype.$goog_Thenable=!0;function Dt(a){var b=new Bt;a=void 0===a?null:a;b.h=2;b.value_=void 0===a?null:a;return b}
function Ct(a){var b=new Bt;a=void 0===a?null:a;b.h=1;b.value_=void 0===a?null:a;return b}
;function Et(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:wl(a)?"same-origin":"cors",credentials:wl(a)?"same-origin":"include"};b={};for(var d=w(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Ft(){return Ng()||(we||xe)&&Cn("applewebkit")&&!Cn("version")&&(!Cn("safari")||Cn("gsa/"))||Kc&&Cn("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function Gt(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Rk)if(Rk[d]==c.embeddedPlayerMode){b=Rk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Ht(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof It;this.isTimeout=a instanceof At&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Wd}
x(Ht,$a);Ht.prototype.name="BiscottiError";function It(){$a.call(this,"Biscotti ID is missing from server")}
x(It,$a);It.prototype.name="BiscottiMissingError";var xt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Jt=null;function Kt(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Ft())return Error("User has not consented - not fetching biscotti id.");var a=P("PLAYER_VARS",{});if("1"==qb(a))return Error("Biscotti ID is not available in private embed mode");if(Gt(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function $k(){var a=Kt();if(void 0!==a)return Ud(a);Jt||(Jt=wt().then(Lt).oc(function(b){return Mt(2,b)}));
return Jt}
function Lt(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new It;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new It;a=a.id;al(a);Jt=Ct(a);Nt(18E5,2);return a}
function Mt(a,b){b=new Ht(b);al("");Jt=Dt(b);0<a&&Nt(12E4,a-1);throw b;}
function Nt(a,b){El(function(){wt().then(Lt,function(c){return Mt(b,c)}).oc(bb)},a)}
function Ot(){try{var a=E("yt.ads.biscotti.getId_");return a?a():$k()}catch(b){return Ud(b)}}
;function Pt(a){if("1"!=qb(P("PLAYER_VARS",{}))){a&&Zk();try{Ot().then(function(){},function(){}),El(Pt,18E5)}catch(b){ll(b)}}}
;var Qt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Rt(){var a=void 0===a?window.location.href:a;if(R("kevlar_disable_theme_param"))return null;$b(ac(5,a));try{var b=ul(a).theme;void 0===b&&R("parent_tools_enable_app_settings")&&(b=ul(a).color_theme);return Qt.get(b)||null}catch(c){}return null}
;function St(){this.h={};if(this.i=om()){var a=mm("CONSISTENCY");a&&Tt(this,{encryptedTokenJarContents:a})}}
St.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Oa.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=w(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Tt(this,a)}};
function Tt(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&lm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Ut=window.location.hostname.split(".").slice(-2).join(".");function Vt(){var a=P("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===P("INNERTUBE_CLIENT_NAME")&&(this.h=Wt(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Xt;function Yt(){Xt=E("yt.clientLocationService.instance");Xt||(Xt=new Vt,D("yt.clientLocationService.instance",Xt));return Xt}
m=Vt.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===P("INNERTUBE_CLIENT_NAME")?(this.h=Wt(this))&&this.h.set("yt-location-playability-token",a,15552E3):lm("YT_CL",JSON.stringify({loctok:a}),15552E3,Ut,!0))};
function Wt(a){return void 0===a.h?new nn("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Wt(this))&&this.h.remove("yt-location-playability-token"):nm("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===P("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function Zt(a,b){var c,d=null==(c=hs(a,Qk))?void 0:c.signal;if(d&&b.Pb&&(c=b.Pb[d]))return c();var e;if((c=null==(e=hs(a,Ok))?void 0:e.request)&&b.Ud&&(e=b.Ud[c]))return e();for(var f in a)if(b.cd[f]&&(a=b.cd[f]))return a()}
;function $t(a){return function(){return new a}}
;var au={},bu=(au.WEB_UNPLUGGED="^unplugged/",au.WEB_UNPLUGGED_ONBOARDING="^unplugged/",au.WEB_UNPLUGGED_OPS="^unplugged/",au.WEB_UNPLUGGED_PUBLIC="^unplugged/",au.WEB_CREATOR="^creator/",au.WEB_KIDS="^kids/",au.WEB_EXPERIMENTS="^experiments/",au.WEB_MUSIC="^music/",au.WEB_REMIX="^music/",au.WEB_MUSIC_EMBEDDED_PLAYER="^music/",au.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",au);
function cu(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=bu[b];if(c){c=new RegExp(c);for(var d=w(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(bu).forEach(function(g){var h=w(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=w(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function du(){}
du.prototype.u=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?im:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=P("INNERTUBE_CONTEXT");if(g){g=tb(g);R("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&"AUTOMOTIVE_FORM_FACTOR"!==h.clientFormFactor&&(h.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;sm();var l="USER_INTERFACE_THEME_LIGHT";wm(165)?l="USER_INTERFACE_THEME_DARK":wm(174)?l="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Rt()||l;h.userInterfaceTheme=k;if(!f){if(k=Bm())h.connectionType=k;R("web_log_effective_connection_type")&&(k=Cm())&&(g.client.effectiveConnectionType=k)}var n;if(R("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}R("web_gcf_hashes_innertube")&&(k=jp())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=
p,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=k);p=ul(C.location.href);!R("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},R("kevlar_woffle")&&jm.h&&(p=jm.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=km(),h.mainAppWebInfo.isWebNativeShareAvailable=
navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!R("web_lr_app_quality_killswitch")&&(p=P("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!R("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(Y){}t=void 0}t&&(h.timeZone=t)}(t=P("EXPERIMENTS_TOKEN",
""))?h.experimentsToken=t:delete h.experimentsToken;t=Al();St.h||(St.h=new St);h=St.h.h;p=[];n=0;for(var r in h)p[n++]=h[r];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:p});!R("web_prequest_context_killswitch")&&(r=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=r);t=sm();r=wm(58);t=t.get("gsml","");g.user=Object.assign({},g.user);r&&(g.user.enableSafetyMode=r);t&&(g.user.lockedSafetyMode=!0);R("warm_op_csn_cleanup")?e&&(f=rt())&&
(g.clientScreenNonce=f):!f&&(f=rt())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Yt().setLocationOnInnerTubeContext(g);try{var v=xl(),y=v.bid;delete v.bid;g.adSignalsInfo={params:[],bid:y};var z=w(Object.entries(v));for(var H=z.next();!H.done;H=z.next()){var L=w(H.value),I=L.next().value,T=L.next().value;v=I;y=T;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:v,value:""+y})}var J;if(R("add_ifa_to_tvh5_requests")&&
"TVHTML5"===(null==(J=g.client)?void 0:J.clientName)){var ha=P("INNERTUBE_CONTEXT");ha.adSignalsInfo&&(g.adSignalsInfo.advertisingId=ha.adSignalsInfo.advertisingId,g.adSignalsInfo.limitAdTracking=ha.adSignalsInfo.limitAdTracking)}}catch(Y){Zs(Y)}z=g}else Zs(Error("Error: No InnerTubeContext shell provided in ytconfig.")),z={};z={context:z};if(H=this.h(a)){this.i(z,H,b);var M;b="/youtubei/v1/"+cu(this.j());(H=null==(M=hs(a.commandMetadata,Pk))?void 0:M.apiUrl)&&(b=H);M=b;(b=P("INNERTUBE_HOST_OVERRIDE"))&&
(M=String(b)+String(cc(M)));b={};b.key=P("INNERTUBE_API_KEY");R("json_condensed_response")&&(b.prettyPrint="false");M=vl(M,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:M,ib:Et(M),Oa:z,config:a};a.config.Ub?a.config.Ub.identity=c:a.config.Ub={identity:c};return a}Zs(new U("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(du.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function eu(){}
x(eu,du);eu.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",ib:Et("/getDatasyncIdsEndpoint","GET"),Oa:{}}};
eu.prototype.j=function(){return[]};
eu.prototype.h=function(){};
eu.prototype.i=function(){};var fu={},gu=(fu.GET_DATASYNC_IDS=$t(eu),fu);var hu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function iu(a,b){var c=void 0===c?!0:c;var d=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=bc(window.location.href);e&&d.push(e);e=bc(a);if(0<=db(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),ki(d,a),a=d.href)if(a=cc(a),a=dc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:rt()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&ju(a,b,f)}else ju(a,b)}
function ju(a,b,c){a=ku(a);b=b?hc(b):"";c=c||5;Ft()&&lm(a,b,c)}
function ku(a){for(var b=w(hu),c=b.next();!c.done;c=b.next())a=nc(a,c.value);return"ST-"+Yb(a).toString(36)}
;function lu(a){qp.call(this,1,arguments);this.csn=a}
x(lu,qp);var zp=new rp("screen-created",lu),mu=[],nu=0,ou=new Map,pu=new Map,qu=new Map;
function ru(a,b,c,d,e){e=void 0===e?!1:e;for(var f=su({cttAuthInfo:tt(b)||void 0},b),g=w(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(ob(k)||!k.trackingParams&&!k.veType)&&$s(Error("Child VE logged with no data"));if(R("no_client_ve_attach_unless_shown")){var l=tu(h,b);if(k.veType&&!pu.has(l)&&!qu.has(l)&&!e){ou.set(l,[a,b,c,h]);return}h=tu(c,b);ou.has(h)?uu(c,b):qu.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:gb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?vu("visualElementAttached",f,c):a?Ss("visualElementAttached",c,a,f):wn("visualElementAttached",c,f)}
function vu(a,b,c){mu.push({Ce:a,payload:c,Wf:void 0,options:b});nu||(nu=Ap())}
function Bp(a){if(mu){for(var b=w(mu),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,wn(c.Ce,c.payload,c.options));mu.length=0}nu=0}
function tu(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function uu(a,b){a=tu(a,b);ou.has(a)&&(b=ou.get(a)||[],ru(b[0],b[1],b[2],[b[3]],!0),ou.delete(a))}
function su(a,b){R("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function wu(){try{return!!self.localStorage}catch(a){return!1}}
;function xu(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function yu(a){if(wu()){var b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=xu(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function zu(){if(!wu())return!1;var a=Em(),b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=xu(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Au(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return R("copy_login_info_to_st_cookie")&&("WEB"===P("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===P("INNERTUBE_CLIENT_NAME"))&&a}
function Bu(a){if(P("LOGGED_IN",!0)&&Au()){var b=P("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=bc(window.location.href);c&&b.push(c);c=bc(a);0<=db(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=cc(a),(b=dc(b))?(b=ku(b),b=(b=mm(b)||null)?tl(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;Au()?(d||(d=P("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&iu(a,b)}}
;function Cu(a){var b=B.apply(1,arguments);if(!Du(a)||b.some(function(d){return!Du(d)}))throw Error("Only objects may be merged.");
b=w(b);for(var c=b.next();!c.done;c=b.next())Eu(a,c.value);return a}
function Eu(a,b){for(var c in b)if(Du(b[c])){if(c in a&&!Du(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Eu(a[c],b[c])}else if(Fu(b[c])){if(c in a&&!Fu(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Gu(a[c],b[c])}else a[c]=b[c];return a}
function Gu(a,b){b=w(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Du(c)?a.push(Eu({},c)):Fu(c)?a.push(Gu([],c)):a.push(c);return a}
function Du(a){return"object"===typeof a&&!Array.isArray(a)}
function Fu(a){return"object"===typeof a&&Array.isArray(a)}
;function Hu(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Iu(){var a=Hu();a.info||(a.info={});return a.info}
function Ju(a){a=Hu(a);a.metadata||(a.metadata={});return a.metadata}
function Ku(a){a=Hu(a);a.tick||(a.tick={});return a.tick}
function Lu(a){a=Hu(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Mu(a){a=Lu(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Nu(a){var b=Hu(a).nonce;b||(b=gt(),Hu(a).nonce=b);return b}
;function Ou(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Pu(a){a=a||"";var b=E("ytcsi.reference");b||(Ou(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Ou(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},Qu=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W.app_startup="LATENCY_ACTION_APP_STARTUP",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channels="LATENCY_ACTION_CHANNELS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
W["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W.chips="LATENCY_ACTION_CHIPS",W.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",W.embed="LATENCY_ACTION_EMBED",W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.home="LATENCY_ACTION_HOME",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.onboarding="LATENCY_ACTION_ONBOARDING",
W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",
W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",
W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att=
"LATENCY_ACTION_PLAYER_ATTESTATION",W["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",
W.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.search_ui="LATENCY_ACTION_SEARCH_UI",W.search_suggest="LATENCY_ACTION_SUGGEST",W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.tenx="LATENCY_ACTION_TENX",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]=
"LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]=
"LATENCY_ACTION_CREATOR_VIDEO_EDIT",W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",
W["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W),X={},Ru=(X.ad_allowed="adTypesAllowed",X.yt_abt="adBreakType",X.ad_cpn="adClientPlaybackNonce",X.ad_docid="adVideoId",X.yt_ad_an=
"adNetworks",X.ad_at="adType",X.aida="appInstallDataAgeMs",X.browse_id="browseId",X.p="httpProtocol",X.t="transportProtocol",X.cpn="clientPlaybackNonce",X.ccs="creatorInfo.creatorCanaryState",X.ctop="creatorInfo.topEntityType",X.csn="clientScreenNonce",X.docid="videoId",X.GetHome_rid="requestIds",X.GetSearch_rid="requestIds",X.GetPlayer_rid="requestIds",X.GetWatchNext_rid="requestIds",X.GetBrowse_rid="requestIds",X.GetLibrary_rid="requestIds",X.is_continuation="isContinuation",X.is_nav="isNavigation",
X.b_p="kabukiInfo.browseParams",X.is_prefetch="kabukiInfo.isPrefetch",X.is_secondary_nav="kabukiInfo.isSecondaryNav",X.nav_type="kabukiInfo.navigationType",X.prev_browse_id="kabukiInfo.prevBrowseId",X.query_source="kabukiInfo.querySource",X.voz_type="kabukiInfo.vozType",X.yt_lt="loadType",X.mver="creatorInfo.measurementVersion",X.yt_ad="isMonetized",X.nr="webInfo.navigationReason",X.nrsu="navigationRequestedSameUrl",X.pnt="performanceNavigationTiming",X.prt="playbackRequiresTap",X.plt="playerInfo.playbackType",
X.pis="playerInfo.playerInitializedState",X.paused="playerInfo.isPausedOnLoad",X.yt_pt="playerType",X.fmt="playerInfo.itag",X.yt_pl="watchInfo.isPlaylist",X.yt_pre="playerInfo.preloadType",X.yt_ad_pr="prerollAllowed",X.pa="previousAction",X.yt_red="isRedSubscriber",X.rce="mwebInfo.responseContentEncoding",X.rc="resourceInfo.resourceCache",X.scrh="screenHeight",X.scrw="screenWidth",X.st="serverTimeMs",X.ssdm="shellStartupDurationMs",X.br_trs="tvInfo.bedrockTriggerState",X.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",
X.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",X.label="tvInfo.label",X.is_mdx="tvInfo.isMdx",X.preloaded="tvInfo.isPreloaded",X.aac_type="tvInfo.authAccessCredentialType",X.upg_player_vis="playerInfo.visibilityState",X.query="unpluggedInfo.query",X.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",X.yt_vst="videoStreamType",X.vph="viewportHeight",X.vpw="viewportWidth",X.yt_vis="isVisible",X.rcl="mwebInfo.responseContentLength",X.GetSettings_rid="requestIds",X.GetTrending_rid="requestIds",
X.GetMusicSearchSuggestions_rid="requestIds",X.REQUEST_ID="requestIds",X),Su="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Tu={},Uu=(Tu.ccs="CANARY_STATE_",Tu.mver="MEASUREMENT_VERSION_",Tu.pis="PLAYER_INITIALIZED_STATE_",
Tu.yt_pt="LATENCY_PLAYER_",Tu.pa="LATENCY_ACTION_",Tu.ctop="TOP_ENTITY_TYPE_",Tu.yt_vst="VIDEO_STREAM_TYPE_",Tu),Vu="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Wu(a,b){var c=Lu();if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Ru){c=Ru[a];0<=db(Su,c)&&(b=!!b);a in Uu&&"string"===typeof b&&(b=Uu[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Cu({},d)}0<=db(Vu,a)||$s(new U("Unknown label logged with GEL CSI",a))}
;function Xu(a,b){qp.call(this,1,arguments);this.timer=b}
x(Xu,qp);var Yu=new rp("aft-recorded",Xu);var Zu=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Zu);function $u(){this.h=0}
function av(){$u.h||($u.h=new $u);return $u.h}
$u.prototype.tick=function(a,b,c,d){bv(this,"tick_"+a+"_"+b)||wn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
$u.prototype.info=function(a,b,c){var d=Object.keys(a).join("");bv(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,wn("latencyActionInfo",a,{cttAuthInfo:c}))};
$u.prototype.jspbInfo=function(){};
$u.prototype.span=function(a,b,c){var d=Object.keys(a).join("");bv(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,wn("latencyActionSpan",a,{cttAuthInfo:c}))};
function bv(a,b){Zu[b]=Zu[b]||{count:0};var c=Zu[b];c.count++;c.time=V();a.h||(a.h=Gm(function(){var d=V(),e;for(e in Zu)Zu[e]&&6E4<d-Zu[e].time&&delete Zu[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||$s(c)),!0):!1}
;var cv=window;function dv(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function ev(){var a;if(R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Z?void 0:null==(a=Z.getEntriesByType)?void 0:null==(b=a.call(Z,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=fv(e.requestStart),e.responseEnd=fv(e.responseEnd),e.redirectStart=fv(e.redirectStart),e.redirectEnd=fv(e.redirectEnd),e.domainLookupEnd=fv(e.domainLookupEnd),e.connectStart=fv(e.connectStart),e.connectEnd=
fv(e.connectEnd),e.responseStart=fv(e.responseStart),e.secureConnectionStart=fv(e.secureConnectionStart),e.domainLookupStart=fv(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=Z.timing;return a}
function fv(a){return Math.round(gv()+a)}
function gv(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=cv.performance||cv.mozPerformance||cv.msPerformance||cv.webkitPerformance||new dv;var hv=!1,iv=!1,jv={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Va(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||bb,Z);function kv(a,b){if(!R("web_csi_action_sampling_enabled")||!Hu(b).actionDisabled){var c=Pu(b||"");Cu(c.info,a);a.loadType&&(c=a.loadType,Ju(b).loadType=c);Cu(Mu(b),a);c=Nu(b);b=Hu(b).cttAuthInfo;av().info(a,c,b)}}
function lv(){var a,b,c,d;return(null!=(d=null==Kr().resolve(new Er(fp))?void 0:null==(a=gp())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function mv(a,b,c){if(!R("web_csi_action_sampling_enabled")||!Hu(c).actionDisabled){var d=Nu(c),e;if(e=R("web_csi_debug_sample_enabled")&&d){(null==Kr().resolve(new Er(fp))?0:gp())&&!iv&&(iv=!0,mv("gcfl",V(),c));var f,g,h;e=(null==Kr().resolve(new Er(fp))?void 0:null==(f=gp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=lv();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+
d.charCodeAt(g),g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;Hu(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,kv(f,c));Hu(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Z.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Z.mark(e)));e=Pu(c||"");e.tick[a]=b||V();if(e.callback&&e.callback[a])for(e=w(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Lu(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Ku(c);e=b||V();R("log_repeated_ytcsi_ticks")?a in f||
(f[a]=e):f[a]=e;f=Hu(c).cttAuthInfo;"_start"===a?(a=av(),bv(a,"baseline_"+d)||wn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):av().tick(a,d,b,f);nv(c);return e}}}
function ov(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=dr+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function pv(a){function b(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;"number"===typeof h&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
var c={};a=w(Object.entries(a));for(var d=a.next();!d.done;d=a.next()){var e=w(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":b(c,d,e);break;case "GetGuide_rid":b(c,d,e);break;case "GetHome_rid":b(c,d,e);break;case "GetPlayer_rid":b(c,d,e);break;case "GetSearch_rid":b(c,d,e);break;case "GetSettings_rid":b(c,d,e);break;case "GetTrending_rid":b(c,d,e);break;case "GetWatchNext_rid":b(c,d,e);break;case "yt_red":c.isRedSubscriber=!!e;break;case "yt_ad":c.isMonetized=!!e}}return c}
function qv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);si(window)&&a.setAttribute("nonce",si(window));return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=gv(),mv("rsf_"+b,c+Math.round(a.fetchStart)),mv("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function rv(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=fb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=hb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(mv("wffs",fv(b.startTime)),mv("wffe",fv(b.responseEnd)))}
function sv(a){var b=tv("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=tv(b[d],a);if(e)return e}return NaN}
function tv(a,b){if(a=Ku(b)[a])return"number"===typeof a?a:a[a.length-1]}
function nv(a){var b=tv("_start",a),c=sv(a);b&&c&&!hv&&(wp(Yu,new Xu(Math.round(c-b),a)),hv=!0)}
function uv(a,b){for(var c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!uv(a[d],b[d]))return!1;return!0}
function vv(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=ib(a,function(b){return"first-paint"===b.name}))return fv(a.startTime)}a=Z.timing;
return a.ye?Math.max(0,a.ye):0}
;function wv(a,b){kl(function(){Pu("").info.actionType=a;b&&gl("TIMING_AFT_KEYS",b);gl("TIMING_ACTION",a);var c=P("TIMING_INFO",{});if(R("csi_config_handling_infra"))c=pv(c),0<Object.keys(c).length&&kv(c);else for(var d in c)if(c.hasOwnProperty(d)){var e=d,f=c[d];if(null!==f){if("yt_lt"===e){var g="string"===typeof f?f:""+f;Ju().loadType=g}(e=Wu(e,f))&&kv(e,void 0,void 0)}}c={isNavigation:!0,actionType:Qu[P("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(d=P("PREVIOUS_ACTION"))c.previousAction=Qu[d]||
"LATENCY_ACTION_UNKNOWN";if(d=P("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=P("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=rt())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=ov();if(1===d||-1===d)c.isVisible=!0;Ju();Iu();c.loadType="cold";d=Iu();e=ev();f=gv();g=P("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!R("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(mv("srt",e.responseStart),1!==d.prerender&&mv("_start",f,void 0));d=vv();0<d&&mv("fpt",d);d=ev();d.isPerformanceNavigationTiming&&kv({performanceNavigationTiming:!0},
void 0);mv("nreqs",d.requestStart,void 0);mv("nress",d.responseStart,void 0);mv("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(mv("nrs",d.redirectStart,void 0),mv("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(mv("ndnss",d.domainLookupStart,void 0),mv("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(mv("ntcps",d.connectStart,void 0),mv("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=gv()&&0<d.connectEnd-d.secureConnectionStart&&(mv("nstcps",
d.secureConnectionStart,void 0),mv("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&rv();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in jv)jv.hasOwnProperty(h)&&(e=jv[h],qv(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=w(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});kv(c);h=Iu();c=Lu();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);d=c.preLoggedGelInfos;c=Mu();e=void 0;for(f=0;f<d.length;f++)if(g=d[f],g.loadType){e=g.loadType;break}if("cold"===
Ju().loadType&&("cold"===h.yt_lt||"cold"===c.loadType||"cold"===e)){e=Ku();f=Lu();f=f.gelTicks?f.gelTicks:f.gelTicks={};for(var k in e)if(!(k in f))if("number"===typeof e[k])mv(k,tv(k));else if(R("log_repeated_ytcsi_ticks")){g=w(e[k]);for(var l=g.next();!l.done;l=g.next())l=l.value,mv(k.slice(1),l)}k={};e=!1;d=w(d);for(f=d.next();!f.done;f=d.next())e=f.value,Cu(c,e),Cu(k,e),e=!0;d=w(Object.keys(h));for(f=d.next();!f.done;f=d.next())f=f.value,(f=Wu(f,h[f]))&&!uv(Mu(),f)&&(Cu(c,f),Cu(k,f),e=!0);e&&
kv(k)}D("ytglobal.timingready_",!0);k=P("TIMING_ACTION");E("ytglobal.timingready_")&&k&&xv()&&sv()&&nv()})()}
function yv(a,b,c){kl(kv)(a,b,void 0===c?!1:c)}
function zv(a,b,c){return kl(mv)(a,b,c)}
function xv(){return kl(function(){return"_start"in Ku()})()}
function Av(){kl(function(){var a=Nu();requestAnimationFrame(function(){setTimeout(function(){a===Nu()&&zv("ol",void 0,void 0)},0)})})()}
var Bv=window;Bv.ytcsi&&(Bv.ytcsi.infoGel=yv,Bv.ytcsi.tick=zv);var Cv="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),Dv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Ev(a,b,c,d){this.u=a;this.aa=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Pb||(a.Pb={});a.Pb=Object.assign({},gu,a.Pb)}
function Fv(a,b,c,d){if(void 0!==Ev.h){if(d=Ev.h,a=[a!==d.u,b!==d.aa,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else Ev.h=new Ev(a,b,c,d)}
function Gv(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?im:c;var d=Zt(b,a.u);if(!d)return Ud(new U("Error: No request builder found for command.",b));var e=d.u(b,void 0,c);return e?(Bu(e.input),new Pd(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.l.Ze){var n=e.config,p;n=null==n?void 0:null==(p=n.Ub)?void 0:p.sessionIndex;p=hm(0,{sessionIndex:n});k=Object.assign({},Hv(h),p);return l.B(2)}return l.yield(Iv(e.config,
h),3)}2!=l.h&&(k=l.i);f(Jv(a,e,k));l.h=0})})):Ud(new U("Error: Failed to build request for command.",b))}
function Kv(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.sequenceMetaData)?0:d.skipProcessing)&&a.j){d=w(Cv);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Jv(a,b,c){var d,e,f,g,h,k,l,n,p,t,r,v,y,z,H,L,I,T,J,ha,M,Y,ea,na,oa,ub,Pc,Qc,ee;return A(function(ka){switch(ka.h){case 1:ka.B(2);break;case 3:if((d=ka.i)&&!d.isExpired())return ka.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Oa)?0:f.context)){ka.B(4);break}g=b.Oa.context;ka.B(5);break;case 5:h=w([]),k=h.next();case 7:if(k.done){ka.B(4);break}l=k.value;return ka.yield(l.fg(g),8);case 8:k=h.next();ka.B(7);break;case 4:if(null==(n=a.i)||!n.kg(b.input,b.Oa)){ka.B(11);
break}return ka.yield(a.i.Yf(b.input,b.Oa),12);case 12:return p=ka.i,R("kevlar_process_local_innertube_responses_killswitch")||Kv(a,p,b),ka.return(p);case 11:return(v=null==(r=b.config)?void 0:r.hg)&&a.h.has(v)&&R("web_memoize_inflight_requests")?t=a.h.get(v):(y=JSON.stringify(b.Oa),L=null!=(H=null==(z=b.ib)?void 0:z.headers)?H:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},L,c)}),I=Object.assign({},b.ib),"POST"===b.ib.method&&(I=Object.assign({},I,{body:y})),(null==(T=b.config)?0:T.Ie)&&
zv(b.config.Ie),J=function(){return a.aa.fetch(b.input,I,b.config)},t=J(),v&&a.h.set(v,t)),ka.yield(t,13);
case 13:if((ha=ka.i)&&"error"in ha&&(null==(M=ha)?0:null==(Y=M.error)?0:Y.details))for(ea=ha.error.details,na=w(ea),oa=na.next();!oa.done;oa=na.next())ub=oa.value,(Pc=ub["@type"])&&-1<Dv.indexOf(Pc)&&(delete ub["@type"],ha=ub);v&&a.h.has(v)&&a.h.delete(v);(null==(Qc=b.config)?0:Qc.Je)&&zv(b.config.Je);if(ha||null==(ee=a.i)||!ee.Qf(b.input,b.Oa)){ka.B(14);break}return ka.yield(a.i.Xf(b.input,b.Oa),15);case 15:ha=ka.i;case 14:return Kv(a,ha,b),ka.return(ha||void 0)}})}
function Iv(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Ub)?void 0:d.sessionIndex;var h=g.yield;var k=hm(0,{sessionIndex:e});if(!(k instanceof Pd)){var l=new Pd(bb);Qd(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Hv(b),f)))})}
function Hv(a){var b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));P("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);P("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=P("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&
(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Lv=new Dr("INNERTUBE_TRANSPORT_TOKEN");var Mv=["share/get_web_player_share_panel"],Nv=["feedback"],Ov=["notification/modify_channel_preference"],Pv=["browse/edit_playlist"],Qv=["subscription/subscribe"],Rv=["subscription/unsubscribe"];function Sv(){}
x(Sv,du);Sv.prototype.j=function(){return Qv};
Sv.prototype.h=function(a){return hs(a,Yk)||void 0};
Sv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(Sv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Tv(){}
x(Tv,du);Tv.prototype.j=function(){return Rv};
Tv.prototype.h=function(a){return hs(a,Xk)||void 0};
Tv.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(Tv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Uv(){}
x(Uv,du);Uv.prototype.j=function(){return Nv};
Uv.prototype.h=function(a){return hs(a,Sk)||void 0};
Uv.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(Uv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Vv(){}
x(Vv,du);Vv.prototype.j=function(){return Ov};
Vv.prototype.h=function(a){return hs(a,Wk)||void 0};
Vv.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Wv(){}
x(Wv,du);Wv.prototype.j=function(){return Pv};
Wv.prototype.h=function(a){return hs(a,Vk)||void 0};
Wv.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Xv(){}
x(Xv,du);Xv.prototype.j=function(){return Mv};
Xv.prototype.h=function(a){return hs(a,Uk)};
Xv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Yv=new Dr("NETWORK_SLI_TOKEN");function Zv(a){this.h=a}
Zv.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){d.h&&(e=$b(ac(5,nc(a,"key")))||"/UNKNOWN_PATH",d.h.start(e));f=b;R("wug_networking_gzip_request")&&(f=Yp(b));g=new window.Request(a,f);return h.return(fetch(g).then(function(k){return d.handleResponse(k,c)}).catch(function(k){$s(k)}))})};
Zv.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){return(null==b?0:b.se)&&a.ok?vg(b.se,d):JSON.parse(d.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Tf(),c=c.then(function(d){$s(new U("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
Zv[Cr]=[new Er(Yv)];var $v=new Dr("NETWORK_MANAGER_TOKEN");var aw;function bw(){var a,b,c;return A(function(d){if(1==d.h)return a=Kr().resolve(Lv),a?d.yield(Gv(a),2):($s(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return $s(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Rf;return d.return(c)}$s(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var cw=C.caches,dw;function ew(a){var b=a.indexOf(":");return-1===b?{rd:a}:{rd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function fw(){return A(function(a){if(void 0!==dw)return a.return(dw);dw=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(cw.open("test-only"),4);case 4:return d.yield(cw.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(dw)})}
function gw(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(fw(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(cw.keys(),3)}c=k.i;d=w(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=ew(f),h=g.datasyncId,!h||a.includes(h)||b.push(cw.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function hw(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(fw(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=Em("cache contains other");return h.yield(cw.keys(),3)}b=h.i;c=w(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=ew(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function iw(){bw().then(function(a){a&&(Lo(a),gw(a),yu(a))})}
function jw(){var a=new Qq;Ii.na(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(R("ytidb_clear_optimizations_killswitch")){f.B(2);break}b=Em("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Lo(g);gw(g);yu(g);return f.return()}c=zu();return f.yield(hw(),3);case 3:return d=f.i,f.yield(Mo(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.wa()?iw():a.h.add("publicytnetworkstatus-online",iw,!0,void 0,void 0),f.h=0}})})}
;var oi=ia(["data-"]);function kw(a){a&&(a.dataset?a.dataset[lw()]="true":ni(a))}
function mw(a){return a?a.dataset?a.dataset[lw()]:a.getAttribute("data-loaded"):null}
var nw={};function lw(){return nw.loaded||(nw.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;var ow=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,pw=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function qw(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ow,""),c=c.replace(pw,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else rw(a,b,c)}
function rw(a,b,c){c=void 0===c?null:c;var d=sw(a),e=document.getElementById(d),f=e&&mw(e),g=e&&!f;f?b&&b():(b&&(f=wr(d,b),b=""+Qa(b),tw[b]=f),g||(e=uw(a,d,function(){if(!mw(e)){kw(e);zr(d);var h=Wa(Ar,d);El(h,0)}},c)))}
function uw(a,b,c,d){d=void 0===d?null:d;var e=Bd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);vi(e,Jk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function vw(a){a=sw(a);var b=document.getElementById(a);b&&(Ar(a),b.parentNode.removeChild(b))}
function ww(a,b){a&&b&&(a=""+Qa(b),(a=tw[a])&&yr(a))}
function sw(a){var b=document.createElement("a");ki(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Yb(a)}
var tw={};var xw=[],yw=!1;function zw(){if(!R("disable_biscotti_fetch_for_ad_blocker_detection")&&!R("disable_biscotti_fetch_entirely_for_all_web_clients")&&Ft()){var a=P("PLAYER_VARS",{});if("1"!=qb(a)&&!Gt(a)){var b=function(){yw=!0;"google_ad_status"in window?gl("DCLKSTAT",1):gl("DCLKSTAT",2)};
try{qw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}xw.push(Ii.na(function(){if(!(yw||"google_ad_status"in window)){try{ww("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}yw=!0;gl("DCLKSTAT",3)}},5E3))}}}
function Aw(){var a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;function Bw(a){Tr.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.D},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
x(Bw,Tr);Bw.prototype.D=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Bw.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Bw.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Bw.prototype.i=function(){this.h=new Map};function Cw(a){Tr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
x(Cw,Tr);Cw.prototype.i=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Cw.prototype.h=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Cw.prototype.u=function(a,b){a(null==b?void 0:b.event)};
Cw.prototype.m=function(a,b){a(null==b?void 0:b.event)};function Dw(){this.l=new Bw;this.u=new Cw}
Dw.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.u.install(c)})};function Ew(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
Ew.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=rt(void 0===c?0:c)){a=this.client;d=new kt({trackingParams:d});var e=void 0;if(R("no_client_ve_attach_unless_shown")){var f=tu(d,c);pu.set(f,!0);uu(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=su({cttAuthInfo:tt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?vu("visualElementGestured",f,d):a?Ss("visualElementGestured",d,a,f):wn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Ew.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new kt({trackingParams:a}),b,void 0===c?0:c)};
Ew.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=rt(d);a||(a=(a=ot(void 0===d?0:d))?new kt({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=su({cttAuthInfo:tt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?vu("visualElementStateChanged",d,b):a?Ss("visualElementStateChanged",b,a,d):wn("visualElementStateChanged",b,d))}};
function Fw(a,b){if(void 0===b)for(var c=qt(),d=0;d<c.length;d++)void 0!==c[d]&&Fw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&ru(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Gw(){Dw.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));R("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
x(Gw,Dw);Gw.prototype.j=function(){wn("finalPayload",{csn:rt()})};
Gw.prototype.h=function(){dt(et)};
Gw.prototype.i=function(){var a=Fw;Ew.h||(Ew.h=new Ew);a(Ew.h)};function Hw(){}
function Iw(){var a=E("ytglobal.storage_");a||(a=new Hw,D("ytglobal.storage_",a));return a}
Hw.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Jw()):d.return()})};
function Jw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Hw);function un(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=S("ytidb_transaction_ended_event_rate_limit_session",.2)}
un.prototype.Kb=function(a){this.handleError(a)};
un.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Kw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=S("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Kw(a,b){Iw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Lw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Lw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Lw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Mw(a,b,c){G.call(this);var d=this;c=c||P("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.A=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=db(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.A)}
x(Mw,G);Mw.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){ml(d)}}};
Mw.prototype.S=function(){window.removeEventListener("message",this.A);G.prototype.S.call(this)};function Nw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Mw(!!P("WIDGET_ID_ENFORCE")),b=this.Fe.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=P("WIDGET_ID"))this.h.sessionId=a}
m=Nw.prototype;m.Fe=function(a,b,c){"addEventListener"===a&&b?this.Dc(b[0],c):this.Vc(a,b,c)};
m.Vc=function(){};
m.wc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Dc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.wc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ce=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.zc());this.sendMessage("onReady");eb(this.i,this.zd,this);this.i=[]};
m.zc=function(){return null};
function Ow(a,b){a.sendMessage("infoDelivery",b)}
m.zd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.zd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Pw={},Qw=(Pw["api.invalidparam"]=2,Pw.auth=150,Pw["drm.auth"]=150,Pw["heartbeat.net"]=150,Pw["heartbeat.servererror"]=150,Pw["heartbeat.stop"]=150,Pw["html5.unsupportedads"]=5,Pw["fmt.noneavailable"]=5,Pw["fmt.decode"]=5,Pw["fmt.unplayable"]=5,Pw["html5.missingapi"]=5,Pw["html5.unsupportedlive"]=5,Pw["drm.unavailable"]=5,Pw["mrm.blocked"]=151,Pw);var Rw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Sw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Tw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=w(Rw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Uw(a,b,c,d){if(Pa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Vw(a){Nw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Re.bind(this));this.addEventListener("onVolumeChange",this.Se.bind(this));this.addEventListener("onApiChange",this.Me.bind(this));this.addEventListener("onPlaybackQualityChange",this.Oe.bind(this));this.addEventListener("onPlaybackRateChange",this.Pe.bind(this));this.addEventListener("onStateChange",this.Qe.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Te.bind(this))}
x(Vw,Nw);m=Vw.prototype;
m.Vc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Sw(a)){var d=b;if(Pa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Tw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Tw(e);break;case "loadPlaylist":case "cuePlaylist":e=Uw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Sw(a)&&Ow(this,this.zc())}};
m.Dc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Nw.prototype.Dc.call(this,a,b)};
m.wc=function(a,b){var c=this,d=Nw.prototype.wc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.h,b=this.ce.bind(this);a.h=b;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var c=void 0===c?5:c;this.errorCode=a?Qw[a]||c:c;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.zc=function(){if(!this.api)return null;var a=this.api.getApiInterface();jb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Qe=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Ow(this,a)};
m.Oe=function(a){Ow(this,{playbackQuality:a})};
m.Pe=function(a){Ow(this,{playbackRate:a})};
m.Me=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Se=function(){Ow(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Re=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Ow(this,a)};
m.Te=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Ow(this,a)};
m.dispose=function(){Nw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Ww(a){G.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.vd,this)}
x(Ww,G);m=Ww.prototype;m.start=function(){this.started||this.Z()||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,b)};
m.vd=function(a,b,c){if(this.started&&!this.Z()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Xw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Yw(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Ne.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Ne=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,this.yc(a,b))};
m.yc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.S=function(){this.connection.unsubscribe("command",this.vd,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);G.prototype.S.call(this)};function Zw(a,b){Ww.call(this,b);this.api=a;this.start()}
x(Zw,Ww);Zw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Zw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Xw(a,b){switch(a){case "loadVideoById":return a=Tw(b),[a];case "cueVideoById":return a=Tw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Uw(b),[a];case "cuePlaylist":return a=Uw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Yw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Zw.prototype.yc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Ww.prototype.yc.call(this,a,b)};
Zw.prototype.S=function(){Ww.prototype.S.call(this);delete this.api};function $w(a){a=void 0===a?!1:a;G.call(this);this.h=new K(a);uc(this,this.h)}
Ya($w,G);$w.prototype.subscribe=function(a,b,c){return this.Z()?0:this.h.subscribe(a,b,c)};
$w.prototype.unsubscribe=function(a,b,c){return this.Z()?!1:this.h.unsubscribe(a,b,c)};
$w.prototype.l=function(a,b){this.Z()||this.h.Ya.apply(this.h,arguments)};function ax(a,b,c){$w.call(this);this.j=a;this.i=b;this.id=c}
x(ax,$w);ax.prototype.jb=function(a,b){this.Z()||this.j.jb(this.i,this.id,a,b)};
ax.prototype.S=function(){this.i=this.j=null;$w.prototype.S.call(this)};function bx(a,b,c){G.call(this);this.h=a;this.origin=c;this.i=kr(window,"message",this.j.bind(this));this.connection=new ax(this,a,b);uc(this,this.connection)}
x(bx,G);bx.prototype.jb=function(a,b,c,d){this.Z()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
bx.prototype.j=function(a){if(!this.Z()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.Z()||c.l("command",b.command,b.data,a.origin)}}}};
bx.prototype.S=function(){lr(this.i);this.h=null;G.prototype.S.call(this)};function cx(){this.state=1;this.h=null}
m=cx.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(f=(d=yb())?d.createScript(f):f,d=new Xb,d.td=f,f=d):f=null,d=f):d=null}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=Ik(a.interpreterSafeUrl).toString());dx(this,d,e,a.program,b,c)}else $s(Error("Cannot initialize botguard without program"))};
function dx(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,qw(c,function(){window[g]?ex(a,d,g,e):(a.state=3,vw(c),$s(new U("Unable to load Botguard","from "+c)))},f)):b?(f=Bd("SCRIPT"),b instanceof Xb?ui(f,b):f.textContent=b,f.nonce=si(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?ex(a,d,g,e):(a.state=4,$s(new U("Unable to load Botguard from JS")))):$s(new U("Unable to load VM; no url or JS provided"))}
m.isLoading=function(){return 2===this.state};
function ex(a,b,c,d){a.state=5;try{var e=new Zh({program:b,he:c,Ge:R("att_web_record_metrics")});e.We.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&$s(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Id({dd:a}):null};
m.dispose=function(){this.Qc(null);this.state=8};
m.Tc=function(){return!!this.h};
m.Id=function(a){return this.h.Cd(a)};
m.Qc=function(a){sc(this.h);this.h=a};function fx(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function gx(){cx.apply(this,arguments)}
x(gx,cx);gx.prototype.Qc=function(a){var b;null==(b=fx())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Cd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
gx.prototype.Tc=function(){return!!fx()};
gx.prototype.Id=function(a){return fx().bgvmc(a)};var hx=new gx;function ix(){return hx.Tc()}
function jx(a){a=void 0===a?{}:a;return hx.invoke(a)}
;function kx(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||sb(b);this.assets=a.assets||{};this.attrs=a.attrs||sb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
kx.prototype.clone=function(){var a=new kx,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Na(c)?a[b]=sb(c):a[b]=c}return a};var lx=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function mx(a){a=a||"";if(window.spf){var b=a.match(lx);spf.style.load(a,b?b[1]:"",void 0)}else nx(a)}
function nx(a){var b=ox(a),c=document.getElementById(b),d=c&&mw(c);d||c&&!d||(c=px(a,b,function(){if(!mw(c)){kw(c);zr(b);var e=Wa(Ar,b);El(e,0)}}))}
function px(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Jk(a);ri(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function ox(a){var b=Bd("A");ki(b,new Hb(a,Ib));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Yb(a)}
;function qx(a,b,c,d,e){G.call(this);var f=this;this.D=b;this.webPlayerContextConfig=d;this.pc=e;this.Ga=!1;this.api={};this.fa=this.A=null;this.T=new K;this.h={};this.ba=this.ha=this.elementId=this.Za=this.config=null;this.X=!1;this.j=this.l=null;this.ta={};this.qc=["onReady"];this.lastError=null;this.Sb=NaN;this.K={};this.ea=0;this.i=this.m=a;uc(this,this.T);rx(this);c?this.ea=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(sx(this),tx(this))}
x(qx,G);m=qx.prototype;m.getId=function(){return this.D};
m.loadNewVideoConfig=function(a){if(!this.Z()){this.ea&&(clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof kx||(b=new kx(b));this.config=b;this.setConfig(a);tx(this);this.isReady()&&ux(this)}};
function sx(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.D,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.D:a.config.attrs.id=a.D);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Za=a;this.config=vx(a);sx(this);if(!this.ha){var b;this.ha=wx(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Ci(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Ci(Number(a)||a))};
function ux(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function xx(a){var b=!0,c=yx(a);c&&a.config&&(b=c.dataset.version===zx(a));return b&&!!E("yt.player.Application.create")}
function tx(a){if(!a.Z()&&!a.X){var b=xx(a);if(b&&"html5"===(yx(a)?"html5":null))a.ba="html5",a.isReady()||Ax(a);else if(Bx(a),a.ba="html5",b&&a.j&&a.m)a.m.appendChild(a.j),Ax(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.l=function(){c=!0;var d=Cx(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?vx(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.pc);Ax(a)};
a.X=!0;b?a.l():(b=zx(a),Cx(a,"web_player_proxy_new_scriptloader")?Dx(b,a.l):qw(zx(a),a.l),(b=Ex(a))&&(Cx(a,"web_player_proxy_new_styleloader")?Fx(b):mx(b)),Gx(a)&&!c&&D("yt.player.Application.create",null))}}}
function yx(a){var b=Ad(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Ax(a){if(!a.Z()){var b=yx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.X=!1;if(!Cx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Hx(a)}else a.Sb=setTimeout(function(){Ax(a)},50)}}
function Hx(a){rx(a);a.Ga=!0;var b=yx(a);if(b){a.A=Ix(a,b,"addEventListener");a.fa=Ix(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Ix(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.A&&a.A(g,a.h[g]);ux(a);a.ha&&a.ha(a.api);a.T.Ya("onReady",a.api)}
function Ix(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if("sendAbandonmentPing"!==c)throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.D}),e.level="WARNING",e;}}}
function rx(a){a.Ga=!1;if(a.fa)for(var b in a.h)a.h.hasOwnProperty(b)&&a.fa(b,a.h[b]);for(var c in a.K)a.K.hasOwnProperty(c)&&clearTimeout(Number(c));a.K={};a.A=null;a.fa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Za};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Ga};
m.addEventListener=function(a,b){var c=this,d=wx(this,b);d&&(0<=db(this.qc,a)||this.h[a]||(b=Jx(this,a),this.A&&this.A(a,b)),this.T.subscribe(a,d),"onReady"===a&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.Z()||(b=wx(this,b))&&this.T.unsubscribe(a,b)};
function wx(a,b){var c=b;if("string"===typeof b){if(a.ta[b])return a.ta[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.ta[b]=c}return c?c:null}
function Jx(a,b){function c(d){var e=setTimeout(function(){if(!a.Z()){try{a.T.Ya(b,null!=d?d:void 0)}catch(h){var f=new U("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.D,data:d});f.level="WARNING";throw f;}f=a.K;var g=String(e);g in f&&delete f[g]}},0);
pb(a.K,String(e))}
return a.h[b]=c}
m.getPlayerType=function(){return this.ba||(yx(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function Bx(a){a.cancel();rx(a);a.ba=null;a.config&&(a.config.loaded=!1);var b=yx(a);b&&(xx(a)||!Gx(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){if(this.l)if(Cx(this,"web_player_proxy_new_scriptloader")){var a=zx(this),b=this.l;a&&b&&(a=document.getElementById("ytp-"+a))&&a.removeEventListener("load",b)}else ww(zx(this),this.l);clearTimeout(this.Sb);this.X=!1};
m.S=function(){Bx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.ta=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Za=this.config=this.api=null;delete this.m;delete this.i;G.prototype.S.call(this)};
function Gx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function zx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Ex(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Cx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function vx(a){for(var b={},c=w(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?sb(e):e}return b}
function Fx(a){var b="ytp-"+a;if(!document.getElementById(b)){var c=document.createElement("link");c.id=b;a=Jk(a);ri(c,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(c)}}
function Dx(a,b){var c="ytp-"+a,d=document.getElementById(c);if(d)d.dataset.loaded?b():d.addEventListener("load",function(){b()});
else{var e=document.createElement("script");e.id=c;e.addEventListener("load",function(){e.dataset.loaded="true";b()});
a=Jk(a);vi(e,a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild)}}
;var Kx={},Lx="player_uid_"+(1E9*Math.random()>>>0);function Mx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Ad(c):c;var e=Lx+"_"+Qa(c),f=Kx[e];if(f&&d)return Nx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new qx(c,e,a,b,void 0);Kx[e]=f;f.addOnDisposeCallback(function(){delete Kx[f.getId()]});
return f.api}
function Nx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Ox=null,Px=null,Qx=null;
function Rx(){Av();var a=sm(),b=wm(119),c=1<window.devicePixelRatio;if(document.body&&Si(document.body,"exp-invert-logo"))if(c&&!Si(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Si(d,"inverted-hdpi")){var e=Qi(d);Ri(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Si(document.body,"inverted-hdpi")&&Ti();if(b!=c){b="f"+(Math.floor(119/31)+1);d=xm(b)||0;d=c?d|67108864:d&-67108865;0===d?delete pm[b]:(c=d.toString(16),pm[b]=c.toString());
c=!0;R("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in pm)pm.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(pm[f])));var f=d.join("&");lm(b,f,63072E3,a.i,c)}}
function Sx(){Tx()}
function Ux(){zv("ep_init_pr");Tx()}
function Tx(){var a=Ox.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Vx(){Ox&&Ox.sendAbandonmentPing&&Ox.sendAbandonmentPing();P("PL_ATT")&&hx.dispose();for(var a=Ii,b=0,c=xw.length;b<c;b++)a.oa(xw[b]);xw.length=0;vw("//static.doubleclick.net/instream/ad_status.js");yw=!1;gl("DCLKSTAT",0);tc(Qx,Px);Ox&&(Ox.removeEventListener("onVideoDataChange",Sx),Ox.destroy())}
;function Wx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&iu(a,b);if(c)return!1;Bu(a);if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=ic(a,e);Bu(a);f=a+f;var h=void 0===h?hi:h;a:if(h=void 0===h?hi:h,f instanceof Hb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof fi&&b.re(f)){h=new Hb(f,Ib);break a}h=void 0}g=g.location;h=ji(h||Jb);void 0!==h&&(g.href=h)}return!0}
;D("yt.setConfig",gl);D("yt.config.set",gl);D("yt.setMsg",vt);D("yt.msgs.set",vt);D("yt.logging.errors.log",Zs);
D("writeEmbed",function(){var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}Pt(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);wv("embed",["ol"]);c=P("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=ul(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&wv("watch",["pbs","pbu","pbp"]);Ox=Mx(a,c);Ox.addEventListener("onVideoDataChange",Sx);Ox.addEventListener("onReady",Ux);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Qx=new Vw(Ox):P("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Px=new bx(window.parent,a,b),Qx=new Zw(Ox,Px.connection));zw();R("ytidb_create_logger_embed_killswitch")||tn();a={};Gw.h||(Gw.h=new Gw);
Gw.h.install((a.flush_logs={callback:function(){Fs()}},a));
ar();R("ytidb_clear_embedded_player")&&Ii.na(function(){var f,g;if(!aw){var h=Kr();Gr(h,{lc:$v,Gd:Zv});var k={cd:{feedbackEndpoint:$t(Uv),modifyChannelNotificationPreferenceEndpoint:$t(Vv),playlistEditEndpoint:$t(Wv),subscribeEndpoint:$t(Sv),unsubscribeEndpoint:$t(Tv),webPlayerShareEntityServiceEndpoint:$t(Xv)}},l=Yt(),n={};l&&(n.client_location=l);void 0===f&&(f=gm());void 0===g&&(g=h.resolve($v));Fv(k,g,f,n);Gr(h,{lc:Lv,Hd:Ev.h});aw=h.resolve(Lv)}jw()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||ix);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||jx);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Aw);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Wx);D("yt.util.activity.init",E("yt.util.activity.init")||or);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||rr);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||pr);window.addEventListener("load",kl(function(){Rx()}));
window.addEventListener("pageshow",kl(function(a){a.persisted||Rx()}));
window.addEventListener("pagehide",kl(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Vx():a.persisted||Vx()}));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=hl("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new U(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Zs(e):$s(e))};
fe=at;window.addEventListener("unhandledrejection",function(a){at(a.reason)});
eb(P("ERRORS")||[],function(a){Zs.apply(null,a)});
gl("ERRORS",[]);R("embeds_web_enable_scheduler_to_player_binary")&&kn();}).call(this);
