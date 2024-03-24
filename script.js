const menuBars = document.querySelector(".menu-bars");
const overlay = document.querySelector(".overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");

const navItems = [nav1, nav2, nav3, nav4, nav5];

// navAnimation function
function navAnimation(from, to) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${from}-${i + 1}`, `slide-${to}-${i + 1}`);
  });
}

// toggleNav function
function toggleNav() {
  // Toggle 'change' CSS class - hamburger Menu Display
  menuBars.classList.toggle("change");
  // Toggle overlay
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Slide the overlay div to the right
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // Animate nav items in
    // navAnimation("out", "in");
    nav1.classList.remove("slide-out-1");
    nav1.classList.add("slide-in-1");
    nav2.classList.remove("slide-out-2");
    nav2.classList.add("slide-in-2");
    nav3.classList.remove("slide-out-3");
    nav3.classList.add("slide-in-3");
    nav4.classList.remove("slide-out-4");
    nav4.classList.add("slide-in-4");
    nav5.classList.remove("slide-out-5");
    nav5.classList.add("slide-in-5");
  } else {
    // Slide the overlay div to the left
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // Animate nav items out
    // navAnimation("in", "out");
    nav1.classList.remove("slide-in-1");
    nav1.classList.add("slide-out-1");
    nav2.classList.remove("slide-in-2");
    nav2.classList.add("slide-out-2");
    nav3.classList.remove("slide-in-3");
    nav3.classList.add("slide-out-3");
    nav4.classList.remove("slide-in-4");
    nav4.classList.add("slide-out-4");
    nav5.classList.remove("slide-in-5");
    nav5.classList.add("slide-out-5");
  }
}

// Event Listeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
