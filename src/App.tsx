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
  sortType: SortType;
  isReversed: boolean;
  isSorted: boolean;
};

export class App extends React.Component<{}, ReorderOptions> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
    isSorted: false,
  };

  getReorderedGoods = (goods: string[]) => {
    // To avoid the original array mutation
    const visibleGoods = [...goods];

    if (this.state.sortType === SortType.ALPHABET) {
      visibleGoods.sort((a, b) => a.localeCompare(b));
    } else if (this.state.sortType === SortType.LENGTH) {
      visibleGoods.sort((a, b) => a.length - b.length);
    }

    if (this.state.isReversed) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  };

  setSortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET, isSorted: true });
  };

  setSortByLength = () => {
    this.setState({ sortType: SortType.LENGTH, isSorted: true });
  };

  toggleReverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
      isSorted: true,
    }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
      isSorted: false,
    });
  };

  render() {
    const goods = this.getReorderedGoods(goodsFromServer);
    const { isSorted } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${isSorted ? '' : 'is-light'}`}
            onClick={this.setSortAlphabetically}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className={`button is-success ${isSorted ? '' : 'is-light'}`}
            onClick={this.setSortByLength}
          >
            Sort by length
          </button>
          <button
            type="button"
            className={`button is-warning ${isSorted ? '' : 'is-light'}`}
            onClick={this.toggleReverse}
          >
            Reverse
          </button>

          {isSorted && (
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
          {goods.map((good, index) => (
            <li data-cy="Good" key={index}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
