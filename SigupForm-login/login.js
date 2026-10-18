
const supabaseclient = supabase.createClient(
    'https://dugptyifjnfzxuvgkzqw.supabase.co',
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1Z3B0eWlmam5menh1dmdrenF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEwNjc0MTYsImV4cCI6MjEwNjY0MzQxNn0.4rtRsciKtwIt3QE6rTy3HS9sWmqTVRr_N7EXD9-Kb48"
);

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const { data, error } =
        await supabaseclient.auth.signInWithPassword({
            email: email,
            password: password
        });

    if (error) {
        message.textContent = error.message;
        message.style.color = "red";
        return;
    }

    message.textContent = "Login successful!";
    message.style.color = "green";

    window.location.href = "todo.html";
});