import React, { useState } from 'react';
import axios from 'axios';

const AddSalesForm = () => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/sales', { date, amount });
      setDate('');
      setAmount('');
      alert('Data added successfully!');
    } catch (error) {
      console.error('Error adding data:', error);
      alert('Failed to add data.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Sale</button>
    </form>
  );
};

export default AddSalesForm;
