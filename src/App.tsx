import React from 'react';
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

type SortType = 'none' | 'alphabet' | 'length';

type State = {
  isReversed: boolean;
  sortType: SortType;
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: 'none' as SortType,
  };

  sortAlphabetically = () => {
    this.setState({ sortType: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortType: 'length' });
  };

  sortReverse = () => {
    this.setState(state => {
      return {
        isReversed: !state.isReversed,
      };
    });
  };

  sortReset = () => {
    this.setState({ sortType: 'none', isReversed: false });
  };

  render() {
    let sortedGoods = [...goodsFromServer];
    const { isReversed, sortType } = this.state;

    if (sortType === 'alphabet') {
      sortedGoods = [...goodsFromServer].sort((a, b) => {
        return a.localeCompare(b);
      });
    } else if (sortType === 'length') {
      sortedGoods = [...goodsFromServer].sort((a, b) => {
        return a.length - b.length;
      });
    }

    if (isReversed) {
      sortedGoods = [...sortedGoods].reverse();
    }

    const isAlphabetActive = sortType === 'alphabet';
    const isLengthActive = sortType === 'length';
    const isReverseActive = isReversed;
    const isNotInitialState = sortType !== 'none' || isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${isAlphabetActive ? '' : 'is-light'}`}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${isLengthActive ? '' : 'is-light'}`}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${isReverseActive ? '' : 'is-light'}`}
            onClick={this.sortReverse}
          >
            Reverse
          </button>

          {isNotInitialState && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.sortReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {sortedGoods.map(good => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
