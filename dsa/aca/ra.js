let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
} //----------------------------------------------------------------
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = parseInt(readLine());
}

let indices = [];
for (let i = 0; i < n; i++) {
  indices[i] = parseInt(readLine());
}

let target = [];
for (let i = 0; i < n; i++) {
  if (indices[i] >= target.length) {
    target = target.concat([arr[i]]);
  } else {
    target = target
      .slice(0, indices[i])
      .concat([arr[i]])
      .concat(target.slice(indices[i]));
  }
}
for (let i = 0; i < n; i++) {
  console.log(target[i]);
}
