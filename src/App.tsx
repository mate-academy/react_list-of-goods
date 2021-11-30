import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';

const INITIAL_LIMIT = 1;

const goodsFromServer: string[] = [
  'Dumplings 🥟',
  'Carrot 🥕',
  'Eggs 🥚',
  'Ice cream 🍦',
  'Apple 🍏',
  'Bread 🍞',
  'Fish 🐟',
  'Honey 🍯',
  'Cake 🍰',
  'Garlic 🧄',
];

type State = {
  goods: string[];
  showGoods: boolean;
  lengthLimit: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    showGoods: false,
    lengthLimit: INITIAL_LIMIT,
  };

  reverse = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((goodA, goodB) => goodA.localeCompare(goodB)),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      lengthLimit: INITIAL_LIMIT,
    });
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((goodA, goodB) => goodA.length - goodB.length),
    }));
  };

  showGoods = () => {
    this.setState({
      showGoods: true,
    });
  };

  handleFilterByLength = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      lengthLimit: +event.target.value,
    });
  };

  render() {
    const { goods, showGoods, lengthLimit } = this.state;

    const validGoods = goods.filter(
      // eslint-disable-next-line @typescript-eslint/comma-dangle
      (good) => (good.match(/\w/g) || []).length >= lengthLimit
    );

    return (
      <div className="App">
        <div className="GoodsAutomat">
          <div className="GoodsAutomat__goods">
            {!showGoods ? (
              <button
                className="ShowButton"
                type="button"
                onClick={this.showGoods}
              >
                Show Goods
              </button>
            ) : (
              <GoodsList goods={validGoods} />
            )}

            <div className="GoodsAutomat__length-limit">{`Current length: ${lengthLimit}`}</div>
          </div>

          <div className="buttons">
            <button
              className="ActionButton"
              type="button"
              disabled={!showGoods}
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              className="ActionButton"
              type="button"
              disabled={!showGoods}
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>
            <button
              className="ActionButton"
              type="button"
              disabled={!showGoods}
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <button
              className="ActionButton"
              type="button"
              disabled={!showGoods}
              onClick={this.reset}
            >
              Reset
            </button>
          </div>

          <input
            type="range"
            min="1"
            max="10"
            value={lengthLimit}
            disabled={!showGoods}
            onChange={this.handleFilterByLength}
          />
        </div>
      </div>
    );
  }
}

export default App;
