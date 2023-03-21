import { PureComponent } from 'react';
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
  NONE = 'NONE',
  ALPHABET = 'ALPHABET',
  LENGTH = 'LENGTH',
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends PureComponent <{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleAlphabetSort = () => (
    this.setState(state => ({
      ...state,
      sortType: SortType.ALPHABET,
    }))
  );

  handleLengthSort = () => (
    this.setState({
      sortType: SortType.LENGTH,
    })
  );

  handleReverse = () => (
    this.setState(state => ({
      isReversed: !state.isReversed,
    }))
  );

  handleReset = () => (
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    })
  );

  getReorderedGoods = (
    goods: string[],
    { sortType, isReversed }: ReorderOptions,
  ) => {
    const visibleGoods = [...goods];

    visibleGoods.sort((good1, good2) => {
      switch (sortType) {
        case 'ALPHABET':
          return good1.localeCompare(good2);

        case 'LENGTH':
          return good1.length - good2.length;

        default:
          return 0;
      }
    });

    return isReversed ? visibleGoods.reverse() : visibleGoods;
  };

  render() {
    const visibleGoods = this.getReorderedGoods(
      goodsFromServer,
      this.state,
    );

    const { sortType, isReversed } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              { 'is-light': sortType !== 'ALPHABET' },
            )}
            onClick={this.handleAlphabetSort}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              { 'is-light': sortType !== 'LENGTH' },
            )}
            onClick={this.handleLengthSort}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              { 'is-light': !isReversed },
            )}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {
            (sortType !== 'NONE' || isReversed) && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.handleReset}
              >
                Reset
              </button>
            )
          }
        </div>

        <ul>
          {
            visibleGoods.map(good => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
