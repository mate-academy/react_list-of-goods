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
  const visibleGoods = [...goods];

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return g1.localeCompare(g2);

      case SortType.LENGTH:
        return g1.length - g2.length;

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

  render() {
    const {
      isReversed,
      sortType,
    } = this.state;

    const goods = getReorderedGoods(goodsFromServer, this.state);
    const isSortedDescending = sortType === SortType.NONE && !isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button', 'is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={() => {
              this.setState({ sortType: SortType.ALPHABET });
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', 'is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={() => {
              this.setState({ sortType: SortType.LENGTH });
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button', 'is-warning', {
              'is-light': isReversed === false,
            })}
            onClick={() => {
              this.setState({ isReversed: !isReversed });
            }}
          >
            Reverse
          </button>

          {!isSortedDescending && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => {
                this.setState({
                  isReversed: false,
                  sortType: SortType.NONE,
                });
              }}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {goods.map(good => {
            return <li key={good} data-cy="Good">{good}</li>;
          })}
        </ul>
      </div>
    );
  }
}
