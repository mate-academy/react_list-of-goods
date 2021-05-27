import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goodsList],
  }

  reverseGoods = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortGoods = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((firstGood, secondGood) => firstGood.localeCompare(secondGood)),
    }));
  }

  resetGoods = () => {
    this.setState({
      goods: [...this.props.goodsList],
    });
  }

  sortByLengthGoods = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((firstGood, secondGood) => firstGood.length - secondGood.length),
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <button type="button" onClick={this.reverseGoods}>
          Reverse
        </button>
        <button type="button" onClick={this.sortGoods}>
          Sort
        </button>
        <button type="button" onClick={this.resetGoods}>
          Reset
        </button>
        <button type="button" onClick={this.sortByLengthGoods}>
          Sort by length
        </button>
        <ul>
          {goods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
