import React from 'react';
import cn from 'classnames';
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

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState(state => (
      { isReversed: !state.isReversed }
    ));
  };

  reset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const visibleGoods = [...goodsFromServer];

    switch (sortType) {
      case SortType.ALPHABET:
        visibleGoods.sort((g1, g2) => (
          g1.localeCompare(g2)
        ));
        break;

      case SortType.LENGTH:
        visibleGoods.sort((g1, g2) => (
          g1.length - g2.length
        ));

        break;

      default:
        break;
    }

    if (this.state.isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={this.sortByAlphabet}
            type="button"
            className={cn('button', 'is-info',
              { 'is-light': sortType !== SortType.ALPHABET })}
          >
            Sort alphabetically
          </button>

          <button
            onClick={this.sortByLength}
            type="button"
            className={cn('button', 'is-success',
              { 'is-light': sortType !== SortType.LENGTH })}
          >
            Sort by length
          </button>

          <button
            onClick={this.reverse}
            type="button"
            className={cn('button', 'is-warning', { 'is-light': !isReversed })}
          >
            Reverse
          </button>

          {(isReversed || sortType !== SortType.NONE) && (
            <button
              onClick={this.reset}
              type="button"
              className="button is-danger is-light"
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {visibleGoods.map(good => (
              <li key={good} data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
