
/**
 * A method for storing user information in cookies.
 */
function CreateCookie() {
    let userName = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    document.cookie = `name=${userName}; email=${email}`;
    window.location.replace("game.html");
    return false;
}

function CookieRead() {
    let allCookie = document.cookie;
    // I wantto check cooike objects
    if (allCookie.trim() !== "") {
        let cookieValues = allCookie.split(';');
        let nameData = cookieValues[0].split('=');
        let mailData = cookieValues[1].split('=');

        let name = nameData[1].trim();
        let email = mailData[1].trim();

        console.log(name + ' ' + email);
    }

}