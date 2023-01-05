import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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

  visibleGoods.sort((goodA, goodB) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return goodA.localeCompare(goodB);

      case SortType.LENGTH:
        return goodA.length - goodB.length;

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

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleSortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReversed = () => {
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
    const sortAlphabetCN = cn('button is-info',
      { 'is-light': sortType !== SortType.ALPHABET });
    const sortBylengthCN = cn('button is-success',
      { 'is-light': sortType !== SortType.LENGTH });
    const reverseCN = cn('button is-warning', { 'is-light': !isReversed });

    return (
      <div className="section content">
        <h1 className="title is-1">React List of Goods</h1>
        <div className="wrapper">
          <div className="buttons">
            <button
              type="button"
              className={sortAlphabetCN}
              onClick={this.handleSortAlphabetically}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className={sortBylengthCN}
              onClick={this.handleSortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className={reverseCN}
              onClick={this.handleReversed}
            >
              Reverse
            </button>
            {(sortType !== SortType.NONE || isReversed) && (
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
            {getReorderedGoods(goodsFromServer, this.state)
              .map(good => (
                <li
                  data-cy="Good"
                  key={good}
                >
                  {good}
                </li>
              ))}
          </ul>
        </div>
      </div>

    );
  }
}
