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

  if (sortType !== SortType.NONE) {
    visibleGoods.sort((firstGood, secondGood) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return firstGood.localeCompare(secondGood);
        case SortType.LENGTH:
          return firstGood.length - secondGood.length;
        default:
          return 0;
      }
    });
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

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortChange = (sortType: SortType) => {
    this.setState({
      sortType,
    });
  };

  handleReverseChange = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  resetState = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const goods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
            onClick={() => {
              this.handleSortChange(SortType.ALPHABET);
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={() => {
              this.handleSortChange(SortType.LENGTH);
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              {
                'is-light': !isReversed,
              },
            )}
            onClick={this.handleReverseChange}
          >
            Reverse
          </button>

          {(isReversed || sortType !== SortType.NONE) && (
            <button
              type="button"
              className={classNames(
                'button',
                'is-info',
                'is-light',
              )}
              onClick={this.resetState}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {goods.map(good => (
              <li
                key={good}
                data-cy="Good"
              >
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
