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

// convert phrase to character array
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

// set game display by adding character array to dom
function addPhraseToDisplay(arr){
    for (let char of arr) {
        let liElement = document.createElement('li');
        liElement.textContent = char
        if (char !== ' ') {
            liElement.className = 'letter';
        } else if (char === ' ') {
            liElement.className = 'space';
        }
        phraseId.append(liElement);
    }
}

// check selected letter
function checkLetter (letterBtn) {
    let arrayLetters = phraseId.querySelectorAll('.letter');
    let letter = letterBtn.textContent;

    let tempLetter = '';
    let match = false;

    for (let i = 0; i < arrayLetters.length; i++) {
        if (arrayLetters[i].textContent === letter) {
            // show class
            arrayLetters[i].className += ' show';
            match = true;
            tempLetter = arrayLetters[i].textContent;
        }
    }

    if (match) {
        return tempLetter;
    } else {
        return null;
    }
}

// keyboard button event listener
document.addEventListener('click', (e) => {
    if (e.target.type === 'submit') {
        let letterFound = checkLetter(e.target);
        e.target.className += 'chosen';
        e.target.setAttribute('disabled', 'true');
    }
});


// set random phrase
addPhraseToDisplay(getRandomPhraseAsArray());

// hide overlay when start button clicked
startBtn.addEventListener('click', () => {
    startBtn.parentElement.style.display = 'none';
});