// parameter "input" gets all data
function Main(input) {
  input = input.split("\n")[0];
  input = parseInt(input, 10);
  if (Math.pow(2, input) > Math.pow(input, 2)) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));