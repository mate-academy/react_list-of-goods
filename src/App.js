import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

export const goodsFromServer = [
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
    isLoading: false,
    selectCount: 1,
  }

  selectedFilter = (e) => {
    const count = +e.target.value;
    const reversedArray = [...goodsFromServer].filter(g => g.length >= count);

    this.setState(state => ({
      selectCount: count,
      goods: reversedArray,
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: goodsFromServer,
      selectCount: 1,
    }));
  }

  reverse = () => {
    const reversedArray = [...this.state.goods];

    reversedArray.reverse();
    this.setState(state => ({ goods: reversedArray }));
  }

  sortAlpha = () => {
    const sortedGoods = [...this.state.goods];

    sortedGoods.sort();
    this.setState(state => ({ goods: sortedGoods }));
  }

  sortLength = () => {
    const sortedGoods = [...this.state.goods];

    sortedGoods.sort((a, b) => a.length - b.length);
    this.setState(state => ({ goods: sortedGoods }));
  }

  render() {
    const {
      isLoading,
      goods,
      selectCount,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        { ' ' }
        <button
          className="start"
          type="button"
          onClick={() => this.setState({ isLoading: !isLoading })}
        >
          Start
        </button>
        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortAlpha}
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
          onClick={this.sortLength}
        >
          Sort by length
        </button>
        <select value={selectCount} onChange={this.selectedFilter}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        {
          isLoading
            ? (
              <GoodsList
                goods={goods}
              />
            )
            : null}
      </div>
    );
  }
}

export default App;
