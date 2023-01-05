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

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((first, second) => (
        first.localeCompare(second)
      ));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((first, second) => (
        first.length - second.length
      ));
      break;

    default:
      break;
  }

  if (isReversed) {
    return visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
 type State = {
   isReversed: boolean,
   sortType: SortType,
 };

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleClickReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleClickSortByName = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  handleClicksortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  handleClickReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const reorderedGoods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.handleClickSortByName}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.handleClicksortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.handleClickReverse}
          >
            Reverse
          </button>
          {
            (sortType || isReversed)
                && (
                  <button
                    type="button"
                    className="button is-danger is-light"
                    onClick={this.handleClickReset}
                  >
                    Reset
                  </button>
                )
          }
        </div>

        <ul>
          {reorderedGoods.map(good => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
