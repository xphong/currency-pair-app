import React from 'react';

import Wallet from '../../modules/Wallet/Wallet';
import TradeForm from '../../modules/TradeForm/TradeForm';

import styles from './App.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Wallet />
      <TradeForm />
    </div>
  );
};

export default App;
