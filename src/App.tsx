/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from 'react';
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

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case SortType.ALPABET:
        return a.localeCompare(b);

      case SortType.LENGTH:
        return a.length - b.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  show = () => {
    this.setState({ isStarted: true });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    const visibleGoods = getReorderedGoods(goodsFromServer,
      sortType, isReversed);

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            onClick={this.show}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <button type="button" onClick={this.sortAlphabetically}>
              Sort alphabetically
            </button>

            <button type="button" onClick={this.sortByLength}>
              Sort by length
            </button>

            <button type="button" onClick={this.reverse}>
              Reverse
            </button>

            <button type="button" onClick={this.reset}>
              Reset
            </button>

            <ul className="Goods">
              {visibleGoods.map(good => (
                <li key={good} className="Goods__item">
                  {good}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
