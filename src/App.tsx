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

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    default:
      break;
  }

  return isReversed ? visibleGoods.reverse() : visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  changeSatate(typeMove?: string, typeSort?: SortType) {
    if (typeMove === 'sort' && typeSort === SortType.ALPHABET) {
      return this.setState((prev: State) => {
        return {
          ...prev,
          sortType: SortType.ALPHABET,
        };
      });
    }

    if (typeMove === 'sort' && typeSort === SortType.LENGTH) {
      return this.setState((prev: State) => {
        return {
          ...prev,
          sortType: SortType.LENGTH,
        };
      });
    }

    if (typeMove === 'reverse' && !typeSort) {
      return this.setState((prev: State) => {
        return {
          ...prev,
          isReversed: !prev.isReversed,
        };
      });
    }

    return this.setState((prev: State) => {
      return {
        ...prev,
        sortType: SortType.NONE,
        isReversed: false,
      };
    });
  }

  render(): React.ReactNode {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={() => this.changeSatate('sort', SortType.ALPHABET)}
            className={
              classNames('button is-info', {
                'is-light': this.state.sortType !== SortType.ALPHABET,
              })
            }
            type="button"
          >
            Sort alphabetically
          </button>

          <button
            onClick={() => this.changeSatate('sort', SortType.LENGTH)}
            className={
              classNames('button is-info', {
                'is-light': this.state.sortType !== SortType.LENGTH,
              })
            }
            type="button"
          >
            Sort by length
          </button>

          <button
            onClick={() => this.changeSatate('reverse')}
            className={
              classNames('button is-warning', {
                'is-light': !this.state.isReversed,
              })
            }
            type="button"
          >
            Reverse
          </button>

          {this.state.sortType || this.state.isReversed ? (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.changeSatate()}
            >
              Reset
            </button>
          ) : ''}
        </div>

        <ul>
          {getReorderedGoods(goodsFromServer, this.state).map(good => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
