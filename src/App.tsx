import React from 'react';
import './App.css';

type State = {
  isOpened: boolean,
  visibleGoods: string[],
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
    visibleGoods: [...goodsFromServer],
  };

  startGoods = () => {
    this.setState({
      isOpened: true,
    });
  };

  reversedGoods = () => {
    this.setState(state => {
      state.visibleGoods.reverse();
    });
  };

  sortByABCGoods = () => {
    this.setState(state => {
      state.visibleGoods.sort((good1, good2) => {
        return good1.localeCompare(good2);
      });
    });
  };

  sortByGoodsLength = () => {
    this.setState(state => {
      state.visibleGoods.sort((good1, good2) => {
        return (good1.length - good2.length);
      });
    });
  };

  resetGoods = () => {
    this.setState(() => ({
      visibleGoods: [...goodsFromServer],
    }));
  };

  render() {
    const { isOpened, visibleGoods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        {!isOpened
        && (
          <button
            type="button"
            onClick={() => {
              this.startGoods();
            }}
          >
            Start
          </button>
        )}

        {isOpened
        && (
          <>
            <button
              type="button"
              onClick={() => {
                this.reversedGoods();
                this.forceUpdate();
              }}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={() => {
                this.sortByABCGoods();
                this.forceUpdate();
              }}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={() => {
                this.sortByGoodsLength();
                this.forceUpdate();
              }}
            >
              Sort by length
            </button>
            <button
              type="button"
              onClick={() => {
                this.resetGoods();
                this.forceUpdate();
              }}
            >
              Reset
            </button>
          </>
        )}

        <ul>
          {isOpened && visibleGoods.map((good) => {
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
