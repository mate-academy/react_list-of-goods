import React from 'react';

import './App.scss';

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
  NONE = 'None',
  ALPHABET = 'Alphabet',
  LENGTH = 'Length',
}

function getReorderedGoods(
  goods: string[],
  sortBy: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((goodA, goodB) => {
    switch (sortBy) {
      case SortType.ALPHABET:
        return goodA.localeCompare(goodB);
      case SortType.LENGTH:
        return goodA.length - goodB.length;

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
  isReversed: boolean,
  sortBy: SortType,
  isStarted: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortBy: SortType.NONE,
    isStarted: true,
  };

  start = () => {
    this.setState({
      isStarted: false,
      sortBy: SortType.NONE,
    });
  };

  sortAlphabet = () => {
    this.setState({
      sortBy: SortType.ALPHABET,
    });
  };

  sortLength = () => {
    this.setState({
      sortBy: SortType.LENGTH,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: SortType.NONE,
    });
  };

  render() {
    const {
      isReversed,
      sortBy,
      isStarted,
    } = this.state;

    const sorted = getReorderedGoods(
      goodsFromServer,
      sortBy,
      isReversed,
    );

    return (
      <div className="App">
        <h1 className="App__title">
          List of goods
        </h1>
        {isStarted && (
          <button
            type="button"
            className="button"
            onClick={this.start}
          >
            Start
          </button>
        )}
        {!isStarted && (
          <>
            <ul className="App__list">
              {sorted.map(good => (
                <li
                  key={good}
                  className="App__item"
                >
                  {good}
                </li>
              ))}
            </ul>
            <span className="App__button">
              <button
                type="button"
                className="button"
                onClick={this.sortAlphabet}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                className="button"
                onClick={this.sortLength}
              >
                Sort by length
              </button>
              <button
                type="button"
                className="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
            </span>
            <button
              type="button"
              className="button"
              onClick={this.reset}
            >
              Reset
            </button>
          </>
        )}
      </div>
    );
  }
}
