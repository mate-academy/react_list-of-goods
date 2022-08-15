import { Component } from 'react';
import cn from 'classnames';

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
  ALPHABET,
  LENGTH,
}

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  // Not to mutate the original array
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((good1, good2) => {
      return good1.localeCompare(good2);
    });
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((good1, good2) => {
      return good1.length - good2.length;
    });
  }

  if (isReversed) {
    return visibleGoods.reverse();
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
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  startWork = () => this.setState({
    isStarted: true,
  });

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlpabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;
    const listRender = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <div className="App">
        {!isStarted
          ? (
            <button
              type="button"
              className="button is-link is-outlined is-large start"
              onClick={this.startWork}
            >
              Start
            </button>
          )
          : (
            <div className="box has-background-link-light contant">
              <div className="buttons">
                <button
                  type="button"
                  // className={`button is-link btn ${sortType === SortType.ALPHABET ? 'is-active' : ''}`}
                  className={cn(
                    'button btn',
                    { 'is-warning': sortType === SortType.ALPHABET },
                  )}
                  onClick={this.sortByAlpabet}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className={cn(
                    'button btn',
                    { 'is-warning': sortType === SortType.LENGTH },
                  )}
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  onClick={this.reverse}
                  className={cn(
                    'button  btn',
                    { 'is-warning': isReversed === true },
                  )}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  onClick={this.reset}
                  className={cn(
                    'button is-info btn',
                    {
                      'is-warning': sortType === SortType.NONE
                    && isReversed === false,
                    },
                  )}
                >
                  Reset
                </button>
              </div>

              <ul className="listRender">
                {listRender.map(good => {
                  return (
                    <li
                      className="listRender__item"
                      key={good}
                    >
                      {good}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
      </div>
    );
  }
}
