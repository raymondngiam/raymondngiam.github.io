const canvas = document.getElementById('matrixRain');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.15;
}

resizeCanvas();

const letters = 'アァイィウヴエカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

let fontSize = canvas.height / 15; // Adjust this divisor for density
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrixRain() {
ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = '#0F0';
ctx.font = `${fontSize}px monospace`;

for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
    drops[i] = 0;
    }
    drops[i]++;
}
}

setInterval(drawMatrixRain, 50);

window.addEventListener('resize', () => {
resizeCanvas();
fontSize = canvas.height / 20;
columns = Math.floor(canvas.width / fontSize);
drops = Array(columns).fill(1);
});
