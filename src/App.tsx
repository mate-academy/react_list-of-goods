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

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  { sortType, isReversed }: ReorderOptions,
) {
  let visibleGoods = [...goodsFromServer];

  if (sortType === SortType.ALPHABET) {
    visibleGoods = visibleGoods.sort((a, b) => a.localeCompare(b));
  } else if (sortType === SortType.LENGTH) {
    visibleGoods = visibleGoods.sort((a, b) => {
      const lengthDiffrence = a.length - b.length;

      if (lengthDiffrence === 0) {
        return a.localeCompare(b);
      }

      return lengthDiffrence;
    });
  }

  if (isReversed) {
    visibleGoods = visibleGoods.reverse();
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
  state: State = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  handleSort = (sortType: SortType) => {
    this.setState({ sortType });
  };

  handleReverse = () => {
    this.setState((prevState) => ({ isReversed: !prevState.isReversed }));
  };

  handleReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const reorderedGoods = getReorderedGoods({ sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn({
              'button is-info': true,
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={() => this.handleSort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn({
              'button is-success': true,
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={() => this.handleSort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn({
              'button is-warning': true,
              'is-light': isReversed !== true,
            })}
            onClick={() => this.handleReverse()}
          >
            Reverse
          </button>

          {(this.state.sortType !== SortType.NONE || this.state.isReversed)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={() => this.handleReset()}
              >
                Reset
              </button>
            )}
        </div>

        <ul>
          {reorderedGoods.map(item => {
            return (
              <li data-cy="Good">{item}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
