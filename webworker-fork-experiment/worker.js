const { parentPort, workerData } = require('worker_threads');

function intensiveTask() {
    // Simulasi tugas yang intensif
    let count = 0;
    for (let i = 0; i < 1e7; i++) {
        count += i;
    }
    return count;
}

parentPort.postMessage(intensiveTask());
