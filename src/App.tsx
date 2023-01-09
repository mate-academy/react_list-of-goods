import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((good1, good2) => good1.length - good2.length);
      break;

    default:
      break;
  }

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
    sortType: SortType.NONE,
    isReversed: false,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const goodsToDisplay = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button', 'is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', 'is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button', 'is-warning', {
              'is-light': !isReversed,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(sortType || isReversed) && (
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
          {goodsToDisplay.map(word => {
            return (
              <li data-cy="Good" key={word}>
                {word}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
