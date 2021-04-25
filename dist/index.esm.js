/*!
 * scroll-lock-body v0.0.2
 * (c) kunukn
 * Released under the MIT License.
 */

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

export { disable, enable };
//# sourceMappingURL=index.esm.js.map
