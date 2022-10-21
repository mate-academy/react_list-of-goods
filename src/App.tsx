import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import React, { Component } from 'react';
import { Good } from './react-app-env';

export const goodsFromServer = [
  { name: 'Dumplings', id: 1 },
  { name: 'Carrot', id: 2 },
  { name: 'Eggs', id: 3 },
  { name: 'Ice cream', id: 4 },
  { name: 'Apple', id: 5 },
  { name: 'Bread', id: 6 },
  { name: 'Fish', id: 7 },
  { name: 'Honey', id: 8 },
  { name: 'Jam', id: 9 },
  { name: 'Garlic', id: 10 },
];

enum SortType {
  NONE,
  ALPABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

export function getReorderedGoods(
  goods: Good[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((prevGoods, currGoods) => {
    switch (sortType) {
      case SortType.ALPABET:
        return prevGoods.name.localeCompare(currGoods.name);

      case SortType.LENGTH:
        return prevGoods.name.length - currGoods.name.length;

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

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const originalOrder = sortType !== SortType.NONE || isReversed !== false;
    const reorderedGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              {
                'is-light': sortType !== SortType.ALPABET,
              },
            )}
            onClick={this.sortByAlphabet}
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
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              {
                'is-light': isReversed === false,
              },
            )}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {originalOrder
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {reorderedGoods.map(({ name, id }) => (
            <li data-cy="Good" key={id}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
