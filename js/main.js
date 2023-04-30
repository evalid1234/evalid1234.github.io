
//loader
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("#spinner").style.display = "none";
});
/* progress bar */
let menu_toggled = false;
const MENU_HEIGHT = 56;
const COLLAPSED_MENU_HEIGHT = 216;
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const progressBarContainer = document.getElementById(
    "progress-bar-container"
  );
  const progress = document.querySelector(".progress");
  const progressBar = document.querySelector(".progress-bar");

  progressBarContainer.style.top = navbar.offsetHeight + "px";

  window.addEventListener("resize", function () {
    progressBarContainer.style.top = navbar.offsetHeight + "px";
  });

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / documentHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
    progressBar.setAttribute("aria-valuenow", scrollPercent);
  });

  const navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener("click", function () {
    if (!menu_toggled) {
      progressBarContainer.style.top = COLLAPSED_MENU_HEIGHT + "px";
    } else {
      progressBarContainer.style.top = MENU_HEIGHT + "px";
    }
    menu_toggled = !menu_toggled;
  });
});

//home fade in
window.addEventListener("load", function () {
  const home = document.querySelector("#home");
  home.classList.add("show");
});

/* fade in */
const fadeElements = document.querySelectorAll(".fade_in");

const checkFadeElements = () => {
  fadeElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (elementPosition < screenPosition) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
};

//check on scroll and scroll
window.addEventListener("load", checkFadeElements);
window.addEventListener("scroll", checkFadeElements);

// slid in
const slideElements = document.querySelectorAll(".slide_in");

const checkSlideElements = () => {
  slideElements.forEach((element, index) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (elementPosition < screenPosition) {
      element.classList.add(index % 2 === 0 ? "right" : "left");
    }
  });
};

// check on scroll and resize
window.addEventListener("scroll", checkSlideElements);
window.addEventListener("load", checkSlideElements);

const texts = ["Web Dev", "Software", "Tutoring"];
let goingBackwards = false;
let indexFromListOfWords = 0;
let index = 0;
let currentWord = "";
let letter = "";
let deleting = false;
let startAnimation = false;

function type() {
  if (!startAnimation) {
    return;
  }

  if (indexFromListOfWords === texts.length) {
    indexFromListOfWords = 0;
  }
  currentWord = texts[indexFromListOfWords];

  if (deleting) {
    letter = currentWord.slice(0, --index) + "|";
  } else {
    letter = currentWord.slice(0, ++index) + "|";
  }

  document.querySelector("#typing-text").innerHTML = letter;

  if (letter.length - 1 === currentWord.length && !deleting) {
    setTimeout(() => {
      deleting = true;
    }, 500);
  }

  if (letter.length - 1 === 0 && deleting) {
    deleting = false;
    indexFromListOfWords++;
    index = 0;
  }

  setTimeout(type, 100);
}

// create the observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startAnimation = true;
      type();
    } else {
      startAnimation = false;
    }
  });
});

// observe the element
observer.observe(document.querySelector("#typing-text"));

/* FORMS */

const form = document.querySelector("form");
const feedback = document.querySelector("#feedback");

const messageInput = document.getElementById("message");

messageInput.addEventListener("input", function (event) {
  const input = event.target;
  const inputValue = input.value;
  const cleanedInputValue = inputValue.replace(/[^a-zA-Z0-9\s,._-]/g, "");
  input.value = cleanedInputValue;
});

form.addEventListener("input", function (event) {
  const input = event.target;

  if (input.checkValidity()) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    feedback.classList.remove("visible");
    feedback.classList.add("invisible");
    feedback.textContent = "";
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
    feedback.classList.remove("invisible");
    feedback.classList.add("visible");

    // Provide specific feedback messages for each input field
    switch (input.name) {
      case "name":
        feedback.textContent =
          "Please enter a valid name (letters and spaces only)";
        break;
      case "subject":
        feedback.textContent =
          "Please enter a valid email header (no numbers or special characters)";
        break;
      case "email":
        if (!input.value.includes("@")) {
          feedback.textContent = 'Please include an "@" in the email address';
        } else if (!input.value.includes(".com")) {
          feedback.textContent =
            "Please include a valid domain (.com, .org, etc.)";
        } else {
          feedback.textContent = "Please enter a valid email address";
        }
        break;
      case "message":
        if (input.value.length > 100) {
          feedback.textContent = "Message cannot be longer than 100 characters";
        } else {
          feedback.textContent =
            "Please enter a valid message (letters, numbers, spaces, dashes, and underscores only)";
        }
        break;
      default:
        feedback.textContent = "Please fill out all required fields";
        break;
    }
  }
});
