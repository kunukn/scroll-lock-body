/*!
 * scroll-lock-body v0.0.11
 * (c) kunukn
 * Released under the MIT License.
 */

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

export { disableScrollLock, enableScrollLock, isScrollLockEnabled };
//# sourceMappingURL=index.esm.js.map
