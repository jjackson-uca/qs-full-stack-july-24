//1. Create an array from all 50 state postal abbreviations 
//   (you can copy the list from google)
let states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

//2. Write a function that Creates a new array with an 
//   object for each state with the following shape: 
/*
    {
        name: string, 
        abbr: string,
        visited: boolean
    }
*/

let fullStates = states.map(abb => {
    return {
        name: "", 
        abbr: abb, 
        visited: false,
    }
}); 
//3. Create an class that represents a pokemon
class Pokemon{
    name
    elementType
    abilities
    stats
    //3.1 make sure the pokemon object contains a way to 
    //    define it's next evolution
    evolutions

    constructor(){}

}

class Stats{
    hp
    attack 
    defense
    specialAttack
    specialDefense
    speed
}


//4. create a function that takes an array of strings, 
//   and returns an array of all words in those strings
function words(array){
    let allWords = [];
    for(let str of array){
        allWords.push(...str.split(' ')); 
    }
    return allWords;
}
console.log(words(["Truth is so cool", "Truth is the best"]));

//5. create a function that takes user input and writes it 
//   to the console. 
function getUserInput(){
    let input = prompt('Write a console message'); 
    console.log(input); 
}
