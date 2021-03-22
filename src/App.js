import React from 'react';

import { GoodsList } from './components/GoodsList';
import { ButtonStart } from './components/ButtonStart';
import './App.css';
import { ButtonReverse } from './components/ButtonReverse';
// eslint-disable-next-line max-len
import { ButtonSortAlphabetically } from './components/ButtonSortAlphabetically';
import { ButtonReset } from './components/ButtonReset';
import { ButtonSortByLength } from './components/ButtonSortByLength';

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

const goodsWithID = goodsFromServer.map((product, index) => ({
  product,
  id: index + 1,
}));

export class App extends React.Component {
  state = {
    goods: goodsWithID,
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
    this.setState(prevState => ({
      goods: prevState.goods.sort((word1, word2) => (
        word1.id - word2.id
      )),
    }));
  }

  reverse = () => (
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }))
  );

  render() {
    const {
      showList,
      showButtons,
      goods,
      isReversed,
      sortBy,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <ButtonStart
          showGoods={this.showGoods}
          showButtons={showButtons}
        />
        {!showButtons
        && (
          <>
            <ButtonReverse
              reverse={this.reverse}
            />
            <ButtonSortAlphabetically
              sortByName={this.sortByName}
            />
            <ButtonReset
              reset={this.reset}
            />
            <ButtonSortByLength
              sortByLength={this.sortByLength}
            />
            <GoodsList
              showList={showList}
              goods={goods}
              isReversed={isReversed}
              sortBy={sortBy}
            />
          </>
        )}
        {goodsFromServer.length}
      </div>
    );
  }
}
