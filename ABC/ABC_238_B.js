// parameter "input" gets all data
function Main(input) {
  // set input variables
  const N = input.split('\n')[0];
  const [...A] = input.split('\n')[1].split(' ').map(d => Number(d)); // array version of parseInt

  let lines= new Array(); // init array
  lines[0] = 0; // first line in pizza
  let deg = 0; // next degree marker

  for (let i = 0; i < N; i++) { // amount of lines
    deg += A[i];
    if (deg >= 360) {
      deg %= 360;
    }

    lines.push(deg); // set line in pizza at degree
  }

  lines.sort((a, b) => a - b); // sort from smallest to largest

  let max = 0;
  if (lines[lines.length - 1] < 180) {
    max = 360 - lines[lines.length - 1]; // when the remainder is greater than the counted lines
  } else {
    for (let i = 1; i < lines.length; i++) {
      if (max < lines[i] - lines[i - 1]) {
        max = lines[i] - lines[i - 1]; // when the slice is greater than current max slice
      }
    }
  }

  console.log(max);
  // console.log(lines);
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));