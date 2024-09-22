// JavaScript Animations
function animateJsBox() {
    const jsBox = document.getElementById('js-horizontal');
    
    jsBox.style.transition = 'transform 4s, background-color 4s';
    jsBox.style.transform = 'translateX(200px)';
    jsBox.style.backgroundColor = '#00ff00';
    
    // Reset animation after 4 seconds
    setTimeout(() => {
        jsBox.style.transform = 'translateX(0)';
        jsBox.style.backgroundColor = '#0000ff';
    }, 4000);
    
    // Continuously loop animation
    setInterval(animateJsBox, 8000); // Repeat every 8 seconds
}

// Start animation on page load
window.onload = animateJsBox;
