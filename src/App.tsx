import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return good1.localeCompare(good2);
      case SortType.LENGTH:
        return good1.length - good2.length;
      case SortType.NONE:
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

  sortByLength = () => (
    this.setState({
      sortType: SortType.LENGTH,
    })
  );

  sortByAlphabet = () => (
    this.setState({
      sortType: SortType.ALPHABET,
    })
  );

  handleReset = () => (
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    })
  );

  handleReverse = () => (
    this.setState(state => ({
      isReversed: !state.isReversed,
    }
    )));

  render() {
    const { isReversed, sortType } = this.state;
    const newGoods = getReorderedGoods(
      goodsFromServer,
      { isReversed, sortType },
    );

    const isVisibleResetButton = sortType !== SortType.NONE || isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': !isReversed,
            })}
            onClick={this.handleReverse}
          >
            Reverse
          </button>
          {isVisibleResetButton && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {newGoods.map(good => (
              <li
                key={good}
                data-cy="Good"
              >
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
