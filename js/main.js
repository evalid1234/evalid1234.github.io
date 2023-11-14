//loader
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector(".loading_group").style.display = "none";
});

//home fade in
window.addEventListener("load", function () {
  const home = document.querySelector("#home");
  if (home) {
    home.classList.add("show");
  }
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

const texts = ["Software Dev", "Full Stack Dev", "Tutor"];

let goingBackwards = false;
let indexFromListOfWords = 0;
let index = 0;
let currentWord = "";
let letter = "";
let deleting = false;
let startAnimation = false;
const text_animation_container = document.querySelector("#typing-text");
if (text_animation_container) {
  function typeHomeText() {
    if (!startAnimation) {
      return;
    }

    if (indexFromListOfWords === texts.length) {
      indexFromListOfWords = 0;
    }
    currentWord = texts[indexFromListOfWords];

    // animate only once !
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
    setTimeout(typeHomeText, 150);
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
}

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

if (isMobileBrowser && skill_items) {
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

function encryptEmail(email, provider, domain, key) {
  let encryptedEmail = "";
  const combinedEmail = email + provider + domain;

  for (let i = 0; i < combinedEmail.length; i++) {
    encryptedEmail += String.fromCharCode(combinedEmail.charCodeAt(i) ^ key);
  }

  return encryptedEmail;
}

// Email decryption function
function decryptEmail(encryptedEmail, key) {
  let email = "";

  for (let i = 0; i < encryptedEmail.length; i++) {
    email += String.fromCharCode(encryptedEmail.charCodeAt(i) ^ key);
  }

  return email;
}

// Configuration
const encryptionKey = 42;
const usernamePart = "pr" + "og" + "ra" + "m";
const helperPart = "he" + "lp" + "er";
const agePart = 25;
const emailProvider = String.fromCharCode(64) + "gma" + "il";
const emailDomain = ".com";

// Encrypt the email
const encryptedEmail = encryptEmail(
  usernamePart + helperPart + agePart,
  emailProvider,
  emailDomain,
  encryptionKey
);

// Decrypt the email
const decryptedEmail = decryptEmail(encryptedEmail, encryptionKey);

// Update email links
const emailLinks = document.querySelectorAll(".email");
emailLinks.forEach((link) => {
  link.href = "mailto:" + decryptedEmail + "?subject=[VIA PERSONAL WEBSITE]:";
});

// course stuff
const course_button = document.querySelector(".course_button");
const foundational_courses = document.querySelector(".foundational_courses");
const computational_courses = document.querySelector(".computational_courses");

if (course_button && foundational_courses && computational_courses) {
  course_button.addEventListener("click", () => {
    computational_courses.classList.toggle("active");
    foundational_courses.classList.toggle("active");
  });
}

const sort_video = document.querySelector("#sort_video");
const pause_btns = document.querySelectorAll(".pause_btn");
const text_hide_btns = document.querySelectorAll(".text_btn");
const video_hide_btns = document.querySelectorAll(".hide_video_btn");

function toggle_pause(element) {
  if (element.paused) {
    element.play();
  } else {
    element.pause();
  }
}

// REFACTOR TO USE OBJECTS INSTEAD OF STRING LITERAL

function toggle_button_text(element) {
  const parentElement = element.parentElement.parentElement;
  const childElement = element.children[0];
  const message = childElement.innerHTML.toLowerCase();
  switch (message) {
    case "pause":
      childElement.innerHTML = "Play";
      break;
    case "play":
      childElement.innerHTML = "Pause";
      break;
    // case "hide text":
    //   childElement.innerHTML = "Show text";
    //   break;
    // case "show text":
    //   childElement.innerHTML = "Hide text";
    //   break;

    default:
      break;
  }
}

function toggle_class_to_content_div(button_element, className) {
  const parentElement = button_element.parentElement.parentElement;
  if (
    parentElement.classList.contains("hide_text") &&
    className === "focus_text"
  ) {
    parentElement.classList.remove("hide_text");
  } else if (
    parentElement.classList.contains("focus_text") &&
    className === "hide_text"
  ) {
    parentElement.classList.remove("focus_text");
  }
  parentElement.classList.toggle(className);
}

if (pause_btns) {
  pause_btns.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("sort") && sort_video) {
        toggle_pause(sort_video);
        toggle_button_text(button);
      }
    });
  });
}

if (text_hide_btns) {
  text_hide_btns.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("sort") && sort_video) {
        //  calls
        toggle_class_to_content_div(button, "hide_text");
        // toggle_button_text(button);
      }
    });
  });
}

if (video_hide_btns) {
  video_hide_btns.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("sort") && sort_video) {
        toggle_class_to_content_div(button, "focus_text");

        //  calls
      }
    });
  });
}
