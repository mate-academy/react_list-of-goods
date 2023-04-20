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
  NONE = 'none',
  ALPHABET = 'alphabet',
  LENGTH = 'length',
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

  visibleGoods.sort((prevGood, nextGood) => {
    switch (sortType) {
      case 'none':
        return 0;

      case 'alphabet':
        return prevGood.localeCompare(nextGood);

      case 'length':
        return prevGood.length - nextGood.length;

      default:
        return 0;
    }
  });

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

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  resetGoodsList = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  reverseGoodsList = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  render() {
    const { isReversed, sortType } = this.state;
    const isApdated = sortType !== 'none' || isReversed;
    const listOfGoods = getReorderedGoods(
      goodsFromServer,
      { isReversed, sortType },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className="button is-info is-light"
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button is-success is-light"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="button is-warning is-light"
            onClick={this.reverseGoodsList}
          >
            Reverse
          </button>

          { isApdated && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetGoodsList}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {listOfGoods.map(good => (
            <li data-cy="Good" key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
