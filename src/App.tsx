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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case SortType.LENGTH:
        return g1.length - g2.length;

      case SortType.ALPHABET:
        return g1.localeCompare(g2);

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

interface State {
  goods: string[];
  isReversed: boolean;
  sortBy: SortType;
}

export class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isReversed: false,
    sortBy: SortType.NONE,
  };

  isReversed = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({
      sortBy: SortType.ALPHABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: SortType.LENGTH,
    });
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      isReversed: false,
      sortBy: SortType.NONE,
    });
  };

  render() {
    const { isReversed, goods, sortBy } = this.state;


    const visibleGoods = getReorderedGoods(goods, {
      sortType: sortBy,
      isReversed,
    });

    return (
        <div className="section content">
          <div className="buttons">
            <button
              id="alphabetical"
              type="button"
              className={`button is-warning ${sortBy === SortType.ALPHABET ? '' : 'is-light'}`}
              onClick={this.sortByAlphabet}
            >
              Sort alphabetically
            </button>

            <button
              id="byLength"
              type="button"
              className={`button is-warning ${sortBy === SortType.LENGTH ? '' : 'is-light'}`}
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              id="direction"
              type="button"
              className={`button is-warning ${!isReversed ? 'is-light' : null}`}
              onClick={this.isReversed}
            >
              Reverse
            </button>

            <button
              type="button"
              style={{ display: sortBy !== SortType.NONE || isReversed ? 'block' : 'none' }}
              className='button is-danger is-light'
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
          <ul>
            <>
              {visibleGoods.map(item => (
                <li
                  key={item}
                  data-cy="Good"
                >
                  {item}
                </li>
              ))}
            </>
          </ul>
        </div>
    );
  }
}
