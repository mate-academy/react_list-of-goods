import { Component } from 'react';
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
  const visibleGoods = [...goods];

  visibleGoods.sort((product1, product2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return product1.localeCompare(product2);

      case SortType.LENGTH:
        return product1.length - product2.length;

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
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  resetReordering = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const reorderedGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={() => (
              this.setState({ sortType: SortType.ALPHABET })
            )}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={() => (
              this.setState({ sortType: SortType.LENGTH })
            )}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={() => (
              this.setState({ isReversed: !isReversed })
            )}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed)
            ? (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.resetReordering}
              >
                Reset
              </button>
            )
            : null}
        </div>

        <ul>
          {reorderedGoods.map(product => (
            <li data-cy="Good" key={product}>
              {product}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
