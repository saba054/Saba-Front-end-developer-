function generatePassword() {
    var length = document.getElementById("length").value;
    var includeUppercase = document.getElementById("include-uppercase").checked;
    var includeNumbers = document.getElementById("include-numbers").checked;
    var includeSpecial = document.getElementById("include-special").checked;

    var charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSpecial) charset += "!@#$%^&*()_-+=<>?";

    var password = "";

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    displayPassword(password);
}

function displayPassword(password) {
    var passwordDisplay = document.getElementById("password-display");
    passwordDisplay.textContent = "Generated Password: " + password;
}

function displayPassword(password) {
    var passwordDisplay = document.getElementById("password-display");
    passwordDisplay.textContent = "Generated Password: " + password;
}

function resetForm() {
    document.getElementById("length").value = 12;
    document.getElementById("include-uppercase").checked = true;
    document.getElementById("include-numbers").checked = true;
    document.getElementById("include-special").checked = true;
    document.getElementById("password-display").textContent = "";
}