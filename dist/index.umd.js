/*!
 * scroll-lock-body v0.0.3
 * (c) kunukn
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.scrollLockBody = {}));
}(this, (function (exports) { 'use strict';

  var attribute = 'scroll-lock-is-active';
  var html = document.documentElement;
  var enable = function () {
      if (window.scrollY) {
          document.body.style.marginTop = "-" + window.scrollY + "px";
      }
      html.setAttribute(attribute, '');
  };
  var disable = function () {
      var scrollY = document.body.style.marginTop;
      document.body.style.marginTop = '';
      html.removeAttribute(attribute);
      if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
  };
  var isEnabled = function () {
      return html.getAttribute(attribute) != null;
  };

  exports.disable = disable;
  exports.enable = enable;
  exports.isEnabled = isEnabled;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
