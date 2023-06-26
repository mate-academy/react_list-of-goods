import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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

  visibleGoods.sort((f1, f2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return f1.localeCompare(f2);
      case SortType.LENGTH:
        return f1.length - f2.length;
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
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortBy = (sortType: SortType) => () => {
    this.setState({ sortType });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const goods = getReorderedGoods(goodsFromServer, { isReversed, sortType });
    const nonInitialState = sortType !== SortType.NONE || isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn('button is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={this.sortBy(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn('button is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={this.sortBy(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn('button is-warning', {
              'is-light': !isReversed,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {nonInitialState
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.reset}
              >
                Reset
              </button>
            )}
        </div>

        <ul>
          <ul>
            {goods.map((good) => (
              <li key={good} data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
