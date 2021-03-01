// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


//Initial prompt A1)
function initialPrompt() {
   console.log("Let's play some Scrabble!\n")
   promptWord = input.question("Enter a word to score: ");
   //promptWord is a global variable in order for me to access it in scorerPrompt
//    console.log(oldScrabbleScorer(promptWord));
};


//Add and Organize Algorithms B1 & B2)
let simpleScore = function(word) {
    word = word.toUpperCase()
    simpleScore = 0

    for (let i = 0; i < word.length; i++){
        simpleScore += 1
    }
    return simpleScore;
};

let vowelBonusScore = function(word){
    vowels = ['a', 'e', 'i', 'o', 'u'];
    vowelScore = 0;
    
    for (let i = 0; i < word.length; i++){
        if(vowels.includes(word[i])){
            vowelScore += 3
        }else{
            vowelScore += 1
        }
    }return vowelScore
};

let scrabbleScore = function(word){
    word = word.toLowerCase()
    let wordScore = 0
    let letterPoint = 0
    for (let i = 0; i < word.length; i++){
        letter = word[i]
        // console.log(newPointStructure)
        // console.log(letter)
        letterPoint = newPointStructure[letter]
        // console.log(letterPoint)
        wordScore += letterPoint
    }
    return wordScore
};

// let scrabbleScorer = {
//     name: 'Scrabble',
//     description: 'The traditional scoring algorithm.',
//     scoreFunction: scrabbleScore,
// }

//Part B Organizing Algorithms into an array of 3 objects 
//Creating an object for each score system
//then placing into scoringAlgorithms array
// let simpleScorer = {
//     name: 'Simple Score',
//     description: 'Each letter is worth 1 point.',
//     scoreFunction: simpleScore,
// };


// let bonusVowels = {
//     name: 'Bonus Vowels',
//     description: 'Vowels are worth 3 pts, consonants are 1 pt.',
//     scoreFunction: vowelBonusScore,
// };


// let scrabble = {
//     name: 'Scrabble',
//     description: 'The traditional scoring algorithm.',
//     scoreFunction: oldScrabbleScorer,
// };


const scoringAlgorithms = [
    Object ({
    name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scoreFunction: simpleScore}), 
    Object ({
    name: 'Bonus Vowels',
    description: 'Vowels are worth 3 pts, consonants are 1 pt.',
    scoreFunction: vowelBonusScore}),
    Object ({
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scoreFunction: scrabbleScore})
];


//Finish writing scorerPrompt in order for user to select which scoring alg. to use.
function scorerPrompt() {
    console.log('Which scoring algorithm would you like to use?\n')
    console.log('0 - ', scoringAlgorithms[0].name + ': ', scoringAlgorithms[0].description);
    console.log('1 - ', scoringAlgorithms[1].name + ': ', scoringAlgorithms[1].description);
    console.log('2 - ', scoringAlgorithms[2].name + ': ', scoringAlgorithms[2].description);

    selectedScorer = input.question('Enter 0, 1, or 2 : ')
        // if (!selectedScorer === '0', '1', '2'){
        //     input.question('Please enter a valid input: ')
        // }
    //Insert code thtat rejects invalid input's and then repropmts the user for the correct information
    console.log(`Score for '${promptWord}' : ${scoringAlgorithms[selectedScorer].scoreFunction(promptWord)}`)
};
//Completed up to part C
//Transform the scarbble scoring
//oldPointStructure has the point value as the key and the array of characters as the values to the keys


function transform(oldPointStructure) {
    //the oldPointStructure is the parameter (it is an object with arrays); calling this function will return an object with lowercase letters as keys.  The value for each key will be the points assigned to that letter.
//is to have 26 keys one for each letter.  The value of each key will be the scrabble point value
    let newStructure = {}
    for (let pointValue in oldPointStructure){
        let lettersArr = oldPointStructure[pointValue];
        //looping through each pointValue in the OPS object and storing each letter in the new lettersArr (these letters are uppercase)
        for( let i = 0; i < lettersArr.length; i++){
                letter = lettersArr[i].toLowerCase();
                //loop through the lettersArr to change the case of letters to lowercase
                newStructure[letter] = Number(pointValue);
            }
        
    }
    return newStructure;
};


let newPointStructure = transform(oldPointStructure);
newPointStructure[' '] = 0


function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

