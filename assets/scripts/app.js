let countdown;

let scores = [{ 'bykingpin': 100 }, { 'bykingpin': 90 }];

let questions = [];

// #region Questions //
let questionBank = [
    {
        id: 1,
        question: "Which planet is known as the 'Gas Giant'?",
        category: "Astronomy",
        answers: [
            { text: "Mars", correct: false },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false }
        ],
        explanation: "Jupiter is known as the 'Gas Giant'."
    },
    {
        id: 2,
        question: "Who wrote the novel 'To Kill a Mockingbird'?",
        category: "Literature",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "J.K. Rowling", correct: false },
            { text: "Ernest Hemingway", correct: false },
            { text: "George Orwell", correct: false }
        ],
        explanation: "'To Kill a Mockingbird' was written by Harper Lee."
    },
    {
        id: 3,
        question: "Which river is the longest in the world?",
        category: "Geography",
        answers: [
            { text: "Nile", correct: false },
            { text: "Amazon", correct: true },
            { text: "Yangtze", correct: false },
            { text: "Mississippi", correct: false }
        ],
        explanation: "The Amazon River is the longest river in the world."
    },
    {
        id: 4,
        question: "Who discovered penicillin?",
        category: "Science",
        answers: [
            { text: "Marie Curie", correct: false },
            { text: "Alexander Fleming", correct: true },
            { text: "Louis Pasteur", correct: false },
            { text: "Isaac Newton", correct: false }
        ],
        explanation: "Penicillin was discovered by Alexander Fleming."
    },
    {
        id: 5,
        question: "What is the capital of Australia?",
        category: "Geography",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Perth", correct: false }
        ],
        explanation: "Canberra is the capital of Australia."
    },
    {
        id: 6,
        question: "Which element has the chemical symbol 'K'?",
        category: "Chemistry",
        answers: [
            { text: "Potassium", correct: true },
            { text: "Krypton", correct: false },
            { text: "Kryptonite", correct: false },
            { text: "Keratin", correct: false }
        ],
        explanation: "The chemical symbol 'K' represents Potassium."
    },
    {
        id: 7,
        question: "Who painted the famous artwork 'The Scream'?",
        category: "Art",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Edvard Munch", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false }
        ],
        explanation: "'The Scream' was painted by Edvard Munch."
    },
    {
        id: 8,
        question: "What is the name of the largest crater on the surface of the Moon?",
        category: "Astronomy",
        answers: [
            { text: "Tycho", correct: true },
            { text: "Copernicus", correct: false },
            { text: "Kepler", correct: false },
            { text: "Aristarchus", correct: false }
        ],
        explanation: "Tycho is the largest crater on the surface of the Moon."
    },
    {
        id: 9,
        question: "Which is the largest ocean on Earth?",
        category: "Geography",
        answers: [
            { text: "Indian", correct: false },
            { text: "Atlantic", correct: false },
            { text: "Pacific", correct: true },
            { text: "Arctic", correct: false }
        ],
        explanation: "The Pacific Ocean is the largest ocean on Earth."
    },
    {
        id: 10,
        question: "In which museum is Leonardo da Vinci's famous painting 'Mona Lisa' displayed?",
        category: "Art",
        answers: [
            { text: "Louvre Museum", correct: true },
            { text: "British Museum", correct: false },
            { text: "Uffizi Gallery", correct: false },
            { text: "Prado Museum", correct: false }
        ],
        explanation: "The 'Mona Lisa' is displayed at the Louvre Museum."
    },
    {
        id: 11,
        question: "Which planet is known as the 'Red Planet'?",
        category: "Astronomy",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ],
        explanation: "Mars is known as the 'Red Planet'."
    },
    {
        id: 12,
        question: "What is the capital of the country where Buenos Aires is located?",
        category: "Geography",
        answers: [
            { text: "Brazil", correct: false },
            { text: "Argentina", correct: true },
            { text: "Chile", correct: false },
            { text: "Colombia", correct: false }
        ],
        explanation: "Buenos Aires is the capital of Argentina."
    },
    {
        id: 13,
        question: "What is the largest organ in the human body?",
        category: "Biology",
        answers: [
            { text: "Heart", correct: false },
            { text: "Brain", correct: false },
            { text: "Lung", correct: false },
            { text: "Skin", correct: true }
        ],
        explanation: "The skin is the largest organ in the human body."
    },
    {
        id: 14,
        question: "In which year did the United States declare its independence?",
        category: "History",
        answers: [
            { text: "1776", correct: true },
            { text: "1789", correct: false },
            { text: "1804", correct: false },
            { text: "1812", correct: false }
        ],
        explanation: "The United States declared its independence in 1776."
    },
    {
        id: 15,
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        category: "Astronomy",
        answers: [
            { text: "Mars", correct: false },
            { text: "Venus", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: false }
        ],
        explanation: "Venus is known as the 'Morning Star' or 'Evening Star'."
    },
    {
        id: 16,
        question: "What is the symbol for the element with the symbol 'Fe'?",
        category: "Chemistry",
        answers: [
            { text: "Phosphorus", correct: false },
            { text: "Iron", correct: true },
            { text: "Fluorine", correct: false },
            { text: "Francium", correct: false }
        ],
        explanation: "'Fe' symbolizes the element Iron."
    },
    {
        id: 17,
        question: "Which book was written by George Orwell?",
        category: "Literature",
        answers: [
            { text: "1984", correct: true },
            { text: "Fahrenheit 451", correct: false },
            { text: "Animal Farm", correct: false },
            { text: "Brave New World", correct: false }
        ],
        explanation: "The book written by George Orwell is '1984'."
    },
    {
        id: 18,
        question: "Which planet holds the title of the largest planet in the 'Solar System'?",
        category: "Astronomy",
        answers: [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Uranus", correct: false }
        ],
        explanation: "Jupiter holds the title of the largest planet in the Solar System."
    },
    {
        id: 19,
        question: "Who is the author of the book 'Romeo and Juliet'?",
        category: "Literature",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Emily Brontë", correct: false }
        ],
        explanation: "'Romeo and Juliet' was written by William Shakespeare."
    },
    {
        id: 20,
        question: "Which country hosted the 2016 Summer Olympics?",
        category: "Sports",
        answers: [
            { text: "Brazil", correct: true },
            { text: "Russia", correct: false },
            { text: "China", correct: false },
            { text: "United States", correct: false }
        ],
        explanation: "The 2016 Summer Olympics were hosted by Brazil."
    },
    {
        id: 21,
        question: "What is the capital of Japan?",
        category: "Geography",
        answers: [
            { text: "Seoul", correct: false },
            { text: "Beijing", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false }
        ],
        explanation: "Tokyo is the capital of Japan."
    },
    {
        id: 22,
        question: "Who painted the famous artwork 'Starry Night'?",
        category: "Art",
        answers: [
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent van Gogh", correct: true },
            { text: "Leonardo da Vinci", correct: false },
            { text: "Claude Monet", correct: false }
        ],
        explanation: "'Starry Night' was painted by Vincent van Gogh."
    },
    {
        id: 23,
        question: "Which element is the most abundant in Earth's crust?",
        category: "Geology",
        answers: [
            { text: "Iron", correct: false },
            { text: "Silicon", correct: true },
            { text: "Aluminum", correct: false },
            { text: "Calcium", correct: false }
        ],
        explanation: "Silicon is the most abundant element in Earth's crust."
    },
    {
        id: 24,
        question: "Who is known as the 'Father of Modern Physics'?",
        category: "Physics",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Niels Bohr", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Albert Einstein", correct: true }
        ],
        explanation: "Albert Einstein is known as the 'Father of Modern Physics'."
    },
    {
        id: 25,
        question: "In which year did the Titanic sink?",
        category: "History",
        answers: [
            { text: "1905", correct: false },
            { text: "1912", correct: true },
            { text: "1920", correct: false },
            { text: "1931", correct: false }
        ],
        explanation: "The Titanic sank in the year 1912."
    },
    {
        id: 26,
        question: "Which planet is known as the 'Red Planet'?",
        category: "Astronomy",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ],
        explanation: "Mars is known as the 'Red Planet'."
    },
    {
        id: 27,
        question: "What is the largest mammal in the world?",
        category: "Biology",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Polar Bear", correct: false }
        ],
        explanation: "The Blue Whale is the largest mammal in the world.",
    },
    {
        id: 28,
        question: "Who wrote the play 'Romeo and Juliet'?",
        category: "Literature",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Emily Brontë", correct: false }
        ],
        explanation: "'Romeo and Juliet' was written by William Shakespeare."
    },
    {
        id: 29,
        question: "What is the currency of Brazil?",
        category: "Geography",
        answers: [
            { text: "Peso", correct: false },
            { text: "Real", correct: true },
            { text: "Dollar", correct: false },
            { text: "Euro", correct: false }
        ],
        explanation: "The currency of Brazil is the Real."
    },
    {
        id: 30,
        question: "Who painted the 'Mona Lisa'?",
        category: "Art",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false }
        ],
        explanation: "The 'Mona Lisa' was painted by Leonardo da Vinci."
    },
    // Diğer sorular buraya eklenecek
];

