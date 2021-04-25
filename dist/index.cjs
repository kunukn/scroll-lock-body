/*!
 * scroll-lock-body v0.0.2
 * (c) kunukn
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
//# sourceMappingURL=index.cjs.map
