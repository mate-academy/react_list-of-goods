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

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends React.Component<{}, State> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortByAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLenth = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  reverse = () => {
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
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.sortByAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.sortByLenth}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed)
            ? (
              <button
                type="button"
                className={classNames('button is-info',
                  { 'is-light': sortType !== SortType.NONE })}
                onClick={this.reset}
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
