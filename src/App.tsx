import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { GoodList } from './Component';

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

  visibleGoods.sort((aGood, bGood) => {
    switch (sortType) {
      case SortType.LENGTH:
        return aGood.length - bGood.length;

      case SortType.ALPHABET:
        return aGood.localeCompare(bGood);

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
  sortType: SortType,
  isReversed: boolean,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  resetSorting = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  reverseSorting = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const {
      sortType,
      isReversed,
    } = this.state;

    const reorderedGoods = getReorderedGoods(goodsFromServer, this.state);
    const resetButtonOn = isReversed || sortType !== SortType.NONE;

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
            onClick={() => (
              this.setState({ sortType: SortType.ALPHABET })
            )}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={() => (
              this.setState({ sortType: SortType.LENGTH })
            )}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              {
                'is-light': !isReversed,
              },
            )}
            onClick={this.reverseSorting}
          >
            Reverse
          </button>

          {resetButtonOn && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetSorting}
            >
              Reset
            </button>
          )}
        </div>

        <GoodList goods={reorderedGoods} />
      </div>
    );
  }
}
