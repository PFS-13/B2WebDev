const board = document.querySelector('.board');
let currentPlayer = 'X';
let gameActive = true;
const status = document.getElementById('status');

function makeMove(cell) {
    if (cell.textContent || !gameActive) return;
    cell.textContent = currentPlayer;
    if (checkWin()) {
        status.textContent = `${currentPlayer} Wins!`;
        gameActive = false;
    } else if (Array.from(document.querySelectorAll('.cell')).every(cell => cell.textContent)) {
        status.textContent = "It's a Draw!";
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        status.textContent = `${currentPlayer}'s Turn`;
    }
}

function checkWin() {
    const cells = Array.from(document.querySelectorAll('.cell'));
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
    });
}

function resetGame() {
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    gameActive = true;
    status.textContent = "X's Turn";
}

// Initialize the game
status.textContent = "X's Turn";
