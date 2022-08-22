/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from 'react';
import './App.css';
import { nanoid } from 'nanoid';

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

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    default:
      break;
  }

  return isReversed ? visibleGoods.reverse() : visibleGoods;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const newGoods = getReorderedGoods(
      goodsFromServer,
      this.state.sortType,
      this.state.isReversed,
    );

    return (
      <div className="App panel">
        {!this.state.isStarted && (
          <button
            type="button"
            className="button is-success"
            onClick={() => {
              this.setState({ isStarted: true });
            }}
          >
            Start
          </button>
        )}
        {this.state.isStarted && (
          <>
            <button
              type="button"
              className={`button ${this.state.sortType === SortType.ALPABET ? 'is-success' : 'is-danger'}`}
              onClick={() => {
                this.setState({ sortType: SortType.ALPABET });
              }}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className={`button ${this.state.sortType === SortType.LENGTH ? 'is-success' : 'is-danger'}`}
              onClick={() => {
                this.setState({ sortType: SortType.LENGTH });
              }}
            >
              Sort by length
            </button>

            <button
              type="button"
              className={`button ${this.state.isReversed ? 'is-success' : 'is-danger'}`}
              onClick={() => {
                this.setState((prevState) => ({
                  isReversed: !prevState.isReversed,
                }));
              }}
            >
              Reverse
            </button>

            <button
              type="button"
              className={`button ${this.state.sortType === SortType.NONE
                && !this.state.isReversed ? 'is-success' : 'is-danger'}`}
              onClick={() => {
                this.setState({ sortType: SortType.NONE, isReversed: false });
              }}
            >
              Reset
            </button>

            <ul className="Goods">
              {newGoods.map(good => (
                <li className="Goods__items" key={nanoid()}>{good}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
