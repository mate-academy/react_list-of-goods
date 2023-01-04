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

  switch (sortType) {
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;

    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;

    default:
      break;
  }

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleLengthSortClick = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  handleNameSortClick = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  handleReverseClick = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleResetClick = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const goods = getReorderedGoods(goodsFromServer, this.state);

    const isResetVisible = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content box">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button is-info', {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
            onClick={this.handleNameSortClick}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button is-success', {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={this.handleLengthSortClick}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn('button is-warning', { 'is-light': !isReversed })}
            onClick={this.handleReverseClick}
          >
            Reverse
          </button>

          {isResetVisible && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleResetClick}
            >
              Reset
            </button>
          )}
        </div>

        <ul className="list">
          <ul>
            {goods.map(good => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
