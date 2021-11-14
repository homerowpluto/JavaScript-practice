let images = ['../assets/images/image1.jpg', '../assets/images/image2.jpg', '../assets/images/image3.jpg', '../assets/images/image4.jpg', '../assets/images/image5.jpg']
let current = 0;
let changeImage = function(num) {
  if (current + num >= 0 && current + num < images.length) {
    current += num;
    document.getElementById('main_image').src = images[current];
  }
};

document.getElementById('prev').onclick = function() {
  changeImage(-1);
}
document.getElementById('next').onclick = function () {
  changeImage(1);
}