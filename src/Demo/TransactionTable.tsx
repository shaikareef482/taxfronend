import React, { useState,useEffect } from 'react';
interface Transaction {
    id: number;
    date: string;
    amount: number;
    type: string;
    organization: string;
    year: string;
  }
const TransactionTable = () => {
  const [startDate, setStartDate] = useState('');
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [endDate, setEndDate] = useState('');
  const [type, setType] = useState('');
  useEffect(() => {
    fetch('http://localhost:5000/transactions')
      .then((response) => response.json())
      .then((data: Transaction[]) => {
        setTransactions(data);
        
      })
      .catch((error) => console.error('Error fetching transactions:', error));
  }, []);
  // Filter transactions based on criteria
  const filteredTransactions = transactions.filter(transaction => {
    const date = new Date(transaction.date);
    return (
      (!startDate || date >= new Date(startDate)) &&
      (!endDate || date <= new Date(endDate)) &&
      (!type || transaction.type === type)
    );
  });

  // Download data as JSON
  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(filteredTransactions, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'transactions.json';
    link.click();
  };

  // Download data as CSV
  const downloadCSV = () => {
    const header = 'Date,Type,Amount,Description\n';
    const rows = filteredTransactions.map(t => `${t.date},${t.type},${t.amount},`).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'transactions.csv';
    link.click();
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Transaction Details</h3>

      {/* Filters */}
      <div className="row mb-3">
        <div className="col-md-4">
          <input type="date" className="form-control" onChange={(e) => setStartDate(e.target.value)} placeholder="Start Date" />
        </div>
        <div className="col-md-4">
          <input type="date" className="form-control" onChange={(e) => setEndDate(e.target.value)} placeholder="End Date" />
        </div>
        <div className="col-md-4">
          <select className="form-select" onChange={(e) => setType(e.target.value)} defaultValue="">
            <option value="">All Types</option>
            <option value="credit">Credit</option>
            <option value="expense">Expense</option>
          </select>
        </div>
      </div>

      {/* Transaction Table */}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction, index) => (
              <tr key={transaction.id}>
                <td>{index + 1}</td>
                <td>{transaction.date}</td>
                <td>{transaction.type}</td>
                <td>${transaction.amount.toFixed(2)}</td>
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">No Transactions Found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Download Buttons */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-success me-2" onClick={downloadCSV}>Download CSV</button>
        <button className="btn btn-primary" onClick={downloadJSON}>Download JSON</button>
      </div>
    </div>
  );
};

export default TransactionTable;