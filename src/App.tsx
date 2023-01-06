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
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
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
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleClickSortAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleClickSortLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleClickReverce = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  handleClickReset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const myPrepareProducts = getReorderedGoods(goodsFromServer, this.state);
    const { isReversed, sortType } = this.state;
    const visibleReset = isReversed || (sortType !== SortType.NONE);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              classNames(
                'button is-info',
                { 'is-light': sortType !== SortType.ALPHABET },
              )
            }
            onClick={this.handleClickSortAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              classNames(
                'button is-success',
                { 'is-light': sortType !== SortType.LENGTH },
              )
            }
            onClick={this.handleClickSortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              classNames(
                'button is-warning',
                { 'is-light': isReversed !== true },
              )
            }
            onClick={this.handleClickReverce}
          >
            Reverse
          </button>

          {visibleReset
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleClickReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {myPrepareProducts.map(product => (
            <li
              key={product}
              data-cy="Good"
              className="product"
            >
              {product}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
