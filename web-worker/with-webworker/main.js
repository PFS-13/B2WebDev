document.getElementById('startComputation').addEventListener('click', function() {
    const output = document.getElementById('output');
    output.innerHTML = "Loading data...";

    // Muat data dari file CSV
    fetch('movies_metadata_new.csv')
        .then(response => response.text())
        .then(text => {
            // Buat Web Worker
            const worker = new Worker('worker.js');
            
            // Kirim data ke Web Worker
            worker.postMessage(text);
            
            // Tangani pesan dari Web Worker
            worker.onmessage = function(e) {
                const result = e.data;
                output.innerHTML = `
                    Processed ${result.count} movies.<br>
                    Average Vote Average: ${result.averageVoteAverage.toFixed(2)}
                `;
            };
            
            // Tangani kesalahan Web Worker
            worker.onerror = function(error) {
                output.innerHTML = `Error in worker: ${error.message}`;
            };
        })
        .catch(error => {
            output.innerHTML = `Error loading data: ${error.message}`;
        });
});
