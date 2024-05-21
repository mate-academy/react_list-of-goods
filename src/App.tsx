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
  sortType: SortType;
  isReversed: boolean;
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  let visibleGoods = [...goods];

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

  if (isReversed) {
    visibleGoods = visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean;
  sortType: SortType;
};

const defaultState: State = {
  isReversed: false,
  sortType: SortType.NONE,
};

export class App extends React.Component<{}, State> {
  state: State = defaultState;

  reverseOrder = () => {
    this.setState(state => {
      return {
        isReversed: !state.isReversed,
      };
    });
  };

  sortGoods = (sortType: SortType) => {
    this.setState({
      sortType: sortType,
    });
  };

  sortReset = () => {
    this.setState(defaultState);
  };

  stateChanged = () => {
    return (
      this.state.isReversed !== defaultState.isReversed ||
      this.state.sortType !== defaultState.sortType
    );
  };

  render() {
    const { isReversed, sortType } = this.state;

    const reorderedGoods = getReorderedGoods(goodsFromServer, {
      isReversed,
      sortType,
    });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            onClick={() => this.sortGoods(SortType.ALPHABET)}
            className={classNames('button', 'is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={() => this.sortGoods(SortType.LENGTH)}
            className={classNames('button', 'is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.reverseOrder}
            className={`button is-warning ${isReversed ? '' : 'is-light'}`}
          >
            Reverse
          </button>

          {this.stateChanged() && (
            <button
              type="button"
              onClick={this.sortReset}
              className="button is-danger is-light"
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {reorderedGoods.map((good, index) => (
            <li key={index} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
