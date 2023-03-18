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

interface ReorderOptions {
  sortType: SortType;
  isReversed: boolean;
}

enum SortType {
  ALPHABET,
  LENGTH,
  NONE,
}

type SortFunction = (a: string, b: string) => number;

const getSortFunction = (sortType: SortType): SortFunction => {
  switch (sortType) {
    case SortType.ALPHABET:
      return (a, b) => a.localeCompare(b);
    case SortType.LENGTH:
      return (a, b) => a.length - b.length;
    case SortType.NONE:
    default:
      return () => 0;
  }
};

export function getReorderedGoods(
  goods: string[], reorderOptions: ReorderOptions,
): string[] {
  const sortFunction = getSortFunction(reorderOptions.sortType);
  const visibleGoods = [...goods].sort(sortFunction);

  if (reorderOptions.isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends Component {
  state: ReorderOptions = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState((state: ReorderOptions) => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const reorderedGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${this.state.sortType !== SortType.ALPHABET ? 'is-light' : ''}`}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className={`button is-success ${this.state.sortType !== SortType.LENGTH ? 'is-light' : ''}`}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          <button
            type="button"
            className={`button is-warning ${this.state.isReversed ?? false ? 'is-light' : ''}`}
            onClick={this.reverse}
          >
            Reverse
          </button>
          {this.state.isReversed && (
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
