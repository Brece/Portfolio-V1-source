let hamburger = document.querySelector(".menu-btn");
let navbar = document.querySelector(".navbar");
let navContainer = document.querySelector(".nav-container");
let navLi = document.querySelectorAll(".nav-li");

// event listener for hamburger and navbar, navbar hidden on mobile by default
const mediaQueryTablet = window.matchMedia("(min-width: 760px)");

hamburger.addEventListener("click", dropDown);
navLi.forEach(collapseLi);

mediaQueryTablet.addEventListener("change", handleTabletChange);
window.addEventListener("scroll", navSticky);

handleTabletChange(mediaQueryTablet);
navSticky(window);

function handleTabletChange(e) {
  if (e.matches) {
    navbar.style.display = "block";
    hamburger.classList.remove("opened");
    hamburger.setAttribute(
      "aria-expanded",
      false
    );
  } else {
    navbar.style.display = "none";
    navContainer.style.cssText =
      "height: 50px; background-color: #000; padding: 0 2em";
  }
}

function dropDown() {
  this.classList.toggle("opened");
  this.setAttribute("aria-expanded", this.classList.contains("opened"));
  if (this.getAttribute("aria-expanded") === "true") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
}

function navSticky() {
  if (this.pageYOffset >= 100) {
    navContainer.style.cssText =
      "height: 50px; background-color: #000; padding: 0 2em";
  } else {
    if (mediaQueryTablet.matches) {
      navContainer.style.cssText =
        "height: 82px; background-color: rgba(0, 0, 0, 0); padding: 1em 2em";
    }
  }
}

function collapseLi(e){
  e.addEventListener("click", function(){
  if(!mediaQueryTablet.matches){
      hamburger.classList.remove("opened");
      hamburger.setAttribute("aria-expanded", false);
      navbar.style.display = "none";
    }
  })
}

// GSAP animations
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

tl.from(".content", {
  y: -140,
  opacity: 0,
  duration: 2,
  ease: "expo.inOut",
}).from(
  ".meet",
  {
    y: 40,
    opacity: 0,
    duration: 2,
    ease: "expo.inOut",
  },
  "-=2"
);

gsap.from(".transition1", {
  scrollTrigger: {
    trigger: ".transition1",
    start: "top center",
  },
  y: 50,
  opacity: 0,
  duration: 1.5,
  stagger: 0.3,
});

gsap.from(".transition2", {
  scrollTrigger: {
    trigger: ".transition2",
    start: "top center",
  },
  y: 50,
  opacity: 0,
  duration: 1.5,
  stagger: 0.3,
});

gsap.from(".transition3", {
  scrollTrigger: {
    trigger: ".transition3",
    start: "top center",
  },
  y: 50,
  opacity: 0,
  duration: 1.5,
  stagger: 0.6,
});
