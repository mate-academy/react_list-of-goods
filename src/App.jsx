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
    isStarted: false,
    sortBy: '',
    optionValue: 1,
  }

  options = [...Array(10).keys()];

  start = () => this.setState({ isStarted: true });

  sortAlphabetically = () => this.setState({ sortBy: 'alphabet' });

  sortByLength = () => this.setState({ sortBy: 'length' });

  reverse = () => this.setState(state => ({ isReversed: !state.isReversed }));

  handleChange = event => this.setState({ optionValue: event.target.value });

  reset = () => this.setState({
    goods: goodsFromServer,
    sortBy: '',
    isReversed: false,
    optionValue: 1,
  });

  render() {
    const visibleGoods = this.state.goods.filter(
      good => good.length >= this.state.optionValue,
    );

    visibleGoods.sort((a, b) => {
      switch (this.state.sortBy) {
        case 'alphabet':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (this.state.isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {this.state.isStarted ? (
          <>
            <h1>Goods:</h1>
            <ul>
              {visibleGoods.map(good => (
                <li key={good}>{good}</li>
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
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <button type="button" onClick={this.reset}>Reset</button>
            <select value={this.state.optionValue} onChange={this.handleChange}>
              {this.options.map(number => (
                <option value={number + 1} key={number}>{number + 1}</option>
              ))}
            </select>
          </>
        ) : (
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
