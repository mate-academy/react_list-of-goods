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
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  // ...
  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return g1.localeCompare(g2);

      case SortType.LENGTH:
        return g1.length - g2.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    return visibleGoods.reverse();
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

  start = () => {
    this.setState({
      isStarted: true,
    });
  };

  sortByAlphabet = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.ALPHABET,
    });
  };

  sortByLength = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.LENGTH,
    });
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
    const goods = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            onClick={() => {
              this.start();
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
                this.sortByAlphabet();
              }}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={() => {
                this.sortByLength();
              }}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={() => {
                this.reverse();
              }}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={() => {
                this.reset();
              }}
            >
              Reset
            </button>

            <ul className="Goods">
              {goods.map(good => (
                <li className="Goods__item">
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
