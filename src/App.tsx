/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import 'bulma/css/bulma.min.css';
import { ChangeEvent, Component } from 'react';

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
  sortType: SortType,
  value: number,
};

export class App extends Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
    value: 1,
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  sortByAlpabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState((state) => ({ isReversed: !state.isReversed }));
  };

  reset = () => {
    this.setState(
      {
        sortType: SortType.NONE,
        isReversed: false,
        value: 1,
      },
    );
  };

  handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ value: Number(event.target.value) });
  };

  render() {
    const {
      isReversed,
      isStarted,
      sortType,
      value,
    } = this.state;

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
                  className="button is-success"
                  onClick={() => this.sortByAlpabet()}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button is-success"
                  onClick={() => this.sortByLength()}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="button is-success"
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
                { getReorderedGoods(
                  goodsFromServer,
                  sortType,
                  isReversed,
                  value,
                ).map(good => (
                  <li className="Goods__item" key={good}>{good}</li>
                ))}
              </ul>
              <span className="titleSelect">Filterd by name length:</span>
              <select
                name="select"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </>
          )}
      </div>
    );
  }
}
