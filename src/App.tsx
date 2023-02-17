import React from 'react';
import classNames from 'classnames';
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

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

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

  changeSatate(typeMove?: string, typeSort?: string) {
    if (typeMove === 'sort') {
      if (typeSort === 'alpha') {
        return this.setState((prev: State) => {
          return {
            ...prev,
            sortType: SortType.ALPHABET,
          };
        });
      }

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

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              classNames('button is-info', {
                'is-light': this.state.sortType !== SortType.ALPHABET,
              })
            }
            onClick={() => this.changeSatate('sort', 'alpha')}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              classNames('button is-success', {
                'is-light': this.state.sortType !== SortType.LENGTH,
              })
            }
            onClick={() => this.changeSatate('sort', 'length')}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              classNames('button is-warning', {
                'is-light': !this.state.isReversed,
              })
            }
            onClick={() => this.changeSatate('reverse')}
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
          {getReorderedGoods(goodsFromServer, this.state)
            .map((el: string) => {
              return <li key={el} data-cy="Good">{el}</li>;
            })}

        </ul>
      </div>
    );
  }
}
