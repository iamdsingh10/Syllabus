// find the largest element

// first way that came into my mind
let arr = [4, 5, 6, 3, 2, 7, 8];
// let n = arr.length;
// arr.sort((a, b) => a - b);
// console.log(arr[n - 1]);

// best way

let n = arr.length;
let large = arr[0];
for (let i = 1; i < n; i++) {
  if (arr[i] > large) {
    large = arr[i];
  }
}
console.log(large);
