import React from 'react';
import PropTypes from 'prop-types';
import './Goods.scss';

export class Goods extends React.Component {
  state = {
    goods: [...this.props.goods],
    selectValue: '1',
  }

  handleReverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  handleSortAlphabetical = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  handleReset = () => {
    this.setState({
      goods: [...this.props.goods],
      selectValue: '1',
    });
  }

  handleSortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((a, b) => a.length - b.length),
    }));
  }

  handleSelectChange = ({ target }) => {
    this.setState({
      selectValue: target.value,
    });
  }

  render() {
    const { goods, selectValue } = this.state;

    return (
      <div className="goods">
        <ul>
          {goods
            .filter(good => (good.length >= selectValue))
            .map(good => (
              <li key={good}>
                {good}
              </li>
            ))}
        </ul>

        <button
          type="button"
          className="button"
          onClick={this.handleReverse}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button"
          onClick={this.handleSortAlphabetical}
        >
          Sort by ABC
        </button>

        <button
          type="button"
          className="button"
          onClick={this.handleReset}
        >
          Reset
        </button>

        <button
          type="button"
          className="button"
          onClick={this.handleSortByLength}
        >
          Sort by length
        </button>

        <select value={selectValue} onChange={this.handleSelectChange}>
          {new Array(10).fill().map((_, index) => (
            <option key={`${index}abc`} value={index + 1}>
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
