import { PureComponent } from 'react';
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

// Use this function in the render to prepare goods
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

  handleSort = (sortType: SortType) => {
    this.setState({ sortType });
  };

  handleReversed = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  handleParamsReset = () => {
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
            className={classNames(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={() => this.handleSort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            data-sort-by={SortType.LENGTH}
            onClick={() => this.handleSort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.handleReversed}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed)
            ? (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.handleParamsReset}
              >
                Reset
              </button>
            )
            : null}
        </div>

        <ul>
          {visibleGoods.map(good => (
            <li key={good} data-cy="Good">{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
