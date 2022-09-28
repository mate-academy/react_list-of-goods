import { Component } from 'react';
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

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort();
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((el1, el2) => el1.length - el2.length);
  }

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
};

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortAlphabetic = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  sortLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  sortReverse = () => {
    if (this.state.isReversed) {
      this.setState({
        isReversed: false,
      });
    } else {
      this.setState({
        isReversed: true,
      });
    }
  };

  sortReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;

    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className="button is-info is-light"
            onClick={this.sortAlphabetic}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button is-success is-light"
            onClick={this.sortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="button is-warning is-light"
            onClick={this.sortReverse}
          >
            Reverse
          </button>

          {(isReversed || !!sortType)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.sortReset}
              >
                Reset
              </button>
            )}

        </div>
        <ul>
          <ul>
            {visibleGoods.map(el => (
              <li data-cy="Good" key={el}>{el}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
