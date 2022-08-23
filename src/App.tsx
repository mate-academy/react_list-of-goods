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

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return a.localeCompare(b);

      case SortType.LENGTH:
        return a.length - b.length;

      default:
        return 0;
    }
  });

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  startBtn = () => {
    this.setState({ isStarted: true });
  };

  sortByLengthBtn = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  sortByAlphabetBtn = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  reverseBtn = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  resetBtn = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    const goods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
    );

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            className="Start button is-link"
            onClick={this.startBtn}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <div className="Container">
              <button
                type="button"
                className="btn button is-primary"
                onClick={this.sortByAlphabetBtn}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="btn button is-primary"
                onClick={this.sortByLengthBtn}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="btn button is-primary"
                onClick={this.reverseBtn}
              >
                Reverse
              </button>

              <button
                type="button"
                className="btn button is-primary"
                onClick={this.resetBtn}
              >
                Reset
              </button>
            </div>

            <ul className="Goods">
              {
                goods.map(good => (
                  <li key={good} className="Goods__item">{good}</li>
                ))
              }
            </ul>

          </>
        )}
      </div>
    );
  }
}
