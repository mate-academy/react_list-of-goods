import React from 'react';
import './App.css';

type State = {
  isOpened: boolean,
  goodsFromServer2: string[],
  mutedGoods: string[],
};

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

class App extends React.Component<{}, State> {
  state: State = {
    isOpened: false,
    goodsFromServer2: goodsFromServer,
    mutedGoods: [],
  };

  startGoods = () => {
    this.setState(state => ({
      isOpened: true,
      mutedGoods: [...state.goodsFromServer2],
    }));
  };

  reversedGoods = () => {
    this.setState(state => {
      state.mutedGoods.reverse();
    });
  };

  sortByABCGoods = () => {
    this.setState(state => {
      state.mutedGoods.sort((good1, good2) => {
        return good1.localeCompare(good2);
      });
    });
  };

  sortByGoodsLength = () => {
    this.setState(state => {
      state.mutedGoods.sort((good1, good2) => {
        return (good1.length - good2.length);
      });
    });
  };

  resetGoods = () => {
    this.setState(state => ({
      mutedGoods: [...state.goodsFromServer2],
    }));
  };

  render() {
    const { isOpened, mutedGoods: mutedgoods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        <button
          type="button"
          onClick={() => {
            this.startGoods();
          }}
          className={isOpened ? 'button__start' : ''}
        >
          Start
        </button>

        <button
          type="button"
          onClick={() => {
            this.reversedGoods();
            this.forceUpdate();
          }}
          className={!isOpened ? 'button__start' : ''}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={() => {
            this.sortByABCGoods();
            this.forceUpdate();
          }}
          className={!isOpened ? 'button__start' : ''}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={() => {
            this.sortByGoodsLength();
            this.forceUpdate();
          }}
          className={!isOpened ? 'button__start' : ''}
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={() => {
            this.resetGoods();
            this.forceUpdate();
          }}
          className={!isOpened ? 'button__start' : ''}
        >
          Reset
        </button>

        <ul>
          {isOpened && mutedgoods.map((good) => {
            return (
              <li key={good}>
                {good}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
