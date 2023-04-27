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

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => {
      return a.length - b.length;
    });
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

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const goodsToRender = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div
          className="buttons"
          role="directory"
        >
          <button
            type="button"
            className={this.state.sortType === SortType.ALPHABET
              ? 'button is-info' : 'button is-info is-light'}
            onClick={() => {
              this.setState({ sortType: SortType.ALPHABET, isReversed: false });
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={this.state.sortType === SortType.LENGTH
              ? 'button is-success' : 'button is-success is-light'}
            onClick={() => {
              this.setState({ sortType: SortType.LENGTH, isReversed: false });
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={this.state.isReversed
              ? 'button is-warning' : 'button is-warning is-light'}
            onClick={() => {
              this.setState((state) => ({ isReversed: !state.isReversed }));
            }}
          >
            Reverse
          </button>

          {(this.state.sortType !== SortType.NONE || this.state.isReversed)
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
                  key={Math.random() + Math.random()}
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
