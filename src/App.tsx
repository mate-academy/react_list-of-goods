import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import ClassNames from 'classnames';

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

interface ReorderOptions {
  sortType: SortType,
  isReversed: boolean,
}

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return good1.localeCompare(good2);
      case SortType.LENGTH:
        return good1.length - good2.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

interface State {
  isReversed: boolean,
  sortType: SortType,
}

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  alphabeticallySort = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  lengthSort = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const { isReversed, sortType } = this.state;
    const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={ClassNames('button', 'is-info',
              { 'is-light': sortType !== SortType.ALPHABET })}
            onClick={this.alphabeticallySort}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={ClassNames('button', 'is-success',
              { 'is-light': sortType !== SortType.LENGTH })}
            onClick={this.lengthSort}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={ClassNames('button', 'is-warning',
              { 'is-light': !isReversed })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed)
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
            {goods.map(good => {
              return (
                <li data-cy="Good" key={good}>
                  {good}
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  }
}
