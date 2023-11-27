import { PureComponent } from 'react';
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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((goodA: string, goodB: string) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return goodA.localeCompare(goodB);

      case SortType.LENGTH:
        return goodA.length - goodB.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends PureComponent<{}, ReorderOptions> {
  state: Readonly<ReorderOptions> = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sort = (sortType: SortType) => {
    this.setState({ sortType });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const goods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    const isResetVisible = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={() => this.sort(SortType.ALPHABET)}
            type="button"
            className={cn(
              'button is-info', {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
          >
            Sort alphabetically
          </button>

          <button
            onClick={() => this.sort(SortType.LENGTH)}
            type="button"
            className={cn(
              'button is-success', {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
          >
            Sort by length
          </button>

          <button
            onClick={this.reverse}
            type="button"
            className={cn(
              'button is-warning', {
                'is-light': !isReversed,
              },
            )}
          >
            Reverse
          </button>

          {isResetVisible && (
            <button
              onClick={this.reset}
              type="button"
              className="button is-danger is-light"
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {goods.map((good) => (
              <li key={good} data-cy="Good">
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
