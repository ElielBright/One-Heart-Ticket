
document.getElementById("payment").addEventListener("change", function() {
    var paymentMethod = this.value;
    var payButton = document.getElementById("payButton");
    
    if (paymentMethod) {
        payButton.disabled = false; // Enable the button
    } else {
        payButton.disabled = true;  // Disable the button
    }
});

// Get the menu toggle element
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

// Add click event listener
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active'); // Toggle active class
    navList.classList.toggle('show'); // Show/hide the navigation
});

// Smooth scrolling effect
document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Enable smooth scrolling
            });
        }
    });
});


