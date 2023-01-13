import { Component } from 'react';
import cN from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';
import { GoodsList } from './GoodsList';

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

  visibleGoods.sort((g1, g2): number => {
    switch (sortType) {
      case SortType.ALPHABET:
        return g1.localeCompare(g2);

      case SortType.LENGTH:
        return g1.length - g2.length;

      default:
        break;
    }

    return 0;
  });

  return isReversed ? visibleGoods.reverse() : visibleGoods;
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

  render() {
    const { sortType, isReversed } = this.state;
    const updatedGoods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cN(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={() => (this.setState({ sortType: SortType.ALPHABET }))}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cN(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={() => (this.setState({ sortType: SortType.LENGTH }))}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cN(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={() => {
              this.setState(state => ({
                isReversed: !state.isReversed,
              }));
            }}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) ? (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => (this.setState({
                sortType: SortType.NONE,
                isReversed: false,
              }))}
            >
              Reset
            </button>
          ) : null}
        </div>

        <GoodsList goods={updatedGoods} />
      </div>
    );
  }
}
