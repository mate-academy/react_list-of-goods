import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
// import { stubFalse } from 'cypress/types/lodash';
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
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => (
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    })
  );

  sortBy = (order:SortType) => (
    this.setState({
      sortType: order,
    })
  );

  render() {
    const { isReversed, sortType } = this.state;

    const isResetVisible = isReversed || sortType !== SortType.NONE;

    const sortedGoods = getReorderedGoods(
      goodsFromServer,
      this.state,
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button is-info',
              sortType !== SortType.ALPHABET && 'is-light',
            )}
            onClick={() => this.sortBy(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button is-success',
              sortType !== SortType.LENGTH && 'is-light',
            )}
            onClick={() => this.sortBy(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn(
              'button is-warning',
              !isReversed && 'is-light',
            )}
            onClick={() => this.reverse()}
          >
            Reverse
          </button>

          {isResetVisible
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={() => this.reset()}
              >
                Reset
              </button>
            )}
        </div>

        <ul>
          {sortedGoods.map((item => (
            <li
              data-cy="Good"
              key={item}
            >
              {item}
            </li>
          )))}
        </ul>
      </div>
    );
  }
}
