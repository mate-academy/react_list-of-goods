import React from 'react';
import './App.css';
import { GoodsList } from './Goodlist';

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
  initialOrder: string[];
  actualOrder: string[];
  isStarted: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    initialOrder: [...goodsFromServer],
    isStarted: false,
    actualOrder: [...goodsFromServer],
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  sortAlphabetically = () => {
    this.setState((state) => ({
      actualOrder: [...state.actualOrder].sort(),
    }));
  };

  reverseItem = () => {
    this.setState((state) => ({
      actualOrder: [...state.actualOrder].reverse(),
    }));
  };

  reset = () => {
    this.setState((state) => ({
      actualOrder: [...state.initialOrder],
    }));
  };

  lengthSort = () => {
    this.setState((state) => ({
      actualOrder: [...state.actualOrder].sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { isStarted, actualOrder } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {(isStarted) ? (
          <div>
            <GoodsList actualOrder={actualOrder} />
            <button
              type="button"
              className="button"
              onClick={this.reverseItem}
            >
              Reverse
            </button>
            <button
              type="button"
              className="button"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              className="button"
              onClick={this.reset}
            >
              Reset
            </button>
            <button
              type="button"
              className="button"
              onClick={this.lengthSort}
            >
              Sort by length
            </button>
          </div>
        )
          : (
            <button
              type="button"
              className="button"
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
