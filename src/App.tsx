/* eslint-disable @typescript-eslint/no-unused-vars */
import { PureComponent } from 'react';
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

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  if (sortType !== SortType.NONE) {
    visibleGoods.sort((a, b) => {
      switch (sortType) {
        case SortType.ALPABET:
          return a.localeCompare(b);
        case SortType.LENGTH:
          return a.length - b.length;
        default:
          return 0;
      }
    });
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

export class App extends PureComponent<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  showRender = () => {
    this.setState({
      isStarted: true,
    });
  };

  sortbyAlpabet = () => {
    this.setState({
      sortType: SortType.ALPABET,
    });
  };

  sortbyLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  sortbNone = () => {
    this.setState({
      sortType: SortType.NONE,
    });
  };

  sortRevers = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  sortReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    return (
      <div className="container">
        {(isStarted === false)
          && (
            <button
              type="button"
              className="button"
              onClick={this.showRender}
            >
              Start
            </button>
          )}

        {isStarted
          && (
            <div className="App">
              <div className="App__buttons">
                <button
                  type="button"
                  className="button"
                  onClick={this.sortbyAlpabet}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button"
                  onClick={this.sortbyLength}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="button"
                  onClick={this.sortRevers}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="button"
                  onClick={this.sortReset}
                >
                  Reset
                </button>
              </div>
              <ul className="Goods">
                {getReorderedGoods(goodsFromServer, sortType, isReversed)
                  .map(item => <li className="Goods__item">{item}</li>)}
              </ul>
            </div>
          )}
      </div>
    );
  }
}
