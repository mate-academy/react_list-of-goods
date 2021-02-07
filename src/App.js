import React from 'react';
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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    isReversed: false,
    sortBy: '',
    selectedNumber: 1,
    isStarted: false,
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByAlphabetically = () => {
    this.setState({
      sortBy: 'name',
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  start = () => {
    this.setState({
      isStarted: true,
    });
  }

  reset = () => {
    this.setState({
      sortBy: '', isReversed: false, selectedNumber: 1,
    });
  }

  selectNumber = ({ target }) => {
    this.setState({
      selectedNumber: target.value,
    });
  }

  render() {
    const { goods, isReversed, sortBy, isStarted, selectedNumber } = this.state;
    let copyGoods = [...goods];

    copyGoods = [...goods.filter(good => good.length >= selectedNumber)];

    copyGoods.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      copyGoods.reverse();
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
      <div className="App">
        <h1 className="header">Goods</h1>
        {!isStarted ? (
          <button
            type="button"
            className="button_start"
            onClick={this.start}
          >
            Start
          </button>
        )
          : (
            <>
              <ol className="goods">
                {copyGoods.map(good => (
                  <li
                    key={good}
                  >
                    {good}
                  </li>
                ))}
              </ol>

              <button
                type="button"
                className="button_reverse"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                className="button_sort-name"
                onClick={this.sortByAlphabetically}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="button_sort-length"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="button_reset"
                onClick={this.reset}
              >
                Reset
              </button>

              <select
                value={this.state.selectedNumber}
                onChange={this.selectNumber}
              >
                {numbers.map(number => (
                  <option
                    value={number}
                    key={number}
                  >
                    {number}
                  </option>
                ))}
              </select>
            </>
          )
        }
      </div>
    );
  }
}

export default App;
