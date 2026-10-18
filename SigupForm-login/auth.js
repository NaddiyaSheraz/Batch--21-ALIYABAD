
const signupForm = document.getElementById("signupForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = password.value;
    const confirmPass = confirmPassword.value;

    if (name.length < 2) {
        showMessage("Please enter your full name.", "red");
        return;
    }

    if (pass.length < 8) {
        showMessage(
            "Password must be at least 8 characters.",
            "red"
        );
        return;
    }

    if (pass !== confirmPass) {
        showMessage("Passwords do not match!", "red");
        return;
    }

    showMessage(
        "Signup form validated successfully!",
        "green"
    );

    console.log("Name:", name);
    console.log("Email:", email);
});

function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}
