/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from 'react';
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

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((firstGood, secondGood) => {
    switch (sortType) {
      case SortType.ALPABET:
        return firstGood.localeCompare(secondGood);

      case SortType.LENGTH:
        return firstGood.length - secondGood.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends Component<{}, State> {
  state = {
    isStarted: true,
    isReversed: false,
    sortType: SortType.NONE,
  };

  start = () => {
    this.setState({
      isStarted: false,
      sortType: SortType.NONE,
    });
  };

  sortByAlphabet = () => {
    this.setState({
      sortType: SortType.ALPABET,
    });
  };

  sortByLength = () => {
    this.setState({
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
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { isStarted, sortType, isReversed } = this.state;

    const goods = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <div className="App">

        {isStarted
        && (
          <button
            type="button"
            onClick={() => {
              this.start();
            }}
          >
            Start
          </button>
        )}

        {!isStarted
          && (
            <>
              <div className="buttons level">
                <button
                  type="button"
                  className="button is-info"
                  onClick={() => {
                    this.sortByAlphabet();
                  }}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button is-info"
                  onClick={() => {
                    this.sortByLength();
                  }}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="button is-info"
                  onClick={() => {
                    this.reverse();
                  }}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="button is-danger"
                  onClick={() => {
                    this.reset();
                  }}
                >
                  Reset
                </button>
              </div>

              <ul className="Goods">
                {goods.map(good => (
                  <li
                    key={good}
                    className="Goods__item"
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