// #endregion //

/**
 * The method that starts the Quiz.
 */
function StartQuiz() {
    questions = [];
    GetQuestionsFromBank();
    ShowQuestion();
};



/**
 * Print question and answer on screen.
 * @param {*} counter 
 */
function ShowQuestion(questionIndexNumber = 0) {
    if (questionIndexNumber === 10) {
        //Countdown();
        //clearInterval(countdown);
    }
    if (questionIndexNumber < 10) {
        //Countdown();
        //Get question from Array.
        let question = questions[questionIndexNumber];

        //Write category name
        document.getElementById('category-name').innerHTML = question['category'];

        //Write question
        document.getElementById('question').innerHTML = question['question'];

        //Sonraki sorunun numarasini yaziyorum
        //Sorunun numarasi indexin bir büyügü oluyor.
        document.getElementById('question-number').innerText = questionIndexNumber + 1;

        //Cevaplar butonunun oldugu yerler.
        var answers = document.getElementById('answers');
        answers.innerHTML = '';

        for (let index = 0; index < question.answers.length; index++) {
            let button = document.createElement('button');
            button.textContent = question.answers[index].text;
            button.classList.add('answer-button');
            button.setAttribute('qn', question.id);
            button.setAttribute('to', question.answers[index].correct);
            button.addEventListener('click', checkAnswer, false);
            answers.appendChild(button);
        }
    }

};

