/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';

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

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  // Not to mutate the original array
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  // ...
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

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isStarted: false,
    sortType: SortType.NONE,
    isReversed: false,
  };

  changeStart = () => {
    this.setState({ isStarted: true });
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortByNone = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;
    const goods = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <div className="App is-grey-lighter">
        <div className="App__container buttons level">
          {!isStarted && (
            <button
              type="button"
              className="button are-medium is-primary level-item"
              onClick={this.changeStart}
            >
              Start
            </button>
          )}
        </div>

        {isStarted && (
          <>
            <div className="App__container buttons">
              <button
                className="button is-outlined is-success"
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="button is-outlined is-success"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="button is-outlined is-success"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                className="button is-outlined is-warning"
                onClick={this.sortByNone}
              >
                Reset
              </button>
            </div>

            <div className="list">
              <ul className="Goods">
                {goods.map(good => (
                  <li className="Goods__item" key={good}>
                    {good}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    );
  }
}
