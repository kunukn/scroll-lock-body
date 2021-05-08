const attribute = 'data-scroll-lock-is-active';
const html = document.documentElement;

export const enableScrollLock = (): void => {
  if (window.scrollY) {
    document.body.style.marginTop = `-${window.scrollY}px`;
  }
  html.setAttribute(attribute, '');
};

export const disableScrollLock = (): void => {
  const scrollY = document.body.style.marginTop;
  document.body.style.marginTop = '';
  html.removeAttribute(attribute);

  if (scrollY) {
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
};

export const isScrollLockEnabled = (): boolean => {
  return html.getAttribute(attribute) != null;
};