/**
 * Downtimer for answer check
 */
// function Countdown() {
//     clearInterval(countdown);
//     let questionNumber = parseInt(document.getElementById('question-number').innerText);
//     let second = 30;
//     let countdownerdiv = document.getElementById('timer');
//     countdown = setInterval(function () {
//         second -= 1;
//         countdownerdiv.innerHTML = second;
//         if (second <= 0) {
//             countdownerdiv.innerHTML = 'Time\'s Up!';
//             clearInterval(countdown);
//             DisableAllButtons();
//             IncreaseIncorrectAnswer();
//             ShowCorrectAnswer();
//             setTimeout(function () { ShowQuestion(questionNumber) }, 3000);
//         } else if (second < 10) {
//             countdownerdiv.style.color = 'red';
//         } else if (second < 20) {
//             countdownerdiv.style.color = 'orange';
//         } else if (second < 30) {
//             countdownerdiv.style.color = '#1e90ff';
//         }
//     }, 1000);
// }



/** OK 
 * Clear scores
 */
function ClearScores() {
    let correctAnswer = document.getElementById('correct-answer').getElementsByTagName('span')[0];
    correctAnswer.innerText = '00';
    let inCorrectAnswer = document.getElementById('incorrect-answer').getElementsByTagName('span')[0];
    inCorrectAnswer.innerText = '00';

}

/**
 * A method of checking the correct answer. According to the results, it also performs the related skip operations and prints them on the screen. Restart new Game.
 */
