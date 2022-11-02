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
  NONE = 'none',
  ALPHABET = 'alphabet',
  LENGTH = 'length',
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

  switch (true) {
    case sortType === SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;

    case sortType === SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
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

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverseGoods = () => {
    this.setState(state => (
      {
        ...state,
        isReversed: !state.isReversed,
      }
    ));
  };

  sortBy = (type: SortType) => {
    this.setState(state => (
      {
        ...state,
        sortType: type,
      }
    ));
  };

  reset = () => {
    this.setState(state => (
      {
        ...state,
        isReversed: false,
        sortType: SortType.NONE,
      }
    ));
  };

  render() {
    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info',
              { 'is-light': !(this.state.sortType === 'alphabet') })}
            onClick={() => {
              this.sortBy(SortType.ALPHABET);
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success',
              { 'is-light': !(this.state.sortType === 'length') })}
            onClick={() => {
              this.sortBy(SortType.LENGTH);
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning',
              { 'is-light': !this.state.isReversed })}
            onClick={this.reverseGoods}
          >
            Reverse
          </button>
          {
            (this.state.sortType !== 'none' || this.state.isReversed) && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.reset}
              >
                Reset
              </button>
            )
          }
        </div>

        <ul>
          {visibleGoods.map(good => (
            <li key={good} data-cy="Good">{good}</li>))}
        </ul>
      </div>
    );
  }
}
