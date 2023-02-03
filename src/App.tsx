import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { goodsFromServer } from './goodsFromServer';
import { GoodList } from './components/GoodList';

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

interface Good {
  id: number;
  name: string;
}

type State = {
  sortType: SortType,
  isReversed: boolean,
};

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

export function getReorderedGoods(
  goods: Good[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((good1, good2) => good1.name.localeCompare(good2.name));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((good1, good2) => (
        good2.name.length - good1.name.length));
      break;

    default: break;
  }

  if (!isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends React.Component<{}, State> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  isAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  isLenth = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  isReset = () => {
    this.setState({ sortType: SortType.NONE });
  };

  isRverse = () => {
    this.setState((state) => ({ isReversed: !state.isReversed }));
  };

  render() {
    const {
      sortType,
      isReversed,
    } = this.state;

    const preparedList = getReorderedGoods(
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
              { 'is-info': sortType !== SortType.ALPHABET },
            )}
            onClick={this.isAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-info': sortType !== SortType.LENGTH },
            )}
            onClick={this.isLenth}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="button is-warning is-light"
            onClick={this.isRverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed)
            ? (
              <button
                type="button"
                className={classNames('button is-info',
                  { 'is-info': sortType !== SortType.NONE })}
                onClick={this.isReset}
              >
                Reset
              </button>
            )
            : '' }
        </div>
        <GoodList goods={preparedList} />
      </div>
    );
  }
}
