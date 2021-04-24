/*!
 * scroll-lock-body v0.0.1
 * (c) kunukn
 * Released under the MIT License.
 */

var cssClass = 'scroll-lock-body-is-active';
/*
Required CSS

html {
  overflow-y: scroll;
}
html.scroll-lock-body-is-active > body {
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
}
body {
  margin: 0;
  overflow-y: auto;
}
*/
var enable = function () {
    if (window.scrollY) {
        document.body.style.marginTop = "-" + window.scrollY + "px";
    }
    document.documentElement.classList.add(cssClass);
};
var disable = function () {
    var scrollY = document.body.style.marginTop;
    document.body.style.marginTop = '';
    document.documentElement.classList.remove(cssClass);
    if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
};

export { disable, enable };
//# sourceMappingURL=index.esm.js.map
