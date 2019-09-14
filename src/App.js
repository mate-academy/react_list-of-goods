/* eslint-disable no-console */
import React, { Component } from 'react';
import reverseGoods from './actions/reverseGoods';
import sortAlphabetically from './actions/sortAlphabetically';
import sortByLength from './actions/sortByLength';
import goodsWithLength from './actions/goodsWithLength';
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
  state = {
    goodsList: goodsWithLength(goodsFromServer),
  };

  sortListAZ = () => this.setState(
    prevState => ({
      goodsList: sortAlphabetically(prevState.goodsList),
    })
  );

  sortListByLength = () => this.setState(
    prevState => ({
      goodsList: sortByLength(prevState.goodsList),
    })
  );

  reverseList = () => this.setState(
    prevState => ({
      goodsList: reverseGoods(prevState.goodsList),
    })
  );

  resetList = () => this.setState(
    () => ({
      goodsList: goodsWithLength(goodsFromServer),
    })
  );

  render() {
    const { goodsList } = this.state;

    return (
      <div className="App">
        <h1>List of Goods</h1>
        <div>
          <button
            type="submit"
            className="button"
            onClick={this.sortListAZ}
          >
            Sort A - Z
          </button>
          <button
            type="submit"
            className="button"
            onClick={this.sortListByLength}
          >
            Sort by length
          </button>
          <button
            type="submit"
            className="button"
            onClick={this.reverseList}
          >
            Reverse
          </button>
          <button
            type="submit"
            className="button"
            onClick={this.resetList}
          >
            Reset
          </button>
        </div>
        <ProductList productList={goodsList} />
      </div>
    );
  }
}

export default App;
