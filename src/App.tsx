import { Component } from 'react';
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

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((firstGood, secondGood) => (
      firstGood.localeCompare(secondGood)));
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((firstGood, secondGood) => (
      firstGood.length - secondGood.length));
  }

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

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  hendleSortByAlphabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  hendleSortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  hendleReverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  hendleReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const isAlphabet = sortType === SortType.ALPHABET;
    const isLength = sortType === SortType.LENGTH;
    const isSelected = (sortType !== SortType.NONE || isReversed);

    const {
      hendleSortByAlphabet,
      hendleSortByLength,
      hendleReverse,
      hendleReset,
    } = this;

    const goods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': !isAlphabet,
            })}
            onClick={hendleSortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': !isLength,
            })}
            onClick={hendleSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': !isReversed,
            })}
            onClick={hendleReverse}
          >
            Reverse
          </button>

          {isSelected && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={hendleReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {goods.map(good => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
