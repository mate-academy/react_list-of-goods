import { Component } from 'react';
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

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((good1, good2) => good1.length - good2.length);
      break;
    default:
      visibleGoods.map(el => el);
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

  handleSortAlphabetic = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  handleSortLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  handleSortReverse = () => {
    this.setState(state => (
      { isReversed: !state.isReversed }
    ));
  };

  handleReset = () => {
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
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.handleSortAlphabetic}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'button is-success is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.handleSortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'button is-warning is-light': !isReversed },
            )}
            onClick={this.handleSortReverse}
          >
            Reverse
          </button>

          {(isReversed || !!sortType)
            && (
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
          <ul>
            {visibleGoods.map(good => (
              <li data-cy="Good" key={good}>{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
