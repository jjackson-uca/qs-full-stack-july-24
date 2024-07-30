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