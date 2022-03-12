// parameter "input" gets all data
function Main(input) {
  const N = parseInt(input.split('\n')[0], 10);
  const [...A] = input.split('\n')[1].split(' ').map(d => Number(d));
  const [...B] = input.split('\n')[2].split(' ').map(d => Number(d));

  let pos = 0;
  let val = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] == B[i]) {
      pos++;
      A[i] = 0;
      B[i] = 0;
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if ((A[i] != 0 || B[j] != 0) && A[i] == B[j]) {
        val++;
      }
    }
  }
  console.log(pos + '\n' + val);
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));