// Contoh Synchronous JavaScript
function loadData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', false); // false = synchronous
    xhr.send();
    
    if (xhr.status === 200) {
      document.getElementById('content').innerText = xhr.responseText;
    }
  }
  
  document.addEventListener('DOMContentLoaded', loadData);
  