import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((goodA, goodB) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return goodA.localeCompare(goodB);

      case SortType.LENGTH:
        return goodA.length - goodB.length;

      case SortType.NONE:
        return 0;

      default:
        throw new Error('Wrong type!');
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  sortType: SortType,
  isReversed: boolean,
};

export class App extends Component<{}, State> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortByAlphabet = () => {
    this.setState(
      { sortType: SortType.ALPHABET },
    );
  };

  sortByLength = () => {
    this.setState(
      { sortType: SortType.LENGTH },
    );
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
    const { isReversed, sortType } = this.state;
    const {
      sortByAlphabet,
      sortByLength,
      reverse,
      reset,
    } = this;

    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );
    const isOriginal = !isReversed && sortType === SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button',
              'is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn(
              'button',
              'is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={reverse}
          >
            Reverse
          </button>

          {!isOriginal && (
            <button
              type="button"
              className="button is-danger"
              onClick={reset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {visibleGoods.map(good => (
              <li data-cy="Good" key={uuidv4()}>
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
