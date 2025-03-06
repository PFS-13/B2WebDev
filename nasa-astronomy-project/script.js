// API Key Anda dari NASA
const API_KEY = 'gGOGQ6dB2GaopfFBR3bU0vr6Mzd7FDer8CilxFHW';
const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

// Fungsi untuk mendapatkan data dari NASA API
async function fetchApodData(startDate, endDate) {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

// Fungsi untuk menampilkan gambar-gambar di halaman
function displayApodData(data) {
    const container = document.getElementById('apod-container');
    container.innerHTML = ''; // Kosongkan kontainer sebelum menambahkan gambar

    data.forEach(item => {
        const apodItem = document.createElement('div');
        apodItem.classList.add('apod-item');

        const dateElem = document.createElement('p');
        dateElem.classList.add('apod-date');
        dateElem.textContent = `Date: ${item.date}`;
        
        const imgElem = document.createElement('img');
        imgElem.classList.add('apod-image');
        imgElem.src = item.url;
        imgElem.alt = item.title;

        const titleElem = document.createElement('h3');
        titleElem.classList.add('apod-title');
        titleElem.textContent = item.title;

        const descriptionElem = document.createElement('p');
        descriptionElem.classList.add('apod-description');
        descriptionElem.textContent = item.explanation;

        apodItem.appendChild(dateElem);
        apodItem.appendChild(imgElem);
        apodItem.appendChild(titleElem);
        apodItem.appendChild(descriptionElem);

        container.appendChild(apodItem);
    });
}

// Fungsi utama untuk memuat data dan menampilkannya
async function loadApodImages() {
    try {
        // Mendapatkan tanggal satu bulan terakhir
        const today = new Date();
        const endDate = today.toISOString().split('T')[0];
        const startDate = new Date(today.setMonth(today.getMonth() - 1)).toISOString().split('T')[0];

        const data = await fetchApodData(startDate, endDate);
        displayApodData(data);
    } catch (error) {
        console.error('Error fetching or displaying data:', error);
    }
}

// Jalankan fungsi utama saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadApodImages);
