const message = document.querySelector('.msg');
const hint = document.querySelector('.hint');
const guess = document.querySelector('input');
const btn = document.getElementById('btn');

let words = ['python', 'javascript', 'basic', 'scheme', 'ruby', 'java', 'typescript', 'kotlin',
    'perl', 'dart', 'rust', 'haskell', 'pascal', 'elixir', 'fortran','cobol','swift'];
let wordToGuess = "";
let randomWord = "";
let play = false;

const createNewWords = () => {
    return words[Math.floor(Math.random() * words.length)];
}

const scrambleWords = (arr) => {
    for(let i = arr.length-1; i>0; i--){
        // Iterating the word-array backwards
        let temp = arr[i];
        // Random number within array length
        let j = Math.floor(Math.random() * (i + 1));
        //Swap array index with random number
        arr[i] = arr[j];
        //To make a scrambled word of shuffled-word array indexes
        arr[j] = temp;
    }
    return arr.join(""); //Return scrambled word
}

btn.addEventListener('click', function () {
    if (!play) {
        confetti.stop();
        play = true;
        //Change button text to guess
        btn.innerHTML = "Guess";
        //To make input field visible
        guess.classList.toggle('hidden');
        //To show word to guess
        if (message.classList.contains('hidden')) {
           message.classList.toggle('hidden');   
        }
        //To show hint
        hint.classList.toggle('hidden');
        //Generate random words from array
        wordToGuess = createNewWords();
        //Split the word into an array and then join it in random order
        randomWord = scrambleWords(wordToGuess.split(""));
        message.innerHTML = `Guess the word: ${randomWord}`;
    }
    else {
        play = false;
        let guessedWord = guess.value;
        if (wordToGuess === guessedWord) {
            message.innerHTML = `Good Job! It is ${wordToGuess}`;
            confetti.start();
            guess.classList.toggle('hidden');
            hint.classList.toggle('hidden');
            btn.innerHTML = `Play Again`;
            guess.value = "";
        }
        else {
            message.innerHTML = `Wrong Answer! It was ${wordToGuess}`;
            btn.innerHTML = `Try Again`;
            guess.classList.toggle('hidden');
            hint.classList.toggle('hidden');
            guess.value = "";
        }
    }
});
