
// Typing Effect
const textToType = "dr_hako@security-terminal:~$ init_recon";
const typingSpeed = 70;
let charIndex = 0;

function typeWriter() {
    if (charIndex < textToType.length) {
        document.getElementById("typewriter").innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        document.getElementById("typewriter").innerHTML += '<span style="animation: blink 1s infinite;">_</span>';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeWriter, 500);
    
    // Initialize Particles JS
    if(window.particlesJS) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00f3ff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.3, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#8b5cf6", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true, "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" }
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }
});

const style = document.createElement('style');
style.innerHTML = `@keyframes blink { 0% {opacity: 1;} 50% {opacity: 0;} 100% {opacity: 1;} }`;
document.head.appendChild(style);
