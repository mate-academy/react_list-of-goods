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
    isStarted: false,
    goodsList: goodsFromServer,
  }

  showGoods = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  sortByName = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort((a, b) => a.length - b.length),
    }));
  }

  reverse = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].reverse(),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goodsList: goodsFromServer,
    }));
  }

  render() {
    const { isStarted, goodsList } = this.state;

    return (
      <div className="App">

        <h1>Goods</h1>

        {!isStarted
          && (
            <button
              type="button"
              onClick={this.showGoods}
            >
              Start
            </button>
          )
        }
        {isStarted
          && (
            <div>
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortByName}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>

              <ul>
                {goodsList.map(good => (
                  <li key={good}>
                    {good}
                  </li>
                ))}
              </ul>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
