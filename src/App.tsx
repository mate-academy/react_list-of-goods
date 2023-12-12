import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

const goodsFromServer = [
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

interface AppState {
  sortType: SortType;
  isReversed: boolean;
}

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

class App extends Component<{}, AppState> {
state = {
  sortType: SortType.NONE,
  isReversed: false,
};

  handleSortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleSortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReverse = () => {
    this.setState(prevState => ({ isReversed: !prevState.isReversed }));
  };

  handleReset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  getReorderedGoods = (goods: string[],
    { sortType, isReversed }: AppState) => {
    const visibleGoods = [...goods];

    if (sortType === SortType.ALPHABET) {
      visibleGoods.sort();
    } else if (sortType === SortType.LENGTH) {
      visibleGoods.sort((a, b) => a.length - b.length);
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  };

  render() {
    const { sortType, isReversed } = this.state;
    const visibleGoods
    = this.getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (
      <div >
        <button
          type="button"
          onClick={this.handleSortAlphabetically}
          className={sortType === SortType.ALPHABET
            ? 'button is-info' : 'button is-info is-light'}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.handleSortByLength}
          className={sortType === SortType.LENGTH
            ? 'button is-success' : 'button is-success is-light'}
        >
          Sort by length
        </button>
        <button
          type="button"
          onClick={this.handleReverse}
          className={isReversed
            ? 'button is-warning' : 'button is-warning is-light'}
        >
          Reverse
        </button>
        {(sortType !== SortType.NONE || isReversed) && (
          <button
            type="button"
            onClick={this.handleReset}
            className="button is-danger is-light"
          >
            Reset
          </button>
        )}
        <ul >
          {visibleGoods.map(good => <li key={good} data-cy="Good">{good}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
