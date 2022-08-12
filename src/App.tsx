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
  state: Readonly<State> = {
    isStarted: false,
    sortType: SortType.NONE,
    isReversed: false,
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
          ? (
            <button
              type="button"
              onClick={() => {
                this.setState({ isStarted: true });
              }}
            >
              Start
            </button>
          )
          : (
            <>
              <button
                type="button"
                onClick={() => {
                  this.setState(
                    { sortType: SortType.ALPABET, isReversed: false },
                  );
                }}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={() => {
                  this.setState(
                    { sortType: SortType.LENGTH, isReversed: false },
                  );
                }}
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={() => {
                  this.setState(state => ({ isReversed: !state.isReversed }));
                }}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={() => {
                  this.setState(
                    { sortType: SortType.NONE, isReversed: false },
                  );
                }}
              >
                Reset
              </button>

              <ul className="Goods">
                {visibleGoods.map(good => (
                  <li key={good}>
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
