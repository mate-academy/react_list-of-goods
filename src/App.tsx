import { PureComponent } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

const goodsFromServer = [
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

function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((g1, g2) => g1.localeCompare(g2));

      break;
    case SortType.LENGTH:
      visibleGoods.sort((g1, g2) => g1.length - g2.length);

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

export class App extends PureComponent<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortAlp = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortLen = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortRev = () => {
    this.setState(({ isReversed }) => ({ isReversed: !isReversed }));
  };

  sortReset = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const sortedGoods = getReorderedGoods(goodsFromServer, this.state);
    const isReset = sortType !== SortType.NONE || isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              classNames(
                'button',
                'is-info',
                { 'is-light': sortType !== SortType.ALPHABET },
              )
            }
            onClick={this.sortAlp}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              classNames(
                'button',
                'is-success',
                { 'is-light': sortType !== SortType.LENGTH },
              )
            }
            onClick={this.sortLen}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              classNames(
                'button',
                'is-warning',
                { 'is-light': !isReversed },
              )
            }
            onClick={this.sortRev}
          >
            Reverse
          </button>

          {isReset && (
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
          {sortedGoods.map(good => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
