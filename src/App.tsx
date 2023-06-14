import React from 'react';
import 'bulma/css/bulma.css';
import cn from 'classnames';
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
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  visibleGoods.sort((goodA, goodB) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return goodA.localeCompare(goodB);

      case SortType.LENGTH:
        return goodA.length - goodB.length;

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
// type State = {
//   isReversed: boolean,
//   sortType: SortType,
// };

export class App extends React.Component<{}, ReorderOptions> {
  state: Readonly<ReorderOptions> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  clickOnSort = (sortType: SortType) => {
    switch (sortType) {
      case SortType.ALPHABET:
        this.setState({
          sortType: SortType.ALPHABET,
        });

        break;

      case SortType.LENGTH:
        this.setState({
          sortType: SortType.LENGTH,
        });

        break;

      case SortType.NONE:
        this.setState({
          sortType: SortType.NONE,
        });

        break;

      default:
        break;
    }
  };

  clickOnReverse = () => (
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }))
  );

  clickOnReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
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
            onClick={() => this.clickOnSort(SortType.ALPHABET)}
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
            onClick={() => this.clickOnSort(SortType.LENGTH)}
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
            onClick={this.clickOnReverse}
          >
            Reverse
          </button>

          {isResetVisible && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.clickOnReset}
            >
              Reset
            </button>
          )}

        </div>
        <ul>
          {visibleGoods.map(good => {
            return (
              <li key={good} data-cy="Good">{good}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
