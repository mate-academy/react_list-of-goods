import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

import cn from "classnames";

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
  sortType: SortType;
  isReversed: boolean;
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort();
  } else if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean;
  sortType: SortType;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sort = (sortType: SortType) => {
    this.setState({ sortType });
  };

  reverse = () => {
    this.setState((prevState) => ({
      isReversed: !prevState.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;

    const visibleGoods = getReorderedGoods(goodsFromServer, {
      sortType: sortType,
      isReversed: isReversed,
    });

    const visibleReset = sortType !== SortType.NONE || isReversed;

    return (
      <div className='section content'>
        <div className='buttons'>
          <button
            type='button'
            className={cn('button', 'is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={() => this.sort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type='button'
            className={cn('button', 'is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={() => this.sort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type='button'
            className={cn('button', 'is-warning', {
              'is-light': !isReversed,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {visibleReset && (
            <button
              type='button'
              className='button is-danger is-light'
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {visibleGoods.map((good) => (
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
