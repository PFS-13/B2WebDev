<<<<<<< HEAD
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
=======
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
>>>>>>> 23708775eb1ea4dbedc08c21310a9d92cd1a84e1
  