// Contoh Asynchronous JavaScript
async function loadData() {
    try {
      const response = await fetch('data.json');
      const data = await response.text();
      document.getElementById('content').innerText = data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', loadData);
  