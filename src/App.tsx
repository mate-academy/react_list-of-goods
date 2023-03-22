import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { GoodsList } from './components/GoodsList';

export const goodsFromServer: string[] = [
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
): string[] {
  const visibleGoods = [...goods]
    .sort((previousGood, currentGood) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return previousGood.localeCompare(currentGood);

        case SortType.LENGTH:
          return previousGood.length - currentGood.length;

        default:
          return 0;
      }
    });

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const shouldSortList = sortType !== SortType.NONE || isReversed;
    const reorderedGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
            onClick={() => this.setState(
              { sortType: SortType.ALPHABET },
            )}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={() => this.setState(
              { sortType: SortType.LENGTH },
            )}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              {
                'is-light': !isReversed,
              },
            )}
            onClick={() => this.setState(previousState => ({
              isReversed: !previousState.isReversed,
            }))}
          >
            Reverse
          </button>

          {
            shouldSortList
              && (
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={this.handleReset}
                >
                  Reset
                </button>
              )
          }
        </div>

        <GoodsList goods={reorderedGoods} />
      </div>
    );
  }
}
