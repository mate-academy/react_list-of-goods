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

interface ReorderOptions {
  sortType: SortType,
  isReversed: boolean,
}

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

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

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

interface State {
  isReversed: boolean,
  sortType: SortType,
}

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  hendleAlphabeticallySort = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  hendleLengthSort = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  handleReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  handleReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const { isReversed, sortType } = this.state;
    const {
      hendleAlphabeticallySort,
      hendleLengthSort,
      handleReverse,
      handleReset,
    } = this;

    const goods = getReorderedGoods(goodsFromServer, this.state);
    const isSorted = sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn('button', 'is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={hendleAlphabeticallySort}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn('button', 'is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={hendleLengthSort}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn('button', 'is-warning', {
              'is-light': !isReversed,
            })}
            onClick={handleReverse}
          >
            Reverse
          </button>

          {(isSorted || isReversed)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={handleReset}
              >
                Reset
              </button>
            )}

        </div>

        <ul>
          <ul>
            {goods.map(good => {
              return (
                <li data-cy="Good" key={good}>
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
