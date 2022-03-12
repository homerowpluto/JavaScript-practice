// parameter "input" gets all data
function Main(input) {
  // Initialize input variables
  const N = parseInt(input.split('\n')[0], 10);
  const [...A] = input.split('\n')[1].split(' ').map(d => Number(d));
  const [...B] = input.split('\n')[2].split(' ').map(d => Number(d));

  // Initialize output variables
  let pos = 0; // position checker
  let val = 0; // value checker

  for (let i = 0; i < N; i++) {
    // Check for same value at same position
    if (A[i] == B[i]) {
      pos++;

      // Reset variables already accounted for
      A[i] = 0;
      B[i] = 0;
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // Check for same value at different positions, ignoring values already accounted for
      if ((A[i] != 0 || B[j] != 0) && A[i] == B[j]) {
        val++;
      }
    }
  }

  // Display results
  console.log(pos + '\n' + val);
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));