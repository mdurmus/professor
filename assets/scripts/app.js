/**
 * Read user data from Session storage as JSON object.
 */
function ReadSessionData() {
    let storedData = sessionStorage.getItem('userInfo');
    if (storedData) {
        let user = JSON.parse(storedData);
        document.getElementById('uname').innerHTML = user.fname;
        document.getElementById('mail').innerHTML = user.email;
        console.log(user.fname);
        console.log(user.email);
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