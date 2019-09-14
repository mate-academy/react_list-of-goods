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
    isStartClicked: false,
  };

  changeStartState = () => this.setState(
    () => ({
      isStartClicked: true,
    })
  );

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

  selectNumber = (event) => {
    const { value } = event.target;

    this.setState(
      () => ({
        goodsList: goodsWithLength(goodsFromServer, Number(value)),
      })
    );
  }

  render() {
    const { goodsList, isStartClicked } = this.state;

    return isStartClicked
      ? (
        <div className="App">
          <h1>List of Goods</h1>
          <div>
            <select onChange={this.selectNumber}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
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
      )
      : (
        <button
          type="submit"
          className="button button--start"
          onClick={this.changeStartState}
        >
          Start
        </button>
      );
  }
}

export default App;
