import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  if (sortType) {
    visibleGoods.sort((good1, good2) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return good1.localeCompare(good2);

        case SortType.LENGTH:
          return good1.length - good2.length;

        default:
          return 0;
      }
    });
  }

  if (isReversed) {
    return visibleGoods.reverse();
  }

  // Sort and reverse goods if needed
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
  state:State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const {
      isReversed,
      sortType,
    } = this.state;

    const {
      NONE,
      ALPHABET,
      LENGTH,
    } = SortType;

    const sortByAlphabet = () => (
      this.setState({ sortType: ALPHABET })
    );

    const sortByLength = () => (
      this.setState({ sortType: LENGTH })
    );

    const setIsReversed = () => (
      this.setState({ isReversed: !isReversed })
    );

    const setDefault = () => (
      this.setState({ sortType: NONE, isReversed: false })
    );

    const orderedGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button is-info',
              { 'is-light': sortType !== ALPHABET },
            )}
            onClick={sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button is-success',
              { 'is-light': sortType !== LENGTH },
            )}
            onClick={sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={setIsReversed}
          >
            Reverse
          </button>

          {(sortType !== NONE || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={setDefault}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>

            {
            // eslint-disable-next-line max-len
              orderedGoods.map(good => (
                <li
                  data-cy="Good"
                  key={good}
                >
                  {good}
                </li>
              ))
            }
          </ul>
        </ul>
      </div>
    );
  }
}
