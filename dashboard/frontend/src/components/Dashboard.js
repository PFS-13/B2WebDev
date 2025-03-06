import React from 'react';
import DataFetcher from './DataFetcher';
import AddSalesForm from './AddSalesForm'; // Mengimpor AddSalesForm

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <AddSalesForm />  {/* Menambahkan form input */}
    <DataFetcher endpoint="http://localhost:5000/api/sales" />
  </div>
);

export default Dashboard;
