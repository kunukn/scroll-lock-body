const attribute = 'scroll-lock-is-active';
const html = document.documentElement;

export const enable = (): void => {
  if (window.scrollY) {
    document.body.style.marginTop = `-${window.scrollY}px`;
  }
  html.setAttribute(attribute, '');
};

export const disable = (): void => {
  const scrollY = document.body.style.marginTop;
  document.body.style.marginTop = '';
  html.removeAttribute(attribute);

  if (scrollY) {
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
};

export const isEnabled = (): boolean => {
  return html.getAttribute(attribute) != null;
};
