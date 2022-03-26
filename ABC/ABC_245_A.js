// parameter "input" gets all data
function Main(input) {
  const [A, B, C, D] = input.split('\n')[0].split(' ').map(d => Number(d)); // array version of parseInt

  if (A < C) {
    console.log('Takahashi');
  } else if (A == C && B <= D) {
    console.log('Takahashi');
  } else {
    console.log('Aoki');
  }
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));