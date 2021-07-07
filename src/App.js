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
    goods: [...goodsFromServer],
    start: false,
  }

  start = () => {
    this.setState(state => ({
      start: true,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  }

  sort = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: [...goodsFromServer],
    }));
  }

  sortLength = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { goods, start } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sort}
        >
          Sort
        </button>
        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.sortLength}
        >
          Sort by length
        </button>
        {start
          ? <GoodsList goods={goods} />
          : (
            <button
              className="start"
              type="button"
              onClick={this.start}
            >
              Start
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
