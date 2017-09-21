export function isMobile(){
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export function isSmallDevice(){
  return window.matchMedia( "(max-width: 480px)" ).matches;
}

export function isMinWidth30em(){
  return window.matchMedia( "(min-width: 30em)" ).matches;
}

export function isMinWidth30emAndMaxWidth60em(){
  return window.matchMedia( "(min-width: 30em)" ).matches
    && window.matchMedia( "(max-width: 60em)" ).matches;
}
