import React from 'react';
import {Header} from './components/Header.js'
import { Balance } from './components/Balance'
import{ IncomeExpenses } from './components/incomeExpenses.js'
import { TransactionList } from './components/TransactionList.js';
import { AddTransaction } from './components/AddTransaction.js';
import { GlobalProvider } from './context/GlobalState.js';

import './App.css';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
