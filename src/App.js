import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

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
    buttonVisible: true,
  }

  showList = () => {
    this.setState(state => ({
      buttonVisible: false,
    }));
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlpbList = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  sortLengthList = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => b.length - a.length),
    }));
  }

  resetList = () => {
    this.setState(state => ({
      goods: [...goodsFromServer],
    }));
  }

  render() {
    const { goods } = this.state;

    this.a = 10;

    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.buttonVisible && (
          <button
            type="button"
            className="button"
            onClick={this.showList}
          >
            Start
          </button>
        )}

        {!this.state.buttonVisible && (
          <div>
            <GoodsList goods={goods} />

            <button
              type="button"
              className="button"
              onClick={this.reverseList}
            >
              Reverse
            </button>

            <button
              type="button"
              className="button"
              onClick={this.sortAlpbList}
            >
              Sort
            </button>

            <button
              type="button"
              className="button"
              onClick={this.sortLengthList}
            >
              Sort by length
            </button>

            <button
              type="button"
              className="button"
              onClick={this.resetList}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
