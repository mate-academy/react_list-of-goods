import React from 'react';

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

const preparedGoods = goodsFromServer.map((product, index) => ({
  product,
  id: index + 1,
}));

export class App extends React.Component {
  state = {
    goods: [...preparedGoods],
    showButtons: true,
  }

  showGoods = () => (
    this.setState({ showButtons: false })
  );

  sortByName = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((word1, word2) => (
        word1.product.localeCompare(word2.product)
      )),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((word1, word2) => (
        word1.product.length - word2.product.length
      )),
    }));
  }

  resetGoodsList = () => {
    this.setState({
      goods: [...preparedGoods],
    });
  }

  reverseGoodsList = () => (
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }))
  );

  render() {
    const {
      goods,
      showButtons,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {showButtons && (
        <Button
          clickButton={this.showGoods}
          text="Start"
        />
        )}
        {!showButtons
        && (
          <>
            <Button
              clickButton={this.reverseGoodsList}
              text="Reverse"
            />
            <Button
              clickButton={this.sortByName}
              text="Sort alphabetically"
            />
            <Button
              clickButton={this.resetGoodsList}
              text="Reset"
            />
            <Button
              clickButton={this.sortByLength}
              text="Sort by length"
            />
            <GoodsList
              goods={goods}
            />
          </>
        )}
        {goodsFromServer.length}
      </div>
    );
  }
}
