import React, { useState, useEffect } from 'react';

function App() {
  // State untuk menyimpan dataset dan input pencarian
  const [data] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Ambil dataset dari server ketika komponen pertama kali di-render
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/data?searchTerm=${searchTerm}`);
      const data = await response.json();
      setFilteredData(data);
    };
  
    fetchData();
  }, [searchTerm]);
  

  // Fungsi untuk memfilter data berdasarkan input pencarian
  useEffect(() => {
    const results = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results); // Update filtered data sesuai pencarian
  }, [searchTerm, data]);

  return (
    <div>
      <h1>Client-Side Filtering Example</h1>
      
      {/* Input pencarian */}
      <input
        type="text"
        placeholder="Search by product name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      {/* Render data yang sudah difilter */}
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
