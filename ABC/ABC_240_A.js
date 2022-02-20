// parameter "input" gets all data
function Main(input) {
  const [a,b] = input.split('\n')[0].split(' ').map(d => Number(d)); // array version of parseInt

  if (a + 1 == b || (a == 1 && b == 10) ) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));