import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LineChart from './LineChart';

const DataFetcher = ({ endpoint }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint);
        // Convert amount to number and format date if needed
        const formattedData = response.data.map(item => ({
          date: new Date(item.date).toLocaleDateString(), // Format date if needed
          amount: parseFloat(item.amount), // Convert amount to number
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [endpoint]);

  return data ? <LineChart data={data} /> : <p>Loading...</p>;
};

export default DataFetcher;
