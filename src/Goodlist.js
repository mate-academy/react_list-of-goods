import React from 'react';
import PropTypes from 'prop-types';

class GoodList extends React.Component {
  state = {
    goods: [...this.props.goods],
    length: 1,
  };

  reverseGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabetGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  resetGoods = () => {
    this.setState(
      { goods: [...this.props.goods] },
    );
  }

  sortByLengthGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => a.length - b.length),
    }));
  }

  selectedChangeOfGoods = (event) => {
    const { value } = event.target;

    this.setState({
      length: value,
      goods: this.props.goods
        .filter(good => (good.length <= value)),
    });
  }

  render() {
    const { goods } = this.state;
    const arrayOfSelect = Array(10).fill('');

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
          onClick={this.reverseGoods}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortAlphabetGoods}
        >
          Sort Alphabetically
        </button>

        <button
          type="button"
          onClick={this.resetGoods}
        >
          Reset
        </button>

        <button
          type="button"
          onClick={this.sortByLengthGoods}
        >
          Sort by Length
        </button>

        <select
          onInput={this.selectedChangeOfGoods}
          value={this.state.length}
        >
          {arrayOfSelect.map((item, index) => (
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
