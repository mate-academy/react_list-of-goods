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
    isVisible: false,
    goods: [...goodsFromServer],
  };

  showList = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  reverse = () => {
    if (this.state.isVisible) {
      this.setState(state => ({
        goods: [...state.goods.reverse()],
      }));
    }
  };

  sortAlphabetically = () => {
    if (this.state.isVisible) {
      this.setState(state => ({
        goods: [...state.goods.sort((a, b) => a.localeCompare(b))],
      }));
    }
  };

  reset = () => {
    if (this.state.isVisible) {
      this.setState(state => ({
        goods: [...goodsFromServer],
      }));
    }
  };

  sortByLength = () => {
    if (this.state.isVisible) {
      this.setState(state => ({
        goods: [...state.goods.sort((a, b) => a.length - b.length)],
      }));
    }
  };

  render() {
    const { isVisible, goods } = this.state;

    return (
      <div className="App">
        <div className="container">
          <div className="goods">
            <h1 className="goods__title">
              {`Goods: ${goodsFromServer.length}`}
            </h1>
            <div className="goods__buttons">
              {!isVisible && (
                <button
                  type="button"
                  className="goods__button"
                  onClick={this.showList}
                >
                  Start
                </button>
              )}
              <button
                type="button"
                className="goods__button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                className="goods__button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                className="goods__button"
                onClick={this.reset}
              >
                Reset
              </button>
              <button
                type="button"
                className="goods__button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
            </div>
            {isVisible && <GoodsList goods={goods} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
