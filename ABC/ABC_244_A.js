// parameter "input" gets all data
function Main(input) {
  const N = parseInt(input.split('\n')[0], 10);
  const S = input.split('\n')[1];

  console.log(S[N - 1]);
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));