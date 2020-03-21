function onScroll(){
  let active_nav = document.getElementsByClassName('active_nav')[0];
  const nav_links = document.getElementsByClassName('header__nav__item--link');

  if (window.pageYOffset< 420) {
  active_nav.classList.remove("active_nav");
  nav_links[0].classList.add("active_nav");
  }
  else if (window.pageYOffset >= 420 && window.pageYOffset < 930) {
    active_nav.classList.remove("active_nav");
    nav_links[1].classList.add("active_nav");
  }
  else if (window.pageYOffset >= 930 && window.pageYOffset < 1850) {
    active_nav.classList.remove("active_nav");
    nav_links[2].classList.add("active_nav");
  }
  else if (window.pageYOffset >= 1850 && window.pageYOffset < 2562) {
    active_nav.classList.remove("active_nav");
    nav_links[3].classList.add("active_nav");
  }
  else if (window.pageYOffset >= 2562) {
    active_nav.classList.remove("active_nav");
    nav_links[4].classList.add("active_nav");
  }
}







window.onload = onScroll;

document.getElementById("nav").addEventListener("click", onScroll);
window.addEventListener('scroll',onScroll);