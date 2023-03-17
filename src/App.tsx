import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import goodsFromServer from './api/goods';

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

  visibleGoods.sort((prev, curr) => {
    switch (sortType) {
      case (SortType.ALPHABET):
        return prev.localeCompare(curr);

      case (SortType.LENGTH):
        return prev.length - curr.length;

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
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverseButton = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  resetedButton = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  sortByAlphabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const isReseted = (sortType !== SortType.NONE || isReversed);

    const goods = getReorderedGoods(
      goodsFromServer,
      {
        isReversed, sortType,
      },
    );

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
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-info',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-info',
              {
                'is-light': !isReversed,
              },
            )}
            onClick={this.reverseButton}
          >
            Reverse
          </button>

          {isReseted && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetedButton}
            >
              Reset
            </button>
          )}

        </div>

        <ul>
          <ul>
            {goods.map((good) => {
              return (
                <li data-cy="Good" key={uuidv4()}>
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
