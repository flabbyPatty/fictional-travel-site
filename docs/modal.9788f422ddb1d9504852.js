(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{17:function(n,e,s){"use strict";function i(n,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}s.r(e);var o=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.injecHTML(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.events()}var e,s,o;return e=n,(s=[{key:"events",value:function(){var n=this;this.closeIcon.addEventListener("click",(function(){return n.closeTheModal()})),document.addEventListener("keyup",(function(e){return n.keyPressHandler(e)}))}},{key:"keyPressHandler",value:function(n){27==n.keyCode&&this.closeTheModal()}},{key:"openTheModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeTheModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"injecHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n      <div class="modal">\n        <div class="modal__inner">\n          <h2\n            class="section-title section-title--blue section-title--less-margin"\n          >\n            <img src="assets/images/icons/mail.svg" class="section-title__icon" />\n            Get in <strong>Touch</strong>\n          </h2>\n          <div class="wrapper wrapper--narrow">\n            <p class="modal__description">\n              We will have an online order system in place soon. Until then,\n              connect with us on any of the platforms below!\n            </p>\n          </div>\n\n          <div class="social-icons">\n            <a href="#" class="social-icons__icon"\n              ><img src="assets/images/icons/facebook.svg" alt="Facebook"\n            /></a>\n            <a href="#" class="social-icons__icon"\n              ><img src="assets/images/icons/twitter.svg" alt="Twitter"\n            /></a>\n            <a href="#" class="social-icons__icon"\n              ><img src="assets/images/icons/instagram.svg" alt="Instagram"\n            /></a>\n            <a href="#" class="social-icons__icon"\n              ><img src="assets/images/icons/youtube.svg" alt="YouTube"\n            /></a>\n          </div>\n        </div>\n        <div class="modal__close">X</div>\n      </div>\n    ')}}])&&i(e.prototype,s),o&&i(e,o),n}();e.default=o}}]);