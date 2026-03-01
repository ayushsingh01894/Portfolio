console.log("Portfolio Loaded 🚀");
const roles = [
  "Web Developer",
  "Data Analytics Enthusiast",
  "Machine Learning Explorer"
];

let roleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById("typing");
  const fullText = roles[roleIndex];

  if (isDeleting) {
    currentText = fullText.substring(0, charIndex--);
  } else {
    currentText = fullText.substring(0, charIndex++);
  }

  typingElement.textContent = currentText;

  if (!isDeleting && charIndex === fullText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navItems = navLinks.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});


document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

const images = [
  "images/pic1.jpeg",
  "images/pic2.jpeg",
  "images/pic3.jpeg",
  "images/pic4.jpeg",
  "images/pic5.jpeg"
];
let index = 0;
const slider = document.getElementById("slider-img");

setInterval(() => {
  index = (index + 1) % images.length;
  slider.style.opacity = 0;
  
  setTimeout(() => {
    slider.src = images[index];
    slider.style.opacity = 1;
  }, 400);
}, 3000);

