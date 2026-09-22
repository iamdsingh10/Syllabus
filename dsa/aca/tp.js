let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
/*Transpose Matrix
You are given m arrays. Each array contains n elements. Represented as a matrix, this has m rows and n columns. Your task is to transpose the matrix and output the result.

You have a matrix as array of arrays as input returns a transposed matrix as array of arrays.

Matrix transpose
Given a matrix:

 a b c d

 e f g h
the transpose is:

 a e
 b f
 c g
 d h
Input
The first line contains m, denoting the number of arrays

This is followed by m lines each containing n integers separated by space

Output
n lines should contain each row of the matrix, with the elements separated by a space

Example
Input:

3

1 2 3 4

5 6 7 8

9 10 11 12

Output:

1 5 9

2 6 10

3 7 11

4 8 12

You just have to return transformed matrix as a array, printing is taken care of by the judge. */
let n = parseInt(readLine());
let matrix = [];
for (i = 0; i < n; i++) {
  matrix.push(readLine().split(" ").map(Number));
}
let rows = n;
let cols = matrix[0].length;
let tp = [];

for (let col = 0; col < cols; col++) {
  let temp = [];
  for (let row = 0; row < rows; row++) {
    temp.push(matrix[row][col]);
  }
  tp.push(temp);
  console.log(tp);
}
for (let i = 0; i < cols; i++) {
  console.log(tp[i].join(" "));
}
