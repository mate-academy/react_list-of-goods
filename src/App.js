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

const options = Array(10).fill(0).map((x, i) => i + 1);

class App extends React.Component {
  state = {
    isVisible: false,
    isReversed: false,
    sortBy: 'name',
    minLength: 1,
  }

  start = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByName = () => {
    this.setState({
      sortBy: 'name',
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      minLength: 1,
    });
  }

  select = ({ target }) => {
    this.setState({
      minLength: +target.value,
    });
  }

  prepareGoods = (goodsList) => {
    const { minLength, sortBy, isReversed } = this.state;
    const goods = goodsList.filter(good => good.length >= minLength);

    switch (sortBy) {
      case 'name':
        goods.sort();
        break;

      case 'length':
        goods.sort((a, b) => a.length - b.length);
        break;

      default:
        break;
    }

    if (isReversed) {
      goods.reverse();
    }

    return goods;
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.start}
        >
          {this.state.isVisible ? 'Hide' : 'Start'}
        </button>

        <br />

        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortByName}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>

        <br />

        <select value={this.state.minLength} onChange={this.select}>
          {options.map(x => <option key={x}>{x}</option>)}
        </select>

        {this.state.isVisible
          && <GoodsList goodsList={this.prepareGoods(goodsFromServer)} />}
      </div>
    );
  }
}

export default App;
