var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,o)=>(o=n==null?{}:e(i(n)),l(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function E(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function O(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var k=/\/+/g;function ee(e,t){return typeof e==`object`&&e&&e.key!=null?O(``+e.key):t.toString(36)}function A(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+ee(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(k,`$&/`)+`/`),A(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(k,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+ee(s,l);c+=A(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+ee(s,l++),c+=A(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function te(e,t,n){if(e==null)return e;var r=[],i=0;return A(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ne(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var j={current:null},re={transition:null},ie={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:re,ReactCurrentOwner:C};function ae(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:te,forEach:function(e,t,n){te(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return te(e,function(){t++}),t},toArray:function(e){return te(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,e.act=ae,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=T,e.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ne}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=re.transition;re.transition={};try{e()}finally{re.transition=t}},e.unstable_act=ae,e.useCallback=function(e,t){return j.current.useCallback(e,t)},e.useContext=function(e){return j.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return j.current.useDeferredValue(e)},e.useEffect=function(e,t){return j.current.useEffect(e,t)},e.useId=function(){return j.current.useId()},e.useImperativeHandle=function(e,t,n){return j.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return j.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return j.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return j.current.useMemo(e,t)},e.useReducer=function(e,t,n){return j.current.useReducer(e,t,n)},e.useRef=function(e){return j.current.useRef(e)},e.useState=function(e){return j.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return j.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return j.current.useTransition()},e.version=`18.3.1`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m){if(n(c)!==null)m=!0,te(x);else{var t=n(l);t!==null&&ne(b,t.startTime-e)}}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!D());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&ne(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,T=5,E=-1;function D(){return!(e.unstable_now()-E<T)}function O(){if(C!==null){var t=e.unstable_now();E=t;var n=!0;try{n=C(!0,t)}finally{n?k():(S=!1,C=null)}}else S=!1}var k;if(typeof v==`function`)k=function(){v(O)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,A=ee.port2;ee.port1.onmessage=O,k=function(){A.postMessage(null)}}else k=function(){g(O,0)};function te(e){C=e,S||(S=!0,k())}function ne(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,te(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,ne(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,te(x))),r},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p(),n=h();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d={},f={};function m(e){return l.call(f,e)?!0:l.call(d,e)?!1:u.test(e)?f[e]=!0:(d[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?m(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),T=Symbol.for(`react.portal`),E=Symbol.for(`react.fragment`),D=Symbol.for(`react.strict_mode`),O=Symbol.for(`react.profiler`),k=Symbol.for(`react.provider`),ee=Symbol.for(`react.context`),A=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),j=Symbol.for(`react.memo`),re=Symbol.for(`react.lazy`),ie=Symbol.for(`react.offscreen`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var M=Object.assign,se;function ce(e){if(se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);se=t&&t[1]||``}return`
`+se+e}var le=!1;function ue(e,t){if(!e||le)return``;le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{le=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?ce(e):``}function de(e){switch(e.tag){case 5:return ce(e.type);case 16:return ce(`Lazy`);case 13:return ce(`Suspense`);case 19:return ce(`SuspenseList`);case 0:case 2:case 15:return e=ue(e.type,!1),e;case 11:return e=ue(e.type.render,!1),e;case 1:return e=ue(e.type,!0),e;default:return``}}function fe(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case E:return`Fragment`;case T:return`Portal`;case O:return`Profiler`;case D:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case ee:return(e.displayName||`Context`)+`.Consumer`;case k:return(e._context.displayName||`Context`)+`.Provider`;case A:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case j:return t=e.displayName||null,t===null?fe(e.type)||`Memo`:t;case re:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return fe(t);case 8:return t===D?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function me(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function he(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function ge(e){var t=he(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _e(e){e._valueTracker||=ge(e)}function ve(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=he(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function ye(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function be(e,t){var n=t.checked;return M({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xe(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=me(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Se(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function Ce(e,t){Se(e,t);var n=me(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Te(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Te(e,t.type,me(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function we(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Te(e,t,n){(t!==`number`||ye(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var Ee=Array.isArray;function De(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+me(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Oe(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return M({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function ke(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(Ee(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:me(n)}}function Ae(e,t){var n=me(t.value),r=me(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function je(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Me(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Ne(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Me(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Pe,Fe=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Pe||=document.createElement(`div`),Pe.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Pe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ie(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Le={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Le).forEach(function(e){Re.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Le[t]=Le[e]})});function ze(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Le.hasOwnProperty(e)&&Le[e]?(``+t).trim():t+`px`}function Be(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=ze(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Ve=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function He(e,t){if(t){if(Ve[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Ue(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var We=null;function Ge(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ke=null,qe=null,Je=null;function Ye(e){if(e=Wi(e)){if(typeof Ke!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Ki(t),Ke(e.stateNode,e.type,t))}}function Xe(e){qe?Je?Je.push(e):Je=[e]:qe=e}function Ze(){if(qe){var e=qe,t=Je;if(Je=qe=null,Ye(e),t)for(e=0;e<t.length;e++)Ye(t[e])}}function Qe(e,t){return e(t)}function $e(){}var et=!1;function tt(e,t,n){if(et)return e(t,n);et=!0;try{return Qe(e,t,n)}finally{et=!1,(qe!==null||Je!==null)&&($e(),Ze())}}function nt(e,t){var n=e.stateNode;if(n===null)return null;var i=Ki(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var rt=!1;if(c)try{var it={};Object.defineProperty(it,"passive",{get:function(){rt=!0}}),window.addEventListener(`test`,it,it),window.removeEventListener(`test`,it,it)}catch{rt=!1}function at(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var ot=!1,st=null,ct=!1,lt=null,ut={onError:function(e){ot=!0,st=e}};function dt(e,t,n,r,i,a,o,s,c){ot=!1,st=null,at.apply(ut,arguments)}function ft(e,t,n,i,a,o,s,c,l){if(dt.apply(this,arguments),ot){if(ot){var u=st;ot=!1,st=null}else throw Error(r(198));ct||(ct=!0,lt=u)}}function pt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ht(e){if(pt(e)!==e)throw Error(r(188))}function gt(e){var t=e.alternate;if(!t){if(t=pt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return ht(a),e;if(o===i)return ht(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function _t(e){return e=gt(e),e===null?null:vt(e)}function vt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vt(e);if(t!==null)return t;e=e.sibling}return null}var yt=n.unstable_scheduleCallback,bt=n.unstable_cancelCallback,xt=n.unstable_shouldYield,St=n.unstable_requestPaint,N=n.unstable_now,Ct=n.unstable_getCurrentPriorityLevel,wt=n.unstable_ImmediatePriority,Tt=n.unstable_UserBlockingPriority,Et=n.unstable_NormalPriority,Dt=n.unstable_LowPriority,Ot=n.unstable_IdlePriority,kt=null,P=null;function At(e){if(P&&typeof P.onCommitFiberRoot==`function`)try{P.onCommitFiberRoot(kt,e,void 0,(e.current.flags&128)==128)}catch{}}var jt=Math.clz32?Math.clz32:Pt,Mt=Math.log,Nt=Math.LN2;function Pt(e){return e>>>=0,e===0?32:31-(Mt(e)/Nt|0)|0}var F=64,Ft=4194304;function It(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=It(a))):r=It(s)}else o=n&~i,o===0?a!==0&&(r=It(a)):r=It(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-jt(t),i=1<<n,r|=e[n],t&=~i;return r}function Rt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-jt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Bt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Vt(){var e=F;return F<<=1,!(F&4194240)&&(F=64),e}function Ht(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ut(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=n}function I(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-jt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Wt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-jt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var L=0;function Gt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kt,qt,Jt,Yt,Xt,Zt=!1,Qt=[],$t=null,en=null,tn=null,nn=new Map,rn=new Map,an=[],on=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function sn(e,t){switch(e){case`focusin`:case`focusout`:$t=null;break;case`dragenter`:case`dragleave`:en=null;break;case`mouseover`:case`mouseout`:tn=null;break;case`pointerover`:case`pointerout`:nn.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:rn.delete(t.pointerId)}}function cn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Wi(t),t!==null&&qt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ln(e,t,n,r,i){switch(t){case`focusin`:return $t=cn($t,e,t,n,r,i),!0;case`dragenter`:return en=cn(en,e,t,n,r,i),!0;case`mouseover`:return tn=cn(tn,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return nn.set(a,cn(nn.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,rn.set(a,cn(rn.get(a)||null,e,t,n,r,i)),!0}return!1}function un(e){var t=Ui(e.target);if(t!==null){var n=pt(t);if(n!==null){if(t=n.tag,t===13){if(t=mt(n),t!==null){e.blockedOn=t,Xt(e.priority,function(){Jt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);We=r,n.target.dispatchEvent(r),We=null}else return t=Wi(n),t!==null&&qt(t),e.blockedOn=n,!1;t.shift()}return!0}function fn(e,t,n){dn(e)&&n.delete(t)}function pn(){Zt=!1,$t!==null&&dn($t)&&($t=null),en!==null&&dn(en)&&(en=null),tn!==null&&dn(tn)&&(tn=null),nn.forEach(fn),rn.forEach(fn)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,Zt||(Zt=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,pn)))}function hn(e){function t(t){return mn(t,e)}if(0<Qt.length){mn(Qt[0],e);for(var n=1;n<Qt.length;n++){var r=Qt[n];r.blockedOn===e&&(r.blockedOn=null)}}for($t!==null&&mn($t,e),en!==null&&mn(en,e),tn!==null&&mn(tn,e),nn.forEach(t),rn.forEach(t),n=0;n<an.length;n++)r=an[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)un(n),n.blockedOn===null&&an.shift()}var gn=C.ReactCurrentBatchConfig,_n=!0;function vn(e,t,n,r){var i=L,a=gn.transition;gn.transition=null;try{L=1,bn(e,t,n,r)}finally{L=i,gn.transition=a}}function yn(e,t,n,r){var i=L,a=gn.transition;gn.transition=null;try{L=4,bn(e,t,n,r)}finally{L=i,gn.transition=a}}function bn(e,t,n,r){if(_n){var i=Sn(e,t,n,r);if(i===null)hi(e,t,r,xn,n),sn(e,r);else if(ln(i,e,t,n,r))r.stopPropagation();else if(sn(e,r),t&4&&-1<on.indexOf(e)){for(;i!==null;){var a=Wi(i);if(a!==null&&Kt(a),a=Sn(e,t,n,r),a===null&&hi(e,t,r,xn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else hi(e,t,r,null,n)}}var xn=null;function Sn(e,t,n,r){if(xn=null,e=Ge(r),e=Ui(e),e!==null){if(t=pt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return xn=e,null}function Cn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(Ct()){case wt:return 1;case Tt:return 4;case Et:case Dt:return 16;case Ot:return 536870912;default:return 16}default:return 16}}var wn=null,Tn=null,En=null;function Dn(){if(En)return En;var e,t=Tn,n=t.length,r,i=`value`in wn?wn.value:wn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return En=i.slice(e,1<r?1-r:void 0)}function On(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kn(){return!0}function An(){return!1}function jn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?kn:An,this.isPropagationStopped=An,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=kn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=kn)},persist:function(){},isPersistent:kn}),t}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nn=jn(Mn),Pn=M({},Mn,{view:0,detail:0}),Fn=jn(Pn),In,Ln,Rn,zn=M({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Rn&&(Rn&&e.type===`mousemove`?(In=e.screenX-Rn.screenX,Ln=e.screenY-Rn.screenY):Ln=In=0,Rn=e),In)},movementY:function(e){return`movementY`in e?e.movementY:Ln}}),Bn=jn(zn),Vn=jn(M({},zn,{dataTransfer:0})),Hn=jn(M({},Pn,{relatedTarget:0})),Un=jn(M({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0})),Wn=jn(M({},Mn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Gn=jn(M({},Mn,{data:0})),Kn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},qn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Jn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Yn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jn[e])?!!t[e]:!1}function Xn(){return Yn}var Zn=jn(M({},Pn,{key:function(e){if(e.key){var t=Kn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=On(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?qn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xn,charCode:function(e){return e.type===`keypress`?On(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?On(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Qn=jn(M({},zn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),$n=jn(M({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xn})),er=jn(M({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0})),tr=jn(M({},zn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),nr=[9,13,27,32],rr=c&&`CompositionEvent`in window,ir=null;c&&`documentMode`in document&&(ir=document.documentMode);var ar=c&&`TextEvent`in window&&!ir,or=c&&(!rr||ir&&8<ir&&11>=ir),sr=` `,cr=!1;function lr(e,t){switch(e){case`keyup`:return nr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ur(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var dr=!1;function fr(e,t){switch(e){case`compositionend`:return ur(t);case`keypress`:return t.which===32?(cr=!0,sr):null;case`textInput`:return e=t.data,e===sr&&cr?null:e;default:return null}}function pr(e,t){if(dr)return e===`compositionend`||!rr&&lr(e,t)?(e=Dn(),En=Tn=wn=null,dr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return or&&t.locale!==`ko`?null:t.data;default:return null}}var mr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!mr[e.type]:t===`textarea`}function gr(e,t,n,r){Xe(r),t=_i(t,`onChange`),0<t.length&&(n=new Nn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var _r=null,vr=null;function yr(e){ui(e,0)}function br(e){if(ve(Gi(e)))return e}function xr(e,t){if(e===`change`)return t}var Sr=!1;if(c){var Cr;if(c){var wr=`oninput`in document;if(!wr){var Tr=document.createElement(`div`);Tr.setAttribute(`oninput`,`return;`),wr=typeof Tr.oninput==`function`}Cr=wr}else Cr=!1;Sr=Cr&&(!document.documentMode||9<document.documentMode)}function Er(){_r&&(_r.detachEvent(`onpropertychange`,Dr),vr=_r=null)}function Dr(e){if(e.propertyName===`value`&&br(vr)){var t=[];gr(t,vr,e,Ge(e)),tt(yr,t)}}function Or(e,t,n){e===`focusin`?(Er(),_r=t,vr=n,_r.attachEvent(`onpropertychange`,Dr)):e===`focusout`&&Er()}function kr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return br(vr)}function Ar(e,t){if(e===`click`)return br(t)}function jr(e,t){if(e===`input`||e===`change`)return br(t)}function Mr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Nr=typeof Object.is==`function`?Object.is:Mr;function Pr(e,t){if(Nr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Nr(e[i],t[i]))return!1}return!0}function Fr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ir(e,t){var n=Fr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Fr(n)}}function Lr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rr(){for(var e=window,t=ye();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=ye(e.document)}return t}function zr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Br(e){var t=Rr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lr(n.ownerDocument.documentElement,n)){if(r!==null&&zr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Ir(n,a);var o=Ir(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vr=c&&`documentMode`in document&&11>=document.documentMode,Hr=null,Ur=null,Wr=null,Gr=!1;function Kr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gr||Hr==null||Hr!==ye(r)||(r=Hr,`selectionStart`in r&&zr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&Pr(Wr,r)||(Wr=r,r=_i(Ur,`onSelect`),0<r.length&&(t=new Nn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Hr)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Jr={animationend:qr(`Animation`,`AnimationEnd`),animationiteration:qr(`Animation`,`AnimationIteration`),animationstart:qr(`Animation`,`AnimationStart`),transitionend:qr(`Transition`,`TransitionEnd`)},Yr={},Xr={};c&&(Xr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),`TransitionEvent`in window||delete Jr.transitionend.transition);function Zr(e){if(Yr[e])return Yr[e];if(!Jr[e])return e;var t=Jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xr)return Yr[e]=t[n];return e}var Qr=Zr(`animationend`),$r=Zr(`animationiteration`),ei=Zr(`animationstart`),ti=Zr(`transitionend`),ni=new Map,ri=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function ii(e,t){ni.set(e,t),o(t,[e])}for(var ai=0;ai<ri.length;ai++){var oi=ri[ai];ii(oi.toLowerCase(),`on`+(oi[0].toUpperCase()+oi.slice(1)))}ii(Qr,`onAnimationEnd`),ii($r,`onAnimationIteration`),ii(ei,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(ti,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var si=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),ci=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(si));function li(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,ft(r,t,void 0,e),e.currentTarget=null}function ui(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;li(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;li(i,s,l),a=c}}}if(ct)throw e=lt,ct=!1,lt=null,e}function R(e,t){var n=t[Bi];n===void 0&&(n=t[Bi]=new Set);var r=e+`__bubble`;n.has(r)||(mi(t,e,2,!1),n.add(r))}function di(e,t,n){var r=0;t&&(r|=4),mi(n,e,r,t)}var fi=`_reactListening`+Math.random().toString(36).slice(2);function pi(e){if(!e[fi]){e[fi]=!0,i.forEach(function(t){t!==`selectionchange`&&(ci.has(t)||di(t,!1,e),di(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fi]||(t[fi]=!0,di(`selectionchange`,!1,t))}}function mi(e,t,n,r){switch(Cn(t)){case 1:var i=vn;break;case 4:i=yn;break;default:i=bn}n=i.bind(null,t,n,e),i=void 0,!rt||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function hi(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Ui(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}tt(function(){var r=a,i=Ge(n),o=[];a:{var s=ni.get(e);if(s!==void 0){var c=Nn,l=e;switch(e){case`keypress`:if(On(n)===0)break a;case`keydown`:case`keyup`:c=Zn;break;case`focusin`:l=`focus`,c=Hn;break;case`focusout`:l=`blur`,c=Hn;break;case`beforeblur`:case`afterblur`:c=Hn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Bn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Vn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=$n;break;case Qr:case $r:case ei:c=Un;break;case ti:c=er;break;case`scroll`:c=Fn;break;case`wheel`:c=tr;break;case`copy`:case`cut`:case`paste`:c=Wn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Qn}var u=!!(t&4),d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=nt(p,f),h!=null&&u.push(gi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==We&&(l=n.relatedTarget||n.fromElement)&&(Ui(l)||l[zi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Ui(l):null,l!==null&&(d=pt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Bn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=Qn,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Gi(c),m=l==null?s:Gi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Ui(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=vi(m))p++;for(m=0,h=f;h;h=vi(h))m++;for(;0<p-m;)u=vi(u),p--;for(;0<m-p;)f=vi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=vi(u),f=vi(f)}u=null}else u=null;c!==null&&yi(o,s,c,u,!1),l!==null&&d!==null&&yi(o,d,l,u,!0)}}a:{if(s=r?Gi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=xr;else if(hr(s)){if(Sr)g=jr;else{g=kr;var _=Or}}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Ar);if(g&&=g(e,r)){gr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Te(s,`number`,s.value)}switch(_=r?Gi(r):window,e){case`focusin`:(hr(_)||_.contentEditable===`true`)&&(Hr=_,Ur=r,Wr=null);break;case`focusout`:Wr=Ur=Hr=null;break;case`mousedown`:Gr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Gr=!1,Kr(o,n,i);break;case`selectionchange`:if(Vr)break;case`keydown`:case`keyup`:Kr(o,n,i)}var v;if(rr)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else dr?lr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(or&&n.locale!==`ko`&&(dr||y!==`onCompositionStart`?y===`onCompositionEnd`&&dr&&(v=Dn()):(wn=i,Tn=`value`in wn?wn.value:wn.textContent,dr=!0)),_=_i(r,y),0<_.length&&(y=new Gn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=ur(n),v!==null&&(y.data=v)))),(v=ar?fr(e,n):pr(e,n))&&(r=_i(r,`onBeforeInput`),0<r.length&&(i=new Gn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}ui(o,t)})}function gi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _i(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=nt(e,n),a!=null&&r.unshift(gi(e,a,i)),a=nt(e,t),a!=null&&r.push(gi(e,a,i))),e=e.return}return r}function vi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=nt(n,a),c!=null&&o.unshift(gi(n,c,s))):i||(c=nt(n,a),c!=null&&o.push(gi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var bi=/\r\n?/g,xi=/\u0000|\uFFFD/g;function Si(e){return(typeof e==`string`?e:``+e).replace(bi,`
`).replace(xi,``)}function Ci(e,t,n){if(t=Si(t),Si(e)!==t&&n)throw Error(r(425))}function wi(){}var Ti=null,Ei=null;function Di(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Oi=typeof setTimeout==`function`?setTimeout:void 0,ki=typeof clearTimeout==`function`?clearTimeout:void 0,Ai=typeof Promise==`function`?Promise:void 0,ji=typeof queueMicrotask==`function`?queueMicrotask:Ai===void 0?Oi:function(e){return Ai.resolve(null).then(e).catch(Mi)};function Mi(e){setTimeout(function(){throw e})}function Ni(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),hn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++}n=i}while(n);hn(t)}function Pi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Fi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ii=Math.random().toString(36).slice(2),Li=`__reactFiber$`+Ii,Ri=`__reactProps$`+Ii,zi=`__reactContainer$`+Ii,Bi=`__reactEvents$`+Ii,Vi=`__reactListeners$`+Ii,Hi=`__reactHandles$`+Ii;function Ui(e){var t=e[Li];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zi]||n[Li]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fi(e);e!==null;){if(n=e[Li])return n;e=Fi(e)}return t}e=n,n=e.parentNode}return null}function Wi(e){return e=e[Li]||e[zi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Ki(e){return e[Ri]||null}var qi=[],Ji=-1;function Yi(e){return{current:e}}function z(e){0>Ji||(e.current=qi[Ji],qi[Ji]=null,Ji--)}function B(e,t){Ji++,qi[Ji]=e.current,e.current=t}var Xi={},Zi=Yi(Xi),Qi=Yi(!1),$i=Xi;function ea(e,t){var n=e.type.contextTypes;if(!n)return Xi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ta(e){return e=e.childContextTypes,e!=null}function na(){z(Qi),z(Zi)}function ra(e,t,n){if(Zi.current!==Xi)throw Error(r(168));B(Zi,t),B(Qi,n)}function ia(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,pe(e)||`Unknown`,a));return M({},n,i)}function aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xi,$i=Zi.current,B(Zi,e),B(Qi,Qi.current),!0}function oa(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=ia(e,t,$i),i.__reactInternalMemoizedMergedChildContext=e,z(Qi),z(Zi),B(Zi,e)):z(Qi),B(Qi,n)}var sa=null,ca=!1,la=!1;function ua(e){sa===null?sa=[e]:sa.push(e)}function da(e){ca=!0,ua(e)}function fa(){if(!la&&sa!==null){la=!0;var e=0,t=L;try{var n=sa;for(L=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}sa=null,ca=!1}catch(t){throw sa!==null&&(sa=sa.slice(e+1)),yt(wt,fa),t}finally{L=t,la=!1}}return null}var pa=[],ma=0,ha=null,ga=0,_a=[],va=0,ya=null,ba=1,xa=``;function Sa(e,t){pa[ma++]=ga,pa[ma++]=ha,ha=e,ga=t}function Ca(e,t,n){_a[va++]=ba,_a[va++]=xa,_a[va++]=ya,ya=e;var r=ba;e=xa;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var a=32-jt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ba=1<<32-jt(t)+i|n<<i|r,xa=a+e}else ba=1<<a|n<<i|r,xa=e}function wa(e){e.return!==null&&(Sa(e,1),Ca(e,1,0))}function Ta(e){for(;e===ha;)ha=pa[--ma],pa[ma]=null,ga=pa[--ma],pa[ma]=null;for(;e===ya;)ya=_a[--va],_a[va]=null,xa=_a[--va],_a[va]=null,ba=_a[--va],_a[va]=null}var Ea=null,Da=null,V=!1,Oa=null;function ka(e,t){var n=Kl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Aa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null&&(e.stateNode=t,Ea=e,Da=Pi(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t!==null&&(e.stateNode=t,Ea=e,Da=null,!0);case 13:return t=t.nodeType===8?t:null,t!==null&&(n=ya===null?null:{id:ba,overflow:xa},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Kl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ea=e,Da=null,!0);default:return!1}}function ja(e){return!!(e.mode&1)&&!(e.flags&128)}function Ma(e){if(V){var t=Da;if(t){var n=t;if(!Aa(e,t)){if(ja(e))throw Error(r(418));t=Pi(n.nextSibling);var i=Ea;t&&Aa(e,t)?ka(i,n):(e.flags=e.flags&-4097|2,V=!1,Ea=e)}}else{if(ja(e))throw Error(r(418));e.flags=e.flags&-4097|2,V=!1,Ea=e}}}function Na(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ea=e}function Pa(e){if(e!==Ea)return!1;if(!V)return Na(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!Di(e.type,e.memoizedProps)),t&&=Da){if(ja(e))throw Fa(),Error(r(418));for(;t;)ka(e,t),t=Pi(t.nextSibling)}if(Na(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Da=Pi(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Da=null}}else Da=Ea?Pi(e.stateNode.nextSibling):null;return!0}function Fa(){for(var e=Da;e;)e=Pi(e.nextSibling)}function Ia(){Da=Ea=null,V=!1}function La(e){Oa===null?Oa=[e]:Oa.push(e)}var Ra=C.ReactCurrentBatchConfig;function za(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Ba(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Va(e){var t=e._init;return t(e._payload)}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Yl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=$l(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===E?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===re&&Va(i)===t.type)?(r=a(t,n.props),r.ref=za(e,t,n),r.return=e,r):(r=Xl(n.type,n.key,n.props,null,e.mode,r),r.ref=za(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Zl(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=$l(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=Xl(t.type,t.key,t.props,null,e.mode,n),n.ref=za(e,null,t),n.return=e,n;case T:return t=eu(t,e.mode,n),t.return=e,t;case re:var r=t._init;return f(e,r(t._payload),n)}if(Ee(t)||oe(t))return t=Zl(t,e.mode,n,null),t.return=e,t;Ba(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case T:return n.key===i?u(e,t,n,r):null;case re:return i=n._init,p(e,t,i(n._payload),r)}if(Ee(n)||oe(n))return i===null?d(e,t,n,r,null):null;Ba(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case T:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case re:var a=r._init;return m(e,t,n,a(r._payload),i)}if(Ee(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);Ba(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),V&&Sa(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return V&&Sa(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),V&&Sa(r,h),l}function g(a,s,c,l){var u=oe(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),V&&Sa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return V&&Sa(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),V&&Sa(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===E&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===E){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===re&&Va(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=za(e,l,i),r.return=e,e=r;break a}n(e,l);break}t(e,l),l=l.sibling}i.type===E?(r=Zl(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Xl(i.type,i.key,i.props,null,e.mode,o),o.ref=za(e,r,i),o.return=e,e=o)}return s(e);case T:a:{for(l=i.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}n(e,r);break}t(e,r),r=r.sibling}r=eu(i,e.mode,o),r.return=e,e=r}return s(e);case re:return l=i._init,_(e,r,l(i._payload),o)}if(Ee(i))return h(e,r,i,o);if(oe(i))return g(e,r,i,o);Ba(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=$l(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Ua=Ha(!0),Wa=Ha(!1),Ga=Yi(null),Ka=null,qa=null,Ja=null;function Ya(){Ja=qa=Ka=null}function Xa(e){var t=Ga.current;z(Ga),e._currentValue=t}function Za(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Qa(e,t){Ka=e,Ja=qa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Rs=!0),e.firstContext=null)}function $a(e){var t=e._currentValue;if(Ja!==e){if(e={context:e,memoizedValue:t,next:null},qa===null){if(Ka===null)throw Error(r(308));qa=e,Ka.dependencies={lanes:0,firstContext:e}}else qa=qa.next=e}return t}var eo=null;function to(e){eo===null?eo=[e]:eo.push(e)}function no(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,to(t)):(n.next=i.next,i.next=n),t.interleaved=n,ro(e,r)}function ro(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var io=!1;function ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function so(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function co(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ro(e,n)}return i=r.interleaved,i===null?(t.next=t,to(r)):(t.next=i.next,i.next=t),r.interleaved=t,ro(e,n)}function lo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wt(e,n)}}function uo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fo(e,t,n,r){var i=e.updateQueue;io=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=M({},d,f);break a;case 2:io=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Yc|=o,e.lanes=o,e.memoizedState=d}}function po(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var mo={},ho=Yi(mo),go=Yi(mo),_o=Yi(mo);function vo(e){if(e===mo)throw Error(r(174));return e}function yo(e,t){switch(B(_o,t),B(go,e),B(ho,mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ne(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ne(t,e)}z(ho),B(ho,t)}function bo(){z(ho),z(go),z(_o)}function xo(e){vo(_o.current);var t=vo(ho.current),n=Ne(t,e.type);t!==n&&(B(go,e),B(ho,n))}function So(e){go.current===e&&(z(ho),z(go))}var H=Yi(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wo=[];function To(){for(var e=0;e<wo.length;e++)wo[e]._workInProgressVersionPrimary=null;wo.length=0}var Eo=C.ReactCurrentDispatcher,Do=C.ReactCurrentBatchConfig,Oo=0,U=null,W=null,G=null,ko=!1,Ao=!1,jo=0,Mo=0;function No(){throw Error(r(321))}function Po(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nr(e[n],t[n]))return!1;return!0}function Fo(e,t,n,i,a,o){if(Oo=o,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Eo.current=e===null||e.memoizedState===null?vs:ys,e=n(i,a),Ao){o=0;do{if(Ao=!1,jo=0,25<=o)throw Error(r(301));o+=1,G=W=null,t.updateQueue=null,Eo.current=bs,e=n(i,a)}while(Ao)}if(Eo.current=_s,t=W!==null&&W.next!==null,Oo=0,G=W=U=null,ko=!1,t)throw Error(r(300));return e}function Io(){var e=jo!==0;return jo=0,e}function Lo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return G===null?U.memoizedState=G=e:G=G.next=e,G}function Ro(){if(W===null){var e=U.alternate;e=e===null?null:e.memoizedState}else e=W.next;var t=G===null?U.memoizedState:G.next;if(t!==null)G=t,W=e;else{if(e===null)throw Error(r(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},G===null?U.memoizedState=G=e:G=G.next=e}return G}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){var t=Ro(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=W,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((Oo&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,U.lanes|=d,Yc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Nr(i,t.memoizedState)||(Rs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,U.lanes|=o,Yc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vo(e){var t=Ro(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Nr(o,t.memoizedState)||(Rs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Ho(){}function Uo(e,t){var n=U,i=Ro(),a=t(),o=!Nr(i.memoizedState,a);if(o&&(i.memoizedState=a,Rs=!0),i=i.queue,ts(Ko.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||G!==null&&G.memoizedState.tag&1){if(n.flags|=2048,Xo(9,Go.bind(null,n,i,a,t),void 0,null),Y===null)throw Error(r(349));Oo&30||Wo(n,t,a)}return a}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nr(e,n)}catch{return!0}}function Jo(e){var t=ro(e,1);t!==null&&hl(t,e,1,-1)}function Yo(e){var t=Lo();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t.queue=e,e=e.dispatch=ps.bind(null,U,e),[t.memoizedState,e]}function Xo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zo(){return Ro().memoizedState}function Qo(e,t,n,r){var i=Lo();U.flags|=e,i.memoizedState=Xo(1|t,n,void 0,r===void 0?null:r)}function $o(e,t,n,r){var i=Ro();r=r===void 0?null:r;var a=void 0;if(W!==null){var o=W.memoizedState;if(a=o.destroy,r!==null&&Po(r,o.deps)){i.memoizedState=Xo(t,n,a,r);return}}U.flags|=e,i.memoizedState=Xo(1|t,n,a,r)}function es(e,t){return Qo(8390656,8,e,t)}function ts(e,t){return $o(2048,8,e,t)}function ns(e,t){return $o(4,2,e,t)}function rs(e,t){return $o(4,4,e,t)}function is(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function as(e,t,n){return n=n==null?null:n.concat([e]),$o(4,4,is.bind(null,t,e),n)}function os(){}function ss(e,t){var n=Ro();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Po(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cs(e,t){var n=Ro();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Po(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ls(e,t,n){return Oo&21?(Nr(n,t)||(n=Vt(),U.lanes|=n,Yc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Rs=!0),e.memoizedState=n)}function us(e,t){var n=L;L=n!==0&&4>n?n:4,e(!0);var r=Do.transition;Do.transition={};try{e(!1),t()}finally{L=n,Do.transition=r}}function ds(){return Ro().memoizedState}function fs(e,t,n){var r=ml(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ms(e))hs(t,n);else if(n=no(e,t,n,r),n!==null){var i=pl();hl(n,e,r,i),gs(n,t,r)}}function ps(e,t,n){var r=ml(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ms(e))hs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Nr(s,o)){var c=t.interleaved;c===null?(i.next=i,to(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=no(e,t,i,r),n!==null&&(i=pl(),hl(n,e,r,i),gs(n,t,r))}}function ms(e){var t=e.alternate;return e===U||t!==null&&t===U}function hs(e,t){Ao=ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wt(e,n)}}var _s={readContext:$a,useCallback:No,useContext:No,useEffect:No,useImperativeHandle:No,useInsertionEffect:No,useLayoutEffect:No,useMemo:No,useReducer:No,useRef:No,useState:No,useDebugValue:No,useDeferredValue:No,useTransition:No,useMutableSource:No,useSyncExternalStore:No,useId:No,unstable_isNewReconciler:!1},vs={readContext:$a,useCallback:function(e,t){return Lo().memoizedState=[e,t===void 0?null:t],e},useContext:$a,useEffect:es,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Qo(4194308,4,is.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qo(4,2,e,t)},useMemo:function(e,t){var n=Lo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lo();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fs.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Lo();return e={current:e},t.memoizedState=e},useState:Yo,useDebugValue:os,useDeferredValue:function(e){return Lo().memoizedState=e},useTransition:function(){var e=Yo(!1),t=e[0];return e=us.bind(null,e[1]),Lo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=U,a=Lo();if(V){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Y===null)throw Error(r(349));Oo&30||Wo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,es(Ko.bind(null,i,o,e),[e]),i.flags|=2048,Xo(9,Go.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Lo(),t=Y.identifierPrefix;if(V){var n=xa,r=ba;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=jo++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Mo++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},ys={readContext:$a,useCallback:ss,useContext:$a,useEffect:ts,useImperativeHandle:as,useInsertionEffect:ns,useLayoutEffect:rs,useMemo:cs,useReducer:Bo,useRef:Zo,useState:function(){return Bo(zo)},useDebugValue:os,useDeferredValue:function(e){return ls(Ro(),W.memoizedState,e)},useTransition:function(){return[Bo(zo)[0],Ro().memoizedState]},useMutableSource:Ho,useSyncExternalStore:Uo,useId:ds,unstable_isNewReconciler:!1},bs={readContext:$a,useCallback:ss,useContext:$a,useEffect:ts,useImperativeHandle:as,useInsertionEffect:ns,useLayoutEffect:rs,useMemo:cs,useReducer:Vo,useRef:Zo,useState:function(){return Vo(zo)},useDebugValue:os,useDeferredValue:function(e){var t=Ro();return W===null?t.memoizedState=e:ls(t,W.memoizedState,e)},useTransition:function(){return[Vo(zo)[0],Ro().memoizedState]},useMutableSource:Ho,useSyncExternalStore:Uo,useId:ds,unstable_isNewReconciler:!1};function xs(e,t){if(e&&e.defaultProps){for(var n in t=M({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ss(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:M({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cs={isMounted:function(e){return(e=e._reactInternals)?pt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pl(),i=ml(e),a=so(r,i);a.payload=t,n!=null&&(a.callback=n),t=co(e,a,i),t!==null&&(hl(t,e,i,r),lo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pl(),i=ml(e),a=so(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=co(e,a,i),t!==null&&(hl(t,e,i,r),lo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pl(),r=ml(e),i=so(n,r);i.tag=2,t!=null&&(i.callback=t),t=co(e,i,r),t!==null&&(hl(t,e,r,n),lo(t,e,r))}};function ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(i,a):!0}function Ts(e,t,n){var r=!1,i=Xi,a=t.contextType;return typeof a==`object`&&a?a=$a(a):(i=ta(t)?$i:Zi.current,r=t.contextTypes,a=(r=r!=null)?ea(e,i):Xi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Es(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cs.enqueueReplaceState(t,t.state,null)}function Ds(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ao(e);var a=t.contextType;typeof a==`object`&&a?i.context=$a(a):(a=ta(t)?$i:Zi.current,i.context=ea(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(Ss(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&Cs.enqueueReplaceState(i,i.state,null),fo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Os(e,t){try{var n=``,r=t;do n+=de(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function ks(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function As(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var js=typeof WeakMap==`function`?WeakMap:Map;function Ms(e,t,n){n=so(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rl||(rl=!0,il=r),As(e,t)},n}function Ns(e,t,n){n=so(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){As(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){As(e,t),typeof r!=`function`&&(al===null?al=new Set([this]):al.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Ps(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new js;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zl.bind(null,e,t,n),t.then(e,e))}function Fs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Is(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=so(-1,1),t.tag=2,co(n,t,1))),n.lanes|=1),e)}var Ls=C.ReactCurrentOwner,Rs=!1;function zs(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function Bs(e,t,n,r,i){n=n.render;var a=t.ref;return Qa(t,i),r=Fo(e,t,n,r,a,i),n=Io(),e!==null&&!Rs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,oc(e,t,i)):(V&&n&&wa(t),t.flags|=1,zs(e,t,r,i),t.child)}function Vs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ql(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Hs(e,t,a,r,i)):(e=Xl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Pr:n,n(o,r)&&e.ref===t.ref)return oc(e,t,i)}return t.flags|=1,e=Yl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Hs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Pr(a,r)&&e.ref===t.ref){if(Rs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Rs=!0);else return t.lanes=e.lanes,oc(e,t,i)}}return Gs(e,t,n,r,i)}function Us(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`){if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(qc,Kc),Kc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(qc,Kc),Kc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,B(qc,Kc),Kc|=r}}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),B(qc,Kc),Kc|=r;return zs(e,t,i,n),t.child}function Ws(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gs(e,t,n,r,i){var a=ta(n)?$i:Zi.current;return a=ea(t,a),Qa(t,i),n=Fo(e,t,n,r,a,i),r=Io(),e!==null&&!Rs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,oc(e,t,i)):(V&&r&&wa(t),t.flags|=1,zs(e,t,n,i),t.child)}function Ks(e,t,n,r,i){if(ta(n)){var a=!0;aa(t)}else a=!1;if(Qa(t,i),t.stateNode===null)ac(e,t),Ts(t,n,r),Ds(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=$a(l):(l=ta(n)?$i:Zi.current,l=ea(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Es(t,o,r,l),io=!1;var f=t.memoizedState;o.state=f,fo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Qi.current||io?(typeof u==`function`&&(Ss(t,n,u,r),c=t.memoizedState),(s=io||ws(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,oo(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:xs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=$a(c):(c=ta(n)?$i:Zi.current,c=ea(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Es(t,o,r,c),io=!1,f=t.memoizedState,o.state=f,fo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Qi.current||io?(typeof p==`function`&&(Ss(t,n,p,r),m=t.memoizedState),(l=io||ws(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return qs(e,t,n,r,a,i)}function qs(e,t,n,r,i,a){Ws(e,t);var o=!!(t.flags&128);if(!r&&!o)return i&&oa(t,n,!1),oc(e,t,a);r=t.stateNode,Ls.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ua(t,e.child,null,a),t.child=Ua(t,null,s,a)):zs(e,t,s,a),t.memoizedState=r.state,i&&oa(t,n,!0),t.child}function Js(e){var t=e.stateNode;t.pendingContext?ra(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ra(e,t.context,!1),yo(e,t.containerInfo)}function Ys(e,t,n,r,i){return Ia(),La(i),t.flags|=256,zs(e,t,n,r),t.child}var Xs={dehydrated:null,treeContext:null,retryLane:0};function Zs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qs(e,t,n){var r=t.pendingProps,i=H.current,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(i&2)),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(H,i&1),e===null)return Ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.lanes=t.mode&1?e.data===`$!`?8:1073741824:1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ql(o,r,0,null),e=Zl(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Zs(n),t.memoizedState=Xs,e):$s(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return tc(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Yl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Zl(a,o,n,null),a.flags|=2):a=Yl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Zs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Xs,r}return a=e.child,e=a.sibling,r=Yl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $s(e,t){return t=Ql({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function ec(e,t,n,r){return r!==null&&La(r),Ua(t,e.child,null,n),e=$s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tc(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=ks(Error(r(422))),ec(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=Ql({mode:`visible`,children:i.children},a,0,null),o=Zl(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Ua(t,e.child,null,s),t.child.memoizedState=Zs(s),t.memoizedState=Xs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return ec(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=ks(o,i,void 0),ec(e,t,s,i)}if(c=(s&e.childLanes)!==0,Rs||c){if(i=Y,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,ro(e,a),hl(i,e,a,-1))}return kl(),i=ks(Error(r(421))),ec(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Vl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Da=Pi(a.nextSibling),Ea=t,V=!0,Oa=null,e!==null&&(_a[va++]=ba,_a[va++]=xa,_a[va++]=ya,ba=e.id,xa=e.overflow,ya=t),t=$s(t,i.children),t.flags|=4096,t)}function nc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Za(e.return,t,n)}function rc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function ic(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(zs(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nc(e,n,t);else if(e.tag===19)nc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),rc(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}rc(t,!0,n,null,a);break;case`together`:rc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ac(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function oc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Yl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sc(e,t,n){switch(t.tag){case 3:Js(t),Ia();break;case 5:xo(t);break;case 1:ta(t.type)&&aa(t);break;case 4:yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Ga,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(B(H,H.current&1),e=oc(e,t,n),e===null?null:e.sibling):Qs(e,t,n):(B(H,H.current&1),t.flags|=128,null);B(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ic(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Us(e,t,n)}return oc(e,t,n)}var cc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},lc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,vo(ho.current);var o=null;switch(n){case`input`:i=be(e,i),r=be(e,r),o=[];break;case`select`:i=M({},i,{value:void 0}),r=M({},r,{value:void 0}),o=[];break;case`textarea`:i=Oe(e,i),r=Oe(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=wi)}He(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null){if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null))}for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null)){if(u===`style`){if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l}else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&R(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},uc=function(e,t,n,r){n!==r&&(t.flags|=4)};function dc(e,t){if(!V)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pc(e,t,n){var i=t.pendingProps;switch(Ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fc(t),null;case 1:return ta(t.type)&&na(),fc(t),null;case 3:return i=t.stateNode,bo(),z(Qi),z(Zi),To(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Pa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oa!==null&&(yl(Oa),Oa=null))),fc(t),null;case 5:So(t);var o=vo(_o.current);if(n=t.type,e!==null&&t.stateNode!=null)lc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return fc(t),null}if(e=vo(ho.current),Pa(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Li]=t,i[Ri]=s,e=!!(t.mode&1),n){case`dialog`:R(`cancel`,i),R(`close`,i);break;case`iframe`:case`object`:case`embed`:R(`load`,i);break;case`video`:case`audio`:for(o=0;o<si.length;o++)R(si[o],i);break;case`source`:R(`error`,i);break;case`img`:case`image`:case`link`:R(`error`,i),R(`load`,i);break;case`details`:R(`toggle`,i);break;case`input`:xe(i,s),R(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},R(`invalid`,i);break;case`textarea`:ke(i,s),R(`invalid`,i)}for(var c in He(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&Ci(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&Ci(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&R(`scroll`,i)}switch(n){case`input`:_e(i),we(i,s,!0);break;case`textarea`:_e(i),je(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=wi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Me(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Li]=t,e[Ri]=i,cc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Ue(n,i),n){case`dialog`:R(`cancel`,e),R(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:R(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<si.length;o++)R(si[o],e);o=i;break;case`source`:R(`error`,e),o=i;break;case`img`:case`image`:case`link`:R(`error`,e),R(`load`,e),o=i;break;case`details`:R(`toggle`,e),o=i;break;case`input`:xe(e,i),o=be(e,i),R(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=M({},i,{value:void 0}),R(`invalid`,e);break;case`textarea`:ke(e,i),o=Oe(e,i),R(`invalid`,e);break;default:o=i}for(s in He(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Be(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Fe(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Ie(e,u):typeof u==`number`&&Ie(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&R(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:_e(e),we(e,i,!1);break;case`textarea`:_e(e),je(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+me(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&De(e,!!i.multiple,i.defaultValue,!0):De(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=wi)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fc(t),null;case 6:if(e&&t.stateNode!=null)uc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=vo(_o.current),vo(ho.current),Pa(t)){if(i=t.stateNode,n=t.memoizedProps,i[Li]=t,(s=i.nodeValue!==n)&&(e=Ea,e!==null))switch(e.tag){case 3:Ci(i.nodeValue,n,!!(e.mode&1));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ci(i.nodeValue,n,!!(e.mode&1))}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Li]=t,t.stateNode=i}return fc(t),null;case 13:if(z(H),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Da!==null&&t.mode&1&&!(t.flags&128))Fa(),Ia(),t.flags|=98560,s=!1;else if(s=Pa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Li]=t}else Ia(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fc(t),s=!1}else Oa!==null&&(yl(Oa),Oa=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?Q===0&&(Q=3):kl())),t.updateQueue!==null&&(t.flags|=4),fc(t),null);case 4:return bo(),e===null&&pi(t.stateNode.containerInfo),fc(t),null;case 10:return Xa(t.type._context),fc(t),null;case 17:return ta(t.type)&&na(),fc(t),null;case 19:if(z(H),s=t.memoizedState,s===null)return fc(t),null;if(i=!!(t.flags&128),c=s.rendering,c===null){if(i)dc(s,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=Co(e),c!==null){for(t.flags|=128,dc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(H,H.current&1|2),t.child}e=e.sibling}s.tail!==null&&N()>tl&&(t.flags|=128,i=!0,dc(s,!1),t.lanes=4194304)}}else{if(!i){if(e=Co(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!V)return fc(t),null}else 2*N()-s.renderingStartTime>tl&&n!==1073741824&&(t.flags|=128,i=!0,dc(s,!1),t.lanes=4194304)}s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(fc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=N(),t.sibling=null,n=H.current,B(H,i?n&1|2:n&1),t);case 22:case 23:return Tl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Kc&1073741824&&(fc(t),t.subtreeFlags&6&&(t.flags|=8192)):fc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function mc(e,t){switch(Ta(t),t.tag){case 1:return ta(t.type)&&na(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bo(),z(Qi),z(Zi),To(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return So(t),null;case 13:if(z(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(H),null;case 4:return bo(),null;case 10:return Xa(t.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var hc=!1,gc=!1,_c=typeof WeakSet==`function`?WeakSet:Set,K=null;function vc(e,t){var n=e.ref;if(n!==null){if(typeof n==`function`)try{n(null)}catch(n){$(e,t,n)}else n.current=null}}function yc(e,t,n){try{n()}catch(n){$(e,t,n)}}var bc=!1;function xc(e,t){if(Ti=_n,e=Rr(),zr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Ei={focusedElem:e,selectionRange:n},_n=!1,K=t;K!==null;)if(t=K,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:xs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){$(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return h=bc,bc=!1,h}function Sc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&yc(t,n,a)}i=i.next}while(i!==r)}}function Cc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Tc(e){var t=e.alternate;t!==null&&(e.alternate=null,Tc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Li],delete t[Ri],delete t[Bi],delete t[Vi],delete t[Hi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function Dc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wi));else if(r!==4&&(e=e.child,e!==null))for(Oc(e,t,n),e=e.sibling;e!==null;)Oc(e,t,n),e=e.sibling}function kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(kc(e,t,n),e=e.sibling;e!==null;)kc(e,t,n),e=e.sibling}var q=null,Ac=!1;function jc(e,t,n){for(n=n.child;n!==null;)Mc(e,t,n),n=n.sibling}function Mc(e,t,n){if(P&&typeof P.onCommitFiberUnmount==`function`)try{P.onCommitFiberUnmount(kt,n)}catch{}switch(n.tag){case 5:gc||vc(n,t);case 6:var r=q,i=Ac;q=null,jc(e,t,n),q=r,Ac=i,q!==null&&(Ac?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Ac?(e=q,n=n.stateNode,e.nodeType===8?Ni(e.parentNode,n):e.nodeType===1&&Ni(e,n),hn(e)):Ni(q,n.stateNode));break;case 4:r=q,i=Ac,q=n.stateNode.containerInfo,Ac=!0,jc(e,t,n),q=r,Ac=i;break;case 0:case 11:case 14:case 15:if(!gc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&yc(n,t,o),i=i.next}while(i!==r)}jc(e,t,n);break;case 1:if(!gc&&(vc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){$(n,t,e)}jc(e,t,n);break;case 21:jc(e,t,n);break;case 22:n.mode&1?(gc=(r=gc)||n.memoizedState!==null,jc(e,t,n),gc=r):jc(e,t,n);break;default:jc(e,t,n)}}function Nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _c),t.forEach(function(t){var r=Hl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Pc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:q=c.stateNode,Ac=!1;break a;case 3:q=c.stateNode.containerInfo,Ac=!0;break a;case 4:q=c.stateNode.containerInfo,Ac=!0;break a}c=c.return}if(q===null)throw Error(r(160));Mc(o,s,a),q=null,Ac=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){$(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fc(t,e),t=t.sibling}function Fc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pc(t,e),Ic(e),i&4){try{Sc(3,e,e.return),Cc(3,e)}catch(t){$(e,e.return,t)}try{Sc(5,e,e.return)}catch(t){$(e,e.return,t)}}break;case 1:Pc(t,e),Ic(e),i&512&&n!==null&&vc(n,n.return);break;case 5:if(Pc(t,e),Ic(e),i&512&&n!==null&&vc(n,n.return),e.flags&32){var a=e.stateNode;try{Ie(a,``)}catch(t){$(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Se(a,o),Ue(c,s);var u=Ue(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Be(a,f):d===`dangerouslySetInnerHTML`?Fe(a,f):d===`children`?Ie(a,f):S(a,d,f,u)}switch(c){case`input`:Ce(a,o);break;case`textarea`:Ae(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?De(a,!!o.multiple,o.multiple?[]:``,!1):De(a,!!o.multiple,o.defaultValue,!0)):De(a,!!o.multiple,m,!1)}a[Ri]=o}catch(t){$(e,e.return,t)}}break;case 6:if(Pc(t,e),Ic(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){$(e,e.return,t)}}break;case 3:if(Pc(t,e),Ic(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{hn(t.containerInfo)}catch(t){$(e,e.return,t)}break;case 4:Pc(t,e),Ic(e);break;case 13:Pc(t,e),Ic(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(el=N())),i&4&&Nc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(gc=(u=gc)||d,Pc(t,e),gc=u):Pc(t,e),Ic(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(K=e,d=e.child;d!==null;){for(f=K=d;K!==null;){switch(p=K,m=p.child,p.tag){case 0:case 11:case 14:case 15:Sc(4,p,p.return);break;case 1:vc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){$(i,n,e)}}break;case 5:vc(p,p.return);break;case 22:if(p.memoizedState!==null){Bc(f);continue}}m===null?Bc(f):(m.return=p,K=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=ze(`display`,s))}catch(t){$(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){$(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pc(t,e),Ic(e),i&4&&Nc(e);break;case 21:break;default:Pc(t,e),Ic(e)}}function Ic(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Ec(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Ie(a,``),i.flags&=-33),kc(e,Dc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Oc(e,Dc(e),o);break;default:throw Error(r(161))}}catch(t){$(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lc(e,t,n){K=e,Rc(e,t,n)}function Rc(e,t,n){for(var r=!!(e.mode&1);K!==null;){var i=K,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||gc;s=hc;var l=gc;if(hc=o,(gc=c)&&!l)for(K=i;K!==null;)o=K,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Vc(i):(c.return=o,K=c);for(;a!==null;)K=a,Rc(a,t,n),a=a.sibling;K=i,hc=s,gc=l}zc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,K=a):zc(e,t,n)}}function zc(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:gc||Cc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!gc){if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:xs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;o!==null&&po(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}po(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&hn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}gc||t.flags&512&&wc(t)}catch(e){$(t,t.return,e)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function Bc(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Vc(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Cc(4,t)}catch(e){$(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){$(t,i,e)}}var a=t.return;try{wc(t)}catch(e){$(t,a,e)}break;case 5:var o=t.return;try{wc(t)}catch(e){$(t,o,e)}}}catch(e){$(t,t.return,e)}if(t===e){K=null;break}var s=t.sibling;if(s!==null){s.return=t.return,K=s;break}K=t.return}}var Hc=Math.ceil,Uc=C.ReactCurrentDispatcher,Wc=C.ReactCurrentOwner,Gc=C.ReactCurrentBatchConfig,J=0,Y=null,X=null,Z=0,Kc=0,qc=Yi(0),Q=0,Jc=null,Yc=0,Xc=0,Zc=0,Qc=null,$c=null,el=0,tl=1/0,nl=null,rl=!1,il=null,al=null,ol=!1,sl=null,cl=0,ll=0,ul=null,dl=-1,fl=0;function pl(){return J&6?N():dl===-1?dl=N():dl}function ml(e){return e.mode&1?J&2&&Z!==0?Z&-Z:Ra.transition===null?(e=L,e===0?(e=window.event,e=e===void 0?16:Cn(e.type),e):e):(fl===0&&(fl=Vt()),fl):1}function hl(e,t,n,i){if(50<ll)throw ll=0,ul=null,Error(r(185));Ut(e,n,i),(!(J&2)||e!==Y)&&(e===Y&&(!(J&2)&&(Xc|=n),Q===4&&xl(e,Z)),gl(e,i),n===1&&J===0&&!(t.mode&1)&&(tl=N()+500,ca&&fa()))}function gl(e,t){var n=e.callbackNode;zt(e,t);var r=Lt(e,e===Y?Z:0);if(r===0)n!==null&&bt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bt(n),t===1)e.tag===0?da(Sl.bind(null,e)):ua(Sl.bind(null,e)),ji(function(){!(J&6)&&fa()}),n=null;else{switch(Gt(r)){case 1:n=wt;break;case 4:n=Tt;break;case 16:n=Et;break;case 536870912:n=Ot;break;default:n=Et}n=Wl(n,_l.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _l(e,t){if(dl=-1,fl=0,J&6)throw Error(r(327));var n=e.callbackNode;if(Ll()&&e.callbackNode!==n)return null;var i=Lt(e,e===Y?Z:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Al(e,i);else{t=i;var a=J;J|=2;var o=Ol();(Y!==e||Z!==t)&&(nl=null,tl=N()+500,El(e,t));do try{Ml();break}catch(t){Dl(e,t)}while(1);Ya(),Uc.current=o,J=a,X===null?(Y=null,Z=0,t=Q):t=0}if(t!==0){if(t===2&&(a=Bt(e),a!==0&&(i=a,t=vl(e,a))),t===1)throw n=Jc,El(e,0),xl(e,i),gl(e,N()),n;if(t===6)xl(e,i);else{if(a=e.current.alternate,!(i&30)&&!bl(a)&&(t=Al(e,i),t===2&&(o=Bt(e),o!==0&&(i=o,t=vl(e,o))),t===1))throw n=Jc,El(e,0),xl(e,i),gl(e,N()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Fl(e,$c,nl);break;case 3:if(xl(e,i),(i&130023424)===i&&(t=el+500-N(),10<t)){if(Lt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){pl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Oi(Fl.bind(null,e,$c,nl),t);break}Fl(e,$c,nl);break;case 4:if(xl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-jt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=N()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Hc(i/1960))-i,10<i){e.timeoutHandle=Oi(Fl.bind(null,e,$c,nl),i);break}Fl(e,$c,nl);break;case 5:Fl(e,$c,nl);break;default:throw Error(r(329))}}}return gl(e,N()),e.callbackNode===n?_l.bind(null,e):null}function vl(e,t){var n=Qc;return e.current.memoizedState.isDehydrated&&(El(e,t).flags|=256),e=Al(e,t),e!==2&&(t=$c,$c=n,t!==null&&yl(t)),e}function yl(e){$c===null?$c=e:$c.push.apply($c,e)}function bl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Nr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xl(e,t){for(t&=~Zc,t&=~Xc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-jt(t),r=1<<n;e[n]=-1,t&=~r}}function Sl(e){if(J&6)throw Error(r(327));Ll();var t=Lt(e,0);if(!(t&1))return gl(e,N()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var i=Bt(e);i!==0&&(t=i,n=vl(e,i))}if(n===1)throw n=Jc,El(e,0),xl(e,t),gl(e,N()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fl(e,$c,nl),gl(e,N()),null}function Cl(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(tl=N()+500,ca&&fa())}}function wl(e){sl!==null&&sl.tag===0&&!(J&6)&&Ll();var t=J;J|=1;var n=Gc.transition,r=L;try{if(Gc.transition=null,L=1,e)return e()}finally{L=r,Gc.transition=n,J=t,!(J&6)&&fa()}}function Tl(){Kc=qc.current,z(qc)}function El(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ki(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&na();break;case 3:bo(),z(Qi),z(Zi),To();break;case 5:So(r);break;case 4:bo();break;case 13:z(H);break;case 19:z(H);break;case 10:Xa(r.type._context);break;case 22:case 23:Tl()}n=n.return}if(Y=e,X=e=Yl(e.current,null),Z=Kc=t,Q=0,Jc=null,Zc=Xc=Yc=0,$c=Qc=null,eo!==null){for(t=0;t<eo.length;t++)if(n=eo[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}eo=null}return e}function Dl(e,t){do{var n=X;try{if(Ya(),Eo.current=_s,ko){for(var i=U.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}ko=!1}if(Oo=0,G=W=U=null,Ao=!1,jo=0,Wc.current=null,n===null||n.return===null){Q=1,Jc=t,X=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Z,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Fs(s);if(m!==null){m.flags&=-257,Is(m,s,c,o,t),m.mode&1&&Ps(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}if(!(t&1)){Ps(o,u,t),kl();break a}l=Error(r(426))}else if(V&&c.mode&1){var _=Fs(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Is(_,s,c,o,t),La(Os(l,c));break a}}o=l=Os(l,c),Q!==4&&(Q=2),Qc===null?Qc=[o]:Qc.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Ms(o,l,t);uo(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(al===null||!al.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ns(o,c,t);uo(o,x);break a}}o=o.return}while(o!==null)}Pl(n)}catch(e){t=e,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function Ol(){var e=Uc.current;return Uc.current=_s,e===null?_s:e}function kl(){(Q===0||Q===3||Q===2)&&(Q=4),Y===null||!(Yc&268435455)&&!(Xc&268435455)||xl(Y,Z)}function Al(e,t){var n=J;J|=2;var i=Ol();(Y!==e||Z!==t)&&(nl=null,El(e,t));do try{jl();break}catch(t){Dl(e,t)}while(1);if(Ya(),J=n,Uc.current=i,X!==null)throw Error(r(261));return Y=null,Z=0,Q}function jl(){for(;X!==null;)Nl(X)}function Ml(){for(;X!==null&&!xt();)Nl(X)}function Nl(e){var t=Ul(e.alternate,e,Kc);e.memoizedProps=e.pendingProps,t===null?Pl(e):X=t,Wc.current=null}function Pl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mc(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,X=null;return}}else if(n=pc(n,t,Kc),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Q===0&&(Q=5)}function Fl(e,t,n){var r=L,i=Gc.transition;try{Gc.transition=null,L=1,Il(e,t,n,r)}finally{Gc.transition=i,L=r}return null}function Il(e,t,n,i){do Ll();while(sl!==null);if(J&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(I(e,o),e===Y&&(X=Y=null,Z=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,Wl(Et,function(){return Ll(),null})),o=!!(n.flags&15990),n.subtreeFlags&15990||o){o=Gc.transition,Gc.transition=null;var s=L;L=1;var c=J;J|=4,Wc.current=null,xc(e,n),Fc(n,e),Br(Ei),_n=!!Ti,Ei=Ti=null,e.current=n,Lc(n,e,a),St(),J=c,L=s,Gc.transition=o}else e.current=n;if(ol&&(ol=!1,sl=e,cl=a),o=e.pendingLanes,o===0&&(al=null),At(n.stateNode,i),gl(e,N()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(rl)throw rl=!1,e=il,il=null,e;return cl&1&&e.tag!==0&&Ll(),o=e.pendingLanes,o&1?e===ul?ll++:(ll=0,ul=e):ll=0,fa(),null}function Ll(){if(sl!==null){var e=Gt(cl),t=Gc.transition,n=L;try{if(Gc.transition=null,L=16>e?16:e,sl===null)var i=!1;else{if(e=sl,sl=null,cl=0,J&6)throw Error(r(331));var a=J;for(J|=4,K=e.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(K=u;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:Sc(8,d,o)}var f=d.child;if(f!==null)f.return=d,K=f;else for(;K!==null;){d=K;var p=d.sibling,m=d.return;if(Tc(d),d===u){K=null;break}if(p!==null){p.return=m,K=p;break}K=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else b:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Sc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,K=v;break b}K=o.return}}var y=e.current;for(K=y;K!==null;){s=K;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,K=b;else b:for(s=y;K!==null;){if(c=K,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Cc(9,c)}}catch(e){$(c,c.return,e)}if(c===s){K=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,K=x;break b}K=c.return}}if(J=a,fa(),P&&typeof P.onPostCommitFiberRoot==`function`)try{P.onPostCommitFiberRoot(kt,e)}catch{}i=!0}return i}finally{L=n,Gc.transition=t}}return!1}function Rl(e,t,n){t=Os(n,t),t=Ms(e,t,1),e=co(e,t,1),t=pl(),e!==null&&(Ut(e,1,t),gl(e,t))}function $(e,t,n){if(e.tag===3)Rl(e,e,n);else for(;t!==null;){if(t.tag===3){Rl(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(al===null||!al.has(r))){e=Os(n,e),e=Ns(t,e,1),t=co(t,e,1),e=pl(),t!==null&&(Ut(t,1,e),gl(t,e));break}}t=t.return}}function zl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pl(),e.pingedLanes|=e.suspendedLanes&n,Y===e&&(Z&n)===n&&(Q===4||Q===3&&(Z&130023424)===Z&&500>N()-el?El(e,0):Zc|=n),gl(e,t)}function Bl(e,t){t===0&&(e.mode&1?(t=Ft,Ft<<=1,!(Ft&130023424)&&(Ft=4194304)):t=1);var n=pl();e=ro(e,t),e!==null&&(Ut(e,t,n),gl(e,n))}function Vl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bl(e,n)}function Hl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Bl(e,n)}var Ul=function(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps||Qi.current)Rs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Rs=!1,sc(e,t,n);Rs=!!(e.flags&131072)}}else Rs=!1,V&&t.flags&1048576&&Ca(t,ga,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;ac(e,t),e=t.pendingProps;var a=ea(t,Zi.current);Qa(t,n),a=Fo(null,t,i,e,a,n);var o=Io();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ta(i)?(o=!0,aa(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ao(t),a.updater=Cs,t.stateNode=a,a._reactInternals=t,Ds(t,i,e,n),t=qs(null,t,i,!0,o,n)):(t.tag=0,V&&o&&wa(t),zs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(ac(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Jl(i),e=xs(i,e),a){case 0:t=Gs(null,t,i,e,n);break a;case 1:t=Ks(null,t,i,e,n);break a;case 11:t=Bs(null,t,i,e,n);break a;case 14:t=Vs(null,t,i,xs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:xs(i,a),Gs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:xs(i,a),Ks(e,t,i,a,n);case 3:a:{if(Js(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,oo(e,t),fo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Os(Error(r(423)),t),t=Ys(e,t,i,n,a);break a}if(i!==a){a=Os(Error(r(424)),t),t=Ys(e,t,i,n,a);break a}for(Da=Pi(t.stateNode.containerInfo.firstChild),Ea=t,V=!0,Oa=null,n=Wa(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ia(),i===a){t=oc(e,t,n);break a}zs(e,t,i,n)}t=t.child}return t;case 5:return xo(t),e===null&&Ma(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,Di(i,a)?s=null:o!==null&&Di(i,o)&&(t.flags|=32),Ws(e,t),zs(e,t,s,n),t.child;case 6:return e===null&&Ma(t),null;case 13:return Qs(e,t,n);case 4:return yo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ua(t,null,i,n):zs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:xs(i,a),Bs(e,t,i,a,n);case 7:return zs(e,t,t.pendingProps,n),t.child;case 8:return zs(e,t,t.pendingProps.children,n),t.child;case 12:return zs(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,B(Ga,i._currentValue),i._currentValue=s,o!==null){if(Nr(o.value,s)){if(o.children===a.children&&!Qi.current){t=oc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=so(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Za(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Za(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}}zs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Qa(t,n),a=$a(a),i=i(a),t.flags|=1,zs(e,t,i,n),t.child;case 14:return i=t.type,a=xs(i,t.pendingProps),a=xs(i.type,a),Vs(e,t,i,a,n);case 15:return Hs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:xs(i,a),ac(e,t),t.tag=1,ta(i)?(e=!0,aa(t)):e=!1,Qa(t,n),Ts(t,i,a),Ds(t,i,a,n),qs(null,t,i,!0,e,n);case 19:return ic(e,t,n);case 22:return Us(e,t,n)}throw Error(r(156,t.tag))};function Wl(e,t){return yt(e,t)}function Gl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kl(e,t,n,r){return new Gl(e,t,n,r)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jl(e){if(typeof e==`function`)return+!!ql(e);if(e!=null){if(e=e.$$typeof,e===A)return 11;if(e===j)return 14}return 2}function Yl(e,t){var n=e.alternate;return n===null?(n=Kl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)ql(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case E:return Zl(n.children,a,o,t);case D:s=8,a|=8;break;case O:return e=Kl(12,n,t,a|2),e.elementType=O,e.lanes=o,e;case te:return e=Kl(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=Kl(19,n,t,a),e.elementType=ne,e.lanes=o,e;case ie:return Ql(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case k:s=10;break a;case ee:s=9;break a;case A:s=11;break a;case j:s=14;break a;case re:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Kl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Zl(e,t,n,r){return e=Kl(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=Kl(22,e,r,t),e.elementType=ie,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Kl(6,e,null,t),e.lanes=n,e}function eu(e,t,n){return t=Kl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ht(0),this.expirationTimes=Ht(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ht(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,i,a,o,s,c){return e=new tu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Kl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ao(a),e}function ru(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function iu(e){if(!e)return Xi;e=e._reactInternals;a:{if(pt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(ta(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(ta(n))return ia(e,n,t)}return t}function au(e,t,n,r,i,a,o,s,c){return e=nu(n,r,!0,e,i,a,o,s,c),e.context=iu(null),n=e.current,r=pl(),i=ml(n),a=so(r,i),a.callback=t??null,co(n,a,i),e.current.lanes=i,Ut(e,i,r),gl(e,r),e}function ou(e,t,n,r){var i=t.current,a=pl(),o=ml(i);return n=iu(n),t.context===null?t.context=n:t.pendingContext=n,t=so(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=co(i,t,o),e!==null&&(hl(e,i,o,a),lo(e,i,o)),o}function su(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lu(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function uu(){return null}var du=typeof reportError==`function`?reportError:function(e){console.error(e)};function fu(e){this._internalRoot=e}pu.prototype.render=fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));ou(e,t,null,null)},pu.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wl(function(){ou(null,e,null,null)}),t[zi]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&un(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function gu(){}function _u(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=su(o);a.call(e)}}var o=au(t,r,e,0,null,!1,!1,``,gu);return e._reactRootContainer=o,e[zi]=o.current,pi(e.nodeType===8?e.parentNode:e),wl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=su(c);s.call(e)}}var c=nu(e,0,!1,null,null,!1,!1,``,gu);return e._reactRootContainer=c,e[zi]=c.current,pi(e.nodeType===8?e.parentNode:e),wl(function(){ou(t,c,n,r)}),c}function vu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=su(o);s.call(e)}}ou(t,o,e,i)}else o=_u(n,t,e,i,r);return su(o)}Kt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=It(t.pendingLanes);n!==0&&(Wt(t,n|1),gl(t,N()),!(J&6)&&(tl=N()+500,fa()))}break;case 13:wl(function(){var t=ro(e,1);t!==null&&hl(t,e,1,pl())}),lu(e,1)}},qt=function(e){if(e.tag===13){var t=ro(e,134217728);t!==null&&hl(t,e,134217728,pl()),lu(e,134217728)}},Jt=function(e){if(e.tag===13){var t=ml(e),n=ro(e,t);n!==null&&hl(n,e,t,pl()),lu(e,t)}},Yt=function(){return L},Xt=function(e,t){var n=L;try{return L=e,t()}finally{L=n}},Ke=function(e,t,n){switch(t){case`input`:if(Ce(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Ki(i);if(!a)throw Error(r(90));ve(i),Ce(i,a)}}}break;case`textarea`:Ae(e,n);break;case`select`:t=n.value,t!=null&&De(e,!!n.multiple,t,!1)}},Qe=Cl,$e=wl;var yu={usingClientEntryPoint:!1,Events:[Wi,Gi,Ki,Xe,Ze,Cl]},bu={findFiberByHostInstance:Ui,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},xu={bundleType:bu.bundleType,version:bu.version,rendererPackageName:bu.rendererPackageName,rendererConfig:bu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_t(e),e===null?null:e.stateNode},findFiberByHostInstance:bu.findFiberByHostInstance||uu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{kt=Su.inject(xu),P=Su}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(t))throw Error(r(200));return ru(e,t,null,n)},e.createRoot=function(e,t){if(!mu(e))throw Error(r(299));var n=!1,i=``,a=du;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,i,a),e[zi]=t.current,pi(e.nodeType===8?e.parentNode:e),new fu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=_t(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return wl(e)},e.hydrate=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!mu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=du;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=au(t,null,e,1,n??null,a,!1,o,s),e[zi]=t.current,pi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new pu(t)},e.render=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!hu(e))throw Error(r(40));return e._reactRootContainer?(wl(function(){vu(null,null,e,!1,function(){e._reactRootContainer=null,e[zi]=null})}),!0):!1},e.unstable_batchedUpdates=Cl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!hu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return vu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=_();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),y=u(p());_();var b=u(v(),1);function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(null,arguments)}var S;(function(e){e.Pop=`POP`,e.Push=`PUSH`,e.Replace=`REPLACE`})(S||={});var C=`popstate`;function w(e){e===void 0&&(e={});function t(e,t){let{pathname:n,search:r,hash:i}=e.location;return k(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){return typeof t==`string`?t:ee(t)}return te(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function E(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function D(){return Math.random().toString(36).substr(2,8)}function O(e,t){return{usr:e.state,key:e.key,idx:t}}function k(e,t,n,r){return n===void 0&&(n=null),x({pathname:typeof e==`string`?e:e.pathname,search:``,hash:``},typeof t==`string`?A(t):t,{state:n,key:t&&t.key||r||D()})}function ee(e){let{pathname:t=`/`,search:n=``,hash:r=``}=e;return n&&n!==`?`&&(t+=n.charAt(0)===`?`?n:`?`+n),r&&r!==`#`&&(t+=r.charAt(0)===`#`?r:`#`+r),t}function A(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function te(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=S.Pop,c=null,l=u();l??(l=0,o.replaceState(x({},o.state,{idx:l}),``));function u(){return(o.state||{idx:null}).idx}function d(){s=S.Pop;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=S.Push;let r=k(h.location,e,t);n&&n(r,e),l=u()+1;let d=O(r,l),f=h.createHref(r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=S.Replace;let r=k(h.location,e,t);n&&n(r,e),l=u();let i=O(r,l),d=h.createHref(r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){let t=i.location.origin===`null`?i.location.href:i.location.origin,n=typeof e==`string`?e:ee(e);return n=n.replace(/ $/,`%20`),T(t,`No window.location.(origin|href) available to create URL for href: `+n),new URL(n,t)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(C,d),c=e,()=>{i.removeEventListener(C,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}var ne;(function(e){e.data=`data`,e.deferred=`deferred`,e.redirect=`redirect`,e.error=`error`})(ne||={});function j(e,t,n){return n===void 0&&(n=`/`),re(e,t,n,!1)}function re(e,t,n,r){let i=ye((typeof t==`string`?A(t):t).pathname||`/`,n);if(i==null)return null;let a=ie(e);oe(a);let o=null,s=ve(i);for(let e=0;o==null&&e<a.length;++e)o=he(a[e],s,r);return o}function ie(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=``);let i=(e,i,a)=>{let o={relativePath:a===void 0?e.path||``:a,caseSensitive:e.caseSensitive===!0,childrenIndex:i,route:e};o.relativePath.startsWith(`/`)&&(T(o.relativePath.startsWith(r),`Absolute route path "`+o.relativePath+`" nested under path `+(`"`+r+`" is not valid. An absolute child route path `)+`must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length));let s=De([r,o.relativePath]),c=n.concat(o);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove `+(`all child routes from route path "`+s+`".`)),ie(e.children,t,c,s)),!(e.path==null&&!e.index)&&t.push({path:s,score:pe(s,e.index),routesMeta:c})};return e.forEach((e,t)=>{var n;if(e.path===``||!((n=e.path)!=null&&n.includes(`?`)))i(e,t);else for(let n of ae(e.path))i(e,t,n)}),t}function ae(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ae(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function oe(e){e.sort((e,t)=>e.score===t.score?me(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var M=/^:[\w-]+$/,se=3,ce=2,le=1,ue=10,de=-2,fe=e=>e===`*`;function pe(e,t){let n=e.split(`/`),r=n.length;return n.some(fe)&&(r+=de),t&&(r+=ce),n.filter(e=>!fe(e)).reduce((e,t)=>e+(M.test(t)?se:t===``?le:ue),r)}function me(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function he(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=ge({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=ge({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:De([a,u.pathname]),pathnameBase:Oe(De([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=De([a,u.pathnameBase]))}return o}function ge(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_e(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if(r===`*`){let e=s[n]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let c=s[n];return e[r]=i&&!c?void 0:(c||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function _e(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),E(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "`+e+`" will be treated as if it were `+(`"`+e.replace(/\*$/,`/*`)+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+(`please change the route path to "`+e.replace(/\*$/,`/*`)+`".`));let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:n!=null}),n?`/?([^\\/]+)?`:`/([^\\/]+)`));return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function ve(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return E(!1,`The URL path "`+e+`" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent `+(`encoding (`+t+`).`)),e}}function ye(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function be(e,t){t===void 0&&(t=`/`);let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?A(e):e,a;return n?(n=Ee(n),a=n.startsWith(`/`)?xe(n.substring(1),`/`):xe(n,t)):a=t,{pathname:a,search:ke(r),hash:Ae(i)}}function xe(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Se(e,t,n,r){return`Cannot include a '`+e+`' character in a manually specified `+("`to."+t+"` field ["+JSON.stringify(r)+`].  Please separate it out to the `)+("`to."+n+"` field. Alternatively you may provide the full path as ")+`a string in <Link to="..."> and the router will parse it for you.`}function Ce(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function we(e,t){let n=Ce(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function Te(e,t,n,r){r===void 0&&(r=!1);let i;typeof e==`string`?i=A(e):(i=x({},e),T(!i.pathname||!i.pathname.includes(`?`),Se(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),Se(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),Se(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=be(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ee=e=>e.replace(/\/\/+/g,`/`),De=e=>Ee(e.join(`/`)),Oe=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),ke=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ae=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e;function je(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}var Me=[`post`,`put`,`patch`,`delete`];new Set(Me);var Ne=[`get`,...Me];new Set(Ne);function Pe(){return Pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pe.apply(null,arguments)}var Fe=y.createContext(null),Ie=y.createContext(null),Le=y.createContext(null),Re=y.createContext(null),ze=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Be=y.createContext(null);function Ve(e,t){let{relative:n}=t===void 0?{}:t;!He()&&T(!1);let{basename:r,navigator:i}=y.useContext(Le),{hash:a,pathname:o,search:s}=qe(e,{relative:n}),c=o;return r!==`/`&&(c=o===`/`?r:De([r,o])),i.createHref({pathname:c,search:s,hash:a})}function He(){return y.useContext(Re)!=null}function Ue(){return!He()&&T(!1),y.useContext(Re).location}function We(e){y.useContext(Le).static||y.useLayoutEffect(e)}function Ge(){let{isDataRoute:e}=y.useContext(ze);return e?ct():Ke()}function Ke(){!He()&&T(!1);let e=y.useContext(Fe),{basename:t,future:n,navigator:r}=y.useContext(Le),{matches:i}=y.useContext(ze),{pathname:a}=Ue(),o=JSON.stringify(we(i,n.v7_relativeSplatPath)),s=y.useRef(!1);return We(()=>{s.current=!0}),y.useCallback(function(n,i){if(i===void 0&&(i={}),!s.current)return;if(typeof n==`number`){r.go(n);return}let c=Te(n,JSON.parse(o),a,i.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:De([t,c.pathname])),(i.replace?r.replace:r.push)(c,i.state,i)},[t,r,o,a,e])}function qe(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(Le),{matches:i}=y.useContext(ze),{pathname:a}=Ue(),o=JSON.stringify(we(i,r.v7_relativeSplatPath));return y.useMemo(()=>Te(e,JSON.parse(o),a,n===`path`),[e,o,a,n])}function Je(e,t){return Ye(e,t)}function Ye(e,t,n,r){!He()&&T(!1);let{navigator:i}=y.useContext(Le),{matches:a}=y.useContext(ze),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:`/`;o&&o.route;let l=Ue(),u;if(t){var d;let e=typeof t==`string`?A(t):t;!(c===`/`||(d=e.pathname)!=null&&d.startsWith(c))&&T(!1),u=e}else u=l;let f=u.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=j(e,{pathname:p}),h=et(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:De([c,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:De([c,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,n,r);return t&&h?y.createElement(Re.Provider,{value:{location:Pe({pathname:`/`,search:``,hash:``,state:null,key:`default`},u),navigationType:S.Pop}},h):h}function Xe(){let e=st(),t=je(e)?e.status+` `+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return y.createElement(y.Fragment,null,y.createElement(`h2`,null,`Unexpected Application Error!`),y.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?y.createElement(`pre`,{style:{padding:`0.5rem`,backgroundColor:`rgba(200,200,200, 0.5)`}},n):null,null)}var Ze=y.createElement(Xe,null),Qe=class extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error(`React Router caught the following error during render`,e,t)}render(){return this.state.error===void 0?this.props.children:y.createElement(ze.Provider,{value:this.props.routeContext},y.createElement(Be.Provider,{value:this.state.error,children:this.props.component}))}};function $e(e){let{routeContext:t,match:n,children:r}=e,i=y.useContext(Fe);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(ze.Provider,{value:t},r)}function et(e,t,n,r){if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n?.errors;if(o!=null){let e=a.findIndex(e=>e.route.id&&o?.[e.route.id]!==void 0);!(e>=0)&&T(!1),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&e[t.route.id]===void 0&&(!r||r[t.route.id]===void 0);if(t.route.lazy||i){s=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}return a.reduceRight((e,r,i)=>{let l,u=!1,d=null,f=null;n&&(l=o&&r.route.id?o[r.route.id]:void 0,d=r.route.errorElement||Ze,s&&(c<0&&i===0?(ut(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,f=null):c===i&&(u=!0,f=r.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,i+1)),m=()=>{let t;return t=l?d:u?f:r.route.Component?y.createElement(r.route.Component,null):r.route.element?r.route.element:e,y.createElement($e,{match:r,routeContext:{outlet:e,matches:p,isDataRoute:n!=null},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||i===0)?y.createElement(Qe,{location:n.location,revalidation:n.revalidation,component:d,error:l,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var tt=function(e){return e.UseBlocker=`useBlocker`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e}(tt||{}),nt=function(e){return e.UseBlocker=`useBlocker`,e.UseLoaderData=`useLoaderData`,e.UseActionData=`useActionData`,e.UseRouteError=`useRouteError`,e.UseNavigation=`useNavigation`,e.UseRouteLoaderData=`useRouteLoaderData`,e.UseMatches=`useMatches`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e.UseRouteId=`useRouteId`,e}(nt||{});function rt(e){let t=y.useContext(Fe);return!t&&T(!1),t}function it(e){let t=y.useContext(Ie);return!t&&T(!1),t}function at(e){let t=y.useContext(ze);return!t&&T(!1),t}function ot(e){let t=at(e),n=t.matches[t.matches.length-1];return!n.route.id&&T(!1),n.route.id}function st(){let e=y.useContext(Be),t=it(nt.UseRouteError),n=ot(nt.UseRouteError);return e===void 0?t.errors?.[n]:e}function ct(){let{router:e}=rt(tt.UseNavigateStable),t=ot(nt.UseNavigateStable),n=y.useRef(!1);return We(()=>{n.current=!0}),y.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r==`number`?e.navigate(r):e.navigate(r,Pe({fromRouteId:t},i)))},[e,t])}var lt={};function ut(e,t,n){!t&&!lt[e]&&(lt[e]=!0)}var dt=(e,t,n)=>(``+t+("You can use the `"+e+"` future flag to opt-in early. ")+(`For more information, see `+n+`.`),void 0);function ft(e,t){e?.v7_startTransition===void 0&&dt(`v7_startTransition`,"React Router will begin wrapping state updates in `React.startTransition` in v7",`https://reactrouter.com/v6/upgrading/future#v7_starttransition`),e?.v7_relativeSplatPath===void 0&&(!t||t.v7_relativeSplatPath===void 0)&&dt(`v7_relativeSplatPath`,`Relative route resolution within Splat routes is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath`),t&&(t.v7_fetcherPersist===void 0&&dt(`v7_fetcherPersist`,`The persistence behavior of fetchers is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist`),t.v7_normalizeFormMethod===void 0&&dt(`v7_normalizeFormMethod`,"Casing of `formMethod` fields is being normalized to uppercase in v7",`https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod`),t.v7_partialHydration===void 0&&dt(`v7_partialHydration`,"`RouterProvider` hydration behavior is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_partialhydration`),t.v7_skipActionErrorRevalidation===void 0&&dt(`v7_skipActionErrorRevalidation`,"The revalidation behavior after 4xx/5xx `action` responses is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation`))}function pt(e){let{to:t,replace:n,state:r,relative:i}=e;!He()&&T(!1);let{future:a,static:o}=y.useContext(Le),{matches:s}=y.useContext(ze),{pathname:c}=Ue(),l=Ge(),u=Te(t,we(s,a.v7_relativeSplatPath),c,i===`path`),d=JSON.stringify(u);return y.useEffect(()=>l(JSON.parse(d),{replace:n,state:r,relative:i}),[l,d,i,n,r]),null}function mt(e){T(!1)}function ht(e){let{basename:t=`/`,children:n=null,location:r,navigationType:i=S.Pop,navigator:a,static:o=!1,future:s}=e;He()&&T(!1);let c=t.replace(/^\/*/,`/`),l=y.useMemo(()=>({basename:c,navigator:a,static:o,future:Pe({v7_relativeSplatPath:!1},s)}),[c,s,a,o]);typeof r==`string`&&(r=A(r));let{pathname:u=`/`,search:d=``,hash:f=``,state:p=null,key:m=`default`}=r,h=y.useMemo(()=>{let e=ye(u,c);return e==null?null:{location:{pathname:e,search:d,hash:f,state:p,key:m},navigationType:i}},[c,u,d,f,p,m,i]);return h==null?null:y.createElement(Le.Provider,{value:l},y.createElement(Re.Provider,{children:n,value:h}))}function gt(e){let{children:t,location:n}=e;return Je(vt(t),n)}var _t=function(e){return e[e.pending=0]=`pending`,e[e.success=1]=`success`,e[e.error=2]=`error`,e}(_t||{});new Promise(()=>{}),y.Component;function vt(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(e,r)=>{if(!y.isValidElement(e))return;let i=[...t,r];if(e.type===y.Fragment){n.push.apply(n,vt(e.props.children,i));return}e.type!==mt&&T(!1),!(!e.props.index||!e.props.children)&&T(!1);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=vt(e.props.children,i)),n.push(a)}),n}function yt(){return yt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yt.apply(null,arguments)}function bt(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function xt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function St(e,t){return e.button===0&&(!t||t===`_self`)&&!xt(e)}function N(e){return e===void 0&&(e=``),new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function Ct(e,t){let n=N(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var wt=[`onClick`,`relative`,`reloadDocument`,`replace`,`state`,`target`,`to`,`preventScrollReset`,`viewTransition`],Tt=`6`;try{window.__reactRouterVersion=Tt}catch{}var Et=y.startTransition;function Dt(e){let{basename:t,children:n,future:r,window:i}=e,a=y.useRef();a.current??=w({window:i,v5Compat:!0});let o=a.current,[s,c]=y.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},u=y.useCallback(e=>{l&&Et?Et(()=>c(e)):c(e)},[c,l]);return y.useLayoutEffect(()=>o.listen(u),[o,u]),y.useEffect(()=>ft(r),[r]),y.createElement(ht,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var Ot=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,kt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,P=y.forwardRef(function(e,t){let{onClick:n,relative:r,reloadDocument:i,replace:a,state:o,target:s,to:c,preventScrollReset:l,viewTransition:u}=e,d=bt(e,wt),{basename:f}=y.useContext(Le),p,m=!1;if(typeof c==`string`&&kt.test(c)&&(p=c,Ot))try{let e=new URL(window.location.href),t=c.startsWith(`//`)?new URL(e.protocol+c):new URL(c),n=ye(t.pathname,f);t.origin===e.origin&&n!=null?c=n+t.search+t.hash:m=!0}catch{}let h=Ve(c,{relative:r}),g=Mt(c,{replace:a,state:o,target:s,preventScrollReset:l,relative:r,viewTransition:u});function _(e){n&&n(e),e.defaultPrevented||g(e)}return y.createElement(`a`,yt({},d,{href:p||h,onClick:m||i?n:_,ref:t,target:s}))}),At;(function(e){e.UseScrollRestoration=`useScrollRestoration`,e.UseSubmit=`useSubmit`,e.UseSubmitFetcher=`useSubmitFetcher`,e.UseFetcher=`useFetcher`,e.useViewTransitionState=`useViewTransitionState`})(At||={});var jt;(function(e){e.UseFetcher=`useFetcher`,e.UseFetchers=`useFetchers`,e.UseScrollRestoration=`useScrollRestoration`})(jt||={});function Mt(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=t===void 0?{}:t,c=Ge(),l=Ue(),u=qe(e,{relative:o});return y.useCallback(t=>{if(St(t,n)){t.preventDefault();let n=r===void 0?ee(l)===ee(u):r;c(e,{replace:n,state:i,preventScrollReset:a,relative:o,viewTransition:s})}},[l,c,u,r,i,n,e,a,o,s])}function Nt(e){let t=y.useRef(N(e)),n=y.useRef(!1),r=Ue(),i=y.useMemo(()=>Ct(r.search,n.current?null:t.current),[r.search]),a=Ge();return[i,y.useCallback((e,t)=>{let r=N(typeof e==`function`?e(i):e);n.current=!0,a(`?`+r,t)},[a,i])]}var Pt=s((e=>{var t=p(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),F=s(((e,t)=>{t.exports=Pt()}))(),Ft=()=>(0,F.jsx)(`div`,{className:`\r
        hidden\r
        border-b border-white/[0.07]\r
        bg-secondary-dark\r
        text-white/65\r
        lg:block\r
      `,children:(0,F.jsxs)(`div`,{className:`\r
          relative\r
          mx-auto\r
          flex h-9\r
          max-w-7xl\r
          items-center\r
          justify-between\r
          px-4\r
          text-[10px]\r
          sm:px-6\r
          lg:px-8\r
        `,children:[(0,F.jsx)(`div`,{className:`\r
            pointer-events-none\r
            absolute inset-x-0 bottom-0\r
            h-px\r
            bg-gradient-to-r\r
            from-transparent\r
            via-primary/20\r
            to-transparent\r
          `,"aria-hidden":`true`}),(0,F.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,F.jsxs)(`a`,{href:`tel:+1234567890`,"aria-label":`Llamar al +1 234 567 890`,className:`\r
              group\r
              flex items-center gap-2\r
              rounded-lg\r
              px-1.5 py-1\r
              transition-all duration-200\r
              hover:bg-white/[0.04]\r
              hover:text-white\r
              focus:outline-none\r
              focus-visible:ring-2\r
              focus-visible:ring-primary/40\r
            `,children:[(0,F.jsx)(`span`,{className:`\r
                flex h-5 w-5\r
                items-center justify-center\r
                rounded-md\r
                bg-white/[0.05]\r
                text-primary\r
                transition-all duration-200\r
                group-hover:bg-primary/15\r
              `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-phone text-[8px]`})}),(0,F.jsx)(`span`,{className:`hidden font-semibold tracking-wide sm:inline`,children:`+1 234 567 890`}),(0,F.jsx)(`span`,{className:`font-semibold tracking-wide sm:hidden`,children:`Llamar`})]}),(0,F.jsx)(`span`,{className:`h-3 w-px bg-white/10`,"aria-hidden":`true`}),(0,F.jsxs)(`a`,{href:`mailto:support@store.com`,"aria-label":`Enviar correo a support@store.com`,className:`\r
              group\r
              flex min-w-0 items-center gap-2\r
              rounded-lg\r
              px-1.5 py-1\r
              transition-all duration-200\r
              hover:bg-white/[0.04]\r
              hover:text-white\r
              focus:outline-none\r
              focus-visible:ring-2\r
              focus-visible:ring-primary/40\r
            `,children:[(0,F.jsx)(`span`,{className:`\r
                flex h-5 w-5 shrink-0\r
                items-center justify-center\r
                rounded-md\r
                bg-white/[0.05]\r
                text-primary\r
                transition-all duration-200\r
                group-hover:bg-primary/15\r
              `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-envelope text-[8px]`})}),(0,F.jsx)(`span`,{className:`max-w-[190px] truncate font-semibold tracking-wide`,children:`support@store.com`})]})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,F.jsx)(P,{to:`/faq`,className:`\r
              rounded-lg\r
              px-2.5 py-1.5\r
              font-medium\r
              transition-all duration-200\r
              hover:bg-white/[0.05]\r
              hover:text-white\r
              focus:outline-none\r
              focus-visible:ring-2\r
              focus-visible:ring-primary/40\r
            `,children:`Preguntas frecuentes`}),(0,F.jsx)(P,{to:`/help`,className:`\r
              rounded-lg\r
              px-2.5 py-1.5\r
              font-medium\r
              transition-all duration-200\r
              hover:bg-white/[0.05]\r
              hover:text-white\r
              focus:outline-none\r
              focus-visible:ring-2\r
              focus-visible:ring-primary/40\r
            `,children:`¿Necesitás ayuda?`}),(0,F.jsx)(`span`,{className:`mx-2 h-4 w-px bg-white/10`,"aria-hidden":`true`}),(0,F.jsxs)(`div`,{className:`\r
              flex items-center gap-1.5\r
              rounded-lg\r
              border border-white/[0.05]\r
              bg-white/[0.03]\r
              px-2.5 py-1.5\r
              font-semibold\r
              text-white/75\r
            `,"aria-label":`Idioma actual: Español`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-globe text-[9px] text-primary`,"aria-hidden":`true`}),(0,F.jsx)(`span`,{children:`ES`})]}),(0,F.jsxs)(`div`,{className:`\r
              flex items-center gap-1.5\r
              rounded-lg\r
              border border-white/[0.05]\r
              bg-white/[0.03]\r
              px-2.5 py-1.5\r
              font-semibold\r
              text-white/75\r
            `,"aria-label":`Moneda actual: Peso argentino`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-coins text-[9px] text-primary`,"aria-hidden":`true`}),(0,F.jsx)(`span`,{children:`ARS`})]})]})]})}),It=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},Lt=(e=>e?It(e):It),Rt=e=>e;function zt(e,t=Rt){let n=y.useSyncExternalStore(e.subscribe,y.useCallback(()=>t(e.getState()),[e,t]),y.useCallback(()=>t(e.getInitialState()),[e,t]));return y.useDebugValue(n),n}var Bt=e=>{let t=Lt(e),n=e=>zt(t,e);return Object.assign(n,t),n},Vt=(e=>e?Bt(e):Bt);function Ht(e,t){let n;try{n=e()}catch{return}return{getItem:e=>{let r=e=>e===null?null:JSON.parse(e,t?.reviver),i=n.getItem(e)??null;return i instanceof Promise?i.then(r):r(i)},setItem:(e,r)=>n.setItem(e,JSON.stringify(r,t?.replacer)),removeItem:e=>n.removeItem(e)}}var Ut=e=>t=>{try{let n=e(t);return n instanceof Promise?n:{then(e){return Ut(e)(n)},catch(e){return this}}}catch(e){return{then(e){return this},catch(t){return Ut(t)(e)}}}},I=Vt()(((e,t)=>(n,r,i)=>{let a={storage:Ht(()=>window.localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},o=!1,s=0,c=new Set,l=new Set,u=a.storage;if(!u)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...e)},r,i);let d=()=>{let e=a.partialize({...r()});return u.setItem(a.name,{state:e,version:a.version})},f=i.setState;i.setState=(e,t)=>(f(e,t),d());let p=e((...e)=>(n(...e),d()),r,i);i.getInitialState=()=>p;let m,h=()=>{if(!u)return;let e=++s;o=!1,c.forEach(e=>e(r()??p));let t=a.onRehydrateStorage?.call(a,r()??p)||void 0;return Ut(u.getItem.bind(u))(a.name).then(e=>{if(e){if(typeof e.version==`number`&&e.version!==a.version){if(a.migrate){let t=a.migrate(e.state,e.version);return t instanceof Promise?t.then(e=>[!0,e]):[!0,t]}console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`)}else return[!1,e.state]}return[!1,void 0]}).then(t=>{if(e!==s)return;let[i,o]=t;if(m=a.merge(o,r()??p),n(m,!0),i)return d()}).then(()=>{e===s&&(t?.(r(),void 0),m=r(),o=!0,l.forEach(e=>e(m)))}).catch(n=>{e===s&&t?.(void 0,n)})};return i.persist={setOptions:e=>{a={...a,...e},e.storage&&(u=e.storage)},clearStorage:()=>{++s,u?.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>h(),hasHydrated:()=>o,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(l.add(e),()=>{l.delete(e)})},a.skipHydration||h(),m||p})((e,t)=>({cartItem:[],wishlist:[],addToCart:t=>{e(e=>e.cartItem.find(e=>e.id===t.id)?{cartItem:e.cartItem.map(e=>e.id===t.id?{...e,qty:e.qty+1}:e)}:{cartItem:[...e.cartItem,{...t,qty:1}]})},decreaseQty:t=>{e(e=>{let n=e.cartItem.find(e=>e.id===t.id);return n?n.qty<=1?{cartItem:e.cartItem.filter(e=>e.id!==t.id)}:{cartItem:e.cartItem.map(e=>e.id===t.id?{...e,qty:e.qty-1}:e)}:e})},removeFromCart:t=>{e(e=>({cartItem:e.cartItem.filter(e=>e.id!==t.id)}))},clearCart:()=>{e({cartItem:[]})},toggleWishlist:t=>{e(e=>e.wishlist.some(e=>e.id===t.id)?{wishlist:e.wishlist.filter(e=>e.id!==t.id)}:{wishlist:[...e.wishlist,t]})},removeFromWishlist:t=>{e(e=>({wishlist:e.wishlist.filter(e=>e.id!==t.id)}))},clearWishlist:()=>{e({wishlist:[]})},getTotalItems:()=>t().cartItem.reduce((e,t)=>e+t.qty,0),getTotalPrice:()=>t().cartItem.reduce((e,t)=>e+t.price*t.qty,0)}),{name:`ecommerce-cart-storage`,partialize:e=>({cartItem:e.cartItem,wishlist:e.wishlist})})),Wt={name:`NEXORA`,displayName:`NEXORA.`,description:`Tecnología, accesorios y productos seleccionados para tu día a día.`},L=[{value:`phone`,label:`Celulares`,icon:`fa-mobile-screen-button`},{value:`gaming`,label:`Gaming`,icon:`fa-gamepad`},{value:`headphones`,label:`Audio`,icon:`fa-headphones`},{value:`watch`,label:`Relojes`,icon:`fa-clock`},{value:`glasses`,label:`Anteojos`,icon:`fa-glasses`},{value:`tv`,label:`Smart TV`,icon:`fa-tv`}],Gt=e=>L.find(t=>t.value===e)?.label??e,Kt=()=>{let e=I(e=>e.getTotalItems),t=Ge(),[n]=Nt(),r=n.get(`search`)??``,i=n.get(`category`)??`all`,a=i===`all`||L.some(e=>e.value===i)?i:`all`,[o,s]=(0,y.useState)(r),[c,l]=(0,y.useState)(!1),u=(0,y.useRef)(null),d=e();return(0,y.useEffect)(()=>{s(r)},[r]),(0,y.useEffect)(()=>{let e=e=>{let t=e.target,n=t?.tagName===`INPUT`||t?.tagName===`TEXTAREA`||t?.tagName===`SELECT`||t?.isContentEditable;e.key===`/`&&!n&&(e.preventDefault(),u.current?.focus()),e.key===`Escape`&&(u.current?.blur(),l(!1))};return document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[]),(0,F.jsxs)(`section`,{"aria-label":`Búsqueda y navegación`,className:`\r
        relative\r
        w-full\r
        border-b border-black/[0.06]\r
        bg-white\r
      `,children:[(0,F.jsx)(`div`,{className:`\r
          absolute\r
          inset-x-0\r
          bottom-0\r
          h-px\r
          bg-gradient-to-r\r
          from-transparent\r
          via-primary/15\r
          to-transparent\r
        `,"aria-hidden":`true`}),(0,F.jsxs)(`div`,{className:`\r
          relative\r
          mx-auto\r
          flex max-w-7xl\r
          items-center\r
          gap-3\r
          px-4 py-3.5\r
\r
          sm:gap-4\r
          sm:px-6\r
          sm:py-4\r
\r
          lg:gap-6\r
          lg:px-8\r
        `,children:[(0,F.jsx)(P,{to:`/`,"aria-label":`${Wt.name} - Inicio`,className:`\r
            group\r
            shrink-0\r
            rounded-2xl\r
            focus:outline-none\r
            focus-visible:ring-2\r
            focus-visible:ring-primary/40\r
            focus-visible:ring-offset-2\r
          `,children:(0,F.jsxs)(`span`,{className:`\r
              flex\r
              items-center\r
              gap-2.5\r
              rounded-2xl\r
              border\r
              border-black/[0.05]\r
              bg-background\r
              px-2.5 py-2\r
              shadow-[0_4px_16px_rgba(3,0,71,0.04)]\r
              transition-all\r
              duration-300\r
\r
              group-hover:border-primary/15\r
              group-hover:bg-primary/[0.04]\r
              group-hover:shadow-[0_8px_22px_rgba(3,0,71,0.07)]\r
            `,children:[(0,F.jsx)(`span`,{className:`\r
                flex\r
                h-9 w-9\r
                items-center\r
                justify-center\r
                rounded-xl\r
                bg-white\r
                shadow-sm\r
                transition-transform\r
                duration-300\r
                group-hover:scale-105\r
              `,children:(0,F.jsx)(`img`,{src:`/img/logo/phone-logo.png`,alt:Wt.name,className:`\r
                  h-7 w-7\r
                  object-contain\r
                `})}),(0,F.jsxs)(`span`,{className:`\r
                hidden\r
                text-xl\r
                font-black\r
                tracking-[-0.045em]\r
                text-secondary\r
                md:block\r
              `,children:[Wt.name,(0,F.jsx)(`span`,{className:`text-primary`,children:`.`})]})]})}),(0,F.jsx)(`form`,{onSubmit:e=>{e.preventDefault();let n=o.trim();if(!n&&a===`all`){t(`/shop`),u.current?.blur(),l(!1);return}let r=new URLSearchParams;n&&r.set(`search`,n),a!==`all`&&r.set(`category`,a);let i=r.toString();t(i?`/shop?${i}`:`/shop`),u.current?.blur(),l(!1)},className:`min-w-0 flex-1`,role:`search`,children:(0,F.jsxs)(`div`,{className:`
              group/search
              flex
              min-h-12
              items-center
              overflow-hidden
              rounded-2xl
              border
              bg-background
              transition-all
              duration-300

              ${c?`
                    border-primary/40
                    bg-white
                    shadow-[0_0_0_4px_rgba(233,69,96,0.07),0_8px_25px_rgba(3,0,71,0.06)]
                  `:`
                    border-black/[0.07]
                    shadow-[0_3px_14px_rgba(3,0,71,0.025)]
                    hover:border-black/10
                    hover:bg-white
                  `}
            `,children:[(0,F.jsx)(`span`,{className:`
                flex
                h-full
                shrink-0
                items-center
                pl-4
                transition-colors
                duration-300

                ${c?`text-primary`:`text-gray-400 group-hover/search:text-gray-500`}
              `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-magnifying-glass text-sm`})}),(0,F.jsx)(`input`,{ref:u,type:`search`,value:o,onChange:e=>s(e.target.value),onFocus:()=>l(!0),onBlur:()=>l(!1),placeholder:`¿Qué estás buscando?`,autoComplete:`off`,spellCheck:!1,"aria-label":`Buscar productos`,className:`\r
                search-input\r
                h-12\r
                min-w-0\r
                flex-1\r
                border-0\r
                bg-transparent\r
                px-3\r
                text-sm\r
                font-medium\r
                text-secondary\r
                outline-none\r
                placeholder:text-gray-400\r
                sm:text-[15px]\r
              `}),o&&(0,F.jsx)(`button`,{type:`button`,onMouseDown:e=>e.preventDefault(),onClick:()=>{s(``),u.current?.focus()},"aria-label":`Limpiar búsqueda`,className:`\r
                  mr-1\r
                  flex\r
                  h-9 w-9\r
                  shrink-0\r
                  items-center\r
                  justify-center\r
                  rounded-xl\r
                  text-gray-400\r
                  transition-all\r
                  duration-200\r
\r
                  hover:bg-gray-100\r
                  hover:text-secondary\r
\r
                  focus:outline-none\r
                  focus-visible:ring-2\r
                  focus-visible:ring-primary/30\r
                `,children:(0,F.jsx)(`i`,{className:`fa-solid fa-xmark text-xs`,"aria-hidden":`true`})}),!o&&(0,F.jsxs)(`span`,{className:`\r
                  mr-2\r
                  hidden\r
                  items-center\r
                  gap-1\r
                  rounded-lg\r
                  border\r
                  border-black/[0.07]\r
                  bg-white\r
                  px-2 py-1\r
                  text-[9px]\r
                  font-bold\r
                  text-gray-400\r
                  shadow-sm\r
                  sm:inline-flex\r
                `,"aria-hidden":`true`,children:[(0,F.jsx)(`span`,{children:`Presioná`}),(0,F.jsx)(`kbd`,{className:`font-black text-secondary`,children:`/`})]}),(0,F.jsxs)(`div`,{className:`\r
                hidden\r
                h-full\r
                items-center\r
                lg:flex\r
              `,children:[(0,F.jsx)(`label`,{htmlFor:`search-category`,className:`sr-only`,children:`Seleccionar categoría`}),(0,F.jsx)(`div`,{className:`\r
                  flex\r
                  h-8\r
                  items-center\r
                  border-l\r
                  border-black/[0.07]\r
                  pl-3\r
                `,children:(0,F.jsxs)(`select`,{id:`search-category`,value:a,onChange:e=>{let n=e.target.value,r=new URLSearchParams,i=o.trim();i&&r.set(`search`,i),n!==`all`&&r.set(`category`,n);let a=r.toString();t(a?`/shop?${a}`:`/shop`)},className:`\r
                    h-full\r
                    cursor-pointer\r
                    border-0\r
                    bg-transparent\r
                    px-3\r
                    text-xs\r
                    font-bold\r
                    text-secondary\r
                    outline-none\r
                    focus:outline-none\r
                  `,children:[(0,F.jsx)(`option`,{value:`all`,children:`Todas`}),L.map(e=>(0,F.jsx)(`option`,{value:e.value,children:e.label},e.value))]})})]}),(0,F.jsx)(`button`,{type:`submit`,"aria-label":`Buscar productos`,className:`\r
                mr-1\r
                flex\r
                h-10 w-10\r
                shrink-0\r
                items-center\r
                justify-center\r
                rounded-xl\r
                bg-primary\r
                text-white\r
                shadow-[0_6px_16px_rgba(233,69,96,0.22)]\r
                transition-all\r
                duration-300\r
\r
                hover:-translate-y-0.5\r
                hover:bg-primary-dark\r
                hover:shadow-[0_9px_20px_rgba(233,69,96,0.28)]\r
\r
                active:translate-y-0\r
                active:scale-95\r
\r
                focus:outline-none\r
                focus-visible:ring-2\r
                focus-visible:ring-primary/40\r
                focus-visible:ring-offset-2\r
              `,children:(0,F.jsx)(`i`,{className:`fa-solid fa-magnifying-glass text-xs`,"aria-hidden":`true`})})]})}),(0,F.jsxs)(`div`,{className:`\r
            flex\r
            shrink-0\r
            items-center\r
            gap-2\r
            sm:gap-3\r
          `,children:[(0,F.jsx)(`div`,{className:`\r
              hidden\r
              h-11 w-11\r
              items-center\r
              justify-center\r
              rounded-2xl\r
              border\r
              border-black/[0.06]\r
              bg-background\r
              text-secondary\r
              shadow-sm\r
              transition-all\r
              duration-300\r
              md:flex\r
            `,"aria-label":`Perfil de usuario`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-user text-sm`,"aria-hidden":`true`})}),(0,F.jsxs)(P,{to:`/cart`,"aria-label":`Ir al carrito. ${d} ${d===1?`producto`:`productos`}`,className:`\r
              group\r
              relative\r
              rounded-2xl\r
              focus:outline-none\r
              focus-visible:ring-2\r
              focus-visible:ring-primary/40\r
              focus-visible:ring-offset-2\r
            `,children:[(0,F.jsx)(`span`,{className:`\r
                flex\r
                h-11 w-11\r
                items-center\r
                justify-center\r
                rounded-2xl\r
                border\r
                border-black/[0.06]\r
                bg-background\r
                text-secondary\r
                shadow-sm\r
                transition-all\r
                duration-300\r
\r
                group-hover:border-primary/20\r
                group-hover:bg-primary/[0.06]\r
                group-hover:text-primary\r
                group-hover:shadow-[0_8px_20px_rgba(3,0,71,0.07)]\r
              `,children:(0,F.jsx)(`i`,{className:`fa-solid fa-cart-shopping text-sm`,"aria-hidden":`true`})}),d>0&&(0,F.jsx)(`span`,{className:`\r
                  absolute\r
                  -right-1.5\r
                  -top-1.5\r
                  flex\r
                  h-5 min-w-5\r
                  items-center\r
                  justify-center\r
                  rounded-full\r
                  bg-primary\r
                  px-1.5\r
                  text-[10px]\r
                  font-extrabold\r
                  text-white\r
                  shadow-[0_4px_10px_rgba(233,69,96,0.25)]\r
                  ring-2 ring-white\r
                  transition-transform\r
                  duration-200\r
\r
                  group-hover:scale-110\r
                `,"aria-hidden":`true`,children:d>99?`99+`:d})]})]})]})]})},qt=()=>(0,F.jsxs)(`header`,{className:`relative z-[1000] w-full bg-secondary`,children:[(0,F.jsx)(Ft,{}),(0,F.jsxs)(`div`,{className:`relative border-b border-black/5`,children:[(0,F.jsx)(`div`,{className:`\r
            pointer-events-none\r
            absolute inset-0\r
            bg-gradient-to-b\r
            from-white/[0.015]\r
            to-transparent\r
          `,"aria-hidden":`true`}),(0,F.jsx)(Kt,{})]})]}),Jt=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.default={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0}})),Yt=s(((e,t)=>{var n=NaN,r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,s=parseInt,c=typeof global==`object`&&global&&global.Object===Object&&global,l=typeof self==`object`&&self&&self.Object===Object&&self,u=c||l||Function(`return this`)(),d=Object.prototype.toString,f=Math.max,p=Math.min,m=function(){return u.Date.now()};function h(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,h=!0;if(typeof e!=`function`)throw TypeError(`Expected a function`);t=y(t)||0,g(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?f(y(n.maxWait)||0,t):a,h=`trailing`in n?!!n.trailing:h);function _(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function v(e){return l=e,s=setTimeout(S,t),u?_(e):o}function b(e){var n=e-c,r=e-l,i=t-n;return d?p(i,a-r):i}function x(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function S(){var e=m();if(x(e))return C(e);s=setTimeout(S,b(e))}function C(e){return s=void 0,h&&r?_(e):(r=i=void 0,o)}function w(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function T(){return s===void 0?o:C(m())}function E(){var e=m(),n=x(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return v(c);if(d)return s=setTimeout(S,t),_(c)}return s===void 0&&(s=setTimeout(S,t)),o}return E.cancel=w,E.flush=T,E}function g(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}function _(e){return!!e&&typeof e==`object`}function v(e){return typeof e==`symbol`||_(e)&&d.call(e)==`[object Symbol]`}function y(e){if(typeof e==`number`)return e;if(v(e))return n;if(g(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=g(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=e.replace(r,``);var c=a.test(e);return c||o.test(e)?s(e.slice(2),c?2:8):i.test(e)?n:+e}t.exports=h})),Xt=s(((e,t)=>{(function(){var e={}.hasOwnProperty;function n(){for(var e=``,t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,r(n)))}return e}function r(t){if(typeof t==`string`||typeof t==`number`)return t;if(typeof t!=`object`)return``;if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes(`[native code]`))return t.toString();var r=``;for(var a in t)e.call(t,a)&&t[a]&&(r=i(r,a));return r}function i(e,t){return t?e?e+` `+t:e+t:e}t!==void 0&&t.exports?(n.default=n,t.exports=n):typeof define==`function`&&typeof define.amd==`object`&&define.amd?define(`classnames`,[],function(){return n}):window.classNames=n})()})),Zt=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.checkSpecKeys=e.checkNavigable=e.changeSlide=e.canUseDOM=e.canGoNext=void 0,e.clamp=o,e.swipeStart=e.swipeMove=e.swipeEnd=e.slidesOnRight=e.slidesOnLeft=e.slideHandler=e.siblingDirection=e.safePreventDefault=e.lazyStartIndex=e.lazySlidesOnRight=e.lazySlidesOnLeft=e.lazyEndIndex=e.keyHandler=e.initializedState=e.getWidth=e.getTrackLeft=e.getTrackCSS=e.getTrackAnimateCSS=e.getTotalSlides=e.getSwipeDirection=e.getSlideCount=e.getRequiredLazySlides=e.getPreClones=e.getPostClones=e.getOnDemandLazySlides=e.getNavigableIndexes=e.getHeight=e.extractObject=void 0;var t=n(p());function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?r(Object(n),!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t,n){return Math.max(t,Math.min(e,n))}var s=function(e){[`onTouchStart`,`onTouchMove`,`onWheel`].includes(e._reactName)||e.preventDefault()};e.safePreventDefault=s;var c=function(e){for(var t=[],n=l(e),r=u(e),i=n;i<r;i++)e.lazyLoadedList.indexOf(i)<0&&t.push(i);return t};e.getOnDemandLazySlides=c,e.getRequiredLazySlides=function(e){for(var t=[],n=l(e),r=u(e),i=n;i<r;i++)t.push(i);return t};var l=function(e){return e.currentSlide-d(e)};e.lazyStartIndex=l;var u=function(e){return e.currentSlide+f(e)};e.lazyEndIndex=u;var d=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+ +(parseInt(e.centerPadding)>0):0};e.lazySlidesOnLeft=d;var f=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+ +(parseInt(e.centerPadding)>0):e.slidesToShow};e.lazySlidesOnRight=f;var m=function(e){return e&&e.offsetWidth||0};e.getWidth=m;var h=function(e){return e&&e.offsetHeight||0};e.getHeight=h;var g=function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=e.startX-e.curX,r=e.startY-e.curY,i=Math.round(Math.atan2(r,n)*180/Math.PI);return i<0&&(i=360-Math.abs(i)),i<=45&&i>=0||i<=360&&i>=315?`left`:i>=135&&i<=225?`right`:t===!0?i>=35&&i<=135?`up`:`down`:`vertical`};e.getSwipeDirection=g;var _=function(e){var t=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1),t};e.canGoNext=_,e.extractObject=function(e,t){var n={};return t.forEach(function(t){return n[t]=e[t]}),n},e.initializedState=function(e){var n=t.default.Children.count(e.children),r=e.listRef,a=Math.ceil(m(r)),o=e.trackRef&&e.trackRef.node,s=Math.ceil(m(o)),l;if(e.vertical)l=a;else{var u=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding==`string`&&e.centerPadding.slice(-1)===`%`&&(u*=a/100),l=Math.ceil((a-u)/e.slidesToShow)}var d=r&&h(r.querySelector(`[data-index="0"]`)),f=d*e.slidesToShow,p=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(p=n-1-e.initialSlide);var g=e.lazyLoadedList||[],_=c(i(i({},e),{},{currentSlide:p,lazyLoadedList:g}));g=g.concat(_);var v={slideCount:n,slideWidth:l,listWidth:a,trackWidth:s,currentSlide:p,slideHeight:d,listHeight:f,lazyLoadedList:g};return e.autoplaying===null&&e.autoplay&&(v.autoplaying=`playing`),v},e.slideHandler=function(e){var t=e.waitForAnimate,n=e.animating,r=e.fade,a=e.infinite,s=e.index,l=e.slideCount,u=e.lazyLoad,d=e.currentSlide,f=e.centerMode,p=e.slidesToScroll,m=e.slidesToShow,h=e.useCSS,g=e.lazyLoadedList;if(t&&n)return{};var v=s,y,b,x,T={},E={},D=a?s:o(s,0,l-1);if(r){if(!a&&(s<0||s>=l))return{};s<0?v=s+l:s>=l&&(v=s-l),u&&g.indexOf(v)<0&&(g=g.concat(v)),T={animating:!0,currentSlide:v,lazyLoadedList:g,targetSlide:v},E={animating:!1,targetSlide:v}}else y=v,v<0?(y=v+l,a?l%p!==0&&(y=l-l%p):y=0):!_(e)&&v>d?v=y=d:f&&v>=l?(v=a?l:l-1,y=a?0:l-1):v>=l&&(y=v-l,a?l%p!==0&&(y=0):y=l-m),!a&&v+m>=l&&(y=l-m),b=w(i(i({},e),{},{slideIndex:v})),x=w(i(i({},e),{},{slideIndex:y})),a||(b===x&&(v=y),b=x),u&&(g=g.concat(c(i(i({},e),{},{currentSlide:v})))),h?(T={animating:!0,currentSlide:y,trackStyle:C(i(i({},e),{},{left:b})),lazyLoadedList:g,targetSlide:D},E={animating:!1,currentSlide:y,trackStyle:S(i(i({},e),{},{left:x})),swipeLeft:null,targetSlide:D}):T={currentSlide:y,trackStyle:S(i(i({},e),{},{left:x})),lazyLoadedList:g,targetSlide:D};return{state:T,nextState:E}},e.changeSlide=function(e,t){var n,r,a,o,s,c=e.slidesToScroll,l=e.slidesToShow,u=e.slideCount,d=e.currentSlide,f=e.targetSlide,p=e.lazyLoad,m=e.infinite;if(o=u%c!==0,n=o?0:(u-d)%c,t.message===`previous`)a=n===0?c:l-n,s=d-a,p&&!m&&(r=d-a,s=r===-1?u-1:r),m||(s=f-c);else if(t.message===`next`)a=n===0?c:n,s=d+a,p&&!m&&(s=(d+c)%u+n),m||(s=f+c);else if(t.message===`dots`)s=t.index*t.slidesToScroll;else if(t.message===`children`){if(s=t.index,m){var h=O(i(i({},e),{},{targetSlide:s}));s>t.currentSlide&&h===`left`?s-=u:s<t.currentSlide&&h===`right`&&(s+=u)}}else t.message===`index`&&(s=Number(t.index));return s},e.keyHandler=function(e,t,n){return e.target.tagName.match(`TEXTAREA|INPUT|SELECT`)||!t?``:e.keyCode===37?n?`next`:`previous`:e.keyCode===39?n?`previous`:`next`:``},e.swipeStart=function(e,t,n){return e.target.tagName===`IMG`&&s(e),!t||!n&&e.type.indexOf(`mouse`)!==-1?``:{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}},e.swipeMove=function(e,t){var n=t.scrolling,r=t.animating,a=t.vertical,o=t.swipeToSlide,c=t.verticalSwiping,l=t.rtl,u=t.currentSlide,d=t.edgeFriction,f=t.edgeDragged,p=t.onEdge,m=t.swiped,h=t.swiping,v=t.slideCount,y=t.slidesToScroll,b=t.infinite,x=t.touchObject,C=t.swipeEvent,T=t.listHeight,E=t.listWidth;if(!n){if(r)return s(e);a&&o&&c&&s(e);var D,O={},k=w(t);x.curX=e.touches?e.touches[0].pageX:e.clientX,x.curY=e.touches?e.touches[0].pageY:e.clientY,x.swipeLength=Math.round(Math.sqrt((x.curX-x.startX)**2));var ee=Math.round(Math.sqrt((x.curY-x.startY)**2));if(!c&&!h&&ee>10)return{scrolling:!0};c&&(x.swipeLength=ee);var A=(l?-1:1)*(x.curX>x.startX?1:-1);c&&(A=x.curY>x.startY?1:-1);var te=Math.ceil(v/y),ne=g(t.touchObject,c),j=x.swipeLength;return b||(u===0&&(ne===`right`||ne===`down`)||u+1>=te&&(ne===`left`||ne===`up`)||!_(t)&&(ne===`left`||ne===`up`))&&(j=x.swipeLength*d,f===!1&&p&&(p(ne),O.edgeDragged=!0)),!m&&C&&(C(ne),O.swiped=!0),D=a?k+T/E*j*A:l?k-j*A:k+j*A,c&&(D=k+j*A),O=i(i({},O),{},{touchObject:x,swipeLeft:D,trackStyle:S(i(i({},t),{},{left:D}))}),Math.abs(x.curX-x.startX)<Math.abs(x.curY-x.startY)*.8||x.swipeLength>10&&(O.swiping=!0,s(e)),O}},e.swipeEnd=function(e,t){var n=t.dragging,r=t.swipe,a=t.touchObject,o=t.listWidth,c=t.touchThreshold,l=t.verticalSwiping,u=t.listHeight,d=t.swipeToSlide,f=t.scrolling,p=t.onSwipe,m=t.targetSlide,h=t.currentSlide,_=t.infinite;if(!n)return r&&s(e),{};var v=l?u/c:o/c,x=g(a,l),S={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!a.swipeLength)return S;if(a.swipeLength>v){s(e),p&&p(x);var T,E,D=_?h:m;switch(x){case`left`:case`up`:E=D+b(t),T=d?y(t,E):E,S.currentDirection=0;break;case`right`:case`down`:E=D-b(t),T=d?y(t,E):E,S.currentDirection=1;break;default:T=D}S.triggerSlideHandler=T}else{var O=w(t);S.trackStyle=C(i(i({},t),{},{left:O}))}return S};var v=function(e){for(var t=e.infinite?e.slideCount*2:e.slideCount,n=e.infinite?e.slidesToShow*-1:0,r=e.infinite?e.slidesToShow*-1:0,i=[];n<t;)i.push(n),n=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return i};e.getNavigableIndexes=v;var y=function(e,t){var n=v(e),r=0;if(t>n[n.length-1])t=n[n.length-1];else for(var i in n){if(t<n[i]){t=r;break}r=n[i]}return t};e.checkNavigable=y;var b=function(e){var t=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var n,r=e.listRef,i=r.querySelectorAll&&r.querySelectorAll(`.slick-slide`)||[];if(Array.from(i).every(function(r){if(!e.vertical){if(r.offsetLeft-t+m(r)/2>e.swipeLeft*-1)return n=r,!1}else if(r.offsetTop+h(r)/2>e.swipeLeft*-1)return n=r,!1;return!0}),!n)return 0;var a=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide;return Math.abs(n.dataset.index-a)||1}return e.slidesToScroll};e.getSlideCount=b;var x=function(e,t){return t.reduce(function(t,n){return t&&e.hasOwnProperty(n)},!0)?null:console.error(`Keys Missing:`,e)};e.checkSpecKeys=x;var S=function(e){x(e,[`left`,`variableWidth`,`slideCount`,`slidesToShow`,`slideWidth`]);var t,n,r=e.slideCount+2*e.slidesToShow;e.vertical?n=r*e.slideHeight:t=D(e)*e.slideWidth;var a={opacity:1,transition:``,WebkitTransition:``};if(e.useTransform){var o=e.vertical?`translate3d(0px, `+e.left+`px, 0px)`:`translate3d(`+e.left+`px, 0px, 0px)`,s=e.vertical?`translate3d(0px, `+e.left+`px, 0px)`:`translate3d(`+e.left+`px, 0px, 0px)`,c=e.vertical?`translateY(`+e.left+`px)`:`translateX(`+e.left+`px)`;a=i(i({},a),{},{WebkitTransform:o,transform:s,msTransform:c})}else e.vertical?a.top=e.left:a.left=e.left;return e.fade&&(a={opacity:1}),t&&(a.width=t),n&&(a.height=n),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?a.marginTop=e.left+`px`:a.marginLeft=e.left+`px`),a};e.getTrackCSS=S;var C=function(e){x(e,[`left`,`variableWidth`,`slideCount`,`slidesToShow`,`slideWidth`,`speed`,`cssEase`]);var t=S(e);return e.useTransform?(t.WebkitTransition=`-webkit-transform `+e.speed+`ms `+e.cssEase,t.transition=`transform `+e.speed+`ms `+e.cssEase):t.transition=e.vertical?`top `+e.speed+`ms `+e.cssEase:`left `+e.speed+`ms `+e.cssEase,t};e.getTrackAnimateCSS=C;var w=function(e){if(e.unslick)return 0;x(e,[`slideIndex`,`trackRef`,`infinite`,`centerMode`,`slideCount`,`slidesToShow`,`slidesToScroll`,`slideWidth`,`listWidth`,`variableWidth`,`slideHeight`]);var t=e.slideIndex,n=e.trackRef,r=e.infinite,i=e.centerMode,a=e.slideCount,o=e.slidesToShow,s=e.slidesToScroll,c=e.slideWidth,l=e.listWidth,u=e.variableWidth,d=e.slideHeight,f=e.fade,p=e.vertical,m=0,h,g,_=0;if(f||e.slideCount===1)return 0;var v=0;if(r?(v=-T(e),a%s!==0&&t+s>a&&(v=-(t>a?o-(t-a):a%s)),i&&(v+=parseInt(o/2))):(a%s!==0&&t+s>a&&(v=o-a%s),i&&(v=parseInt(o/2))),m=v*c,_=v*d,h=p?t*d*-1+_:t*c*-1+m,u===!0){var y,b=n&&n.node;if(y=t+T(e),g=b&&b.childNodes[y],h=g?g.offsetLeft*-1:0,i===!0){y=r?t+T(e):t,g=b&&b.children[y],h=0;for(var S=0;S<y;S++)h-=b&&b.children[S]&&b.children[S].offsetWidth;h-=parseInt(e.centerPadding),h+=g&&(l-g.offsetWidth)/2}}return h};e.getTrackLeft=w;var T=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+ +!!e.centerMode};e.getPreClones=T;var E=function(e){return e.unslick||!e.infinite?0:e.slideCount};e.getPostClones=E;var D=function(e){return e.slideCount===1?1:T(e)+e.slideCount+E(e)};e.getTotalSlides=D;var O=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+k(e)?`left`:`right`:e.targetSlide<e.currentSlide-ee(e)?`right`:`left`};e.siblingDirection=O;var k=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,i=e.centerPadding;if(n){var a=(t-1)/2+1;return parseInt(i)>0&&(a+=1),r&&t%2==0&&(a+=1),a}return r?0:t-1};e.slidesOnRight=k;var ee=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,i=e.centerPadding;if(n){var a=(t-1)/2+1;return parseInt(i)>0&&(a+=1),!r&&t%2==0&&(a+=1),a}return r?t-1:0};e.slidesOnLeft=ee,e.canUseDOM=function(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}})),Qt=s((e=>{function t(e){"@babel/helpers - typeof";return t=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},t(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.Track=void 0;var n=a(p()),r=a(Xt()),i=Zt();function a(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function f(e){var t=g();return function(){var n=_(e),r;if(t){var i=_(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return m(this,r)}}function m(e,n){if(n&&(t(n)===`object`||typeof n==`function`))return n;if(n!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return h(e)}function h(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function g(){if(typeof Reflect>`u`||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy==`function`)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?v(Object(n),!0).forEach(function(t){b(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){var t,n,r,i,a=e.rtl?e.slideCount-1-e.index:e.index;r=a<0||a>=e.slideCount,e.centerMode?(i=Math.floor(e.slidesToShow/2),n=(a-e.currentSlide)%e.slideCount===0,a>e.currentSlide-i-1&&a<=e.currentSlide+i&&(t=!0)):t=e.currentSlide<=a&&a<e.currentSlide+e.slidesToShow;var o=e.targetSlide<0?e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?e.targetSlide-e.slideCount:e.targetSlide;return{"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":r,"slick-current":a===o}},S=function(e){var t={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(t.width=e.slideWidth),e.fade&&(t.position=`relative`,e.vertical?t.top=-e.index*parseInt(e.slideHeight):t.left=-e.index*parseInt(e.slideWidth),t.opacity=+(e.currentSlide===e.index),e.useCSS&&(t.transition=`opacity `+e.speed+`ms `+e.cssEase+`, visibility `+e.speed+`ms `+e.cssEase)),t},C=function(e,t){return e.key||t},w=function(e){var t,a=[],o=[],s=[],c=n.default.Children.count(e.children),l=(0,i.lazyStartIndex)(e),u=(0,i.lazyEndIndex)(e);return n.default.Children.forEach(e.children,function(d,f){var p,m={message:`children`,index:f,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};p=!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(f)>=0?d:n.default.createElement(`div`,null);var h=S(y(y({},e),{},{index:f})),g=p.props.className||``,_=x(y(y({},e),{},{index:f}));if(a.push(n.default.cloneElement(p,{key:`original`+C(p,f),"data-index":f,className:(0,r.default)(_,g),tabIndex:`-1`,"aria-hidden":!_[`slick-active`],style:y(y({outline:`none`},p.props.style||{}),h),onClick:function(t){p.props&&p.props.onClick&&p.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(m)}})),e.infinite&&e.fade===!1){var v=c-f;v<=(0,i.getPreClones)(e)&&c!==e.slidesToShow&&(t=-v,t>=l&&(p=d),_=x(y(y({},e),{},{index:t})),o.push(n.default.cloneElement(p,{key:`precloned`+C(p,t),"data-index":t,tabIndex:`-1`,className:(0,r.default)(_,g),"aria-hidden":!_[`slick-active`],style:y(y({},p.props.style||{}),h),onClick:function(t){p.props&&p.props.onClick&&p.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(m)}}))),c!==e.slidesToShow&&(t=c+f,t<u&&(p=d),_=x(y(y({},e),{},{index:t})),s.push(n.default.cloneElement(p,{key:`postcloned`+C(p,t),"data-index":t,tabIndex:`-1`,className:(0,r.default)(_,g),"aria-hidden":!_[`slick-active`],style:y(y({},p.props.style||{}),h),onClick:function(t){p.props&&p.props.onClick&&p.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(m)}})))}}),e.rtl?o.concat(a,s).reverse():o.concat(a,s)};e.Track=function(e){u(r,e);var t=f(r);function r(){var e;s(this,r);var n=[...arguments];return e=t.call.apply(t,[this].concat(n)),b(h(e),`node`,null),b(h(e),`handleRef`,function(t){e.node=t}),e}return l(r,[{key:`render`,value:function(){var e=w(this.props),t=this.props,r={onMouseEnter:t.onMouseEnter,onMouseOver:t.onMouseOver,onMouseLeave:t.onMouseLeave};return n.default.createElement(`div`,o({ref:this.handleRef,className:`slick-track`,style:this.props.trackStyle},r),e)}}]),r}(n.default.PureComponent)})),$t=s((e=>{function t(e){"@babel/helpers - typeof";return t=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},t(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.Dots=void 0;var n=a(p()),r=a(Xt()),i=Zt();function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?o(Object(n),!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function f(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function h(e){var t=v();return function(){var n=y(e),r;if(t){var i=y(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return g(this,r)}}function g(e,n){if(n&&(t(n)===`object`||typeof n==`function`))return n;if(n!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return _(e)}function _(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function v(){if(typeof Reflect>`u`||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy==`function`)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var b=function(e){return e.infinite?Math.ceil(e.slideCount/e.slidesToScroll):Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1};e.Dots=function(e){f(a,e);var t=h(a);function a(){return l(this,a),t.apply(this,arguments)}return d(a,[{key:`clickHandler`,value:function(e,t){t.preventDefault(),this.props.clickHandler(e)}},{key:`render`,value:function(){for(var e=this.props,t=e.onMouseEnter,a=e.onMouseOver,o=e.onMouseLeave,c=e.infinite,l=e.slidesToScroll,u=e.slidesToShow,d=e.slideCount,f=e.currentSlide,p=b({slideCount:d,slidesToScroll:l,slidesToShow:u,infinite:c}),m={onMouseEnter:t,onMouseOver:a,onMouseLeave:o},h=[],g=0;g<p;g++){var _=(g+1)*l-1,v=c?_:(0,i.clamp)(_,0,d-1),y=v-(l-1),x=c?y:(0,i.clamp)(y,0,d-1),S=(0,r.default)({"slick-active":c?f>=x&&f<=v:f===x}),C={message:`dots`,index:g,slidesToScroll:l,currentSlide:f},w=this.clickHandler.bind(this,C);h=h.concat(n.default.createElement(`li`,{key:g,className:S},n.default.cloneElement(this.props.customPaging(g),{onClick:w})))}return n.default.cloneElement(this.props.appendDots(h),s({className:this.props.dotsClass},m))}}]),a}(n.default.PureComponent)})),en=s((e=>{function t(e){"@babel/helpers - typeof";return t=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},t(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.PrevArrow=e.NextArrow=void 0;var n=a(p()),r=a(Xt()),i=Zt();function a(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?s(Object(n),!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function g(e){var t=y();return function(){var n=b(e),r;if(t){var i=b(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return _(this,r)}}function _(e,n){if(n&&(t(n)===`object`||typeof n==`function`))return n;if(n!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return v(e)}function v(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function y(){if(typeof Reflect>`u`||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy==`function`)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}e.PrevArrow=function(e){m(i,e);var t=g(i);function i(){return u(this,i),t.apply(this,arguments)}return f(i,[{key:`clickHandler`,value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:`render`,value:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:`previous`});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(e[`slick-disabled`]=!0,t=null);var i={key:`0`,"data-role":`none`,className:(0,r.default)(e),style:{display:`block`},onClick:t},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.prevArrow?n.default.cloneElement(this.props.prevArrow,c(c({},i),a)):n.default.createElement(`button`,o({key:`0`,type:`button`},i),` `,`Previous`)}}]),i}(n.default.PureComponent),e.NextArrow=function(e){m(a,e);var t=g(a);function a(){return u(this,a),t.apply(this,arguments)}return f(a,[{key:`clickHandler`,value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:`render`,value:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:`next`});(0,i.canGoNext)(this.props)||(e[`slick-disabled`]=!0,t=null);var a={key:`1`,"data-role":`none`,className:(0,r.default)(e),style:{display:`block`},onClick:t},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.nextArrow?n.default.cloneElement(this.props.nextArrow,c(c({},a),s)):n.default.createElement(`button`,o({key:`1`,type:`button`},a),` `,`Next`)}}]),a}(n.default.PureComponent)})),tn=c({default:()=>jn});function nn(e,t){var n=!1,r=!1,i=0;function a(){n&&(n=!1,e()),r&&s()}function o(){gn(a)}function s(){var e=Date.now();if(n){if(e-i<_n)return;r=!0}else n=!0,r=!1,setTimeout(o,t);i=e}return s}function rn(e){return parseFloat(e)||0}function an(e){return[...arguments].slice(1).reduce(function(t,n){var r=e[`border-`+n+`-width`];return t+rn(r)},0)}function on(e){for(var t=[`top`,`right`,`bottom`,`left`],n={},r=0,i=t;r<i.length;r++){var a=i[r],o=e[`padding-`+a];n[a]=rn(o)}return n}function sn(e){var t=e.getBBox();return fn(0,0,t.width,t.height)}function cn(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return wn;var r=Cn(e).getComputedStyle(e),i=on(r),a=i.left+i.right,o=i.top+i.bottom,s=rn(r.width),c=rn(r.height);if(r.boxSizing===`border-box`&&(Math.round(s+a)!==t&&(s-=an(r,`left`,`right`)+a),Math.round(c+o)!==n&&(c-=an(r,`top`,`bottom`)+o)),!ln(e)){var l=Math.round(s+a)-t,u=Math.round(c+o)-n;Math.abs(l)!==1&&(s-=l),Math.abs(u)!==1&&(c-=u)}return fn(i.left,i.top,s,c)}function ln(e){return e===Cn(e).document.documentElement}function un(e){return mn?Tn(e)?sn(e):cn(e):wn}function dn(e){var t=e.x,n=e.y,r=e.width,i=e.height,a=Object.create((typeof DOMRectReadOnly<`u`?DOMRectReadOnly:Object).prototype);return Sn(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}function fn(e,t,n,r){return{x:e,y:t,width:n,height:r}}var pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn=o((()=>{pn=(function(){if(typeof Map<`u`)return Map;function e(e,t){var n=-1;return e.some(function(e,r){return e[0]===t&&(n=r,!0)}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){t===void 0&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()})(),mn=typeof window<`u`&&typeof document<`u`&&window.document===document,hn=(function(){return typeof global<`u`&&global.Math===Math?global:typeof self<`u`&&self.Math===Math?self:typeof window<`u`&&window.Math===Math?window:Function(`return this`)()})(),gn=(function(){return typeof requestAnimationFrame==`function`?requestAnimationFrame.bind(hn):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}})(),_n=2,vn=20,yn=[`top`,`right`,`bottom`,`left`,`width`,`height`,`size`,`weight`],bn=typeof MutationObserver<`u`,xn=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=nn(this.refresh.bind(this),vn)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},e.prototype.connect_=function(){!mn||this.connected_||(document.addEventListener(`transitionend`,this.onTransitionEnd_),window.addEventListener(`resize`,this.refresh),bn?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener(`DOMSubtreeModified`,this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!mn||!this.connected_||(document.removeEventListener(`transitionend`,this.onTransitionEnd_),window.removeEventListener(`resize`,this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener(`DOMSubtreeModified`,this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=t===void 0?``:t;yn.some(function(e){return!!~n.indexOf(e)})&&this.refresh()},e.getInstance=function(){return this.instance_||=new e,this.instance_},e.instance_=null,e}(),Sn=(function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e}),Cn=(function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||hn}),wn=fn(0,0,0,0),Tn=(function(){return typeof SVGGraphicsElement<`u`?function(e){return e instanceof Cn(e).SVGGraphicsElement}:function(e){return e instanceof Cn(e).SVGElement&&typeof e.getBBox==`function`}})(),En=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=fn(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=un(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),Dn=function(){function e(e,t){var n=dn(t);Sn(this,{target:e,contentRect:n})}return e}(),On=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new pn,typeof e!=`function`)throw TypeError(`The callback provided as parameter 1 is not a function.`);this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw TypeError(`1 argument required, but only 0 present.`);if(!(typeof Element>`u`||!(Element instanceof Object))){if(!(e instanceof Cn(e).Element))throw TypeError(`parameter 1 is not of type "Element".`);var t=this.observations_;t.has(e)||(t.set(e,new En(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw TypeError(`1 argument required, but only 0 present.`);if(!(typeof Element>`u`||!(Element instanceof Object))){if(!(e instanceof Cn(e).Element))throw TypeError(`parameter 1 is not of type "Element".`);var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new Dn(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),kn=typeof WeakMap<`u`?new WeakMap:new pn,An=function(){function e(t){if(!(this instanceof e))throw TypeError(`Cannot call a class as a function.`);if(!arguments.length)throw TypeError(`1 argument required, but only 0 present.`);var n=new On(t,xn.getInstance(),this);kn.set(this,n)}return e}(),[`observe`,`unobserve`,`disconnect`].forEach(function(e){An.prototype[e]=function(){var t;return(t=kn.get(this))[e].apply(t,arguments)}}),jn=(function(){return hn.ResizeObserver===void 0?An:hn.ResizeObserver})()})),Nn=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.InnerSlider=void 0;var t=u(p()),n=u(Jt()),r=u(Yt()),i=u(Xt()),a=Zt(),o=Qt(),s=$t(),c=en(),l=u((Mn(),d(tn)));function u(e){return e&&e.__esModule?e:{default:e}}function f(e){"@babel/helpers - typeof";return f=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},f(e)}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function h(e,t){if(e==null)return{};var n=g(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function g(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?_(Object(n),!0).forEach(function(t){k(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function y(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return t&&b(e.prototype,t),n&&b(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function S(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function w(e){var t=D();return function(){var n=O(e),r;if(t){var i=O(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return T(this,r)}}function T(e,t){if(t&&(f(t)===`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return E(e)}function E(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function D(){if(typeof Reflect>`u`||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy==`function`)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.InnerSlider=function(e){S(d,e);var u=w(d);function d(e){var f;y(this,d),f=u.call(this,e),k(E(f),`listRefHandler`,function(e){return f.list=e}),k(E(f),`trackRefHandler`,function(e){return f.track=e}),k(E(f),`adaptHeight`,function(){if(f.props.adaptiveHeight&&f.list){var e=f.list.querySelector(`[data-index="${f.state.currentSlide}"]`);f.list.style.height=(0,a.getHeight)(e)+`px`}}),k(E(f),`componentDidMount`,function(){if(f.props.onInit&&f.props.onInit(),f.props.lazyLoad){var e=(0,a.getOnDemandLazySlides)(v(v({},f.props),f.state));e.length>0&&(f.setState(function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}}),f.props.onLazyLoad&&f.props.onLazyLoad(e))}var t=v({listRef:f.list,trackRef:f.track},f.props);f.updateState(t,!0,function(){f.adaptHeight(),f.props.autoplay&&f.autoPlay(`update`)}),f.props.lazyLoad===`progressive`&&(f.lazyLoadTimer=setInterval(f.progressiveLazyLoad,1e3)),f.ro=new l.default(function(){f.state.animating?(f.onWindowResized(!1),f.callbackTimers.push(setTimeout(function(){return f.onWindowResized()},f.props.speed))):f.onWindowResized()}),f.ro.observe(f.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(`.slick-slide`),function(e){e.onfocus=f.props.pauseOnFocus?f.onSlideFocus:null,e.onblur=f.props.pauseOnFocus?f.onSlideBlur:null}),window.addEventListener?window.addEventListener(`resize`,f.onWindowResized):window.attachEvent(`onresize`,f.onWindowResized)}),k(E(f),`componentWillUnmount`,function(){f.animationEndCallback&&clearTimeout(f.animationEndCallback),f.lazyLoadTimer&&clearInterval(f.lazyLoadTimer),f.callbackTimers.length&&(f.callbackTimers.forEach(function(e){return clearTimeout(e)}),f.callbackTimers=[]),window.addEventListener?window.removeEventListener(`resize`,f.onWindowResized):window.detachEvent(`onresize`,f.onWindowResized),f.autoplayTimer&&clearInterval(f.autoplayTimer),f.ro.disconnect()}),k(E(f),`componentDidUpdate`,function(e){if(f.checkImagesLoad(),f.props.onReInit&&f.props.onReInit(),f.props.lazyLoad){var n=(0,a.getOnDemandLazySlides)(v(v({},f.props),f.state));n.length>0&&(f.setState(function(e){return{lazyLoadedList:e.lazyLoadedList.concat(n)}}),f.props.onLazyLoad&&f.props.onLazyLoad(n))}f.adaptHeight();var r=v(v({listRef:f.list,trackRef:f.track},f.props),f.state),i=f.didPropsChange(e);i&&f.updateState(r,i,function(){f.state.currentSlide>=t.default.Children.count(f.props.children)&&f.changeSlide({message:`index`,index:t.default.Children.count(f.props.children)-f.props.slidesToShow,currentSlide:f.state.currentSlide}),f.props.autoplay?f.autoPlay(`update`):f.pause(`paused`)})}),k(E(f),`onWindowResized`,function(e){f.debouncedResize&&f.debouncedResize.cancel(),f.debouncedResize=(0,r.default)(function(){return f.resizeWindow(e)},50),f.debouncedResize()}),k(E(f),`resizeWindow`,function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(f.track&&f.track.node){var t=v(v({listRef:f.list,trackRef:f.track},f.props),f.state);f.updateState(t,e,function(){f.props.autoplay?f.autoPlay(`update`):f.pause(`paused`)}),f.setState({animating:!1}),clearTimeout(f.animationEndCallback),delete f.animationEndCallback}}),k(E(f),`updateState`,function(e,n,r){var i=(0,a.initializedState)(e);e=v(v(v({},e),i),{},{slideIndex:i.currentSlide});var o=(0,a.getTrackLeft)(e);e=v(v({},e),{},{left:o});var s=(0,a.getTrackCSS)(e);(n||t.default.Children.count(f.props.children)!==t.default.Children.count(e.children))&&(i.trackStyle=s),f.setState(i,r)}),k(E(f),`ssrInit`,function(){if(f.props.variableWidth){var e=0,n=0,r=[],i=(0,a.getPreClones)(v(v(v({},f.props),f.state),{},{slideCount:f.props.children.length})),o=(0,a.getPostClones)(v(v(v({},f.props),f.state),{},{slideCount:f.props.children.length}));f.props.children.forEach(function(t){r.push(t.props.style.width),e+=t.props.style.width});for(var s=0;s<i;s++)n+=r[r.length-1-s],e+=r[r.length-1-s];for(var c=0;c<o;c++)e+=r[c];for(var l=0;l<f.state.currentSlide;l++)n+=r[l];var u={width:e+`px`,left:-n+`px`};if(f.props.centerMode){var d=`${r[f.state.currentSlide]}px`;u.left=`calc(${u.left} + (100% - ${d}) / 2 ) `}return{trackStyle:u}}var p=t.default.Children.count(f.props.children),m=v(v(v({},f.props),f.state),{},{slideCount:p}),h=(0,a.getPreClones)(m)+(0,a.getPostClones)(m)+p,g=100/f.props.slidesToShow*h,_=100/h,y=-_*((0,a.getPreClones)(m)+f.state.currentSlide)*g/100;f.props.centerMode&&(y+=(100-_*g/100)/2);var b={width:g+`%`,left:y+`%`};return{slideWidth:_+`%`,trackStyle:b}}),k(E(f),`checkImagesLoad`,function(){var e=f.list&&f.list.querySelectorAll&&f.list.querySelectorAll(`.slick-slide img`)||[],t=e.length,n=0;Array.prototype.forEach.call(e,function(e){var r=function(){return++n&&n>=t&&f.onWindowResized()};if(!e.onclick)e.onclick=function(){return e.parentNode.focus()};else{var i=e.onclick;e.onclick=function(){i(),e.parentNode.focus()}}e.onload||(f.props.lazyLoad?e.onload=function(){f.adaptHeight(),f.callbackTimers.push(setTimeout(f.onWindowResized,f.props.speed))}:(e.onload=r,e.onerror=function(){r(),f.props.onLazyLoadError&&f.props.onLazyLoadError()}))})}),k(E(f),`progressiveLazyLoad`,function(){for(var e=[],t=v(v({},f.props),f.state),n=f.state.currentSlide;n<f.state.slideCount+(0,a.getPostClones)(t);n++)if(f.state.lazyLoadedList.indexOf(n)<0){e.push(n);break}for(var r=f.state.currentSlide-1;r>=-(0,a.getPreClones)(t);r--)if(f.state.lazyLoadedList.indexOf(r)<0){e.push(r);break}e.length>0?(f.setState(function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}}),f.props.onLazyLoad&&f.props.onLazyLoad(e)):f.lazyLoadTimer&&(clearInterval(f.lazyLoadTimer),delete f.lazyLoadTimer)}),k(E(f),`slideHandler`,function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=f.props,r=n.asNavFor,i=n.beforeChange,o=n.onLazyLoad,s=n.speed,c=n.afterChange,l=f.state.currentSlide,u=(0,a.slideHandler)(v(v(v({index:e},f.props),f.state),{},{trackRef:f.track,useCSS:f.props.useCSS&&!t})),d=u.state,p=u.nextState;if(d){i&&i(l,d.currentSlide);var m=d.lazyLoadedList.filter(function(e){return f.state.lazyLoadedList.indexOf(e)<0});o&&m.length>0&&o(m),!f.props.waitForAnimate&&f.animationEndCallback&&(clearTimeout(f.animationEndCallback),c&&c(l),delete f.animationEndCallback),f.setState(d,function(){r&&f.asNavForIndex!==e&&(f.asNavForIndex=e,r.innerSlider.slideHandler(e)),p&&(f.animationEndCallback=setTimeout(function(){var e=p.animating,t=h(p,[`animating`]);f.setState(t,function(){f.callbackTimers.push(setTimeout(function(){return f.setState({animating:e})},10)),c&&c(d.currentSlide),delete f.animationEndCallback})},s))})}}),k(E(f),`changeSlide`,function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=v(v({},f.props),f.state),r=(0,a.changeSlide)(n,e);if(!(r!==0&&!r)&&(t===!0?f.slideHandler(r,t):f.slideHandler(r),f.props.autoplay&&f.autoPlay(`update`),f.props.focusOnSelect)){var i=f.list.querySelectorAll(`.slick-current`);i[0]&&i[0].focus()}}),k(E(f),`clickHandler`,function(e){f.clickable===!1&&(e.stopPropagation(),e.preventDefault()),f.clickable=!0}),k(E(f),`keyHandler`,function(e){var t=(0,a.keyHandler)(e,f.props.accessibility,f.props.rtl);t!==``&&f.changeSlide({message:t})}),k(E(f),`selectHandler`,function(e){f.changeSlide(e)}),k(E(f),`disableBodyScroll`,function(){window.ontouchmove=function(e){e||=window.event,e.preventDefault&&e.preventDefault(),e.returnValue=!1}}),k(E(f),`enableBodyScroll`,function(){window.ontouchmove=null}),k(E(f),`swipeStart`,function(e){f.props.verticalSwiping&&f.disableBodyScroll();var t=(0,a.swipeStart)(e,f.props.swipe,f.props.draggable);t!==``&&f.setState(t)}),k(E(f),`swipeMove`,function(e){var t=(0,a.swipeMove)(e,v(v(v({},f.props),f.state),{},{trackRef:f.track,listRef:f.list,slideIndex:f.state.currentSlide}));t&&(t.swiping&&(f.clickable=!1),f.setState(t))}),k(E(f),`swipeEnd`,function(e){var t=(0,a.swipeEnd)(e,v(v(v({},f.props),f.state),{},{trackRef:f.track,listRef:f.list,slideIndex:f.state.currentSlide}));if(t){var n=t.triggerSlideHandler;delete t.triggerSlideHandler,f.setState(t),n!==void 0&&(f.slideHandler(n),f.props.verticalSwiping&&f.enableBodyScroll())}}),k(E(f),`touchEnd`,function(e){f.swipeEnd(e),f.clickable=!0}),k(E(f),`slickPrev`,function(){f.callbackTimers.push(setTimeout(function(){return f.changeSlide({message:`previous`})},0))}),k(E(f),`slickNext`,function(){f.callbackTimers.push(setTimeout(function(){return f.changeSlide({message:`next`})},0))}),k(E(f),`slickGoTo`,function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(e=Number(e),isNaN(e))return``;f.callbackTimers.push(setTimeout(function(){return f.changeSlide({message:`index`,index:e,currentSlide:f.state.currentSlide},t)},0))}),k(E(f),`play`,function(){var e;if(f.props.rtl)e=f.state.currentSlide-f.props.slidesToScroll;else if((0,a.canGoNext)(v(v({},f.props),f.state)))e=f.state.currentSlide+f.props.slidesToScroll;else return!1;f.slideHandler(e)}),k(E(f),`autoPlay`,function(e){f.autoplayTimer&&clearInterval(f.autoplayTimer);var t=f.state.autoplaying;if(e===`update`){if(t===`hovered`||t===`focused`||t===`paused`)return}else if(e===`leave`){if(t===`paused`||t===`focused`)return}else if(e===`blur`&&(t===`paused`||t===`hovered`))return;f.autoplayTimer=setInterval(f.play,f.props.autoplaySpeed+50),f.setState({autoplaying:`playing`})}),k(E(f),`pause`,function(e){f.autoplayTimer&&(clearInterval(f.autoplayTimer),f.autoplayTimer=null);var t=f.state.autoplaying;e===`paused`?f.setState({autoplaying:`paused`}):e===`focused`?(t===`hovered`||t===`playing`)&&f.setState({autoplaying:`focused`}):t===`playing`&&f.setState({autoplaying:`hovered`})}),k(E(f),`onDotsOver`,function(){return f.props.autoplay&&f.pause(`hovered`)}),k(E(f),`onDotsLeave`,function(){return f.props.autoplay&&f.state.autoplaying===`hovered`&&f.autoPlay(`leave`)}),k(E(f),`onTrackOver`,function(){return f.props.autoplay&&f.pause(`hovered`)}),k(E(f),`onTrackLeave`,function(){return f.props.autoplay&&f.state.autoplaying===`hovered`&&f.autoPlay(`leave`)}),k(E(f),`onSlideFocus`,function(){return f.props.autoplay&&f.pause(`focused`)}),k(E(f),`onSlideBlur`,function(){return f.props.autoplay&&f.state.autoplaying===`focused`&&f.autoPlay(`blur`)}),k(E(f),`render`,function(){var e=(0,i.default)(`slick-slider`,f.props.className,{"slick-vertical":f.props.vertical,"slick-initialized":!0}),n=v(v({},f.props),f.state),r=(0,a.extractObject)(n,[`fade`,`cssEase`,`speed`,`infinite`,`centerMode`,`focusOnSelect`,`currentSlide`,`lazyLoad`,`lazyLoadedList`,`rtl`,`slideWidth`,`slideHeight`,`listHeight`,`vertical`,`slidesToShow`,`slidesToScroll`,`slideCount`,`trackStyle`,`variableWidth`,`unslick`,`centerPadding`,`targetSlide`,`useCSS`]),l=f.props.pauseOnHover;r=v(v({},r),{},{onMouseEnter:l?f.onTrackOver:null,onMouseLeave:l?f.onTrackLeave:null,onMouseOver:l?f.onTrackOver:null,focusOnSelect:f.props.focusOnSelect&&f.clickable?f.selectHandler:null});var u;if(f.props.dots===!0&&f.state.slideCount>=f.props.slidesToShow){var d=(0,a.extractObject)(n,[`dotsClass`,`slideCount`,`slidesToShow`,`currentSlide`,`slidesToScroll`,`clickHandler`,`children`,`customPaging`,`infinite`,`appendDots`]),p=f.props.pauseOnDotsHover;d=v(v({},d),{},{clickHandler:f.changeSlide,onMouseEnter:p?f.onDotsLeave:null,onMouseOver:p?f.onDotsOver:null,onMouseLeave:p?f.onDotsLeave:null}),u=t.default.createElement(s.Dots,d)}var h,g,_=(0,a.extractObject)(n,[`infinite`,`centerMode`,`currentSlide`,`slideCount`,`slidesToShow`,`prevArrow`,`nextArrow`]);_.clickHandler=f.changeSlide,f.props.arrows&&(h=t.default.createElement(c.PrevArrow,_),g=t.default.createElement(c.NextArrow,_));var y=null;f.props.vertical&&(y={height:f.state.listHeight});var b=null;f.props.vertical===!1?f.props.centerMode===!0&&(b={padding:`0px `+f.props.centerPadding}):f.props.centerMode===!0&&(b={padding:f.props.centerPadding+` 0px`});var x=v(v({},y),b),S=f.props.touchMove,C={className:`slick-list`,style:x,onClick:f.clickHandler,onMouseDown:S?f.swipeStart:null,onMouseMove:f.state.dragging&&S?f.swipeMove:null,onMouseUp:S?f.swipeEnd:null,onMouseLeave:f.state.dragging&&S?f.swipeEnd:null,onTouchStart:S?f.swipeStart:null,onTouchMove:f.state.dragging&&S?f.swipeMove:null,onTouchEnd:S?f.touchEnd:null,onTouchCancel:f.state.dragging&&S?f.swipeEnd:null,onKeyDown:f.props.accessibility?f.keyHandler:null},w={className:e,dir:`ltr`,style:f.props.style};return f.props.unslick&&(C={className:`slick-list`},w={className:e}),t.default.createElement(`div`,w,f.props.unslick?``:h,t.default.createElement(`div`,m({ref:f.listRefHandler},C),t.default.createElement(o.Track,m({ref:f.trackRefHandler},r),f.props.children)),f.props.unslick?``:g,f.props.unslick?``:u)}),f.list=null,f.track=null,f.state=v(v({},n.default),{},{currentSlide:f.props.initialSlide,slideCount:t.default.Children.count(f.props.children)}),f.callbackTimers=[],f.clickable=!0,f.debouncedResize=null;var p=f.ssrInit();return f.state=v(v({},f.state),p),f}return x(d,[{key:`didPropsChange`,value:function(e){for(var n=!1,r=0,i=Object.keys(this.props);r<i.length;r++){var a=i[r];if(!e.hasOwnProperty(a)){n=!0;break}if(f(e[a])!==`object`&&typeof e[a]!=`function`&&e[a]!==this.props[a]){n=!0;break}}return n||t.default.Children.count(this.props.children)!==t.default.Children.count(e.children)}}]),d}(t.default.Component)})),Pn=s(((e,t)=>{t.exports=function(e){return e.replace(/[A-Z]/g,function(e){return`-`+e.toLowerCase()}).toLowerCase()}})),Fn=s(((e,t)=>{var n=Pn(),r=function(e){return/[height|width]$/.test(e)},i=function(e){var t=``,i=Object.keys(e);return i.forEach(function(a,o){var s=e[a];a=n(a),r(a)&&typeof s==`number`&&(s+=`px`),t+=s===!0?a:s===!1?`not `+a:`(`+a+`: `+s+`)`,o<i.length-1&&(t+=` and `)}),t};t.exports=function(e){var t=``;return typeof e==`string`?e:e instanceof Array?(e.forEach(function(n,r){t+=i(n),r<e.length-1&&(t+=`, `)}),t):i(e)}})),In=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(p());function n(e){return e&&e.__esModule?e:{default:e}}e.default={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(e){return t.default.createElement(`ul`,{style:{display:`block`}},e)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:`50px`,className:``,cssEase:`ease`,customPaging:function(e){return t.default.createElement(`button`,null,e+1)},dots:!1,dotsClass:`slick-dots`,draggable:!0,easing:`linear`,edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:`div`,slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0}})),Ln=s(((e,t)=>{function n(e){this.options=e,!e.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},t.exports=n})),Rn=s(((e,t)=>{function n(e,t){for(var n=0,r=e.length,i;n<r&&(i=t(e[n],n),i!==!1);n++);}function r(e){return Object.prototype.toString.apply(e)===`[object Array]`}function i(e){return typeof e==`function`}t.exports={isFunction:i,isArray:r,each:n}})),zn=s(((e,t)=>{var n=Ln(),r=Rn().each;function i(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(e){n.mql=e.currentTarget||e,n.assess()},this.mql.addListener(this.listener)}i.prototype={constuctor:i,addHandler:function(e){var t=new n(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;r(t,function(n,r){if(n.equals(e))return n.destroy(),!t.splice(r,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){r(this.handlers,function(e){e.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?`on`:`off`;r(this.handlers,function(t){t[e]()})}},t.exports=i})),Bn=s(((e,t)=>{var n=zn(),r=Rn(),i=r.each,a=r.isFunction,o=r.isArray;function s(){if(!window.matchMedia)throw Error(`matchMedia not present, legacy browsers require a polyfill`);this.queries={},this.browserIsIncapable=!window.matchMedia(`only all`).matches}s.prototype={constructor:s,register:function(e,t,r){var s=this.queries,c=r&&this.browserIsIncapable;return s[e]||(s[e]=new n(e,c)),a(t)&&(t={match:t}),o(t)||(t=[t]),i(t,function(t){a(t)&&(t={match:t}),s[e].addHandler(t)}),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},t.exports=s})),Vn=s(((e,t)=>{t.exports=new(Bn())})),Hn=s((e=>{function t(e){"@babel/helpers - typeof";return t=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},t(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(p()),r=Nn(),i=s(Fn()),a=s(In()),o=Zt();function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?l(Object(n),!0).forEach(function(t){S(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function _(e){var t=b();return function(){var n=x(e),r;if(t){var i=x(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return v(this,r)}}function v(e,n){if(n&&(t(n)===`object`||typeof n==`function`))return n;if(n!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return y(e)}function y(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function b(){if(typeof Reflect>`u`||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy==`function`)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=(0,o.canUseDOM)()&&Vn();e.default=function(e){h(s,e);var t=_(s);function s(e){var n;return d(this,s),n=t.call(this,e),S(y(n),`innerSliderRefHandler`,function(e){return n.innerSlider=e}),S(y(n),`slickPrev`,function(){return n.innerSlider.slickPrev()}),S(y(n),`slickNext`,function(){return n.innerSlider.slickNext()}),S(y(n),`slickGoTo`,function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return n.innerSlider.slickGoTo(e,t)}),S(y(n),`slickPause`,function(){return n.innerSlider.pause(`paused`)}),S(y(n),`slickPlay`,function(){return n.innerSlider.autoPlay(`play`)}),n.state={breakpoint:null},n._responsiveMediaHandlers=[],n}return m(s,[{key:`media`,value:function(e,t){C.register(e,t),this._responsiveMediaHandlers.push({query:e,handler:t})}},{key:`componentDidMount`,value:function(){var e=this;if(this.props.responsive){var t=this.props.responsive.map(function(e){return e.breakpoint});t.sort(function(e,t){return e-t}),t.forEach(function(n,r){var a=r===0?(0,i.default)({minWidth:0,maxWidth:n}):(0,i.default)({minWidth:t[r-1]+1,maxWidth:n});(0,o.canUseDOM)()&&e.media(a,function(){e.setState({breakpoint:n})})});var n=(0,i.default)({minWidth:t.slice(-1)[0]});(0,o.canUseDOM)()&&this.media(n,function(){e.setState({breakpoint:null})})}}},{key:`componentWillUnmount`,value:function(){this._responsiveMediaHandlers.forEach(function(e){C.unregister(e.query,e.handler)})}},{key:`render`,value:function(){var e=this,t,i;this.state.breakpoint?(i=this.props.responsive.filter(function(t){return t.breakpoint===e.state.breakpoint}),t=i[0].settings===`unslick`?`unslick`:u(u(u({},a.default),this.props),i[0].settings)):t=u(u({},a.default),this.props),t.centerMode&&(t.slidesToScroll,t.slidesToScroll=1),t.fade&&(t.slidesToShow,t.slidesToScroll,t.slidesToShow=1,t.slidesToScroll=1);var o=n.default.Children.toArray(this.props.children);o=o.filter(function(e){return typeof e==`string`?!!e.trim():!!e}),t.variableWidth&&(t.rows>1||t.slidesPerRow>1)&&(console.warn(`variableWidth is not supported in case of rows > 1 or slidesPerRow > 1`),t.variableWidth=!1);for(var s=[],l=null,d=0;d<o.length;d+=t.rows*t.slidesPerRow){for(var f=[],p=d;p<d+t.rows*t.slidesPerRow;p+=t.slidesPerRow){for(var m=[],h=p;h<p+t.slidesPerRow&&(t.variableWidth&&o[h].props.style&&(l=o[h].props.style.width),!(h>=o.length));h+=1)m.push(n.default.cloneElement(o[h],{key:100*d+10*p+h,tabIndex:-1,style:{width:`${100/t.slidesPerRow}%`,display:`inline-block`}}));f.push(n.default.createElement(`div`,{key:10*d+p},m))}t.variableWidth?s.push(n.default.createElement(`div`,{key:d,style:{width:l}},f)):s.push(n.default.createElement(`div`,{key:d},f))}if(t===`unslick`){var g=`regular slider `+(this.props.className||``);return n.default.createElement(`div`,{className:g},o)}return s.length<=t.slidesToShow&&(t.unslick=!0),n.default.createElement(r.InnerSlider,c({style:this.props.style,ref:this.innerSliderRefHandler},t),s)}}]),s}(n.default.Component)})),Un=u(s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Hn());function n(e){return e&&e.__esModule?e:{default:e}}e.default=t.default}))(),1),Wn=[{id:1,badge:`Nueva colección`,title:`Tecnología que lleva tu día más lejos`,desc:`Descubrí productos pensados para combinar rendimiento, diseño y tecnología en una experiencia única.`,cover:`/img/products/iphone-banner.webp`,alt:`Productos tecnológicos de última generación`,primaryAction:{label:`Explorar colección`,href:`/shop`},secondaryAction:{label:`Ver productos`,href:`/shop`}},{id:2,badge:`Oferta exclusiva`,title:`Tu estilo. Tu ritmo. Tus zapatillas.`,desc:`Encontrá modelos urbanos que combinan comodidad, diseño y personalidad para acompañarte todos los días.`,cover:`/img/products/zapas-nike-inicio.jpg`,alt:`Zapatillas Nike Air urbanas`,primaryAction:{label:`Comprar ahora`,href:`/shop`},secondaryAction:{label:`Ver productos`,href:`/shop`}},{id:3,badge:`Colección premium`,title:`El tiempo también define tu estilo`,desc:`Descubrí relojes seleccionados para quienes buscan precisión, elegancia y materiales de primera calidad.`,cover:`/img/products/banner-smart-watch.jpg`,alt:`Reloj premium de lujo`,primaryAction:{label:`Descubrir colección`,href:`/shop`},secondaryAction:{label:`Ver productos`,href:`/shop`}}],Gn=({onClick:e})=>(0,F.jsx)(`button`,{type:`button`,onClick:e,"aria-label":`Siguiente diapositiva`,className:`\r
        absolute right-4 top-1/2 z-30\r
        hidden h-11 w-11\r
        -translate-y-1/2\r
        items-center justify-center\r
        rounded-2xl\r
        border border-white/15\r
        bg-black/20\r
        text-white\r
        shadow-[0_8px_25px_rgba(0,0,0,0.12)]\r
        backdrop-blur-md\r
        transition-all duration-300\r
        hover:-translate-y-1/2\r
        hover:border-white/30\r
        hover:bg-primary\r
        hover:shadow-[0_12px_30px_rgba(233,69,96,0.25)]\r
        active:scale-95\r
        focus:outline-none\r
        focus-visible:ring-2\r
        focus-visible:ring-white/70\r
        focus-visible:ring-offset-2\r
        focus-visible:ring-offset-secondary\r
        md:flex\r
        lg:right-6\r
      `,children:(0,F.jsx)(`i`,{className:`fa-solid fa-chevron-right text-xs`,"aria-hidden":`true`})}),Kn=({onClick:e})=>(0,F.jsx)(`button`,{type:`button`,onClick:e,"aria-label":`Diapositiva anterior`,className:`\r
        absolute left-4 top-1/2 z-30\r
        hidden h-11 w-11\r
        -translate-y-1/2\r
        items-center justify-center\r
        rounded-2xl\r
        border border-white/15\r
        bg-black/20\r
        text-white\r
        shadow-[0_8px_25px_rgba(0,0,0,0.12)]\r
        backdrop-blur-md\r
        transition-all duration-300\r
        hover:-translate-y-1/2\r
        hover:border-white/30\r
        hover:bg-primary\r
        hover:shadow-[0_12px_30px_rgba(233,69,96,0.25)]\r
        active:scale-95\r
        focus:outline-none\r
        focus-visible:ring-2\r
        focus-visible:ring-white/70\r
        focus-visible:ring-offset-2\r
        focus-visible:ring-offset-secondary\r
        md:flex\r
        lg:left-6\r
      `,children:(0,F.jsx)(`i`,{className:`fa-solid fa-chevron-left text-xs`,"aria-hidden":`true`})}),qn=()=>{let e={dots:!0,infinite:Wn.length>1,speed:650,slidesToShow:1,slidesToScroll:1,autoplay:Wn.length>1,autoplaySpeed:6500,pauseOnHover:!0,pauseOnFocus:!0,arrows:Wn.length>1,swipeToSlide:!0,adaptiveHeight:!1,nextArrow:(0,F.jsx)(Gn,{}),prevArrow:(0,F.jsx)(Kn,{}),appendDots:e=>(0,F.jsx)(`div`,{className:`\r
          absolute\r
          bottom-5 left-0 right-0\r
          z-30\r
        `,children:(0,F.jsx)(`ul`,{className:`\r
            m-0\r
            flex\r
            items-center\r
            justify-center\r
            gap-2\r
            p-0\r
          `,children:e})}),customPaging:e=>(0,F.jsx)(`button`,{type:`button`,"aria-label":`Ir a la diapositiva ${e+1}`,className:`\r
          h-2 w-2\r
          rounded-full\r
          border border-white/40\r
          bg-white/30\r
          p-0\r
          opacity-80\r
          transition-all duration-300\r
          hover:scale-125\r
          hover:bg-white\r
          hover:opacity-100\r
          focus:outline-none\r
          focus-visible:ring-2\r
          focus-visible:ring-white/80\r
          focus-visible:ring-offset-2\r
          focus-visible:ring-offset-transparent\r
          motion-reduce:transition-none\r
          motion-reduce:hover:scale-100\r
        `})};return(0,F.jsxs)(`section`,{"aria-label":`Ofertas destacadas`,className:`\r
        group\r
        relative\r
        mt-4\r
        w-full\r
        overflow-hidden\r
        rounded-[1.75rem]\r
        border border-black/[0.05]\r
        bg-secondary\r
        shadow-[0_25px_60px_rgba(3,0,71,0.16)]\r
        sm:rounded-[2rem]\r
      `,children:[(0,F.jsx)(`div`,{className:`\r
          pointer-events-none\r
          absolute\r
          -inset-px\r
          z-20\r
          rounded-[1.75rem]\r
          border border-white/[0.06]\r
          sm:rounded-[2rem]\r
        `,"aria-hidden":`true`}),(0,F.jsx)(Un.default,{...e,children:Wn.map((e,t)=>(0,F.jsxs)(`article`,{className:`\r
              relative\r
              outline-none\r
            `,"aria-roledescription":`diapositiva`,"aria-label":`${t+1} de ${Wn.length}`,children:[(0,F.jsxs)(`div`,{className:`\r
                relative\r
                h-[430px]\r
                w-full\r
                overflow-hidden\r
                bg-secondary\r
\r
                sm:h-[480px]\r
                md:h-[540px]\r
                lg:h-[590px]\r
              `,children:[(0,F.jsx)(`img`,{src:e.cover,alt:e.alt,loading:e.id===1?`eager`:`lazy`,className:`\r
                  absolute inset-0\r
                  h-full w-full\r
                  object-cover object-center\r
                  opacity-90\r
                  transition-transform duration-[9s] ease-out\r
                  group-hover:scale-105\r
                `}),(0,F.jsx)(`div`,{className:`\r
                  absolute inset-0\r
                  bg-gradient-to-r\r
                  from-secondary\r
                  via-secondary/70\r
                  via-40%\r
                  to-secondary/5\r
                `,"aria-hidden":`true`}),(0,F.jsx)(`div`,{className:`\r
                  absolute inset-x-0 bottom-0\r
                  h-48\r
                  bg-gradient-to-t\r
                  from-secondary/70\r
                  via-secondary/25\r
                  to-transparent\r
                `,"aria-hidden":`true`}),(0,F.jsx)(`div`,{className:`\r
                  absolute inset-x-0 top-0\r
                  h-24\r
                  bg-gradient-to-b\r
                  from-secondary/25\r
                  to-transparent\r
                `,"aria-hidden":`true`}),(0,F.jsx)(`div`,{className:`\r
                  pointer-events-none\r
                  absolute\r
                  -right-20\r
                  -top-20\r
                  h-72 w-72\r
                  rounded-full\r
                  bg-primary/10\r
                  blur-3xl\r
                `,"aria-hidden":`true`}),(0,F.jsx)(`div`,{className:`\r
                  pointer-events-none\r
                  absolute\r
                  -bottom-24\r
                  -left-10\r
                  h-64 w-64\r
                  rounded-full\r
                  bg-primary/5\r
                  blur-3xl\r
                `,"aria-hidden":`true`})]}),(0,F.jsx)(`div`,{className:`\r
                absolute inset-0\r
                flex items-center\r
              `,children:(0,F.jsx)(`div`,{className:`\r
                  w-full\r
                  px-6\r
                  pb-10\r
                  pt-12\r
\r
                  sm:px-10\r
                  sm:pb-12\r
\r
                  md:px-16\r
\r
                  lg:px-20\r
\r
                  xl:px-24\r
                `,children:(0,F.jsxs)(`div`,{className:`max-w-2xl`,children:[(0,F.jsxs)(`div`,{className:`\r
                      inline-flex\r
                      items-center\r
                      gap-2\r
                      rounded-full\r
                      border border-primary/25\r
                      bg-primary/10\r
                      px-3.5 py-1.5\r
                      text-[9px]\r
                      font-extrabold\r
                      uppercase\r
                      tracking-[0.16em]\r
                      text-primary\r
                      shadow-[0_8px_20px_rgba(233,69,96,0.08)]\r
                      backdrop-blur-md\r
                      sm:text-[10px]\r
                    `,children:[(0,F.jsxs)(`span`,{className:`\r
                        relative\r
                        flex h-1.5 w-1.5\r
                      `,"aria-hidden":`true`,children:[(0,F.jsx)(`span`,{className:`\r
                          absolute\r
                          inline-flex\r
                          h-full w-full\r
                          animate-ping\r
                          rounded-full\r
                          bg-primary\r
                          opacity-60\r
                          motion-reduce:animate-none\r
                        `}),(0,F.jsx)(`span`,{className:`\r
                          relative\r
                          h-1.5 w-1.5\r
                          rounded-full\r
                          bg-primary\r
                        `})]}),e.badge]}),(0,F.jsx)(`h2`,{className:`\r
                      mt-5\r
                      max-w-2xl\r
\r
                      text-[2rem]\r
                      font-extrabold\r
                      leading-[1.03]\r
                      tracking-[-0.045em]\r
                      text-white\r
\r
                      sm:text-4xl\r
                      md:text-5xl\r
                      lg:text-6xl\r
                      xl:text-[4.25rem]\r
                    `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
                      mt-5\r
                      max-w-xl\r
                      text-sm\r
                      leading-6\r
                      text-white/65\r
\r
                      sm:text-base\r
                      md:text-lg\r
                      md:leading-7\r
                    `,children:e.desc}),(e.primaryAction||e.secondaryAction)&&(0,F.jsxs)(`div`,{className:`\r
                        mt-7\r
                        flex\r
                        flex-col\r
                        gap-3\r
\r
                        sm:flex-row\r
                        sm:items-center\r
                      `,children:[e.primaryAction&&(0,F.jsxs)(P,{to:e.primaryAction.href,className:`\r
                            group/primary\r
                            inline-flex\r
                            min-h-12\r
                            items-center\r
                            justify-center\r
                            gap-2\r
                            rounded-xl\r
                            bg-primary\r
                            px-6\r
                            py-3.5\r
                            text-sm\r
                            font-bold\r
                            text-white\r
                            shadow-[0_12px_28px_rgba(233,69,96,0.28)]\r
                            transition-all\r
                            duration-300\r
\r
                            hover:-translate-y-0.5\r
                            hover:bg-primary-dark\r
                            hover:shadow-[0_16px_32px_rgba(233,69,96,0.36)]\r
\r
                            active:translate-y-0\r
                            active:scale-[0.98]\r
\r
                            focus:outline-none\r
                            focus-visible:ring-2\r
                            focus-visible:ring-white/80\r
                            focus-visible:ring-offset-2\r
                            focus-visible:ring-offset-secondary\r
                          `,children:[(0,F.jsx)(`span`,{children:e.primaryAction.label}),(0,F.jsx)(`i`,{className:`\r
                              fa-solid\r
                              fa-arrow-right\r
                              text-xs\r
                              transition-transform\r
                              duration-300\r
                              group-hover/primary:translate-x-1\r
                            `,"aria-hidden":`true`})]}),e.secondaryAction&&(0,F.jsx)(P,{to:e.secondaryAction.href,className:`\r
                            inline-flex\r
                            min-h-12\r
                            items-center\r
                            justify-center\r
                            rounded-xl\r
                            border border-white/15\r
                            bg-white/[0.06]\r
                            px-6\r
                            py-3.5\r
                            text-sm\r
                            font-semibold\r
                            text-white\r
                            shadow-[0_8px_20px_rgba(0,0,0,0.08)]\r
                            backdrop-blur-md\r
                            transition-all\r
                            duration-300\r
\r
                            hover:-translate-y-0.5\r
                            hover:border-white/25\r
                            hover:bg-white/10\r
                            hover:shadow-[0_12px_25px_rgba(0,0,0,0.12)]\r
\r
                            active:translate-y-0\r
\r
                            focus:outline-none\r
                            focus-visible:ring-2\r
                            focus-visible:ring-white/60\r
                            focus-visible:ring-offset-2\r
                            focus-visible:ring-offset-secondary\r
                          `,children:e.secondaryAction.label})]}),(0,F.jsxs)(`div`,{className:`\r
                      mt-7\r
                      flex\r
                      flex-wrap\r
                      items-center\r
                      gap-x-5\r
                      gap-y-2\r
                      text-[10px]\r
                      font-semibold\r
                      text-white/40\r
                      sm:text-xs\r
                    `,children:[(0,F.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,F.jsx)(`span`,{className:`\r
                          flex h-5 w-5\r
                          items-center\r
                          justify-center\r
                          rounded-md\r
                          bg-white/[0.06]\r
                        `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-shield-halved text-[9px] text-primary/90`})}),`Compra segura`]}),(0,F.jsx)(`span`,{className:`\r
                        hidden h-4 w-px\r
                        bg-white/10\r
                        sm:block\r
                      `,"aria-hidden":`true`}),(0,F.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,F.jsx)(`span`,{className:`\r
                          flex h-5 w-5\r
                          items-center\r
                          justify-center\r
                          rounded-md\r
                          bg-white/[0.06]\r
                        `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-truck-fast text-[9px] text-primary/90`})}),`Envíos rápidos`]})]})]})})})]},e.id))})]})},Jn=()=>(0,F.jsxs)(`section`,{"aria-labelledby":`featured-offers-title`,className:`w-full pb-8 sm:pb-10 lg:pb-12`,children:[(0,F.jsx)(`h1`,{id:`featured-offers-title`,className:`sr-only`,children:`Ofertas destacadas`}),(0,F.jsx)(`div`,{className:`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8`,children:(0,F.jsx)(qn,{})})]}),Yn=e=>e.toLocaleString(`es-AR`,{minimumFractionDigits:0,maximumFractionDigits:0}),Xn=(e,t)=>t<=0||t>=100?e:e/(1-t/100),Zn=({onClick:e})=>(0,F.jsx)(`button`,{type:`button`,onClick:e,"aria-label":`Siguiente oferta`,className:`\r
        absolute right-0 top-1/2 z-30\r
        flex h-10 w-10\r
        -translate-y-1/2 translate-x-1/2\r
        items-center justify-center\r
        rounded-full\r
        border border-black/[0.07]\r
        bg-white\r
        text-secondary\r
        shadow-[0_10px_25px_rgba(3,0,71,0.10)]\r
        transition-all duration-300\r
\r
        hover:-translate-y-1/2\r
        hover:border-primary/25\r
        hover:bg-primary\r
        hover:text-white\r
        hover:shadow-[0_12px_28px_rgba(233,69,96,0.22)]\r
\r
        active:scale-95\r
\r
        focus:outline-none\r
        focus-visible:ring-2\r
        focus-visible:ring-primary/40\r
        focus-visible:ring-offset-2\r
\r
        sm:h-11 sm:w-11\r
      `,children:(0,F.jsx)(`i`,{className:`fa-solid fa-chevron-right text-[10px]`,"aria-hidden":`true`})}),Qn=({onClick:e})=>(0,F.jsx)(`button`,{type:`button`,onClick:e,"aria-label":`Oferta anterior`,className:`\r
        absolute left-0 top-1/2 z-30\r
        flex h-10 w-10\r
        -translate-y-1/2\r
        -translate-x-1/2\r
        items-center justify-center\r
        rounded-full\r
        border border-black/[0.07]\r
        bg-white\r
        text-secondary\r
        shadow-[0_10px_25px_rgba(3,0,71,0.10)]\r
        transition-all duration-300\r
\r
        hover:-translate-y-1/2\r
        hover:border-primary/25\r
        hover:bg-primary\r
        hover:text-white\r
        hover:shadow-[0_12px_28px_rgba(233,69,96,0.22)]\r
\r
        active:scale-95\r
\r
        focus:outline-none\r
        focus-visible:ring-2\r
        focus-visible:ring-primary/40\r
        focus-visible:ring-offset-2\r
\r
        sm:h-11 sm:w-11\r
      `,children:(0,F.jsx)(`i`,{className:`fa-solid fa-chevron-left text-[10px]`,"aria-hidden":`true`})}),$n=({productItem:e})=>{let t=I(e=>e.addToCart),n=I(e=>e.toggleWishlist),r=I(t=>t.wishlist.some(t=>t.id===e.id)),[i,a]=(0,y.useState)(!1),o=(0,y.useRef)(null);(0,y.useEffect)(()=>()=>{o.current!==null&&window.clearTimeout(o.current)},[]);let s=Math.max(0,Math.min(99,e.discount??0)),c=Xn(e.price,s);return(0,F.jsx)(`div`,{className:`px-2 py-3`,children:(0,F.jsxs)(`article`,{className:`\r
          group relative\r
          flex h-full\r
          min-h-[415px]\r
          flex-col\r
          overflow-hidden\r
          rounded-[1.25rem]\r
          border border-black/[0.055]\r
          bg-white\r
          shadow-[0_5px_24px_rgba(3,0,71,0.045)]\r
          transition-all duration-300\r
\r
          hover:-translate-y-1\r
          hover:border-primary/15\r
          hover:shadow-[0_18px_38px_rgba(3,0,71,0.10)]\r
        `,children:[(0,F.jsxs)(`div`,{className:`\r
            relative\r
            flex h-[205px]\r
            items-center justify-center\r
            overflow-hidden\r
            bg-gradient-to-b\r
            from-slate-50\r
            via-white\r
            to-white\r
            p-5\r
            sm:h-[215px]\r
          `,children:[(0,F.jsx)(`div`,{className:`\r
              pointer-events-none\r
              absolute\r
              -right-10\r
              -top-10\r
              h-28 w-28\r
              rounded-full\r
              bg-primary/[0.06]\r
              blur-3xl\r
            `,"aria-hidden":`true`}),s>0&&(0,F.jsxs)(`div`,{className:`\r
                absolute left-3 top-3 z-20\r
                flex items-center gap-1.5\r
                rounded-full\r
                bg-primary\r
                px-3 py-1.5\r
                text-[9px]\r
                font-extrabold\r
                uppercase\r
                tracking-[0.08em]\r
                text-white\r
                shadow-[0_7px_18px_rgba(233,69,96,0.24)]\r
              `,children:[(0,F.jsx)(`span`,{className:`\r
                  flex h-4 w-4\r
                  items-center justify-center\r
                  rounded-full\r
                  bg-white/15\r
                `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-bolt text-[7px]`})}),`-`,s,`%`]}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>n(e),"aria-label":r?`Quitar ${e.name} de favoritos`:`Agregar ${e.name} a favoritos`,"aria-pressed":r,className:`
              absolute right-3 top-3 z-20
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border
              bg-white/90
              shadow-[0_5px_16px_rgba(3,0,71,0.07)]
              backdrop-blur-md
              transition-all duration-300

              hover:scale-105
              hover:shadow-[0_8px_20px_rgba(3,0,71,0.12)]

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/30
              focus-visible:ring-offset-2

              ${r?`border-primary/10 bg-primary/5 text-primary`:`border-black/[0.05] text-gray-400 hover:border-primary/10 hover:text-primary`}
            `,children:(0,F.jsx)(`i`,{className:`${r?`fa-solid fa-heart`:`fa-regular fa-heart`} text-sm`,"aria-hidden":`true`})}),(0,F.jsx)(`img`,{src:e.cover,alt:`Imagen de ${e.name}`,loading:`lazy`,className:`\r
              relative z-10\r
              h-full w-full\r
              object-contain\r
              mix-blend-multiply\r
              transition-transform\r
              duration-500\r
\r
              group-hover:scale-[1.07]\r
\r
              motion-reduce:transition-none\r
              motion-reduce:group-hover:scale-100\r
            `}),(0,F.jsx)(`div`,{className:`\r
              pointer-events-none\r
              absolute inset-x-0 bottom-0\r
              h-16\r
              bg-gradient-to-t\r
              from-black/[0.025]\r
              to-transparent\r
            `,"aria-hidden":`true`})]}),(0,F.jsxs)(`div`,{className:`flex flex-1 flex-col p-4`,children:[(0,F.jsxs)(`div`,{className:`flex-1`,children:[(0,F.jsxs)(`span`,{className:`\r
                inline-flex\r
                items-center gap-1.5\r
                rounded-full\r
                bg-primary/[0.07]\r
                px-2.5 py-1\r
                text-[9px]\r
                font-extrabold\r
                uppercase\r
                tracking-[0.10em]\r
                text-primary\r
              `,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-bolt text-[8px]`,"aria-hidden":`true`}),`Oferta flash`]}),(0,F.jsx)(`h3`,{className:`\r
                mt-2\r
                line-clamp-2\r
                min-h-[40px]\r
                text-sm\r
                font-bold\r
                leading-5\r
                text-secondary\r
                transition-colors duration-200\r
\r
                group-hover:text-primary\r
              `,title:e.name,children:e.name}),(0,F.jsxs)(`div`,{className:`mt-3 flex items-center gap-2`,"aria-label":`Calificación 4.8 de 5`,children:[(0,F.jsxs)(`div`,{className:`\r
                  flex items-center gap-0.5\r
                  text-[10px]\r
                  text-amber-400\r
                `,"aria-hidden":`true`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-star`}),(0,F.jsx)(`i`,{className:`fa-solid fa-star`}),(0,F.jsx)(`i`,{className:`fa-solid fa-star`}),(0,F.jsx)(`i`,{className:`fa-solid fa-star`}),(0,F.jsx)(`i`,{className:`fa-solid fa-star text-gray-200`})]}),(0,F.jsx)(`span`,{className:`text-[10px] font-medium text-gray-400`,children:`4.8`})]})]}),(0,F.jsx)(`div`,{className:`\r
              mt-4\r
              border-t border-black/[0.06]\r
              pt-4\r
            `,children:(0,F.jsxs)(`div`,{className:`flex items-end justify-between gap-3`,children:[(0,F.jsxs)(`div`,{className:`min-w-0`,children:[s>0&&(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsxs)(`span`,{className:`\r
                        text-xs\r
                        font-medium\r
                        text-gray-400\r
                        line-through\r
                      `,children:[`$`,Yn(c)]}),(0,F.jsx)(`span`,{className:`\r
                        rounded-full\r
                        bg-green-50\r
                        px-1.5 py-0.5\r
                        text-[8px]\r
                        font-extrabold\r
                        uppercase\r
                        tracking-wide\r
                        text-green-600\r
                      `,children:`Ahorrás`})]}),(0,F.jsxs)(`div`,{className:`mt-0.5`,children:[(0,F.jsx)(`span`,{className:`\r
                      text-[10px]\r
                      font-medium\r
                      uppercase\r
                      tracking-[0.10em]\r
                      text-gray-400\r
                    `,children:`Precio`}),(0,F.jsxs)(`span`,{className:`\r
                      mt-0.5\r
                      block\r
                      text-xl\r
                      font-extrabold\r
                      tracking-tight\r
                      text-secondary\r
                    `,children:[`$`,Yn(e.price)]})]})]}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>{t(e),a(!0),o.current!==null&&window.clearTimeout(o.current),o.current=window.setTimeout(()=>{a(!1),o.current=null},1200)},"aria-label":i?`${e.name} agregado al carrito`:`Agregar ${e.name} al carrito`,className:`
                  group/cart
                  flex h-11 w-11
                  shrink-0
                  items-center justify-center
                  rounded-xl
                  text-white
                  shadow-md
                  transition-all duration-300

                  hover:-translate-y-0.5
                  active:scale-95

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary/30
                  focus-visible:ring-offset-2

                  ${i?`
                        bg-success
                        shadow-[0_8px_20px_rgba(22,163,74,0.20)]
                      `:`
                        bg-secondary
                        shadow-[0_8px_20px_rgba(15,52,96,0.14)]
                        hover:bg-primary
                        hover:shadow-[0_10px_24px_rgba(233,69,96,0.22)]
                      `}
                `,children:(0,F.jsx)(`i`,{className:`fa-solid ${i?`fa-check`:`fa-cart-plus`} text-sm transition-transform duration-300 ${i?`scale-110`:`group-hover/cart:scale-105`}`,"aria-hidden":`true`})})]})})]}),(0,F.jsx)(`span`,{className:`sr-only`,"aria-live":`polite`,children:i?`${e.name} agregado al carrito.`:``})]})})},er=({productItems:e})=>{if(!e.length)return(0,F.jsx)(`div`,{className:`\r
          flex min-h-[280px]\r
          items-center justify-center\r
          rounded-2xl\r
          border border-dashed border-black/10\r
          bg-white/70\r
          px-6\r
          text-center\r
        `,role:`status`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`div`,{className:`\r
              mx-auto mb-4\r
              flex h-14 w-14\r
              items-center justify-center\r
              rounded-2xl\r
              bg-primary/10\r
              text-primary\r
            `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-bolt text-xl`})}),(0,F.jsx)(`h3`,{className:`font-bold text-secondary`,children:`No hay ofertas disponibles`}),(0,F.jsx)(`p`,{className:`mt-1 text-sm text-gray-500`,children:`Volvé a consultar más tarde para descubrir nuevas promociones.`})]})});let t={dots:!1,infinite:e.length>4,speed:450,slidesToShow:4,slidesToScroll:1,arrows:e.length>1,autoplay:e.length>4,autoplaySpeed:4500,pauseOnHover:!0,pauseOnFocus:!0,swipeToSlide:!0,adaptiveHeight:!1,nextArrow:(0,F.jsx)(Zn,{}),prevArrow:(0,F.jsx)(Qn,{}),responsive:[{breakpoint:1280,settings:{slidesToShow:3}},{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:520,settings:{slidesToShow:1,arrows:!1}}]};return(0,F.jsx)(`div`,{className:`\r
        relative\r
        px-2\r
        sm:px-4\r
      `,children:(0,F.jsx)(Un.default,{...t,children:e.map(e=>(0,F.jsx)($n,{productItem:e},e.id))})})},tr=({productItems:e})=>(0,F.jsxs)(`section`,{"aria-labelledby":`flash-deals-title`,className:`\r
        relative\r
        w-full\r
        overflow-hidden\r
        bg-background\r
        py-10\r
        sm:py-12\r
        lg:py-14\r
      `,children:[(0,F.jsx)(`div`,{className:`\r
          pointer-events-none\r
          absolute\r
          -right-32\r
          top-0\r
          h-72 w-72\r
          rounded-full\r
          bg-primary/[0.045]\r
          blur-3xl\r
        `,"aria-hidden":`true`}),(0,F.jsx)(`div`,{className:`\r
          pointer-events-none\r
          absolute\r
          -left-40\r
          bottom-0\r
          h-64 w-64\r
          rounded-full\r
          bg-secondary/[0.035]\r
          blur-3xl\r
        `,"aria-hidden":`true`}),(0,F.jsxs)(`div`,{className:`relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8`,children:[(0,F.jsxs)(`header`,{className:`\r
            mb-6\r
            flex flex-col gap-5\r
\r
            sm:mb-8\r
            sm:flex-row\r
            sm:items-end\r
            sm:justify-between\r
          `,children:[(0,F.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[(0,F.jsxs)(`div`,{className:`\r
                relative\r
                flex h-12 w-12\r
                shrink-0\r
                items-center justify-center\r
                rounded-2xl\r
                bg-primary\r
                text-white\r
                shadow-[0_10px_24px_rgba(233,69,96,0.22)]\r
              `,"aria-hidden":`true`,children:[(0,F.jsx)(`span`,{className:`\r
                  absolute inset-1\r
                  rounded-xl\r
                  border border-white/10\r
                `}),(0,F.jsx)(`i`,{className:`fa-solid fa-bolt relative z-10 text-base`})]}),(0,F.jsxs)(`div`,{className:`min-w-0`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`p`,{className:`text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary`,children:`Solo por tiempo limitado`}),(0,F.jsx)(`span`,{className:`\r
                    hidden h-1 w-1\r
                    rounded-full\r
                    bg-primary/40\r
                    sm:block\r
                  `,"aria-hidden":`true`}),(0,F.jsx)(`span`,{className:`hidden text-[10px] font-semibold text-gray-400 sm:block`,children:`Ofertas especiales`})]}),(0,F.jsx)(`h2`,{id:`flash-deals-title`,className:`\r
                  mt-1\r
                  text-xl\r
                  font-extrabold\r
                  tracking-tight\r
                  text-secondary\r
\r
                  sm:text-2xl\r
                  lg:text-[1.7rem]\r
                `,children:`Ofertas relámpago`})]})]}),(0,F.jsxs)(`div`,{className:`\r
              inline-flex\r
              w-fit\r
              items-center\r
              gap-2\r
              rounded-full\r
              border border-primary/10\r
              bg-white\r
              px-3.5 py-2\r
              text-xs\r
              font-bold\r
              text-primary\r
              shadow-[0_5px_18px_rgba(3,0,71,0.05)]\r
            `,children:[(0,F.jsxs)(`span`,{className:`\r
                relative\r
                flex h-2 w-2\r
              `,"aria-hidden":`true`,children:[(0,F.jsx)(`span`,{className:`\r
                  absolute\r
                  inline-flex\r
                  h-full w-full\r
                  animate-ping\r
                  rounded-full\r
                  bg-primary\r
                  opacity-50\r
\r
                  motion-reduce:animate-none\r
                `}),(0,F.jsx)(`span`,{className:`\r
                  relative\r
                  h-2 w-2\r
                  rounded-full\r
                  bg-primary\r
                `})]}),(0,F.jsx)(`span`,{children:`Ofertas activas`})]})]}),(0,F.jsx)(`div`,{className:`\r
            rounded-[1.5rem]\r
            border border-black/[0.045]\r
            bg-white/55\r
            py-1\r
          `,children:(0,F.jsx)(er,{productItems:e})})]})]}),nr=({onClick:e})=>(0,F.jsx)(`button`,{type:`button`,onClick:e,"aria-label":`Siguiente categoría`,className:`\r
      absolute right-0 top-1/2 z-20\r
      flex h-10 w-10\r
      -translate-y-1/2 translate-x-1/2\r
      items-center justify-center\r
      rounded-full\r
      border border-black/10\r
      bg-white\r
      text-secondary\r
      shadow-lg\r
      transition-all duration-300\r
      hover:border-primary\r
      hover:bg-primary\r
      hover:text-white\r
      hover:shadow-primary/20\r
      active:scale-95\r
      focus:outline-none\r
      focus-visible:ring-2\r
      focus-visible:ring-primary/30\r
      focus-visible:ring-offset-2\r
      sm:h-11 sm:w-11\r
    `,children:(0,F.jsx)(`i`,{className:`fa-solid fa-chevron-right text-xs`,"aria-hidden":`true`})}),rr=({onClick:e})=>(0,F.jsx)(`button`,{type:`button`,onClick:e,"aria-label":`Categoría anterior`,className:`\r
      absolute left-0 top-1/2 z-20\r
      flex h-10 w-10\r
      -translate-x-1/2\r
      -translate-y-1/2\r
      items-center justify-center\r
      rounded-full\r
      border border-black/10\r
      bg-white\r
      text-secondary\r
      shadow-lg\r
      transition-all duration-300\r
      hover:border-primary\r
      hover:bg-primary\r
      hover:text-white\r
      hover:shadow-primary/20\r
      active:scale-95\r
      focus:outline-none\r
      focus-visible:ring-2\r
      focus-visible:ring-primary/30\r
      focus-visible:ring-offset-2\r
      sm:h-11 sm:w-11\r
    `,children:(0,F.jsx)(`i`,{className:`fa-solid fa-chevron-left text-xs`,"aria-hidden":`true`})}),ir=({item:e})=>(0,F.jsxs)(`article`,{className:`\r
        group mx-2 flex h-full min-h-[380px] flex-col\r
        overflow-hidden\r
        rounded-2xl\r
        border border-black/[0.06]\r
        bg-white\r
        shadow-[0_5px_25px_rgba(3,0,71,0.05)]\r
        transition-all duration-300\r
        hover:-translate-y-1\r
        hover:border-primary/15\r
        hover:shadow-[0_15px_35px_rgba(3,0,71,0.10)]\r
      `,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between gap-2 p-4 pb-0`,children:[(0,F.jsx)(`span`,{className:`\r
            inline-flex\r
            max-w-[55%]\r
            truncate\r
            rounded-full\r
            bg-secondary\r
            px-3 py-1.5\r
            text-[10px] font-bold uppercase tracking-wider\r
            text-white\r
          `,children:e.para}),(0,F.jsx)(`span`,{className:`\r
            shrink-0\r
            rounded-full\r
            border border-primary/10\r
            bg-primary/5\r
            px-3 py-1.5\r
            text-[10px] font-bold\r
            text-primary\r
          `,children:e.desc})]}),(0,F.jsxs)(`div`,{className:`\r
          relative mx-4 mt-3\r
          flex h-[230px]\r
          items-center justify-center\r
          overflow-hidden\r
          rounded-2xl\r
          bg-gradient-to-b from-gray-50 to-white\r
        `,children:[(0,F.jsx)(`img`,{src:e.cover,alt:`Imagen de ${e.para}`,loading:`lazy`,className:`\r
            h-full w-full\r
            object-contain\r
            p-5\r
            mix-blend-multiply\r
            transition-transform duration-500\r
            group-hover:scale-105\r
          `}),(0,F.jsx)(`div`,{className:`\r
            pointer-events-none\r
            absolute right-0 top-0\r
            h-24 w-24\r
            rounded-full\r
            bg-primary/5\r
            blur-2xl\r
          `,"aria-hidden":`true`})]}),(0,F.jsxs)(`div`,{className:`mt-auto p-4`,children:[(0,F.jsxs)(`div`,{className:`mb-4`,children:[(0,F.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-[0.14em] text-primary`,children:`Producto destacado`}),(0,F.jsx)(`h3`,{className:`mt-1 text-sm font-semibold text-secondary`,children:e.para})]}),(0,F.jsxs)(`div`,{className:`\r
            flex items-end justify-between gap-3\r
            border-t border-black/[0.06]\r
            pt-4\r
          `,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`block text-[10px] uppercase tracking-wider text-gray-400`,children:`Desde`}),(0,F.jsxs)(`span`,{className:`mt-0.5 block text-lg font-extrabold text-secondary`,children:[`$`,e.price.toLocaleString(`es-AR`)]})]}),(0,F.jsxs)(`span`,{className:`\r
              inline-flex items-center gap-1.5\r
              rounded-xl\r
              bg-primary/10\r
              px-3 py-2\r
              text-xs font-semibold\r
              text-primary\r
            `,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-arrow-trend-up text-[10px]`,"aria-hidden":`true`}),`Destacado`]})]})]})]}),ar=({topItems:e})=>{if(!e.length)return(0,F.jsx)(`div`,{className:`\r
          flex min-h-[250px]\r
          items-center justify-center\r
          rounded-2xl\r
          border border-dashed border-black/10\r
          bg-white/60\r
          px-6\r
          text-center\r
        `,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`div`,{className:`\r
              mx-auto mb-4\r
              flex h-14 w-14\r
              items-center justify-center\r
              rounded-2xl\r
              bg-primary/10\r
              text-primary\r
            `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-border-all text-xl`})}),(0,F.jsx)(`h3`,{className:`font-bold text-secondary`,children:`No hay categorías disponibles`}),(0,F.jsx)(`p`,{className:`mt-1 text-sm text-gray-500`,children:`Volvé a intentarlo más tarde.`})]})});let t={dots:!1,infinite:e.length>3,speed:500,slidesToShow:3,slidesToScroll:1,autoplay:e.length>3,autoplaySpeed:5e3,pauseOnHover:!0,pauseOnFocus:!0,swipeToSlide:!0,arrows:e.length>1,nextArrow:(0,F.jsx)(nr,{}),prevArrow:(0,F.jsx)(rr,{}),responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:640,settings:{slidesToShow:1,arrows:!1}}]};return(0,F.jsx)(`div`,{className:`relative px-2 sm:px-4`,children:(0,F.jsx)(Un.default,{...t,children:e.map(e=>(0,F.jsx)(ir,{item:e},e.id))})})},or=({topItems:e})=>(0,F.jsxs)(`section`,{"aria-labelledby":`top-categories-title`,className:`\r
        relative\r
        w-full\r
        overflow-hidden\r
        bg-white\r
        py-10\r
        sm:py-12\r
        lg:py-14\r
      `,children:[(0,F.jsx)(`div`,{className:`\r
          pointer-events-none\r
          absolute\r
          -left-32\r
          top-0\r
          h-72 w-72\r
          rounded-full\r
          bg-secondary/[0.035]\r
          blur-3xl\r
        `,"aria-hidden":`true`}),(0,F.jsx)(`div`,{className:`\r
          pointer-events-none\r
          absolute\r
          -right-24\r
          bottom-0\r
          h-64 w-64\r
          rounded-full\r
          bg-primary/[0.035]\r
          blur-3xl\r
        `,"aria-hidden":`true`}),(0,F.jsxs)(`div`,{className:`relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8`,children:[(0,F.jsxs)(`header`,{className:`\r
            mb-6\r
            flex items-end\r
            justify-between\r
            gap-4\r
\r
            sm:mb-8\r
          `,children:[(0,F.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[(0,F.jsx)(`div`,{className:`\r
                flex h-12 w-12\r
                shrink-0\r
                items-center justify-center\r
                rounded-2xl\r
                border border-secondary/10\r
                bg-secondary/[0.06]\r
                text-secondary\r
                shadow-[0_6px_18px_rgba(15,52,96,0.06)]\r
                transition-all duration-300\r
                hover:border-primary/15\r
                hover:bg-primary/[0.07]\r
                hover:text-primary\r
              `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-border-all text-base`})}),(0,F.jsxs)(`div`,{className:`min-w-0`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`p`,{className:`text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary`,children:`Explorá la tienda`}),(0,F.jsx)(`span`,{className:`\r
                    hidden h-1 w-1\r
                    rounded-full\r
                    bg-primary/40\r
                    sm:block\r
                  `,"aria-hidden":`true`}),(0,F.jsx)(`span`,{className:`hidden text-[10px] font-semibold text-gray-400 sm:block`,children:`Descubrí tus favoritos`})]}),(0,F.jsx)(`h2`,{id:`top-categories-title`,className:`\r
                  mt-1\r
                  truncate\r
                  text-xl\r
                  font-extrabold\r
                  tracking-tight\r
                  text-secondary\r
\r
                  sm:text-2xl\r
                  lg:text-[1.7rem]\r
                `,children:`Categorías destacadas`})]})]}),(0,F.jsxs)(P,{to:`/shop`,className:`\r
              group\r
              flex shrink-0\r
              items-center gap-2\r
              rounded-xl\r
              border border-black/[0.06]\r
              bg-white\r
              px-3 py-2\r
              text-xs\r
              font-bold\r
              text-secondary\r
              shadow-[0_4px_14px_rgba(3,0,71,0.04)]\r
              transition-all duration-300\r
\r
              hover:-translate-y-0.5\r
              hover:border-primary/15\r
              hover:bg-primary/[0.05]\r
              hover:text-primary\r
              hover:shadow-[0_8px_20px_rgba(3,0,71,0.07)]\r
\r
              focus:outline-none\r
              focus-visible:ring-2\r
              focus-visible:ring-primary/30\r
              focus-visible:ring-offset-2\r
            `,children:[(0,F.jsx)(`span`,{className:`hidden sm:inline`,children:`Ver todas`}),(0,F.jsx)(`span`,{className:`sm:hidden`,children:`Ver más`}),(0,F.jsx)(`span`,{className:`\r
                flex h-6 w-6\r
                items-center justify-center\r
                rounded-lg\r
                bg-background\r
                transition-all duration-300\r
                group-hover:bg-primary\r
                group-hover:text-white\r
              `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`\r
                  fa-solid fa-arrow-right\r
                  text-[9px]\r
                  transition-transform duration-300\r
                  group-hover:translate-x-0.5\r
                `})})]})]}),(0,F.jsx)(`div`,{className:`\r
            rounded-[1.5rem]\r
            border border-black/[0.045]\r
            bg-background/55\r
            py-1\r
          `,children:(0,F.jsx)(ar,{topItems:e})})]})]}),sr=e=>e.toLocaleString(`es-AR`,{minimumFractionDigits:0,maximumFractionDigits:0}),cr=({arrivalsItems:e})=>{let t=I(e=>e.addToCart),[n,r]=(0,y.useState)(null),i=(0,y.useRef)(null);(0,y.useEffect)(()=>()=>{i.current!==null&&window.clearTimeout(i.current)},[]);let a=e=>{t(e),r(e.id),i.current!==null&&window.clearTimeout(i.current),i.current=window.setTimeout(()=>{r(null),i.current=null},1200)};return e.length?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`div`,{className:`\r
          grid\r
          grid-cols-2\r
          gap-3\r
          sm:gap-4\r
          md:grid-cols-3\r
          lg:grid-cols-4\r
          xl:grid-cols-6\r
        `,children:e.map(e=>{let t=n===e.id;return(0,F.jsxs)(`article`,{className:`\r
                group relative\r
                flex min-w-0\r
                flex-col\r
                overflow-hidden\r
                rounded-[1.15rem]\r
                border border-black/[0.055]\r
                bg-white\r
                shadow-[0_4px_18px_rgba(3,0,71,0.04)]\r
                transition-all duration-300\r
\r
                hover:-translate-y-1\r
                hover:border-primary/15\r
                hover:shadow-[0_14px_30px_rgba(3,0,71,0.09)]\r
              `,children:[(0,F.jsxs)(`span`,{className:`\r
                  absolute left-3 top-3 z-20\r
                  inline-flex\r
                  items-center gap-1.5\r
                  rounded-full\r
                  border border-primary/10\r
                  bg-primary/[0.08]\r
                  px-2.5 py-1\r
                  text-[8px]\r
                  font-extrabold\r
                  uppercase\r
                  tracking-[0.10em]\r
                  text-primary\r
                  backdrop-blur-sm\r
                `,children:[(0,F.jsx)(`span`,{className:`\r
                    h-1.5 w-1.5\r
                    rounded-full\r
                    bg-primary\r
                  `,"aria-hidden":`true`}),`Nuevo`]}),(0,F.jsxs)(`div`,{className:`\r
                  relative\r
                  flex h-[155px]\r
                  items-center justify-center\r
                  overflow-hidden\r
                  bg-gradient-to-b\r
                  from-slate-50\r
                  via-white\r
                  to-white\r
                  px-4\r
                  pt-8\r
\r
                  sm:h-[170px]\r
                  md:h-[175px]\r
                `,children:[(0,F.jsx)(`div`,{className:`\r
                    pointer-events-none\r
                    absolute\r
                    -right-10\r
                    -top-10\r
                    h-24 w-24\r
                    rounded-full\r
                    bg-primary/[0.05]\r
                    blur-2xl\r
                  `,"aria-hidden":`true`}),(0,F.jsx)(`img`,{src:e.cover,alt:`Imagen de ${e.name}`,loading:`lazy`,className:`\r
                    relative z-10\r
                    max-h-full\r
                    max-w-full\r
                    object-contain\r
                    transition-transform\r
                    duration-500\r
\r
                    group-hover:scale-[1.08]\r
\r
                    motion-reduce:transition-none\r
                    motion-reduce:group-hover:scale-100\r
                  `}),(0,F.jsx)(`div`,{className:`\r
                    pointer-events-none\r
                    absolute inset-x-0 bottom-0\r
                    h-14\r
                    bg-gradient-to-t\r
                    from-black/[0.025]\r
                    to-transparent\r
                  `,"aria-hidden":`true`})]}),(0,F.jsxs)(`div`,{className:`\r
                  flex flex-1\r
                  flex-col\r
                  p-3.5\r
\r
                  sm:p-4\r
                `,children:[(0,F.jsx)(`div`,{className:`flex-1`,children:(0,F.jsx)(`h3`,{className:`\r
                      min-h-[40px]\r
                      line-clamp-2\r
                      text-[13px]\r
                      font-bold\r
                      leading-5\r
                      text-secondary\r
                      transition-colors duration-200\r
\r
                      group-hover:text-primary\r
\r
                      sm:text-sm\r
                    `,title:e.name,children:e.name})}),(0,F.jsxs)(`div`,{className:`\r
                    mt-4\r
                    flex items-end justify-between gap-2\r
                    border-t border-black/[0.06]\r
                    pt-3.5\r
                  `,children:[(0,F.jsxs)(`div`,{className:`min-w-0`,children:[(0,F.jsx)(`span`,{className:`\r
                        block\r
                        text-[8px]\r
                        font-bold\r
                        uppercase\r
                        tracking-[0.12em]\r
                        text-gray-400\r
                      `,children:`Precio`}),(0,F.jsxs)(`p`,{className:`\r
                        mt-0.5\r
                        truncate\r
                        text-base\r
                        font-extrabold\r
                        tracking-tight\r
                        text-secondary\r
\r
                        sm:text-lg\r
                      `,children:[`$`,sr(e.price)]})]}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>a(e),"aria-label":t?`${e.name} agregado al carrito`:`Agregar ${e.name} al carrito`,className:`
                      group/cart
                      flex h-10 w-10
                      shrink-0
                      items-center justify-center
                      rounded-xl
                      border
                      transition-all duration-300

                      hover:-translate-y-0.5
                      active:scale-95

                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-primary/40
                      focus-visible:ring-offset-2

                      ${t?`
                            border-success
                            bg-success
                            text-white
                            shadow-[0_8px_18px_rgba(22,163,74,0.18)]
                          `:`
                            border-black/[0.08]
                            bg-white
                            text-primary
                            shadow-[0_5px_14px_rgba(3,0,71,0.05)]

                            hover:border-primary
                            hover:bg-primary
                            hover:text-white
                            hover:shadow-[0_9px_20px_rgba(233,69,96,0.18)]
                          `}
                    `,children:(0,F.jsx)(`i`,{className:`fa-solid ${t?`fa-check`:`fa-plus`} text-xs transition-transform duration-300 ${t?`scale-110`:`group-hover/cart:scale-105`}`,"aria-hidden":`true`})})]})]})]},e.id)})}),(0,F.jsx)(`span`,{className:`sr-only`,"aria-live":`polite`,children:n?`Producto agregado al carrito.`:``})]}):(0,F.jsx)(`div`,{className:`\r
          flex min-h-[280px]\r
          items-center justify-center\r
          rounded-2xl\r
          border border-dashed border-black/10\r
          bg-white/70\r
          px-6\r
          text-center\r
        `,role:`status`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`div`,{className:`\r
              mx-auto mb-4\r
              flex h-14 w-14\r
              items-center justify-center\r
              rounded-2xl\r
              bg-primary/10\r
              text-primary\r
            `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-box-open text-xl`})}),(0,F.jsx)(`h3`,{className:`text-base font-semibold text-secondary`,children:`No hay productos disponibles`}),(0,F.jsx)(`p`,{className:`mt-1 text-sm text-gray-500`,children:`Volvé a intentarlo más tarde.`})]})})},lr=({arrivalsItems:e})=>(0,F.jsx)(`section`,{"aria-labelledby":`new-arrivals-title`,className:`w-full bg-background py-10 sm:py-12 lg:py-14`,children:(0,F.jsxs)(`div`,{className:`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8`,children:[(0,F.jsxs)(`header`,{className:`mb-6 flex items-end justify-between gap-4 sm:mb-8`,children:[(0,F.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[(0,F.jsx)(`div`,{className:`\r
                flex h-11 w-11 shrink-0\r
                items-center justify-center\r
                rounded-2xl\r
                bg-primary/10\r
                text-primary\r
                shadow-sm\r
              `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-star text-sm`})}),(0,F.jsxs)(`div`,{className:`min-w-0`,children:[(0,F.jsx)(`p`,{className:`mb-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary`,children:`Descubrí lo nuevo`}),(0,F.jsx)(`h2`,{id:`new-arrivals-title`,className:`\r
                  truncate\r
                  text-xl font-extrabold\r
                  tracking-tight\r
                  text-secondary\r
                  sm:text-2xl\r
                `,children:`Nuevos productos`})]})]}),(0,F.jsxs)(P,{to:`/shop`,className:`\r
              group flex shrink-0 items-center gap-2\r
              rounded-xl\r
              px-2 py-2\r
              text-sm font-semibold\r
              text-primary\r
              transition-all duration-200\r
              hover:bg-primary/10\r
              focus:outline-none\r
              focus-visible:ring-2\r
              focus-visible:ring-primary/30\r
              focus-visible:ring-offset-2\r
            `,children:[(0,F.jsx)(`span`,{className:`hidden sm:inline`,children:`Ver todos`}),(0,F.jsx)(`span`,{className:`sm:hidden`,children:`Ver más`}),(0,F.jsx)(`i`,{className:`\r
                fa-solid fa-arrow-right\r
                text-xs\r
                transition-transform duration-200\r
                group-hover:translate-x-1\r
              `,"aria-hidden":`true`})]})]}),(0,F.jsx)(cr,{arrivalsItems:e})]})}),ur=[{value:`all`,label:`Todos los productos`,icon:`fa-border-all`},...L],dr=({selectedCategory:e,setSelectedCategory:t})=>(0,F.jsxs)(`aside`,{className:`\r
        w-full\r
        rounded-2xl\r
        border border-black/[0.06]\r
        bg-white\r
        p-4\r
        shadow-[0_8px_30px_rgba(3,0,71,0.06)]\r
        md:sticky md:top-28\r
      `,"aria-label":`Filtrar productos por categoría`,children:[(0,F.jsxs)(`div`,{className:`mb-4 flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-[0.18em] text-primary`,children:`Explorar`}),(0,F.jsx)(`h2`,{className:`mt-1 text-lg font-extrabold tracking-tight text-secondary`,children:`Categorías`})]}),(0,F.jsx)(`span`,{className:`\r
            flex h-9 w-9\r
            items-center justify-center\r
            rounded-xl\r
            bg-primary/10\r
            text-primary\r
          `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-sliders text-sm`})})]}),(0,F.jsx)(`div`,{className:`space-y-1.5`,role:`group`,"aria-label":`Categorías disponibles`,children:ur.map(n=>{let r=n.value===`all`,i=r?e===null:e===n.value;return(0,F.jsxs)(`button`,{type:`button`,onClick:()=>t(r?null:n.value),"aria-pressed":i,className:`
                group
                flex w-full
                items-center gap-3
                rounded-xl
                px-3 py-3
                text-left
                transition-all duration-200
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary/40

                ${i?`
                      bg-primary
                      text-white
                      shadow-md
                      shadow-primary/20
                    `:`
                      text-gray-600
                      hover:bg-primary/[0.05]
                      hover:text-secondary
                    `}
              `,children:[(0,F.jsx)(`span`,{className:`
                  flex h-9 w-9
                  shrink-0
                  items-center justify-center
                  rounded-lg
                  transition-all duration-200

                  ${i?`bg-white/15 text-white`:`
                        bg-gray-50
                        text-gray-400
                        group-hover:bg-primary/10
                        group-hover:text-primary
                      `}
                `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid ${n.icon} text-sm`})}),(0,F.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-sm font-medium`,children:n.label}),(0,F.jsx)(`span`,{className:`
                  flex h-6 w-6
                  shrink-0
                  items-center justify-center
                  rounded-full
                  transition-all duration-200

                  ${i?`bg-white/15 text-white`:`
                        text-gray-300
                        opacity-0
                        group-hover:translate-x-0.5
                        group-hover:opacity-100
                      `}
                `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid ${i?`fa-check text-[9px]`:`fa-chevron-right text-[8px]`}`})})]},n.value)})}),(0,F.jsx)(`div`,{className:`mt-4 border-t border-black/[0.06] pt-4`,children:(0,F.jsxs)(`p`,{className:`flex items-center gap-2 text-[11px] text-gray-400`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-info text-[10px] text-primary`,"aria-hidden":`true`}),`Seleccioná una categoría para filtrar.`]})})]}),fr=e=>e.toLocaleString(`es-AR`,{minimumFractionDigits:0,maximumFractionDigits:0}),pr=(e,t)=>t<=0||t>=100?e:e/(1-t/100),mr=({shopItem:e})=>{let t=I(e=>e.addToCart),n=I(e=>e.toggleWishlist),r=I(t=>t.wishlist.some(t=>t.id===e.id)),[i,a]=(0,y.useState)(!1),o=(0,y.useRef)(null);(0,y.useEffect)(()=>()=>{o.current!==null&&window.clearTimeout(o.current)},[]);let s=Math.max(0,Math.min(99,e.discount??0)),c=pr(e.price,s);return(0,F.jsxs)(`article`,{className:`\r
        group relative\r
        flex h-full\r
        min-w-0\r
        flex-col\r
        overflow-hidden\r
        rounded-[1.25rem]\r
        border border-black/[0.055]\r
        bg-white\r
        shadow-[0_5px_24px_rgba(3,0,71,0.045)]\r
        transition-all duration-300\r
\r
        hover:-translate-y-1\r
        hover:border-primary/15\r
        hover:shadow-[0_18px_38px_rgba(3,0,71,0.10)]\r
      `,children:[(0,F.jsxs)(`div`,{className:`\r
          relative\r
          flex h-[220px]\r
          items-center justify-center\r
          overflow-hidden\r
          bg-gradient-to-b\r
          from-slate-50\r
          via-white\r
          to-white\r
          p-5\r
\r
          sm:h-[230px]\r
        `,children:[(0,F.jsx)(`div`,{className:`\r
            pointer-events-none\r
            absolute\r
            -right-12\r
            -top-12\r
            h-32 w-32\r
            rounded-full\r
            bg-primary/[0.05]\r
            blur-3xl\r
          `,"aria-hidden":`true`}),s>0&&(0,F.jsxs)(`span`,{className:`\r
              absolute left-3 top-3 z-20\r
              rounded-full\r
              bg-primary\r
              px-3 py-1.5\r
              text-[9px]\r
              font-extrabold\r
              uppercase\r
              tracking-[0.08em]\r
              text-white\r
              shadow-[0_7px_18px_rgba(233,69,96,0.22)]\r
            `,children:[`-`,s,`%`]}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>n(e),"aria-label":r?`Quitar ${e.name} de favoritos`:`Agregar ${e.name} a favoritos`,"aria-pressed":r,className:`
            absolute right-3 top-3 z-20
            flex h-10 w-10
            items-center justify-center
            rounded-full
            border
            bg-white/90
            shadow-[0_5px_16px_rgba(3,0,71,0.07)]
            backdrop-blur-md
            transition-all duration-300

            hover:scale-105
            hover:shadow-[0_8px_20px_rgba(3,0,71,0.12)]

            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary/30
            focus-visible:ring-offset-2

            ${r?`border-primary/10 bg-primary/5 text-primary`:`border-black/[0.05] text-gray-400 hover:border-primary/10 hover:text-primary`}
          `,children:(0,F.jsx)(`i`,{className:`${r?`fa-solid fa-heart`:`fa-regular fa-heart`} text-sm`,"aria-hidden":`true`})}),(0,F.jsx)(`img`,{src:e.cover,alt:`Imagen de ${e.name}`,loading:`lazy`,className:`\r
            relative z-10\r
            h-full w-full\r
            object-contain\r
            mix-blend-multiply\r
            transition-transform duration-500\r
\r
            group-hover:scale-[1.07]\r
\r
            motion-reduce:transition-none\r
            motion-reduce:group-hover:scale-100\r
          `}),(0,F.jsx)(`div`,{className:`\r
            pointer-events-none\r
            absolute inset-x-0 bottom-0\r
            h-16\r
            bg-gradient-to-t\r
            from-black/[0.025]\r
            to-transparent\r
          `,"aria-hidden":`true`})]}),(0,F.jsxs)(`div`,{className:`\r
          flex flex-1\r
          flex-col\r
          p-4\r
          sm:p-5\r
        `,children:[(0,F.jsxs)(`div`,{className:`flex-1`,children:[(0,F.jsxs)(`span`,{className:`\r
              inline-flex\r
              items-center\r
              gap-1.5\r
              rounded-full\r
              bg-secondary/[0.06]\r
              px-2.5 py-1\r
              text-[9px]\r
              font-extrabold\r
              uppercase\r
              tracking-[0.10em]\r
              text-secondary\r
            `,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-tag text-[8px] text-primary`,"aria-hidden":`true`}),e.category]}),(0,F.jsx)(`h3`,{className:`\r
              mt-2\r
              line-clamp-2\r
              min-h-[40px]\r
              text-sm\r
              font-bold\r
              leading-5\r
              text-secondary\r
              transition-colors duration-200\r
\r
              group-hover:text-primary\r
            `,title:e.name,children:e.name}),(0,F.jsxs)(`div`,{className:`mt-3 flex items-center gap-2`,"aria-label":`Calificación 4.8 de 5`,children:[(0,F.jsxs)(`div`,{className:`\r
                flex items-center gap-0.5\r
                text-[10px]\r
                text-amber-400\r
              `,"aria-hidden":`true`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-star`}),(0,F.jsx)(`i`,{className:`fa-solid fa-star`}),(0,F.jsx)(`i`,{className:`fa-solid fa-star`}),(0,F.jsx)(`i`,{className:`fa-solid fa-star`}),(0,F.jsx)(`i`,{className:`fa-solid fa-star text-gray-200`})]}),(0,F.jsx)(`span`,{className:`text-[10px] font-medium text-gray-400`,children:`4.8`})]})]}),(0,F.jsx)(`div`,{className:`\r
            mt-5\r
            border-t border-black/[0.06]\r
            pt-4\r
          `,children:(0,F.jsxs)(`div`,{className:`flex items-end justify-between gap-3`,children:[(0,F.jsxs)(`div`,{className:`min-w-0`,children:[s>0&&(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsxs)(`span`,{className:`\r
                      text-xs\r
                      font-medium\r
                      text-gray-400\r
                      line-through\r
                    `,children:[`$`,fr(c)]}),(0,F.jsx)(`span`,{className:`\r
                      rounded-full\r
                      bg-green-50\r
                      px-1.5 py-0.5\r
                      text-[8px]\r
                      font-extrabold\r
                      uppercase\r
                      tracking-wide\r
                      text-green-600\r
                    `,children:`Oferta`})]}),(0,F.jsxs)(`span`,{className:`\r
                  mt-0.5\r
                  block\r
                  text-xl\r
                  font-extrabold\r
                  tracking-tight\r
                  text-secondary\r
                `,children:[`$`,fr(e.price)]})]}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>{t(e),a(!0),o.current!==null&&window.clearTimeout(o.current),o.current=window.setTimeout(()=>{a(!1),o.current=null},1200)},"aria-label":i?`${e.name} agregado al carrito`:`Agregar ${e.name} al carrito`,className:`
                group/cart
                flex h-11 w-11
                shrink-0
                items-center justify-center
                rounded-xl
                text-white
                shadow-md
                transition-all duration-300

                hover:-translate-y-0.5
                active:scale-95

                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary/30
                focus-visible:ring-offset-2

                ${i?`
                      bg-success
                      shadow-[0_8px_20px_rgba(22,163,74,0.20)]
                    `:`
                      bg-secondary
                      shadow-[0_8px_20px_rgba(15,52,96,0.14)]
                      hover:bg-primary
                      hover:shadow-[0_10px_24px_rgba(233,69,96,0.22)]
                    `}
              `,children:(0,F.jsx)(`i`,{className:`fa-solid ${i?`fa-check`:`fa-cart-plus`} text-sm transition-transform duration-300 ${i?`scale-110`:`group-hover/cart:scale-105`}`,"aria-hidden":`true`})})]})})]}),(0,F.jsx)(`span`,{className:`sr-only`,"aria-live":`polite`,children:i?`${e.name} agregado al carrito.`:``})]})},hr=({shopItems:e})=>(0,F.jsx)(`div`,{className:`\r
        grid\r
        grid-cols-2\r
        gap-3\r
        sm:gap-5\r
        lg:grid-cols-3\r
        xl:grid-cols-3\r
      `,children:e.map(e=>(0,F.jsx)(mr,{shopItem:e},e.id))}),gr=e=>e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().trim(),_r=e=>!e||e===`all`?null:L.some(t=>t.value===e)?e:null,vr=({shopItems:e})=>{let[t,n]=Nt(),r=t.get(`search`)??``,i=_r(t.get(`category`)),[a,o]=(0,y.useState)(`default`),s=e=>{let r=new URLSearchParams(t);e?r.set(`category`,e):r.delete(`category`),n(r)},c=(0,y.useMemo)(()=>{let t=gr(r),n=[...e];if(t){let e=t.split(/\s+/).filter(Boolean);n=n.filter(t=>{let n=gr(t.name);return e.every(e=>n.includes(e))})}switch(i&&(n=n.filter(e=>e.category===i)),a){case`price-asc`:n.sort((e,t)=>e.price-t.price);break;case`price-desc`:n.sort((e,t)=>t.price-e.price);break;case`name`:n.sort((e,t)=>gr(e.name).localeCompare(gr(t.name),`es`))}return n},[e,r,i,a]),l=()=>{let e=new URLSearchParams(t);e.delete(`search`),n(e)},u=()=>{n({})},d=!!r||!!i,f=[!!r,!!i].filter(Boolean).length;return(0,F.jsxs)(`section`,{"aria-labelledby":`shop-title`,className:`\r
        relative\r
        w-full\r
        overflow-hidden\r
        bg-background\r
        py-10\r
        sm:py-12\r
        lg:py-14\r
      `,children:[(0,F.jsx)(`div`,{className:`\r
          pointer-events-none\r
          absolute\r
          -left-40\r
          top-20\r
          h-80 w-80\r
          rounded-full\r
          bg-secondary/[0.025]\r
          blur-3xl\r
        `,"aria-hidden":`true`}),(0,F.jsx)(`div`,{className:`\r
          pointer-events-none\r
          absolute\r
          -right-32\r
          bottom-10\r
          h-72 w-72\r
          rounded-full\r
          bg-primary/[0.035]\r
          blur-3xl\r
        `,"aria-hidden":`true`}),(0,F.jsx)(`div`,{className:`relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8`,children:(0,F.jsxs)(`div`,{className:`\r
            flex flex-col gap-6\r
            lg:flex-row lg:items-start\r
          `,children:[(0,F.jsx)(`div`,{className:`w-full lg:w-[250px] lg:shrink-0`,children:(0,F.jsx)(dr,{selectedCategory:i,setSelectedCategory:s})}),(0,F.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,F.jsxs)(`header`,{className:`\r
                mb-6\r
                rounded-[1.5rem]\r
                border border-black/[0.045]\r
                bg-white\r
                p-5\r
                shadow-[0_5px_20px_rgba(3,0,71,0.035)]\r
                sm:p-6\r
              `,children:[(0,F.jsxs)(`div`,{className:`\r
                  flex flex-col gap-5\r
                  xl:flex-row\r
                  xl:items-end\r
                  xl:justify-between\r
                `,children:[(0,F.jsxs)(`div`,{className:`min-w-0`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`p`,{className:`text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary`,children:`Nuestra colección`}),(0,F.jsx)(`span`,{className:`\r
                        h-1 w-1\r
                        rounded-full\r
                        bg-primary/40\r
                      `,"aria-hidden":`true`}),(0,F.jsx)(`span`,{className:`text-[10px] font-semibold text-gray-400`,children:`Explorá y elegí`})]}),(0,F.jsxs)(`div`,{className:`mt-1 flex flex-wrap items-end gap-3`,children:[(0,F.jsx)(`h1`,{id:`shop-title`,className:`\r
                        text-2xl\r
                        font-extrabold\r
                        tracking-tight\r
                        text-secondary\r
                        sm:text-3xl\r
                      `,children:`Tienda`}),(0,F.jsxs)(`span`,{className:`\r
                        mb-0.5\r
                        inline-flex\r
                        items-center\r
                        rounded-full\r
                        bg-background\r
                        px-2.5 py-1\r
                        text-[10px]\r
                        font-bold\r
                        text-secondary\r
                      `,children:[c.length,` `,c.length===1?`producto`:`productos`]})]}),r?(0,F.jsxs)(`p`,{className:`mt-2 text-sm text-gray-500`,children:[`Resultados para`,` `,(0,F.jsxs)(`strong`,{className:`font-bold text-secondary`,children:[`"`,r,`"`]})]}):i?(0,F.jsxs)(`p`,{className:`mt-2 text-sm text-gray-500`,children:[`Mostrando productos de la categoría`,` `,(0,F.jsx)(`strong`,{className:`font-bold text-secondary`,children:Gt(i)})]}):(0,F.jsx)(`p`,{className:`mt-2 text-sm text-gray-500`,children:`Encontrá productos seleccionados para tu día a día.`})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`label`,{htmlFor:`sort-products`,className:`\r
                      hidden\r
                      text-xs\r
                      font-bold\r
                      uppercase\r
                      tracking-wider\r
                      text-gray-400\r
                      sm:block\r
                    `,children:`Ordenar`}),(0,F.jsxs)(`div`,{className:`\r
                      relative\r
                      flex h-11\r
                      min-w-[190px]\r
                      items-center\r
                      rounded-xl\r
                      border border-black/[0.07]\r
                      bg-background\r
                      transition-colors duration-200\r
                      focus-within:border-primary/30\r
                      focus-within:bg-white\r
                    `,children:[(0,F.jsx)(`i`,{className:`\r
                        fa-solid fa-arrow-down-wide-short\r
                        ml-3\r
                        text-[10px]\r
                        text-primary\r
                      `,"aria-hidden":`true`}),(0,F.jsxs)(`select`,{id:`sort-products`,value:a,onChange:e=>o(e.target.value),className:`\r
                        h-full\r
                        flex-1\r
                        cursor-pointer\r
                        border-0\r
                        bg-transparent\r
                        px-2\r
                        pr-3\r
                        text-xs\r
                        font-bold\r
                        text-secondary\r
                        outline-none\r
                      `,children:[(0,F.jsx)(`option`,{value:`default`,children:`Más recientes`}),(0,F.jsx)(`option`,{value:`price-asc`,children:`Precio: menor a mayor`}),(0,F.jsx)(`option`,{value:`price-desc`,children:`Precio: mayor a menor`}),(0,F.jsx)(`option`,{value:`name`,children:`Nombre: A-Z`})]})]})]})]}),d&&(0,F.jsxs)(`div`,{className:`\r
                    mt-5\r
                    flex\r
                    flex-wrap\r
                    items-center\r
                    gap-2\r
                    border-t\r
                    border-black/[0.06]\r
                    pt-4\r
                  `,children:[(0,F.jsxs)(`div`,{className:`\r
                      mr-1\r
                      flex items-center gap-2\r
                      text-[10px]\r
                      font-extrabold\r
                      uppercase\r
                      tracking-wider\r
                      text-gray-400\r
                    `,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-filter text-[9px] text-primary`,"aria-hidden":`true`}),`Filtros`]}),r&&(0,F.jsxs)(`span`,{className:`\r
                        inline-flex\r
                        items-center\r
                        gap-2\r
                        rounded-full\r
                        border border-primary/10\r
                        bg-primary/[0.06]\r
                        px-3 py-1.5\r
                        text-[10px]\r
                        font-bold\r
                        text-primary\r
                      `,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-magnifying-glass text-[8px]`,"aria-hidden":`true`}),`"`,r,`"`,(0,F.jsx)(`button`,{type:`button`,onClick:l,"aria-label":`Quitar búsqueda`,className:`\r
                          flex h-4 w-4\r
                          items-center justify-center\r
                          rounded-full\r
                          text-primary/60\r
                          transition-colors\r
                          hover:bg-primary/10\r
                          hover:text-primary\r
                          focus:outline-none\r
                          focus-visible:ring-2\r
                          focus-visible:ring-primary/30\r
                        `,children:(0,F.jsx)(`i`,{className:`fa-solid fa-xmark text-[8px]`,"aria-hidden":`true`})})]}),i&&(0,F.jsxs)(`span`,{className:`\r
                        inline-flex\r
                        items-center\r
                        gap-2\r
                        rounded-full\r
                        border border-secondary/10\r
                        bg-secondary/[0.05]\r
                        px-3 py-1.5\r
                        text-[10px]\r
                        font-bold\r
                        text-secondary\r
                      `,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-tag text-[8px] text-primary`,"aria-hidden":`true`}),Gt(i),(0,F.jsx)(`button`,{type:`button`,onClick:()=>s(null),"aria-label":`Quitar categoría`,className:`\r
                          flex h-4 w-4\r
                          items-center justify-center\r
                          rounded-full\r
                          text-secondary/50\r
                          transition-colors\r
                          hover:bg-secondary/10\r
                          hover:text-secondary\r
                          focus:outline-none\r
                          focus-visible:ring-2\r
                          focus-visible:ring-primary/30\r
                        `,children:(0,F.jsx)(`i`,{className:`fa-solid fa-xmark text-[8px]`,"aria-hidden":`true`})})]}),(0,F.jsxs)(`button`,{type:`button`,onClick:u,className:`\r
                      ml-auto\r
                      inline-flex\r
                      items-center\r
                      gap-1.5\r
                      rounded-lg\r
                      px-2 py-1.5\r
                      text-[10px]\r
                      font-bold\r
                      text-gray-400\r
                      transition-all duration-200\r
                      hover:bg-primary/[0.05]\r
                      hover:text-primary\r
                      focus:outline-none\r
                      focus-visible:ring-2\r
                      focus-visible:ring-primary/30\r
                    `,children:[`Limpiar`,(0,F.jsx)(`i`,{className:`fa-solid fa-rotate-left text-[8px]`,"aria-hidden":`true`})]}),(0,F.jsxs)(`span`,{className:`\r
                      hidden\r
                      rounded-full\r
                      bg-gray-100\r
                      px-2\r
                      py-1\r
                      text-[9px]\r
                      font-bold\r
                      text-gray-400\r
                      sm:inline-flex\r
                    `,children:[f,` `,f===1?`filtro`:`filtros`]})]})]}),c.length>0?(0,F.jsx)(hr,{shopItems:c}):(0,F.jsxs)(`div`,{className:`\r
                  flex min-h-[390px]\r
                  flex-col\r
                  items-center\r
                  justify-center\r
                  rounded-[1.5rem]\r
                  border border-dashed border-black/10\r
                  bg-white/70\r
                  px-6\r
                  py-12\r
                  text-center\r
                `,role:`status`,children:[(0,F.jsxs)(`div`,{className:`\r
                    relative\r
                    mb-5\r
                    flex h-16 w-16\r
                    items-center justify-center\r
                    rounded-2xl\r
                    bg-primary/[0.08]\r
                    text-primary\r
                  `,"aria-hidden":`true`,children:[(0,F.jsx)(`span`,{className:`\r
                      absolute\r
                      inset-2\r
                      rounded-xl\r
                      border\r
                      border-primary/10\r
                    `}),(0,F.jsx)(`i`,{className:`fa-solid fa-magnifying-glass relative z-10 text-xl`})]}),(0,F.jsx)(`h2`,{className:`text-lg font-extrabold text-secondary`,children:`No encontramos productos`}),(0,F.jsx)(`p`,{className:`mt-2 max-w-sm text-sm leading-6 text-gray-500`,children:`No encontramos productos que coincidan con los filtros actuales. Probá con otra búsqueda o explorá toda la colección.`}),(0,F.jsxs)(`button`,{type:`button`,onClick:u,className:`\r
                    mt-6\r
                    inline-flex\r
                    items-center\r
                    gap-2\r
                    rounded-xl\r
                    bg-primary\r
                    px-5 py-3\r
                    text-sm\r
                    font-bold\r
                    text-white\r
                    shadow-[0_10px_24px_rgba(233,69,96,0.20)]\r
                    transition-all duration-200\r
\r
                    hover:-translate-y-0.5\r
                    hover:bg-primary-dark\r
                    hover:shadow-[0_14px_28px_rgba(233,69,96,0.26)]\r
\r
                    active:scale-[0.98]\r
\r
                    focus:outline-none\r
                    focus-visible:ring-2\r
                    focus-visible:ring-primary/40\r
                    focus-visible:ring-offset-2\r
                  `,children:[`Ver todos los productos`,(0,F.jsx)(`i`,{className:`fa-solid fa-arrow-right text-[10px]`,"aria-hidden":`true`})]})]})]})]})})]})},yr=({image:e,alt:t,eyebrow:n,title:r,description:i,href:a,size:o})=>{let s=o===`small`;return(0,F.jsxs)(`article`,{className:`
        group relative
        h-[280px] overflow-hidden
        rounded-3xl
        shadow-[0_8px_30px_rgba(3,0,71,0.08)]
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_15px_40px_rgba(3,0,71,0.14)]
        md:h-[320px]
        ${s?`md:w-[35%]`:`md:w-[65%]`}
      `,children:[(0,F.jsx)(`img`,{src:e,alt:t,loading:`lazy`,className:`\r
          absolute inset-0\r
          h-full w-full\r
          object-cover\r
          transition-transform duration-700 ease-out\r
          group-hover:scale-105\r
        `}),(0,F.jsx)(`div`,{className:`
          absolute inset-0
          ${s?`bg-gradient-to-t from-black/80 via-black/35 to-black/5`:`bg-gradient-to-r from-black/80 via-black/45 to-black/10`}
        `}),(0,F.jsxs)(`div`,{className:`
          relative z-10
          flex h-full flex-col justify-end
          p-6
          sm:p-8
          ${s?`max-w-sm`:`max-w-xl`}
        `,children:[(0,F.jsx)(`span`,{className:`\r
            mb-2 w-fit\r
            rounded-full\r
            border border-white/20\r
            bg-white/10\r
            px-3 py-1\r
            text-[10px] font-bold uppercase tracking-[0.16em]\r
            text-white\r
            backdrop-blur-md\r
          `,children:n}),(0,F.jsx)(`h2`,{className:`
            font-extrabold
            leading-tight
            tracking-tight
            text-white
            ${s?`text-xl sm:text-2xl`:`text-2xl sm:text-3xl`}
          `,children:r}),(0,F.jsx)(`p`,{className:`
            mt-2
            max-w-lg
            text-sm leading-6
            text-white/75
            ${s?`line-clamp-2`:`line-clamp-3`}
          `,children:i}),(0,F.jsxs)(P,{to:a,className:`\r
            group/button\r
            mt-5 inline-flex w-fit items-center gap-2\r
            rounded-xl\r
            bg-white\r
            px-4 py-2.5\r
            text-sm font-bold\r
            text-secondary\r
            shadow-lg\r
            transition-all duration-300\r
            hover:bg-primary\r
            hover:text-white\r
            hover:shadow-primary/25\r
            focus:outline-none\r
            focus:ring-2\r
            focus:ring-white/70\r
            focus:ring-offset-2\r
            focus:ring-offset-transparent\r
          `,children:[(0,F.jsx)(`span`,{children:`Descubrir más`}),(0,F.jsx)(`i`,{className:`\r
              fa-solid fa-arrow-right\r
              text-xs\r
              transition-transform duration-300\r
              group-hover/button:translate-x-1\r
            `})]})]}),(0,F.jsx)(`div`,{className:`\r
        pointer-events-none absolute\r
        right-0 top-0\r
        h-32 w-32\r
        rounded-full\r
        bg-white/10\r
        blur-3xl\r
      `})]})},br=()=>(0,F.jsx)(`section`,{"aria-labelledby":`promotions-title`,className:`w-full bg-background py-10 sm:py-12 lg:py-16`,children:(0,F.jsxs)(`div`,{className:`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`,children:[(0,F.jsx)(`div`,{className:`mb-6 flex items-end justify-between gap-4 sm:mb-8`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-[0.18em] text-primary`,children:`Aprovechá nuestras promociones`}),(0,F.jsx)(`h2`,{id:`promotions-title`,className:`mt-1 text-xl font-extrabold tracking-tight text-secondary sm:text-2xl`,children:`Ofertas y novedades`})]})}),(0,F.jsxs)(`div`,{className:`flex flex-col gap-4 md:flex-row md:gap-5`,children:[(0,F.jsx)(yr,{image:`/img/products/banner-1.jpg`,alt:`Promoción especial de productos`,eyebrow:`Oferta especial`,title:`Encontrá algo que te sorprenda`,description:`Descubrí productos seleccionados y aprovechá oportunidades especiales por tiempo limitado.`,href:`/shop`,size:`small`}),(0,F.jsx)(yr,{image:`/img/products/banner-2.jpg`,alt:`Colección destacada de productos`,eyebrow:`Colección destacada`,title:`Todo lo que buscás, en un solo lugar`,description:`Explorá nuestra selección de tecnología, accesorios y productos pensados para acompañar tu día.`,href:`/pages`,size:`large`})]})]})}),xr=[{iconClass:`fa-solid fa-truck-fast`,title:`Envíos rápidos`,desc:`Recibí tus productos de forma segura y seguí tu pedido durante todo el proceso.`},{iconClass:`fa-solid fa-credit-card`,title:`Pago seguro`,desc:`Comprá con tranquilidad mediante métodos de pago seguros y protegidos.`},{iconClass:`fa-solid fa-shield-halved`,title:`Compra con confianza`,desc:`Productos seleccionados y una experiencia de compra pensada para vos.`},{iconClass:`fa-solid fa-headset`,title:`Atención personalizada`,desc:`Estamos disponibles para ayudarte antes, durante y después de tu compra.`}],Sr=()=>(0,F.jsx)(`section`,{"aria-labelledby":`benefits-title`,className:`\r
        w-full\r
        border-y border-black/[0.05]\r
        bg-white\r
        py-10\r
        sm:py-12\r
        lg:py-14\r
      `,children:(0,F.jsxs)(`div`,{className:`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`,children:[(0,F.jsxs)(`header`,{className:`mx-auto mb-8 max-w-2xl text-center sm:mb-10`,children:[(0,F.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-[0.18em] text-primary`,children:`Comprá con tranquilidad`}),(0,F.jsx)(`h2`,{id:`benefits-title`,className:`\r
              mt-1\r
              text-xl font-extrabold\r
              tracking-tight\r
              text-secondary\r
              sm:text-2xl\r
            `,children:`Todo pensado para vos`}),(0,F.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-gray-500`,children:`Una experiencia de compra simple, segura y acompañada en cada paso.`})]}),(0,F.jsx)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4`,children:xr.map((e,t)=>(0,F.jsxs)(`article`,{className:`\r
                group relative\r
                overflow-hidden\r
                rounded-2xl\r
                border border-black/[0.06]\r
                bg-background\r
                p-5\r
                transition-all duration-300\r
                hover:-translate-y-1\r
                hover:border-primary/15\r
                hover:bg-white\r
                hover:shadow-[0_12px_30px_rgba(3,0,71,0.07)]\r
                sm:p-6\r
              `,children:[(0,F.jsxs)(`span`,{className:`\r
                  pointer-events-none\r
                  absolute right-4 top-3\r
                  text-4xl font-extrabold\r
                  text-secondary/[0.035]\r
                  transition-colors duration-300\r
                  group-hover:text-primary/[0.08]\r
                `,"aria-hidden":`true`,children:[`0`,t+1]}),(0,F.jsx)(`div`,{className:`\r
                  relative z-10\r
                  mb-5\r
                  flex h-12 w-12\r
                  items-center justify-center\r
                  rounded-xl\r
                  bg-primary/10\r
                  text-primary\r
                  transition-all duration-300\r
                  group-hover:scale-105\r
                  group-hover:bg-primary\r
                  group-hover:text-white\r
                  group-hover:shadow-lg\r
                  group-hover:shadow-primary/20\r
                `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`${e.iconClass} text-base`})}),(0,F.jsxs)(`div`,{className:`relative z-10`,children:[(0,F.jsx)(`h3`,{className:`\r
                    text-sm font-bold\r
                    text-secondary\r
                    transition-colors duration-300\r
                    group-hover:text-primary\r
                    sm:text-base\r
                  `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
                    mt-2\r
                    text-xs\r
                    leading-5\r
                    text-gray-500\r
                    sm:text-sm\r
                    sm:leading-6\r
                  `,children:e.desc})]}),(0,F.jsx)(`div`,{className:`\r
                  absolute bottom-0 left-0\r
                  h-0.5 w-0\r
                  bg-primary\r
                  transition-all duration-300\r
                  group-hover:w-full\r
                `,"aria-hidden":`true`})]},e.title))})]})}),Cr={shopItems:[{id:`shop-1`,cover:`/img/products/iphone-14.jpg`,name:`iPhone 14`,price:999,discount:10,category:`phone`},{id:`shop-2`,cover:`/img/products/iphone-14-pro.webp`,name:`iPhone 14 Pro`,price:1199,discount:15,category:`phone`},{id:`shop-3`,cover:`/img/products/iphone-pro-max.webp`,name:`iPhone Pro Max`,price:1399,discount:8,category:`phone`},{id:`shop-4`,cover:`/img/products/iphones-inicio.jpg`,name:`iPhone Collection`,price:1099,discount:12,category:`phone`},{id:`shop-5`,cover:`/img/products/samsung-s24.webp`,name:`Samsung Galaxy S24`,price:899,discount:10,category:`phone`},{id:`shop-6`,cover:`/img/products/samsung-a55.webp`,name:`Samsung Galaxy A55`,price:549,discount:5,category:`phone`},{id:`shop-7`,cover:`/img/products/play-5.png`,name:`PlayStation 5`,price:799,discount:20,category:`gaming`},{id:`shop-8`,cover:`/img/products/ps5-slim.webp`,name:`PlayStation 5 Slim`,price:749,discount:15,category:`gaming`},{id:`shop-9`,cover:`/img/products/ps5-digital.webp`,name:`PlayStation 5 Digital`,price:699,discount:12,category:`gaming`},{id:`shop-10`,cover:`/img/products/ps5-game-edition.jpg`,name:`PS5 Gaming Edition`,price:829,discount:10,category:`gaming`},{id:`shop-11`,cover:`/img/products/ps5-performance.jpg`,name:`PS5 Performance Pack`,price:899,discount:8,category:`gaming`},{id:`shop-12`,cover:`/img/products/mapple-earphones.jpg`,name:`Mapple Earphones`,price:180,discount:25,category:`headphones`},{id:`shop-13`,cover:`/img/products/headphone-wireless.jpg`,name:`Headphones Wireless`,price:120,discount:10,category:`headphones`},{id:`shop-14`,cover:`/img/products/Wireless-Earphones-Pro.jpg`,name:`Wireless Earphones Pro`,price:229,discount:15,category:`headphones`},{id:`shop-15`,cover:`/img/products/Noise-Cancelling-Headphones.jpg`,name:`Noise Cancelling Headphones`,price:279,discount:20,category:`headphones`},{id:`shop-16`,cover:`/img/products/Bluetooth-Earbuds.jpg`,name:`Bluetooth Earbuds`,price:99,discount:10,category:`headphones`},{id:`shop-17`,cover:`/img/products/apple-watch.webp`,name:`Apple Watch`,price:499,discount:15,category:`watch`},{id:`shop-18`,cover:`/img/products/smart-watch-pro.jpg`,name:`Smartwatch Pro`,price:299,discount:20,category:`watch`},{id:`shop-19`,cover:`/img/products/apple-sport.jpg`,name:`Apple Watch Sport`,price:399,discount:10,category:`watch`},{id:`shop-20`,cover:`/img/products/smartwatch-active.jpg`,name:`Smartwatch Active`,price:199,discount:15,category:`watch`},{id:`shop-21`,cover:`/img/products/smartwatch-classic.webp`,name:`Smartwatch Classic`,price:249,discount:5,category:`watch`},{id:`shop-22`,cover:`/img/products/urban-sunglasses.webp`,name:`Urban Sunglasses`,price:149,discount:20,category:`glasses`},{id:`shop-23`,cover:`/img/products/premium-sunglasses.webp`,name:`Premium Sunglasses`,price:199,discount:15,category:`glasses`},{id:`shop-24`,cover:`/img/products/classic-sunglasses.jpg`,name:`Classic Sunglasses`,price:129,discount:10,category:`glasses`},{id:`shop-25`,cover:`/img/products/black-sunglasses.jpg`,name:`Black Edition Glasses`,price:179,discount:12,category:`glasses`},{id:`shop-26`,cover:`/img/products/smart-4k.jpg`,name:`Smart TV 4K`,price:899,discount:20,category:`tv`},{id:`shop-27`,cover:`/img/products/smart-4kpro.webp`,name:`Smart TV 4K Pro`,price:1099,discount:15,category:`tv`},{id:`shop-28`,cover:`/img/products/smart-ultrahd.jpg`,name:`Smart TV Ultra HD`,price:1299,discount:10,category:`tv`},{id:`shop-29`,cover:`/img/products/smart-cinema-jpeg`,name:`Smart TV Cinema`,price:949,discount:12,category:`tv`},{id:`shop-30`,cover:`/img/products/smart-home.jpg`,name:`Smart TV Home`,price:699,discount:8,category:`tv`}]},wr={productItems:[`shop-2`,`shop-7`,`shop-12`,`shop-17`,`shop-22`,`shop-26`].flatMap(e=>{let t=Cr.shopItems.find(t=>t.id===e);return t?[t]:[]})},Tr=[`shop-12`,`shop-7`,`shop-2`,`shop-17`,`shop-26`],Er=[`Favorito de la semana`,`Destacado en gaming`,`Uno de los más buscados`,`Tendencia en wearables`,`Ideal para tu hogar`],Dr={topItems:Tr.flatMap((e,t)=>{let n=Cr.shopItems.find(t=>t.id===e);return n?[{id:t+1,cover:n.cover,para:n.name,desc:Er[t],price:n.price}]:[]})},Or={arrivalsItems:[`shop-6`,`shop-10`,`shop-15`,`shop-21`,`shop-25`,`shop-30`].flatMap(e=>{let t=Cr.shopItems.find(t=>t.id===e);return t?[t]:[]})},kr={flashDeals:[],shopItems:[],topCategories:[],newArrivals:[]},Ar=()=>({flashDeals:wr.productItems,shopItems:Cr.shopItems,topCategories:Dr.topItems,newArrivals:Or.arrivalsItems}),jr=async()=>(await new Promise(e=>{setTimeout(e,800)}),Ar()),Mr=Vt(e=>({products:kr,isLoading:!1,hasLoaded:!1,error:null,fetchProducts:async()=>{e({isLoading:!0,error:null});try{e({products:await jr(),isLoading:!1,hasLoaded:!0,error:null})}catch{e({isLoading:!1,hasLoaded:!1,error:`No pudimos cargar el catálogo. Intentá nuevamente.`})}},refreshProducts:async()=>{e({isLoading:!0,error:null});try{e({products:await jr(),isLoading:!1,hasLoaded:!0,error:null})}catch{e({isLoading:!1,error:`No pudimos actualizar el catálogo.`})}},clearProducts:()=>{e({products:kr,hasLoaded:!1,error:null})}})),Nr=()=>(0,F.jsx)(`section`,{"aria-labelledby":`promo-banner-title`,className:`\r
        relative\r
        w-full\r
        overflow-hidden\r
        bg-background\r
        py-8\r
        sm:py-10\r
        lg:py-12\r
      `,children:(0,F.jsx)(`div`,{className:`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8`,children:(0,F.jsxs)(`div`,{className:`\r
            group\r
            relative\r
            min-h-[360px]\r
            overflow-hidden\r
            rounded-[1.75rem]\r
            bg-secondary-dark\r
            shadow-[0_22px_55px_rgba(7,26,47,0.16)]\r
            sm:min-h-[390px]\r
            lg:min-h-[420px]\r
          `,children:[(0,F.jsx)(`div`,{className:`\r
              pointer-events-none\r
              absolute\r
              -right-24\r
              -top-24\r
              h-80 w-80\r
              rounded-full\r
              bg-primary/20\r
              blur-3xl\r
            `,"aria-hidden":`true`}),(0,F.jsx)(`div`,{className:`\r
              pointer-events-none\r
              absolute\r
              -bottom-32\r
              -left-20\r
              h-72 w-72\r
              rounded-full\r
              bg-secondary/40\r
              blur-3xl\r
            `,"aria-hidden":`true`}),(0,F.jsx)(`div`,{className:`\r
              pointer-events-none\r
              absolute inset-0\r
              opacity-[0.035]\r
              [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]\r
              [background-size:42px_42px]\r
            `,"aria-hidden":`true`}),(0,F.jsx)(`div`,{className:`\r
              pointer-events-none\r
              absolute\r
              -right-24\r
              top-1/2\r
              hidden\r
              h-[420px]\r
              w-[420px]\r
              -translate-y-1/2\r
              rounded-full\r
              border border-white/[0.06]\r
              lg:block\r
            `,"aria-hidden":`true`}),(0,F.jsx)(`div`,{className:`\r
              pointer-events-none\r
              absolute\r
              -right-8\r
              top-1/2\r
              hidden\r
              h-[280px]\r
              w-[280px]\r
              -translate-y-1/2\r
              rounded-full\r
              border border-primary/15\r
              lg:block\r
            `,"aria-hidden":`true`}),(0,F.jsxs)(`div`,{className:`\r
              relative z-10\r
              flex h-full\r
              min-h-[360px]\r
              flex-col\r
              justify-center\r
              px-6 py-10\r
\r
              sm:px-10\r
              sm:py-12\r
\r
              lg:min-h-[420px]\r
              lg:max-w-[62%]\r
              lg:px-14\r
              xl:px-16\r
            `,children:[(0,F.jsxs)(`span`,{className:`\r
                inline-flex\r
                w-fit\r
                items-center\r
                gap-2\r
                rounded-full\r
                border border-primary/25\r
                bg-primary/10\r
                px-3.5 py-1.5\r
                text-[9px]\r
                font-extrabold\r
                uppercase\r
                tracking-[0.16em]\r
                text-primary\r
                backdrop-blur-md\r
                sm:text-[10px]\r
              `,children:[(0,F.jsx)(`span`,{className:`\r
                  h-1.5 w-1.5\r
                  rounded-full\r
                  bg-primary\r
                  shadow-[0_0_10px_rgba(233,69,96,0.8)]\r
                `,"aria-hidden":`true`}),`Oferta especial`]}),(0,F.jsxs)(`h2`,{id:`promo-banner-title`,className:`\r
                mt-5\r
                max-w-xl\r
                text-[2rem]\r
                font-extrabold\r
                leading-[1.05]\r
                tracking-[-0.045em]\r
                text-white\r
\r
                sm:text-4xl\r
                lg:text-5xl\r
                xl:text-[3.5rem]\r
              `,children:[`Tecnología que`,(0,F.jsx)(`span`,{className:`block text-primary`,children:`se adapta a vos.`})]}),(0,F.jsx)(`p`,{className:`\r
                mt-5\r
                max-w-lg\r
                text-sm\r
                leading-6\r
                text-white/60\r
\r
                sm:text-base\r
                sm:leading-7\r
              `,children:`Descubrí productos seleccionados para tu día a día y aprovechá promociones especiales por tiempo limitado.`}),(0,F.jsx)(`div`,{className:`mt-6 flex flex-wrap items-center gap-4`,children:(0,F.jsxs)(`div`,{className:`\r
                  flex items-center gap-3\r
                  rounded-2xl\r
                  border border-white/10\r
                  bg-white/[0.05]\r
                  px-4 py-3\r
                  backdrop-blur-md\r
                `,children:[(0,F.jsxs)(`span`,{className:`\r
                    text-2xl\r
                    font-extrabold\r
                    tracking-tight\r
                    text-white\r
                    sm:text-3xl\r
                  `,children:[`HASTA`,(0,F.jsx)(`span`,{className:`ml-1.5 text-primary`,children:`40%`})]}),(0,F.jsxs)(`span`,{className:`\r
                    border-l border-white/10\r
                    pl-3\r
                    text-[9px]\r
                    font-bold\r
                    uppercase\r
                    leading-4\r
                    tracking-[0.1em]\r
                    text-white/45\r
                  `,children:[`En productos`,(0,F.jsx)(`br`,{}),`seleccionados`]})]})}),(0,F.jsx)(`div`,{className:`mt-7`,children:(0,F.jsxs)(P,{to:`/shop`,className:`\r
                  group/cta\r
                  inline-flex\r
                  min-h-12\r
                  items-center\r
                  justify-center\r
                  gap-2\r
                  rounded-xl\r
                  bg-primary\r
                  px-6 py-3.5\r
                  text-sm\r
                  font-bold\r
                  text-white\r
                  shadow-[0_12px_28px_rgba(233,69,96,0.28)]\r
                  transition-all duration-300\r
\r
                  hover:-translate-y-0.5\r
                  hover:bg-primary-dark\r
                  hover:shadow-[0_16px_34px_rgba(233,69,96,0.36)]\r
\r
                  active:translate-y-0\r
                  active:scale-[0.98]\r
\r
                  focus:outline-none\r
                  focus-visible:ring-2\r
                  focus-visible:ring-white/80\r
                  focus-visible:ring-offset-2\r
                  focus-visible:ring-offset-secondary-dark\r
                `,children:[`Explorar productos`,(0,F.jsx)(`i`,{className:`\r
                    fa-solid fa-arrow-right\r
                    text-xs\r
                    transition-transform duration-300\r
                    group-hover/cta:translate-x-1\r
                  `,"aria-hidden":`true`})]})})]}),(0,F.jsxs)(`div`,{className:`\r
    pointer-events-none\r
    absolute\r
    -bottom-6\r
    right-[-4%]\r
    hidden\r
    h-[95%]\r
    w-[52%]\r
    max-w-[620px]\r
    lg:block\r
  `,"aria-hidden":`true`,children:[(0,F.jsx)(`div`,{className:`\r
      absolute\r
      left-1/2\r
      top-1/2\r
      h-[360px]\r
      w-[360px]\r
      -translate-x-1/2\r
      -translate-y-1/2\r
      rounded-full\r
      bg-primary/20\r
      blur-[90px]\r
    `}),(0,F.jsx)(`div`,{className:`\r
      absolute\r
      bottom-[12%]\r
      left-[28%]\r
      h-[180px]\r
      w-[180px]\r
      rounded-full\r
      bg-white/10\r
      blur-[70px]\r
    `}),(0,F.jsx)(`img`,{src:`/img/products/banner-tecnologia.webp`,alt:``,loading:`lazy`,className:`\r
      relative z-10\r
      ml-auto\r
      h-full\r
      w-full\r
      object-contain\r
      object-right\r
      drop-shadow-[0_35px_45px_rgba(0,0,0,0.32)]\r
      transition-transform\r
      duration-700\r
      group-hover:scale-[1.04]\r
      motion-reduce:transition-none\r
      motion-reduce:group-hover:scale-100\r
    `}),(0,F.jsx)(`div`,{className:`\r
      absolute\r
      inset-y-0\r
      left-0\r
      z-20\r
      w-1/3\r
      bg-gradient-to-r\r
      from-secondary-dark\r
      via-secondary-dark/55\r
      to-transparent\r
    `})]}),(0,F.jsx)(`div`,{className:`\r
              absolute inset-x-0 bottom-0\r
              h-1\r
              bg-gradient-to-r\r
              from-primary\r
              via-primary/50\r
              to-transparent\r
            `,"aria-hidden":`true`})]})})}),Pr=()=>{let e=Mr(e=>e.products),t=Mr(e=>e.isLoading),n=Mr(e=>e.hasLoaded),r=Mr(e=>e.error),i=Mr(e=>e.fetchProducts);return(0,y.useEffect)(()=>{!n&&!t&&i()},[i,n,t]),t&&!n?(0,F.jsxs)(`main`,{className:`\r
          flex min-h-[60vh]\r
          flex-col items-center justify-center\r
          bg-background\r
          px-4\r
          text-center\r
        `,"aria-live":`polite`,"aria-busy":`true`,children:[(0,F.jsx)(`div`,{className:`\r
            h-12 w-12\r
            animate-spin\r
            rounded-full\r
            border-4\r
            border-gray-200\r
            border-t-primary\r
          `,"aria-hidden":`true`}),(0,F.jsx)(`h1`,{className:`mt-5 text-lg font-bold text-secondary`,children:`Cargando catálogo...`}),(0,F.jsx)(`p`,{className:`mt-1 text-sm text-gray-500`,children:`Estamos preparando los productos para vos.`})]}):r&&!n?(0,F.jsxs)(`main`,{className:`\r
          flex min-h-[60vh]\r
          flex-col items-center justify-center\r
          bg-background\r
          px-4\r
          text-center\r
        `,role:`alert`,children:[(0,F.jsx)(`div`,{className:`\r
            flex h-16 w-16\r
            items-center justify-center\r
            rounded-2xl\r
            bg-red-50\r
            text-red-500\r
          `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-triangle-exclamation text-2xl`})}),(0,F.jsx)(`h1`,{className:`mt-5 text-xl font-extrabold text-secondary`,children:`No pudimos cargar la tienda`}),(0,F.jsx)(`p`,{className:`mt-2 max-w-md text-sm leading-6 text-gray-500`,children:r}),(0,F.jsxs)(`button`,{type:`button`,onClick:()=>void i(),className:`\r
            mt-6\r
            inline-flex items-center gap-2\r
            rounded-xl\r
            bg-primary\r
            px-5 py-3\r
            text-sm font-semibold\r
            text-white\r
            shadow-lg shadow-primary/20\r
            transition-all duration-200\r
            hover:-translate-y-0.5\r
            hover:shadow-primary/30\r
            focus:outline-none\r
            focus-visible:ring-2\r
            focus-visible:ring-primary/40\r
            focus-visible:ring-offset-2\r
          `,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-rotate-right text-xs`,"aria-hidden":`true`}),`Reintentar`]})]}):(0,F.jsxs)(`main`,{className:`w-full bg-background`,children:[(0,F.jsx)(Jn,{}),(0,F.jsx)(tr,{productItems:e.flashDeals}),(0,F.jsx)(or,{topItems:e.topCategories}),(0,F.jsx)(lr,{arrivalsItems:e.newArrivals}),(0,F.jsx)(Nr,{}),(0,F.jsx)(vr,{shopItems:e.shopItems}),(0,F.jsx)(br,{}),(0,F.jsx)(Sr,{})]})},Fr=()=>{let e=I(e=>e.cartItem),t=I(e=>e.addToCart),n=I(e=>e.decreaseQty),r=I(e=>e.removeFromCart),i=I(e=>e.getTotalItems),a=I(e=>e.getTotalPrice),o=e.length>0,s=i(),c=a(),l=e=>e.toLocaleString(`es-AR`,{minimumFractionDigits:0,maximumFractionDigits:0});return(0,F.jsx)(`section`,{"aria-labelledby":`cart-title`,className:`w-full bg-background py-10 sm:py-12 lg:py-16`,children:(0,F.jsxs)(`div`,{className:`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8`,children:[(0,F.jsxs)(`header`,{className:`mb-8`,children:[(0,F.jsx)(`p`,{className:`mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary`,children:`Tu compra`}),(0,F.jsx)(`h1`,{id:`cart-title`,className:`text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl`,children:`Mi carrito`}),o&&(0,F.jsxs)(`p`,{className:`mt-1 text-sm text-gray-500`,"aria-live":`polite`,children:[s,` `,s===1?`producto seleccionado`:`productos seleccionados`]})]}),o?(0,F.jsxs)(`div`,{className:`flex flex-col gap-6 lg:flex-row lg:items-start`,children:[(0,F.jsx)(`div`,{className:`min-w-0 flex-1`,children:(0,F.jsx)(`ul`,{className:`space-y-4`,"aria-label":`Productos del carrito`,children:e.map(e=>{let i=e.price*e.qty;return(0,F.jsx)(`li`,{children:(0,F.jsxs)(`article`,{className:`\r
                          relative\r
                          flex flex-col gap-5\r
                          rounded-2xl\r
                          border border-black/[0.06]\r
                          bg-white\r
                          p-4\r
                          shadow-[0_5px_25px_rgba(3,0,71,0.05)]\r
                          transition-shadow duration-300\r
                          hover:shadow-[0_10px_30px_rgba(3,0,71,0.08)]\r
                          sm:p-5\r
                          md:flex-row\r
                          md:items-center\r
                        `,children:[(0,F.jsxs)(`div`,{className:`flex min-w-0 flex-1 items-center gap-4 sm:gap-5`,children:[(0,F.jsx)(`div`,{className:`\r
                              flex h-24 w-24 shrink-0\r
                              items-center justify-center\r
                              overflow-hidden\r
                              rounded-2xl\r
                              bg-gradient-to-b from-gray-50 to-white\r
                              p-3\r
                              sm:h-28 sm:w-28\r
                            `,children:(0,F.jsx)(`img`,{src:e.cover,alt:`Imagen de ${e.name}`,loading:`lazy`,className:`\r
                                h-full w-full\r
                                object-contain\r
                                transition-transform duration-300\r
                                hover:scale-105\r
                              `})}),(0,F.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,F.jsx)(`h2`,{className:`\r
                                line-clamp-2\r
                                text-sm font-semibold leading-5\r
                                text-secondary\r
                                sm:text-base\r
                              `,title:e.name,children:e.name}),(0,F.jsx)(`p`,{className:`mt-1.5 text-xs text-gray-400`,children:`Precio unitario`}),(0,F.jsxs)(`p`,{className:`mt-0.5 text-sm font-medium text-gray-600`,children:[`$`,l(e.price)]}),(0,F.jsxs)(`div`,{className:`mt-3 flex items-center gap-2`,children:[(0,F.jsx)(`span`,{className:`text-xs text-gray-400`,children:`Subtotal:`}),(0,F.jsxs)(`strong`,{className:`text-sm font-bold text-primary`,children:[`$`,l(i)]})]})]})]}),(0,F.jsxs)(`div`,{className:`\r
                            flex items-center justify-between\r
                            gap-4\r
                            border-t border-black/[0.06]\r
                            pt-4\r
                            md:border-0 md:pt-0\r
                          `,children:[(0,F.jsxs)(`div`,{className:`\r
                              flex items-center\r
                              overflow-hidden\r
                              rounded-xl\r
                              border border-black/10\r
                              bg-gray-50\r
                            `,"aria-label":`Cantidad de ${e.name}`,children:[(0,F.jsx)(`button`,{type:`button`,onClick:()=>n(e),className:`\r
                                flex h-10 w-10\r
                                items-center justify-center\r
                                text-gray-500\r
                                transition-colors duration-200\r
                                hover:bg-white\r
                                hover:text-primary\r
                                focus:outline-none\r
                                focus-visible:ring-2\r
                                focus-visible:ring-inset\r
                                focus-visible:ring-primary/40\r
                              `,"aria-label":`Disminuir cantidad de ${e.name}`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-minus text-xs`,"aria-hidden":`true`})}),(0,F.jsx)(`span`,{className:`\r
                                flex h-10 min-w-[42px]\r
                                items-center justify-center\r
                                border-x border-black/10\r
                                bg-white\r
                                px-2\r
                                text-sm font-bold\r
                                text-secondary\r
                              `,"aria-live":`polite`,"aria-label":`${e.qty} unidades`,children:e.qty}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>t(e),className:`\r
                                flex h-10 w-10\r
                                items-center justify-center\r
                                text-gray-500\r
                                transition-colors duration-200\r
                                hover:bg-white\r
                                hover:text-primary\r
                                focus:outline-none\r
                                focus-visible:ring-2\r
                                focus-visible:ring-inset\r
                                focus-visible:ring-primary/40\r
                              `,"aria-label":`Aumentar cantidad de ${e.name}`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-plus text-xs`,"aria-hidden":`true`})})]}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>r(e),className:`\r
                              flex h-10 w-10\r
                              shrink-0\r
                              items-center justify-center\r
                              rounded-xl\r
                              text-gray-400\r
                              transition-all duration-200\r
                              hover:bg-red-50\r
                              hover:text-red-500\r
                              focus:outline-none\r
                              focus-visible:ring-2\r
                              focus-visible:ring-red-500/30\r
                            `,"aria-label":`Eliminar ${e.name} del carrito`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-trash-can text-sm`,"aria-hidden":`true`})})]})]})},e.id)})})}),(0,F.jsx)(`aside`,{className:`w-full lg:w-[340px] lg:shrink-0`,"aria-label":`Resumen del pedido`,children:(0,F.jsxs)(`div`,{className:`\r
                  sticky top-28\r
                  rounded-2xl\r
                  border border-black/[0.06]\r
                  bg-white\r
                  p-5\r
                  shadow-[0_8px_30px_rgba(3,0,71,0.06)]\r
                  sm:p-6\r
                `,children:[(0,F.jsxs)(`div`,{className:`mb-5 flex items-center gap-3`,children:[(0,F.jsx)(`div`,{className:`\r
                      flex h-10 w-10\r
                      items-center justify-center\r
                      rounded-xl\r
                      bg-primary/10\r
                      text-primary\r
                    `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-receipt text-sm`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h2`,{className:`text-base font-bold text-secondary`,children:`Resumen del pedido`}),(0,F.jsx)(`p`,{className:`text-xs text-gray-400`,children:`Revisá tu compra antes de continuar`})]})]}),(0,F.jsxs)(`div`,{className:`space-y-3 border-b border-black/[0.06] pb-5`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,F.jsx)(`span`,{className:`text-gray-500`,children:`Productos`}),(0,F.jsx)(`span`,{className:`font-medium text-secondary`,children:s})]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,F.jsx)(`span`,{className:`text-gray-500`,children:`Subtotal`}),(0,F.jsxs)(`span`,{className:`font-medium text-secondary`,children:[`$`,l(c)]})]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,F.jsx)(`span`,{className:`text-gray-500`,children:`Envío`}),(0,F.jsx)(`span`,{className:`font-semibold text-green-600`,children:`A calcular`})]})]}),(0,F.jsxs)(`div`,{className:`flex items-end justify-between gap-4 py-5`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`block text-xs text-gray-400`,children:`Total`}),(0,F.jsxs)(`span`,{className:`mt-1 block text-2xl font-extrabold tracking-tight text-secondary`,children:[`$`,l(c)]})]}),(0,F.jsxs)(`span`,{className:`\r
                      rounded-full\r
                      bg-primary/10\r
                      px-2.5 py-1\r
                      text-[10px] font-bold uppercase tracking-wider\r
                      text-primary\r
                    `,children:[s,` `,s===1?`item`:`items`]})]}),(0,F.jsxs)(P,{to:`/checkout`,className:`\r
                    flex w-full\r
                    items-center justify-center gap-2\r
                    rounded-xl\r
                    bg-primary\r
                    px-5 py-3.5\r
                    text-sm font-bold text-white\r
                    shadow-lg shadow-primary/20\r
                    transition-all duration-200\r
                    hover:-translate-y-0.5\r
                    hover:shadow-primary/30\r
                    focus:outline-none\r
                    focus-visible:ring-2\r
                    focus-visible:ring-primary/40\r
                  `,children:[`Continuar compra`,(0,F.jsx)(`i`,{className:`fa-solid fa-arrow-right text-xs`,"aria-hidden":`true`})]}),(0,F.jsxs)(`div`,{className:`\r
                    mt-4\r
                    flex items-center justify-center gap-2\r
                    text-center text-[10px] text-gray-400\r
                  `,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-lock text-[9px] text-primary`,"aria-hidden":`true`}),(0,F.jsx)(`span`,{children:`Compra segura y protegida`})]})]})})]}):(0,F.jsxs)(`div`,{className:`\r
              flex min-h-[420px]\r
              flex-col items-center justify-center\r
              rounded-3xl\r
              border border-black/[0.06]\r
              bg-white\r
              px-6 py-12\r
              text-center\r
              shadow-[0_8px_30px_rgba(3,0,71,0.05)]\r
            `,children:[(0,F.jsx)(`div`,{className:`\r
                mb-6 flex h-20 w-20\r
                items-center justify-center\r
                rounded-3xl\r
                bg-primary/10\r
                text-primary\r
              `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-cart-shopping text-3xl`})}),(0,F.jsx)(`h2`,{className:`text-xl font-bold text-secondary`,children:`Tu carrito está vacío`}),(0,F.jsx)(`p`,{className:`mt-2 max-w-md text-sm leading-6 text-gray-500`,children:`Todavía no agregaste ningún producto. Explorá nuestra tienda y encontrá algo que te guste.`}),(0,F.jsxs)(P,{to:`/shop`,className:`\r
                mt-6 inline-flex items-center gap-2\r
                rounded-xl\r
                bg-primary\r
                px-6 py-3\r
                text-sm font-semibold text-white\r
                shadow-lg shadow-primary/20\r
                transition-all duration-200\r
                hover:-translate-y-0.5\r
                hover:shadow-primary/30\r
                focus:outline-none\r
                focus-visible:ring-2\r
                focus-visible:ring-primary/40\r
              `,children:[(0,F.jsx)(`span`,{children:`Explorar productos`}),(0,F.jsx)(`i`,{className:`fa-solid fa-arrow-right text-xs`,"aria-hidden":`true`})]})]})]})})},Ir=[{label:`Sobre nosotros`,href:`/about`},{label:`Nuestras tiendas`,href:`/stores`},{label:`Trabajá con nosotros`,href:`/careers`},{label:`Términos y condiciones`,href:`/terms`},{label:`Política de privacidad`,href:`/privacy`}],Lr=[{label:`Preguntas frecuentes`,href:`/faq`},{label:`Centro de ayuda`,href:`/help`},{label:`Seguimiento de pedido`,href:`/track-order`},{label:`Cambios y devoluciones`,href:`/returns`},{label:`Contacto`,href:`/contact`}],Rr=()=>{let e=new Date().getFullYear();return(0,F.jsxs)(`footer`,{className:`mt-10 bg-secondary text-white`,children:[(0,F.jsx)(`div`,{className:`border-b border-white/10`,children:(0,F.jsxs)(`div`,{className:`mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8`,children:[(0,F.jsxs)(`div`,{className:`max-w-xl`,children:[(0,F.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-[0.18em] text-primary`,children:`Siempre cerca tuyo`}),(0,F.jsx)(`h2`,{className:`mt-1 text-xl font-extrabold tracking-tight sm:text-2xl`,children:`¿Necesitás ayuda con tu compra?`}),(0,F.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-white/50`,children:`Estamos para ayudarte con tus consultas, pedidos y cualquier duda que tengas.`})]}),(0,F.jsxs)(P,{to:`/contact`,className:`\r
              inline-flex shrink-0 items-center justify-center gap-2\r
              rounded-xl\r
              border border-primary/30\r
              bg-primary/10\r
              px-5 py-3\r
              text-sm font-semibold text-primary\r
              transition-all duration-300\r
              hover:-translate-y-0.5\r
              hover:bg-primary\r
              hover:text-white\r
              hover:shadow-lg hover:shadow-primary/20\r
              focus:outline-none\r
              focus-visible:ring-2\r
              focus-visible:ring-primary/40\r
            `,children:[(0,F.jsx)(`span`,{children:`Contactanos`}),(0,F.jsx)(`i`,{className:`fa-solid fa-arrow-right text-xs`,"aria-hidden":`true`})]})]})}),(0,F.jsxs)(`div`,{className:`mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12 lg:px-8`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(P,{to:`/`,className:`inline-flex items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40`,"aria-label":`Ecommerce - Inicio`,children:[(0,F.jsx)(`span`,{className:`\r
                flex h-10 w-10\r
                items-center justify-center\r
                rounded-xl\r
                bg-primary\r
                text-white\r
                shadow-lg shadow-primary/20\r
              `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-bag-shopping text-sm`})}),(0,F.jsx)(`span`,{className:`text-2xl font-extrabold tracking-tight`,children:`Ecommerce`})]}),(0,F.jsx)(`p`,{className:`mt-5 max-w-sm text-sm leading-6 text-white/45`,children:`Tecnología, accesorios y productos seleccionados para acompañar tu día con calidad, diseño y una experiencia de compra simple.`}),(0,F.jsx)(`nav`,{className:`mt-6`,"aria-label":`Redes sociales`,children:(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`a`,{href:`#`,"aria-label":`Instagram`,className:`\r
                  flex h-10 w-10\r
                  items-center justify-center\r
                  rounded-xl\r
                  border border-white/10\r
                  bg-white/[0.04]\r
                  text-white/50\r
                  transition-all duration-300\r
                  hover:border-primary/30\r
                  hover:bg-primary/10\r
                  hover:text-primary\r
                  focus:outline-none\r
                  focus-visible:ring-2\r
                  focus-visible:ring-primary/40\r
                `,children:(0,F.jsx)(`i`,{className:`fa-brands fa-instagram`,"aria-hidden":`true`})}),(0,F.jsx)(`a`,{href:`#`,"aria-label":`Facebook`,className:`\r
                  flex h-10 w-10\r
                  items-center justify-center\r
                  rounded-xl\r
                  border border-white/10\r
                  bg-white/[0.04]\r
                  text-white/50\r
                  transition-all duration-300\r
                  hover:border-primary/30\r
                  hover:bg-primary/10\r
                  hover:text-primary\r
                  focus:outline-none\r
                  focus-visible:ring-2\r
                  focus-visible:ring-primary/40\r
                `,children:(0,F.jsx)(`i`,{className:`fa-brands fa-facebook-f`,"aria-hidden":`true`})}),(0,F.jsx)(`a`,{href:`#`,"aria-label":`TikTok`,className:`\r
                  flex h-10 w-10\r
                  items-center justify-center\r
                  rounded-xl\r
                  border border-white/10\r
                  bg-white/[0.04]\r
                  text-white/50\r
                  transition-all duration-300\r
                  hover:border-primary/30\r
                  hover:bg-primary/10\r
                  hover:text-primary\r
                  focus:outline-none\r
                  focus-visible:ring-2\r
                  focus-visible:ring-primary/40\r
                `,children:(0,F.jsx)(`i`,{className:`fa-brands fa-tiktok`,"aria-hidden":`true`})})]})}),(0,F.jsxs)(`div`,{className:`mt-7`,children:[(0,F.jsx)(`p`,{className:`mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/35`,children:`Próximamente en`}),(0,F.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-white/70`,children:[(0,F.jsx)(`i`,{className:`fa-brands fa-google-play text-lg`,"aria-hidden":`true`}),(0,F.jsxs)(`div`,{className:`leading-none`,children:[(0,F.jsx)(`span`,{className:`block text-[8px] text-white/35`,children:`Próximamente`}),(0,F.jsx)(`span`,{className:`mt-0.5 block text-xs font-semibold`,children:`Google Play`})]})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-white/70`,children:[(0,F.jsx)(`i`,{className:`fa-brands fa-app-store-ios text-lg`,"aria-hidden":`true`}),(0,F.jsxs)(`div`,{className:`leading-none`,children:[(0,F.jsx)(`span`,{className:`block text-[8px] text-white/35`,children:`Próximamente`}),(0,F.jsx)(`span`,{className:`mt-0.5 block text-xs font-semibold`,children:`App Store`})]})]})]})]})]}),(0,F.jsx)(zr,{title:`Empresa`,ariaLabel:`Enlaces de empresa`,links:Ir}),(0,F.jsx)(zr,{title:`Atención al cliente`,ariaLabel:`Atención al cliente`,links:Lr}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h2`,{className:`text-sm font-bold text-white`,children:`Contactanos`}),(0,F.jsxs)(`div`,{className:`mt-5 space-y-4`,children:[(0,F.jsxs)(`a`,{href:`mailto:support@store.com`,className:`group flex items-start gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40`,children:[(0,F.jsx)(`span`,{className:`\r
                  flex h-9 w-9 shrink-0\r
                  items-center justify-center\r
                  rounded-xl\r
                  bg-primary/10\r
                  text-primary\r
                  transition-colors duration-300\r
                  group-hover:bg-primary\r
                  group-hover:text-white\r
                `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-envelope text-xs`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`block text-[10px] uppercase tracking-wider text-white/30`,children:`Email`}),(0,F.jsx)(`span`,{className:`mt-1 block text-sm text-white/55 transition-colors group-hover:text-white`,children:`support@store.com`})]})]}),(0,F.jsxs)(`a`,{href:`tel:+11123456780`,className:`group flex items-start gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40`,children:[(0,F.jsx)(`span`,{className:`\r
                  flex h-9 w-9 shrink-0\r
                  items-center justify-center\r
                  rounded-xl\r
                  bg-primary/10\r
                  text-primary\r
                  transition-colors duration-300\r
                  group-hover:bg-primary\r
                  group-hover:text-white\r
                `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-phone text-xs`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`block text-[10px] uppercase tracking-wider text-white/30`,children:`Teléfono`}),(0,F.jsx)(`span`,{className:`mt-1 block text-sm text-white/55 transition-colors group-hover:text-white`,children:`+1 1123 456 780`})]})]}),(0,F.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,F.jsx)(`span`,{className:`\r
                  flex h-9 w-9 shrink-0\r
                  items-center justify-center\r
                  rounded-xl\r
                  bg-primary/10\r
                  text-primary\r
                `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-location-dot text-xs`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`block text-[10px] uppercase tracking-wider text-white/30`,children:`Dirección`}),(0,F.jsxs)(`span`,{className:`mt-1 block text-sm leading-5 text-white/55`,children:[`70 Washington Square South,`,(0,F.jsx)(`br`,{}),`New York, NY 10012`]})]})]})]})]})]}),(0,F.jsx)(`div`,{className:`border-t border-white/10`,children:(0,F.jsxs)(`div`,{className:`mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/35 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8`,children:[(0,F.jsxs)(`p`,{children:[`© `,e,` Ecommerce. Todos los derechos reservados.`]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,F.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-shield-halved text-[10px] text-primary/70`,"aria-hidden":`true`}),`Compra segura`]}),(0,F.jsx)(`span`,{className:`hidden h-3 w-px bg-white/10 sm:block`,"aria-hidden":`true`}),(0,F.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-lock text-[10px] text-primary/70`,"aria-hidden":`true`}),`Pago protegido`]})]})]})})]})},zr=({title:e,ariaLabel:t,links:n})=>(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h2`,{className:`text-sm font-bold text-white`,children:e}),(0,F.jsx)(`nav`,{className:`mt-5`,"aria-label":t,children:(0,F.jsx)(`ul`,{className:`space-y-3`,children:n.map(e=>(0,F.jsx)(`li`,{children:(0,F.jsxs)(P,{to:e.href,className:`\r
                  group flex items-center gap-2\r
                  rounded-sm\r
                  text-sm text-white/45\r
                  transition-colors duration-200\r
                  hover:text-white\r
                  focus:outline-none\r
                  focus-visible:ring-2\r
                  focus-visible:ring-primary/40\r
                `,children:[(0,F.jsx)(`i`,{className:`\r
                    fa-solid fa-chevron-right\r
                    text-[8px] text-primary/60\r
                    transition-transform duration-200\r
                    group-hover:translate-x-1\r
                  `,"aria-hidden":`true`}),e.label]})},e.href))})})]}),Br={firstName:``,lastName:``,email:``,phone:``,address:``,city:``,province:``,postalCode:``},Vr=1e5,Hr=5e3,Ur=e=>e.toLocaleString(`es-AR`,{minimumFractionDigits:0,maximumFractionDigits:0}),Wr=e=>e>=Vr?0:Hr,Gr=()=>{let e=Ge(),t=I(e=>e.cartItem),n=I(e=>e.getTotalItems),r=I(e=>e.clearCart),[i,a]=(0,y.useState)(Br),[o,s]=(0,y.useState)(`card`),[c,l]=(0,y.useState)(!1),[u,d]=(0,y.useState)(``),f=n(),p=t.reduce((e,t)=>e+t.price*t.qty,0),m=Wr(p),h=p+m,g=(e,t)=>{a(n=>({...n,[e]:t}))};return t.length===0?(0,F.jsx)(`main`,{className:`\r
          min-h-[70vh]\r
          bg-background\r
          px-4 py-12\r
          sm:px-6 lg:px-8\r
        `,children:(0,F.jsxs)(`div`,{className:`\r
            mx-auto\r
            flex min-h-[500px]\r
            max-w-3xl\r
            flex-col items-center justify-center\r
            rounded-3xl\r
            bg-white\r
            px-6 py-12\r
            text-center\r
            shadow-[0_8px_30px_rgba(3,0,71,0.05)]\r
          `,children:[(0,F.jsx)(`div`,{className:`\r
              flex h-20 w-20\r
              items-center justify-center\r
              rounded-3xl\r
              bg-primary/10\r
              text-primary\r
            `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-cart-shopping text-3xl`})}),(0,F.jsx)(`h1`,{className:`mt-6 text-2xl font-extrabold text-secondary`,children:`No hay productos para comprar`}),(0,F.jsx)(`p`,{className:`mt-2 max-w-md text-sm leading-6 text-gray-500`,children:`Tu carrito está vacío. Agregá productos antes de continuar con la compra.`}),(0,F.jsxs)(P,{to:`/shop`,className:`\r
              mt-6\r
              inline-flex items-center gap-2\r
              rounded-xl\r
              bg-primary\r
              px-6 py-3\r
              text-sm font-semibold text-white\r
              shadow-lg shadow-primary/20\r
              transition-all duration-200\r
              hover:-translate-y-0.5\r
              hover:shadow-primary/30\r
              focus:outline-none\r
              focus-visible:ring-2\r
              focus-visible:ring-primary/40\r
              focus-visible:ring-offset-2\r
            `,children:[`Explorar productos`,(0,F.jsx)(`i`,{className:`fa-solid fa-arrow-right text-xs`,"aria-hidden":`true`})]})]})}):(0,F.jsx)(`main`,{className:`min-h-screen bg-background py-10 sm:py-12 lg:py-16`,children:(0,F.jsxs)(`div`,{className:`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`,children:[(0,F.jsxs)(`header`,{className:`mb-8`,children:[(0,F.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-[0.18em] text-primary`,children:`Finalizar compra`}),(0,F.jsx)(`h1`,{className:`mt-1 text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl`,children:`Checkout`}),(0,F.jsx)(`p`,{className:`mt-1 text-sm text-gray-500`,children:`Completá tus datos para confirmar tu pedido.`})]}),(0,F.jsxs)(`form`,{onSubmit:async n=>{if(n.preventDefault(),t.length===0){d(`Tu carrito está vacío. Agregá productos antes de continuar.`);return}d(``),l(!0);try{await new Promise(e=>{window.setTimeout(e,1800)});let t={orderNumber:`EC-${Math.random().toString(36).slice(2,8).toUpperCase()}`,total:h,totalItems:f,paymentMethod:o,customer:i,createdAt:new Date().toISOString()};r(),e(`/order-success`,{replace:!0,state:t})}catch{d(`No pudimos procesar la compra. Intentá nuevamente.`)}finally{l(!1)}},className:`grid gap-6 lg:grid-cols-[1fr_380px]`,children:[(0,F.jsxs)(`div`,{className:`space-y-6`,children:[(0,F.jsxs)(`section`,{"aria-labelledby":`customer-data-title`,className:`\r
                rounded-2xl\r
                border border-black/[0.06]\r
                bg-white\r
                p-5\r
                shadow-[0_5px_25px_rgba(3,0,71,0.05)]\r
                sm:p-6\r
              `,children:[(0,F.jsxs)(`div`,{className:`mb-5 flex items-center gap-3`,children:[(0,F.jsx)(`span`,{className:`\r
                    flex h-10 w-10\r
                    items-center justify-center\r
                    rounded-xl\r
                    bg-primary/10\r
                    text-primary\r
                  `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-user text-sm`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h2`,{id:`customer-data-title`,className:`text-base font-bold text-secondary`,children:`Datos personales`}),(0,F.jsx)(`p`,{className:`text-xs text-gray-400`,children:`Información de contacto`})]})]}),(0,F.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2`,children:[(0,F.jsx)(Kr,{label:`Nombre`,name:`firstName`,value:i.firstName,onChange:e=>g(`firstName`,e),placeholder:`Martín`,required:!0}),(0,F.jsx)(Kr,{label:`Apellido`,name:`lastName`,value:i.lastName,onChange:e=>g(`lastName`,e),placeholder:`Morondo`,required:!0}),(0,F.jsx)(Kr,{label:`Email`,name:`email`,type:`email`,value:i.email,onChange:e=>g(`email`,e),placeholder:`tu@email.com`,required:!0}),(0,F.jsx)(Kr,{label:`Teléfono`,name:`phone`,type:`tel`,value:i.phone,onChange:e=>g(`phone`,e),placeholder:`+54 9 11 1234 5678`,required:!0})]})]}),(0,F.jsxs)(`section`,{"aria-labelledby":`shipping-title`,className:`\r
                rounded-2xl\r
                border border-black/[0.06]\r
                bg-white\r
                p-5\r
                shadow-[0_5px_25px_rgba(3,0,71,0.05)]\r
                sm:p-6\r
              `,children:[(0,F.jsxs)(`div`,{className:`mb-5 flex items-center gap-3`,children:[(0,F.jsx)(`span`,{className:`\r
                    flex h-10 w-10\r
                    items-center justify-center\r
                    rounded-xl\r
                    bg-primary/10\r
                    text-primary\r
                  `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-location-dot text-sm`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h2`,{id:`shipping-title`,className:`text-base font-bold text-secondary`,children:`Dirección de envío`}),(0,F.jsx)(`p`,{className:`text-xs text-gray-400`,children:`¿Dónde entregamos tu pedido?`})]})]}),(0,F.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2`,children:[(0,F.jsx)(`div`,{className:`sm:col-span-2`,children:(0,F.jsx)(Kr,{label:`Dirección`,name:`address`,value:i.address,onChange:e=>g(`address`,e),placeholder:`Av. Corrientes 1234`,required:!0})}),(0,F.jsx)(Kr,{label:`Ciudad`,name:`city`,value:i.city,onChange:e=>g(`city`,e),placeholder:`Buenos Aires`,required:!0}),(0,F.jsx)(Kr,{label:`Provincia`,name:`province`,value:i.province,onChange:e=>g(`province`,e),placeholder:`Buenos Aires`,required:!0}),(0,F.jsx)(Kr,{label:`Código postal`,name:`postalCode`,value:i.postalCode,onChange:e=>g(`postalCode`,e),placeholder:`1000`,required:!0})]})]}),(0,F.jsxs)(`section`,{"aria-labelledby":`payment-title`,className:`\r
                rounded-2xl\r
                border border-black/[0.06]\r
                bg-white\r
                p-5\r
                shadow-[0_5px_25px_rgba(3,0,71,0.05)]\r
                sm:p-6\r
              `,children:[(0,F.jsxs)(`div`,{className:`mb-5 flex items-center gap-3`,children:[(0,F.jsx)(`span`,{className:`\r
                    flex h-10 w-10\r
                    items-center justify-center\r
                    rounded-xl\r
                    bg-primary/10\r
                    text-primary\r
                  `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-credit-card text-sm`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h2`,{id:`payment-title`,className:`text-base font-bold text-secondary`,children:`Método de pago`}),(0,F.jsx)(`p`,{className:`text-xs text-gray-400`,children:`Esta compra es una simulación`})]})]}),(0,F.jsxs)(`fieldset`,{className:`space-y-3`,children:[(0,F.jsx)(`legend`,{className:`sr-only`,children:`Seleccioná un método de pago`}),(0,F.jsx)(qr,{value:`card`,selected:o,onChange:s,icon:`fa-credit-card`,title:`Tarjeta de crédito o débito`,description:`Simular pago con tarjeta`}),(0,F.jsx)(qr,{value:`transfer`,selected:o,onChange:s,icon:`fa-building-columns`,title:`Transferencia bancaria`,description:`Simular transferencia`}),(0,F.jsx)(qr,{value:`cash`,selected:o,onChange:s,icon:`fa-money-bill-wave`,title:`Pago en efectivo`,description:`Simular pago en efectivo`})]})]}),u&&(0,F.jsxs)(`div`,{role:`alert`,className:`\r
                  rounded-xl\r
                  border border-red-200\r
                  bg-red-50\r
                  px-4 py-3\r
                  text-sm text-red-600\r
                `,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-exclamation mr-2`,"aria-hidden":`true`}),u]})]}),(0,F.jsx)(`aside`,{className:`h-fit lg:sticky lg:top-28`,"aria-label":`Resumen del pedido`,children:(0,F.jsxs)(`div`,{className:`\r
                rounded-2xl\r
                border border-black/[0.06]\r
                bg-white\r
                p-5\r
                shadow-[0_8px_30px_rgba(3,0,71,0.06)]\r
                sm:p-6\r
              `,children:[(0,F.jsxs)(`div`,{className:`mb-5 flex items-center gap-3`,children:[(0,F.jsx)(`span`,{className:`\r
                    flex h-10 w-10\r
                    items-center justify-center\r
                    rounded-xl\r
                    bg-primary/10\r
                    text-primary\r
                  `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-receipt text-sm`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h2`,{className:`text-base font-bold text-secondary`,children:`Tu pedido`}),(0,F.jsxs)(`p`,{className:`text-xs text-gray-400`,children:[f,` `,f===1?`producto`:`productos`]})]})]}),(0,F.jsx)(`div`,{className:`\r
                  max-h-[280px]\r
                  space-y-4\r
                  overflow-y-auto\r
                  pr-1\r
                `,children:t.map(e=>(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsxs)(`div`,{className:`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-background p-2`,children:[(0,F.jsx)(`img`,{src:e.cover,alt:`Imagen de ${e.name}`,className:`h-full w-full object-contain`}),(0,F.jsx)(`span`,{className:`\r
                          absolute -right-1.5 -top-1.5\r
                          flex h-5 min-w-5\r
                          items-center justify-center\r
                          rounded-full\r
                          bg-secondary\r
                          px-1\r
                          text-[9px] font-bold\r
                          text-white\r
                        `,"aria-label":`Cantidad: ${e.qty}`,children:e.qty})]}),(0,F.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,F.jsx)(`p`,{className:`\r
                          truncate\r
                          text-sm font-semibold\r
                          text-secondary\r
                        `,title:e.name,children:e.name}),(0,F.jsxs)(`p`,{className:`mt-0.5 text-xs text-gray-400`,children:[`$`,Ur(e.price),` c/u`]})]}),(0,F.jsxs)(`span`,{className:`text-sm font-bold text-secondary`,children:[`$`,Ur(e.price*e.qty)]})]},e.id))}),(0,F.jsx)(`div`,{className:`my-5 h-px bg-black/[0.06]`,"aria-hidden":`true`}),(0,F.jsxs)(`div`,{className:`space-y-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,F.jsx)(`span`,{className:`text-gray-500`,children:`Subtotal`}),(0,F.jsxs)(`span`,{className:`font-medium text-secondary`,children:[`$`,Ur(p)]})]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,F.jsx)(`span`,{className:`text-gray-500`,children:`Envío`}),m===0?(0,F.jsx)(`span`,{className:`font-semibold text-green-600`,children:`Gratis`}):(0,F.jsxs)(`span`,{className:`font-medium text-secondary`,children:[`$`,Ur(m)]})]})]}),(0,F.jsx)(`div`,{className:`my-5 h-px bg-black/[0.06]`,"aria-hidden":`true`}),(0,F.jsx)(`div`,{className:`flex items-end justify-between gap-4`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`block text-xs text-gray-400`,children:`Total`}),(0,F.jsxs)(`strong`,{className:`mt-1 block text-2xl font-extrabold text-secondary`,children:[`$`,Ur(h)]})]})}),(0,F.jsx)(`button`,{type:`submit`,disabled:c,className:`\r
                  mt-6\r
                  flex w-full\r
                  items-center justify-center gap-2\r
                  rounded-xl\r
                  bg-primary\r
                  px-5 py-3.5\r
                  text-sm font-bold text-white\r
                  shadow-lg shadow-primary/20\r
                  transition-all duration-200\r
                  hover:-translate-y-0.5\r
                  hover:shadow-primary/30\r
                  focus:outline-none\r
                  focus-visible:ring-2\r
                  focus-visible:ring-primary/40\r
                  focus-visible:ring-offset-2\r
                  disabled:cursor-not-allowed\r
                  disabled:opacity-70\r
                  disabled:hover:translate-y-0\r
                `,children:c?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{className:`\r
                        h-4 w-4\r
                        animate-spin\r
                        rounded-full\r
                        border-2\r
                        border-white/30\r
                        border-t-white\r
                      `,"aria-hidden":`true`}),(0,F.jsx)(`span`,{children:`Procesando compra...`})]}):(0,F.jsxs)(F.Fragment,{children:[`Confirmar compra`,(0,F.jsx)(`i`,{className:`fa-solid fa-arrow-right text-xs`,"aria-hidden":`true`})]})}),(0,F.jsxs)(`div`,{className:`\r
                  mt-4\r
                  flex items-center justify-center gap-2\r
                  text-[10px]\r
                  text-gray-400\r
                `,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-lock text-primary`,"aria-hidden":`true`}),`Simulación de compra segura`]})]})})]})]})})},Kr=({label:e,name:t,value:n,onChange:r,placeholder:i,type:a=`text`,required:o=!1})=>(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{htmlFor:t,className:`\r
          mb-1.5 block\r
          text-xs font-semibold\r
          text-secondary\r
        `,children:e}),(0,F.jsx)(`input`,{id:t,name:t,type:a,value:n,onChange:e=>r(e.target.value),placeholder:i,required:o,className:`\r
          h-11 w-full\r
          rounded-xl\r
          border border-black/10\r
          bg-background\r
          px-3\r
          text-sm text-secondary\r
          outline-none\r
          transition-all duration-200\r
          placeholder:text-gray-400\r
          focus:border-primary/40\r
          focus:bg-white\r
          focus:ring-2\r
          focus:ring-primary/10\r
        `})]}),qr=({value:e,selected:t,onChange:n,icon:r,title:i,description:a})=>{let o=t===e;return(0,F.jsxs)(`label`,{className:`
        flex cursor-pointer items-center gap-3
        rounded-xl
        border
        p-3.5
        transition-all duration-200

        ${o?`border-primary/30 bg-primary/5`:`border-black/[0.06] hover:border-primary/20 hover:bg-background`}
      `,children:[(0,F.jsx)(`input`,{type:`radio`,name:`paymentMethod`,value:e,checked:o,onChange:()=>n(e),className:`sr-only`}),(0,F.jsx)(`span`,{className:`
          flex h-10 w-10 shrink-0
          items-center justify-center
          rounded-xl

          ${o?`bg-primary text-white`:`bg-background text-gray-400`}
        `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid ${r} text-sm`})}),(0,F.jsxs)(`span`,{className:`min-w-0 flex-1`,children:[(0,F.jsx)(`span`,{className:`block text-sm font-semibold text-secondary`,children:i}),(0,F.jsx)(`span`,{className:`mt-0.5 block text-xs text-gray-400`,children:a})]}),(0,F.jsx)(`span`,{className:`
          flex h-5 w-5
          items-center justify-center
          rounded-full
          border

          ${o?`border-primary bg-primary text-white`:`border-gray-300`}
        `,"aria-hidden":`true`,children:o&&(0,F.jsx)(`i`,{className:`fa-solid fa-check text-[8px]`})})]})},Jr={card:`Tarjeta de crédito o débito`,transfer:`Transferencia bancaria`,cash:`Pago en efectivo`},Yr=e=>{if(!e||typeof e!=`object`)return!1;let t=e,n=t.customer;if(!n||typeof n!=`object`)return!1;let r=n;return typeof t.orderNumber==`string`&&typeof t.total==`number`&&typeof t.totalItems==`number`&&[`card`,`transfer`,`cash`].includes(String(t.paymentMethod))&&typeof t.createdAt==`string`&&typeof r.firstName==`string`&&typeof r.lastName==`string`&&typeof r.email==`string`},Xr=e=>e.toLocaleString(`es-AR`,{minimumFractionDigits:0,maximumFractionDigits:0}),Zr=()=>{let e=Ue();if(!Yr(e.state))return(0,F.jsx)(pt,{to:`/`,replace:!0});let t=e.state,n=new Date(t.createdAt).toLocaleDateString(`es-AR`,{day:`2-digit`,month:`long`,year:`numeric`});return(0,F.jsx)(`main`,{className:`min-h-[75vh] bg-background px-4 py-12 sm:px-6 lg:px-8`,children:(0,F.jsxs)(`div`,{className:`mx-auto max-w-2xl`,children:[(0,F.jsxs)(`div`,{className:`\r
            overflow-hidden\r
            rounded-3xl\r
            border border-black/[0.06]\r
            bg-white\r
            shadow-[0_12px_40px_rgba(3,0,71,0.08)]\r
          `,children:[(0,F.jsxs)(`div`,{className:`\r
              relative\r
              overflow-hidden\r
              bg-secondary\r
              px-6 py-10\r
              text-center\r
              sm:px-10\r
            `,children:[(0,F.jsx)(`div`,{className:`\r
                absolute right-0 top-0\r
                h-40 w-40\r
                rounded-full\r
                bg-primary/20\r
                blur-3xl\r
              `,"aria-hidden":`true`}),(0,F.jsx)(`div`,{className:`\r
                relative z-10\r
                mx-auto\r
                flex h-20 w-20\r
                items-center justify-center\r
                rounded-full\r
                bg-primary\r
                text-white\r
                shadow-[0_0_0_10px_rgba(233,69,96,0.12)]\r
              `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-check text-3xl`})}),(0,F.jsx)(`p`,{className:`\r
                relative z-10\r
                mt-6\r
                text-[10px] font-bold\r
                uppercase tracking-[0.18em]\r
                text-primary\r
              `,children:`Compra confirmada`}),(0,F.jsx)(`h1`,{className:`\r
                relative z-10\r
                mt-2\r
                text-2xl font-extrabold\r
                tracking-tight\r
                text-white\r
                sm:text-3xl\r
              `,children:`¡Gracias por tu compra!`}),(0,F.jsx)(`p`,{className:`\r
                relative z-10\r
                mx-auto mt-3\r
                max-w-md\r
                text-sm leading-6\r
                text-white/60\r
              `,children:`Tu pedido fue procesado correctamente. Esta es una simulación del proceso de compra.`})]}),(0,F.jsxs)(`div`,{className:`p-6 sm:p-8`,children:[(0,F.jsxs)(`div`,{className:`\r
                flex flex-col gap-3\r
                rounded-2xl\r
                border border-primary/10\r
                bg-primary/5\r
                p-4\r
                sm:flex-row\r
                sm:items-center\r
                sm:justify-between\r
              `,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`block text-[10px] font-bold uppercase tracking-wider text-primary`,children:`Número de pedido`}),(0,F.jsxs)(`strong`,{className:`mt-1 block text-lg font-extrabold tracking-wide text-secondary`,children:[`#`,t.orderNumber]})]}),(0,F.jsxs)(`div`,{className:`text-left sm:text-right`,children:[(0,F.jsx)(`span`,{className:`block text-[10px] font-bold uppercase tracking-wider text-gray-400`,children:`Fecha`}),(0,F.jsx)(`span`,{className:`mt-1 block text-sm font-medium capitalize text-secondary`,children:n})]})]}),(0,F.jsxs)(`div`,{className:`mt-6`,children:[(0,F.jsx)(`h2`,{className:`text-base font-bold text-secondary`,children:`Resumen de tu compra`}),(0,F.jsxs)(`div`,{className:`mt-4 space-y-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,F.jsx)(`span`,{className:`text-gray-500`,children:`Productos`}),(0,F.jsx)(`span`,{className:`font-medium text-secondary`,children:t.totalItems})]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,F.jsx)(`span`,{className:`text-gray-500`,children:`Método de pago`}),(0,F.jsx)(`span`,{className:`max-w-[55%] text-right font-medium text-secondary`,children:Jr[t.paymentMethod]})]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,F.jsx)(`span`,{className:`text-gray-500`,children:`Cliente`}),(0,F.jsxs)(`span`,{className:`font-medium text-secondary`,children:[t.customer.firstName,` `,t.customer.lastName]})]})]})]}),(0,F.jsx)(`div`,{className:`my-6 h-px bg-black/[0.06]`,"aria-hidden":`true`}),(0,F.jsxs)(`div`,{className:`\r
                flex items-end justify-between\r
                rounded-2xl\r
                bg-background\r
                p-4\r
              `,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`block text-xs text-gray-400`,children:`Total pagado`}),(0,F.jsxs)(`strong`,{className:`mt-1 block text-2xl font-extrabold text-secondary`,children:[`$`,Xr(t.total)]})]}),(0,F.jsxs)(`span`,{className:`\r
                  flex items-center gap-1.5\r
                  rounded-full\r
                  bg-green-50\r
                  px-3 py-1.5\r
                  text-[10px] font-bold\r
                  uppercase tracking-wider\r
                  text-green-600\r
                `,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-check`,"aria-hidden":`true`}),`Confirmado`]})]}),(0,F.jsxs)(`div`,{className:`\r
                mt-5\r
                flex items-start gap-3\r
                rounded-xl\r
                border border-black/[0.06]\r
                p-4\r
              `,children:[(0,F.jsx)(`span`,{className:`\r
                  flex h-9 w-9 shrink-0\r
                  items-center justify-center\r
                  rounded-xl\r
                  bg-primary/10\r
                  text-primary\r
                `,"aria-hidden":`true`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-envelope text-xs`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-xs font-semibold text-secondary`,children:`Confirmación`}),(0,F.jsxs)(`p`,{className:`mt-1 text-xs leading-5 text-gray-400`,children:[`En una compra real recibirías la confirmación en`,` `,(0,F.jsx)(`strong`,{className:`font-medium text-gray-600`,children:t.customer.email}),`.`]})]})]}),(0,F.jsxs)(`div`,{className:`\r
                mt-6\r
                flex flex-col gap-3\r
                sm:flex-row\r
              `,children:[(0,F.jsxs)(P,{to:`/shop`,className:`\r
                  flex flex-1\r
                  items-center justify-center gap-2\r
                  rounded-xl\r
                  bg-primary\r
                  px-5 py-3\r
                  text-sm font-semibold text-white\r
                  shadow-lg shadow-primary/20\r
                  transition-all duration-200\r
                  hover:-translate-y-0.5\r
                  hover:shadow-primary/30\r
                  focus:outline-none\r
                  focus-visible:ring-2\r
                  focus-visible:ring-primary/40\r
                  focus-visible:ring-offset-2\r
                `,children:[`Seguir comprando`,(0,F.jsx)(`i`,{className:`fa-solid fa-arrow-right text-xs`,"aria-hidden":`true`})]}),(0,F.jsx)(P,{to:`/`,className:`\r
                  flex flex-1\r
                  items-center justify-center\r
                  rounded-xl\r
                  border border-black/10\r
                  bg-white\r
                  px-5 py-3\r
                  text-sm font-semibold\r
                  text-secondary\r
                  transition-all duration-200\r
                  hover:border-primary/20\r
                  hover:bg-background\r
                  focus:outline-none\r
                  focus-visible:ring-2\r
                  focus-visible:ring-primary/30\r
                  focus-visible:ring-offset-2\r
                `,children:`Volver al inicio`})]})]})]}),(0,F.jsx)(`p`,{className:`\r
            mt-5\r
            text-center\r
            text-[10px]\r
            leading-5\r
            text-gray-400\r
          `,children:`Este checkout es una simulación. No se realizó ningún cargo real ni se procesaron datos bancarios.`})]})})},Qr=()=>{let e=Mr(e=>e.products),t=Mr(e=>e.isLoading),n=Mr(e=>e.error),r=Mr(e=>e.hasLoaded),i=Mr(e=>e.fetchProducts);return(0,y.useEffect)(()=>{!r&&!t&&i()},[r,t,i]),t&&!r?(0,F.jsx)(`main`,{className:`\r
          flex min-h-[60vh]\r
          items-center justify-center\r
          bg-background\r
          px-4\r
        `,"aria-live":`polite`,"aria-busy":`true`,children:(0,F.jsxs)(`div`,{className:`text-center`,children:[(0,F.jsx)(`div`,{className:`\r
              mx-auto\r
              h-10 w-10\r
              animate-spin\r
              rounded-full\r
              border-4\r
              border-gray-200\r
              border-t-primary\r
            `,"aria-hidden":`true`}),(0,F.jsx)(`p`,{className:`mt-4 text-sm font-medium text-gray-500`,children:`Cargando productos...`})]})}):n&&!r?(0,F.jsx)(`main`,{className:`\r
          flex min-h-[60vh]\r
          items-center justify-center\r
          bg-background\r
          px-4\r
        `,role:`alert`,children:(0,F.jsxs)(`div`,{className:`text-center`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-triangle-exclamation text-4xl text-red-500`,"aria-hidden":`true`}),(0,F.jsx)(`h1`,{className:`mt-4 text-xl font-bold text-secondary`,children:`No pudimos cargar la tienda`}),(0,F.jsx)(`p`,{className:`mt-2 text-sm text-gray-500`,children:n}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>void i(),className:`\r
              mt-5\r
              rounded-xl\r
              bg-primary\r
              px-5 py-2.5\r
              text-sm font-semibold\r
              text-white\r
              shadow-lg shadow-primary/20\r
              transition-all duration-200\r
              hover:-translate-y-0.5\r
              hover:shadow-primary/30\r
              focus:outline-none\r
              focus-visible:ring-2\r
              focus-visible:ring-primary/40\r
              focus-visible:ring-offset-2\r
            `,children:`Reintentar`})]})}):(0,F.jsx)(vr,{shopItems:e.shopItems})};b.createRoot(document.getElementById(`root`)).render((0,F.jsx)(y.StrictMode,{children:(0,F.jsx)(()=>(0,F.jsxs)(Dt,{children:[(0,F.jsx)(qt,{}),(0,F.jsxs)(gt,{children:[(0,F.jsx)(mt,{path:`/`,element:(0,F.jsx)(Pr,{})}),(0,F.jsx)(mt,{path:`/shop`,element:(0,F.jsx)(Qr,{})}),(0,F.jsx)(mt,{path:`/cart`,element:(0,F.jsx)(Fr,{})}),(0,F.jsx)(mt,{path:`/checkout`,element:(0,F.jsx)(Gr,{})}),(0,F.jsx)(mt,{path:`/order-success`,element:(0,F.jsx)(Zr,{})}),(0,F.jsx)(mt,{path:`*`,element:(0,F.jsx)(pt,{to:`/`,replace:!0})})]}),(0,F.jsx)(Rr,{})]}),{})}));