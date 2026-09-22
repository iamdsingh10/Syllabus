/*
Library Question:

there are 10 books in the library 
you had got the three queries of the book in library 
if book is available then prints its available
no of books==10
books== a b c d e f g h i j
no of queries==3
queries== a c x

*/

let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
//----------------------------------------------------------
let noofqueries = parseInt(readLine());
let queries = [];
for (let i = 0; i < noofqueries; i++) {
  queries.push(readLine());
}
let noofbooks = parseInt(readLine());
let books = [];
for (let j = 0; j < noofbooks; j++) {
  books.push(readLine());
}

for (let i = 0; i < noofbooks; i++) {
  for (let j = 0; j < noofqueries; j++) {
    if (queries[j] == books[i]) {
      console.log(` ${queries[j]}== it is available`);
    }
  }
}
