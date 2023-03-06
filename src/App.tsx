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

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case 1:
        return good1.localeCompare(good2);
      case 2:
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

export class App extends Component {
  state: ReorderOptions = {
    sortType: 0,
    isReversed: false,
  };

  sortByAlphabet = () => {
    this.setState({ sortType: 1 });
  };

  sortByLength = () => {
    this.setState({ sortType: 2 });
  };

  reverse = () => {
    this.setState((state : ReorderOptions) => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      sortType: 0,
      isReversed: false,
    });
  };

  render() {
    const reorderedGoods = getReorderedGoods(
      goodsFromServer, { ...this.state },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${this.state.sortType !== 1 && 'is-light'}`}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${this.state.sortType !== 2 && 'is-light'}`}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${!this.state.isReversed && 'is-light'}`}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(this.state.isReversed !== false || this.state.sortType !== 0) && (
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
          {reorderedGoods.map(
            good => <li key={good} data-cy="Good">{good}</li>,
          )}
        </ul>
      </div>
    );
  }
}
