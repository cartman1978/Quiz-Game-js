const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswer =true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What is 5 x 15?',
        choice1: '75',
        choice2: '85',
        choice3: '65',
        choice4: '105',
        answer: 1,
    },
     {
        question: 'Which is the biggest Country in the world?',
        choice1: 'China',
        choice2: 'Russia',
        choice3: 'Canada',
        choice4: 'USA',
        answer: 2,
    },
     {
        question: 'Which is the fastest car in the world?',
        choice1: 'SSC Tuatara',
        choice2: 'Bugatti Venom',
        choice3: 'Ferrari Enzo',
        choice4: 'Koenigsegg Agera',
        answer: 1,
    },
     {
        question: 'The Tallest building in the world is located in which city?',
        choice1: 'Dubai',
        choice2: 'New York',
        choice3: 'Shanghai',
        choice4: 'None of the above',
        answer: 1,
    }
]