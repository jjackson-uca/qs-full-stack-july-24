

for(let number = 1; number <101; number += 1){
    if(number % 5 == 0 && number % 3 == 0){
        console.log("FizzBuzz");
    } else if (number % 5 == 0 && number % 3 != 0){
        console.log("Buzz");
    } else if (number % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(number);
    }
}