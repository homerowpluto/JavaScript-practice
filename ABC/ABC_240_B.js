// parameter "input" gets all data
function Main(input) {
  // set input variables
  const N = parseInt(input.split('\n')[0], 10);
  const [...A] = input.split('\n')[1].split(' ').map(d => Number(d)); // array version of parseInt

  let unique= new Array(); // init array
  unique[0] = A[0];
  let index = 1;


  for (let i = 1; i < N; i++) { // amount of lines
    let flag = 0;
    for (let j = 0; j < index; j++) {
      if (unique[j] == A[i]) {
        flag = 0;
        break;
      } else {
        flag = 1;
      }
      if (flag == 1 && j == index - 1) {
        unique[j + 1] = A[i];
        index++;
      }
    }
  }

  console.log(unique.length);
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));