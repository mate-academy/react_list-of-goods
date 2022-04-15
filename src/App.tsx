// import { type } from 'os';
import React from 'react';
import './App.css';

const goodsFromServer: string[] = [
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

type State = {
  goods: string[],
  listVisible: boolean,
  isReversed: boolean,
  sortGoods: string,
  sortLength: boolean,
  reset: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    listVisible: false,
    isReversed: false,
    sortGoods: '',
    sortLength: false,
    reset: false,
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlpha = () => {
    this.setState({ sortGoods: 'Alpha' });
  };

  reset = () => {
    this.setState({ reset: true });
  };

  sortLength = () => {
    this.setState({ sortGoods: 'Length' });
    this.setState((state) => ({
      sortLength: !state.sortLength,
    }));
  };

  render() {
    const {
      goods, listVisible, isReversed, sortGoods, sortLength, reset,
    } = this.state;
    const newGoods = goods.filter(good => good);

    newGoods.sort((g1, g2) => {
      switch (sortGoods) {
        case 'Alpha':
          return g1.localeCompare(g2);
        case 'Length':
          if (sortLength) {
            return g1.length - g2.length;
          }

          return g2.length - g1.length;
        default:
          return 0;
      }
    });

    if (reset === true) {
      newGoods.splice(0, goods.length, ...goods);
    }

    if (isReversed) {
      newGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {listVisible === false
        && (
          <button
            type="button"
            onClick={() => {
              this.setState({ listVisible: true });
            }}
          >
            Start
          </button>
        )}
        {listVisible === true
        && (
          <>
            <ul>
              {newGoods.map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                this.reverse();
              }}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={() => {
                this.sortAlpha();
              }}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={() => {
                this.sortLength();
              }}
            >
              Sort by length
            </button>
            <button
              type="button"
              onClick={() => {
                this.reset();
              }}
            >
              Reset
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
