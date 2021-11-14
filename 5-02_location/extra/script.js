let lang = document.querySelector('html').lang;

let opt;
switch (lang) {
  case 'ja':
    opt = document.querySelector('option[value="index.html"');
    break;
  case 'en':
    opt = document.querySelector('option[value="index-en.html"');
    break;
  case 'zh':
    opt = document.querySelector('option[value="index-zh.html"');
    break;

  default:
    break;
}
opt.selected = true;

document.getElementById('form').select.onchange = function() {
  // location.href is where the page redirects to
  // the 'select' in select.value points to select tag and not the name value
  location.href = document.getElementById('form').select.value;
}