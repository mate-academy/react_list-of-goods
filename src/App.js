import React from 'react';
import './App.css';
import { Goods } from './components/Goods';

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
    goods: [],
    wordsLength: 1,
  }

  showGoods = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  }

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      wordsLength: 1,
    });
  }

  reverseGoods = () => {
    this.setState(state => ({
      goods: [...state.goods.reverse()],
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods.sort()],
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods.sort((a, b) => a.length - b.length)],
    }));
  }

  selectLength = (requiredLength) => {
    this.setState(state => ({
      wordsLength: requiredLength,
    }));
  }

  render() {
    const { goods, wordsLength } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <select
          value={wordsLength}
          className="select"
          disabled={!goods.length}
          onChange={(event) => {
            this.selectLength(event.target.value);
          }}
        >
          {
            goodsFromServer.map((element, index) => (
              <option key={element} value={index + 1}>{index + 1}</option>
            ))
          }
        </select>
        <button
          type="button"
          className="button"
          onClick={this.showGoods}
          disabled={goods.length}
        >
          Show goods
        </button>
        <button
          type="button"
          className="button"
          hidden={!goods.length}
          onClick={this.reverseGoods}
        >
          Reverse
        </button>
        <button
          type="button"
          className="button"
          hidden={!goods.length}
          onClick={this.sortAlphabetically}
        >
          Sort
        </button>
        <button
          type="button"
          className="button"
          hidden={!goods.length}
          onClick={this.reset}
        >
          Reset
        </button>
        <button
          type="button"
          className="button"
          hidden={!goods.length}
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <Goods goods={goods} length={+wordsLength} />
      </div>
    );
  }
}

export default App;
