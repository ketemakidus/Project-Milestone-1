document.addEventListener("DOMContentLoaded", function () {
    // JavaScript for handling form submission and displaying thank you message
    var contactForm = document.getElementById("contactForm");
    var thankYouMessage = document.getElementById("thankYouMessage");

    if (contactForm && thankYouMessage) {
        contactForm.addEventListener("submit", function (event) {
            // Prevent the default form submission
            event.preventDefault();

            // Get the name value from the form
            var name = contactForm.elements["name"].value;

            // Display the thank you message with the user's name
            thankYouMessage.innerHTML = "Thank you, " + name + ", for filling the form. I will get back to you as soon as possible.";
            thankYouMessage.style.display = "block";

            // Reset the form
            contactForm.reset();
        });
    }
});
