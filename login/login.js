function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");

    usernameError.innerHTML = "";
    passwordError.innerHTML = "";

    var valid = true;

    if (!isValidEmail(username)) {
        usernameError.innerHTML = "Please enter a valid email address.";
        usernameError.style.color="red";
        valid = false;
    }

    if (password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters.";
        passwordError.style.color="red";
        valid = false;

    }

    return valid;
}

function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}
