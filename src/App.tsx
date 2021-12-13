import React from 'react';
import './App.css';
import { GoodsList } from './Components/GoodsList';

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
  initialGoods: string[],
  sortedGoods: string[],
  isShown: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    initialGoods: [...goodsFromServer],
    sortedGoods: [...goodsFromServer],
    isShown: false,
  };

  reset = () => {
    this.setState(state => ({
      sortedGoods: [...state.initialGoods],
    }));
  };

  showGoods = () => {
    this.setState(state => ({
      isShown: !state.isShown,
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      sortedGoods: [...state.sortedGoods].sort((a, b) => (a.localeCompare(b))),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      sortedGoods: [...state.sortedGoods].sort((a, b) => (a.length - b.length)),
    }));
  };

  reverse = () => {
    this.setState(state => ({
      sortedGoods: [...state.sortedGoods].reverse(),
    }));
  };

  render(): React.ReactNode {
    const { sortedGoods, isShown } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isShown
          ? (
            <>
              <GoodsList goods={sortedGoods} />
              <p>Sort: </p>
              <button
                onClick={this.sortAlphabetically}
                type="button"
              >
                Alphabetically
              </button>
              <button
                onClick={this.sortByLength}
                type="button"
              >
                By length
              </button>
              <button
                onClick={this.reverse}
                type="button"
              >
                Reverse
              </button>
              <button
                onClick={this.reset}
                type="button"
              >
                Reset
              </button>
            </>
          )
          : (
            <button
              onClick={this.showGoods}
              type="button"
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
