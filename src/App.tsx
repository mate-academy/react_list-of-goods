import React from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
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

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((good1, good2) => {
        return good1.localeCompare(good2);
      });
      break;

    case SortType.LENGTH:
      visibleGoods.sort((good1, good2) => {
        return good1.length - good2.length;
      });
      break;

    default:
      break;
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
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  handleSort = (sortBy: SortType) => {
    switch (sortBy) {
      case SortType.ALPHABET:
        this.setState({ sortType: SortType.ALPHABET });
        break;

      case SortType.LENGTH:
        this.setState({ sortType: SortType.LENGTH });
        break;

      default:
        break;
    }
  };

  render() {
    const { isReversed, sortType } = this.state;

    const reorderedGoods = getReorderedGoods(goodsFromServer, this.state);
    const isAvailableButton = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': this.state.sortType !== SortType.ALPHABET },
            )}
            onClick={() => this.handleSort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': this.state.sortType !== SortType.LENGTH },
            )}
            onClick={() => this.handleSort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !this.state.isReversed },
            )}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {isAvailableButton && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul className="list">
          {reorderedGoods.map(good => (
            <li className="list__item" key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
