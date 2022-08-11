/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from 'react';
import './App.css';

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

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    case SortType.NONE:
    default:
      break;
  }

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
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  isStart = () => this.setState({ isStarted: true });

  sortByName = () => this.setState({ sortType: SortType.ALPABET });

  sortByLength = () => this.setState({ sortType: SortType.LENGTH });

  reversed = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    const goods = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <div className="App">
        {!isStarted
          ? (
            <button className="start" type="button" onClick={this.isStart}>
              Start
            </button>
          )
          : (
            <div className="App__list">
              <button type="button" onClick={this.sortByName}>
                Sort alphabetically
              </button>

              <button type="button" onClick={this.sortByLength}>
                Sort by length
              </button>

              <button type="button" onClick={this.reversed}>
                Reverse
              </button>

              <button className="reset" type="button" onClick={this.reset}>
                Reset
              </button>

              <ul className="Goods">
                {goods.map(good => (
                  <li className="Goods__item" key={good}>{good}</li>
                ))}
              </ul>
            </div>
          )}
      </div>
    );
  }
}
