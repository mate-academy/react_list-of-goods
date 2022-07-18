/* eslint-disable react/no-unused-state */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
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

enum SortType {
  Alphabet,
  Length,
  None,
}

type State = {
  goods: string[];
  isVisible: boolean;
  isReversed: boolean,
  isSorted: boolean,
  sortBy: SortType,
};

function getSorted(
  goods: string[],
  isReversed: boolean,
  sortBy: SortType,
  isSorted: boolean,
) {
  const copyGoods = [...goods];

  if (isSorted) {
    copyGoods.sort((good1, good2): number => {
      switch (sortBy) {
        case SortType.Length:
          return good1.length - good2.length;

        case SortType.Alphabet:
          return good1.localeCompare(good2);

        default: return 0;
      }
    });
  }

  if (isReversed) {
    copyGoods.reverse();
  }

  return copyGoods;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    isSorted: false,
    sortBy: SortType.None,
  };

  visibleGoodsList = () => {
    this.setState((state) => ({
      isVisible: !state.isVisible,
    }));
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState(() => ({
      sortBy: SortType.None,
      isReversed: false,
      isSorted: false,
    }));
  };

  sortByLength = () => {
    this.setState({
      isSorted: true,
      sortBy: SortType.Length,
    });
  };

  sortByAlphabetic = () => {
    this.setState({
      isSorted: true,
      sortBy: SortType.Alphabet,
    });
  };

  render() {
    const { isVisible } = this.state;

    const sortedGoods = getSorted(
      goodsFromServer,
      this.state.isReversed,
      this.state.sortBy,
      this.state.isSorted,
    );

    return (
      <div className="App">
        <div className="App__start">
          {!isVisible && (
            <button
              type="button"
              className="App__button"
              onClick={this.visibleGoodsList}
            >
              Start
            </button>
          )}
        </div>

        {isVisible && (
          <div className="App__container">
            <ul className="App__list">
              {(sortedGoods.map((good) => (
                <li
                  key={good}
                  className="App__item"
                >
                  {good}
                </li>
              )))}
            </ul>

            <button
              className="App__button"
              onClick={this.reverse}
              type="button"
            >
              Reverse
            </button>

            <button
              className="App__button"
              onClick={this.reset}
              type="button"
            >
              Reset
            </button>

            <button
              className="App__button"
              onClick={this.sortByAlphabetic}
              type="button"
            >
              Sort alphabetic
            </button>

            <button
              className="App__button"
              onClick={this.sortByLength}
              type="button"
            >
              Sort by length
            </button>

          </div>
        )}
      </div>
    );
  }
}
