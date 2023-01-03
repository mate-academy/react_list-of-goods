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

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  switch (sortType) {
    case SortType.ALPHABET: visibleGoods.sort(); break;

    case SortType.LENGTH: visibleGoods.sort(
      (a, b) => a.length - b.length,
    ); break;

    default: break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
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
    const visibleGoods = getReorderedGoods(goodsFromServer, { ...this.state });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${sortType !== SortType.ALPHABET
              ? 'is-light'
              : ''}`}
            onClick={
              () => {
                this.setState({ sortType: SortType.ALPHABET });
              }
            }
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${sortType !== SortType.LENGTH
              ? 'is-light'
              : ''}`}
            onClick={
              () => {
                this.setState({ sortType: SortType.LENGTH });
              }
            }
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${!isReversed ? 'is-light' : ''}`}
            onClick={
              () => {
                this.setState((state) => ({ isReversed: !state.isReversed }));
              }
            }
          >
            Reverse
          </button>

          {(isReversed || sortType !== SortType.NONE) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={
                () => {
                  this.setState({
                    sortType: SortType.NONE,
                    isReversed: false,
                  });
                }
              }
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visibleGoods.map(good => {
            return (
              <li data-cy="Good" key={good}>{good}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
