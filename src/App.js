import React from 'react';
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
    visible: true,
  }

  start() {
    return (
      <ul className="list" hidden={this.state.visible}>
        {this.state.goods.map(good => (
          <li key={good}>
            {good}
          </li>
        ))}
      </ul>
    );
  }

  reverse() {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sort() {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  reset() {
    this.setState(state => ({
      goods: goodsFromServer,
    }));
  }

  sortLength() {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          hidden={!this.state.visible}
          className="startButton"
          onClick={() => {
            this.setState(state => ({
              visible: !state.visible,
            }));
          }}
        >
          Start
        </button>
        <button
          type="button"
          className="reverseButton"
          onClick={() => {
            this.reverse();
          }}
        >
          Reverse
        </button>
        <button
          type="button"
          className="sortButton"
          onClick={() => {
            this.sort();
          }}
        >
          Sort
        </button>
        <button
          type="button"
          className="sortLengthButton"
          onClick={() => {
            this.sortLength();
          }}
        >
          Sort_by_length
        </button>
        <button
          type="button"
          className="resetButton"
          onClick={() => {
            this.reset();
          }}
        >
          Reset
        </button>
        <>{this.start()}</>
      </div>
    );
  }
}

export default App;
