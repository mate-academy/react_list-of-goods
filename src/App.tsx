import 'bulma/css/bulma.css';
import React from 'react';
import './App.scss';

export const goodsFromServer = [
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

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort();
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    default:
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export default class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlph = () => {
    this.setState(state => ({
      ...state,
      sortType: SortType.ALPHABET,
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      ...state,
      sortType: SortType.LENGTH,
    }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const isInitialState = !this.state.isReversed
      && this.state.sortType === SortType.NONE;

    const reorderedGoodsArray = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              this.state.sortType === SortType.ALPHABET
                ? 'button is-info'
                : 'button is-info is-light'
            }
            onClick={this.sortByAlph}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              this.state.sortType === SortType.LENGTH
                ? 'button is-success'
                : 'button is-success is-light'
            }
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              this.state.isReversed
                ? 'button is-warning'
                : 'button is-warning is-light'
            }
            onClick={this.reverse}
          >
            Reverse
          </button>

          {!isInitialState && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          ) }
        </div>

        <ul>
          <ul>
            {reorderedGoodsArray.map(good => (
              <li
                data-cy="Good"
                key={good}
              >
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
