//loader
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector(".loading_group").style.display = "none";
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

//slide in
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

const texts = ["SWE", "Web"];

let goingBackwards = false;
let indexFromListOfWords = 0;
let index = 0;
let currentWord = "";
let letter = "";
let deleting = false;
let startAnimation = false;
const text_animation_container = document.querySelector("#typing-text");

function typeHomeText() {
  if (!startAnimation) {
    return;
  }

  if (indexFromListOfWords === texts.length) {
    indexFromListOfWords = 0;
  }
  currentWord = texts[indexFromListOfWords];

  if (deleting) {
    letter = currentWord.slice(0, --index) + "|";
    // text_animation_container.innerHTML = currentWord.slice(0, index);
    // return;
  } else {
    letter = currentWord.slice(0, ++index) + "|";
  }

  text_animation_container.innerHTML = letter;

  if (letter.length - 1 === currentWord.length && !deleting) {
    setTimeout(() => {
      deleting = true;
    }, 1000);
  }

  if (letter.length - 1 === 0 && deleting) {
    deleting = false;
    indexFromListOfWords++;
    index = 0;
  }

  // continue as many times as you want
  setTimeout(typeHomeText, 300);
}

// create the observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startAnimation = true;
      typeHomeText();
    } else {
      startAnimation = false;
    }
  });
});

// observe the element
observer.observe(document.querySelector("#typing-text"));

/* FORMS */

// const form = document.querySelector("form");
// const feedback = document.querySelector("#feedback");

// const messageInput = document.getElementById("message");

// messageInput.addEventListener("input", function (event) {
//   const input = event.target;
//   const inputValue = input.value;
//   const cleanedInputValue = inputValue.replace(/[^a-zA-Z0-9\s,._-]/g, "");
//   input.value = cleanedInputValue;
// });

// form.addEventListener("input", function (event) {
//   const input = event.target;

//   if (input.checkValidity()) {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//     feedback.classList.remove("visible");
//     feedback.classList.add("invisible");
//     feedback.textContent = "";
//   } else {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//     feedback.classList.remove("invisible");
//     feedback.classList.add("visible");

//     // Provide specific feedback messages for each input field
//     switch (input.name) {
//       case "name":
//         feedback.textContent =
//           "Please enter a valid name (letters and spaces only)";
//         break;
//       case "subject":
//         feedback.textContent =
//           "Please enter a valid email header (no numbers or special characters)";
//         break;
//       case "email":
//         if (!input.value.includes("@")) {
//           feedback.textContent = 'Please include an "@" in the email address';
//         } else if (!input.value.includes(".com")) {
//           feedback.textContent =
//             "Please include a valid domain (.com, .org, etc.)";
//         } else {
//           feedback.textContent = "Please enter a valid email address";
//         }
//         break;
//       case "message":
//         if (input.value.length > 100) {
//           feedback.textContent = "Message cannot be longer than 100 characters";
//         } else {
//           feedback.textContent =
//             "Please enter a valid message (letters, numbers, spaces, dashes, and underscores only)";
//         }
//         break;
//       default:
//         feedback.textContent = "Please fill out all required fields";
//         break;
//     }
//   }
// });

const isMobileBrowser = (window.mobileAndTabletCheck = (function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
})());

const skill_items = document.querySelectorAll(".tooltip_trigger");
const showToolTip = (element) => {
  const child = element.firstElementChild;
  if (child.style.visibility === "hidden") {
    child.style.visibility = "visible";
    element.style.fontWeight = "600";
  } else {
    child.style.visibility = "hidden";
    element.style.fontWeight = "200";
  }
};

if (isMobileBrowser) {
  console.log("browsing on mobile");
  skill_items.forEach((skill) => {
    skill.addEventListener("click", () => {
      showToolTip(skill);
    });
  });
}

const menu_btn = document.querySelector(".menu_btn");
const sidebar = document.querySelector(".sidebar");
const CURRENT_MOBILE_SIZE_END = 701;

menu_btn.addEventListener("click", () => {
   

  menu_btn.classList.toggle("open");
  sidebar.classList.toggle("open");
});

menu_btn.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    menu_btn.click();
  }
});

window.addEventListener(
  "resize",
  function (event) {
    if (
      this.window.innerWidth >= CURRENT_MOBILE_SIZE_END &&
      sidebar.classList.contains("open")
    ) {
      sidebar.classList.toggle("open");
      menu_btn.classList.toggle("open");
    }
  },
  true
);
