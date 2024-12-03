import React, { useEffect, useState } from 'react';
// import { Transaction } from '../types/Transaction';
interface Transaction {
    id: number;
    date: string;
    amount: number;
    type: string;
    organization: string;
    year: string;
  }
const Form90C: React.FC = () => {
  const [formDetails, setFormDetails] = useState({
    taxpayerName: '',
    taxYear: '',
  });


  useEffect(() => {
    const draft = localStorage.getItem('form90cDraft');
    if (draft) {
      const parsedDraft = JSON.parse(draft);
      setFormDetails(parsedDraft.formDetails);
      setTransactions(parsedDraft.transactions);
    }
  }, []);

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetails(prev => ({ ...prev, [name]: value }));
  };

  const addTransaction = () => {
    setTransactions([...transactions, { id: Date.now(), date: '', amount: 0, type: '', organization: '', year: '' }]);
  };

  const handleTransactionChange = (index: number, field: keyof Transaction, value: string | number) => {
    const updatedTransactions = transactions.map((transaction, i) =>
      i === index ? { ...transaction, [field]: value } : transaction
    );
    setTransactions(updatedTransactions);
  };

  const saveDraft = () => {
    // Save formDetails and transactions to localStorage or backend draft API
    localStorage.setItem('form90cDraft', JSON.stringify({ formDetails, transactions }));
    alert('Draft saved!');
  };

  return (
    <div className="container mt-4">
      <h2>Fill Form 90C</h2>
      <div className="mb-3">
        <input type="text" className="form-control" name="taxpayerName" placeholder="Taxpayer Name" value={formDetails.taxpayerName} onChange={handleFormChange} />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" name="taxYear" placeholder="Tax Year" value={formDetails.taxYear} onChange={handleFormChange} />
      </div>

      <h4>Transactions</h4>
      {transactions.map((transaction, index) => (
        <div className="card mb-3" key={transaction.id}>
          <div className="card-body">
            <input type="date" className="form-control mb-2" placeholder="Date" value={transaction.date} onChange={(e) => handleTransactionChange(index, 'date', e.target.value)} />
            <input type="number" className="form-control mb-2" placeholder="Amount" value={transaction.amount} onChange={(e) => handleTransactionChange(index, 'amount', parseFloat(e.target.value))} />
            <input type="text" className="form-control mb-2" placeholder="Type" value={transaction.type} onChange={(e) => handleTransactionChange(index, 'type', e.target.value)} />
            <input type="text" className="form-control mb-2" placeholder="Organization" value={transaction.organization} onChange={(e) => handleTransactionChange(index, 'organization', e.target.value)} />
          </div>
        </div>
      ))}

      <button className="btn btn-secondary mb-3" onClick={addTransaction}>Add Transaction</button>
      <button className="btn btn-primary" onClick={saveDraft}>Save Draft</button>
    </div>
  );
};

export default Form90C;