import React from 'react';
import PropTypes from 'prop-types';

class GoodList extends React.Component {
  state = {
    goods: [...this.props.goods],
    length: 1,
  };

  goodsReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  goodsSortAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  goodsReset = () => {
    this.setState(
      { goods: [...this.props.goods] },
    );
  }

  goodsSortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => a.length - b.length),
    }));
  }

  goodsSelectChange = (event) => {
    const { value } = event.target;

    this.setState(prevState => ({
      length: value,
      goods: prevState.goods
        .filter(good => (good.length <= value)),
    }));
  }

  render() {
    const { goods } = this.state;

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
          onClick={this.goodsReverse}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.goodsSortAlphabet}
        >
          Sort Alphabetically
        </button>

        <button
          type="button"
          onClick={this.goodsReset}
        >
          Reset
        </button>

        <button
          type="button"
          onClick={this.goodsSortByLength}
        >
          Sort by Length
        </button>

        <select
          onInput={this.goodsSelectChange}
          value={this.state.length}
        >
          {Array(10).fill('').map((item, index) => (
            <option
              value={index + 1}
            >
              {' '}
              {index + 1}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GoodList;
