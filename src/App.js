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
  }

  start(param) {
    if (param === 'reverse') {
      this.setState(state => ({
        goods: [...state.goods].reverse(),
      }));
    }

    if (param === 'sort') {
      this.setState(state => ({
        goods: [...state.goods].sort(),
      }));
    }

    if (param === 'reset') {
      this.setState(state => ({
        goods: goodsFromServer,
      }));
    }

    if (param === 'sortLength') {
      this.setState(state => ({
        goods: [...state.goods].sort((a, b) => a.length - b.length),
      }));
    }

    return (
      <ul className="list" hidden>
        {this.state.goods.map(good => (
          <li key={good}>
            {good}
          </li>
        ))}
      </ul>
    );
  }

  reverse() {
    this.start('reverse');
  }

  sort() {
    this.start('sort');
  }

  reset() {
    this.start('reset');
  }

  sortLength() {
    this.start('sortLength');
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          className="startButton"
          onClick={() => {
            document.querySelector('.list').hidden = false;
            document.querySelector('.startButton').hidden = true;
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
