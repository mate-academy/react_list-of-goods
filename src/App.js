import React from 'react';
import { GoodsList } from './components/GoodsList';
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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    listVisebility: false,
  }

  showGoods = (event) => {
    this.setState({
      listVisebility: true,
    });
    const startButton = event;

    startButton.target.style.visibility = 'hidden';
  }

  reverseGoods = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortGoods = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((firstGood, secondGood) => firstGood.localeCompare(secondGood)),
    }));
  }

  resetGoods = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  sortByLengthGoods = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((firstGood, secondGood) => firstGood.length - secondGood.length),
    }));
  }

  render() {
    const { listVisebility, goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button type="button" onClick={this.showGoods}>Start</button>
        {listVisebility && (
          <>
            <button type="button" onClick={this.reverseGoods}>
              Reverse
            </button>
            <button type="button" onClick={this.sortGoods}>
              Sort
            </button>
            <button type="button" onClick={this.resetGoods}>
              Reset
            </button>
            <button type="button" onClick={this.sortByLengthGoods}>
              Sort by length
            </button>
            <GoodsList goods={goods} />
          </>
        )}
      </div>
    );
  }
}

export default App;
