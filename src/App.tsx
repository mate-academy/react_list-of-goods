import React from 'react';
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

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort();
      break;

    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;

    default:
      break;
  }

  if (isReversed) {
    return visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handelSortedByAlphabetically = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  handelSortedByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  handelReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handelReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const sortedGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button is-info is-large',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.handelSortedByAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button is-success is-large',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.handelSortedByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn(
              'button is-warning is-large',
              { 'is-light': !isReversed },
            )}
            onClick={this.handelReverse}
          >
            Reverse
          </button>

          {(isReversed || sortType !== SortType.NONE)
            ? (
              <button
                type="button"
                className="button is-danger is-large is-light"
                onClick={this.handelReset}
              >
                Reset
              </button>
            )
            : null}

        </div>

        <ul>
          <ul>
            {sortedGoods.map(good => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
