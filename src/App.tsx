import React from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';
import { GoodsList } from './Components/GoodsList';

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

type State = {
  sortType: SortType,
  isReversed: boolean,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleClickSortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleClickSortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleClickReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleClickReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

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
            onClick={this.handleClickSortByAlphabet}
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
            onClick={this.handleClickSortByLength}
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
            onClick={this.handleClickReverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleClickReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <GoodsList goods={visibleGoods} />
        </ul>
      </div>
    );
  }
}
