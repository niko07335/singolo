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


function portfolioActive(){
  if(event.target.parentElement != document.querySelector('section.portfolio')){
    document.querySelector('section.porfolio__projects__item.active_portfolio').classList.remove('active_portfolio');
    event.target.parentElement.classList.add('active_portfolio');
  }
}

function portfolioTag(){
  let active_tag = document.querySelector('.active_portfolio_tag');
  if (event.target.nodeName == 'A'){
    active_tag.classList.remove("active_portfolio_tag");
    event.target.classList.add("active_portfolio_tag");
    let portfolioItems = document.querySelectorAll('section.porfolio__projects__item');
    if (active_tag != event.target){
      let newArr = Array.prototype.slice.call(portfolioItems).sort(() => Math.random() - 0.5);
      newArr.forEach(element => {
        document.querySelector('section.portfolio__projects').appendChild(element)
      });
    }
  };
}


document.querySelector('section.portfolio__projects').addEventListener('click', portfolioActive);
document.querySelector('section.portfolio__tags').addEventListener('click', portfolioTag)
window.onload = onScroll;

document.getElementById("nav").addEventListener("click", onScroll);
window.addEventListener('scroll',onScroll);