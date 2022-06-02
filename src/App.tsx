import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

const goodsFromServer: string[] = [
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

type Prors = {};

type State = {
  goods: string[],
  isGoodsVisible: boolean,
};

class App extends React.Component<Prors, State> {
  state: State = {
    goods: [...goodsFromServer],
    isGoodsVisible: false,
  };

  showGoods = () => {
    this.setState(state => ({
      isGoodsVisible: !state.isGoodsVisible,
    }));
  };

  reverseGoods = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  };

  sortByName = () => {
    this.setState(state => ({
      goods: state.goods
        .sort((firstGood, secondGood) => firstGood.localeCompare(secondGood)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: state.goods
        .sort((firstGood, secondGood) => firstGood.length - secondGood.length),
    }));
  };

  reset = () => {
    this.setState({ goods: [...goodsFromServer] });
  };

  render() {
    const { goods, isGoodsVisible } = this.state;

    return (
      <div className="App container">
        <button
          type="button"
          className={isGoodsVisible
            ? 'button is-danger is-light'
            : 'button is-primary is-light'}
          onClick={this.showGoods}
        >
          {isGoodsVisible
            ? 'Hide goods'
            : 'Show goods'}
        </button>
        {isGoodsVisible
        && (
          <>
            <h1 className="title is-2">Goods:</h1>
            <GoodsList goods={goods} />
          </>
        )}
        {isGoodsVisible
        && (
          <>
            <button
              type="button"
              className="button is-primary is-rounded"
              onClick={this.reverseGoods}
            >
              Reverse
            </button>
            <button
              type="button"
              className="button is-link is-rounded"
              onClick={this.sortByName}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              className="button is-info is-rounded"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <button
              type="button"
              className="button is-success is-rounded"
              onClick={this.reset}
            >
              Reset
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
