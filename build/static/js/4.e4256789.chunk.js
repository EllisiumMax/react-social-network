(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[4],{100:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"b",(function(){return a}));var n=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce((function(e,r){return e||r(t)}),void 0)}},o=function(t){return t?void 0:"This field can't be empty"},i=function(t){return function(e){return e&&e.length>t?"Maximum length not more than ".concat(t," symbols"):void 0}},a=function(t){return t.match(/^\S+@\S+\.\S+$/gi)?void 0:"Email not valid"}},103:function(t,e,r){t.exports=r(104)},104:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function m(){}function g(){}function y(){}var b={};b[i]=function(){return this};var j=Object.getPrototypeOf,w=j&&j(j(S([])));w&&w!==r&&n.call(w,i)&&(b=w);var x=y.prototype=m.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:C}}function C(){return{value:e,done:!0}}return g.prototype=x.constructor=y,y.constructor=g,g.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),u(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},105:function(t,e,r){t.exports={window:"LoginWindow_window__2JKvS",container:"LoginWindow_container__3eZUA",serverErrors:"LoginWindow_serverErrors__VTs25",background:"LoginWindow_background__2zn6x",captchaContainer:"LoginWindow_captchaContainer__3zwhc",captcha:"LoginWindow_captcha__32g8S"}},116:function(t,e,r){"use strict";r.r(e);var n=r(103),o=r.n(n);function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}var a=r(3),c=(r(0),r(35)),u=r(11),s=r(4),l=r(18),h=r(13),f=r(98),p=r(100),d=r(105),v=r.n(d),m=r(1);var g=function(t){return Object(m.jsx)(c.b,{onSubmit:function(){var e,r=(e=o.a.mark((function e(r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.login(r);case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))});return function(t){return r.apply(this,arguments)}}(),render:function(e){var r=e.handleSubmit,n=e.submitting,o=e.pristine;return Object(m.jsx)("div",{className:v.a.window,children:Object(m.jsxs)("form",{onSubmit:r,className:v.a.container,children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsx)(c.a,{name:"email",component:f.a,validate:Object(p.a)(p.d,p.b)}),Object(m.jsx)(c.a,{name:"password",component:f.b,validate:p.d}),Object(m.jsxs)("div",{children:[Object(m.jsx)(c.a,{name:"rememberMe",component:"input",type:"checkbox"}),Object(m.jsx)("label",{children:" Remember me?"})]}),t.errorMessages?t.errorMessages.map((function(t){return Object(m.jsx)("div",{className:v.a.serverErrors,children:t})})):null,t.captcha?Object(m.jsxs)("div",{className:v.a.captchaContainer,children:[Object(m.jsx)("img",{className:v.a.captcha,src:t.captcha}),Object(m.jsx)(c.a,{component:"input",type:"input",name:"captcha",autoComplete:"off",placeholder:"CAPTCHA",maxLength:7})]}):null,Object(m.jsx)("button",{type:"submit",disabled:n||o,children:"Submit"})]})})}})};e.default=Object(u.b)((function(t){return{isLogged:Object(h.g)(t),errorMessages:Object(h.c)(t),errorCodes:Object(h.b)(t),captcha:Object(h.a)(t)}}),{login:l.c})((function(t){return t.isLogged?Object(m.jsx)(s.a,{to:"profile"}):Object(m.jsx)(g,Object(a.a)({},t))}))},98:function(t,e,r){"use strict";r.d(e,"c",(function(){return c})),r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return s}));var n=r(3),o=(r(0),r(99)),i=r.n(o),a=r(1),c=function(t){var e=t.input,r=t.meta;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:i.a.inputWrapper,children:[Object(a.jsx)("textarea",Object(n.a)(Object(n.a)({},e),{},{placeholder:"Please enter your text here"})),r.error&&r.touched&&Object(a.jsxs)("span",{className:i.a.errorMessage,children:[" \u26a0 ",r.error]})]})})},u=function(t){var e=t.input,r=t.meta;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:i.a.inputWrapper,children:[Object(a.jsx)("input",Object(n.a)(Object(n.a)({},e),{},{type:"email",placeholder:"Email",autoComplete:"off"})),r.error&&r.touched&&Object(a.jsxs)("span",{className:i.a.errorMessage,children:[" \u26a0 ",r.error]})]})})},s=function(t){var e=t.input,r=t.meta;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:i.a.inputWrapper,children:[Object(a.jsx)("input",Object(n.a)(Object(n.a)({},e),{},{type:"password",placeholder:"Password"})),r.error&&r.touched&&Object(a.jsxs)("span",{className:i.a.errorMessage,children:[" \u26a0 ",r.error]})]})})}},99:function(t,e,r){t.exports={inputWrapper:"fieldComponents_inputWrapper__1KlTK",errorMessage:"fieldComponents_errorMessage__1Tnfx",background:"fieldComponents_background__2GTi7"}}}]);
//# sourceMappingURL=4.e4256789.chunk.js.map