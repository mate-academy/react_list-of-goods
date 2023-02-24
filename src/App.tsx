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

  handleSortEvent = (type: SortType) => {
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

  handleReverseEvent = () => {
    this.setState((state) => {
      return {
        isReversed: !state.isReversed,
      };
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const isReset = sortType !== SortType.NONE || isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button', 'is-info', {
              'is-light': this.state.sortType !== SortType.ALPHABET,
            })}
            onClick={() => this.handleSortEvent(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', 'is-success', {
              'is-light': this.state.sortType !== SortType.LENGTH,
            })}
            onClick={() => this.handleSortEvent(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button', 'is-warning', {
              'is-light': !this.state.isReversed,
            })}
            onClick={this.handleReverseEvent}
          >
            Reverse
          </button>

          {isReset
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.handleSortEvent(SortType.NONE)}
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
