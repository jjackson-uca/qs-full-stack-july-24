// 1
const stateAbbreviations = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

//   2
const states = [
    { name: 'Alabama', abbr: 'AL' }, { name: 'Alaska', abbr: 'AK' }, { name: 'Arizona', abbr: 'AZ' },
]

function createStateArray(states) {
    return states.map(state => ({
      name: state.name,
      abbr: state.abbr,
      visited: false 
    }));
  }

// 3 and 3.1

let pokemon = {
    name: "Charmander",
    type: ["Fire"],
    abilities: ["Blaze", "Solar power" ], 
    
    stats: {
        hp: 35,
        attack: 55,
        defense: 40,
        specialAttack: 50,
        specialDefense: 50,
        speed: 90
      },

      evolutions: [
        { stage: 1, name: 'Charmander' },
        { stage: 2, name: 'Charmeleon' },
        { stage: 3, name: 'Cahrizard' }
      ]

}

// 4 






// 5
function userInput() {
    let userInput = prompt ("Enter something here");
    console.log(userInput)
}
userInput();