import React from 'react';
import { uuid } from 'uuidv4';
import './App.css';
import { GoodList } from './componets/GoodsList';
import { Good } from './componets/types/typesdef';

const goodsFromServer: Good[] = [
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
].map(good => ({
  key: uuid(),
  goodName: good,
}));

interface State {
  isStarted: boolean,
  isReversed: boolean,
  isDafaultOrder: boolean,
  sortMethod: string,
}

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    isDafaultOrder: false,
    sortMethod: '',
  };

  handleStart = () => {
    this.setState(state => ({
      ...state,
      isStarted: true,
    }));
  };

  sortAlphabetically = () => {
    this.setState(
      {
        sortMethod: 'alphabetically',
        isDafaultOrder: false,
      },
    );
  };

  sortByLength = () => {
    this.setState(
      {
        sortMethod: 'length',
        isDafaultOrder: false,
      },
    );
  };

  reverseGoodsOrder = () => {
    this.setState(state => ({
      ...state,
      isReversed: !state.isReversed,
      isDafaultOrder: false,
    }));
  };

  resetToDafaultOrder = () => {
    this.setState(state => ({
      ...state,
      isDafaultOrder: true,
      sortMethod: '',
    }));
  };

  getVisiableGoods = () => {
    const visibleGoods = [...goodsFromServer];
    const { isReversed, sortMethod, isDafaultOrder } = this.state;

    if (isDafaultOrder) {
      return visibleGoods;
    }

    if (sortMethod) {
      visibleGoods.sort((a, b) => {
        switch (sortMethod) {
          case 'alphabetically':
            return a.goodName.localeCompare(b.goodName);
          case 'length':
            return a.goodName.length - b.goodName.length;
          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      return visibleGoods.reverse();
    }

    return visibleGoods;
  };

  render() {
    const { isStarted } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        {!isStarted && (
          <button
            type="button"
            onClick={this.handleStart}
          >
            Start
          </button>
        )}

        {isStarted && (
          <div>
            <GoodList goods={this.getVisiableGoods()} />

            <button
              type="button"
              onClick={this.reverseGoodsOrder}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={this.resetToDafaultOrder}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    );
  }
}
