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
  NONE = 'default',
  ALPABET = 'alphabet',
  LENGTH = 'length',
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

  switch (sortType) {
    case SortType.ALPABET:
      visibleGoods.sort((g1, g2) => g1.localeCompare(g2));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((g1, g2) => g1.length - g2.length);
      break;

    default:
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  sortType: SortType,
  isReversed: boolean,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  goods = getReorderedGoods(goodsFromServer, this.state);

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
                'is-light': this.state.sortType !== SortType.ALPABET,
              },
            )}
            onClick={() => this.setState({ sortType: SortType.ALPABET })}
          >
            Sort alphabetically
          </button>

          <button
            className={classNames(
              'button',
              'is-success',
              {
                'is-light': this.state.sortType !== SortType.LENGTH,
              },
            )}
            type="button"
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
                'is-light': !this.state.isReversed,
              },
            )}
            onClick={() => this.setState(state => ({
              isReversed: !state.isReversed,
            }))}
          >
            Reverse
          </button>

          {(
            this.state.isReversed || this.state.sortType !== SortType.NONE
          ) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.setState({
                sortType: SortType.NONE,
                isReversed: false,
              })}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {this.goods.map((product) => (
              <li data-cy="Good" key={product}>
                {product}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
