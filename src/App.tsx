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
  ALPABET = 'Alphabet',
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
              className="btn btn-success"
            >
              Start
            </button>
          ) : (
            <>
              <div className="buttons">
                <button
                  type="button"
                  onClick={this.sortByAlpabet}
                  className="btn btn-outline-success"
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  onClick={this.sortByLength}
                  className="btn btn-outline-success"
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  onClick={this.reverse}
                  className="btn btn-outline-success"
                >
                  Reverse
                </button>

                <button
                  type="button"
                  onClick={this.reset}
                  className="btn btn-outline-success"
                >
                  Reset
                </button>
              </div>

              <ul className="list-group">
                {visibleGoods.map(good => (
                  <li className="list-item list-group-item" key={good}>
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
