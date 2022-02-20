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
  isVisible: boolean;
  isReversed: boolean;
  sortedBy: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    sortedBy: '',
  };

  start = () => {
    this.setState({
      isVisible: true,
    });
  };

  reverse = () => {
    this.setState({
      isReversed: true,
    });
  };

  sortedByAlphabet = () => {
    this.setState({
      sortedBy: 'alphabet',
    });
  };

  sortedByLength = () => {
    this.setState({
      sortedBy: 'length',
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortedBy: '',
    });
  };

  sortedGoods = () => {
    const { isReversed, goods, sortedBy } = this.state;
    const copiedGoods = [...goods];

    copiedGoods.sort((el1, el2) => {
      if (sortedBy === 'alphabet') {
        return el1.localeCompare(el2);
      }

      if (sortedBy === 'length') {
        return el1.length - el2.length;
      }

      return 0;
    });

    if (isReversed) {
      copiedGoods.reverse();
    }

    return copiedGoods;
  };

  render() {
    const { isVisible } = this.state;
    const sortedGoods = this.sortedGoods();

    return (
      <div className="App">
        {!isVisible && (
          <button
            type="button"
            className="start-button"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isVisible && (
          <>
            <GoodsList goodslist={sortedGoods} />
            <button
              type="button"
              className="alphabetSortingButton"
              onClick={this.sortedByAlphabet}
            >
              Sort by alphabet
            </button>

            <button
              type="button"
              className="lengthSortingButton"
              onClick={this.sortedByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className="resetButton"
              onClick={this.reset}
            >
              RESET
            </button>
          </>
        )}
      </div>
    );
  }
}
