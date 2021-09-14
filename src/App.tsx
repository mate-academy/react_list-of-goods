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
    goods: [...goodsFromServer],
    isShowContent: false,
  };

  showContent = () => {
    this.setState(() => ({
      isShowContent: true,
    }));
  };

  reverse = () => {
    this.setState((currentState) => ({
      goods: currentState.goods.reverse(),
    }));
  };

  sort = () => {
    this.setState((currentState) => ({
      goods: currentState.goods.sort(),
    }));
  };

  sortByLength = () => {
    this.setState((currentState) => ({
      goods: currentState.goods.sort((a, b) => a.length - b.length),
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
        <GoodsList
          goods={this.state.goods}
          reverse={this.reverse}
          sort={this.sort}
          sortByLength={this.sortByLength}
          reset={this.reset}
        />
      </div>
    );
  }
}

export default App;
