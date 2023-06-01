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
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortAlphabetically = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  handleSortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  handleReverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  handleReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const goodsToDisplay = [...goodsFromServer];

    const isOriginalOrder = !isReversed && sortType === SortType.NONE;

    const reverseButtonClasses = `button is-warning ${isReversed ? '' : 'is-light'}`;

    if (sortType === SortType.ALPHABET) {
      goodsToDisplay.sort();
    } else if (sortType === SortType.LENGTH) {
      goodsToDisplay.sort((a, b) => a.length - b.length);
    }

    if (isReversed) {
      goodsToDisplay.reverse();
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${sortType === SortType.ALPHABET ? '' : 'is-light'}`}
            onClick={this.handleSortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${sortType === SortType.LENGTH ? '' : 'is-light'}`}
            onClick={this.handleSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={reverseButtonClasses}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {!isOriginalOrder && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleReset}
            >
              Reset
            </button>
          )}
        </div>
        <ul>
          {goodsToDisplay.map(good => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
