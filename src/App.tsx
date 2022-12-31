import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

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
  NONE = 'NONE',
  ALPHABET = 'ALPHABET',
  LENGTH = 'LENGTH',
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

export class App extends React.Component<{}, ReorderOptions> {
  state: ReorderOptions = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleAlphabetSort = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleLengthSort = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  getReorderedGoods = (
    goods: string[],
    { sortType, isReversed }: ReorderOptions,
  ) => {
    const visibleGoods = [...goods];

    visibleGoods.sort((good1, good2) => {
      switch (sortType) {
        case 'ALPHABET':
          return (good1.localeCompare(good2));

        case 'LENGTH':
          return (good1.length - good2.length);

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  };

  render() {
    const { sortType, isReversed } = this.state;

    const reorderedGoods = this.getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              sortType === 'ALPHABET'
                ? 'button is-info'
                : 'button is-info is-light'
            }
            onClick={this.handleAlphabetSort}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              sortType === 'LENGTH'
                ? 'button is-success'
                : 'button is-success is-light'
            }
            onClick={this.handleLengthSort}
          >
            Sort by length
          </button>
          <button
            type="button"
            className={
              isReversed
                ? 'button is-warning'
                : 'button is-warning is-light'
            }
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {(isReversed || sortType !== SortType.NONE) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {reorderedGoods.map(good => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
