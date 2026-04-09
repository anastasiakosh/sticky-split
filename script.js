const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
        }
    });
}, observerOptions);

const blocks = document.querySelectorAll('.content-block');

blocks.forEach((block) => {
    block.classList.add('hidden');
    observer.observe(block);
});