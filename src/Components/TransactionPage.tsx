import React from 'react';
import TransactionList from './TransactionList';
import Navbar from './Navbar';
import FooterOne from '../Demo/FooterOne';

const TransactionPage = () => {
  return (
    <div className='d-flex row'>
        <Navbar/>
        <TransactionList/>
        <FooterOne/>
    </div>
  );
}

export default TransactionPage;
