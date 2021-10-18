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

type State = {
  goods: string[],
  goodsForWork: string[],
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    goodsForWork: [...goodsFromServer],
    isVisible: true,
  };

  printGoods = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  reverse = () => {
    this.setState(state => ({
      goodsForWork: (state.goodsForWork).reverse(),
    }));
  };

  sortAlphabet = () => {
    this.setState(state => ({
      goodsForWork: (state.goodsForWork).sort((g1, g2) => (
        g1.localeCompare(g2)
      )),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goodsForWork: (state.goodsForWork).sort((g1, g2) => (
        g1.length - g2.length
      )),
    }));
  };

  reset = () => {
    this.setState(state => ({ goodsForWork: [...state.goods] }));
  };

  render() {
    const { goodsForWork, isVisible } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        <button
          className={`
            button
            ${!isVisible && 'button__visible'}
          `}
          type="button"
          onClick={this.printGoods}
        >
          Start
        </button>
        <button
          className="button"
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          className="button"
          type="button"
          onClick={this.sortAlphabet}
        >
          Sort Alphabetically
        </button>
        <button
          className="button"
          type="button"
          onClick={this.sortByLength}
        >
          Sort by Length
        </button>
        <button
          className="button"
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>

        <ul
          className={`
            list
            ${!isVisible && 'list__visible'}
          `}
        >
          {goodsForWork.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
