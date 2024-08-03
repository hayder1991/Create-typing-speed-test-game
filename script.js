const words = [
    'Hello',
    'Programming',
    'Code',
    'Javascript',
    'Town',
    'Country',
    'Testing',
    'Youtube',
    'Linkedin',
    'Twitter',
    'Github',
    'Leetcode',
    'Internet',
    'Python',
    'Scale',
    'Destrcturing',
    'Paradigm',
    'Styling',
    'Cascode',
    'Documentation',
    'Coding',
    'Funny',
    'Working',
    'Dependencies',
    'Task',
    'Runner',
    'Roles',
    'Test',
    'Rust',
    'Playing'
];

const lvls = {
    'Easy': 5,
    'Normal': 3,
    'Hard': 2
};

// Default level
let defaultLevelName = 'Normal'; // Change level from here
let defaultLevelSeconds = lvls[defaultLevelName];

let startButton = document.querySelector('.start');
let lvlNameSpan = document.querySelector('.message .lvl');
let secondsSpan = document.querySelector('.message .seconds');
let theWord = document.querySelector('.the-word');
let upcomingWords = document.querySelector('.upcoming-words');
let input = document.querySelector('.input');
let timeLeftSpan = document.querySelector('.time span');
let scoreGot = document.querySelector('.score .got');
let scoreTotal = document.querySelector('.score .total');
let finshMessage = document.querySelector('.finsh');

// Setting level name + seconds + score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// Disable paste event
input.onpaste = function(){
    return false;
};

// Start game
startButton.onclick = function(){
    this.remove();
    input.focus();
    // Generate word function
    genWords();
};

function genWords(){
    let randomWord = words[Math.floor(Math.random() * words.length)];
    let wordIndex = words.indexOf(randomWord);
    words.splice(wordIndex, 1);
    theWord.innerHTML = randomWord;
    upcomingWords.innerHTML = '';
    for(let i = 0; i < words.length; i++){
        let div = document.createElement('div');
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    startPlay();
}

function startPlay(){
    let start = setInterval(() =>{
        timeLeftSpan.innerHTML--;
    }, 1000);
}