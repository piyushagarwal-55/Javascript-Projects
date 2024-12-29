// JavaScript to handle scroll event
window.addEventListener("scroll", function () {
    const navBar = document.getElementById("nav_bar");
    
    // Add 'scrolled' class when user scrolls down
    if (window.scrollY > 50) {
      navBar.classList.add("scrolled");
    } else {
      navBar.classList.remove("scrolled");
    }
  });
  