import React, { Component } from 'react';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

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
    goodsList: [...goodsFromServer],
  };

  showListHandler = () => {
    this.setState(prevState => ({
      isShown: !prevState.isShown,
    }));
  };

  reverseListHandler = () => {
    this.setState(prevState => ({
      goodsList: [...prevState.initialGoods].reverse(),
    }));
  }

  sortListAlphabeticallyHandler = () => this.setState(prevState => ({
    goodsList: [...prevState.initialGoods].sort(
      (currentGoods, nextGoods) => currentGoods.localeCompare(nextGoods),
    ),
  }))

  sortListByLengthHandler = () => this.setState(prevState => ({
    goodsList: [...prevState.initialGoods].sort(
      (currentGoods, nextGoods) => currentGoods.length - nextGoods.length,
    ),
  }))

  resetListHandler = () => this.setState(prevState => ({
    goodsList: [...prevState.initialGoods],
  }))

  render() {
    const {
      showListHandler,
      reverseListHandler,
      sortListAlphabeticallyHandler,
      resetListHandler,
      sortListByLengthHandler,
    } = this;

    const { isShown, goodsList } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <p>
          {
            `Available choice from: ${goodsFromServer.length}`
          }
        </p>
        {
          isShown
          || (
            <Button
              handler={showListHandler}
              text="Start"
            />
          )
        }
        <Button handler={reverseListHandler} text="Revers" />
        <Button
          handler={sortListAlphabeticallyHandler}
          text="Sort Alphabetically"
        />
        <Button
          handler={resetListHandler}
          text="Reset List"
        />
        <Button
          handler={sortListByLengthHandler}
          text="Sort By Length"
        />
        {isShown && (
          <GoodsList
            goodsList={goodsList}
          />
        )}
      </div>
    );
  }
}
