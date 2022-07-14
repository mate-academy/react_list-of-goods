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
  none,
  alphabet,
  length,
}

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.alphabet:
      visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
      break;

    case SortType.length:
      visibleGoods.sort((good1, good2) => good1.length - good2.length);
      break;

    default:
      break;
  }

  if (isReversed) {
    return visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.none,
  };

  render() {
    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      this.state.sortType,
      this.state.isReversed,
    );

    return (
      <div className="App">
        <div className="App__wrap">
          {!this.state.isStarted
          && (
            <button
              className="btn btn--start"
              type="button"
              onClick={() => {
                this.setState(state => ({ isStarted: !state.isStarted }));
              }}
            >
              Start
            </button>
          )}

          {this.state.isStarted
          && (
            <div className="goods-list">
              <div className="buttons">
                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    this.setState({ sortType: SortType.alphabet });
                  }}
                >
                  Sort alphabetically
                </button>

                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    this.setState({ sortType: SortType.length });
                  }}
                >
                  Sort by length
                </button>

                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    this.setState(state => ({
                      isReversed: !state.isReversed,
                    }));
                  }}
                >
                  Reverse
                </button>

                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    this.setState({
                      isReversed: false,
                      sortType: SortType.none,
                    });
                  }}
                >
                  Reset
                </button>
              </div>

              <ul className="Goods">
                {visibleGoods.map(good => (
                  <li
                    key={good}
                    className="Goods__item"
                  >
                    {good}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}
