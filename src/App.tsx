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
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;

    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;

    case SortType.NONE:
      break;

    default:
      throw new Error('something went wrong');
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
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortByAlphabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  toggleReverse = () => {
    this.setState((state) => ({
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
    const { sortType, isReversed } = this.state;

    const goods = getReorderedGoods(goodsFromServer, {
      sortType,
      isReversed,
    });

    const sortAphabetClassName = classNames('button is-info', {
      'is-light': this.state.sortType !== SortType.ALPHABET,
    });

    const sortLengthClassName = classNames('button is-success', {
      'is-light': this.state.sortType !== SortType.LENGTH,
    });

    const reverseClassName = classNames(
      'button is-warning',
      { 'is-light': isReversed },
    );

    const resetClassName = classNames(
      'button is-danger is-light',
      {
        'is-hidden':
        goodsFromServer[1] === goods[1],
      },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={sortAphabetClassName}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={sortLengthClassName}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={reverseClassName}
            onClick={this.toggleReverse}
          >
            Reverse
          </button>

          <button
            type="button"
            className={resetClassName}
            onClick={this.reset}
          >
            Reset
          </button>
        </div>

        <ul>
          <ul>
            {goods.map(good => (
              <li key={good} data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
