let images = ['../assets/images/image1.jpg', '../assets/images/image2.jpg', '../assets/images/image3.jpg', '../assets/images/image4.jpg', '../assets/images/image5.jpg']
let current = 0;
let pageNum = function() {
  document.getElementById('page').textContent = (current + 1) + '/' + images.length
}
let changeImage = function(num) {
  if (current + num >= 0 && current + num < images.length) {
    current += num;
    document.getElementById('main_image').src = images[current];
    pageNum();
  }
};
let preloadImage = function(path) {
  let imgTag = document.createElement('img');
  imgTag.src = path;
}
for (let image of images) {
  preloadImage(image);
}

pageNum();

document.getElementById('prev').onclick = function() {
  changeImage(-1);
}
document.getElementById('next').onclick = function () {
  changeImage(1);
}