function checkAnswer(event) {
    let quizquestionNumber = parseInt(document.getElementById('question-number').innerText);
    let questionNumber = this.getAttribute('qn');
    console.log(questionNumber);
    let result = this.getAttribute('to');
    if (result === 'false') {
        this.style.backgroundColor = '#ffe8e7';
        DisableAllButtons();
        ShowHint(questionNumber);
        IncreaseIncorrectAnswer();
        ShowCorrectAnswer();
        let buttonsPassive = CheckAnswerButtonsBeforeFinish();
        if (quizquestionNumber === 10 && buttonsPassive) {
            GameFinish();
            event.preventDefault();
        } else {
            setTimeout(ShowQuestion, 3000, quizquestionNumber);
        }
    } else {
        DisableAllButtons();
        ShowCorrectAnswer();
        IncreaseCorrectAnswer();
        let buttonsPassive = CheckAnswerButtonsBeforeFinish();
        if (quizquestionNumber === 10 && buttonsPassive) {
            GameFinish();
            event.preventDefault();
        } else {
            setTimeout(ShowQuestion, 3000, quizquestionNumber);
        }
    }
}












function CheckAnswerButtonsBeforeFinish() {
    let buttons = document.getElementById('answers').getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].disabled) {
            return true;
        }
    }
}


/**
 * Finish this session and showing score table.
 */
function GameFinish() {

    let correctAnswer = document.getElementById('correct-answer').querySelector('span').textContent;
    let inCorrectAnswer = document.getElementById('incorrect-answer').querySelector('span').textContent;

    ClearItems();
    //StopCoundown();
    ShowResult(correctAnswer, inCorrectAnswer);
}


/**
 * Oyun sonrasi ilgilialanlari temizleme
 */
function ClearItems() {
    DisableAllButtons();
    ClearQuestion();
    ClearCategory();
    ClearScores();
}

/**Show Game Result screen */
/** Display the Game Result screen */
/** Display the Game Result screen */
function ShowResult(correctAnswer, incorrectAnswer) {
    // Calculate and display the current score
    let point = CalculatePoint(correctAnswer, incorrectAnswer);

    let resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';

    let tempPointElement = document.getElementById('temp-point');
    let tempPoint = parseInt(tempPointElement.textContent) || 0; // Use 0 if parsing fails

    tempPointElement.innerHTML = point;
    tempPointElement.style.color = 'red';
    tempPointElement.style.fontSize = '2rem';

    document.getElementById('right').innerHTML = correctAnswer;
    document.getElementById('false').innerHTML = incorrectAnswer;

    let totalPoint = point + tempPoint;
    document.getElementById('total-point').innerHTML = totalPoint;
}
// function ShowResult(correctAnswer, inCorrectAnswer) {
//     //Adamin o anlik puanini ekrana bi yere yaz.
//     let point = CalculatePoint(correctAnswer, inCorrectAnswer);

//     let resultdiv = document.getElementById('result');
//     resultdiv.style.display = 'block';

//     let tempPoint = document.getElementById('temp-point');
//     tempPoint.innerHTML = point;
//     tempPoint.style.color = 'red';
//     tempPoint.style.fontSize = '2rem';


//     document.getElementById('right').innerHTML = correctAnswer;
//     document.getElementById('false').innerHTML = inCorrectAnswer;

//     let totalPoint = point + parseInt(tempPoint);
//     document.getElementById('total-point').innerHTML = totalPoint;

// }

function CalculatePoint(correctAnswer, inCorrectAnswer) {
    return (correctAnswer * 5) - inCorrectAnswer;
}

/** OK Clear category div */
function ClearCategory() {
    let category = document.getElementById('category-name');
    category.innerHTML = '';
}

/** OK Clear question div */
function ClearQuestion() {
    let question = document.getElementById('question');
    question.innerHTML = '';
}


/**
 * OK The method that increases the correct answer score.
 */
function IncreaseCorrectAnswer() {
    let strnumber = document.getElementById('correct-answer').querySelector('span').innerText;
    let intNumber = parseInt(strnumber);
    document.getElementById('correct-answer').querySelector('span').innerText = intNumber + 1;
}

