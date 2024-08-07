// Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((array1, array2) => array1.concat(array2)))


// your own loop
function loop(value, test, update, execute) {
    if (test(value)) {
      execute(value);
      return loop(update(value), test, update, execute);
    } // else stop
  }
  loop(3, n => n > 0, n => n - 1, console.log);

//   this one I need to review 


// classwork 8/1
let tempcar = {
    year: 3030, 
    make: 'subie', 
    model: '344'
}
let 
