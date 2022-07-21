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

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPABET:
        return good1.localeCompare(good2);

      case SortType.LENGTH:
        return good1.length - good2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  changeState = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  changeReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  sortType = (sortType: SortType) => {
    this.setState({ sortType });
  };

  render() {
    const { isStarted, sortType, isReversed } = this.state;

    return (
      <div className="App">
        {
          isStarted
            ? (
              <>
                <button
                  type="button"
                  onClick={() => (
                    this.sortType(SortType.ALPABET))}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  onClick={() => (
                    this.sortType(SortType.LENGTH))}
                >
                  Sort by length
                </button>

                <button type="button" onClick={this.changeReverse}>
                  Reverse
                </button>

                <button
                  type="button"
                  onClick={this.reset}
                >
                  Reset
                </button>

                <ul className="Goods">
                  {getReorderedGoods(goodsFromServer, sortType, isReversed)
                    .map(good => (
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
                onClick={this.changeState}
              >
                Start
              </button>
            )
        }
      </div>
    );
  }
}
