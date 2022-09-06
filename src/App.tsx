import { Component, ReactNode } from 'react';
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
  ALPABET,
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

  switch (sortType) {
    case SortType.LENGTH:
      visibleGoods.sort((good1, good2) => good1.length - good2.length);
      break;

    case SortType.ALPABET:
      visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
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
  sortType: SortType,
  isReversed: boolean,
};

export class App extends Component<{}, State> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortAlphabet = () => this.setState(() => ({
    sortType: SortType.ALPABET,
  }));

  sortByLength = () => this.setState(() => ({
    sortType: SortType.LENGTH,
  }));

  getReverse = () => this.setState((state: State) => ({
    isReversed: !state.isReversed,
  }));

  getReset = () => this.setState(() => ({
    sortType: SortType.NONE,
    isReversed: false,
  }));

  render(): ReactNode {
    const { isReversed, sortType } = this.state;
    const {
      sortAlphabet,
      sortByLength,
      getReverse,
      getReset,
    } = this;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={(
              sortType === SortType.ALPABET
                ? 'button is-info'
                : 'button is-info is-light'
            )}
            onClick={sortAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={(
              sortType === SortType.LENGTH
                ? 'button is-success'
                : 'button is-success is-light'
            )}
            onClick={sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={(
              isReversed === true
                ? 'button is-warning'
                : 'button is-warning is-light'
            )}
            onClick={getReverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={getReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, this.state).map(good => (
              <li key={good} data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
