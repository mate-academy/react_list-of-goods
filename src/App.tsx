/* eslint-disable default-case */
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
  NONE = 'NONE',
  ALPHABET = 'ALPHABET',
  LENGTH = 'LENGTH',
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

  getReorderedGoods = (
    goods: string[],
    { sortType, isReversed }: State,
  ) => {
    const visibleGoods = [...goods];

    visibleGoods.sort((a, b) => {
      switch (sortType) {
        case 'ALPHABET':
          return a.localeCompare(b);

        case 'LENGTH':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    return isReversed ? visibleGoods.reverse() : visibleGoods;
  };

  render() {
    const {
      isReversed,
      sortType,
    } = this.state;

    const visibleGoods = this.getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={() => this.setState({ sortType: SortType.ALPHABET })}
            type="button"
            className={classNames(
              'button',
              'is-info',
              { 'is-light': sortType !== 'ALPHABET' },
            )}
          >
            Sort alphabetically
          </button>

          <button
            onClick={() => this.setState({ sortType: SortType.LENGTH })}
            type="button"
            className={classNames(
              'button',
              'is-success',
              { 'is-light': sortType !== 'LENGTH' },
            )}
          >
            Sort by length
          </button>

          <button
            onClick={() => this.setState(
              state => ({ isReversed: !state.isReversed }),
            )}
            type="button"
            className={classNames(
              'button',
              'is-warning',
              { 'is-light': !isReversed },
            )}

          >
            Reverse
          </button>

          {(sortType === 'NONE' && !isReversed)
            || (
              <button
                onClick={() => this.setState(
                  { sortType: SortType.NONE, isReversed: false },
                )}
                type="button"
                className="button is-danger is-light"
              >
                Reset
              </button>
            )}
        </div>

        <ul>
          {visibleGoods.map(item => (
            <li data-cy="Good" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
