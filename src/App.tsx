import React from 'react';
import './App.css';

import GoodsList from './GoodsList';

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
  isVisible: boolean;
  isReversed: boolean;
  isAlphabeticallySorted: boolean;
  isByLengthSorted: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    isAlphabeticallySorted: false,
    isByLengthSorted: false,
  };

  start = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      isAlphabeticallySorted: !state.isAlphabeticallySorted,
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      isByLengthSorted: !state.isByLengthSorted,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      isAlphabeticallySorted: false,
      isByLengthSorted: false,
    });
  };

  render() {
    const {
      goods, isVisible, isReversed, isAlphabeticallySorted, isByLengthSorted,
    } = this.state;

    const visebleGoods = goods.slice(0);

    if (isReversed) {
      visebleGoods.reverse();
    }

    if (isAlphabeticallySorted) {
      visebleGoods.sort();
    }

    if (isByLengthSorted) {
      visebleGoods.sort((g1, g2) => g1.length - g2.length);
    }

    return (
      <div className="app">
        <h1 className="app__title">
          Goods
        </h1>
        <div className="app__buttons">
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>

          <button
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.sortAlphabetically}
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
        </div>

        {isVisible
          ? <GoodsList goods={visebleGoods} />
          : null}
      </div>
    );
  }
}

export default App;
