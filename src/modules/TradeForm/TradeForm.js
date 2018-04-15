import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { fetchBitcoinQuote } from './actions/quotes';
import { trade } from '../../actions/wallet/wallet';

export class TradeFormContainer extends Component {
  static propTypes = {
    balance: PropTypes.object
  };

  constructor() {
    super();

    this.state = {
      amount: '',
      quoteAmount: ''
    };
  }

  componentDidMount() {
    this.props.fetchBitcoinQuote();
  }

  calculateQuote(amount, quote) {
    return amount / quote;
  }

  handlePriceChange = event => {
    const amount = event.target.value;
    const quoteAmount = this.calculateQuote(amount, this.props.quote);

    this.setState({
      amount,
      quoteAmount
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.trade(this.state.amount, this.state.quoteAmount);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Trade</h2>
          <Input type="text" disabled value="USD" />
          <Input type="number" placeholder="Enter your amount" name="amount" onChange={this.handlePriceChange} />
          <h2>For</h2>
          <Input type="text" disabled value="BTC" />
          <Input type="text" disabled name="quoteAmount" value={this.state.quoteAmount} />
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
    balance: state.wallet.balance,
    quote: state.quotes.bitcoin
  };
}

export const mapDispatchToProps = dispatch => {
  return {
    fetchBitcoinQuote: bindActionCreators(fetchBitcoinQuote, dispatch),
    trade: bindActionCreators(trade, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeFormContainer);
