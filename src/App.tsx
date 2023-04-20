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

export class App extends React.Component<{}, ReorderOptions> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;

    function getReorderedGoods(
      goods: string[],
      { sortType, isReversed }: ReorderOptions, // eslint-disable-line
    ) {
      const visibleGoods = [...goods];

      if (sortType === SortType.ALPHABET) {
        visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
      }

      if (sortType === SortType.LENGTH) {
        visibleGoods.sort((good1, good2) => good1.length - good2.length);
      }

      if (isReversed) {
        visibleGoods.reverse();
      }

      return visibleGoods;
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button', 'is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', 'is-info', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button', 'is-warning', {
              'is-light': !isReversed,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {
            (sortType !== SortType.NONE || isReversed)
              && (
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={this.reset}
                >
                  Reset
                </button>
              )
          }
        </div>

        <ul>
          {getReorderedGoods(goodsFromServer, this.state).map(good => (
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
