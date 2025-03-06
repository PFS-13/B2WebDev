const canvas = document.getElementById('gameCanvas');
const dino = document.createElement('div');
dino.classList.add('dino');
canvas.appendChild(dino);

let dinoJumping = false;
let dinoY = 0;
let gameInterval;
let cactusInterval;

function startGame() {
    document.addEventListener('keydown', jump);
    cactusInterval = setInterval(createCactus, 2000);
    gameInterval = setInterval(updateGame, 20);
}

function jump(e) {
    if (e.key === ' ' && !dinoJumping) {
        dinoJumping = true;
        let jumpHeight = 0;
        const jumpInterval = setInterval(() => {
            if (jumpHeight >= 100) {
                clearInterval(jumpInterval);
                const fallInterval = setInterval(() => {
                    if (dinoY <= 0) {
                        clearInterval(fallInterval);
                        dinoJumping = false;
                    } else {
                        dinoY -= 5;
                        dino.style.bottom = `${dinoY}px`;
                    }
                }, 20);
            } else {
                jumpHeight += 5;
                dinoY += 5;
                dino.style.bottom = `${dinoY}px`;
            }
        }, 20);
    }
}

function createCactus() {
    const cactus = document.createElement('div');
    cactus.classList.add('cactus');
    cactus.style.left = '600px';
    canvas.appendChild(cactus);

    const moveCactus = setInterval(() => {
        const cactusX = parseInt(cactus.style.left, 10);
        if (cactusX < -20) {
            clearInterval(moveCactus);
            cactus.remove();
        } else {
            cactus.style.left = `${cactusX - 5}px`;
            if (cactusX < 90 && cactusX > 50 && dinoY === 0) {
                endGame();
            }
        }
    }, 20);
}

function updateGame() {
    if (dinoY > 0) {
        dinoY -= 5;
        dino.style.bottom = `${dinoY}px`;
    }
}

function endGame() {
    clearInterval(gameInterval);
    clearInterval(cactusInterval);
    alert('Game Over!');
}

function restartGame() {
    dino.style.bottom = '0px';
    dinoY = 0;
    document.querySelectorAll('.cactus').forEach(cactus => cactus.remove());
    clearInterval(gameInterval);
    clearInterval(cactusInterval);
    startGame();
}

// Initialize the game
startGame();
