// 21/12/16 2:35~3:00 (0:25経過)

function Main(input) {
  input = input.split("\n");
  let A = input[0].split(" ")[0].split("");
  let B = input[0].split(" ")[1].split("");

  let max = Math.max(A.length, B.length);
  let min = Math.min(A.length, B.length);
  let diff = max - min;
  let flag = 0;

  if (B.length == max) {
    for (let i = B.length - 1; i >= 0; i--) {
      let size = parseInt(B[i], 10) + parseInt(A[i - diff], 10);
      if (size >= 10) {
        flag = 1;
        break;
      }
    }
  } else {
    for (let i = A.length - 1; i >= 0; i--) {
      let size = parseInt(A[i], 10) + parseInt(B[i - diff], 10);
      if (size >= 10) {
        flag = 1;
        break;
      }
    }
  }

  if (flag === 1) {
    console.log("Hard");
  } else {
    console.log("Easy");
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function Main2(input) {
  input = input.split("\n");
  let A = input[0].split(" ")[0];
  let B = input[0].split(" ")[1];
  let i;
  for (i = 1; i <= A.length && i <= B.length; i++) {
    let size = parseInt(A.slice(-i)[0], 10) + parseInt(B.slice(-i)[0], 10);
    if (size >= 10) {
      console.log("Hard");
      break;
    }
  }
  if (i > A.length || i > B.length) {
    console.log("Easy");
  }
}