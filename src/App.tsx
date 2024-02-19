import React from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

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

  visibleGoods.sort((itemOne: string, itemTwo: string): number => {
    switch (sortType) {
      case SortType.ALPHABET:
        return itemOne.localeCompare(itemTwo);
      case SortType.LENGTH:
        return itemOne.length - itemTwo.length;
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

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  }

  sortGoods = (sortType: SortType) => () => {
    this.setState({ sortType });
  };

  reversed = () => {
    this.setState(prevState => ({ isReversed: !prevState.isReversed }));
  }

  reset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  }

  render() {
    const goodies = getReorderedGoods(goodsFromServer, this.state);
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': this.state.sortType !== SortType.ALPHABET },
            )}
            onClick={() => this.setState({ sortType: SortType.ALPHABET })}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': this.state.sortType !== SortType.LENGTH },
            )}
            onClick={() => this.setState({ sortType: SortType.LENGTH })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.reversed}
          >
            Reverse
          </button>
          {(isReversed || sortType !== SortType.NONE)
            && (
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
            {goodies.map((good) => {
              return <li data-cy="Good" key={good}>{good}</li>;
            })}
          </ul>
        </ul>
      </div>
    );
  }
}
