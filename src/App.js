/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import reverseGoods from './actions/reverseGoods';
import sortAlphabetically from './actions/sortAlphabetically';
import sortByLength from './actions/sortByLength';
import goodsWithLength from './actions/goodsWithLength';

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

class App extends Component {
  render() {
    const currentGoodsOrder = goodsWithLength(goodsFromServer, 4);

    return (
      <div className="App">
        <h1>{currentGoodsOrder[0]}</h1>
      </div>
    );
  }
}

export default App;
