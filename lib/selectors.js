// Main selectors
export const logo = document.querySelector(".logo");
export const back_bird = document.querySelector(".back-bird");
export const fore_bird = document.querySelector(".fore-bird");
export const clothes_pics = document.querySelector(".clothes-pics");
export const large_window = document.querySelector(".large-window");
export const window_tint = document.querySelector(".window-tint");

// Util functions
export const setCss = (el, props) =>
  el.style &&
  Object.keys(props).forEach(key => {
    el.style[key] = props[key];
  });

export const getDeepChildren = (el, childrenSelector) =>
  el && Array.from(el.querySelectorAll(childrenSelector));

export const normalize = ({ value, min, max }) => (value - min) / (max - min);
