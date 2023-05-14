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

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

export class App extends React.Component<{}, ReorderOptions> {
  state: ReorderOptions = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  getReorderedGoods(param: string) {
    const { sortType, isReversed } = this.state;

    let newSortType = sortType;
    let newIsReversed = isReversed;

    if (param === 'alphabetical') {
      newSortType = SortType.ALPHABET;
      newIsReversed = false;
    }

    if (param === 'length') {
      newSortType = SortType.LENGTH;
      newIsReversed = false;
    }

    if (param === 'reverse') {
      newIsReversed = !isReversed;
      newSortType = SortType.LENGTH;
    }

    if (param === 'reset') {
      newSortType = SortType.NONE;
      newIsReversed = false;
    }

    this.setState({
      sortType: newSortType,
      isReversed: newIsReversed,
    });
  }

  render() {
    const { sortType, isReversed } = this.state;
    let visibleGoods = [...goodsFromServer];

    if (sortType === SortType.ALPHABET) {
      visibleGoods = visibleGoods.sort((a, b) => a.localeCompare(b));
    }

    if (sortType === SortType.LENGTH) {
      visibleGoods = visibleGoods.sort((a, b) => a.length - b.length);
    }

    if (isReversed) {
      visibleGoods = visibleGoods.reverse();
    }

    const isSortedAlphabetically = sortType === SortType.ALPHABET;
    const isSortedByLength = sortType === SortType.LENGTH;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info${isSortedAlphabetically ? '' : ' is-light'}`}
            onClick={() => this.getReorderedGoods('alphabetical')}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success${isSortedByLength ? '' : ' is-light'}`}
            onClick={() => this.getReorderedGoods('length')}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning${isReversed ? '' : ' is-light'}`}
            onClick={() => this.getReorderedGoods('reverse')}
          >
            Reverse
          </button>

          { sortType > 0 && (
            <button
              type="button"
              className="button is-danger"
              onClick={() => this.getReorderedGoods('reset')}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visibleGoods.map((listElem) => (
            <li key={listElem}>{listElem}</li>
          ))}
        </ul>
      </div>
    );
  }
}
