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

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case 1:
        return a.localeCompare(b);
      case 2:
        return a.length - b.length;
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

export class App extends React.Component <{}, State> {
  state: Readonly<State> = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  render() {
    const visibleGoods1 = getReorderedGoods(goodsFromServer, this.state);
    const { sortType, isReversed } = this.state;
    const booleanReset = sortType !== SortType.NONE || isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              classNames(
                'button is-info',
                { 'is-light': sortType !== SortType.ALPHABET },
              )
            }
            onClick={() => {
              this.setState({ sortType: SortType.ALPHABET });
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              classNames(
                'button is-info',
                { 'is-light': sortType !== SortType.LENGTH },
              )
            }
            onClick={() => {
              this.setState({ sortType: SortType.LENGTH });
            }}

          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              classNames(
                'button is-info',
                { 'is-light': isReversed === false },
              )
            }
            onClick={() => {
              this.setState({ isReversed: !isReversed });
            }}
          >
            Reverse
          </button>

          {booleanReset && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => {
                this.setState({ sortType: SortType.NONE, isReversed: false });
              }}
            >
              Reset
            </button>
          )
          }
        </div>

        <ul>
          <ul>
            {visibleGoods1.map(good => (
              <li data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
