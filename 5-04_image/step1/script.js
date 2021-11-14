let thumbs = document.querySelectorAll('.thumb');

for (let thumb of thumbs) {
  thumb.onclick = function() {
    console.log(this.dataset.image);
  };
}