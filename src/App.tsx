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

  visibleGoods.sort((item1, item2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return item1.localeCompare(item2);

      case SortType.LENGTH:
        return item1.length - item2.length;

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

  changeSortMethod = (sortType: SortType) => {
    this.setState({
      sortType,
    });
  };

  reverseTheList = (isReversed: boolean) => {
    this.setState({
      isReversed,
    });
  };

  render() {
    const goodsToRender = getReorderedGoods(goodsFromServer, this.state);
    const { sortType: currentSortType, isReversed } = this.state;
    const newReverse = !isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': currentSortType !== SortType.ALPHABET },
            )}
            onClick={() => this.changeSortMethod(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': currentSortType !== SortType.LENGTH },
            )}
            onClick={() => this.changeSortMethod(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={() => this.reverseTheList(newReverse)}
          >
            Reverse
          </button>

          {(currentSortType !== SortType.NONE || isReversed === true)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={() => {
                  this.changeSortMethod(SortType.NONE);
                  this.reverseTheList(false);
                }}
              >
                Reset
              </button>
            )}
        </div>

        <ul>
          <ul>
            {goodsToRender.map(item => {
              return (
                <li data-cy="Good" key={item}>{item}</li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  }
}
