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
  NONE = 'none',
  ALPABET = 'alphabet',
  LENGTH = 'length',
}

type State = {
  isReversed: boolean,
  sortBy: string,
};

export function getVisibleGoods(
  { sortBy, isReversed }: State,
) {
  const visibleGoods = [...goodsFromServer].sort((a, b) => {
    switch (sortBy) {
      case SortType.ALPABET:
        return a.localeCompare(b);

      case SortType.LENGTH:
        return a[sortBy] - b[sortBy];

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortBy: '',
  };

  sortAlpha = () => {
    this.setState({
      sortBy: SortType.ALPABET,
    });
  };

  sortLength = () => {
    this.setState({
      sortBy: SortType.LENGTH,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const {
      isReversed,
      sortBy,
    } = this.state;

    const goods = getVisibleGoods({
      sortBy,
      isReversed,
    });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button', {
              'is-info is-light': sortBy !== SortType.ALPABET,
              'is-info': sortBy === SortType.ALPABET,
            })}
            onClick={this.sortAlpha}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', {
              'is-success is-light': sortBy !== SortType.LENGTH,
              'is-success': sortBy === SortType.LENGTH,
            })}
            onClick={this.sortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button', {
              'is-warning is-light': !isReversed,
              'is-warning': isReversed,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(sortBy || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {goods.map(good => (
              <li
                data-cy="Good"
                key={good}
              >
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
