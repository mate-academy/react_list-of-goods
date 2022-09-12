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
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPABET:
        return good1.localeCompare(good2);

      case SortType.LENGTH:
        return good1.length - good2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

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

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState(state => ({
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
    const {
      sortType,
      isReversed,
    } = this.state;
    const {
      sortByAlphabet,
      sortByLength,
      reverse,
      reset,
    } = this;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              sortType !== SortType.ALPABET
                ? 'button is-info is-light'
                : 'button is-info'
            }
            onClick={sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              sortType !== SortType.LENGTH
                ? 'button is-success is-light'
                : 'button is-success'
            }
            onClick={sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              isReversed !== true
                ? 'button is-warning is-light'
                : 'button is-warning'
            }
            onClick={reverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed === true)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={reset}
              >
                Reset
              </button>
            )}

        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, this.state)
              .map(good => <li data-cy="Good" key={good}>{good}</li>)}
          </ul>
        </ul>
      </div>
    );
  }
}
