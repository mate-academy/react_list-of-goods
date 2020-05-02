import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    goods: [...this.props.listOfGoods],
    defaultSelectValue: 1,
  }

  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  reverceGoods = () => {
    this.setState(prev => ({
      goods: [...prev.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prev => ({
      goods: [...prev.goods].sort(),
    }));
  }

  reset = () => {
    this.setState(prev => ({
      goods: [...this.props.listOfGoods],
      defaultSelectValue: 1,
    }));
  }

  sortByLength = () => {
    this.setState(prev => ({
      goods: [...prev.goods].sort((a, b) => (b.length - a.length)),
    }));
  }

  lenghFilter = ({ target }) => {
    this.setState(() => ({
      goods: [...this.props.listOfGoods].filter(a => a.length >= target.value),
      defaultSelectValue: target.value,
    }));
  }

  render() {
    return (
      <div className="goods__list">
        <ul>
          {this.state.goods.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
        <div className="goods__buttons>">
          <button
            type="button"
            onClick={this.reverceGoods}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>
        <select
          onChange={this.lenghFilter}
          value={this.state.defaultSelectValue}
        >
          {this.array.map(option => (
            <option key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

GoodsList.propTypes = {
  listOfGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
