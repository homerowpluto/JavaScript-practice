function Main(input) {

  let s = input.split("\n")[0];
  let t = "oxxoxxoxxoxxoxx";

  for (let i = 0; i < t.length - s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] == t[i + j]) {
        flag = 1;
      } else {
        flag = 0;
        break;
      }
    }
    if (flag == 1) {
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
  let s = input.split("\n")[0];
  let t = "oxxoxxoxxoxxoxx";

  if (t.indexOf(s) >= 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}