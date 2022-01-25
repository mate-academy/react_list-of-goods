import React from 'react';
import './App.css';
import { GoodsList } from './Components/GoodsList/GoodsList';

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
    isVisible: true,
  };

  showGoods = () => {
    this.setState({
      isVisible: false,
    });
  };

  reverseGoods = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort(),
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  resetGoods = () => {
    this.setState({
      goods: goodsFromServer,
    });
  };

  render() {
    const { isVisible, goods } = this.state;

    return (
      <div className="App">
        <h1 className="title">Goods</h1>
        {isVisible ? (
          <button type="button" onClick={this.showGoods}>
            Start
          </button>
        ) : (
          <>
            <button type="button" onClick={this.reverseGoods}>
              Reverse
            </button>
            <button type="button" onClick={this.sortAlphabetically}>
              Sort alphabetically
            </button>
            <button type="button" onClick={this.resetGoods}>
              Reset
            </button>
            <button type="button" onClick={this.sortByLength}>
              Sort by length
            </button>
            <GoodsList goodsList={goods} />
          </>
        )}
      </div>
    );
  }
}

export default App;
