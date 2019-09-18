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

function getRandomPhraseAsArray(array){
    let arrayChar = [];

    // check if an array was passed
    if (array === undefined || array.length == 0 ) {
        // generate random number and select phrase based on length
        let randNum = Math.floor(Math.random() * phrasesArray.length);
        arrayChar = phrasesArray[randNum].split("");
    } else {
        arrayChar = array.split("");
    }
    // return array
    return arrayChar;
} 