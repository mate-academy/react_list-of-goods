import React, { Component } from 'react';
import './App.css';

import Button from './components/Button/Button';

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
    goods: [...goodsFromServer],
    showButton: true,
    showGoodsList: false,
  };

  showGoodsHandler = () => {
    this.setState(state => ({
      showButton: !state.showButton,
      showGoodsList: !state.showGoodsList,
    }));
  }

  reverseGoodsHandler = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabeticallyHandler = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLengthHandler = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  resetOrderHandler = () => {
    this.setState({ goods: [...goodsFromServer] });
  }

  render() {
    const { goods, showButton, showGoodsList } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {showButton && (
          <Button
            clicked={this.showGoodsHandler}
            text="Start"
          />
        )}

        <Button
          text="Reverse"
          clicked={this.reverseGoodsHandler}
        />

        <Button
          clicked={this.sortAlphabeticallyHandler}
          text="Sort alphabetically"
        />

        <Button
          clicked={this.sortByLengthHandler}
          text="Sort by length"
        />

        <Button
          clicked={this.resetOrderHandler}
          text="Reset"
        />

        {showGoodsList && (
          <ul className="goods-list">
            {goods.map(good => (
              <li key={good}>
                {good}
              </li>
            ))}
          </ul>
        )}

      </div>
    );
  }
}

export default App;
