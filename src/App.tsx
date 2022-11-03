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
  goods: string[],
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortBy: '',
    goods: goodsFromServer,
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
      goods: goodsFromServer,
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const {
      isReversed,
      sortBy,
      goods,
    } = this.state;

    const visibleGoods = [...goods];

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);

        case 'length':
          return a[sortBy] - b[sortBy];

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

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
            {visibleGoods.map(good => (
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
