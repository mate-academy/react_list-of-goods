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
  ALPHABET,
  LENGTH,
}

type State = {
  isStarted: boolean,
  sortType: SortType,
  isReversed: boolean,
};

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.LENGTH:
        return good1.length - good2.length;

      case SortType.ALPHABET:
        return good1.localeCompare(good2);

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
    sortType: SortType.NONE,
    isReversed: false,
  };

  start = () => {
    this.setState({
      isStarted: false,
      sortType: SortType.NONE,
    });
  };

  sortByAlphabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
      isReversed: false,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
      isReversed: false,
    });
  };

  reverse = () => {
    if (this.state.isReversed) {
      this.setState({ isReversed: false })
    } else {
      this.setState({ isReversed: true });
    }
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
            className="button is-success is-rounded"
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
