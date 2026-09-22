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

let m = parseInt(readLine());
let brr = [];
for (let j = 0; j < m; j++) {
  brr[j] = parseInt(readLine());
}
let matches = 0;
if (m === 0) {
  matches = 0;
} else if (m === 1) {
  for (let i = 0; i < n; i++) {
    if (arr[1] == brr[0]) {
      matches++;
    }
  }
} else {
  for (let i = 1; i < n; i++) {
    if (arr[i] == brr[1] && arr[i - 1] == brr[0]) {
      matches++;
    }
  }
}

console.log(matches);
