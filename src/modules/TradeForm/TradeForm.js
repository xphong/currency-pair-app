import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { fetchBitcoinQuote } from './actions/quotes';

export class TradeFormContainer extends Component {
  static propTypes = {
    balance: PropTypes.object
  };

  handleGetQuote = () => {
    this.props.fetchQuote();
  }

  handleSubmit = event => {
    event.preventDefault();

    console.log('Submit');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Trade</h2>
          <Input type="text" disabled value="USD" />
          <Input type="number" placeholder="Enter your amount" name="amount" />
          <h2>For</h2>
          <Input type="text" disabled value="BTC" />
          <Input type="text" disabled />
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

export const mapDispatchToProps = dispatch => {
  return { fetchQuote: bindActionCreators(fetchBitcoinQuote, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeFormContainer);
