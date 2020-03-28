function onScroll() {
  let active_nav = document.getElementsByClassName('active_nav')[0];
  const nav_links = document.getElementsByClassName('header__nav__item--link');

  if (window.pageYOffset < 420) {
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


const allSlides = document.querySelectorAll('section.slider--item');

function getActiveSlide() {
  return document.querySelector('section.active_slide');
}

function getActiveNumber() {
  for (let i = 0; i < allSlides.length; i += 1) {
    if (allSlides[i] === getActiveSlide()) return i;
  }
}

function delSlideStyles(a, b) {
  a.style.right = '';
  a.style.left = '';
  b.style.right = '';
  b.style.left ='';
}

function sliderLeft() {
  document.querySelector('section.main__slider__left-arrow').removeEventListener('click', sliderLeft);
  document.querySelector('section.main__slider__right-arrow').removeEventListener('click', sliderRight);
  let active = getActiveSlide();
  let num = getActiveNumber();
  let next;
  if (num == 0) next = allSlides.length - 1;
  else next = num - 1;
  console.log(num, next)
  const animate = setInterval(frame, 10);
  let pos = 100;
  function frame() {
    if (pos == 0) {
      clearInterval(animate);
      document.querySelector('section.main__slider__left-arrow').addEventListener('click', sliderLeft);
      document.querySelector('section.main__slider__right-arrow').addEventListener('click', sliderRight);
    }
    else {
      pos--;
      active.style.left = (100 - pos) + '%';
      allSlides[next].style.right = pos + '%';
    }
  }
  active.classList.remove('active_slide');
  allSlides[next].classList.add('active_slide');
  delSlideStyles(active, allSlides[next]);
}

function sliderRight() {
  document.querySelector('section.main__slider__left-arrow').removeEventListener('click', sliderLeft);
  document.querySelector('section.main__slider__right-arrow').removeEventListener('click', sliderRight);
  let active = getActiveSlide();
  let num = getActiveNumber();
  let next;
  if (num == allSlides.length - 1) next = 0
  else next = num + 1;
  const animate = setInterval(frame, 10);
  let pos = 100;
  function frame() {
    if (pos == 0) {
      clearInterval(animate);
      document.querySelector('section.main__slider__left-arrow').addEventListener('click', sliderLeft);
      document.querySelector('section.main__slider__right-arrow').addEventListener('click', sliderRight);
    }
    else {
      pos--;
      
      active.style.right = (100 - pos) + '%';
      allSlides[next].style.left = pos + '%'
    }
  }
  delSlideStyles(active, allSlides[next]);
  active.classList.remove('active_slide');
  allSlides[next].classList.add('active_slide');
}

function portfolioActive() {
  if (event.target.parentElement != document.querySelector('section.portfolio')) {
    document.querySelector('section.porfolio__projects__item.active_portfolio').classList.remove('active_portfolio');
    event.target.parentElement.classList.add('active_portfolio');
  }
}

function portfolioTag() {
  let active_tag = document.querySelector('.active_portfolio_tag');
  if (event.target.nodeName == 'A') {
    active_tag.classList.remove("active_portfolio_tag");
    event.target.classList.add("active_portfolio_tag");
    let portfolioItems = document.querySelectorAll('section.porfolio__projects__item');
    if (active_tag != event.target) {
      let newArr = Array.prototype.slice.call(portfolioItems).sort(() => Math.random() - 0.5);
      newArr.forEach(element => {
        document.querySelector('section.portfolio__projects').appendChild(element)
      });
    }
  };
}

const form = document.forms.contact_form;

function formPush() {
  let sbj;
  let text;
  if (!form.name.validity.valid) alert('Enter the correct name')
  else {
    if (!form.email.validity.valid) alert('Enter the correct email!')
    else {
      if (!form.subject.value) sbj = 'No subject';
      else sbj = 'Subject: ' + form.subject.value;
      if (!form.text.value) text = 'No description'
      else text = 'Description: ' + form.text.value
      alert("The letter was sent" + "\n\r"
        + sbj + "\n\r"
        + text);
    }

  }

}

document.querySelector('section.main__slider__left-arrow').addEventListener('click', sliderLeft);
document.querySelector('section.main__slider__right-arrow').addEventListener('click', sliderRight);
document.querySelector('section.portfolio__projects').addEventListener('click', portfolioActive);
document.querySelector('section.portfolio__tags').addEventListener('click', portfolioTag)
window.onload = onScroll;
form.submit.addEventListener('click', formPush);
document.getElementById("nav").addEventListener("click", onScroll);
window.addEventListener('scroll', onScroll);