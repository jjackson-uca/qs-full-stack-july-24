
function every(array, test_function){
    for(let i = 0; i < array.length; i++){
        if(test_function(array[i]) == false){
            return false;
        } 
    }
    return true;
}

//unsure 
function every_some(array, test_function){
   return !array.some(test_function);
}

console.log(every_some([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

