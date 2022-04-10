document.getElementById("start-btn").addEventListener("click", function(){
    var timeLeft = 45;
    var timerCounter = setInterval(function function1(){
        document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";

        timeLeft -=1;
        if(timeLeft === 0){
            clearInterval(timerCounter);
            document.getElementById("countdown").innerHTML = "Time is Up!"
        }
    }, 1000);
    console.log(countdown);
});

var questions = [
    {
        question: 'question1',
        answers: [
            { text: 'word1', correct: false},
            { text: 'word2', correct: false},
            { text: 'word3', correct: true},
            { text: 'word4', correct: false},
        ],
    },
    {
        question: 'question2',
        answers: [
            { text: 'word5', correct: false},
            { text: 'word6', correct: false},
            { text: 'word7', correct: true},
            { text: 'word8', correct: false},
        ],
    },
    {
        question: 'question3',
        answers: [
            { text: 'word9', correct: false},
            { text: 'word10', correct: false},
            { text: 'word11', correct: true},
            { text: 'word12', correct: false},
        ],
    },
];

function recallQuestion() {
    // write function that randomly selects question from questions array
}

document.getElementById("start-btn").addEventListener("click", function(){
    var questionContainer = document.getElementById("question-container");  
    document.getElementById("question-container").innerHTML = (recallQuestion);
});

// if text === true {

// } else {
    // subtract time from timer
// }

// seconds left will be score
// create score card to append to score card div
// add pop up that allows initials to be added to score card div
// there will need to be a button on the pop up to save score
// button will be an event listener that saves the info into the score card
