// JavaScript Animations
function animateJsBox() {
    const jsBox = document.getElementById('js-box');
    
    jsBox.style.transition = 'transform 5s, background-color 5s';
    jsBox.style.transform = 'scale(1.5) translateX(100px)';
    jsBox.style.backgroundColor = '#00ff00';
    
    // Reset animation after 5 seconds
    setTimeout(() => {
        jsBox.style.transform = 'scale(1) translateX(0px)';
        jsBox.style.backgroundColor = '#0000ff';
    }, 5000);
    
    // Continuously loop animation
    setInterval(animateJsBox, 10000); // Repeat every 10 seconds
}

// Start animation on page load
window.onload = animateJsBox;
