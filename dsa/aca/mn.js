function mn(seats, students) {
  let count = 0;
  for (let i = 0; i < seats.length; i++) {
    let diff = seats[i] - students[i];
    if (diff < 0) {
      count = count + diff * -1;
    } else {
      count = count + diff;
    }
  }
  return count;
}

let seats = [3, 1, 5];
let students = [2, 7, 4];

seats.sort((a, b) => a - b);
students.sort((a, b) => a - b);

console.log(mn(seats, students));
