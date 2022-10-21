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
      case 1:
        return item1.localeCompare(item2);

      case 2:
        return item1.length - item2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    return visibleGoods.reverse();
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
    sortType: 0,
  };

  sortAlphabet = () => {
    this.setState({ sortType: 1 });
  };

  sortLength = () => {
    this.setState({ sortType: 2 });
  };

  reverseItems = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  resetList = () => {
    this.setState({
      isReversed: false,
      sortType: 0,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const reorderedGoods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== 1 },
            )}
            onClick={this.sortAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== 2 },
            )}
            onClick={this.sortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': !isReversed },
            )}
            onClick={this.reverseItems}
          >
            Reverse
          </button>

          {(isReversed || sortType !== 0)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.resetList}
              >
                Reset
              </button>
            )}

        </div>

        <ul>
          <ul>
            {reorderedGoods.map(good => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
