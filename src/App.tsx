import React from 'react';
import 'bulma/css/bulma.css';
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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.NONE:
      break;

    case SortType.ALPHABET:
      visibleGoods.sort((goodA, goodB) => {
        return goodA.localeCompare(goodB);
      });
      break;

    case SortType.LENGTH:
      visibleGoods.sort((goodA, goodB) => {
        return goodA.length - goodB.length;
      });
      break;

    default:
      throw Error('Unknown sortType');
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  sortType: SortType,
  isReversed: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });
    const startOrder = sortType === SortType.NONE && !isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={this.sortAlphabetically}
            type="button"
            className={`button is-info ${sortType === SortType.ALPHABET
              ? ''
              : 'is-light'
            }`}
          >
            Sort alphabetically
          </button>

          <button
            onClick={this.sortByLength}
            type="button"
            className={`button is-success ${sortType === SortType.LENGTH
              ? ''
              : 'is-light'
            }`}
          >
            Sort by length
          </button>

          <button
            onClick={this.reverse}
            type="button"
            className={`button is-warning ${isReversed
              ? ''
              : ' is-light'
            }`}
          >
            Reverse
          </button>
          {!startOrder && (
            <button
              onClick={this.reset}
              type="button"
              className="button is-danger is-light"
            >
              Reset
            </button>
          )}
        </div>
        <ul>
          {goods.map(good => (
            <li
              key={good}
              data-cy="Good"
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
