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

  if (sortType) {
    visibleGoods.sort((a, b) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return a.localeCompare(b);
        case SortType.LENGTH:
          return a.length - b.length;

        default:
          return 0;
      }
    });
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

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

  handleAlpha = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  handleLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  handleReverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  resetHandle = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render(): React.ReactNode {
    const { isReversed, sortType } = this.state;

    const visibleGoods
      = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
            onClick={this.handleAlpha}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={this.handleLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn(
              'button is-warning',
              {
                'is-light': !isReversed,
              },
            )}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {(isReversed || sortType !== SortType.NONE) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetHandle}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {visibleGoods.map(
              good => (
                <li
                  key={good}
                  data-cy="Good"
                >
                  {good}
                </li>
              ),
            )}
          </ul>
        </ul>
      </div>
    );
  }
}
