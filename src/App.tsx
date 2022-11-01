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
  NONE = 'NONE',
  ALPABET = 'ALPABET',
  LENGTH = 'LENGTH',
}

type State = {
  isReversed: boolean,
  resetVisible: boolean,
  classVisible: string,
  sortBy: string,
  goods: string[],
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    resetVisible: false,
    classVisible: '',
    sortBy: '',
    goods: goodsFromServer,
  };

  sortAlpha = () => {
    this.setState({
      sortBy: 'alpha',
      resetVisible: true,
      classVisible: 'ALPABET',
    });
  };

  sortLength = () => {
    this.setState({
      sortBy: 'length',
      resetVisible: true,
      classVisible: 'LENGTH',
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      resetVisible: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      isReversed: false,
      sortBy: '',
      resetVisible: false,
      classVisible: '',
    });
  };

  render() {
    const {
      isReversed,
      resetVisible,
      classVisible,
      sortBy,
      goods,
    } = this.state;

    const visibleGoods = [...goods];

    visibleGoods.sort((alpha, length) => {
      switch (sortBy) {
        case 'alpha':
          return alpha.localeCompare(length);

        case 'length':
          return alpha[sortBy] - length[sortBy];

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
              'is-info is-light': classVisible !== SortType.ALPABET,
              'is-info': classVisible === SortType.ALPABET,
            })}
            onClick={this.sortAlpha}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', {
              'is-success is-light': classVisible !== SortType.LENGTH,
              'is-success': classVisible === SortType.LENGTH,
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

          {resetVisible && (
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