/**
 * SHow corecct answer.
 */
function ShowCorrectAnswer() {
    let correctAnswer = document.querySelector('.answer-button[to="true"]');
    correctAnswer.style.backgroundColor = '#e6ffe6';
}

/**
 * The method that increases the number of wrong answers.
 */
function IncreaseIncorrectAnswer() {
    let stringNumber = document.getElementById('incorrect-answer').querySelector('span').innerText;
    let intNumber = parseInt(stringNumber);
    document.getElementById('incorrect-answer').querySelector('span').innerText = intNumber + 1;
};

/**
 * 
 * @param {*} questionNumber 
 * If the user has given an incorrect answer, a method that provides a clue to the correct answer.
 */
function ShowHint(questionNumber) {
    let answer = questionBank.find(p => p.id == questionNumber).explanation;
    document.getElementById('question').innerHTML += '<br><span style="background-color:orange">' + answer + '</span>';

};

/**OK 
 * Locks all buttons after the answer is given.
 */
function DisableAllButtons() {
    let buttons = document.getElementById('answers').querySelectorAll('button');
    buttons.forEach(function (button) {
        button.disabled = true;
    });

};

/**
 * Read user data from Session storage as JSON object.
 */
function ReadSessionData() {
    let storedData = sessionStorage.getItem('userInfo');
    if (storedData) {
        let user = JSON.parse(storedData);
        let username = user.fname;
        var allNameSpan = document.getElementsByClassName('name');
        for (let index = 0; index < allNameSpan.length; index++) {
            allNameSpan[index].innerHTML = user.fname;

        }
        document.getElementById('mail').innerHTML = user.email;

        // let newScore = { 'username': username, 'score': newScore };
        // scores.push(newScore);
        StartNewGame();
    } else {
        console.log('No any record on session storage');
    }
};

/**OK Logout and clear session storage */
function Logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
};

/** OK Show/hide user panel
 */
function ShowUserPanel() {
    let userPanel = document.getElementById('user-container');
    if (userPanel.style.display === 'none') {
        userPanel.style.display = 'block';
    } else {
        userPanel.style.display = 'none';
    }
};

/**OK Close User Panel */
function CloseUserPanel() {
    document.getElementById('user-container').style.display = 'none';
}



/**
 * Show/hide leader panel
 */
function ShowLeaderBoard() {
    let leaderPanel = document.getElementById('leader-container');
    if (leaderPanel.style.display === 'none') {
        leaderPanel.style.display = 'block';
    } else {
        leaderPanel.style.display = 'none';
    }
    WriteLeaderBoard();
};

/**
 * Write leaderboard items on Leaderpanel.
 */
function WriteLeaderBoard() {

    //Clear div content
    document.getElementById('leader').innerHTML = "";

    //Create elment and set attribute for css class
    let scoreList = document.createElement('ol');
    scoreList.setAttribute('name', 'score-list')

    for (let i = 0; i < scores.length; i++) {
        let listItem = document.createElement('li');
        let player = Object.keys(scores[i])[0];
        let score = scores[i][player];
        listItem.innerHTML = player + ' > ' + score;
        scoreList.appendChild(listItem);
    }
    document.getElementById('leader').appendChild(scoreList);
};

function CloseLeaderBoard() {
    document.getElementById('leader-container').style.display = 'none';
}

/** OK Begin of the game */
function StartNewGame() {
    //Hide result panel.
    let win = document.getElementById('result');
    win.style.display = 'none';
    ClearScores();
    StartQuiz();
}

/** OK
 * Getting mixed 10 question from QuestionBank
 * and push questions array.
 * @returns Mixed 10 question array.
 */
function GetQuestionsFromBank() {

    let selectedIndex = [];
    let selectedQuestions = [];

    while (selectedQuestions.length < 10) {
        let randomIndex = Math.floor(Math.random() * 30);
        if (!selectedIndex.includes(randomIndex)) {
            selectedIndex.push(randomIndex);
            selectedQuestions.push(questionBank[randomIndex]);
        }
    }
    questions = selectedQuestions;
};
