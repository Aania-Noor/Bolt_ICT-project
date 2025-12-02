let reviews = document.querySelectorAll('.reviewbox');
let current = 0;

reviews[current].classList.add('active');

setInterval(() => {
    let next = (current + 1) % reviews.length;


    reviews[current].classList.remove('active');
    reviews[current].classList.add('slide-out');

    
    reviews[next].classList.add('slide-in');

    
    reviews[next].offsetHeight; 


    reviews[next].classList.remove('slide-in');
    reviews[next].classList.add('active');

    setTimeout(() => {
        reviews[current].classList.remove('slide-out');
        current = next;
    }, 500); 
}, 3000);
document.addEventListener('DOMContentLoaded', function() {
    const navbarCartLink = document.getElementById('navbar-cart-link');
    
    if (navbarCartLink) {
        navbarCartLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (window.openCartModal) {
                window.openCartModal();
            }
        });
    }
});
