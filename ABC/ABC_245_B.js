// parameter "input" gets all data
function Main(input) {
  // Initialize input variables
  const N = parseInt(input.split('\n')[0], 10);
  const [...A] = input.split('\n')[1].split(' ').map(d => Number(d));

  // Initialize output variable
  let min = 0;

  for (let i = 0; i < N; i++) {
    // Check for update of lowest integer
    if (A[i] == min) {
      // update lowest integer to check
      min++;

      // reset loop
      i = -1;
    }
  }

  // Display results
  console.log(min);
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));