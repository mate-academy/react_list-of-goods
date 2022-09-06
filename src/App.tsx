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

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
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

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  sortType: SortType,
  isReversed: boolean,
};

export class App extends Component<{}, State> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  render(): ReactNode {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={(
              this.state.sortType === SortType.ALPABET
                ? 'button is-info'
                : 'button is-info is-light'
            )}
            onClick={() => this.setState(() => ({
              sortType: SortType.ALPABET,
            }))}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={(
              this.state.sortType === SortType.LENGTH
                ? 'button is-info'
                : 'button is-info is-light'
            )}
            onClick={() => this.setState(() => ({
              sortType: SortType.LENGTH,
            }))}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={(
              this.state.isReversed === true
                ? 'button is-info'
                : 'button is-info is-light'
            )}
            onClick={() => this.setState((state: State) => ({
              isReversed: !state.isReversed,
            }))}
          >
            Reverse
          </button>

          {(this.state.sortType !== SortType.NONE || this.state.isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.setState(() => ({
                sortType: SortType.NONE,
                isReversed: false,
              }))}
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
