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

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case SortType.ALPABET:
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

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
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

  sortAlpabet = () => {
    this.setState({
      sortType: SortType.ALPABET,
    });
  };

  sortLength = () => {
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
      <div className="App  has-text-centered">

        {isStarted
        && (
          <button
            type="button"
            className="button is-success "
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
              <div className="button  level-item ">
                <button
                  type="button"
                  className="button is-link"
                  onClick={() => {
                    this.sortAlpabet();
                  }}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button is-success"
                  onClick={() => {
                    this.sortLength();
                  }}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="button is-warning"
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
                    className="Goods__item has-text-centered "
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
