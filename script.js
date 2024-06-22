//////////////////////////////* MOVING TEXT *///////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const moveUpTextElements = document.querySelectorAll('.move-up-text');
    
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    moveUpTextElements.forEach(element => observer.observe(element));
});


////////////////////////////////////////////////////////* NAVIGATION *//////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.querySelector('.navbar-container');
    
    let lastScrollY = window.scrollY;
    // Ensure the navbar is visible on initial load
    navbarContainer.style.transform = 'translateY(0)';

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        console.log("Current ScrollY: " + currentScrollY);

        // Show the navbar if near the top of the page
        if (currentScrollY < 200) {
            navbarContainer.style.transform = 'translateY(0)';
        } else {
            // scrolling down
            if (currentScrollY > lastScrollY) {
                navbarContainer.style.transform = 'translateY(-125%)';
            } 
            // scrolling up
            else if (currentScrollY < lastScrollY) {
                navbarContainer.style.transform = 'translateY(0)';
            }
        }
        lastScrollY = currentScrollY;
    });
});















////////////////////////////////////////////////////////* FADE IN *//////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.2 // Trigger when at least 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const fadeInTextElements = document.querySelectorAll('.fade-in-text');
    fadeInTextElements.forEach(element => {
        observer.observe(element);
    });
});







////////////////////////////////////////////////////////* MOUSE SCROLLING *///////////////////////////////

/*
document.addEventListener('DOMContentLoaded', () => {
    let smoothScrollEnabled = true;
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
    let isScrolling = false;

    // Configuration options
    const scrollSpeedMultiplier = 2; // Adjust this value to control scroll speed
    const lerpFactor = 0.1; // Adjust this value to control smoothness (0.1 for smooth, closer to 1 for more immediate scrolling)

    // Feature detection for smooth scroll support
    const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;

    // Wheel event listener for mouse scroll
    document.addEventListener('wheel', handleScroll, { passive: false });

    // Touch event listeners for touch scroll
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Variables to store touch positions
    let touchStartY = 0;

    function handleScroll(e) {
        if (!smoothScrollEnabled || !supportsSmoothScroll) return;

        e.preventDefault();

        // Update target scroll position
        targetScroll += e.deltaY * scrollSpeedMultiplier;

        // Start the smooth scroll animation if not already running
        if (!isScrolling) {
            requestAnimationFrame(smoothScroll);
        }
    }

    function handleTouchStart(e) {
        if (e.touches.length === 1) {
            touchStartY = e.touches[0].clientY;
        }
    }

    function handleTouchMove(e) {
        if (!smoothScrollEnabled || e.touches.length !== 1 || !supportsSmoothScroll) return;

        e.preventDefault();

        const touchEndY = e.touches[0].clientY;
        const deltaY = touchStartY - touchEndY;
        touchStartY = touchEndY;

        // Update target scroll position
        targetScroll += deltaY * scrollSpeedMultiplier;

        // Start the smooth scroll animation if not already running
        if (!isScrolling) {
            requestAnimationFrame(smoothScroll);
        }
    }

    function smoothScroll() {
        isScrolling = true;

        // Lerp calculation
        currentScroll += (targetScroll - currentScroll) * lerpFactor;

        window.scrollTo(0, currentScroll);

        // Continue the animation until the target is reached
        if (Math.abs(targetScroll - currentScroll) > 0.5) {
            requestAnimationFrame(smoothScroll);
        } else {
            isScrolling = false;
        }
    }

    // Toggle smooth scrolling
    const toggleScrollCheckbox = document.getElementById('smoothScroll');
    toggleScrollCheckbox.addEventListener('change', function() {
        smoothScrollEnabled = this.checked;
        console.log(`Smooth scroll ${smoothScrollEnabled ? 'enabled' : 'disabled'}`);
    });
});

*/