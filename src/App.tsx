import { Component } from 'react';
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

  switch (true) {
    case (sortType === SortType.ALPHABET):
      return visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
    case (sortType === SortType.LENGTH):
      return visibleGoods.sort((a, b) => {
        return a.length - b.length;
      });
    case isReversed:
      return visibleGoods.reverse();
    default:
      return visibleGoods;
  }
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sort = (
    type: SortType = this.state.sortType,
    reversed: boolean = this.state.isReversed,
  ) => {
    this.setState({
      isReversed: reversed,
      sortType: type,
    });
  };

  render() {
    const goodsToRender = getReorderedGoods(goodsFromServer, this.state);
    const { sortType, isReversed } = this.state;

    return (
      <div className="section content">
        <div
          className="buttons"
          role="directory"
        >
          <button
            type="button"
            className={sortType === SortType.ALPHABET
              ? 'button is-info' : 'button is-info is-light'}
            onClick={() => {
              this.sort(SortType.ALPHABET, false);
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={sortType === SortType.LENGTH
              ? 'button is-success' : 'button is-success is-light'}
            onClick={() => {
              this.sort(SortType.LENGTH, false);
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={isReversed
              ? 'button is-warning' : 'button is-warning is-light'}
            onClick={() => {
              this.sort(sortType, !isReversed);
            }}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed)
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => {
                this.setState({ isReversed: false, sortType: SortType.NONE });
              }}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {goodsToRender.map(good => {
              return (
                <li
                  data-cy="Good"
                  key={good}
                >
                  {good}
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  }
}
