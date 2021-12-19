function Main(input) {
  let S = input.split("\n")[0];
  let T = input.split("\n")[1];
  let K = 0;
  let flag = 1;
  for (let offset = 1; offset < 26; offset++) {
    let offsetChar = S.charCodeAt(0) + offset;
    if (offsetChar > 122) {
      offsetChar -= 26;
    }
    if (T.charCodeAt(0) == offsetChar) {
      K = offset;
      break;
    }
  }

  for (let i = 1; S.length - 1 >= i; i++) {
    let charCode = S.charCodeAt(i) + K;
    if (charCode > 122) {
      charCode -= 26;
    }
    if (T.charCodeAt(i) != charCode) {
      flag = 0;
      break;
    }
  }

  if (flag == 1) {
    console.log('Yes');
  } else {
    console.log('No');
  }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function Main2(input) {
  var [s, t] = input.trim().split("\n"); // good practice to trim?
  var result = true; // same as flag
  var k = (t.charCodeAt(0) - s.charCodeAt(0) + 26) % 26; // get k offset
  for (var i = 1; i < s.length; i++) {
    if (k != (t.charCodeAt(i) - s.charCodeAt(i) + 26) % 26) { // check the offset instead of the actual letter
      result = false;
      break;
    }
  }
  console.log(result ? "Yes" : "No");
}