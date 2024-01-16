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
    let soru = document.getElementById('question').innerHTML = "<p>Bu bir soru1</p>";
})

