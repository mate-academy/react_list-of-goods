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

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    default:
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state:Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortByAlphab = () => {
    this.setState(() => ({
      sortType: SortType.ALPHABET,
    }));
  };

  handleSortByLength = () => {
    this.setState(() => ({
      sortType: SortType.LENGTH,
    }));
  };

  handleReverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;

    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            onClick={this.handleSortByAlphab}
            className={`button is-info ${
              sortType !== SortType.ALPHABET && 'is-light'
            }`}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.handleSortByLength}
            className={`button is-success ${
              sortType !== SortType.LENGTH && 'is-light'
            }`}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.handleReverse}
            className={`button is-warning ${
              !isReversed && 'is-light'
            }`}
          >
            Reverse
          </button>

          {(isReversed || sortType !== SortType.NONE) && (
            <button
              type="button"
              onClick={this.handleReset}
              className="button is-danger is-light"
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visibleGoods.map(good => (
            <li
              data-cy="Good"
              key={good}
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
