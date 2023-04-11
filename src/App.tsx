/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
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

  switch (sortType) {
    case SortType.ALPHABET:
    case SortType.LENGTH:
      visibleGoods.sort((g1, g2) => {
        if (sortType === SortType.ALPHABET) {
          return g1.localeCompare(g2);
        }

        return g1.length - g2.length;
      });
      break;

    case SortType.NONE:
      break;

    default:
      return goods;
  }

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
    const { isReversed, sortType } = this.state;
    const goods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${sortType === SortType.ALPHABET ? '' : 'is-light'}`}
            onClick={() => {
              this.setState({ sortType: SortType.ALPHABET });
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${sortType === SortType.LENGTH ? '' : 'is-light'}`}
            onClick={() => {
              this.setState({ sortType: SortType.LENGTH });
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${isReversed ? '' : 'is-light'}`}
            onClick={() => {
              this.setState({ isReversed: !isReversed });
            }}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                hidden={sortType === SortType.NONE && !isReversed}
                onClick={() => {
                  this.setState({ sortType: SortType.NONE, isReversed: false });
                }}
              >
                Reset
              </button>
            )}
        </div>

        <ul>
          <ul>
            {goods.map(item => (
              <li
                key={item}
                data-cy="Good"
              >
                {item}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
