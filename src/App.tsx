import React from 'react';
import './App.css';

const goodsFromServer: string[] = [
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

type State = {
  goods: string[],
  isVisible: boolean,
  length: number,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isVisible: false,
    length: 1,
  };

  showGoods = () => {
    this.setState({ isVisible: true });
  };

  reverseGoods = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAplhabet = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((item1, item2) => (
        item1.localeCompare(item2))),
    }));
  };

  resetGoods = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
      length: 1,
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((item1, item2) => (
        item1.length - item2.length
      )),
    }));
  };

  render() {
    const { goods, isVisible, length } = this.state;
    const visibleGoods = goods.filter(good => good.length >= length);

    return isVisible
      ? (
        <div className="App">
          <h1>Goods</h1>
          <ul className="list">
            {visibleGoods.map(good => (
              <li key={good}>
                {good}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="button"
            onClick={this.reverseGoods}
          >
            Reverse
          </button>
          <button
            type="button"
            className="button"
            onClick={this.sortAplhabet}
          >
            Sort alphabet
          </button>
          <button
            type="button"
            className="button"
            onClick={this.resetGoods}
          >
            Reset
          </button>
          <button
            type="button"
            className="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>
      )
      : (
        <button
          type="button"
          className="button"
          onClick={this.showGoods}
        >
          Start
        </button>
      );
  }
}

export default App;
