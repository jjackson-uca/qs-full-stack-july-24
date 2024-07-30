

function countBs(string){
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] == "B"){
            count += 1;
        } 
        
    }
    return count;
    
}


function countChar(string, a){
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] == a){
            count += 1;
        } 
        
    }
    return count;

}





console.log(countBs("BOBBBB"));
console.log(countChar("kakkerlak", "k"));
console.log(countChar("truth", "t"));
console.log(countChar("Truth", "T"));