/* const article3 = document.querySelector('.article3');

const scrolled = (e) => {
  e.preventDefault();
  article3.scrollLeft += e.deltaY;
}
article3.addEventListener('wheel', scrolled); */

const article3 = document.querySelector('.article3');
const sticky = document.querySelector('.article3_sticky');
const article3_img = document.querySelector('.article3_img');

const calcHt = (ht) => {
  return ht.scrollWidth - document.documentElement.clientWidth + document.documentElement.clientHeight;
}

console.log('calcHt:', calcHt(article3_img));
article3.style.height = `${calcHt(article3_img)}px`;

const scrolled = () => {
  console.log('sticky.offsetTop:', sticky.offsetTop);
  article3_img.style.transform = `translateX(-${sticky.offsetTop}px)`;
}

addEventListener('scroll', scrolled);