import React from 'react';
import { GoodsList } from './GoodsList';
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
  visibleGoods: string[],
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    visibleGoods: [...goodsFromServer],
    isVisible: false,
  };

  reverse = () => {
    this.setState(({ visibleGoods }) => ({
      visibleGoods: [...visibleGoods].reverse(),
    }));
  };

  sortByAlph = () => {
    this.setState(({ visibleGoods }) => ({
      visibleGoods: [...visibleGoods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  reset = () => {
    this.setState({
      visibleGoods: [...goodsFromServer],
    });
  };

  sortByLength = () => {
    this.setState(({ visibleGoods }) => ({
      visibleGoods: [...visibleGoods].sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { visibleGoods, isVisible } = this.state;

    return (
      <div className="App">
        {!isVisible
          ? (
            <>
              <h1>Goods</h1>
              <button
                type="button"
                onClick={() => this.setState({ isVisible: true })}
              >
                Start
              </button>
            </>
          )
          : (
            <>
              <h1>Goods List:</h1>
              <GoodsList goods={visibleGoods} />

              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortByAlph}
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
          )}
      </div>
    );
  }
}

export default App;
