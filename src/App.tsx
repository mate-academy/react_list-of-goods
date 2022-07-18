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
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state: State = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortBy = (sortBy: SortType) => {
    this.setState({ sortType: sortBy });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  sort = (arr: string[]) => {
    arr.sort((item1: string, item2: string) => {
      switch (this.state.sortType) {
        case SortType.ALPHABET:
          return item1.localeCompare(item2);
        case SortType.LENGTH:
          return item1.length - item2.length;
        default:
          return 0;
      }
    });
  };

  render() {
    const visibleGoods = [...goodsFromServer];

    this.sort(visibleGoods);

    if (this.state.isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {this.state.isStarted ? (
          <>
            <button
              type="button"
              onClick={() => this.sortBy(SortType.ALPHABET)}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={() => this.sortBy(SortType.LENGTH)}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>

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
        ) : (
          <button
            type="button"
            onClick={() => {
              this.setState({
                isStarted: true,
              });
            }}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}
