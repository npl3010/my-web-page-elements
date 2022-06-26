let navbar = document.querySelector('.nav');
let topHeader = document.querySelector('.top-header');
var topHeader_Height = 0; // Chiều cao của top-header bao gồm cả padding và border:

// Scroll:
window.addEventListener("scroll", function() {
    topHeader_Height = topHeader.offsetHeight;
    // Nếu scroll xuống quá chiều cao của top-header, thì lúc này navbar sẽ fixed:
    navbar.classList.toggle("fixed", window.scrollY > topHeader_Height);
});



// Click Hamburger button:
let hamburgerBtn = document.querySelector(".hamburger-btn");
let topSection = document.querySelector(".top-section");

hamburgerBtn.addEventListener("click", function() {
    topSection.classList.toggle("active");
});
