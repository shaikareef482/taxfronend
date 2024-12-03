

import React, { useState, useEffect } from 'react';
import TransactionFilter from './TranFilter';

 interface Transaction {
    id: number;
    date: string;
    amount: number;
    type: string;
    organization: string;
    year: string;
  }
const TransactionList: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
    const [filters, setFilters] = useState<{ year: string; type: string; organization: string }>({
      year: '',
      type: '',
      organization: '',
    });
  
    useEffect(() => {
      fetch('http://localhost:5000/transactions')
        .then((response) => response.json())
        .then((data: Transaction[]) => {
          setTransactions(data);
          setFilteredTransactions(data);
        })
        .catch((error) => console.error('Error fetching transactions:', error));
    }, []);
  
    const applyFilters = () => {
      let filtered = transactions;
  
      if (filters.year) {
        filtered = filtered.filter((transaction) => transaction.year === filters.year);
      }
      if (filters.type) {
        filtered = filtered.filter((transaction) => transaction.type === filters.type);
      }
      if (filters.organization) {
        filtered = filtered.filter((transaction) => transaction.organization === filters.organization);
      }
  
      setFilteredTransactions(filtered);
    };
  
    return (
      <div className="container">
        <TransactionFilter filters={filters} setFilters={setFilters} applyFilters={applyFilters} />
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Organization</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.type}</td>
                <td>{transaction.organization}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TransactionList;