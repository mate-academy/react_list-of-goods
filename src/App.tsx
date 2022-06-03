import React from 'react';
import './App.css';
import { ListGoods } from './components';
import { GoodsWithId } from './react-app-env';

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

const goodWithId: GoodsWithId[] = goodsFromServer
  .map((good, index) => ({
    id: index + 1,
    good,
  }));

type State = {
  goods: GoodsWithId[],
  isVisible: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
    isVisible: false,
  };

  getListFoods = () => {
    this.setState((state) => ({
      goods: goodWithId,
      isVisible: !state.isVisible,
    }));
  };

  getReverse = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  getSortByAlphabet = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.good.localeCompare(b.good)),
    }));
  };

  getReset = () => {
    this.setState(() => ({
      goods: goodWithId,
    }));
  };

  getSortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.good.length - b.good.length),
    }));
  };

  render() {
    return (
      <div className="App box is-primary has-background-danger">
        <button
          className="button is-primary"
          type="button"
          onClick={this.getListFoods}
        >
          {this.state.isVisible ? 'Hide List' : 'Start' }
        </button>
        <div className={this.state.isVisible
          ? 'm-3'
          : 'is-hidden m-3'}
        >
          <p className="title is-4 m-3 has-text-warning-light">Goods</p>
          <ListGoods goods={this.state.goods} />
          <button
            className="button is-primary m-3"
            type="button"
            onClick={this.getReverse}
          >
            Reverse
          </button>
          <button
            className="button is-primary m-3"
            type="button"
            onClick={this.getSortByAlphabet}
          >
            Sort alphabetically
          </button>
          <button
            className="button is-primary m-3"
            type="button"
            onClick={this.getReset}
          >
            Reset
          </button>
          <button
            className="button is-primary m-3"
            type="button"
            onClick={this.getSortByLength}
          >
            Sort by length
          </button>
        </div>
      </div>
    );
  }
}
