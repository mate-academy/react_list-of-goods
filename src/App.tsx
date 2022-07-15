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

export class App extends React.Component<{}, State> {
  state: State = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const { isStarted, sortType, isReversed } = this.state;
    const visibleGoods = [...goodsFromServer];

    switch (sortType) {
      case SortType.ALPABET:
        visibleGoods.sort((a, b) => a.localeCompare(b));
        break;

      case SortType.LENGTH:
        visibleGoods.sort((a, b) => a.length - b.length);
        break;

      default:
    }

    if (!isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {!isStarted && (
          <div className="App__container">
            <h1 className="App__title">
              Press Start to load goods.
            </h1>

            <button
              type="button"
              className="button"
              onClick={() => {
                this.setState({ isStarted: true });
              }}
            >
              Start
            </button>
          </div>

        )}

        {isStarted && (
          <div className="container">
            <div className="buttons">
              <button
                type="button"
                className="buttons__list"
                onClick={() => this.setState(
                  { sortType: SortType.ALPABET },
                )}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="buttons__list"
                onClick={() => this.setState(
                  { sortType: SortType.LENGTH },
                )}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="buttons__list"
                onClick={() => this.setState(
                  { isReversed: true },
                )}
              >
                Reverse
              </button>

              <button
                type="button"
                className="buttons__list"
                onClick={() => this.setState(
                  { isReversed: false },
                )}
              >
                Reset
              </button>
            </div>

            <div className="list-container">
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
            </div>
          </div>
        )}
      </div>
    );
  }
}
