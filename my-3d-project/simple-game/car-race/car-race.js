const canvas = document.getElementById('gameCanvas');
const car = document.getElementById('car');
let carPositionX = canvas.clientWidth / 2 - car.clientWidth / 2;
let gameInterval;
let obstacleInterval;
let isGameOver = false;

function startGame() {
    document.addEventListener('keydown', moveCar);
    obstacleInterval = setInterval(createObstacle, 2000);
    gameInterval = setInterval(updateGame, 20);
}

function moveCar(e) {
    if (isGameOver) return;
    const carLeft = parseInt(car.style.left, 10);
    if (e.key === 'ArrowLeft' && carLeft > 0) {
        carPositionX -= 10;
    } else if (e.key === 'ArrowRight' && carLeft < canvas.clientWidth - car.clientWidth) {
        carPositionX += 10;
    }
    car.style.left = `${carPositionX}px`;
}

function createObstacle() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    obstacle.style.left = `${Math.random() * (canvas.clientWidth - 50)}px`;
    canvas.appendChild(obstacle);

    const moveObstacle = setInterval(() => {
        const obstacleTop = parseInt(obstacle.style.bottom, 10);
        if (obstacleTop > canvas.clientHeight) {
            clearInterval(moveObstacle);
            obstacle.remove();
        } else {
            obstacle.style.bottom = `${obstacleTop + 5}px`;
            if (isCollision(obstacle)) {
                endGame();
            }
        }
    }, 20);
}

function isCollision(obstacle) {
    const obstacleRect = obstacle.getBoundingClientRect();
    const carRect = car.getBoundingClientRect();
    return !(obstacleRect.right < carRect.left || 
             obstacleRect.left > carRect.right || 
             obstacleRect.bottom < carRect.top || 
             obstacleRect.top > carRect.bottom);
}

function updateGame() {
    if (isGameOver) {
        clearInterval(gameInterval);
        clearInterval(obstacleInterval);
    }
}

function endGame() {
    isGameOver = true;
    alert('Game Over!');
}

function restartGame() {
    document.querySelectorAll('.obstacle').forEach(obstacle => obstacle.remove());
    car.style.left = `${canvas.clientWidth / 2 - car.clientWidth / 2}px`;
    carPositionX = canvas.clientWidth / 2 - car.clientWidth / 2;
    isGameOver = false;
    startGame();
}

// Initialize the game
startGame();
