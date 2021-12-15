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