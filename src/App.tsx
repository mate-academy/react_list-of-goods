import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';

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
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    showGoods: false,
  };

  reverse = () => {
    this.setState((state) => {
      return {
        goods: state.goods.reverse(),
      };
    });
  };

  sortAlphabetically = () => {
    this.setState((state) => {
      return {
        goods: state.goods.sort((goodA, goodB) => goodA.localeCompare(goodB)),
      };
    });
  };

  resetOrder = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  sortByLength = () => {
    this.setState((state) => {
      return {
        goods: state.goods.sort((goodA, goodB) => goodA.length - goodB.length),
      };
    });
  };

  showGoods = () => {
    this.setState({
      showGoods: true,
    });
  };

  render() {
    const { goods, showGoods } = this.state;

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
              <GoodsList goods={goods} />
            )}
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
              onClick={this.resetOrder}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
