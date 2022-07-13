import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isVisible: false,
  };

  showGoods = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  reverseGoods = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortByAlphabet = () => {
    this.setState((state) => ({
      goods: [...state.goods]
        .sort((product1, product2) => product1.localeCompare(product2)),
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods]
        .sort((product1, product2) => product1.length - product2.length),
    }));
  };

  reset = () => {
    this.setState({ goods: [...goodsFromServer] });
  };

  render() {
    const {
      isVisible,
      goods,
    } = this.state;

    return (
      <div className="App">
        {isVisible ? (
          <>
            <h1>Goods</h1>
            <GoodsList goods={goods} />
            <button
              type="button"
              onClick={this.reverseGoods}
            >
              revers
            </button>

            <button
              type="button"
              onClick={this.sortByAlphabet}
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
          </>
        ) : (
          <button
            type="button"
            onClick={this.showGoods}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
