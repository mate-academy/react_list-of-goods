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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort();
      break;

    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;

    default:
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
  state: State = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortAlphabetically = () => {
    this.setState({
      sortType: SortType.ALPHABET,
      isReversed: false,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
      isReversed: false,
    });
  };

  sortReverse = () => {
    this.setState((prevState) => ({
      ...prevState,
      isReversed: !prevState.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const goods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${sortType === SortType.ALPHABET ? '' : 'is-light'}`}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
            className={`button is-success ${sortType === SortType.LENGTH ? '' : 'is-light'}`}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.sortReverse}
            className={`button is-warning ${isReversed ? '' : 'is-light'}`}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.reset}
            className={`button is-danger ${sortType === SortType.NONE ? '' : 'is-light'}`}
          >
            Reset
          </button>
        </div>

        <ul>
          {goods.map((good) => (
            <li key={good} data-cy="Good">{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
