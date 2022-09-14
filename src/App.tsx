import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((g1, g2) => (
      g1.length - g2.length
    ));
  }

  if (sortType === SortType.ALPABET || sortType === SortType.NONE) {
    visibleGoods.sort((g1, g2) => (
      g1.localeCompare(g2)
    ));
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
  resetBTN: boolean,
};

export class App extends Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.ALPABET,
    resetBTN: false,
  };

  render() {
    const { isReversed, sortType, resetBTN } = this.state;
    const myGoods = getReorderedGoods(goodsFromServer,
      { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              { 'is-light': sortType !== SortType.ALPABET },
            )}
            onClick={() => this.setState({
              sortType: SortType.ALPABET,
              resetBTN: true,
            })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={() => this.setState({
              sortType: SortType.LENGTH,
              resetBTN: true,
            })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              { 'is-light': isReversed !== true },
            )}
            onClick={() => {
              this.setState(() => {
                if (isReversed) {
                  return { isReversed: false, resetBTN: true };
                }

                return { isReversed: true, resetBTN: true };
              });
            }}
          >
            Reverse
          </button>

          {resetBTN && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.setState({
                resetBTN: false,
                isReversed: false,
                sortType: SortType.ALPABET,
              })}
            >
              Reset
            </button>
          )}

        </div>

        <ul>
          <ul>
            {myGoods.map(good => (
              <li key={good} data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
