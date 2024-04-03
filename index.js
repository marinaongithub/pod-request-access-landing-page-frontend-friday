const form = document.getElementById("form");
const emailInput = document.getElementById("email");

const errorMsg = document.getElementById("errorMsg")

function isValidEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function setError(email) {
    if (email === "") {
        errorMsg.textContent = "Oops! Please add your email";
    }
    else {
        errorMsg.textContent = "Oops! Please check your email";
    }    
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    console.log(emailValue);

    if (!isValidEmail(emailValue)) {
        setError(emailValue);
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateEmail();
});

//Removes error email display when input is changed
emailInput.addEventListener('input', function() {
    errorMsg.textContent = "";
})