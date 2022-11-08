import React from 'react';
import classNames from 'classnames';
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
  ALPABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPABET:
      visibleGoods.sort((good1, good2) => (
        good1.localeCompare(good2)
      ));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((good1, good2) => (
        good1.length - good2.length
      ));
      break;

    default:
      break;
  }

  return isReversed ? visibleGoods.reverse() : visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleReset = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  handleAlphabeticSort = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  handleLengthSort = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              {
                'is-light': this.state.sortType !== SortType.ALPABET,
              },
            )}
            onClick={() => (
              this.handleAlphabeticSort()
            )}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              {
                'is-light': this.state.sortType !== SortType.LENGTH,
              },
            )}
            onClick={() => (
              this.handleLengthSort()
            )}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              {
                'is-light': !this.state.isReversed,
              },
            )}
            onClick={() => (
              this.handleReverse()
            )}
          >
            Reverse
          </button>

          {
            (
              this.state.sortType !== SortType.NONE
              || this.state.isReversed
            )
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={() => (
                  this.handleReset()
                )}
              >
                Reset
              </button>
            )
          }
        </div>

        <ul>
          <ul>
            {
              getReorderedGoods(goodsFromServer, this.state).map(good => (
                <li data-cy="Good" key={good}>
                  {good}
                </li>
              ))
            }
          </ul>
        </ul>
      </div>
    );
  }
}
