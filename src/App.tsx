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
  ALPHABET = 'alphabet',
  LENGTH = 'length',
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export function getReorderedGoods(
  goods: string[],
  { isReversed, sortType }: State,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case SortType.LENGTH:
        return g1.length - g2.length;

      case SortType.ALPHABET:
        return g1.localeCompare(g2);

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends React.Component {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  onReset = () => {
    this.setState(
      {
        isReversed: false,
        sortType: SortType.NONE,
      },
    );
  };

  onSort = (sortType: SortType) => () => this.setState({ sortType });

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              {
                'is-light': this.state.sortType !== SortType.ALPHABET,
              },
            )}
            onClick={this.onSort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              {
                'is-light': this.state.sortType !== SortType.LENGTH,
              },
            )}
            onClick={this.onSort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              {
                'is-light': !this.state.isReversed,
              },
            )}
            onClick={() => {
              this.setState((prevState: State) => (
                { isReversed: !prevState.isReversed }
              ));
            }}
          >
            Reverse
          </button>

          {(this.state.sortType !== SortType.NONE || this.state.isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.onReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {getReorderedGoods(goodsFromServer, this.state).map(good => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
