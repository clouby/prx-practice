import "./styles/main.stylus";
import {
  logo,
  back_bird,
  fore_bird,
  clothes_pics,
  large_window,
  window_tint,
  setCss,
  getDeepChildren,
  normalize
} from "./lib/selectors";

window.onscroll = function() {
  // Get `pxs` scrolled from above.
  const w_scroll = this.scrollY;

  // Set parallax to Logo
  setCss(logo, {
    transform: `translate(0px, ${w_scroll / 2}%)`
  });

  // Set parallax to Back Bird
  setCss(back_bird, {
    transform: `translate(0px, ${w_scroll / 4}%)`
  });

  // Set parallax to Fore Bird
  setCss(fore_bird, {
    transform: `translate(0px, -${w_scroll / 40}%)`
  });

  if (w_scroll > clothes_pics.offsetTop - window.innerHeight / 1.5) {
    getDeepChildren(clothes_pics, "figure").forEach((el, index) => {
      setCss(el, { transitionDelay: `${150 * (index + 1)}ms` });
      el.classList.add("is-showing");
    });
  }

  if (w_scroll > large_window.offsetTop - large_window.clientHeight * 0.6) {
    setCss(large_window, {
      backgroundPosition: `center ${w_scroll - 300} px`
    });

    const opacity = normalize({
      value: w_scroll,
      min: large_window.offsetTop,
      max: large_window.offsetTop + large_window.clientHeight
    });

    setCss(window_tint, {
      opacity
    });
  }
};
