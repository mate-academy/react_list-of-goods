/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import reverseGoods from './actions/reverseGoods';
import sortAlphabetically from './actions/sortAlphabetically';
import sortByLength from './actions/sortByLength';
import goodsWithLength from './actions/goodsWithLength';
import ProductItem from './components/ProductItem/ProductItem';
import ProductList from './components/ProductList/ProductList';

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
    const currentGoodsOrder = goodsWithLength(goodsFromServer, 8);

    return (
      <div className="App">
        <h1>
          <ProductList productList={currentGoodsOrder} />
        </h1>
      </div>
    );
  }
}

export default App;
