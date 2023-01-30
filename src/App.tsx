import React from 'react';
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

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverseGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  resetAll = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  render(): JSX.Element {
    const { isReversed, sortType } = this.state;
    const visibleGoods = [...goodsFromServer];
    const reoderedGoods = isReversed || sortType !== SortType.NONE;

    visibleGoods.sort((prevGood, nextGood): number => {
      switch (sortType) {
        case SortType.LENGTH:
          return prevGood.length - nextGood.length;
        case SortType.ALPHABET:
          return prevGood.localeCompare(nextGood);
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
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.reverseGoods}
          >
            Reverse
          </button>

          {reoderedGoods && (
            <button
              type="button"
              className="
                button
                is-danger
                is-light
              "
              onClick={this.resetAll}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visibleGoods.map((good) => (
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
