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
    isHidden: false,
  };

  start = () => {
    this.setState(state => ({
      isHidden: !state.isHidden,
    }));
  }

  revers = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortBy = (criterion) => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => {
        if (criterion === 'a-z') {
          return a.localeCompare(b);
        }

        return a.length - b.length;
      }),
    }));
  }

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  }

  render() {
    const { goods, isHidden } = this.state;
    const { start, revers, sortBy, reset } = this;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isHidden
          ? (
            <button
              type="button"
              onClick={start}
            >
              Start
            </button>
          )
          : (
            <>
              <button
                type="button"
                onClick={revers}
              >
                Revers
              </button>
              <button
                type="button"
                onClick={() => {
                  sortBy('a-z');
                }}
              >
                Sort a-z
              </button>
              <button
                type="button"
                onClick={() => {
                  sortBy('length');
                }}
              >
                Sort By Length
              </button>
              <button
                type="button"
                onClick={reset}
              >
                Reset
              </button>
            </>
          )
        }
        <ul>
          {isHidden && goods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
