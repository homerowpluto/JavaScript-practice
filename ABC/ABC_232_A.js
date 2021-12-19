// parameter "input" gets all data
function Main(input) {
  input = input.split("\n")[0];
  let a = parseInt(input.split("")[0], 10);
  let b = parseInt(input.split("")[2], 10);


  console.log(a * b);
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));