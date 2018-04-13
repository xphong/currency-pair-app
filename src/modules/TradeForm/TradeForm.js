import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextInput from '../../components/TextInput/TextInput'

export class TradeFormContainer extends Component {
  static propTypes = {
    balance: PropTypes.object
  };

  render() {
    return (
      <div>
        <h2>Trade</h2>
        <TextInput disabled value="USD" />
        <TextInput placeholder="Enter your amount" />
        <h2>For</h2>
        <TextInput disabled value="BTC" />
        <TextInput disabled />
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
)(TradeFormContainer);
