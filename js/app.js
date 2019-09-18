const qwertyId = document.getElementById('qwerty');
const phraseId = document.getElementById('phrase');
let missed = 0;

const startBtn = document.querySelector('.btn__reset');

const phrasesArray = [
    'red velvet cake',
    'sticky toffee pudding',
    'gingerbread men cookies',
    'peppermint swirl fudge',
    'pumpkin pie'
];

// hide overlay when start button clicked
startBtn.addEventListener('click', () => {
    startBtn.parentElement.style.display = 'none';
});

// random phrase to array function
function getRandomPhraseAsArray(arr){
    let arrayChar = [];
    // check if an array was passed
    if (arr === undefined || arr.length == 0 ) {
        // generate random number and select phrase based on length
        let randNum = Math.floor(Math.random() * phrasesArray.length);
        arrayChar = phrasesArray[randNum].split("");
    } else {
        arrayChar = arr.split("");
    }
    // return array
    return arrayChar;
} 

// set game display
function addPhraseToDisplay(arr){
    for (let char of arr) {
        let liElement = document.createElement('li');
        liElement.textContent = char
        if (char !== ' ') {
            liElement.className = 'letter';
        }
        phraseId.append(liElement);
    }
}

addPhraseToDisplay(getRandomPhraseAsArray());