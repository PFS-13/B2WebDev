document.getElementById('startComputation').addEventListener('click', function() {
    const output = document.getElementById('output');
    output.innerHTML = "Loading data...";

    // Muat data dari file CSV
    fetch('movies_metadata_new.csv')
        .then(response => response.text())
        .then(text => {
            // Parse CSV
            const rows = text.split('\n').slice(1); // Mengabaikan header
            const data = rows.map(row => {
                const cols = row.split(',');

                return {
                    adult: cols[0],
                    belongs_to_collection: cols[1],
                    budget: parseFloat(cols[2]) || 0,
                    genres: cols[3],
                    homepage: cols[4],
                    id: cols[5],
                    imdb_id: cols[6],
                    original_language: cols[7],
                    original_title: cols[8],
                    overview: cols[9],
                    popularity: parseFloat(cols[10]) || 0,
                    poster_path: cols[11],
                    production_companies: cols[12],
                    production_countries: cols[13],
                    release_date: cols[14],
                    revenue: parseFloat(cols[15]) || 0,
                    runtime: parseInt(cols[16], 10) || 0,
                    spoken_languages: cols[17],
                    status: cols[18],
                    tagline: cols[19],
                    title: cols[20],
                    video: cols[21],
                    vote_average: parseFloat(cols[22]) || 0,
                    vote_count: parseInt(cols[23], 10) || 0
                };
            }).filter(movie => movie.title); // Filter kosong

            // Contoh komputasi berat: Menghitung rata-rata vote average
            const voteAverages = data.map(movie => movie.vote_average);
            const averageVoteAverage = voteAverages.reduce((a, b) => a + b, 0) / voteAverages.length;

            // Tampilkan hasil
            output.innerHTML = `
                Processed ${data.length} movies.<br>
                Average Vote Average: ${averageVoteAverage.toFixed(2)}
            `;
        })
        .catch(error => {
            output.innerHTML = `Error loading data: ${error.message}`;
        });
});
