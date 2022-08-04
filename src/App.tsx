/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from 'react';
import './App.scss';

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

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
  minLength: number,
) {
  // Not to mutate the original array
  const visibleGoods = goods.filter(good => good.length >= minLength);

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case SortType.ALPABET:
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

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
  minLength: number,
};

export class App extends Component<{}, State> {
  options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
    minLength: this.options[0],
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  alphabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  length = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  revers = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
      minLength: 1,
    });
  };

  minLength = (value: number) => {
    this.setState({ minLength: value });
  };

  render() {
    const {
      isStarted,
      sortType,
      isReversed,
      minLength,
    } = this.state;

    const visibleGoods
      = getReorderedGoods(goodsFromServer, sortType, isReversed, minLength);

    return (
      <div className="App panel is-success">
        {!isStarted ? (
          <button className="button" type="button" onClick={this.start}>
            Start
          </button>
        ) : (
          <>
            <div className="panel-heading">
              <button
                className="button"
                type="button"
                onClick={this.alphabet}
              >
                Sort alphabetically
              </button>

              <button className="button" type="button" onClick={this.length}>
                Sort by length
              </button>

              <button className="button" type="button" onClick={this.revers}>
                Reverse
              </button>

              <button className="button" type="button" onClick={this.reset}>
                Reset
              </button>
            </div>

            <label className="App__label panel-block">
              Min-length:
              <select
                className="App__select select"
                name="minLength"
                id="minLength"
                value={minLength}
                onChange={e => this.minLength(+e.currentTarget.value)}
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
            </label>

            <ul className="Goods">
              {visibleGoods.map(good => (
                <li key={good} className="Goods__item panel-block">{good}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
