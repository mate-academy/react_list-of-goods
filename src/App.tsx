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
};

// DON'T save goods to the state
type State = {
  isReversed: boolean;
  sortType: SortType;
};

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  getReorderedGoods(goods: string[], { sortType, isReversed }: ReorderOptions) {
    const listOfGoods = [...goods];

    if (sortType === SortType.ALPHABET) {
      listOfGoods.sort((a, b) => a.localeCompare(b));
    }

    if (sortType === SortType.LENGTH) {
      listOfGoods.sort((a, b) => a.length - b.length);
    }

    if (isReversed) {
      listOfGoods.reverse();
    }

    return listOfGoods;
  }

  sortAlphabetically = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  toReverseList = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  toResetList = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const visibleGoods = this.getReorderedGoods(goodsFromServer, this.state);
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              sortType === SortType.ALPHABET
                ? 'button is-info'
                : 'button is-info is-light'
            }
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              sortType === SortType.LENGTH
                ? 'button is-success'
                : 'button is-success is-light'
            }
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              isReversed ? 'button is-warning' : 'button is-warning is-light'
            }
            onClick={this.toReverseList}
          >
            Reverse
          </button>

          <button
            type="button"
            className={
              sortType === SortType.NONE && !isReversed
                ? ''
                : 'button is-danger is-light'
            }
            onClick={this.toResetList}
          >
            {sortType === SortType.NONE && !isReversed ? '' : 'Reset'}
          </button>
        </div>

        <ul>
          {visibleGoods.map(item => (
            <li key={item} data-cy="Good">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
