// had help 
let arrays = [[1, 2, 3], [4, 5], [6]];

const flatten = arrays.reduce((x, y) => x.concat(y));

console.log(flatten);