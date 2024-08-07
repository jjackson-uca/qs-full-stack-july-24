//1. Create an array from all 50 state postal abbreviations (you can copy the list from google)
let states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

//2. Create a new array with an object for each state with the following shape: 
/*
    {
        name: string, 
        abbr: string,
        visited: boolean
    }
   
*/

let newStates = [
    {
        stateName: "alabama", 
        abbr: "AL",
        visited: false
    }
]


//3. Create an object that represents a pokemon

let pokemon = new Object();
pokemon.color = "yellow";
pokemon.name = "Pikachu";


//3.1 make sure the pokemon object contains a way to define it's next evolution

pokemon.evolution = "Big Pikachu";

//4. create a function that takes an array of strings, and returns an array of all words in those strings
function words(array){
    let allWords = [...array.slice('')];
    return allWords;
        
}
console.log(words(["Truth is so cool", "Truth is the best"]));

//5. create a function that takes user input and writes it to the console. 
function userInput(prompt){
    console.log(prompt);
}

let input = prompt("What is your name?");
userInput(input);

