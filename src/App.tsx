import React from 'react';
import './App.scss';

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

const numbers: number[] = Array.from(Array(10).keys());

const goodLengthStart = '1';

type State = {
  goods: string[];
  goodLength: string;
  isVisible: boolean
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    goodLength: goodLengthStart,
    isVisible: false,
  };

  reversedGoods = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortedGoods = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  resetGoods = () => {
    this.setState({
      goods: [...goodsFromServer],
      goodLength: goodLengthStart,
    });
  };

  sortByLengthGoods = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  changeLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newGoods = goodsFromServer.filter(
      good => good.length >= Number(event.target.value),
    );

    this.setState({
      goodLength: event.target.value,
      goods: newGoods,
    });
  };

  showGoods = () => {
    this.setState({ isVisible: true });
  };

  render() {
    const { goods, goodLength, isVisible } = this.state;

    return isVisible
      ? (
        <div className="App">
          <div className="products">
            <h1 className="products__title">
              Goods
            </h1>
            <ul className="products__list">
              {goods.map((good) => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <div className="button">
            <button
              className="button__choose"
              type="button"
              onClick={this.reversedGoods}
            >
              Reverse
            </button>
            <button
              className="button__choose"
              type="button"
              onClick={this.sortedGoods}
            >
              Sorted by Name
            </button>
            <button
              className="button__choose"
              type="button"
              onClick={this.resetGoods}
            >
              Reset
            </button>
            <button
              className="button__choose"
              type="button"
              onClick={this.sortByLengthGoods}
            >
              Sorted by Length
            </button>
          </div>
          <label className="label">
            Choose good length:
            <select value={goodLength} onChange={this.changeLength}>
              {numbers.map(elem => (
                <option key={elem} value={elem + 1}>{elem + 1}</option>
              ))}
            </select>
          </label>
        </div>
      )
      : (
        <button
          className="initial-button"
          type="button"
          onClick={this.showGoods}
        >
          Start
        </button>
      );
  }
}

export default App;
