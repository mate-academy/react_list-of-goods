import React from 'react';
import PropTypes from 'prop-types';
import './Goods.scss';

export class Goods extends React.Component {
  state = {
    goods: [...this.props.goods],
    selectValue: '1',
  }

  reverseGoods = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabetical = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  resetSorting = () => {
    this.setState({
      goods: [...this.props.goods],
      selectValue: '1',
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((a, b) => a.length - b.length),
    }));
  }

  selectChange = ({ target }) => {
    this.setState({
      goods: [...this.props.goods].filter(good => (
        good.length >= target.value)),
      selectValue: target.value,
    });
  }

  render() {
    const { goods, selectValue } = this.state;

    return (
      <div className="goods">
        <ul>
          {goods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="button"
          onClick={this.reverseGoods}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button"
          onClick={this.sortAlphabetical}
        >
          Sort by ABC
        </button>

        <button
          type="button"
          className="button"
          onClick={this.resetSorting}
        >
          Reset
        </button>

        <button
          type="button"
          className="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>

        <select value={selectValue} onChange={this.selectChange}>
          {new Array(10).fill().map((_, index) => (
            <option value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>

      </div>
    );
  }
}

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
