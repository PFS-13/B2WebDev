<<<<<<< HEAD
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
=======
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
>>>>>>> 23708775eb1ea4dbedc08c21310a9d92cd1a84e1
  