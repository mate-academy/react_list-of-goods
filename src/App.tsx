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
  isVisibleButton: boolean,
  goodsList: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisibleButton: true,
    goodsList: goodsFromServer,
  };

  reverse = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].reverse(),
    }));
  };

  sort = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort(),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState({
      goodsList: [...goodsFromServer],
    });
  };

  render() {
    const { isVisibleButton, goodsList } = this.state;

    return (
      <div className="App">
        <h1>Goods:</h1>
        <button
          type="button"
          className={isVisibleButton ? 'visible' : 'hide'}
          onClick={() => {
            this.setState({
              isVisibleButton: false,
            });
          }}
        >
          start
        </button>
        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sort}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by lengthy
        </button>

        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>

        <ul>
          {!isVisibleButton
            && goodsList.map(good => (
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
