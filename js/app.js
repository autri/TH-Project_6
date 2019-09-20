const qwertyId = document.getElementById('qwerty');
const phraseId = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const phrasesArray = [
    'red velvet cake',
    'sticky toffee pudding',
    'gingerbread men cookies',
    'peppermint swirl fudge',
    'pumpkin pie'
];

let heart = document.querySelectorAll('.tries');
let missed = 0;

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
        if (char === ' ') {
            liElement.className = 'space';
        } else {
            liElement.className = 'letter';
        }
        phraseId.append(liElement);
    }
}

// check selected letter
function checkLetter (letterBtn) {
    let arrayLetters = phraseId.querySelectorAll('.letter');
    let letter = letterBtn.textContent;
 
    let match = null;

    for (let i = 0; i < arrayLetters.length; i++) {
        if (arrayLetters[i].textContent === letter) {
            // show class
            arrayLetters[i].className += ' show';
            match = arrayLetters[i].textContent;
        }
    }
    return match;
}

// keyboard button event listener
document.addEventListener('click', (e) => {
    if (e.target.type === 'submit') {
        let letterFound = checkLetter(e.target);
        if(letterFound === null) {
            heart[missed].style.display = 'none';
            missed += 1;
        }
        e.target.setAttribute('disabled', 'true');
        e.target.className += 'chosen';
        checkWin();
    }

});

// check win function
function checkWin () {
    let arrayLetters = phraseId.querySelectorAll('.letter');
    let arrayShow = phraseId.querySelectorAll('.show');

    if (arrayLetters.length === arrayShow.length) {
        overlay.className = 'win';
        overlay.style.display = 'flex';
        startBtn.textContent = 'Restart Game';
        startBtn.previousElementSibling.textContent = "you won! :)"
        startBtn.addEventListener('click', resetGame(arrayLetters));
    } else if (missed >= 5) {
        overlay.className = 'lose';
        overlay.style.display = 'flex';
        startBtn.textContent = 'Restart Game';
        startBtn.previousElementSibling.textContent = "you lost :("
        startBtn.addEventListener('click', resetGame(arrayLetters));
    }
}

function resetGame(arrayLetters) {
    let keyboard = qwertyId.querySelectorAll('button');
    for (let letter of arrayLetters) {
        phraseId.removeChild(letter);
    }
    for (let key of keyboard) {
        key.classList.remove('chosen');
        key.removeAttribute('disabled')
    }
    for (let i = 0; i < heart.length; i++) {
        heart[i].style.display = 'inline-block';
    }

    missed = 0;
    addPhraseToDisplay(getRandomPhraseAsArray());

}

// set random phrase
addPhraseToDisplay(getRandomPhraseAsArray());

// hide overlay when start button clicked
startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    // overlay.classList.remove('start');
});
