const { match } = require("assert");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let n = parseInt(readLine());
let m = parseInt(readLine());
let arr = readLine().split(" ").map(Number);
let brr = readLine().split(" ").map(Number);
if (n == 1) {
}
let max = -Infinity;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let prod = Math.abs(arr[i] * brr[j]);
    if (prod > max) {
      max = prod;
    }
  }
}
console.log(max);
