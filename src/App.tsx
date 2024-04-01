import cn from 'classnames';
import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { GoodsList } from './components/GoodsList';

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
  sortType: SortType;
  isReversed: boolean;
};

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
// type State = {
//   isReversed: boolean,
//   sortType: SortType,
// };

type State = {
  goods: string[];
  originalGoods: string[];
};

export class App extends React.Component<{}, State> {
  state = { goods: goodsFromServer, originalGoods: goodsFromServer.slice() };

  sortAlphabetical = () => {
    const newGoods = [...goodsFromServer];

    newGoods.sort((g1: string, g2: string) => {
      return g1.localeCompare(g2);
    });
    this.setState({ goods: newGoods });
  };

  sortLength = () => {
    const lengthGoods = [...goodsFromServer];

    lengthGoods.sort((a, b) => {
      return a.length - b.length;
    });

    this.setState({ goods: lengthGoods });
  };

  sortReverse = () => {
    const reverseGoods = [...this.state.goods];

    reverseGoods.reverse();

    this.setState({ goods: reverseGoods });
  };

  sortCustom = (opts: ReorderOptions) => {
    if (opts.sortType === SortType.ALPHABET) {
      this.sortAlphabetical();
    } else if (opts.sortType === SortType.LENGTH) {
      this.sortLength();
    } else if (opts.isReversed) {
      this.sortReverse();
    } else {
      const goodsReturned = getReorderedGoods(goodsFromServer, opts);

      this.setState({ goods: goodsReturned });
    }
  };

  sortReset = () => {
    this.setState({ goods: this.state.originalGoods });
  };

  render() {
    const { goods, originalGoods } = this.state;
    const isOriginal = JSON.stringify(goods) === JSON.stringify(originalGoods);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn('button', {
              'is-info': true,
              'is-light': isOriginal,
            })}
            onClick={() => {
              const opts = { sortType: SortType.ALPHABET, isReversed: false };

              this.sortCustom(opts);
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn('button', {
              'is-success': true,
              'is-light': isOriginal,
            })}
            onClick={() => {
              const opts = { sortType: SortType.LENGTH, isReversed: false };

              this.sortCustom(opts);
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn('button', {
              'is-warning': true,
              'is-light': isOriginal,
            })}
            onClick={() => {
              const opts = { sortType: SortType.NONE, isReversed: true };

              this.sortCustom(opts);
            }}
          >
            {isOriginal ? 'Reverse' : 'Reset'}
          </button>
          {!isOriginal && (
            <button
              type="button"
              className="button is-danger"
              onClick={this.sortReset}
            >
              Reset
            </button>
          )}
        </div>
        <GoodsList goodsList={this.state.goods} />
      </div>
    );
  }
}
