(() => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");

  const navItem = document.querySelectorAll(".nav-item");

  const mainContent = document.querySelector(".content");
  let clickedSubNavItem = document.querySelector(".subnav-content");

  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach(n => n.addEventListener("click", mobileMenuClick));
  /*navItem.forEach(n => n.addEventListener("click", console.log("clicked nav-item")));*/

  clickedSubNavItem.addEventListener("click", subNavClick);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    mainContent.classList.toggle("active-content");
    console.log(hamburger.classList.contains("active"));
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    console.log(hamburger.classList.contains("active"));
  }

  function mobileMenuClick(e) {
    e.preventDefault();
    console.log("clicked");
  }

  function subNavClick(e) {

    console.log("clicked subnav");
  }
})();



// When the user scrolls the page, execute function
window.onscroll = function () { addOrRemoveSticky() };

// Get the navbar
const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const addOrRemoveSticky = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



/*const height = window.innerHeight || document.documentElement.clientHeight ||
  document.body.clientHeight;

console.log(height);

const setNavMenuHeight = () => {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.style.minHeight = `${height}px`;
  navMenu.style.height = 'fit-content';
}*/

