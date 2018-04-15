import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Balance from './Balance/Balance';

export class WalletContainer extends Component {
  static propTypes = {
    balance: PropTypes.shape({
      USD: PropTypes.number.isRequired,
      BTC: PropTypes.number.isRequired
    })
  };

  render() {
    const { balance } = this.props;

    return (
      <div>
        <Balance balance={balance} />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    balance: state.wallet.balance
  };
}

export default connect(
  mapStateToProps
)(WalletContainer);
