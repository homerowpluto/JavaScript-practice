// parameter "input" gets all data
function Main(input) {
  const [A,B,C,X] = input.split('\n')[0].split(' ').map(d => Number(d)); // array version of parseInt

  if (X <= A) {
    console.log(1);
  }
  if (B < X) {
    console.log(0);
  }
  if (A < X && X <= B) {
    let p = C / (B - A);
    console.log(p);
  }
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));