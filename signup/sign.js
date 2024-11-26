function validateForm() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var firstnameError = document.getElementById("firstnameError");
    var lastnameError = document.getElementById("lastnameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    firstnameError.innerHTML = "";
    lastnameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    var valid = true;

    if (firstname.length < 2) {
        firstnameError.innerHTML = "First name must be at least 2 characters.";
        firstnameError.style.color="red";
        valid = false;
    }

    if (lastname.length < 2) {
        lastnameError.innerHTML = "Last name must be at least 2 characters.";
        lastnameError.style.color="red";
        valid = false;
    }

    if (!isValidEmail(email)) {
        emailError.innerHTML = "Please enter a valid email address.";
        emailError.style.color="red";
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