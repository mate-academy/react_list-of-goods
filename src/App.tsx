/* eslint-disable react/no-access-state-in-setstate */
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

export class App extends React.PureComponent<{}, ReorderOptions> {
  state = {
    isReversed: false,
    sortType: SortType.NONE as SortType,
  };

  getReorderedGoods = (
    goods: string[],
    { sortType, isReversed }: ReorderOptions,
  ) => {
    const visibleGoods = [...goods];

    // if (sortType === SortType.ALPHABET) {
    //   visibleGoods.sort();
    // }

    // if (sortType === SortType.LENGTH) {
    //   visibleGoods.sort((a, b) => a.length - b.length);
    // }

    // if (isReversed) {
    //   visibleGoods.reverse();
    // }

    visibleGoods.sort((a, b) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return a.localeCompare(b);
        case SortType.LENGTH:
          return a.length - b.length;
        default:
          return SortType.NONE;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  };

  sortAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    // let visibleGoods = [...goodsFromServer];
    const visibleGoods = this.getReorderedGoods(goodsFromServer, this.state);

    // if (sortType === SortType.ALPHABET) {
    //   visibleGoods = this.getReorderedGoods(goodsFromServer,
    //     { sortType: SortType.ALPHABET, isReversed });
    // } else if (sortType === SortType.LENGTH) {
    //   visibleGoods = this.getReorderedGoods(goodsFromServer,
    //     { sortType: SortType.LENGTH, isReversed });
    // }

    // if (isReversed) {
    //   visibleGoods = this.getReorderedGoods(goodsFromServer,
    //     { sortType, isReversed: true });
    // }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={sortType === SortType.ALPHABET
              ? 'button is-info'
              : 'button is-info is-light'}
            onClick={this.sortAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={sortType === SortType.LENGTH
              ? 'button is-success'
              : 'button is-success is-light'}
            onClick={this.sortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={isReversed === true
              ? 'button is-warning'
              : 'button is-warning is-light'}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(isReversed || sortType !== SortType.NONE) && (
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
          {visibleGoods.map(item => (
            <li data-cy="Good" key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
