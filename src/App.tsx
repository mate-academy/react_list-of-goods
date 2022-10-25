import { Component } from 'react';
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
  ALPABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((previous, current) => {
    switch (sortType) {
      case SortType.ALPABET:
        return previous.localeCompare(current);

      case SortType.LENGTH:
        return previous.length - current.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  resetReverse = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  sortByAlphabet = () => {
    this.setState({
      sortType: SortType.ALPABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;

    const goods = getReorderedGoods(
      goodsFromServer,
      this.state,
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            onClick={this.sortByAlphabet}
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPABET },
            )}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.reverse}
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
          >
            Reverse
          </button>

          {
            (sortType || isReversed)
              && (
                <button
                  type="button"
                  onClick={this.resetReverse}
                  className="button is-danger is-light"
                >
                  Reset
                </button>
              )
          }
        </div>
        <ul>
          {goods.map(good => (
            <li
              data-cy="Good"
              key={good}
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
