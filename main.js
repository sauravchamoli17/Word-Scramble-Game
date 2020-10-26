const message = document.querySelector('.msg');
const hint = document.querySelector('.hint');
const guess = document.querySelector('input');
const btn = document.getElementById('btn');

let play = false;
let words = ['python', 'javascript', 'basic', 'scheme', 'ruby', 'java', 'typescript', 'kotlin',
    'perl', 'dart', 'rust', 'haskell', 'pascal', 'elixir', 'fortran','cobol','swift'];
let wordToGuess = "";
let randomWords = "";

const createNewWords = () => {
    return words[Math.floor(Math.random() * words.length)];
}

const scrambleWords = (arr) => {
    for(let i = arr.length-1; i>=0; i--){
        let temp = arr[i];
        console.log(temp);
        let j = Math.floor(Math.random() * (i + 1));
        // console.log(i);
        // console.log(j);
        // arr[i] = arr[j];
        // arr[j] = temp;
    }
}

btn.addEventListener('click', function () {
    if(!play){
        play = true;
        //Change button text to guess
        btn.innerHTML = "Guess";
        //To make input field visible
        guess.classList.toggle('hidden');
        //To show word to guess
        message.classList.toggle('hidden');
        //To show hint
        hint.classList.toggle('hidden');
        //Generate random words from array
        wordToGuess = createNewWords();
        //Split the word into an array and then join it in random order
        randomWords = scrambleWords(wordToGuess.split("").join(""));
        message.innerHTML = "Guess the word: " +randomWords;
    }
});