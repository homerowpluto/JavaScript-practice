// parameter "input" gets all data
function Main(input) {
  let D = input;

  console.log(D / 100);
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));