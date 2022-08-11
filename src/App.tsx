/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import 'bulma/css/bulma.min.css';
import { ChangeEvent, Component } from 'react';
import cn from 'classnames';

const goodsFromServer = [
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
  ALPABET,
  LENGTH,
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  isSortAlphabet: boolean,
  isSortLength: boolean,
  sortType: SortType,
  valueMinLensthGood: number,
};

const getReorderedGoods = (
  goods: string[],
  sortBy: SortType,
  isRevers: boolean,
  valueSelect: number,
): string[] => {
  const visibleGoods = goods
    .filter(good => good.length >= valueSelect);

  if (sortBy === SortType.ALPABET) {
    visibleGoods.sort((a, b) => b.localeCompare(a));
  }

  if (sortBy === SortType.LENGTH) {
    visibleGoods.sort((a, b) => b.length - a.length);
  }

  if (!isRevers) {
    visibleGoods.reverse();
  }

  return visibleGoods;
};

export class App extends Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    isSortAlphabet: false,
    isSortLength: false,
    sortType: SortType.NONE,
    valueMinLensthGood: 1,
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  sortByAlpabet = () => {
    this.setState(({ isSortAlphabet }) => ({
      sortType: SortType.ALPABET,
      isSortAlphabet: !(isSortAlphabet),
      isSortLength: false,
    }));
  };

  sortByLength = () => {
    this.setState(({ isSortLength }) => ({
      sortType: SortType.LENGTH,
      isSortLength: !(isSortLength),
      isSortAlphabet: false,
    }));
  };

  reverse = () => {
    this.setState((state) => ({ isReversed: !state.isReversed }));
  };

  reset = () => {
    this.setState(
      {
        sortType: SortType.NONE,
        isReversed: false,
        isSortAlphabet: false,
        isSortLength: false,
        valueMinLensthGood: 1,
      },
    );
  };

  handleChangeValueLength = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ valueMinLensthGood: Number(event.target.value) });
  };

  render() {
    const {
      isReversed,
      isStarted,
      isSortLength,
      isSortAlphabet,
      sortType,
      valueMinLensthGood,
    } = this.state;

    const positionsSelect = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const resultGoods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
      valueMinLensthGood,
    );

    return (
      <div className="App level">

        {!isStarted && (
          <button
            type="button"
            className="button is-warning"
            onClick={() => this.start()}
          >
            Start
          </button>
        )}

        {isStarted
          && (
            <>
              <div className="button-wrapper">
                <button
                  type="button"
                  className={cn(
                    'button',
                    'is-success',
                    { 'is-light': isSortAlphabet },
                  )}
                  onClick={() => this.sortByAlpabet()}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className={cn(
                    'button',
                    'is-success',
                    { 'is-light': isSortLength },
                  )}
                  onClick={() => this.sortByLength()}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className={cn(
                    'button',
                    'is-success',
                    { 'is-light': isReversed },
                  )}
                  onClick={() => this.reverse()}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="button is-success"
                  onClick={() => this.reset()}
                >
                  Reset
                </button>
              </div>

              <ul className="Goods">
                { resultGoods.map(good => (
                  <li className="Goods__item" key={good}>{good}</li>
                ))}
              </ul>
              <span className="titleSelect">Filterd by name length:</span>
              <select
                name="select"
                value={this.state.valueMinLensthGood}
                onChange={this.handleChangeValueLength}
              >
                { positionsSelect.map(position => (
                  <option key={position} value={position}>{position}</option>))}
              </select>
            </>
          )}
      </div>
    );
  }
}
