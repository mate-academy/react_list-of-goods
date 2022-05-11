import React from 'react';
import './App.scss';
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
  isGoodsVisible: boolean,
  goods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    isGoodsVisible: false,
    goods: [...goodsFromServer],
  };

  showGoodsList = () => {
    this.setState({ isGoodsVisible: true });
  };

  reverseGoods = () => {
    this.setState((state) => {
      return {
        goods: [...state.goods].reverse(),
      };
    });
  };

  sortAlphabetical = () => {
    this.setState((state) => {
      return {
        goods: [...state.goods].sort(),
      };
    });
  };

  sortByLength = () => {
    this.setState((state) => {
      return {
        goods: [...state.goods].sort((a, b) => b.length - a.length),
      };
    });
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>

        <button
          type="button"
          className="btn btn--start"
          onClick={this.showGoodsList}
          disabled={this.state.isGoodsVisible}
        >
          Start
        </button>

        {this.state.isGoodsVisible
          && (
            <>
              <GoodsList
                goods={this.state.goods}
              />

              <button
                type="button"
                className="btn"
                onClick={this.reverseGoods}
              >
                Reverse
              </button>

              <button
                type="button"
                className="btn"
                onClick={this.sortAlphabetical}
              >
                Sort alphabetical
              </button>

              <button
                type="button"
                className="btn"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="btn"
                onClick={this.reset}
              >
                Reset
              </button>
            </>
          )}
      </div>
    );
  }
}

export default App;
