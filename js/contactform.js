document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let error = document.getElementById("formError");
    error.style.color = "crimson";
    error.innerText = "";

    let emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    let phonePattern = /^[0-9]{10,15}$/;

    if (name.length < 3) {
        error.innerText = "Please enter your full name 🐾";
        return;
    }

    if (!emailPattern.test(email)) {
        error.innerText = "Please enter a valid email 🐶";
        return;
    }

    if (!phonePattern.test(phone)) {
        error.innerText = "Phone must be 10–15 digits 🐱";
        return;
    }

    if (message.length < 5) {
        error.innerText = "Message cannot be empty 🐾";
        return;
    }

    alert("Your message was sent successfully! 🐶🐱");
    document.getElementById("contactForm").reset();
});
