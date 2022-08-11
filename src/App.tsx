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

  switch (sortType) {
    case SortType.LENGTH:
      return visibleGoods.sort((good1, good2) => good1.length - good2.length);
    case SortType.ALPHABET:
      return visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
    case SortType.NONE:
      break;
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
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  startWork = () => this.setState({
    isStarted: true,
  });

  sortByAlpabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  getElements = (goods: string[]) => {
    return goods.map(good => (
      <li className="Goods__item" key={good}>{good}</li>
    ));
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
                  className="button is-link btn"
                  onClick={this.sortByAlpabet}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button is-warning is-light btn"
                  onClick={() => this.sortByLength()}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  onClick={this.reverse}
                  className="button is-info btn"
                >
                  Reverse
                </button>

                <button
                  type="button"
                  onClick={this.reset}
                  className="button is-danger btn"
                >
                  Reset
                </button>
              </div>

              <ul className="listRender">
                {this.getElements(listRender)}
              </ul>
            </div>
          )}
      </div>
    );
  }
}
