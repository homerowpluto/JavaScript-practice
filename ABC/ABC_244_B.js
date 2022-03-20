// parameter "input" gets all data
function Main(input) {
  // Initialize input variables
  const N = parseInt(input.split('\n')[0], 10);
  const [...T] = input.split('\n')[1].split('');

  // Initialize output variables
  let x = 0;
  let y = 0;

  let r_cnt = 0; // rotate angle

  for (let i = 0; i < N; i++) {
    if (T[i] == 'R') {
      r_cnt++;
      r_cnt %= 4;
      continue;
    }

    if (T[i] == 'S') {
      switch (r_cnt) {
        // Facing East
        case 0:
          x++;
          break;
        // Facing South
        case 1:
          y--;
          break;
        // Facing West
        case 2:
          x--;
          break;
        // Facing North
        case 3:
          y++;
          break;

        default:
          break;
      }
    }
  }

  // Display results
  console.log(x + ' ' + y);
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));