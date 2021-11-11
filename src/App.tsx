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

interface State {
  goods: string[];
  visible: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    visible: false,
  };

  showGoodsList = () => (this.setState(state => ({
    visible: !state.visible,
  })));

  reverse = () => (
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }))
  );

  sortAlphabetically = () => (
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }))
  );

  sortByLength = () => (
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }))
  );

  reset = () => (
    this.setState(({
      goods: [...goodsFromServer],
    }))
  );

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.visible
          ? (
            <>
              <ul>
                {this.state.goods.map(good => (
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
            </>
          ) : (
            <button
              type="button"
              onClick={this.showGoodsList}
            >
              Show Goods
            </button>
          )}
      </div>
    );
  }
}

export default App;
