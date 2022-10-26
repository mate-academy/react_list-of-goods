import 'bulma/css/bulma.css';
import './App.scss';
import { Component } from 'react';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';

export const goodsFromServer = [
  { name: 'Dumplings', id: uuid() },
  { name: 'Carrot', id: uuid() },
  { name: 'Eggs', id: uuid() },
  { name: 'Ice cream', id: uuid() },
  { name: 'Apple', id: uuid() },
  { name: 'Bread', id: uuid() },
  { name: 'Fish', id: uuid() },
  { name: 'Honey', id: uuid() },
  { name: 'Jam', id: uuid() },
  { name: 'Garlic', id: uuid() },
];

enum SortType {
  NONE,
  ALPABET,
  LENGTH,
}

type Good = {
  name: string;
  id: string;
};

export function getReorderedGoods(
  goods: Good[],
  isReversed: boolean,
  sortType: SortType,
) {
  const reorderedGoods = [...goods];

  reorderedGoods.sort(({ name: nameA }, { name: nameB }) => {
    switch (sortType) {
      case SortType.ALPABET:
        return nameA.localeCompare(nameB);

      case SortType.LENGTH:
        return nameA.length - nameB.length;

      default:
        return 0;
    }
  });

  return isReversed
    ? reorderedGoods.reverse()
    : reorderedGoods;
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

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  toggleRverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const reorderedGoods = getReorderedGoods(
      goodsFromServer,
      isReversed,
      sortType,
    );

    const isChanged = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              { 'is-light': sortType !== SortType.ALPABET },
            )}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.toggleRverse}
          >
            Reverse
          </button>

          {isChanged && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {reorderedGoods.map(good => (
              <li key={good.id} data-cy="Good">{good.name}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
