//work done on my own
/*

function reverseArray(array){
    let newArray = [];
    let arrayCopy = array.slice();
    let lastNum;
    for (let i = 0; i <arrayCopy.length; i++){
        if (arrayCopy.length = 1){
            newArray.push(array[0]);
        } else {
            lastNum = arrayCopy.pop();
            newArray.push(lastNum);
        }
        

    }
    return newArray;
}


let tom = ["A", "B", "C"];

console.log(reverseArray(tom));
*/

// Looked up solution due to running out of time

function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
  }
  
  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }

  console.log(reverseArray(["A", "B", "C"]));
  let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);