import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import Classname from 'classnames';

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

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return g1.localeCompare(g2);
      case SortType.LENGTH:
        return g1.length - g2.length;
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
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortButtons = (sortBy: SortType) => () => {
    this.setState({ sortType: sortBy });
  };

  handleResetButton = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  handleReverseButton = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  render() {
    const {
      isReversed,
      sortType,
    } = this.state;
    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      {
        sortType,
        isReversed,
      },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={Classname('button is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={this.handleSortButtons(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={Classname('button is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={this.handleSortButtons(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={Classname('button is-warning', {
              'is-light': !isReversed,
            })}
            onClick={this.handleReverseButton}
          >
            Reverse
          </button>

          {(isReversed || sortType !== SortType.NONE) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleResetButton}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visibleGoods.map(
            good => (<li key={good} data-cy="Good">{good}</li>),
          )}
        </ul>
      </div>
    );
  }
}
