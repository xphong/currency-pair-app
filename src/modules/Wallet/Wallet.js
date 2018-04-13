import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class WalletContainer extends Component {
  static propTypes = {
    balance: PropTypes.object.isRequired,
  };

  render() {
    const { balance } = this.props;

    return (
      <div>
        $$$${balance.dollar}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    balance: state.wallet.balance
  };
}

export default connect(
  mapStateToProps
)(WalletContainer);
