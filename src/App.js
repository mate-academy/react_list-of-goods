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
    showList: false,
    showButtons: true,
    isReversed: false,
    sortBy: 'id',
  }

  showGoods = () => (
    this.setState(state => ({
      showList: true,
      showButtons: false,
    }))
  );

  reverse = () => (
    this.setState(state => ({
      isReversed: !state.isReversed,
    }))
  );

  sortByName = () => {
    this.setState({ sortBy: 'product' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  reset = () => {
    this.setState({
      sortBy: 'id',
      isReversed: false,
    });
  }

  render() {
    const {
      showList,
      showButtons,
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
        <ButtonReverse
          reverse={this.reverse}
          showButtons={showButtons}
        />
        <ButtonSortAlphabetically
          sortByName={this.sortByName}
          showButtons={showButtons}
        />
        <ButtonReset
          reset={this.reset}
          showButtons={showButtons}
        />
        <ButtonSortByLength
          sortByLength={this.sortByLength}
          showButtons={showButtons}
        />
        <GoodsList
          showList={showList}
          goods={goodsWithID}
          isReversed={isReversed}
          sortBy={sortBy}
        />
        {goodsFromServer.length}
      </div>
    );
  }
}
