// parameter "input" gets all data
function Main(input) {
  const [V,A,B,C] = input.split('\n')[0].split(' ').map(d => Number(d)); // array version of parseInt

  let total = V;
  while (total >= 0) {
    total -= A;
    if (total < 0) {
      console.log('F');
      break;
    }
    total -= B;
    if (total < 0) {
      console.log('M');
      break;
    }
    total -= C;
    if (total < 0) {
      console.log('T');
      break;
    }
  }
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));