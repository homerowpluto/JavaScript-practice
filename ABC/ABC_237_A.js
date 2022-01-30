// parameter "input" gets all data
function Main(input) {
  input = input.split("\n")[0];
  input = parseInt(input, 10);
  if (input >= -(Math.pow(2, 31)) && input <= Math.pow(2, 31) - 1) {
    console.log('Yes');
  } else {
    console.log('No');
  }


}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));