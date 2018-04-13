import PropTypes from "prop-types";
import React, { Component } from "react";

import styles from './Balance.css';

export default class Balance extends Component {
  static propTypes = {
    balance: PropTypes.object
  };

  render() {
    const { balance } = this.props;

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
}
