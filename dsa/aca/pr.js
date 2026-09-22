// let num = [3, 2, 3, 2];
// let val = 3;
// function remove(num, val) {
//   let count = 0;
//   debugger;
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] !== val) {
//       num[count] = num[i];
//       count++;
//     }
//   }
//   return count;
// }
// console.log(remove(num, val));

let arr = [null, true, 4, false, 7];
debugger;
for (let s = 0, e = arr.length - 1; s <= e; s++, e--) {
  let temp = arr[s];
  arr[s] = arr[e];
  arr[e] = temp;
}
console.log(arr);
