let thumbs = document.querySelectorAll('.thumb');

for (let thumb of thumbs) {
  thumb.onclick = function() {
    document.getElementById('bigimg').src = this.dataset.image;
  };
}