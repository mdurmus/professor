/**
 * Read user data from Session storage as JSON object.
 */
function ReadSessionData() {
    let storedData = sessionStorage.getItem('userInfo');
    if (storedData) {
        let user = JSON.parse(storedData);
        document.getElementById('uname').innerHTML = user.fname;
        document.getElementById('mail').innerHTML = user.email;

        scores.push({ 'your-name': 0 })
    } else {
        console.log('No any record on session storage');
    }
}

document.addEventListener("DOMContentLoaded", function () {



    let number = document.getElementById('question-number').innerHTML = "<stronng>3/10</strong>";

    let soru = document.getElementById('question').innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie, lorem a ultricies varius, est dui elementum tortor, vel eleifend ligula tellus et risus. Nunc pellentesque odio augue, eu placerat eros pharetra id. Donec elementum eget dui id cursus. In hac habitasse platea dictumst. Cras ex turpis, hendrerit eget dolor non, feugiat pretium mi. Suspendisse potenti?</p>";

    var answers = document.getElementById('answers');

    for (let index = 0; index < 4; index++) {
        let button = document.createElement('button');
        button.textContent = 'Answer ' + index;
        button.classList.add('answer-button');
        answers.appendChild(button);
    }
})

function Logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}

function ShowUserPanel() {
    let userPanel = document.getElementById('user');
    if (userPanel.style.display === 'none') {
        userPanel.style.display = 'block';
        userPanel.style.zIndex = 10;
    } else {
        userPanel.style.display = 'none';
    }
}

function ShowLeaderPanel() {
    let leaderPanel = document.getElementById('leader');
    if (leaderPanel.style.display === 'none') {
        leaderPanel.style.display = 'block';
        leaderPanel.style.zIndex = 11;
    } else {
        leaderPanel.style.display = 'none';
    }
    WriteSores();
}

let scores = [{ 'bykingpin': 100 }, { 'bykingpin': 90 }]

function WriteSores() {
    //Clear div content
    document.getElementById('leader').innerHTML = "";
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
}