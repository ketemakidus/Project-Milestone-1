// form validation
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;

    if (name === "" || email === "") {
        alert("Name and Email must be filled out");
        return false;
    }
}

// toggling visibility of an element
function toggleAboutContent() {
    var aboutContent = document.getElementById("aboutContent");
    aboutContent.style.display = (aboutContent.style.display === "none") ? "block" : "none";
}
