// script.js
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('loginModal');
    const authButtons = document.querySelectorAll('.btn-outline, .btn-primary');
    const closeModal = document.querySelector('.close-modal');
    
    authButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'flex';
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});
