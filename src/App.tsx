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
  sortType: SortType;
  isReversed: boolean;
};

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  let visibleGoods = [...goods];

  // Sort and reverse goods if needed
  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  } else if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  } else if (sortType === SortType.NONE && isReversed === false) {
    return visibleGoods;
  }

  if (isReversed) {
    visibleGoods = [...visibleGoods].reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed, visibleGoods);

  return visibleGoods;
}

// DON'T save goods to the state
// type State = {
//   isReversed: boolean,
//   sortType: SortType,
// };

export class App extends React.Component<{}, ReorderOptions> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const { isReversed, sortType } = this.state;
    const goodsList = getReorderedGoods(goodsFromServer, {
      isReversed,
      sortType,
    });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${sortType === SortType.ALPHABET ? '' : 'is-light'}`}
            onClick={() =>
              this.setState({
                sortType: SortType.ALPHABET,
              })
            }
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-info ${sortType === SortType.LENGTH ? '' : 'is-light'}`}
            onClick={() =>
              this.setState({
                sortType: SortType.LENGTH,
              })
            }
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${isReversed ? '' : 'is-light'}`}
            onClick={() =>
              this.setState({
                isReversed: !isReversed,
              })
            }
          >
            Reverse
          </button>
          {sortType === SortType.NONE && isReversed === false ? (
            ''
          ) : (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() =>
                this.setState({
                  isReversed: false,
                  sortType: SortType.NONE,
                })
              }
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {goodsList.map(good => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
