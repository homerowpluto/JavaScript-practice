// parameter "input" gets all data
function Main(input) {
  // set input variables
  const [N, M] = input.split('\n')[0].split(' ').map(d => Number(d)); // array version of parseInt
  let [...A] = input.split('\n')[1].split(' ').map(d => Number(d)); // array version of parseInt
  const [...B] = input.split('\n')[2].split(' ').map(d => Number(d)); // array version of parseInt

  let flag = 0;

  for (let i = 0; i < M; i++) { // amount of days
    for (let j = 0; j < N; j++) {
      if (B[i] == A[j]) {
        flag = 0;
        A[j] = null;
        break;
      } else {
        flag = 1;
      }
      if (flag == 1 && j == N - 1) {
        console.log('No');
        break;
      }
    }
    if (flag == 1) {
      break;
    }
  }

  if (flag == 0) {
    console.log('Yes');
  }
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));