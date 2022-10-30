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

type State = {
  goods: string[],
  isReversed: boolean,
  sortBy: string,
  resetVisibility: boolean,
  classVisibility: string,
};

enum ButtonsMap {
  ALPHABETICALLY = 'ALPHABETICALLY',
  BY_LENGTH = 'BY_LENGTH',
}

export class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isReversed: false,
    sortBy: '',
    resetVisibility: false,
    classVisibility: '',
  };

  toShowButton = () => {
    this.setState({ resetVisibility: true });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      resetVisibility: true,
    }));
  };

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alpha',
      resetVisibility: true,
      classVisibility: 'ALPHABETICALLY',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      resetVisibility: true,
      classVisibility: 'BY_LENGTH',
    });
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      isReversed: false,
      sortBy: '',
      resetVisibility: false,
      classVisibility: '',
    });
  };

  render() {
    const {
      goods,
      isReversed,
      sortBy,
      resetVisibility,
      classVisibility,
    } = this.state;

    const visibleGoods = [...goods];

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'alpha':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
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
            onClick={this.sortByAlphabet}
            className={classNames('button', {
              'is-info is-light': classVisibility !== ButtonsMap.ALPHABETICALLY,
              'is-info': classVisibility === ButtonsMap.ALPHABETICALLY,
            })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', {
              'is-success is-light': classVisibility !== ButtonsMap.BY_LENGTH,
              'is-success': classVisibility === ButtonsMap.BY_LENGTH,
            })}
            onClick={this.sortByLength}
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
          {resetVisibility && (
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
