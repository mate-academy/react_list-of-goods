import React, { Component } from 'react';
import { GoodsList } from './components/GoodsList';

import './App.css';

const goodsFromServer = [
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

export class App extends Component {
  state = {
    isShown: false,
    initialGoods: goodsFromServer,
    isReverse: false,
    sortBy: '',
  };

  showList = () => {
    this.setState(state => ({
      isShown: !state.isShown,
    }));
  };

  reverseList = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  }

  sortListAlphabetically = () => this.setState({
    sortBy: 'alphabetically',
    isReverse: false,
  })

  sortListByLength = () => this.setState({
    sortBy: 'length',
    isReverse: false,
  })

  resetList = () => this.setState({
    isReverse: false,
    sortBy: '',
  })

  render() {
    const {
      showList,
      reverseList,
      sortListAlphabetically,
      resetList,
      sortListByLength,
    } = this;

    const { isShown, isReverse, initialGoods, sortBy } = this.state;
    const newGoodsList = [...initialGoods];

    newGoodsList.sort((
      currentGoods, nextGoods,
    ) => {
      switch (sortBy) {
        case 'length':
          return currentGoods.length - nextGoods.length;

        case 'alphabetically':
          return currentGoods.localeCompare(nextGoods);

        default:
          return 0;
      }
    });

    if (isReverse) {
      newGoodsList.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <p>
          {
            `Available choice from: ${goodsFromServer.length}`
          }
        </p>
        {!isShown && (
          <button
            type="button"
            onClick={showList}
          >
            Start
          </button>
        )}
        <button
          type="button"
          onClick={reverseList}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={sortListAlphabetically}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={resetList}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={sortListByLength}
        >
          Sort by length
        </button>
        {isShown && (
          <GoodsList
            goodsList={newGoodsList}
          />
        )}
      </div>
    );
  }
}
