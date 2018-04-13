import React from 'react';
import PropTypes from 'prop-types';

import styles from './Balance.css';

const Balance = props => {
  const { balance } = props;

  if (!balance) {
    return <div>Unable to retrieve account balance</div>;
  }

  return (
    <div>
      <h2>Account Balance</h2>
      <ul className={styles.list}>
        {
          Object.keys(balance).map(key => (
            <li key={key}><span className={styles.currency}>{key}</span> {balance[key]}</li>
          ))
        }
      </ul>
    </div>
  );
}

Balance.propTypes = {
  balance: PropTypes.object
};

export default Balance;
