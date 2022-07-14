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

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case SortType.alphabet:
        return g1.localeCompare(g2);
      case SortType.length:
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

export class App extends React.Component<{}, State> {
  state = {
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
        {!this.state.isStarted
        && (
          <button
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
          <div>
            <button
              type="button"
              onClick={() => {
                this.setState({ sortType: SortType.alphabet });
              }}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState({ sortType: SortType.length });
              }}
            >
              Sort by length
            </button>

            <button
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

            <ul className="Goods">
              {visibleGoods.map(good => (
                <li className="Goods__item" key={good}>
                  {good}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
