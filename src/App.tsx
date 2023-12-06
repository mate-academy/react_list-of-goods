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
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state

export class App extends React.Component {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortClick = (sortType: SortType) => {
    this.setState({ sortType });
  }

  handleReverseClick = () => {
    const { isReversed } = this.state;

    if (isReversed === true) {
      this.setState({ isReversed: false });
    } else {
      this.setState({ isReversed: true });
    }
  }

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={this.state.sortType === SortType.ALPHABET
              ? 'button is-info' : 'button is-info is-light'}
            onClick={() => this.handleSortClick(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={this.state.sortType === SortType.LENGTH
              ? 'button is-success' : 'button is-success is-light'}
            onClick={() => this.handleSortClick(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={this.state.isReversed === true
              ? 'button is-warning' : 'button is-warning is-light'}
            onClick={() => this.handleReverseClick()}
          >
            Reverse
          </button>

          {!(this.state.sortType === SortType.NONE
              && this.state.isReversed === false)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={() => this
                  .setState({ isReversed: false, sortType: SortType.NONE })}
              >
                Reset
              </button>
            )}
        </div>

        <ul>
          <ul>
            {
              [...goodsFromServer].sort((good1, good2) => {
                if (this.state.sortType === SortType.ALPHABET
                  && this.state.isReversed === false) {
                  return good1.localeCompare(good2);
                }

                if (this.state.sortType === SortType.ALPHABET
                  && this.state.isReversed === true) {
                  return good2.localeCompare(good1);
                }

                if (this.state.sortType === SortType.LENGTH
                  && this.state.isReversed === false) {
                  return good1.length - good2.length
                    + 0.1 * (good1.localeCompare(good2) > 0 ? 1 : -1);
                }

                if (this.state.sortType === SortType.LENGTH
                  && this.state.isReversed === true) {
                  return good2.length - good1.length
                  + 0.1 * (good2.localeCompare(good1) > 0 ? 1 : -1);
                }

                if (this.state.sortType === SortType.NONE
                  && this.state.isReversed === false) {
                  return goodsFromServer.indexOf(good1)
                  - goodsFromServer.indexOf(good2);
                }

                return goodsFromServer.indexOf(good2)
                - goodsFromServer.indexOf(good1);
              }).map((good) => (
                <li data-cy="Good">{good}</li>
              ))
            }
          </ul>
        </ul>
      </div>
    );
  }
}
