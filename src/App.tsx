import { Component } from 'react';
import classNames from 'classnames';
import { GoodsList } from './components/GoodsList';

import { goodsFromServer } from './data/GoodsFromServer';

import 'bulma/css/bulma.css';

import './App.scss';

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

  visibleGoods.sort((previousGood, currentGood) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return previousGood.localeCompare(currentGood);

      case SortType.LENGTH:
        return previousGood.length - currentGood.length;

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

  sortListByType = (sortType: SortType) => {
    this.setState({ sortType });
  };

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  resetListItems = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const {
      sortType,
      isReversed,
    } = this.state;

    const reorderedGoods = getReorderedGoods(goodsFromServer, this.state);

    const isResetBtn = sortType !== SortType.NONE || isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              classNames(
                'button',
                'is-info',
                {
                  'is-light': sortType !== SortType.ALPHABET,
                },
              )
            }
            onClick={() => (
              this.setState({ sortType: SortType.ALPHABET })
            )}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              classNames(
                'button',
                'is-success',
                {
                  'is-light': sortType !== SortType.LENGTH,
                },
              )
            }
            onClick={() => (
              this.setState({ sortType: SortType.LENGTH })
            )}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              classNames(
                'button',
                'is-warning',
                {
                  'is-light': !isReversed,
                },
              )
            }
            onClick={() => (
              this.setState((state) => (
                { isReversed: !state.isReversed }
              ))
            )}
          >
            Reverse
          </button>

          {isResetBtn && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetListItems}
            >
              Reset
            </button>
          )}
        </div>

        <GoodsList goods={reorderedGoods} />
      </div>
    );
  }
}
