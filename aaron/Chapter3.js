//exercise1

function min(a, b) {
    if (a < b) return a;
    else return b;
  }
  
  console.log(min(0, 10));
  
  console.log(min(0, -10));
  
  //exercise2
  
  function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n)
    else return isEven (n - 2);
  }
  
  console.log(isEven(50));
  
  console.log(isEven(75));
  
  console.log(isEven(-1));
  
  //exercise3
  
  function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
  
  console.log(countBs("BBC"));
  
  console.log(countChar("kakkerlak", "k"));