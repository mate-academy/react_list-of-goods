import React from 'react';
import { GoodsList } from './GoodsList';
import './App.css';

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
  isListOpened: boolean,
  isReversed: boolean,
  isSortedByLength: boolean,
  isSortedByAlphabet: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isListOpened: false,
    isReversed: false,
    isSortedByLength: false,
    isSortedByAlphabet: false,
  };

  listOpener = () => {
    this.setState(() => ({
      isListOpened: true,
    }));
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAphabet = () => {
    this.setState(() => ({
      isSortedByAlphabet: true,
      isReversed: false,
      isSortedByLength: false,
    }));
  };

  sortByLength = () => {
    this.setState(() => ({
      isSortedByLength: true,
      isSortedByAlphabet: false,
      isReversed: false,
    }));
  };

  reset = () => {
    this.setState(() => ({
      isReversed: false,
      isSortedByLength: false,
      isSortedByAlphabet: false,
    }));
  };

  render() {
    const {
      goods,
      isListOpened,
      isReversed,
      isSortedByLength,
      isSortedByAlphabet,
    } = this.state;

    const searchedGoods = [...goods];

    if (isSortedByLength) {
      searchedGoods.sort((good1, good2) => good1.length - good2.length);
    }

    if (isSortedByAlphabet) {
      searchedGoods.sort((good1, good2) => good1.localeCompare(good2));
    }

    if (isReversed) {
      searchedGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isListOpened && (
          <button
            type="button"
            onClick={this.listOpener}
          >
            Start
          </button>
        )}

        {isListOpened && (
          <>
            <button
              onClick={this.reverse}
              type="button"
            >
              reverse
            </button>

            <button
              onClick={this.sortByLength}
              type="button"
            >
              Sort by length
            </button>

            <button
              onClick={this.sortByAphabet}
              type="button"
            >
              Sort by alphabet
            </button>

            <button
              onClick={this.reset}
              type="button"
            >
              Reset
            </button>

            <GoodsList
              goodsList={searchedGoods}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
