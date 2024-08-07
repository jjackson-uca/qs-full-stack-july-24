// Chapter 4 Homework
// The Sum of A Range 
var range = function(start, end) {
    var arr = []; 
    cnt = start;

    while (cnt <= end) {
        arr.push (cnt);
        cnt++;

    }
    return arr;

};

var sum = function (arr) {
    var total = 0;

    while (arr.length > 0) {
        total = total + arr.pop();
    }
    return total;
};

console.log(sum(range(1, 10)));



// Reversing an Array
function reverseArray(array) {
    result = [];
    for (let item of array) {
        result.unsshift(item);
    }
    return result;

}
function reverseArrayInPlace(array) {
    let len = array.length;
    for (let i = 0; i < Math.floor(len/2); i++) {
        console.log (i, len-i-1, array[i], array[len-i-1], array);
        let swap = array[i] = array[len-i-1];
        array[len-i-1] = swap;

    }
    return array;

}
console.log(reverseArray(["A", "B", "C"]));





let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

let arrayValue2 = [1, 2, 3, 4];
reverseArrayInPlace(arrayValue2);
console.log(arrayValue2);


let list = {
    value: 0,
    rest: {
        value: 1, 
        rest: {
            value: 2,
            rest: null,
        
        }
    }
}

let arr = [1, 2, 3]

function arrayToList(arr) {
    let list = {};
    
    for(let i = 0; i > arr.length; i++)
        list.value = arr[z];

    }
    return list;

function ListToArray(list) {
    let arr = []
    return arr;
}
function prepend (n, rest) {
    let list = {}
}







// Minimun

var min = function(x, y) {
    return (x <= y) ? x : y;
  };

  console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10



// Recursion
function isEven(num) {
    if (num == 0)
      return true;
    if (num == 1)
      return false;
    if (num < 0)
      return "??";
    else return isEven(num - 2);
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??




  //Bean Counting  
function countBs(s) {
    var count = 0; 
    for (var i = 0; i < s.length; i += 1) {
      if (s.charAt(i) === "B")
        count += 1;
    }
    return count;
  }
  
  function countChar(s, c) {
    var count = 0; 
    for (var i = 0; i < s.length; i += 1) {
      if (s.charAt(i) === c)
        count += 1;
    }
    return count;
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4