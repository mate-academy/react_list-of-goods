import React from 'react';

import { GoodsList } from './components/GoodsList';
import { ButtonStart } from './components/ButtonStart';
import './App.css';
import { Button } from './components/Button';

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
    this.setState(state => ({
      showButtons: false,
    }))
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

  reset = () => {
    this.setState({
      goods: [...preparedGoods],
    });
  }

  reverse = () => (
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
        <ButtonStart
          showGoods={this.showGoods}
          showButtons={showButtons}
        />
        )}
        {!showButtons
        && (
          <>
            <Button
              clickButton={this.reverse}
              text="Reverse"
            />
            <Button
              clickButton={this.sortByName}
              text="Sort alphabetically"
            />
            <Button
              clickButton={this.reset}
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
