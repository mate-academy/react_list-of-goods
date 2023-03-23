import { PureComponent } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { Good } from './components/Good/Good';

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
        case SortType.ALPHABET:
          return good1.localeCompare(good2);

        case SortType.LENGTH:
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
    const canReset = sortType !== SortType.NONE || isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
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
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.handleLengthSort}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {canReset && (
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
          {visibleGoods.map(good => (
            <Good good={good} key={good} />
          ))}
        </ul>
      </div>
    );
  }
}
