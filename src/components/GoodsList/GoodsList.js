import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GoodsList.css';

export class GoodsList extends Component {
  state ={
    hidden: true,
    reverse: false,
    sortBy: '',
    goodsSelector: 1,
  }

  hideButton = () => {
    this.setState({
      hidden: false,
    });
  }

  reverseGoods = () => {
    this.setState(state => ({
      reverse: !state.reverse,
    }));
  }

  resetGoods = () => {
    this.setState({
      reverse: false,
      sortBy: '',
      goodsSelector: 1,
    });
  }

  render() {
    const { goods } = this.props;
    const { hidden, reverse, sortBy, goodsSelector } = this.state;
    const modifiedGoods = goods.filter(good => good.length >= goodsSelector);
    const SORT_CASES = {
      alphabet: 'alphabet',
      length: 'length',
    };

    modifiedGoods.sort((goodA, goodB) => {
      switch (sortBy) {
        case 'alphabet':
          return goodA.localeCompare(goodB);

        case 'length':
          return goodA.length - goodB.length;

        default:
          return 0;
      }
    });

    if (reverse) {
      modifiedGoods.reverse();
    }

    return (
      <>
        {hidden && (
        <button
          type="button"
          className="GoodsList__modifieButton"
          onClick={this.hideButton}
        >
          Start
        </button>
        )
        }
        {!hidden && (
          <div className="GoodsList">
            <ul>
              {modifiedGoods.map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="GoodsList__modifieButton"
              onClick={this.reverseGoods}
            >
              Reverse
            </button>
            <button
              type="button"
              className="GoodsList__modifieButton"
              onClick={() => {
                this.setState({
                  sortBy: SORT_CASES.alphabet,
                });
              }}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              className="GoodsList__modifieButton"
              onClick={() => {
                this.setState({
                  sortBy: SORT_CASES.length,
                });
              }}
            >
              Sort by length
            </button>
            <button
              type="button"
              className="GoodsList__modifieButton"
              onClick={this.resetGoods}
            >
              Reset
            </button>
            <select
              className="GoodsList__modifieButton"
              onChange={({ target }) => {
                this.setState({
                  goodsSelector: target.value,
                });
              }}
              value={goodsSelector}
            >
              {Array(10).fill(0).map((x, i) => (
                <option key={Math.random()}>{i + 1}</option>
              ))}
            </select>
          </div>
        )}
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
