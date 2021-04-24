const cssClass = 'scroll-lock-body-is-active';

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

export const enable = (): void => {
  if (window.scrollY) {
    document.body.style.marginTop = `-${window.scrollY}px`;
  }
  document.documentElement.classList.add(cssClass);
};

export const disable = (): void => {
  const scrollY = document.body.style.marginTop;
  document.body.style.marginTop = '';
  document.documentElement.classList.remove(cssClass);

  if (scrollY) {
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
};
