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

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
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

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  onClickSort = (sortType: SortType) => {
    this.setState({
      sortType,
    });
  };

  handleClickReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleClickReset = () => (
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    })
  );

  render(): React.ReactNode {
    const { isReversed, sortType } = this.state;
    const isResetVisible = sortType !== SortType.NONE || isReversed;
    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button',
              'is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
            onClick={() => this.onClickSort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button',
              'is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={() => this.onClickSort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn(
              'button',
              'is-warning',
              {
                'is-light': !isReversed,
              },
            )}
            onClick={this.handleClickReverse}
          >
            Reverse
          </button>

          { isResetVisible && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleClickReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {visibleGoods.map(good => (
              <li key={good} data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
