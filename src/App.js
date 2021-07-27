import React from 'react';
import { GoodList } from './components/GoodList';
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
    goods: [...goodsFromServer],
    isStarted: false,
  }

  start = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  }

  sortByName = () => {
    this.setState(state => ({
      goods: state.goods
        .sort((prevGood, nextGood) => prevGood.localeCompare(nextGood)),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: state.goods
        .sort((prevGood, nextGood) => prevGood.length - nextGood.length),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: [...goodsFromServer],
    }));
  }

  render() {
    const { goods, isStarted } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <div>
          {isStarted
            ? (
              <>
                <div className="App__buttons">
                  <button
                    type="button"
                    className="button is-primary"
                    onClick={this.reverse}
                  >
                    Reverse
                  </button>
                  <button
                    type="button"
                    className="button is-primary"
                    onClick={this.sortByName}
                  >
                    Sort alphabetically
                  </button>
                  <button
                    type="button"
                    className="button is-primary"
                    onClick={this.reset}
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    className="button is-primary"
                    onClick={this.sortByLength}
                  >
                    Sort by length
                  </button>
                </div>
                <div className="App__GoodList">
                  <GoodList goods={goods} />
                </div>
              </>
            )
            : (
              <button
                type="button"
                className="button is-primary"
                onClick={this.start}
              >
                Start
              </button>
            )}
        </div>
      </div>
    );
  }
}

export default App;
