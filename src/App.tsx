import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return good1.localeCompare(good2);

      case SortType.LENGTH:
        return good1.length - good2.length;

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
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortingAlphabetically = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  handleSortingByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  handleReversing = () => {
    this.setState({
      isReversed: true,
    });
  };

  handleResetting = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const {
      isReversed,
      sortType,
    } = this.state;

    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.handleSortingAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.handleSortingByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.handleReversing}
          >
            Reverse
          </button>

          {(isReversed || sortType !== SortType.NONE)
            ? (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.handleResetting}
              >
                Reset
              </button>
            )
            : null}
        </div>

        <ul>
          {visibleGoods.map((good) => (
            <li data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
