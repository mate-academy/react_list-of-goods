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
  NONE = 'NONE',
  ALPABET = 'ALPABET',
  LENGTH = 'LENGTH',
}

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPABET:
      visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
      break;

    case SortType.LENGTH:
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
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      this.state.sortType,
      this.state.isReversed,
    );

    return (
      <div className="App">
        {!this.state.isStarted
        && (
          <button
            className="App__button"
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
          <>
            <div className="App__buttons">
              <button
                className="App__button"
                type="button"
                onClick={() => {
                  this.setState({ sortType: SortType.ALPABET });
                }}
              >
                Sort alphabetically
              </button>

              <button
                className="App__button"
                type="button"
                onClick={() => {
                  this.setState({ sortType: SortType.LENGTH });
                }}
              >
                Sort by length
              </button>

              <button
                className="App__button"
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
                className="App__button App__button--reset"
                type="button"
                onClick={() => {
                  this.setState({
                    isReversed: false,
                    sortType: SortType.NONE,
                  });
                }}
              >
                Reset
              </button>
            </div>

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
