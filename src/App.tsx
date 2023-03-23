import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

import GoodsList from './components/GoodsList/GoodsList';

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

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  if (sortType !== 0) { // Check if sortType is not default 0 (NONE value)
    if (sortType === 1) { // sortType[1] === ALPHABET
      visibleGoods.sort(
        (goodOne, goodAnother) => goodOne.localeCompare(goodAnother),
      );
    } else { // sortType[2] === LENGTH
      visibleGoods.sort(
        (goodOne, goodAnother) => goodOne.length - goodAnother.length,
      );
    }
  }

  return !isReversed
    ? visibleGoods
    : visibleGoods.reverse();
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const {
      isReversed: isRev,
      sortType: sortBy,
    } = this.state;

    const options = {
      sortType: sortBy || SortType.NONE,
      isReversed: isRev || false,
    };

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              classNames('button', 'is-info', { 'is-light': sortBy !== 1 })
            }
            onClick={() => this.setState({ sortType: SortType.ALPHABET })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              classNames('button', 'is-success', { 'is-light': sortBy !== 2 })
            }
            onClick={() => this.setState({ sortType: SortType.LENGTH })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              classNames('button', 'is-warning', { 'is-light': !isRev })
            }
            onClick={() => this.setState(
              (prevState) => ({ isReversed: !prevState.isReversed }),
            )}
          >
            Reverse
          </button>

          {(isRev || sortBy !== 0)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={() => this.setState({
                  sortType: SortType.NONE,
                  isReversed: false,
                })}
              >
                Reset
              </button>
            )}
        </div>

        <ul>
          <GoodsList goods={getReorderedGoods(
            goodsFromServer,
            options,
          )}
          />
        </ul>
      </div>
    );
  }
}
