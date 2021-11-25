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
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
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

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <div className="Goods">
          <GoodsList goods={goods} />
          <div className="buttons">
            <button type="button" onClick={this.reverse}>
              Reverse
            </button>
            <button type="button" onClick={this.sortAlphabetically}>
              Sort alphabetically
            </button>
            <button type="button" onClick={this.sortByLength}>
              Sort by length
            </button>
            <button type="button" onClick={this.resetOrder}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
