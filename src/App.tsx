import React from 'react';
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

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
): string[] {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
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
  sortType: number,
};

export class App extends React.PureComponent<{}, State> {
  state = {
    isReversed: false,
    sortType: 0,
  };

  goodsListReverse = (): void => {
    this.setState(prevState => (
      { isReversed: !prevState.isReversed }));
  };

  sortByAlphabet = (): void => {
    this.setState(prevState => ({ ...prevState, sortType: SortType.ALPHABET }));
  };

  sortByLength = (): void => {
    this.setState(prevState => ({ ...prevState, sortType: SortType.LENGTH }));
  };

  resetGoodsList = (): void => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  render() {
    const { sortType } = this.state;

    const goods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            id="SortByAbc"
            className={`button is-info
              ${(sortType === SortType.ALPHABET ? '' : 'is-light')}`}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            id="SortByLength"
            className={`button is-success
              ${(sortType === SortType.LENGTH ? '' : 'is-light')}`}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            id="reverse"
            onClick={this.goodsListReverse}
            className={`button is-warning
              ${(this.state.isReversed ? '' : 'is-light')}`}
          >
            Reverse
          </button>

          {(this.state.isReversed || sortType !== SortType.NONE)
          && (
            <button
              type="button"
              id="reset"
              className="button is-danger is-light"
              onClick={this.resetGoodsList}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {goods.map(productName => (
              <li data-cy="Good" key={productName}>{productName}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
