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
  sortType: SortType;
  isReversed: boolean;
};

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  let visibleGoods = [...goods];

  // Sort and reverse goods if needed
  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods
      = visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
      break;
    case SortType.LENGTH:
      visibleGoods
      = visibleGoods.sort((good1, good2) => good1.length - good2.length);
      break;
    default: // NONE
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

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
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${this.state.sortType !== SortType.ALPHABET ? 'is-light' : ''}`}
            onClick={() => this.setState({ sortType: SortType.ALPHABET })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${this.state.sortType !== SortType.LENGTH ? 'is-light' : ''}`}
            onClick={() => this.setState({ sortType: SortType.LENGTH })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${this.state.isReversed ? '' : 'is-light'}`}
            onClick={() => this.setState(prevState => ({
              isReversed: !prevState.isReversed,
            }))}
          >
            Reverse
          </button>

          {(this.state.sortType !== SortType.NONE || this.state.isReversed)
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.setState({
                sortType: SortType.NONE,
                isReversed: false,
              })}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(
              goodsFromServer,
              this.state,
            ).map(good => <li data-cy="Good" key={good}>{good}</li>)}
          </ul>
        </ul>
      </div>
    );
  }
}
