const navToggle = document.querySelector(".mobile-nav-toggle");
const myNav = document.querySelector(".navigation");

navToggle.addEventListener("click", () => {
    if(myNav.hasAttribute("data-visible")) {
        navToggle.setAttribute("aria-expanded", false) ;
        document.getElementById('overlay').style.display = 'none';
    } else {
        navToggle.setAttribute("aria-expanded", true);
        document.getElementById('overlay').style.display = 'block';
    }
myNav.toggleAttribute("data-visible");
});