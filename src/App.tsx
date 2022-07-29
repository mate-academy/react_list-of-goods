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

  switch (sortType) {
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    case SortType.ALPABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    default:
  }

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
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;
    const goods = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <div className="App">
        <div className="header">
          {!isStarted && (
            <button
              className="button"
              type="button"
              onClick={() => (
                this.setState({ isStarted: true })
              )}
            >
              Start
            </button>
          )}
          {isStarted && (
            <>
              <button
                className="button"
                type="button"
                onClick={() => this.setState({ sortType: SortType.ALPABET })}
              >
                Sort alphabetically
              </button>

              <button
                className="button"
                type="button"
                onClick={() => this.setState({ sortType: SortType.LENGTH })}
              >
                Sort by length
              </button>

              <button
                className="button"
                type="button"
                onClick={() => this.setState(state => (
                  { isReversed: !state.isReversed }
                ))}
              >
                Reverse
              </button>

              <button
                className="button"
                type="button"
                onClick={() => this.setState({
                  isReversed: false,
                  sortType: SortType.NONE,
                })}
              >
                Reset
              </button>
            </>
          )}
        </div>

        <ul className="Goods">
          {isStarted && goods.map(good => (
            <li
              key={good}
              className="Goods__item"
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
