import { PureComponent } from 'react';
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
  NONE,
  ALPHABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

export class App extends PureComponent<{}, ReorderOptions> {
  state: ReorderOptions = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortAlphabetically = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  handleSortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  handleReverse = () => {
    this.setState((prevState) => ({
      isReversed: !prevState.isReversed,
    }));
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  getReorderedGoods = (): string[] => {
    const { sortType, isReversed } = this.state;
    let visibleGoods = [...goodsFromServer];

    switch (sortType) {
      case SortType.ALPHABET:
        visibleGoods.sort();

        break;
      case SortType.LENGTH:
        visibleGoods.sort((a, b) => a.length - b.length);

        break;
      default:

        break;
    }

    if (isReversed) {
      visibleGoods = visibleGoods.reverse();
    }

    return visibleGoods;
  };

  render() {
    const { sortType, isReversed } = this.state;
    const isResetBtnVisible = sortType !== SortType.NONE || isReversed;
    const visibleGoods = this.getReorderedGoods();

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              `button is-info ${this.state.sortType === SortType.ALPHABET
                ? ''
                : 'is-light'
              }`
            }
            onClick={this.handleSortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              `button is-success ${this.state.sortType === SortType.LENGTH
                ? ''
                : 'is-light'
              }`
            }
            onClick={this.handleSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              `button is-warning ${this.state.isReversed
                ? ''
                : 'is-light'
              }`
            }
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {isResetBtnVisible && (
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
          {visibleGoods.map((good) => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
