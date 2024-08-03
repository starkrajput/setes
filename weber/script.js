//Navbar
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbarS');
    const menuIcon = document.getElementById('menu-iconS');
    const navbarMenu = document.getElementById('navbar-menuS');

    let isOpen = false;
    let isScrollingUp = true;
    let lastScrollY = window.scrollY;
    let isAtTop = true;

    const toggleMenu = () => {
        isOpen = !isOpen;
        if (isOpen) {
            navbarMenu.classList.add('open');
        } else {
            navbarMenu.classList.remove('open');
        }
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            isScrollingUp = false;
            navbar.classList.add('hidden');
        } else {
            isScrollingUp = true;
            navbar.classList.remove('hidden');
        }

        lastScrollY = currentScrollY;
        isAtTop = currentScrollY === 0;
        if (!isAtTop) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    menuIcon.addEventListener('click', toggleMenu);
    window.addEventListener('scroll', handleScroll);
});


//Banner
            document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const words = document.querySelectorAll('.word');
    let currentIndex = 0;

    function showSlide(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        words.forEach((word, i) => {
            word.classList.toggle('active', i === index);
            word.querySelector('.loading-bar').classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000);
    showSlide(currentIndex);
});




//Section 2
   document.addEventListener('DOMContentLoaded', () => {
    const sectionRef = document.querySelector('#section-2');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const containers = entry.target.querySelectorAll('.staircase-image-container');
                    containers.forEach((container, index) => {
                        container.classList.add('animate');
                        container.style.animationDelay = `${(containers.length - index - 1) * 0.2}s`;
                    });
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    if (sectionRef) {
        observer.observe(sectionRef);
    }
});



 // Section 3
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#carousel');
    const slide = carousel.querySelector('.carousel-slide');
    const cards = Array.from(carousel.querySelectorAll('.carousel-card'));
    const cardCount = cards.length;
    const visibleCardCount = 5; // Number of cards visible at once
    const cardWidth = cards[0].offsetWidth;
    let currentIndex = 0;
    const interval = 3000; // Auto play interval in milliseconds

    // Clone cards to create a seamless loop
    cards.forEach(card => {
        slide.appendChild(card.cloneNode(true));
    });

    // Set the width of the carousel slide
    slide.style.width = `${cardWidth * cards.length * 2}px`; // Adjust for duplicated cards

    function updateCarousel() {
        const offset = -(cardWidth * currentIndex);
        slide.style.transform = `translateX(${offset}px)`;

        // Update card scaling
        const centerIndex = Math.floor(visibleCardCount / 2)%14; // Center index for scaling
        cards.forEach((card, index) => {
            const cardIndex = (currentIndex + centerIndex) % cards.length;
            const scale = (index >= cardIndex - centerIndex && index < cardIndex + centerIndex + 1) ? (index === cardIndex ? 1.2 : 0.8) : 1;
            card.style.transform = `scale(${scale})`;
        });
    }

    function autoPlay() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % cards.length;
            updateCarousel();
        }, interval);
    }

    autoPlay();
    updateCarousel();
});



// Section 4
function updateLayout() {
    const container = document.getElementById('section-container');
    const width = window.innerWidth;

    const isSmall = width <= 480;
    const isMedium = width <= 768;
    const isMedium2 = width <= 780;
    const isMedium3 = width <= 805;
    const isMedium4 = width <= 830;
    const isMedium5 = width <= 880;
    const isMedium6 = width <= 950;
    const isMedium7 = width <= 970;
    const isLarge = width <= 1024;
    const isXLarge = width <= 1168;
    const isFullSize = width > 1168;

    container.style.flexDirection = isSmall || isMedium || isLarge || isXLarge ? 'column' : 'row';
    container.style.alignItems = isSmall || isMedium || isLarge || isXLarge ? 'center' : 'flex-start';
    container.style.width = isFullSize ? '100%' : getWidth();
    container.style.margin = isSmall || isMedium || isLarge || isXLarge ? '0 130px 0 0' : 'auto';
}

function getWidth() {
    const width = window.innerWidth;
    if (width <= 480) return '30.5%';
    if (width <= 768) return '36%';
    if (width <= 780) return '45%';
    if (width <= 805) return '55%';
    if (width <= 830) return '55%';
    if (width <= 880) return '55%';
    if (width <= 950) return '66%';
    if (width <= 970) return '75%';
    if (width <= 1024) return '11%';
    if (width <= 1168) return '75%';
    return '100%';
}

window.addEventListener('resize', updateLayout);
window.addEventListener('load', updateLayout);


 /*   // Contact Us 
    document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value,
        };
        
        try {
            const response = await fetch('https://formspree.io/f/{form-id}', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                form.reset(); // Clear the form after submission
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    });
});
*/
document.addEventListener('DOMContentLoaded', () => {
    emailjs.init('service_5poie1k'); // Initialize EmailJS with your user ID

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value,
        };

        try {
            const response = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);

            if (response.status === 200) {
                alert('Message sent successfully');
                form.reset(); // Clear the form after submission
            } else {
                alert('Failed to send message');
            }
        } catch (error) {
            alert('Error sending message: ' + error);
        }
    });
});




