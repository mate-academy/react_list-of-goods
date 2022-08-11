/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';

const goodsFromServer = [
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
  NONE,
  ALPHABET,
  LENGTH,
}

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((el1, el2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return el1.localeCompare(el2);

      case SortType.LENGTH:
        return el1.length - el2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  startSorted = () => {
    this.setState({ isStarted: true });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  render() {
    const { isReversed, isStarted, sortType } = this.state;
    const goods = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            onClick={this.startSorted}
            className="button is-success is-rounded is-size-2"
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <div>
              <div
                className="columns"
              >
                <button
                  type="button"
                  className="column button is-info is-outlined"
                  onClick={this.sortByAlphabet}
                >
                  Sort alphabeticaly
                </button>
                <button
                  type="button"
                  className="column button is-info is-outlined"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>
                <button
                  type="button"
                  className="column button is-info is-outlined"
                  onClick={this.reverse}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  className="column button is-info is-outlined"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>

              <ul>
                {goods.map(good => (
                  <li>
                    {good}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    );
  }
}
