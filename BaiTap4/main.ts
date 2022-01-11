/** @format */
const prev :any = document.getElementById('prev');
const next : any = document.getElementById('next');
const listDot = document.getElementById('listDot');
const slides :any = document.getElementsByClassName('slides');

let slideIndex = 1;
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('li');
  listDot.appendChild(dot);
  dot.classList.add('dot');
}
const dot: any = (<any>document.querySelectorAll('.dot'));
Array.from(dot, (item: any, index:number) => {
  item.onclick = () => {
    currentSlide(index + 1);
  };
});
const plusSlides = (n:number) => {
  showSlides((slideIndex += n));
};
const currentSlide = (n:number) => {
  showSlides((slideIndex = n));
};
const showSlides = (n:number) => {
  const dots = document.querySelectorAll('.dot');
  let i:number;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
};
showSlides(slideIndex);

prev.onclick = () => plusSlides(-1);
next.onclick = () => plusSlides(1);
