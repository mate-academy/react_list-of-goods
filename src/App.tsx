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
  goods: string[];
  isShowContent: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isShowContent: false,
  };

  showContent = () => {
    this.setState(() => ({
      isShowContent: true,
    }));
  };

  reverse = () => {
    this.setState((currentState) => ({
      goods: [...currentState.goods].reverse(),
    }));
  };

  sort = () => {
    this.setState((currentState) => ({
      goods: [...currentState.goods].sort(),
    }));
  };

  sortByLength = () => {
    this.setState((currentState) => ({
      goods: [...currentState.goods].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
    }));
  };

  render() {
    if (!this.state.isShowContent) {
      return (
        <button
          type="button"
          onClick={this.showContent}
          className="button__start btn btn-secondary"
        >
          Start
        </button>
      );
    }

    return (
      <div className="goods">
        <GoodsList goods={this.state.goods} />
        <div className="goods__buttons">
          <button
            type="button"
            onClick={this.reverse}
            className="btn btn-secondary goods__button"
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.sort}
            className="btn btn-secondary goods__button"
          >
            Sort
          </button>
          <button
            type="button"
            onClick={this.reset}
            className="btn btn-secondary goods__button"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={this.sortByLength}
            className="btn btn-secondary goods__button"
          >
            SortByLength
          </button>
        </div>
      </div>
    );
  }
}

export default App;
