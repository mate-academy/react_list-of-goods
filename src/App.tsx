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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  visibleGoods.sort((goods1, goods2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return goods1.localeCompare(goods2);

      case SortType.LENGTH:
        return goods1.length - goods2.length;

      default:
        return SortType.NONE;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

interface State {
  isReversed: boolean,
  sortType: SortType,
}

export class App extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  handleSortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleSortByLenght = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  handleReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const goods = getReorderedGoods(goodsFromServer, this.state);
    const isVisibleReset = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={this.handleSortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={this.handleSortByLenght}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning', {
              'is-light': !isReversed,
            })}
            onClick={this.handleReverse}
          >
            Reverse
          </button>
          {isVisibleReset && (
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
          {goods.map(
            good => <li data-cy="Good" key={good}>{good}</li>,
          )}
        </ul>
      </div>
    );
  }
}
