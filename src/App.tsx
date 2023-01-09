import React from 'react';
import cn from 'classnames';
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
    case SortType.ALPHABET:
      visibleGoods.sort(
        (firstGood, secondGood) => firstGood.localeCompare(secondGood),
      );
      break;

    case SortType.LENGTH:
      visibleGoods.sort(
        (firstGood, secondGood) => firstGood.length - secondGood.length,
      );
      break;

    default:
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleClickSortByAlphabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  handleClickSortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  handleClickReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleClickReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;

    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    const isResetButtonVisible = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button is-primary',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.handleClickSortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button is-primary',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.handleClickSortByLength}
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

          {isResetButtonVisible && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleClickReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visibleGoods.map(good => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
