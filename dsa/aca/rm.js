let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let n = parseInt(readLine());
let matrix = [];
for (let i = 0; i < n; i++) {
  let arr = readLine().split(" ");
  for (let j = 0; j < arr.length; j++) {
    arr[j] = parseInt(arr[j]);
  }
  matrix.push(arr);
}
let rotatedMatrix = [];
for (let col = 0; col < matrix[0].length; col++) {
  let row = [];
  for (let j = matrix.length - 1; j >= 0; j--) {
    row.push(matrix[j][col]);
  }
  rotatedMatrix.push(row);
}
console.log(rotatedMatrix.length);
for (row of rotatedMatrix) {
  console.log(...row);
}
