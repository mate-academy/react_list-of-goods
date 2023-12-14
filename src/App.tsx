import cn from 'classnames';
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

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((good1, good2) => {
    if (sortType === SortType.ALPHABET) {
      return good1.localeCompare(good2);
    }

    if (sortType === SortType.LENGTH) {
      return good1.length - good2.length;
    }

    return 0;
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  const renderedGoods = visibleGoods.map((good) => (
    <li
      data-cy="Good"
      key={good}
    >
      {good}
    </li>
  ));

  return renderedGoods;
}

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  }

  sortAlphabetically = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  }

  render() {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn(
              'button',
              'is-success',
              { 'is-light': !isReversed },
            )}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {
            (isReversed || sortType !== SortType.NONE)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.reset}
              >
                Reset
              </button>
            )
          }
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, { isReversed, sortType })}
          </ul>
        </ul>
      </div>
    );
  }
}
