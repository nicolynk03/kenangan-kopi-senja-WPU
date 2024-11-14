// class active toggle (toggle for the hamburger menu)
const navbarNav = document.querySelector('.navbar-nav');
// when the hamburger menu is clicked
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// click anywhere to close the hamburger menu
// gets element with the id of hamburger-menu
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(event) {
    // if clicked outside of the hamburger menu
    if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
        navbarNav.classList.remove('active');
    }
})