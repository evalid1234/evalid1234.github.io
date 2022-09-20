// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 

const animation = document.querySelector(".animation_container");
const hamburger_menu = document.querySelector('.hamburger_menu');
const links = document.querySelectorAll('.item');
function toggle(link) {
  link.classList.toggle('item');
}
hamburger_menu.addEventListener('click', () => {
  links.forEach(toggle);
  animation.classList.toggle("show");
});
function checkIfClicked(element) {
  element.addEventListener('click',()=> {
    links.forEach(toggle);
  });
}
links.forEach(checkIfClicked)


/*message*/
// const message = document.querySelector('.animation_message');
// message.addEventListener("animationiteration", listener, false);
// 
let count = 1;
function listener(event) {
  switch (event.type) {
    case "animationiteration":
      if (count === 1) {
        message.innerHTML = "<p> Web development </p>";
        count++;
      } else if (count === 2) {
        message.innerHTML = "<p> Tutoring </p>";
        count++;
      } else{
        message.innerHTML = "<p> Software Dev </p > ";
        count = 1;
      }
      break;
  }
}

/* fade in */
const faders = document.querySelectorAll('.fade_in');
const slider = document.querySelectorAll('.slide_in');

const options = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px"
};
const appearOnScroll = new IntersectionObserver(function
(
  entries,
  appearOnScroll
)
{
  entries.forEach(entry => { 
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

slider.forEach(slider => {
  appearOnScroll.observe(slider);
});