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

function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((product1, prodact2) => {
    switch (sortType) {
      case SortType.ALPABET:
        return product1.localeCompare(prodact2);

      case SortType.LENGTH:
        return product1.length - prodact2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    return visibleGoods.reverse();
  }

  return visibleGoods;
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

  sortByAlpabet = () => {
    this.setState({
      sortType: SortType.ALPABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
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
    const {
      isReversed,
      sortType,
    } = this.state;

    const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': sortType !== SortType.ALPABET,
            })}
            onClick={this.sortByAlpabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning', {
              'is-light': !isReversed,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
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
          {goods.map(product => (
            <li
              key={product}
              data-cy="Good"
            >
              {product}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
