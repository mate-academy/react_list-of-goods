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

  start = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  reversed = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  render() {
    const { isStarted, sortType, isReversed } = this.state;
    const goods = [...goodsFromServer];

    goods.sort((g1, g2) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return g1.localeCompare(g2);

        case SortType.LENGTH:
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="App">
        {
          isStarted
            ? (
              <>
                <button type="button" onClick={this.sortAlphabetically}>
                  Sort alphabetically
                </button>

                <button type="button" onClick={this.sortByLength}>
                  Sort by length
                </button>

                <button type="button" onClick={this.reversed}>
                  Reverse
                </button>

                <button
                  type="button"
                  onClick={this.reset}
                >
                  Reset
                </button>

                <ul className="Goods">
                  {goods.map(good => (
                    <li className="Goods__item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </>
            )
            : (
              <button
                type="button"
                onClick={this.start}
              >
                Start
              </button>
            )
        }
      </div>
    );
  }
}
