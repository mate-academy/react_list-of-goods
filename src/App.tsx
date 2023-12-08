import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer: string[] = [
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

interface ReorderOptions {
  sortType: SortType;
  isReversed: boolean;
}

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((good1: string, good2: string): number => {
    if (sortType === SortType.ALPHABET) {
      return good1.localeCompare(good2);
    }

    if (sortType === SortType.LENGTH) {
      return good1.length - good2.length;
    }

    return 0;
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean;
  sortType: SortType;
};

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sort = (sortType: SortType) => () => {
    this.setState({ sortType });
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const goods: string[] = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${
              this.state.sortType !== SortType.ALPHABET ? 'is-light' : ''
            }`}
            onClick={this.sort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${
              this.state.sortType !== SortType.LENGTH ? 'is-light' : ''
            }`}
            onClick={this.sort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${
              !this.state.isReversed ? 'is-light' : ''
            }`}
            onClick={this.reverse}
          >
            Reverse
          </button>
          {(this.state.sortType !== SortType.NONE || this.state.isReversed) && (
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
          {goods.map((good) => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
