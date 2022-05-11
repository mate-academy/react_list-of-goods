import React from 'react';
import './App.scss';
import { GoodsList } from './component/GoodsList';

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

  showStart = () => {
    this.setState({ isVisible: true });
  };

  showReverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (a, b) => (a.length - b.length),
      ),
    }));
  };

  showReset = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
    }));
  };

  render() {
    const { goods, isVisible } = this.state;

    return isVisible
      ? (
        <div className="app">
          <h1 className="app__title">Goods</h1>
          <GoodsList goods={goods} />
          <div>
            <button
              type="button"
              className="button button__reverse"
              onClick={this.showReverse}
            >
              ReverseGood
            </button>

            <button
              type="button"
              className="button button__sort"
              onClick={this.sortAlphabetically}
            >
              SortAlphabetically
            </button>

            <button
              type="button"
              className="button button__length"
              onClick={this.sortByLength}
            >
              SortByLength
            </button>
            <div className="button__reset">
              <button
                type="button"
                className="button"
                onClick={this.showReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )
      : (
        <button
          type="button"
          className="button"
          onClick={this.showStart}
        >
          Start
        </button>
      );
  }
}

export default App;
