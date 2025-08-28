document.addEventListener('DOMContentLoaded', () => {
    // Select the button to open the menu
    const menuToggle = document.getElementById('menu-toggle');
    // Select the off-canvas menu
    const offCanvasMenu = document.getElementById('off-canvas-menu');
    // Select the button to close the menu
    const closeMenu = document.getElementById('close-menu');
    // Select the desktop menu, which we will keep
    const navMenu = document.getElementById('nav-menu');

    // Get the header and footer elements
    const header = document.getElementById('main-nav');
    const footer = document.getElementById('main-footer');
    
    // Define the gradient
    const gradient = 'linear-gradient(to right, #00008B, #00008B)';

    // Apply the gradient
    header.style.background = gradient;
    footer.style.background = gradient;

    // Show the off-canvas menu on mobile when the hamburger icon is clicked
    menuToggle.addEventListener('click', () => {
        offCanvasMenu.classList.remove('translate-x-full');
    });

    // Hide the off-canvas menu when the 'X' button is clicked
    closeMenu.addEventListener('click', () => {
        offCanvasMenu.classList.add('translate-x-full');
    });

    // Handle menu visibility on window resize
    function handleResize() {
        if (window.innerWidth >= 640) { // Tailwind's 'sm' breakpoint
            navMenu.classList.remove('hidden');
            offCanvasMenu.classList.add('translate-x-full'); // Hide off-canvas on desktop
        } else {
            navMenu.classList.add('hidden');
        }
    }

    // Call handleResize on page load and window resize
    handleResize();
    window.addEventListener('resize', handleResize);
});