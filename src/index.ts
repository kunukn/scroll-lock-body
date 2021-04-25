const attribute = 'scroll-lock-is-active';

export const enable = (): void => {
  if (window.scrollY) {
    document.body.style.marginTop = `-${window.scrollY}px`;
  }
  document.documentElement.setAttribute(attribute, '');
};

export const disable = (): void => {
  const scrollY = document.body.style.marginTop;
  document.body.style.marginTop = '';
  document.documentElement.removeAttribute(attribute);

  if (scrollY) {
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
};

export const isEnabled = (): boolean => {
  return !!document.documentElement.getAttribute(attribute);
};
