/*! For license information please see app~6440a34d.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkc624_ps006=self.webpackChunkc624_ps006||[]).push([[848],{975:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(3761),o=r(5470);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(){i=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var a=t&&t.prototype instanceof v?t:v,i=Object.create(a.prototype),s=new F(n||[]);return o(i,"_invoke",{value:S(e,r,s)}),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var m="suspendedStart",h="suspendedYield",y="executing",g="completed",b={};function v(){}function w(){}function x(){}var k={};d(k,c,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(N([])));L&&L!==r&&n.call(L,c)&&(k=L);var j=x.prototype=v.prototype=Object.create(k);function _(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function r(o,i,s,c){var l=p(e[o],e,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==a(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,s,c)}),(function(e){r("throw",e,s,c)})):t.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return r("throw",e,s,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function S(t,r,n){var o=m;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var c=O(s,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=p(t,r,n);if("normal"===l.type){if(o=n.done?g:h,l.arg===b)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=g,n.method="throw",n.arg=l.arg)}}}function O(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var a=p(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,b;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function N(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(a(t)+" is not iterable")}return w.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=d(x,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,d(e,u,"GeneratorFunction")),e.prototype=Object.create(j),e},t.awrap=function(e){return{__await:e}},_(P.prototype),d(P.prototype,l,(function(){return this})),t.AsyncIterator=P,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new P(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(j),d(j,u,"Generator"),d(j,c,(function(){return this})),d(j,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,b):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),I(r),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},t}function s(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){s(a,n,o,i,c,"next",e)}function c(e){s(a,n,o,i,c,"throw",e)}i(void 0)}))}}const l={render:function(){return c(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n        <main class="mx-auto bg-gradient-primary col-lg-4 container row justify-content-center col-md-60 col-lg-6 card o-hidden border-0 card-body p-5" style="background-color: transparent;">\n          <section class="text-center">\n            <h1 class="h4 text-gray-900 mb-4 fw-bolder">Registrasi</h1>\n          </section>\n          <form id="registerForm" class="user">\n            <section class="form-group">\n              <label for="username" style="color:#4D869C; margin-left: 0.5rem; margin-bottom: 3px; font-weight: bolder;">Username</label>\n              <input type="text" id="username" minlength="6" name="username" required pattern=".{6,}" class="form-control form-control-user" style="border-radius: 13px; border: 1.4px solid #ccc;" placeholder="Arjuna" required>\n              <div class="form-text text-body-secondary" style="margin-left: 0.8rem; font-size: 14px;" id="basic-addon4">Minimal 6 karakter</div>\n            </section>\n            <br>\n            <section class="form-group" style="margin-top: -0.7rem;">\n              <label for="lokasi" style="color:#4D869C; margin-left: 0.5rem; margin-bottom: 3px; font-weight: bolder;">Lokasi</label>\n              <input type="text" id="lokasi" minlength="4" name="lokasi" class="form-control form-control-user" style="border-radius: 13px; border: 1.4px solid #ccc;" placeholder="Palu" required>\n              <div class="form-text text-body-secondary" style="margin-left: 0.8rem; font-size: 14px;" id="basic-addon4">Minimal 4 karakter</div>\n              </section>\n            <br>\n            <section class="form-group" style="margin-top: -0.7rem;">\n              <label for="noWa" style="color:#4D869C; margin-left: 0.5rem; margin-bottom: 3px; font-weight: bolder;">No Whatsapp</label>\n              <input type="text" id="noWa" minlength="9" name="noWa" pattern="\\d*" class="form-control form-control-user" style="border-radius: 13px; border: 1.4px solid #ccc;" placeholder="0812334567" required>\n              <div class="form-text text-body-secondary" style="margin-left: 0.8rem; font-size: 14px;" id="basic-addon4">Minimal 9 karakter, hanya angka</div>\n              </section>\n            <br>\n            <section class="form-group" style="margin-top: -0.7rem;">\n              <label for="password" style="color:#4D869C; margin-left: 0.5rem; margin-bottom: 3px; font-weight: bolder;">Password</label>\n              <input type="password" minlength="6" id="password" name="password" class="form-control form-control-user" style="border-radius: 13px; border: 1.4px solid #ccc;" placeholder="secr3t" required>\n              <div class="form-text text-body-secondary" style="margin-left: 0.8rem; font-size: 14px;" id="basic-addon4">Minimal 6 karakter</div>\n              </section>\n            <br>\n            <section class="form-group" style="margin-top: -0.7rem;">\n              <label for="ulangipassword" style="color:#4D869C; margin-left: 0.5rem; margin-bottom: 3px; font-weight: bolder;">Ulangi Password</label>\n              <input type="password" minlength="6" id="ulangipassword" name="ulangipassword" class="form-control form-control-user" style="border-radius: 13px; border: 1.4px solid #ccc;" placeholder="secr3t" required>\n              <div class="form-text text-body-secondary" style="margin-left: 0.8rem; font-size: 14px;" id="basic-addon4">Minimal 6 karakter</div>\n              </section>\n            <br>\n            <section class="form-group" style="margin-left: 0.5rem; margin-top: -0.7rem;">\n              <label for="peran" style="color:#4D869C; font-weight: bolder; margin-bottom: 3px;">Registrasi sebagai</label>\n              <select id="peran" name="peran" class="form-control rounded-3" style="border-radius: 13px; border: 1.4px solid #ccc;" required>\n                <option value="user">User</option>\n                <option value="admin">Admin</option>\n                <option value="pembenah">Pembenah</option>\n              </select>\n            </section>\n            <br>\n            <button type="submit" id="btnRegistrasi" class="btn btn-primary btn-user btn-block" style="border-radius: 13px; border: 1.4px solid #ccc;; margin-top: 1rem; width: 100%; color: #FFFFFF; background-color: #4D869C;">Registrasi</button>\n          </form>\n          <br>\n          <section class="text-center">\n            <p style="color:#000;">Sudah memiliki akun? <a href="#/login" style="color:#00008B; text-decoration: underline;">Silahkan login !!</a></p>\n          </section>\n          <br>\n        </main>\n      ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return c(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("btnRegistrasi"),document.getElementById("noWa").addEventListener("input",(function(e){var t=e.target,r=t.value,n=r.replace(/\D/g,"");n!==r&&(t.value=n)})),t.addEventListener("click",function(){var e=c(i().mark((function e(t){var r,a,s,c,l,u,d,f,p,m,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.A.open({type:"info",message:"<b>Registrasi diproses, tunggu sebentar</b>"}),r=document.getElementById("username").value,a=document.getElementById("lokasi").value,s=document.getElementById("noWa").value,c=document.getElementById("password").value,l=document.getElementById("ulangipassword").value,u=document.getElementById("peran").value,!(r.length<6||a.length<4||s.length<9||c.length<6||l.length<6)){e.next=11;break}return n.A.open({type:"error",duration:7e3,message:"<b>Pastikan data diisi dengan minimal karakter yang sesuai.</b>"}),e.abrupt("return");case 11:if(c===l){e.next=14;break}return n.A.open({type:"error",duration:7e3,message:"<b>Password dan Ulangi Password harus sama!</b>"}),e.abrupt("return");case 14:return e.prev=14,e.next=17,fetch("https://fuzzy-mag-bidwi-7f3836df.koyeb.app/pengguna?api_key=".concat(o.A.KEY));case 17:return d=e.sent,e.next=20,d.json();case 20:if(f=e.sent,d.ok){e.next=23;break}throw new Error(f.message||"Gagal memeriksa ketersediaan username dan noWa.");case 23:if(!f.data.infoPengguna.find((function(e){return e.username===r||e.noWa===s}))){e.next=27;break}return n.A.open({type:"error",duration:7e3,message:"<b>Username/No. Whatsapp sudah terdaftar, coba yang lain</b>"}),e.abrupt("return");case 27:return p={username:r,lokasi:a,noWa:s,password:c,peran:u},e.next=30,fetch("https://fuzzy-mag-bidwi-7f3836df.koyeb.app/pengguna?api_key=".concat(o.A.KEY),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)});case 30:return m=e.sent,e.next=33,m.json();case 33:h=e.sent,m.ok?(n.A.open({type:"success",duration:7e3,message:"<b>Registrasi berhasil!</b>"}),localStorage.setItem("UserId",h.data.infoId),window.location.href="#/login"):n.A.open({type:"error",duration:7e3,message:"<b>Registrasi gagal: ".concat(h.message,"</b>")}),e.next=40;break;case 37:e.prev=37,e.t0=e.catch(14),n.A.open({type:"error",duration:7e3,message:"<b>Terjadi kesalahan. Silakan coba lagi.</b>"});case 40:case"end":return e.stop()}}),e,null,[[14,37]])})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})))()}}}}]);
//# sourceMappingURL=app~6440a34d.bundle.js.map