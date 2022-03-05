// parameter "input" gets all data
function Main(input) {
  // set input variables
  // split('') => into character array
  // sort() => sort character array
  // join('') => back into a string
  const S = input.split('\n')[0].split('').sort().join('');

  console.log(S);
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));