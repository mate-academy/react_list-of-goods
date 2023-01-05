import { Component } from 'react';
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

  // Sort and reverse goods if needed
  if (sortType !== SortType.NONE) {
    visibleGoods.sort((itemA, itemB) => {
      return sortType === SortType.ALPHABET
        ? itemA.localeCompare(itemB)
        : itemA.length - itemB.length;
    });
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

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleClickSortAlphabetically = () => {
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
    this.setState((state) => ({
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
    const {
      sortType,
      isReversed,
    } = this.state;

    const isResetRendered = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn({
              'button is-info': true,
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={this.handleClickSortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn({
              'button is-success': true,
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={this.handleClickSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn({
              'button is-warning': true,
              'is-light': !isReversed,
            })}
            onClick={this.handleClickReverse}
          >
            Reverse
          </button>

          {
            (isResetRendered) && (
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
          <ul>
            {getReorderedGoods(goodsFromServer, this.state).map(good => (
              <li data-cy="Good" key={good}>{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
