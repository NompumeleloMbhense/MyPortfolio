// This is a JavaScript file for a personal portfolio website.
// It includes functionality for a hamburger menu, smooth scrolling, and form validation.

        // Hamburger Menu
        document.getElementById('hamburger').addEventListener('click', ToggleMenu);

        function ToggleMenu() {
            const navLinks = document.getElementById('nav-links');
            navLinks.classList.toggle('show');
        }

        // Smooth Scroll
        function SmoothScroll(target) {
            const element = document.getElementById(target);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            const anchors = document.querySelectorAll('a[href^="#"]');
            anchors.forEach(function(anchor) {
                anchor.addEventListener('click', function(event) {
                    event.preventDefault();
                    const target = anchor.getAttribute('href').substring(1);
                    SmoothScroll(target);
                });
          });

            // Form Validation
            const form = document.getElementById('contact-form');
            if (form) {
                form.addEventListener('submit', function(event) {
                    const name = document.getElementById('name').value.trim();
                    const email = document.getElementById('email').value.trim();
                    const message = document.getElementById('message').value.trim();
                    let isValid = true;

                    if (!name) {
                        alert('Please enter your name.');
                        isValid = false;
                    }

                    if (!email) {
                        alert('Please enter your email.');
                        isValid = false;
                    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                        alert('Please enter a valid email address.');
                        isValid = false;
                    }

                    if (!message) {
                        alert('Please enter your message.');
                        isValid = false;
                    }

                    if (!isValid ) {
                        event.preventDefault();
                    }
                });
            }

            // Simple scroll animations
            const animatedElements = document.querySelectorAll('.project-card, .skill-item, .contact-form');
            
            function checkAnimation() {
                animatedElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const isVisible = elementTop < window.innerHeight - 100;
                    
                    if (isVisible) {
                        element.classList.add('visible');
                    }
                });
            }
            
            // Check on load and scroll
            checkAnimation();
            window.addEventListener('scroll', checkAnimation);
        });

