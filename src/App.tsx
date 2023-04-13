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
  NONE = 'none',
  ALPHABET = 'alphabet',
  LENGTH = 'length',
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

export class App extends Component<{}, ReorderOptions> {
  state: Readonly<ReorderOptions> = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  render() {
    function getReorderedGoods(
      goods: string[],
      { sortType, isReversed }: ReorderOptions,
    ) {
      const visibleGoods = [...goods];

      visibleGoods.sort((g1, g2) => {
        switch (sortType) {
          case 'alphabet':
            return g1.localeCompare(g2);

          case 'length':
            return g1.length - g2.length;

          default:
            return 0;
        }
      });

      return isReversed ? visibleGoods.reverse() : visibleGoods;
    }

    const sortedGoods = getReorderedGoods(goodsFromServer, this.state);

    const { sortType, isReversed } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              {
                'is-light': sortType !== 'alphabet',
              },
            )}
            onClick={() => this.setState({ sortType: SortType.ALPHABET })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              {
                'is-light': sortType !== 'length',
              },
            )}
            onClick={() => this.setState({ sortType: SortType.LENGTH })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              {
                'is-light': isReversed === false,
              },
            )}
            onClick={() => this.setState(state => ({
              isReversed: !state.isReversed,
            }))}
          >
            Reverse
          </button>

          {(sortType === 'none' && !isReversed) || (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.setState({
                isReversed: false,
                sortType: SortType.NONE,
              })}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {sortedGoods.map(product => (
            <li data-cy="Good" key={product}>
              {product}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
