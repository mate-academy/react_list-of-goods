import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { Goods } from './components/Goods';

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

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((good1, good2) => (
        good1.localeCompare(good2)
      ));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((good1, good2) => (
        good1.length - good2.length
      ));
      break;

    default:
      break;
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

  handleGoodSort(sortBy: SortType) {
    this.setState({ sortType: sortBy });
  }

  handleGoodReverse() {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  }

  handleActionsReset() {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  }

  render() {
    const { sortType, isReversed } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          {sortType === SortType.NONE && (
            <>
              <button
                type="button"
                className="button is-info is-light"
                onClick={() => this.handleGoodSort(SortType.ALPHABET)}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="button is-success is-light"
                onClick={() => this.handleGoodSort(SortType.LENGTH)}
              >
                Sort by length
              </button>
            </>
          )}

          {sortType === SortType.ALPHABET && (
            <>
              <button
                type="button"
                className="button is-info"
                onClick={() => this.handleGoodSort(SortType.ALPHABET)}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="button is-success is-light"
                onClick={() => this.handleGoodSort(SortType.LENGTH)}
              >
                Sort by length
              </button>
            </>
          )}

          {sortType === SortType.LENGTH && (
            <>
              <button
                type="button"
                className="button is-info is-light"
                onClick={() => this.handleGoodSort(SortType.ALPHABET)}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="button is-success"
                onClick={() => this.handleGoodSort(SortType.LENGTH)}
              >
                Sort by length
              </button>
            </>
          )}

          {isReversed
            ? (
              <button
                type="button"
                className="button is-warning"
                onClick={() => this.handleGoodReverse()}
              >
                Reverse
              </button>
            )
            : (
              <button
                type="button"
                className="button is-warning is-light"
                onClick={() => this.handleGoodReverse()}
              >
                Reverse
              </button>
            )}

          {(sortType !== SortType.NONE || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.handleActionsReset()}
            >
              Reset
            </button>
          )}
        </div>

        <Goods goods={getReorderedGoods(goodsFromServer, this.state)} />
      </div>
    );
  }
}
