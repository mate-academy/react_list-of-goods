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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.NONE:
      break;

    case SortType.ALPHABET:
      visibleGoods.sort(
        (good1, good2) => good1.localeCompare(good2),
      );
      break;

    case SortType.LENGTH:
      visibleGoods.sort(
        (good1, good2) => (good1.length - good2.length),
      );
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
  isReset: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
    isReset: false,
  };

  sortByAlphabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
      isReset: true,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
      isReset: true,
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
      isReset: false,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      isReset: !state.isReversed || state.sortType !== SortType.NONE,
    }));
  };

  render() {
    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);
    const { isReversed, sortType, isReset } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              `button is-info ${(sortType === SortType.ALPHABET) ? '' : 'is-light'}`
            }
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              `button is-success ${(sortType === SortType.LENGTH) ? '' : 'is-light'}`
            }
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              `button is-warning ${(isReversed) ? '' : 'is-light'}`
            }
            onClick={this.reverse}
          >
            Reverse
          </button>

          {isReset && (
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
          {visibleGoods.map(good => (
            <li data-cy="Good" key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
