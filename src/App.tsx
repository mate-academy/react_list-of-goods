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
  NONE = 'None',
  ALPABET = 'Alpabet',
  LENGTH = 'length',
}

// Use this function in the render method
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

  startRenderingList = () => {
    this.setState({ isStarted: true });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortByAlpabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render(): React.ReactNode {
    const { isStarted, isReversed, sortType } = this.state;
    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
    );

    return (
      <div className="App">
        {!isStarted
          ? (
            <button
              type="button"
              onClick={this.startRenderingList}
              className="button is-success"
            >
              Start
            </button>
          ) : (
            <>
              <div className="buttons">
                <button
                  type="button"
                  onClick={this.sortByAlpabet}
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
                  className="button"
                >
                  Reset
                </button>
              </div>

              <ul className="Goods">
                {visibleGoods.map(good => (
                  <li className="Goods__item level-item" key={good}>
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
