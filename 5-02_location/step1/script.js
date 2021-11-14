document.getElementById('form').select.onchange = function() {
  // location.href is where the page redirects to
  // the 'select' in select.value points to select tag and not the name value
  location.href = document.getElementById('form').select.value;
}