// src/App.js
import React from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import './App.css';

const App = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April'],
    values: [65, 59, 80, 81],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April'],
    values: [65, 59, 80, 81],
  };

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    values: [12, 19, 3, 5],
  };

  return (
    <div>
      <h1>My Dashboard</h1>
      <div style={{ width: '600px', height: '400px' }}>
        <BarChart data={barData} />
      </div>
      <div style={{ width: '600px', height: '400px' }}>
        <LineChart data={lineData} />
      </div>
      <div style={{ width: '600px', height: '400px' }}>
        <PieChart data={pieData} />
      </div>
    </div>
  );
};

export default App;
