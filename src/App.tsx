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

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return good1.localeCompare(good2);
      case SortType.LENGTH:
        return good1.length - good2.length;
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

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortBy = (sortType: SortType) => {
    this.setState({
      sortType,
    });
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const reorderOptions: ReorderOptions = { isReversed, sortType };

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              sortType === SortType.ALPHABET
                ? 'button is-info'
                : 'button is-info is-light'
            }
            onClick={() => {
              this.sortBy(SortType.ALPHABET);
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              sortType === SortType.LENGTH
                ? 'button is-success'
                : 'button is-success is-light'
            }
            onClick={() => {
              this.sortBy(SortType.LENGTH);
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              isReversed
                ? 'button is-warning'
                : 'button is-warning is-light'
            }
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed)
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}

        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, reorderOptions).map(good => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
