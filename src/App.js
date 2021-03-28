import React from 'react';
import { GoodsList } from './GoodsList';
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

const preparedGoods = goodsFromServer.map((good, index) => ({
  product: good,
  id: index + 1,
}));

class App extends React.Component {
  state = {
    goods: preparedGoods,
    isStarted: false,
  }

  start = () => {
    this.setState(prevState => ({
      isStarted: !prevState.isStarted,
    }));
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortByAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (prevGood, nextGood) => (
          prevGood.product.localeCompare(nextGood.product)
        ),
      ),
    }));
  }

  reset = () => {
    this.setState({
      goods: preparedGoods,
    });
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (prevGood, nextGood) => (
          prevGood.product.length - nextGood.product.length
        ),
      ),
    }));
  }

  render() {
    const { goods, isStarted } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isStarted ? (
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        ) : (
          <>
            <div className="buttons">
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortByAlphabetically}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
            </div>
            <GoodsList listOfGoods={goods} />
          </>
        )
        }
      </div>
    );
  }
}

export default App;
