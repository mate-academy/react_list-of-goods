import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    function getReorderedGoods(
      goods: string[],
      { sortType, isReversed }: ReorderOptions,
    ) {
      const visibleGoods = [...goods];

      visibleGoods.sort((gA, gB) => {
        switch (sortType) {
          case SortType.ALPHABET:
            return gA.localeCompare(gB);
          case SortType.LENGTH:
            return gA.length - gB.length;
          default:
            return 0;
        }
      });

      if (isReversed) {
        visibleGoods.reverse();
      }

      // eslint-disable-next-line no-console
      console.log(sortType, isReversed);

      return visibleGoods;
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn('button is-info', {
              'is-light': this.state.sortType !== SortType.ALPHABET,
            })}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn('button is-success', {
              'is-light': this.state.sortType !== SortType.LENGTH,
            })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn('button is-warning', {
              'is-light': this.state.isReversed !== true,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(this.state.isReversed || this.state.sortType !== SortType.NONE)
            && (
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
            {getReorderedGoods(goodsFromServer, this.state).map(good => {
              return <li data-cy="Good" key={good}>{good}</li>;
            })}
          </ul>
        </ul>
      </div>
    );
  }
}
