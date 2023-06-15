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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: State,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((product1, product2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return product1.localeCompare(product2);
      case SortType.LENGTH:
        return product1.length - product2.length;
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
  sortType: SortType,
  isReversed: boolean,
};

export class App extends React.Component<{}, State> {
  state: State = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  alphabetSort = () => {
    return this.setState({ sortType: SortType.ALPHABET });
  };

  lengthSort = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const sortedList = getReorderedGoods(
      goodsFromServer,
      this.state,
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': this.state.sortType !== SortType.ALPHABET,
            })}
            onClick={this.alphabetSort}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success', {
              'is-light': this.state.sortType !== SortType.LENGTH,
            })}
            onClick={this.lengthSort}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning', {
              'is-light': this.state.isReversed !== true,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {
            this.state.sortType !== SortType.NONE
            || this.state.isReversed === true
              ? (
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={this.reset}
                >
                  Reset
                </button>
              )
              : true
          }
        </div>

        <ul>
          {sortedList.map(product => (
            <li data-cy="Good" key={product}>
              {product}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
