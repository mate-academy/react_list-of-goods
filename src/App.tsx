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
  goods: string[],
  goodListVisible: boolean,
  filteredGoods: string[]
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    goodListVisible: false,
    filteredGoods: [...goodsFromServer],
  };

  showGoods = () => {
    this.setState(() => ({
      goodListVisible: true,
    }));
  };

  reverseGoods = () => {
    this.setState((state) => ({
      filteredGoods: state.filteredGoods.reverse(),
    }));
  };

  sortByName = () => {
    this.setState((state) => ({
      filteredGoods: state.filteredGoods.sort(),
    }));
  };

  reset = () => {
    this.setState((state) => ({
      filteredGoods: [...state.goods],
    }));
    this.forceUpdate();
  };

  sortByLength = () => {
    this.setState((state) => ({
      filteredGoods: state.filteredGoods.sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { goodListVisible } = this.state;

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
          {this.state.filteredGoods.map(good => <li key={good}>{good}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
