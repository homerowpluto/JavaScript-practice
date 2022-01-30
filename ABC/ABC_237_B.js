function Main(input) {
  input = input.trim().split("\n");
  let H = parseInt(input[0].split(" ")[0], 10);
  let W = parseInt(input[0].split(" ")[1], 10);

  let arrA = new Array(H);
  for (let i = 0; i < H; i++) {
    arrA[i] = input[i + 1].split(" ").map((n) => parseInt(n));
  }

  let arrB = Array.from(Array(W), () => new Array(H));
  for (let i = 0; i < W; i++) {
    for (let j = 0; j < H; j++) {
      arrB[i][j] = arrA[j][i];
    }
    console.log(arrB[i].join(" "));
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));