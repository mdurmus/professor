
/**
 * A method for storing user information in SessionStorage as JSON data.
 */
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('fname').value;
    var mail = document.getElementById('email').value;
    var personData = { fname: name, email: mail };
    sessionStorage.setItem('userInfo', JSON.stringify(personData));
    window.location.href = 'game.html';
})


/**
 * Read user data from Session storage as JSON object.
 */
function ReadSessionData() {
    let storedData = sessionStorage.getItem('userInfo');
    if (storedData) {
        let user = JSON.parse(storedData);
        console.log(user.fname);
        console.log(user.email);
    } else {
        console.log('No any record on session storage');
    }
}