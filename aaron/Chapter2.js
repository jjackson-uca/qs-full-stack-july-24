//exercise 1
for (let hash = "#"; hash <= "#######"; hash = hash + "#") {
    console.log(hash);
  }

//exercise 2
for (let number = 1; number <= 100; number++) {
    let output = "";
    if (number % 3 == 0) output += "Fizz";
    if (number % 5 == 0) output += "Buzz";
    console.log(output || number);
  }
//exercise 3
let size = 8;

let board = "";

for (let y = 0; y < size; y++)  {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);