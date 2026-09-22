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
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = parseInt(readLine());
  arr[i] = arr[i] * arr[i];
}

arr.sort((a, b) => a - b);
for (let i = 0; i < n; i++) {
  console.log(arr[i]);
}
