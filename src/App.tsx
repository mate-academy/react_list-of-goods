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

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  // Not to mutate the original array
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
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

export class App extends React.Component<{}, State> {
  state = {
    isStarted: true,
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
    );

    return (
      <div className="App">
        {isStarted
          ? (
            <button
              type="button"
              onClick={
                () => this.setState(state => {
                  return { isStarted: !state.isStarted };
                })
              }
            >
              Start
            </button>
          )
          : (
            <>
              <button
                type="button"
                onClick={
                  () => this.setState({ sortType: SortType.ALPABET })
                }
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={
                  () => this.setState({ sortType: SortType.LENGTH })
                }
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={
                  () => this.setState(state => {
                    return { isReversed: !state.isReversed };
                  })
                }
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={
                  () => this.setState({
                    sortType: SortType.NONE,
                    isReversed: false,
                  })
                }
              >
                Reset
              </button>

              <ul className="Goods">
                {visibleGoods.map(good => (
                  <li
                    className="Goods__item"
                    key={good}
                  >
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
