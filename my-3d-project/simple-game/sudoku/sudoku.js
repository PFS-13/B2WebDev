const SIZE = 9;
const SUBGRIDSIZE = 3;
const sudokuGrid = document.getElementById('sudoku-grid');

// Initialize the Sudoku grid
function initSudoku() {
    for (let row = 0; row < SIZE; row++) {
        let tr = document.createElement('tr');
        for (let col = 0; col < SIZE; col++) {
            let td = document.createElement('td');
            let input = document.createElement('input');
            input.type = 'text';
            input.maxLength = '1';
            td.appendChild(input);
            tr.appendChild(td);
        }
        sudokuGrid.appendChild(tr);
    }
    // Optionally populate with a sample puzzle
    populateSamplePuzzle();
}

// Populate the Sudoku grid with a sample puzzle
function populateSamplePuzzle() {
    const samplePuzzle = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
            if (samplePuzzle[row][col] !== 0) {
                sudokuGrid.rows[row].cells[col].querySelector('input').value = samplePuzzle[row][col];
            }
        }
    }
}

// Check if the current Sudoku grid is valid
function checkSolution() {
    const inputs = document.querySelectorAll('#sudoku-grid input');
    let isValid = true;
    let status = '';

    const values = Array.from(inputs).map(input => input.value ? parseInt(input.value, 10) : 0);
    for (let i = 0; i < SIZE; i++) {
        if (!checkRow(values, i) || !checkColumn(values, i) || !checkSubgrid(values, i)) {
            isValid = false;
            break;
        }
    }

    status = isValid ? 'Congratulations! The Sudoku solution is valid.' : 'Invalid Sudoku solution. Please check again.';
    document.getElementById('status').textContent = status;
}

function checkRow(values, row) {
    const rowValues = new Set();
    for (let col = 0; col < SIZE; col++) {
        const value = values[row * SIZE + col];
        if (value && rowValues.has(value)) return false;
        rowValues.add(value);
    }
    return true;
}

function checkColumn(values, col) {
    const colValues = new Set();
    for (let row = 0; row < SIZE; row++) {
        const value = values[row * SIZE + col];
        if (value && colValues.has(value)) return false;
        colValues.add(value);
    }
    return true;
}

function checkSubgrid(values, index) {
    const subgridValues = new Set();
    const startRow = Math.floor(index / SUBGRIDSIZE) * SUBGRIDSIZE;
    const startCol = (index % SUBGRIDSIZE) * SUBGRIDSIZE;
    for (let row = startRow; row < startRow + SUBGRIDSIZE; row++) {
        for (let col = startCol; col < startCol + SUBGRIDSIZE; col++) {
            const value = values[row * SIZE + col];
            if (value && subgridValues.has(value)) return false;
            subgridValues.add(value);
        }
    }
    return true;
}

// Reset the Sudoku grid
function resetGame() {
    document.querySelectorAll('#sudoku-grid input').forEach(input => input.value = '');
    document.getElementById('status').textContent = '';
}

// Initialize the Sudoku game
initSudoku();
