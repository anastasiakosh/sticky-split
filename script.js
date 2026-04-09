// Setting up the Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Triggers when 15% of the block is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
            // Optional: unobserve after revealing so it doesn't fade out when scrolling up
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Select all content blocks on the right side
const blocks = document.querySelectorAll('.content-block');

blocks.forEach((block) => {
    // Add the hidden class via JS. 
    // This ensures that if a user has JS disabled, the blocks remain visible by default.
    block.classList.add('hidden');
    observer.observe(block);
});