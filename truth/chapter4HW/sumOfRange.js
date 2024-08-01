function range(start,end){
    const numArray = [];
    numArray[0] = start;
    for(let i = start+1; i < end;){
        numArray.push(i);
        i++;
    }
    numArray.push(end);
    
    return numArray;
}

console.log(range(1,10));


function sum(start,end){
    const numArray = range(start,end);
    let sum = 0;
    for(let i = 0; i < numArray.length; i++){
        sum += numArray[i];
    }
    return sum;
}

console.log(sum(1,10));

