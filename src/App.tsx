import React from 'react';
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
  const visibleGoods = [...goods]
    .sort((previousGood, currentGood) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return previousGood.localeCompare(currentGood);

        case SortType.LENGTH:
          return previousGood.length - currentGood.length;

        case SortType.NONE:
          return 0;

        default:
          throw new Error(`Unknown value of sort type - ${sortType}`);
      }
    });

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
            onClick={() => this.setState(
              { sortType: SortType.ALPHABET },
            )}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={() => this.setState(
              { sortType: SortType.LENGTH },
            )}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              {
                'is-light': !isReversed,
              },
            )}
            onClick={() => this.setState(previousState => ({
              isReversed: !previousState.isReversed,
            }))}
          >
            Reverse
          </button>

          {
            (sortType !== SortType.NONE || isReversed)
              && (
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={() => this.setState(
                    {
                      isReversed: false,
                      sortType: SortType.NONE,
                    },
                  )}
                >
                  Reset
                </button>
              )
          }
        </div>

        <ul>
          {
            getReorderedGoods(goodsFromServer, this.state)
              .map(good => (
                <li data-cy="Good" key={good}>{good}</li>
              ))
          }
        </ul>
      </div>
    );
  }
}
