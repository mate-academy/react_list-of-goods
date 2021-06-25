import React, { Component } from 'react';
import './App.css';

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

class App extends Component {
  state = {
    goods: goodsFromServer,
    isStart: false,
    isReversed: false,
    sortBy: null,
    value: 1,
  };

  isVisible = () => {
    this.setState(state => ({
      isStart: !state.isStart,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortBy = (word) => {
    this.setState({
      sortBy: word,
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: null,
      value: 1,
    });
  };

  showByLength = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    const { goods, isStart, sortBy, isReversed, value } = this.state;

    const visibleGoods = goods.filter(good => good.length >= value);
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'abc':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.isVisible}
          className={isStart ? 'invisible' : ''}
        >
          Start
        </button>

        <form
          id="sort-form"
          className={isStart ? '' : 'invisible'}
        >
          <ul>
            {visibleGoods.map(good => (
              <li key={good}>
                {good}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={() => {
              this.sortBy('abc');
            }}
          >
            Sort alphabetically
          </button>

          {/* eslint-disable-next-line react/button-has-type */}
          <button
            type="reset"
            from="sort-form"
            onClick={this.reset}
          >
            Reset
          </button>

          <button
            type="button"
            onClick={() => {
              this.sortBy('length');
            }}
          >
            Sort by length
          </button>

          <select
            name="select"
            value={value}
            onChange={this.showByLength}
          >
            {options.map(option => (
              <option
                value={option}
                key={option}
              >
                {option}
              </option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

export default App;
