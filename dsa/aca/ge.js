let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function ge(arr) {
  let max = arr[arr.length - 1];
  arr[arr.length - 1] = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = Math.max(arr[i + 1], max);
    max = Math.max(temp, max);
  }
  return arr;
}
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(parseInt(readLine()));
}

let res = ge(arr);
for (ele of res) {
  console.log(ele);
}
