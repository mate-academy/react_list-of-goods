import React from 'react';
import './App.css';
import { GoodsList } from './Components/GoodsList';

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
    isVisible: false,
  }

  showGoods = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
      goods: state.goods,
    }));
  }

  reverseGoods = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByNameOfGood = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (previousGood, nextGood) => previousGood.localeCompare(nextGood),
      ),
    }));
  }

  sortByNameLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (previousGood, nextGood) => previousGood.length - nextGood.length,
      ),
    }));
  }

  resetHandler = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  render() {
    const { goods, isVisible } = this.state;

    return (
      <div className="App">
        {!isVisible && (
        <button
          type="button"
          onClick={this.showGoods}
        >
          Start
        </button>
        )}

        {isVisible && (
        <>
          <h1>Goods List</h1>

          <GoodsList goods={goods} />

          <button
            type="button"
            onClick={this.reverseGoods}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.sortByNameOfGood}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByNameLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.resetHandler}
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
