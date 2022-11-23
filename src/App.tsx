import { Component } from 'react';
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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.LENGTH:
        return good1.length - good2.length;

      case SortType.ALPABET:
        return good1.localeCompare(good2);

      case SortType.NONE:
      default:
        return 0;
    }
  });

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

export class App extends Component<{}, State> {
  state: State = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  render() {
    const { isReversed, sortType } = this.state;
    const orderedGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPABET }
            )}
            onClick={() => {
              this.setState(() => ({
                sortType: SortType.ALPABET,
              }));
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={() => {
              this.setState(() => ({
                sortType: SortType.LENGTH,
              }));
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={() => {
              this.setState(state => ({
                isReversed: !state.isReversed,
              }));
            }}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed)
              && (
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={() => {
                    this.setState(() => ({
                      sortType: SortType.NONE,
                      isReversed: false,
                    }));
                  }}
                >
                  Reset
                </button>
              )}
        </div>

        <ul>
          {
            orderedGoods.map((good) => (
              <li key={good} data-cy="Good">{good}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}
