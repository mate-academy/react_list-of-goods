import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
    isVisible: true,
  }

  startGoods = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
    }));
  }

  reverseGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  sortAlphabeticallyGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (prev, next) => prev.localeCompare(next),
      ),
    }));
  };

  resetGoods = () => {
    this.setState(({
      goods: goodsFromServer,
    }));
  };

  sortByLengthGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (prev, next) => prev.length - next.length,
      ),
    }));
  };

  render() {
    const { goods, isVisible } = this.state;

    return (
      <div className="App">
        <h1 className="header">Goods</h1>
        {' '}
        {
          isVisible && (
            <button
              type="button"
              onClick={this.startGoods}
            >
              Start
            </button>
          )
        }
        {' '}
        {
          !isVisible && (
            <>
              <button
                type="button"
                onClick={this.reverseGoods}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlphabeticallyGoods}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.resetGoods}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={this.sortByLengthGoods}
              >
                Sort by length
              </button>

              <GoodsList goods={goods} />
            </>
          )
        }
      </div>
    );
  }
}

export default App;
