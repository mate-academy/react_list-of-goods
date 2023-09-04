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

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleReverse = () => {
    this.setState(state => {
      return {
        isReversed: !state.isReversed,
      };
    });
  };

  handleByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleReset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  getReorderedGoods = (
    goods: string[],
    { sortType, isReversed }: ReorderOptions,
  ) => {
    const visibleGoods = [...goods];

    if (this.state.sortType === SortType.ALPHABET) {
      visibleGoods.sort((a, b) => a.localeCompare(b));
    }

    if (this.state.sortType === SortType.LENGTH) {
      visibleGoods.sort((a, b) => a.length - b.length);
    }

    if (this.state.isReversed) {
      visibleGoods.reverse();
    }

    // eslint-disable-next-line no-console
    console.log(sortType, isReversed);

    return visibleGoods;
  };

  render() {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(['button', 'is-info'],
              { 'is-light': sortType !== SortType.ALPHABET })}
            onClick={this.handleAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(['button', 'is-success'],
              { 'is-light': sortType !== SortType.LENGTH })}
            onClick={this.handleByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(['button', 'is-warning'],
              { 'is-light': !isReversed })}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {(this.state.isReversed || this.state.sortType !== SortType.NONE)
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {this.getReorderedGoods(goodsFromServer, { sortType, isReversed })
            .map((good) => {
              return (
                <li data-cy="Good" key={good}>{good}</li>
              );
            })}
        </ul>
      </div>
    );
  }
}
