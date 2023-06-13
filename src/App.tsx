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

  visibleGoods.sort((firstGood, secondGood) => {
    switch (sortType) {
      case (SortType.ALPHABET):
        return firstGood.localeCompare(secondGood);

      case (SortType.LENGTH):
        return firstGood.length - secondGood.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
  isSortedAlfabetically: boolean,
  isSortedByLength: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
    isSortedAlfabetically: false,
    isSortedByLength: false,
  };

  sortAlphabetically = () => {
    this.setState({
      sortType: SortType.ALPHABET,
      isSortedAlfabetically: true,
      isSortedByLength: false,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
      isSortedAlfabetically: false,
      isSortedByLength: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
      isSortedAlfabetically: false,
      isSortedByLength: false,
    });
  };

  render() {
    const {
      isReversed,
      isSortedAlfabetically,
      isSortedByLength,
      sortType,
    } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${isSortedAlfabetically ? '' : 'is-light'}`}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-info ${isSortedByLength ? '' : 'is-light'}`}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-info ${isReversed ? '' : 'is-light'}`}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {
            (isReversed || isSortedAlfabetically || isSortedByLength)
              ? (
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={this.reset}
                >
                  Reset
                </button>
              )
              : ''
          }

        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, { sortType, isReversed })
              .map(good => (
                <li
                  data-cy="Good"
                  key={good}
                >
                  {good}
                </li>
              ))}
          </ul>
        </ul>
      </div>
    );
  }
}
