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
  ALPABET,
  LENGTH,
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    sortType: SortType.NONE,
    isReversed: false,
  };

  start = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  sortByAlphabet = () => {
    this.setState(({
      sortType: SortType.ALPABET,
    }));
  };

  sortByLength = () => {
    this.setState(({
      sortType: SortType.LENGTH,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState(({
      sortType: SortType.NONE,
      isReversed: false,
    }));
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;
    const visibleGoods = [...goodsFromServer];

    visibleGoods.sort((a: string, b: string): number => {
      switch (sortType) {
        case SortType.ALPABET: return a.localeCompare(b);
        case SortType.LENGTH: return a.length - b.length;
        default: return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {!isStarted
        && (
          <button
            type="button"
            className="button is-primary"
            onClick={() => {
              this.setState({ isStarted: true });
            }}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <button
              type="button"
              className="button is-primary"
              onClick={this.sortByAlphabet}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className="button is-primary"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className="button is-primary"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              className="button is-primary"
              onClick={this.reset}
            >
              Reset
            </button>

            <ul className="list">
              {visibleGoods.map(good => (
                <li
                  key={good}
                  className="list__item"
                >
                  <span>{good}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
