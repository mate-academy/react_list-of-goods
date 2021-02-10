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
    selectedNumber: 1,
    isStarted: false,
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => (
        a.localeCompare(b)
      )),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => (
        a.length - b.length
      )),
    }));
  }

  start = () => {
    this.setState({
      isStarted: true,
    });
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  selectNumber = ({ target }) => {
    this.setState({
      selectedNumber: target.value,
    });
  }

  render() {
    const { goods, isStarted, selectedNumber } = this.state;

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
                {[...goods].filter(good => good.length >= selectedNumber)
                  .map(good => (
                    <li key={good}>
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
                value={selectedNumber}
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
