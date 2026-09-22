let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
} //----------------------------------------------------------------
let t = parseInt(readLine());

for (let i = 0; i < t; i++) {
  let n = parseInt(readLine());
  let arr = readLine().split(" ").map(Number);

  function findFirstPeak(arr, n) {
    if (n === 1) return 1; // if there's only one element, it's the peak

    for (let j = 0; j < n; j++) {
      if (j === 0 && arr[j] >= arr[j + 1]) return j + 1;
      if (j === n - 1 && arr[j] >= arr[j - 1]) return j + 1;
      if (j > 0 && j < n - 1 && arr[j] >= arr[j - 1] && arr[j] >= arr[j + 1])
        return j + 1;
    }
    return -1; // if no peak element is found
  }

  console.log(findFirstPeak(arr, n));
}
