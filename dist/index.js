/*!
 * scroll-lock-body v0.0.10
 * (c) kunukn
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var attribute = 'data-scroll-lock-is-active';
var html = document.documentElement;
var enableScrollLock = function () {
    if (window.scrollY) {
        document.body.style.marginTop = "-" + window.scrollY + "px";
    }
    html.setAttribute(attribute, '');
};
var disableScrollLock = function () {
    var scrollY = document.body.style.marginTop;
    document.body.style.marginTop = '';
    html.removeAttribute(attribute);
    if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
};
var isScrollLockEnabled = function () {
    return html.getAttribute(attribute) != null;
};

exports.disableScrollLock = disableScrollLock;
exports.enableScrollLock = enableScrollLock;
exports.isScrollLockEnabled = isScrollLockEnabled;
//# sourceMappingURL=index.js.map
