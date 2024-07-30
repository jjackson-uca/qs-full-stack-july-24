


const prompt = require('prompt-sync')();
let size = Number(prompt("Pick a size for the chessboard"));
if(!Number.isNaN(size)){
for(let number = 1; number < (size+1); number += 1){
    if(number % 2 != 0){
        let chessString = " # # # #\n";
        console.log(chessString)
    } else {
        let chessString = "# # # # \n";
        console.log(chessString)
    }
}
} else {
    console.log("Please enter a number");
}