import React from 'react';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class GoodsList extends React.Component {
  state = {
    goods: [...goodsFromServer],
    defaultSelectValue: 1,
  }

  arrayOfNumsForSelectOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  reverseGoods = () => {
    this.setState(prev => ({
      goods: [...prev.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prev => ({
      goods: [...prev.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState(prev => ({
      goods: [...goodsFromServer],
      defaultSelectValue: 1,
    }));
  }

  sortByLength = () => {
    this.setState(prev => ({
      goods: [...prev.goods].sort((a, b) => (b.length - a.length)),
    }));
  }

  filterByLength = ({ target }) => {
    this.setState(prev => ({
      goods: goodsFromServer.filter(a => a.length >= target.value),
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
            onClick={this.reverseGoods}
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
          onChange={this.filterByLength}
          value={this.state.defaultSelectValue}
        >
          {this.arrayOfNumsForSelectOptions.map(option => (
            <option key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default GoodsList;
