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
  // Not to mutate the original array
  const visibleGoods = [...goods];

  if (sortType !== SortType.NONE) {
    if (sortType === SortType.ALPABET) {
      visibleGoods.sort((g1, g2) => {
        return g1.localeCompare(g2);
      });
    }

    if (sortType === SortType.LENGTH) {
      visibleGoods.sort((g1, g2) => {
        return g1.length - g2.length;
      });
    }
  }

  if (isReversed) {
    return visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType
};

export class App extends Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  start = () => this.setState({ isStarted: true });

  reverse = () => this.setState(state => ({
    isReversed: !state.isReversed,
  }));

  alphabet = () => this.setState({ sortType: SortType.ALPABET });

  length = () => this.setState({ sortType: SortType.LENGTH });

  reset = () => this.setState({
    isReversed: false,
    sortType: SortType.NONE,
  });

  render() {
    const { sortType, isReversed } = this.state;
    const goods = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <div className="App">
        {!this.state.isStarted
          ? (
            <button
              type="button"
              onClick={this.start}
            >
              Start
            </button>
          )

          : (
            <>
              <button type="button" onClick={this.alphabet}>
                Sort alphabetically
              </button>

              <button type="button" onClick={this.length}>
                Sort by length
              </button>

              <button type="button" onClick={this.reverse}>
                Reverse
              </button>

              <button type="button" onClick={this.reset}>
                Reset
              </button>

              <ul className="Goods">
                {goods.map(good => {
                  return (
                    <li
                      className="Goods__item"
                      key={good}
                    >
                      {good}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
      </div>
    );
  }
}
