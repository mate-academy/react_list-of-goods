import React from 'react';
import { GoodsList } from './GoodsList';

import './App.scss';

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
  goodsList: string[];
  isVisibleStart: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    goodsList: goodsFromServer,
    isVisibleStart: true,
  };

  hideStart = () => {
    this.setState({ isVisibleStart: false });
  };

  reverseGoods = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].reverse(),
    }));
  };

  sortByAbcGoods = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList]
        .sort((good1, good2) => good1.localeCompare(good2)),
    }));
  };

  sortByLengtGoods = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList]
        .sort((good1, good2) => good1.length - good2.length),
    }));
  };

  resetGoods = () => {
    this.setState({ goodsList: goodsFromServer });
  };

  render() {
    const { goodsList, isVisibleStart } = this.state;

    return isVisibleStart
      ? (
        <button
          type="button"
          className="button"
          onClick={this.hideStart}
        >
          Start
        </button>
      )
      : (
        <div className="goods">
          <GoodsList
            goodsList={goodsList}
          />

          <div className="goods__buttons">
            <button
              type="button"
              className="button"
              onClick={this.reverseGoods}
            >
              Reverse
            </button>

            <button
              type="button"
              className="button"
              onClick={this.sortByAbcGoods}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className="button"
              onClick={this.resetGoods}
            >
              Reset
            </button>

            <button
              type="button"
              className="button"
              onClick={this.sortByLengtGoods}
            >
              Sort by length
            </button>
          </div>
        </div>
      );
  }
}

export default App;
