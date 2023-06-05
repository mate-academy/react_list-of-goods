import { PureComponent } from 'react';
import cn from 'classnames';
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

export class App extends PureComponent<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  onClickSort = (sortType: SortType) => {
    switch (sortType) {
      case SortType.ALPHABET:
        this.setState({
          sortType: SortType.ALPHABET,
        });

        break;

      case SortType.LENGTH:
        this.setState({
          sortType: SortType.LENGTH,
        });

        break;

      default:
        break;
    }
  };

  handleClickReverse = () => (
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }))
  );

  handleClickReset = () => (
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    })
  );

  render() {
    const { isReversed, sortType } = this.state;
    const isResetVisible = sortType !== SortType.NONE || isReversed;

    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button',
              'is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
            onClick={() => this.onClickSort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button',
              'is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={() => this.onClickSort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn(
              'button',
              'is-warning',
              {
                'is-light': !isReversed,
              },
            )}
            onClick={this.handleClickReverse}
          >
            Reverse
          </button>

          {isResetVisible && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleClickReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visibleGoods.map((good) => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
