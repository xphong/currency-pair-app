import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';

export class TradeFormContainer extends Component {
  static propTypes = {
    balance: PropTypes.object
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log('Submit');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Trade</h2>
          <TextInput disabled value="USD" />
          <TextInput placeholder="Enter your amount" name="amount" />
          <h2>For</h2>
          <TextInput disabled value="BTC" />
          <TextInput disabled />
          <Button handleOnClick={this.handleSubmit}>
            Trade
          </Button>
        </form>
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
