/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{93:function(t,e,r){"use strict";function n(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function o(t,e){return e instanceof t||e&&(e.name===t.name||e._name===t._name)}function c(a,b){for(var t in b)a[t]=b[t];return a}var f={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,n=e.children,o=e.parent,data=e.data;data.routerView=!0;for(var f=o.$createElement,l=r.name,d=o.$route,v=o._routerViewCache||(o._routerViewCache={}),y=0,m=!1;o&&o._routerRoot!==o;){var w=o.$vnode?o.$vnode.data:{};w.routerView&&y++,w.keepAlive&&o._directInactive&&o._inactive&&(m=!0),o=o.$parent}if(data.routerViewDepth=y,m){var x=v[l],k=x&&x.component;return k?(x.configProps&&h(k,data,x.route,x.configProps),f(k,data,n)):f()}var R=d.matched[y],component=R&&R.components[l];if(!R||!component)return v[l]=null,f();v[l]={component:component},data.registerRouteInstance=function(t,e){var r=R.instances[l];(e&&r!==t||!e&&r===t)&&(R.instances[l]=e)},(data.hook||(data.hook={})).prepatch=function(t,e){R.instances[l]=e.componentInstance},data.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==R.instances[l]&&(R.instances[l]=t.componentInstance)};var E=R.props&&R.props[l];return E&&(c(v[l],{route:d,configProps:E}),h(component,data,d,E)),f(component,data,n)}};function h(component,data,t,e){var r=data.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}(t,e);if(r){r=data.props=c({},r);var n=data.attrs=data.attrs||{};for(var o in r)component.props&&o in component.props||(n[o]=r[o],delete r[o])}}var l=/[!'()*]/g,d=function(t){return"%"+t.charCodeAt(0).toString(16)},v=/%2C/g,y=function(t){return encodeURIComponent(t).replace(l,d).replace(v,",")},m=decodeURIComponent;function w(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(param){var t=param.replace(/\+/g," ").split("="),r=m(t.shift()),n=t.length>0?m(t.join("=")):null;void 0===e[r]?e[r]=n:Array.isArray(e[r])?e[r].push(n):e[r]=[e[r],n]})),e):e}function x(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return y(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(y(e)):n.push(y(e)+"="+y(t)))})),n.join("&")}return y(e)+"="+y(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var k=/\/?$/;function R(t,e,r,n){var o=n&&n.options.stringifyQuery,c=e.query||{};try{c=E(c)}catch(t){}var f={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:c,params:e.params||{},fullPath:A(e,o),matched:t?_(t):[]};return r&&(f.redirectedFrom=A(r,o)),Object.freeze(f)}function E(t){if(Array.isArray(t))return t.map(E);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=E(t[r]);return e}return t}var O=R(null,{path:"/"});function _(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function A(t,e){var path=t.path,r=t.query;void 0===r&&(r={});var n=t.hash;return void 0===n&&(n=""),(path||"/")+(e||x)(r)+n}function j(a,b){return b===O?a===b:!!b&&(a.path&&b.path?a.path.replace(k,"")===b.path.replace(k,"")&&a.hash===b.hash&&C(a.query,b.query):!(!a.name||!b.name)&&(a.name===b.name&&a.hash===b.hash&&C(a.query,b.query)&&C(a.params,b.params)))}function C(a,b){if(void 0===a&&(a={}),void 0===b&&(b={}),!a||!b)return a===b;var t=Object.keys(a),e=Object.keys(b);return t.length===e.length&&t.every((function(t){var e=a[t],r=b[t];return"object"==typeof e&&"object"==typeof r?C(e,r):String(e)===String(r)}))}function S(t,base,e){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return base+t;var n=base.split("/");e&&n[n.length-1]||n.pop();for(var o=t.replace(/^\//,"").split("/"),i=0;i<o.length;i++){var c=o[i];".."===c?n.pop():"."!==c&&n.push(c)}return""!==n[0]&&n.unshift(""),n.join("/")}function $(path){return path.replace(/\/\//g,"/")}var T=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},P=Q,L=V,U=function(t,e){return z(V(t,e))},I=z,M=K,B=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function V(t,e){for(var r,n=[],o=0,c=0,path="",f=e&&e.delimiter||"/";null!=(r=B.exec(t));){var h=r[0],l=r[1],d=r.index;if(path+=t.slice(c,d),c=d+h.length,l)path+=l[1];else{var v=t[c],y=r[2],m=r[3],w=r[4],x=r[5],k=r[6],R=r[7];path&&(n.push(path),path="");var E=null!=y&&null!=v&&v!==y,O="+"===k||"*"===k,_="?"===k||"*"===k,A=r[2]||f,pattern=w||x;n.push({name:m||o++,prefix:y||"",delimiter:A,optional:_,repeat:O,partial:E,asterisk:!!R,pattern:pattern?F(pattern):R?".*":"[^"+D(A)+"]+?"})}}return c<t.length&&(path+=t.substr(c)),path&&n.push(path),n}function H(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function z(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(r,n){for(var path="",data=r||{},o=(n||{}).pretty?H:encodeURIComponent,i=0;i<t.length;i++){var c=t[i];if("string"!=typeof c){var f,h=data[c.name];if(null==h){if(c.optional){c.partial&&(path+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(T(h)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var l=0;l<h.length;l++){if(f=o(h[l]),!e[i].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(f)+"`");path+=(0===l?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?encodeURI(h).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):o(h),!e[i].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');path+=c.prefix+f}}else path+=c}return path}}function D(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function F(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function N(t,e){return t.keys=e,t}function J(t){return t.sensitive?"":"i"}function K(t,e,r){T(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,c="",i=0;i<t.length;i++){var f=t[i];if("string"==typeof f)c+=D(f);else{var h=D(f.prefix),l="(?:"+f.pattern+")";e.push(f),f.repeat&&(l+="(?:"+h+l+")*"),c+=l=f.optional?f.partial?h+"("+l+")?":"(?:"+h+"("+l+"))?":h+"("+l+")"}}var d=D(r.delimiter||"/"),v=c.slice(-d.length)===d;return n||(c=(v?c.slice(0,-d.length):c)+"(?:"+d+"(?=$))?"),c+=o?"$":n&&v?"":"(?="+d+"|$)",N(new RegExp("^"+c,J(r)),e)}function Q(path,t,e){return T(t)||(e=t||e,t=[]),e=e||{},path instanceof RegExp?function(path,t){var e=path.source.match(/\((?!\?)/g);if(e)for(var i=0;i<e.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return N(path,t)}(path,t):T(path)?function(path,t,e){for(var r=[],i=0;i<path.length;i++)r.push(Q(path[i],t,e).source);return N(new RegExp("(?:"+r.join("|")+")",J(e)),t)}(path,t,e):function(path,t,e){return K(V(path,e),t,e)}(path,t,e)}P.parse=L,P.compile=U,P.tokensToFunction=I,P.tokensToRegExp=M;var X=Object.create(null);function Y(path,t,e){t=t||{};try{var r=X[path]||(X[path]=P.compile(path));return"string"==typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(t){return""}finally{delete t[0]}}function W(t,e,r,n){var o="string"==typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){var f=(o=c({},t)).params;return f&&"object"==typeof f&&(o.params=c({},f)),o}if(!o.path&&o.params&&e){(o=c({},o))._normalized=!0;var h=c(c({},e.params),o.params);if(e.name)o.name=e.name,o.params=h;else if(e.matched.length){var l=e.matched[e.matched.length-1].path;o.path=Y(l,h,e.path)}else 0;return o}var d=function(path){var t="",e="",r=path.indexOf("#");r>=0&&(t=path.slice(r),path=path.slice(0,r));var n=path.indexOf("?");return n>=0&&(e=path.slice(n+1),path=path.slice(0,n)),{path:path,query:e,hash:t}}(o.path||""),v=e&&e.path||"/",path=d.path?S(d.path,v,r||o.append):v,y=function(t,e,r){void 0===e&&(e={});var n,o=r||w;try{n=o(t||"")}catch(t){n={}}for(var c in e)n[c]=e[c];return n}(d.query,o.query,n&&n.options.parseQuery),m=o.hash||d.hash;return m&&"#"!==m.charAt(0)&&(m="#"+m),{_normalized:!0,path:path,query:y,hash:m}}var G,Z=function(){},tt={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:[String,Array],default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,o=r.resolve(this.to,n,this.append),f=o.location,h=o.route,l=o.href,d={},v=r.options.linkActiveClass,y=r.options.linkExactActiveClass,m=null==v?"router-link-active":v,w=null==y?"router-link-exact-active":y,x=null==this.activeClass?m:this.activeClass,E=null==this.exactActiveClass?w:this.exactActiveClass,O=h.redirectedFrom?R(null,W(h.redirectedFrom),null,r):h;d[E]=j(n,O),d[x]=this.exact?d[E]:function(t,e){return 0===t.path.replace(k,"/").indexOf(e.path.replace(k,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(t.query,e.query)}(n,O);var _=function(t){et(t)&&(e.replace?r.replace(f,Z):r.push(f,Z))},A={click:et};Array.isArray(this.event)?this.event.forEach((function(t){A[t]=_})):A[this.event]=_;var data={class:d},C=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:l,route:h,navigate:_,isActive:d[x],isExactActive:d[E]});if(C){if(1===C.length)return C[0];if(C.length>1||!C.length)return 0===C.length?t():t("span",{},C)}if("a"===this.tag)data.on=A,data.attrs={href:l};else{var a=function t(e){var r;if(e)for(var i=0;i<e.length;i++){if("a"===(r=e[i]).tag)return r;if(r.children&&(r=t(r.children)))return r}}(this.$slots.default);if(a){a.isStatic=!1;var S=a.data=c({},a.data);for(var $ in S.on=S.on||{},S.on){var T=S.on[$];$ in A&&(S.on[$]=Array.isArray(T)?T:[T])}for(var P in A)P in S.on?S.on[P].push(A[P]):S.on[P]=_;(a.data.attrs=c({},a.data.attrs)).href=l}else data.on=A}return t(this.tag,data,this.$slots.default)}};function et(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}var nt="undefined"!=typeof window;function ot(t,e,r,n){var o=e||[],c=r||Object.create(null),f=n||Object.create(null);t.forEach((function(t){!function t(e,r,n,o,c,f){var path=o.path,h=o.name;0;var l=o.pathToRegexpOptions||{},d=function(path,t,e){e||(path=path.replace(/\/$/,""));if("/"===path[0])return path;if(null==t)return path;return $(t.path+"/"+path)}(path,c,l.strict);"boolean"==typeof o.caseSensitive&&(l.sensitive=o.caseSensitive);var v={path:d,regex:it(d,l),components:o.components||{default:o.component},instances:{},name:h,parent:c,matchAs:f,redirect:o.redirect,beforeEnter:o.beforeEnter,meta:o.meta||{},props:null==o.props?{}:o.components?o.props:{default:o.props}};o.children&&o.children.forEach((function(o){var c=f?$(f+"/"+o.path):void 0;t(e,r,n,o,v,c)}));r[v.path]||(e.push(v.path),r[v.path]=v);if(void 0!==o.alias)for(var y=Array.isArray(o.alias)?o.alias:[o.alias],i=0;i<y.length;++i){0;var m={path:y[i],children:o.children};t(e,r,n,m,c,v.path||"/")}h&&(n[h]||(n[h]=v))}(o,c,f,t)}));for(var i=0,h=o.length;i<h;i++)"*"===o[i]&&(o.push(o.splice(i,1)[0]),h--,i--);return{pathList:o,pathMap:c,nameMap:f}}function it(path,t){return P(path,[],t)}function at(t,e){var r=ot(t),n=r.pathList,o=r.pathMap,c=r.nameMap;function f(t,r,f){var h=W(t,r,!1,e),d=h.name;if(d){var v=c[d];if(!v)return l(null,h);var y=v.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!=typeof h.params&&(h.params={}),r&&"object"==typeof r.params)for(var m in r.params)!(m in h.params)&&y.indexOf(m)>-1&&(h.params[m]=r.params[m]);return h.path=Y(v.path,h.params),l(v,h,f)}if(h.path){h.params={};for(var i=0;i<n.length;i++){var path=n[i],w=o[path];if(ct(w.regex,h.path,h.params))return l(w,h,f)}}return l(null,h)}function h(t,r){var n=t.redirect,o="function"==typeof n?n(R(t,r,null,e)):n;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return l(null,r);var h=o,d=h.name,path=h.path,v=r.query,y=r.hash,m=r.params;if(v=h.hasOwnProperty("query")?h.query:v,y=h.hasOwnProperty("hash")?h.hash:y,m=h.hasOwnProperty("params")?h.params:m,d){c[d];return f({_normalized:!0,name:d,query:v,hash:y,params:m},void 0,r)}if(path){var w=function(path,t){return S(path,t.parent?t.parent.path:"/",!0)}(path,t);return f({_normalized:!0,path:Y(w,m),query:v,hash:y},void 0,r)}return l(null,r)}function l(t,r,n){return t&&t.redirect?h(t,n||r):t&&t.matchAs?function(t,e,r){var n=f({_normalized:!0,path:Y(r,e.params)});if(n){var o=n.matched,c=o[o.length-1];return e.params=n.params,l(c,e)}return l(null,e)}(0,r,t.matchAs):R(t,r,n,e)}return{match:f,addRoutes:function(t){ot(t,n,o,c)}}}function ct(t,path,e){var r=path.match(t);if(!r)return!1;if(!e)return!0;for(var i=1,n=r.length;i<n;++i){var o=t.keys[i-1],c="string"==typeof r[i]?decodeURIComponent(r[i]):r[i];o&&(e[o.name||"pathMatch"]=c)}return!0}var ut=nt&&window.performance&&window.performance.now?window.performance:Date;function st(){return ut.now().toFixed(3)}var pt=st();function ft(){return pt}function ht(t){return pt=t}var lt=Object.create(null);function vt(){var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=c({},window.history.state);r.key=ft(),window.history.replaceState(r,"",e),window.addEventListener("popstate",(function(t){mt(),t.state&&t.state.key&&ht(t.state.key)}))}function yt(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var c=function(){var t=ft();if(t)return lt[t]}(),f=o.call(t,e,r,n?c:null);f&&("function"==typeof f.then?f.then((function(t){kt(t,c)})).catch((function(t){0})):kt(f,c))}))}}function mt(){var t=ft();t&&(lt[t]={x:window.pageXOffset,y:window.pageYOffset})}function gt(t){return bt(t.x)||bt(t.y)}function wt(t){return{x:bt(t.x)?t.x:window.pageXOffset,y:bt(t.y)?t.y:window.pageYOffset}}function bt(t){return"number"==typeof t}var xt=/^#\d/;function kt(t,e){var r,n="object"==typeof t;if(n&&"string"==typeof t.selector){var o=xt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(o){var c=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(o,c={x:bt((r=c).x)?r.x:0,y:bt(r.y)?r.y:0})}else gt(t)&&(e=wt(t))}else n&&gt(t)&&(e=wt(t));e&&window.scrollTo(e.x,e.y)}var Rt,Et=nt&&((-1===(Rt=window.navigator.userAgent).indexOf("Android 2.")&&-1===Rt.indexOf("Android 4.0")||-1===Rt.indexOf("Mobile Safari")||-1!==Rt.indexOf("Chrome")||-1!==Rt.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history);function Ot(t,e){mt();var r=window.history;try{if(e){var n=c({},r.state);n.key=ft(),r.replaceState(n,"",t)}else r.pushState({key:ht(st())},"",t)}catch(r){window.location[e?"replace":"assign"](t)}}function _t(t){Ot(t,!0)}function At(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}function jt(t){return function(e,r,o){var c=!1,f=0,h=null;Ct(t,(function(t,e,r,l){if("function"==typeof t&&void 0===t.cid){c=!0,f++;var d,v=Tt((function(e){var n;((n=e).__esModule||$t&&"Module"===n[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:G.extend(e),r.components[l]=e,--f<=0&&o()})),y=Tt((function(t){var e="Failed to resolve async component "+l+": "+t;h||(h=n(t)?t:new Error(e),o(h))}));try{d=t(v,y)}catch(t){y(t)}if(d)if("function"==typeof d.then)d.then(v,y);else{var m=d.component;m&&"function"==typeof m.then&&m.then(v,y)}}})),c||o()}}function Ct(t,e){return St(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function St(t){return Array.prototype.concat.apply([],t)}var $t="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function Tt(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var Pt=function(t){function e(e){t.call(this),this.name=this._name="NavigationDuplicated",this.message='Navigating to current location ("'+e.fullPath+'") is not allowed',Object.defineProperty(this,"stack",{value:(new t).stack,writable:!0,configurable:!0})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error);Pt._name="NavigationDuplicated";var Lt=function(t,base){this.router=t,this.base=function(base){if(!base)if(nt){var t=document.querySelector("base");base=(base=t&&t.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else base="/";"/"!==base.charAt(0)&&(base="/"+base);return base.replace(/\/$/,"")}(base),this.current=O,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};function qt(t,e,r,n){var o=Ct(t,(function(t,n,o,c){var f=function(t,e){"function"!=typeof t&&(t=G.extend(t));return t.options[e]}(t,e);if(f)return Array.isArray(f)?f.map((function(t){return r(t,n,o,c)})):r(f,n,o,c)}));return St(n?o.reverse():o)}function Ut(t,e){if(e)return function(){return t.apply(e,arguments)}}Lt.prototype.listen=function(t){this.cb=t},Lt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Lt.prototype.onError=function(t){this.errorCbs.push(t)},Lt.prototype.transitionTo=function(t,e,r){var n=this,o=this.router.match(t,this.current);this.confirmTransition(o,(function(){n.updateRoute(o),e&&e(o),n.ensureURL(),n.ready||(n.ready=!0,n.readyCbs.forEach((function(t){t(o)})))}),(function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,n.readyErrorCbs.forEach((function(e){e(t)})))}))},Lt.prototype.confirmTransition=function(t,e,r){var c=this,f=this.current,h=function(t){!o(Pt,t)&&n(t)&&(c.errorCbs.length?c.errorCbs.forEach((function(e){e(t)})):console.error(t)),r&&r(t)};if(j(t,f)&&t.matched.length===f.matched.length)return this.ensureURL(),h(new Pt(t));var l=function(t,e){var i,r=Math.max(t.length,e.length);for(i=0;i<r&&t[i]===e[i];i++);return{updated:e.slice(0,i),activated:e.slice(i),deactivated:t.slice(i)}}(this.current.matched,t.matched),d=l.updated,v=l.deactivated,y=l.activated,m=[].concat(function(t){return qt(t,"beforeRouteLeave",Ut,!0)}(v),this.router.beforeHooks,function(t){return qt(t,"beforeRouteUpdate",Ut)}(d),y.map((function(t){return t.beforeEnter})),jt(y));this.pending=t;var w=function(e,r){if(c.pending!==t)return h();try{e(t,f,(function(t){!1===t||n(t)?(c.ensureURL(!0),h(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(h(),"object"==typeof t&&t.replace?c.replace(t):c.push(t)):r(t)}))}catch(t){h(t)}};At(m,w,(function(){var r=[];At(function(t,e,r){return qt(t,"beforeRouteEnter",(function(t,n,o,c){return function(t,e,r,n,o){return function(c,f,h){return t(c,f,(function(t){"function"==typeof t&&n.push((function(){!function t(e,r,n,o){r[n]&&!r[n]._isBeingDestroyed?e(r[n]):o()&&setTimeout((function(){t(e,r,n,o)}),16)}(t,e.instances,r,o)})),h(t)}))}}(t,o,c,e,r)}))}(y,r,(function(){return c.current===t})).concat(c.router.resolveHooks),w,(function(){if(c.pending!==t)return h();c.pending=null,e(t),c.router.app&&c.router.app.$nextTick((function(){r.forEach((function(t){t()}))}))}))}))},Lt.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach((function(r){r&&r(t,e)}))};var It=function(t){function e(e,base){var r=this;t.call(this,e,base);var n=e.options.scrollBehavior,o=Et&&n;o&&vt();var c=Mt(this.base);window.addEventListener("popstate",(function(t){var n=r.current,f=Mt(r.base);r.current===O&&f===c||r.transitionTo(f,(function(t){o&&yt(e,t,n,!0)}))}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Ot($(n.base+t.fullPath)),yt(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){_t($(n.base+t.fullPath)),yt(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(Mt(this.base)!==this.current.fullPath){var e=$(this.base+this.current.fullPath);t?Ot(e):_t(e)}},e.prototype.getCurrentLocation=function(){return Mt(this.base)},e}(Lt);function Mt(base){var path=decodeURI(window.location.pathname);return base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash}var Bt=function(t){function e(e,base,r){t.call(this,e,base),r&&function(base){var t=Mt(base);if(!/^\/#/.test(t))return window.location.replace($(base+"/#"+t)),!0}(this.base)||Vt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router.options.scrollBehavior,r=Et&&e;r&&vt(),window.addEventListener(Et?"popstate":"hashchange",(function(){var e=t.current;Vt()&&t.transitionTo(Ht(),(function(n){r&&yt(t.router,n,e,!0),Et||Ft(n.fullPath)}))}))},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Dt(t.fullPath),yt(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Ft(t.fullPath),yt(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Ht()!==e&&(t?Dt(e):Ft(e))},e.prototype.getCurrentLocation=function(){return Ht()},e}(Lt);function Vt(){var path=Ht();return"/"===path.charAt(0)||(Ft("/"+path),!1)}function Ht(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";var r=(t=t.slice(e+1)).indexOf("?");if(r<0){var n=t.indexOf("#");t=n>-1?decodeURI(t.slice(0,n))+t.slice(n):decodeURI(t)}else t=decodeURI(t.slice(0,r))+t.slice(r);return t}function zt(path){var t=window.location.href,i=t.indexOf("#");return(i>=0?t.slice(0,i):t)+"#"+path}function Dt(path){Et?Ot(zt(path)):window.location.hash=path}function Ft(path){Et?_t(zt(path)):window.location.replace(zt(path))}var Nt=function(t){function e(e,base){t.call(this,e,base),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){e.index=r,e.updateRoute(n)}),(function(t){o(Pt,t)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Lt),Jt=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=at(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Et&&!1!==t.fallback,this.fallback&&(e="hash"),nt||(e="abstract"),this.mode=e,e){case"history":this.history=new It(this,t.base);break;case"hash":this.history=new Bt(this,t.base,this.fallback);break;case"abstract":this.history=new Nt(this,t.base);break;default:0}},Kt={currentRoute:{configurable:!0}};function Qt(t,e){return t.push(e),function(){var i=t.indexOf(e);i>-1&&t.splice(i,1)}}Jt.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},Kt.currentRoute.get=function(){return this.history&&this.history.current},Jt.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null)})),!this.app){this.app=t;var r=this.history;if(r instanceof It)r.transitionTo(r.getCurrentLocation());else if(r instanceof Bt){var n=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},Jt.prototype.beforeEach=function(t){return Qt(this.beforeHooks,t)},Jt.prototype.beforeResolve=function(t){return Qt(this.resolveHooks,t)},Jt.prototype.afterEach=function(t){return Qt(this.afterHooks,t)},Jt.prototype.onReady=function(t,e){this.history.onReady(t,e)},Jt.prototype.onError=function(t){this.history.onError(t)},Jt.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},Jt.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},Jt.prototype.go=function(t){this.history.go(t)},Jt.prototype.back=function(){this.go(-1)},Jt.prototype.forward=function(){this.go(1)},Jt.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},Jt.prototype.resolve=function(t,e,r){var n=W(t,e=e||this.history.current,r,this),o=this.match(n,e),c=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:function(base,t,e){var path="hash"===e?"#"+t:t;return base?$(base+"/"+path):path}(this.history.base,c,this.mode),normalizedTo:n,resolved:o}},Jt.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==O&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Jt.prototype,Kt),Jt.install=function t(e){if(!t.installed||G!==e){t.installed=!0,G=e;var r=function(t){return void 0!==t},n=function(t,e){var i=t.$options._parentVnode;r(i)&&r(i=i.data)&&r(i=i.registerRouteInstance)&&i(t,e)};e.mixin({beforeCreate:function(){r(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",f),e.component("RouterLink",tt);var o=e.config.optionMergeStrategies;o.beforeRouteEnter=o.beforeRouteLeave=o.beforeRouteUpdate=o.created}},Jt.version="3.1.6",nt&&window.Vue&&window.Vue.use(Jt),e.a=Jt}}]);