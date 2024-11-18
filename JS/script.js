// class active toggle (toggle for the hamburger menu)
const navbarNav = document.querySelector('.navbar-nav');
// when the hamburger menu is clicked
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// toggle active class (search form)
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
document.querySelector('#search-button').onclick = (event) => {
    searchForm.classList.toggle('active');
    // focuses on the input/search box when search button is clicked
    searchBox.focus();
    // disable default action (brings to top when clicked)
    event.preventDefault();
};

// toggle active class (shopping button)
const shoppingBag = document.querySelector('.shopping-bag');
document.querySelector("#shopping-bag-button").onclick = (event) => {
    shoppingBag.classList.toggle('active');
    event.preventDefault();
}


// click anywhere to close thean element
// gets element with the id of hamburger-menu
const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const shoppingButton = document.querySelector('#shopping-bag-button');
document.addEventListener('click', function(event) {
    // if clicked outside of the hamburger menu
    if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
        navbarNav.classList.remove('active');
    }
    // if clicked outside of the search button
    if (!searchButton.contains(event.target) && !searchForm.contains(event.target)) {
        searchForm.classList.remove('active');
    }
    // if clicked outside of the shopping bag button
    if (!shoppingButton.contains(event.target) && !shoppingBag.contains(event.target)) {
        shoppingBag.classList.remove('active');
    }
})

// automate year changes
// Reference: https://www.pixelhaze.academy/blog/automate-your-footers-copyright-year-with-javascript
var currentYear = new Date().getFullYear(); // holds the current year
document.getElementById("currentYear").innerHTML = currentYear; //set specified HTML element to currentYear variable

