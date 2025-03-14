//Smooth Scrolling for Navigation Links
const links = document.querySelectorAll('.nav-buttons a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default behavior of the link
        const targetId = this.getAttribute('href').slice(1); // Extract section ID
        const targetElement = document.getElementById(targetId);

        // Smooth scroll to the target section
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation (optional, basic example)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        event.preventDefault(); // Prevent form submission if validation fails
    }
});