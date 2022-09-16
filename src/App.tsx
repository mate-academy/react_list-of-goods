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
  ALPABET,
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
      case SortType.ALPABET:

        return good1.localeCompare(good2);
      case SortType.LENGTH:

        return good1.length - good2.length;
      case SortType.NONE:

        return 0;

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

type Props = {};

export class App extends Component<Props, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortAlphabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  handleSortLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleRevers = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleReset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const curentGoods = getReorderedGoods(goodsFromServer, this.state);
    const {
      isReversed,
      sortType,
    } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'button is-info is-light': sortType !== SortType.ALPABET },
            )}
            onClick={this.handleSortAlphabet}
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
            onClick={this.handleRevers}
          >
            Reverse
          </button>
          {(sortType !== SortType.NONE || isReversed !== false)
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
            {curentGoods.map((good) => (
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
