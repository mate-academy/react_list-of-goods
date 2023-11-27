import React from 'react';
import cn from 'classnames';
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

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return good1.localeCompare(good2);

      case SortType.LENGTH:
        return good1.length - good2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
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
    const { sortType, isReversed } = this.state;

    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    const shouldReset = sortType !== SortType.NONE || isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            onClick={this.sortByAlphabet}
            className={cn('button is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
            className={cn('button is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.reverse}
            className={cn('button is-warning', {
              'is-light': !isReversed,
            })}
          >
            Reverse
          </button>

          {shouldReset && (
            <button
              onClick={this.reset}
              type="button"
              className="button is-danger is-light"
            >
              Reset
            </button>
          )}
        </div>
        {visibleGoods.map(good => (
          <li data-cy="Good" key={good}>
            {good}
          </li>
        ))}
      </div>
    );
  }
}
