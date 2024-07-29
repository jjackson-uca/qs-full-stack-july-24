var count = 0;
var firstName = "steven";
var lastName = "guatemala";
var fullName =  firstName+' '+lastName;

console.log(count, firstName, lastName, fullName)

// Looping a triangle
for (let line = "#"; line.length < 8; line += "#")
    console.log(line);
// 

// FizzBuzz

function FizzBuzz(n) {
    let result = [];
    
    for (let i =1; i<= n; ++i) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            
            result.push ("FizzBuzz");
        }

        else if (i % 3 === 0) {
            
            result.push ("Fizz");
        }

        else if (i % 5 === 0) {

            result.push ("Buzz")
        }
        else {

            result.push(i.toString());
        }
    }

    return result;
}

let n = 100;

let result = FizzBuzz (n);

console.log(result.join(''))



// Chessboard
var board = "";

for (var y = 1; y < 5; y++) {
  
  for (var x =1; x < 5; x++) {
    
    if (y % 2 === 0) {
      
      board = "" + board;
      board += "#";
    }
    else {
      board += "#";
    }
  }
  board += "/n"
}

console.log(board);