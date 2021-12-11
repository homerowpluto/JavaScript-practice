function Main(input) {
  const [N, ...lines] = input.split('\n'); // splits input into each constant
  const list = [];  // list for recording count number of unique candidates

  const X = lines.filter((x, i, self) => self.indexOf(x) === i); // x is value, i is index, self is array; array.indexOf(value) === index
  console.log(X); // output unique candidate array

  for (let name of X) {
    let count = lines.filter(y => y === name).length;
    console.log(lines.filter(y => y === name));
    console.log(count);
    list.push(count);
  }
  console.log("list: " + list);
  console.log("Math.max(...list): " + Math.max(...list));
  console.log("list.indexOf(Math.max(...list)): " + list.indexOf(Math.max(...list)));
  console.log(X[list.indexOf(Math.max(...list))]);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// Below is my attempt at B, above is a referenced more smart version
// // parameter "input" gets all data
// function Main(input) {
//   let str = input.split('\n');
//   let N = parseInt(str[0], 10);

//   const names = [];
//   const votes = [];
//   names[0] = '';
//   votes[0] = 0;
//   names[1] = str[1];
//   votes[1] = 1;
//   for (let i = 2; i <= N; i++) {
//     for (let j = 1; j <= names.length; j++) {
//       if (String(names[j]).localeCompare(String(str[i])) == 0) {
//         votes[j]++;
//       } else if (j === names.length - 1) {
//         names.push(str[i]);
//         votes.push(1);
//       }
//     }
//   }

//   const max = Math.max(...votes);
//   const indexOfMax = votes.indexOf(max);

//   console.log('%s', names[indexOfMax]);
// }
// // Don't edit this line!
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));