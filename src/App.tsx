import classNames from 'classnames';
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
  goodListVisible: boolean,
  filteredGoods: string[],
  goodsAreReversed: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goodListVisible: false,
    filteredGoods: [...goodsFromServer],
    goodsAreReversed: false,
  };

  showGoods = () => {
    this.setState(() => ({
      goodListVisible: true,
    }));
  };

  reverseGoods = () => {
    this.setState((state) => ({
      goodsAreReversed: !state.goodsAreReversed,
    }));
  };

  sortByName = () => {
    this.setState(() => ({
      filteredGoods: [...goodsFromServer].sort(),
      goodsAreReversed: false,
    }));
  };

  reset = () => {
    this.setState(() => ({
      filteredGoods: [...goodsFromServer],
    }));
  };

  sortByLength = () => {
    this.setState(() => ({
      filteredGoods: [...goodsFromServer].sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { goodListVisible, goodsAreReversed } = this.state;
    const goods = [...this.state.filteredGoods];

    if (goodsAreReversed) {
      goods.reverse();
    }

    return (
      <div className="App">
        <div className="buttons-container">
          <button
            type="button"
            onClick={this.showGoods}
            className={classNames('button', { hidden: goodListVisible })}
          >
            Start
          </button>

          <button
            type="button"
            className="button"
            onClick={this.reverseGoods}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.sortByName}
            className="button"
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button"
            onClick={this.reset}
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

        <h1 className="headding">Goods</h1>
        <ul className={classNames('goodsList', { visible: goodListVisible })}>
          {goods.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
