// parameter "input" gets all data
function Main(input) {
  const [...a] = input.split('\n')[0].split(' ').map(d => Number(d)); // array version of parseInt

  let index = 0;

  for (let i = 0; i < 3; i++) {
    index = a[index];
  }
  console.log(index);
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));