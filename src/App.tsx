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
  ALPHABET = 'ALPHABET',
  LENGTH = 'LENGTH',
}

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
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
      <li className="Goods__item" key={item}>{item}</li>
    ))
  );
}

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
      <div className="App">
        {!isStarted && (
          <button
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
              type="button"
              onClick={() => {
                this.setState({ sortType: SortType.ALPHABET });
              }}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState({ sortType: SortType.LENGTH });
              }}
            >
              Sort by length
            </button>

            <button
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
              type="button"
              onClick={() => {
                this.setState({ isReversed: false, sortType: SortType.NONE });
              }}
            >
              Reset
            </button>
          </>
        )}

        {isStarted && (
          <ul className="Goods">
            {getReorderedGoods(goodsFromServer, sortType, isReversed)}
          </ul>
        )}
      </div>
    );
  }
}
