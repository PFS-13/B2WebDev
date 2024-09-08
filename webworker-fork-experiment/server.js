// // Tanpa Web Workers
// const express = require('express');
// const app = express();
// const port = 3000;

// function intensiveTask() {
//     let count = 0;
//     for (let i = 0; i < 1e7; i++) {
//         count += i;
//     }
//     return count;
// }

// app.get('/', (req, res) => {
//     const result = intensiveTask();
//     res.send(`Result: ${result}`);
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// Dengan Web Workers
const express = require('express');
const { Worker } = require('worker_threads');

const app = express();
const port = 3000;

function runService(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
}

app.get('/', async (req, res) => {
    const result = await runService({ task: 'intense_computation' });
    res.send(`Result: ${result}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
