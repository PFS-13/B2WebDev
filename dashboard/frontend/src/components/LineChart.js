import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title);

const LineChart = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available</p>;

  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Sales Amount',
        data: data.map(item => item.amount),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div>
      <h2>Sales Data</h2>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
