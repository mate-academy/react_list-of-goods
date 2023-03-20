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

type State = {
  sortType: SortType,
  isReversed: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    sortType: 0,
    isReversed: false,
  };

  reverse = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.toggle('is-light');
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByLength = () => {
    this.setState({ sortType: 2 });
  };

  sortByAlphabet = () => {
    this.setState({ sortType: 1 });
  };

  resetButton = () => {
    this.setState({ sortType: 0, isReversed: false });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const visibleGoods = [...goodsFromServer];

    visibleGoods.sort((good1, good2) => {
      switch (sortType) {
        case 1:
          return good1.localeCompare(good2);
        case 2:
          return good1.length - good2.length;
        default:
          return 1;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    const isStartArray
      = goodsFromServer.toString() === visibleGoods.toString();

    const buttonReset = (
      <button
        type="button"
        className="button is-danger is-light"
        onClick={this.resetButton}
      >
        Reset
      </button>
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${this.state.sortType === 1 ? '' : 'is-light'}`}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${this.state.sortType === 2 ? '' : 'is-light'}`}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${this.state.isReversed ? '' : 'is-light'}`}
            onClick={this.reverse}
          >
            Reverse
          </button>

          { isStartArray ? '' : buttonReset}

        </div>

        <ul>
          <ul>
            {visibleGoods.map(good => (
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
