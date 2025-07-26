let slider = document.querySelector(".image-container");
let image = document.getElementsByClassName("image");
let totalImg = image.length;

let index = 0;

document.getElementById('next').addEventListener('click', () => {
  index++;
  if (index >= totalImg) index = 0;
  slider.style.transform = `translateX(-${index * 500}px)`;
});

document.getElementById('prev').addEventListener('click', () => {
  index--;
  if (index < 0) index = totalImg - 1;
  slider.style.transform = `translateX(-${index * 500}px)`;
});



