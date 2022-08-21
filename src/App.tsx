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

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  if (sortType !== SortType.NONE) {
    visibleGoods.sort((g1, g2) => {
      switch (sortType) {
        case SortType.ALPABET:
          return g1.localeCompare(g2);
        case SortType.LENGTH:
          return g1.length - g2.length;
        default:
          return 0;
      }
    });
  }

  if (isReversed) {
    return visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  start = () => {
    this.setState({
      isStarted: true,
    });
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const { isReversed, isStarted, sortType } = this.state;

    const goods = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <div className="App">
        {isStarted === false
          ? (
            <button
              type="button"
              onClick={this.start}
              className="start-button button"
            >
              Start
            </button>
          )
          : (
            <>
              <div className="buttons">
                <button
                  type="button"
                  onClick={this.sortByAlphabet}
                  className="button"
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  onClick={this.sortByLength}
                  className="button"
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  onClick={this.reverse}
                  className="button"
                >
                  Reverse
                </button>

                <button
                  type="button"
                  onClick={this.reset}
                  className="reset-button button"
                >
                  Reset
                </button>
              </div>

              <ul className="Goods">
                {goods.map(good => (
                  <li className="Goods__item">{good}</li>
                ))}
              </ul>
            </>
          )}
      </div>
    );
  }
}
