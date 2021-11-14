let lang = document.querySelector('html').lang;

let opt;
if (lang === 'ja') {
  opt = document.querySelector('option[value="index.html"');
} else if (lang === 'en') {
  opt = document.querySelector('option[value="index-en.html"');
} else if (lang === 'zh') {
  opt = document.querySelector('option[value="index-zh.html"');
}
opt.selected = true;

document.getElementById('form').select.onchange = function() {
  // location.href is where the page redirects to
  // the 'select' in select.value points to select tag and not the name value
  location.href = document.getElementById('form').select.value;
}