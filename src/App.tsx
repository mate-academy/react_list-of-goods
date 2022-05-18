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
  goodsList: string[],
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goodsList: goodsFromServer,
    isVisible: false,
  };

  showGoods = () => {
    this.setState({ isVisible: true });
  };

  reverse = () => {
    this.setState((state) => ({
      goodsList: [...state.goodsList].reverse(),
    }));
  };

  sortByName = () => {
    this.setState((state) => ({
      goodsList: [...state.goodsList].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      goodsList: [...state.goodsList].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState({
      goodsList: goodsFromServer,
    });
  };

  render() {
    const { goodsList, isVisible } = this.state;

    return isVisible
      ? (
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
            onClick={this.sortByName}
          >
            Sort by Name
          </button>
          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort by Length
          </button>
          <button
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
          <GoodsList goods={goodsList} />
        </div>
      )
      : (
        <button
          type="button"
          onClick={this.showGoods}
        >
          Start
        </button>
      );
  }
}

export default App;
