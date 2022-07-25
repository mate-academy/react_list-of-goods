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
  let visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => (a.length - b.length));
      break;

    default:
      break;
  }

  if (isReversed) {
    visibleGoods = visibleGoods.reverse();
  }

  return (
    visibleGoods.map(item => (
      <li className="Goods__item" key={item}>{item}</li>
    ))
  );
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
                  {getReorderedGoods(goodsFromServer, sortType, isReversed)}
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
