import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import goodsFromServer from './server/goodsFromServer.json';

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

type State = {
  sortType: SortType;
  isReversed: boolean;
};

type ReorderOptions = {
  sortType: SortType;
  isReversed: boolean;
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return g1.localeCompare(g2);

      case SortType.LENGTH:
        return g1.length - g2.length;

      case SortType.NONE:
      default:
        return 0;
    }
  });

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

  eventSort = (type: SortType) => {
    switch (type) {
      case SortType.NONE:
        this.setState({
          sortType: SortType.NONE,
          isReversed: false,
        });
        break;

      case SortType.ALPHABET:
      case SortType.LENGTH:
        this.setState({
          sortType: type,
        });
        break;

      default:
        break;
    }
  };

  eventReverse = () => {
    this.setState((state) => {
      if (state.sortType !== SortType.NONE) {
        return {
          isReversed: !state.isReversed,
        };
      }

      return {
        isReversed: !state.isReversed,
      };
    });
  };

  render() {
    const isReset
    = this.state.sortType !== SortType.NONE || this.state.isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button', 'is-info', {
              'is-light': this.state.sortType !== SortType.ALPHABET,
            })}
            onClick={() => this.eventSort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', 'is-success', {
              'is-light': this.state.sortType !== SortType.LENGTH,
            })}
            onClick={() => this.eventSort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button', 'is-warning', {
              'is-light': !this.state.isReversed,
            })}
            onClick={this.eventReverse}
          >
            Reverse
          </button>

          {isReset
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.eventSort(SortType.NONE)}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {getReorderedGoods(goodsFromServer, this.state).map((good) => (
            <li data-cy="Good" key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
