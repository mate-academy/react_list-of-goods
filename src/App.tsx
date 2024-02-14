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

  visibleGoods.sort((good1: string, good2: string): number => {
    if (sortType === SortType.ALPHABET) {
      return good1.localeCompare(good2);
    }

    if (sortType === SortType.LENGTH) {
      return good1.length - good2.length;
    }

    if (sortType === SortType.NONE) {
      return 0;
    }

    return 0;
  });
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
};

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  }

  sort = (sortType: SortType) => () => {
    this.setState({ sortType });
  };

reversed = () => () => {
  this.setState(prevState => ({ isReversed: !prevState.isReversed }));
}

  reset = (sortType: SortType) => () => {
    this.setState({ sortType, isReversed: false });
  }

  render() {
    const goodies = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={this.state.sortType === SortType.ALPHABET
              ? 'button is-info'
              : 'button is-info is-light'}
            onClick={this.sort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className={this.state.sortType === SortType.LENGTH
              ? 'button is-success'
              : 'button is-success is-light'}
            onClick={this.sort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={this.state.isReversed
              ? 'button is-warning'
              : 'button is-warning is-light'}
            onClick={this.reversed()}
          >
            Reverse
          </button>
          {!this.state.isReversed && this.state.sortType === SortType.NONE
            ? ''
            : (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.reset(SortType.NONE)}
              >
                Reset
              </button>
            )}

        </div>

        <ul>
          <ul>
            {goodies.map((good) => {
              return <li data-cy="Good" key={good}>{good}</li>;
            })}
          </ul>
        </ul>
      </div>
    );
  }
}
