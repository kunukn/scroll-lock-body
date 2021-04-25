/*!
 * scroll-lock-body v0.0.2
 * (c) kunukn
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var attribute = 'scroll-lock-is-active';
var enable = function () {
    if (window.scrollY) {
        document.body.style.marginTop = "-" + window.scrollY + "px";
    }
    document.documentElement.setAttribute(attribute, '');
};
var disable = function () {
    var scrollY = document.body.style.marginTop;
    document.body.style.marginTop = '';
    document.documentElement.removeAttribute(attribute);
    if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
};

exports.disable = disable;
exports.enable = enable;
//# sourceMappingURL=index.cjs.map
