/*! For license information please see app~2391dffc.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkc624_ps006=self.webpackChunkc624_ps006||[]).push([[194],{4707:(t,e,a)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(){r=function(){return e};var t,e={},a=Object.prototype,o=a.hasOwnProperty,i=Object.defineProperty||function(t,e,a){t[e]=a.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",d=s.toStringTag||"@@toStringTag";function u(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,a){return t[e]=a}}function p(t,e,a,n){var r=e&&e.prototype instanceof b?e:b,o=Object.create(r.prototype),s=new z(n||[]);return i(o,"_invoke",{value:S(t,a,s)}),o}function m(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var h="suspendedStart",f="suspendedYield",g="executing",v="completed",y={};function b(){}function w(){}function k(){}var x={};u(x,l,(function(){return this}));var L=Object.getPrototypeOf,C=L&&L(L(K([])));C&&C!==a&&o.call(C,l)&&(x=C);var j=k.prototype=b.prototype=Object.create(x);function D(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function a(r,i,s,l){var c=m(t[r],t,i);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==n(u)&&o.call(u,"__await")?e.resolve(u.__await).then((function(t){a("next",t,s,l)}),(function(t){a("throw",t,s,l)})):e.resolve(u).then((function(t){d.value=t,s(d)}),(function(t){return a("throw",t,s,l)}))}l(c.arg)}var r;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,r){a(t,n,e,r)}))}return r=r?r.then(o,o):o()}})}function S(e,a,n){var r=h;return function(o,i){if(r===g)throw Error("Generator is already running");if(r===v){if("throw"===o)throw i;return{value:t,done:!0}}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var l=_(s,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=g;var c=m(e,a,n);if("normal"===c.type){if(r=n.done?v:f,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}function _(e,a){var n=a.method,r=e.iterator[n];if(r===t)return a.delegate=null,"throw"===n&&e.iterator.return&&(a.method="return",a.arg=t,_(e,a),"throw"===a.method)||"return"!==n&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var o=m(r,e.iterator,a.arg);if("throw"===o.type)return a.method="throw",a.arg=o.arg,a.delegate=null,y;var i=o.arg;return i?i.done?(a[e.resultName]=i.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=t),a.delegate=null,y):i:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function K(e){if(e||""===e){var a=e[l];if(a)return a.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function a(){for(;++r<e.length;)if(o.call(e,r))return a.value=e[r],a.done=!1,a;return a.value=t,a.done=!0,a};return i.next=i}}throw new TypeError(n(e)+" is not iterable")}return w.prototype=k,i(j,"constructor",{value:k,configurable:!0}),i(k,"constructor",{value:w,configurable:!0}),w.displayName=u(k,d,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,u(t,d,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},D(E.prototype),u(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new E(p(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},D(j),u(j,d,"Generator"),u(j,l,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),a=[];for(var n in e)a.push(n);return a.reverse(),function t(){for(;a.length;){var n=a.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=K,z.prototype={constructor:z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var a in this)"t"===a.charAt(0)&&o.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var a=this;function n(n,r){return s.type="throw",s.arg=e,a.next=n,r&&(a.method="next",a.arg=t),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=t,i.arg=e,r?(this.method="next",this.next=r.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),P(a),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var n=a.completion;if("throw"===n.type){var r=n.arg;P(a)}return r}}throw Error("illegal catch attempt")},delegateYield:function(e,a,n){return this.delegate={iterator:K(e),resultName:a,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function o(t,e,a,n,r,o,i){try{var s=t[o](i),l=s.value}catch(t){return void a(t)}s.done?e(l):Promise.resolve(l).then(n,r)}function i(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var i=t.apply(e,a);function s(t){o(i,n,r,s,l,"next",t)}function l(t){o(i,n,r,s,l,"throw",t)}s(void 0)}))}}a.d(e,{A:()=>s}),a(6879),a(2552);const s={render:function(){return i(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <header class="hero d-flex align-items-center justify-content-between ps-5 py-5" style="margin-bottom:80px; margin-top:10px;">\n        <div class="hero-content-container w-50">\n            <h1 class="fw-bold pb-4" style="color:#4D869C; font-size:70px">Selamat Datang di Benah Kota!</h1>\n            <p class="fs-6 fw-normal pb-3" style="color:#4D869C;">Benah Kota merupakan platform terpadu untuk meningkatkan kesadaran dan partisipasi masyarakat dalam menjaga kelestarian lingkungan dan fasilitas kota. Di sini, Anda bisa melaporkan kerusakan fasilitas umum, mengikuti tantangan ramah lingkungan, mendukung proyek komunitas, dan mengakses informasi real-time tentang kondisi lingkungan sekitar Anda.</p>\n            <div class="d-flex gap-3">\n              <a href="#" class="btn btn-success btn-lg bg-light rounded-5 pt-2 pb-2 ps-4 pe-4 fs-5 fw-medium" style="color:#4D869C;">Lihat Permasalahan <i class="bi bi-eye ps-1"></i></a>\n              <a href="/#/lapor" class="btn btn-success btn-lg rounded-5 pt-2 pb-2 ps-4 pe-4 fs-5 fw-medium" style="background-color:#4D869C;">Lapor Sekarang! <i class="bi bi-flag-fill ps-1"></i></i></a>\n            </div>\n        </div>\n        <div class="hero-image-container d-flex align-items-center justify-content-center w-50">\n          <img class="hero-image h-75 w-75 rounded-5 lazyload" data-src="../../images/kota3.jpg">\n\n        </div>\n    </header>\n\n  <div class="strength-container m-5" style="height:80vh;">\n    <div class="title-container p-4">\n        <h1 class=" title-text fw-bold text-center fs-1" style="color:#4D869C;">Keunggulan Kami</h1>\n    </div>\n    <div class="card-container d-flex flex-wrap">\n      <div class="row row-cols-1 row-cols-md-4 g-4">\n        <div class="col">\n          <div class="card border-0 shadow-lg rounded-4 h-100">\n            <div class="image-container rounded-circle overflow-hidden mx-auto my-3" style="width: 150px; height: 150px; background-color:#4D869C;">\n              <img data-src="../../images/deadline.png" class="card-img-top w-100 h-100 lazyload" alt="gambar-waktu" style="object-fit: cover;">\n            </div>\n            <div class="card-body">\n              <h5 class="card-title text-center fs-4 fw-semibold pb-2" style="color:#4D869C;">Cepat dan Responsif</h5>\n              <p class="card-text text-center" style="color:#4D869C;">Laporkan kerusakan fasilitas kota dan dapatkan tanggapan yang cepat serta solusi yang efisien dari pihak berwenang.</p>\n            </div>\n          </div>  \n        </div>\n        <div class="col">\n          <div class="card border-0 shadow-lg rounded-4 h-100">\n            <div class="image-container rounded-circle overflow-hidden mx-auto my-3" style="width: 150px; height: 150px; background-color:#4D869C;">\n              <img data-src="../../images/collaboration.png" class="card-img-top w-100 h-100 p-3 lazyload" alt="gambar-waktu" style="object-fit: cover;">\n            </div>\n            <div class="card-body">\n              <h5 class="card-title text-center fs-4 fw-semibold pb-2" style="color:#4D869C;">Kolaborasi Multi-Stakeholder</h5>\n              <p class="card-text text-center" style="color:#4D869C;">Kerjasama antara masyarakat, pemerintah, dan organisasi untuk solusi efektif terhadap upaya pelestarian lingkungan.</p>\n            </div>\n          </div>  \n        </div>\n        <div class="col">\n          <div class="card border-0 shadow-lg rounded-4 h-100">\n            <div class="image-container rounded-circle overflow-hidden mx-auto my-3" style="width: 150px; height: 150px; background-color:#4D869C;">\n              <img data-src="../../images/real-time.png" class="card-img-top w-100 h-100 p-3 lazyload" alt="gambar-waktu" style="object-fit: cover;">\n            </div>\n            <div class="card-body">\n              <h5 class="card-title text-center fs-4 fw-semibold pb-2" style="color:#4D869C;">Data Real-Time</h5>\n              <p class="card-text text-center" style="color:#4D869C;">Status dan perkembangan laporan kerusakan fasilitas kota dapat dilihat secara real-time dan transparan.</p>\n            </div>\n          </div>  \n        </div>\n        <div class="col">\n          <div class="card border-0 shadow-lg rounded-4 h-100">\n            <div class="image-container rounded-circle overflow-hidden mx-auto my-3" style="width: 150px; height: 150px; background-color:#4D869C;">\n              <img data-src="../../images/quality-of-life.png" class="card-img-top w-100 h-100 p-3 lazyload" alt="gambar-waktu" style="object-fit: cover;">\n            </div>\n            <div class="card-body">\n              <h5 class="card-title text-center fs-4 fw-semibold pb-2" style="color:#4D869C;">Peningkatan Kualitas Hidup</h5>\n              <p class="card-text text-center" style="color:#4D869C;">Berkontribusi langsung pada peningkatan kualitas hidup, kesehatan, dan kesejahteraan masyarakat.</p>\n            </div>\n          </div>  \n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="story-containerer d-flex justify-content-center mx-5 mb-5">\n    <img data-src="../../images/damaged-road-2.jpg" class="img-fluid h-50 w-50 rounded-start-1 shadow-lg mb-5 bg-body-tertiary rounded lazyload" alt="...">\n    <div class="story-content rounded-end-1 p-4" style="background-color:#4D869C">\n      <h2 class="text-light fw-bold fs-1 pb-4 pt-3 ">Cerita Kami</h2>\n      <p class="text-light text-start fw-normal pb-4 fs-5 fst-italic">"Benah Kota lahir dari keprihatinan kami terhadap kondisi lingkungan dan fasilitas umum di kota yang sering kali mengalami kerusakan tanpa perhatian yang memadai. Oleh karena itu, kami menciptakan platform ini untuk memberdayakan masyarakat dalam melaporkan kerusakan fasilitas kota dan meningkatkan kesadaran akan pentingnya menjaga kelestarian lingkungan."</p>\n      <p class="text-light text-start fw-normal fs-5 fst-italic fw-semibold">Gesya Reihan, CEO of Benah Kota</p>\n    </div>\n  </div>\n  \n  \n\n  <div class="problem-container my-4">\n    <div class="title-container p-4"> \n      <h1 class=" title-text fw-bold text-center fs-1" style="color:#4D869C;">Permasalahan yang Sudah Selesai </h1>\n    </div>\n\n    <div class="row row-cols-1 row-cols-md-4 g-4 p-4">\n      <div class="col">\n        <div class="card h-100">\n          <img data-src="../../images/damaged-road-2.jpg" class="card-img-top lazyload" alt="...">\n          <div class="card-body">\n            <h5 class="card-title" style="color:#4D869C;">Lorem ipsum dolor sit amet</h5>\n            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n          </div>\n        </div>\n      </div>\n      <div class="col">\n        <div class="card h-100">\n          <img data-src="../../images/damaged-road-2.jpg" class="card-img-top lazyload" alt="...">\n          <div class="card-body">\n            <h5 class="card-title" style="color:#4D869C;">Lorem ipsum dolor sit amet</h5>\n            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n          </div>\n        </div>\n      </div>\n      <div class="col">\n        <div class="card h-100">\n          <img data-src="../../images/damaged-road-2.jpg" class="card-img-top lazyload" alt="...">\n          <div class="card-body">\n            <h5 class="card-title" style="color:#4D869C;">Lorem ipsum dolor sit amet</h5>\n            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n          </div>\n        </div>\n      </div>\n      <div class="col">\n        <div class="card h-100">\n          <img data-src="../../images/damaged-road-2.jpg" class="card-img-top lazyload" alt="...">\n          <div class="card-body">\n            <h5 class="card-title" style="color:#4D869C;">Lorem ipsum dolor sit amet</h5>\n            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    <div class="detail-problem-container d-flex justify-content-end"> \n      <a href="#" class="pt-2 pb-2 ps-4 pe-4 fs-6 fw-semibold me-5" style="color:#4D869C; text-decoration:none;">Lihat Selengkapnya <i class="bi bi-arrow-right ps-1"></i></a>\n    </div>\n  </div>\n\n  <div class="contact-container d-flex justify-content-around m-5">\n    <div class="contact-content rounded-start-4 rounded-end-4 p-4" style="background-color:#4D869C; width:35%;">\n      <div class="contact-content-title d-flex justify-content-center">\n        <h2 class="text-light fw-bold fs-1 pb-4 pt-5 ">Kontak Kami</h2>\n      </div>\n      <div>\n        <div class="mb-3">\n          <label for="exampleFormControlInput1" class="form-label text-light">Nama</label>\n          <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="cth: jajang">\n        </div>\n        <div class="mb-3">\n          <label for="exampleFormControlInput1" class="form-label text-light">Alamat Email</label>\n          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nama@gmail.com">\n        </div>\n        <div class="mb-3">\n          <label for="exampleFormControlTextarea1" class="form-label text-light">Pesan</label>\n          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>\n        </div>\n        <div class="col-auto mt-4 d-flex justify-content-around">\n          <button type="submit" class="btn btn-light btn-md mb-3 w-25 ms-2 fw-medium" style="color:#4D869C;">Submit</button>\n        </div>\n      </div>\n    </div>\n\n  <img data-src="../../images/contact.svg" class="img-fluid w-50 lazyload" alt="...">\n  </div>\n   ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return i(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=app~2391dffc.bundle.js.map