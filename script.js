const background = document.querySelector('.background');

window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    background.style.transform = `scale(1.2) translate(${x * 30}px, ${y * 30}px) rotate(${x * 20}deg) skew(${y * 10}deg)`;
});

window.addEventListener('mouseleave', () => {
    background.style.transform = 'scale(1) translate(0, 0) rotate(0deg) skew(0deg)';
});
