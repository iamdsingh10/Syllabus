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
}
let result = -1;
for (let i = 0; i < n; i++) {
  let greatestCount = 0;
  let p = arr[i];
  for (let j = 0; j < n; j++) {
    if (arr[j] > p) {
      greatestCount++;
    }
  }
  if (greatestCount == p) {
    result = 1;
  }
}
console.log(result);
