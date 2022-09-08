(() => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach(n => n.addEventListener("click", openNavLink));

  const mobileMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  const closeMenu = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }

  const openNavLink = (e) => {
    e.preventDefault();
    document.getElementsByClassName("nav-link").style.display = "block";
  }
})()


  (() => {
    window.onscroll = () => addOrRemoveSticky();

    const navbar = document.getElementById("navbar");
    let sticky = navbar.offsetTop;

    const addOrRemoveSticky = () => {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
  })()