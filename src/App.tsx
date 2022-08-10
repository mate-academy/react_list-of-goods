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
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.LENGTH:
      return visibleGoods.sort((g1, g2) => {
        return g1.length - g2.length;
      });

    case SortType.ALPABET:
      return visibleGoods.sort((g1, g2) => {
        return g1.localeCompare(g2);
      });

    default:
      return visibleGoods;
  }
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

    const goods = getReorderedGoods(goodsFromServer, sortType);

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="App">
        {isStarted === false
          ? (
            <button
              type="button"
              onClick={this.start}
            >
              Start
            </button>
          )
          : (
            <>
              <button
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.reverse}
              >
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
                  <li className="Goods__item">{good}</li>
                ))}
              </ul>
            </>
          )}
      </div>
    );
  }
}
