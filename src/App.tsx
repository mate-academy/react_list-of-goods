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

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  // Not to mutate the original array
  let visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => {
      return a.localeCompare(b);
    });
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => (a.length - b.length));
  }

  if (isReversed === true) {
    visibleGoods = visibleGoods.reverse();
  }

  return (
    visibleGoods.map(item => (
      <li className="Goods__item level-item">
        <span className="subtitle">
          {item}
        </span>
      </li>
    ))
  );
}

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly <State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const { isStarted, sortType, isReversed } = this.state;

    return (
      <div className="App level is-primary">
        <div className="container">
          {!isStarted && (
            <button
              className="button is-success"
              type="button"
              onClick={() => {
                this.setState({ isStarted: true });
              }}
            >
              Start
            </button>
          )}

          {isStarted && (
            <>
              <button
                className="button is-success"
                type="button"
                onClick={() => {
                  this.setState({ sortType: SortType.ALPHABET });
                }}
              >
                Sort alphabetically
              </button>

              <button
                className="button is-info"
                type="button"
                onClick={() => {
                  this.setState({ sortType: SortType.LENGTH });
                }}
              >
                Sort by length
              </button>

              <button
                className="button is-warning"
                type="button"
                onClick={() => {
                  this.setState((state) => ({
                    isReversed: !state.isReversed,
                  }));
                }}
              >
                Reverse
              </button>

              <button
                className="button is-danger"
                type="button"
                onClick={() => {
                  this.setState({ isReversed: false, sortType: SortType.NONE });
                }}
              >
                Reset
              </button>
            </>
          )}
        </div>

        {isStarted && (
          <ul className="Goods level">
            {getReorderedGoods(goodsFromServer, sortType, isReversed)}
          </ul>
        )}
      </div>
    );
  }
}
