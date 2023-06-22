import { Component } from 'react';
import classNames from 'classnames';

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
    case SortType.ALPHABET: {
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    }

    case SortType.LENGTH: {
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    }

    case SortType.NONE:
    default: {
      break;
    }
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState(prev => ({ isReversed: !prev.isReversed }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const reorderedGoods = getReorderedGoods(goodsFromServer, {
      sortType: this.state.sortType,
      isReversed: this.state.isReversed,
    });

    const isOriginalOrder
      = goodsFromServer.every((item, index) => item === reorderedGoods[index]);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              {
                'is-light': this.state.sortType !== SortType.ALPHABET,
              },
            )}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              {
                'is-light': this.state.sortType !== SortType.LENGTH,
              },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              {
                'is-light': !this.state.isReversed,
              },
            )}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {!isOriginalOrder && (
            <>
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.reset}
              >
                Reset
              </button>
            </>
          )}
        </div>

        <ul>
          {reorderedGoods.map((good: string) => (
            <li
              key={good}
              data-cy="Good"
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
