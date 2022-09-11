(() => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");
  const mainContent = document.querySelector(".content");

  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach(n => n.addEventListener("click", mobileMenuClick));

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    mainContent.classList.toggle("active-content");
  }

  function mobileMenuClick(e) {
    e.preventDefault();
  }
})();

//Subnav link click event
let elements = document.getElementsByClassName("subnav-content-link");
for (var i = 0, len = elements.length; i < len; i++) {
  elements[i].onclick = function (e) {
    e.preventDefault();
    alert("Congratulations! You have clicked the subnav link!");
  }
}


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
