import React from 'react';
import './App.css';

const goodsFromServer: string[] = [
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

type State = {
  goods: string[],
  isVisible: boolean,
  isReversed: boolean,
  sortBy: SortType,
  isSorted: boolean,
};

enum SortType {
  ALPHABET,
  LENGTH,
  NONE,
}

function getOrderedGoods(
  goods: string[],
  sortBy: SortType,
  isSorted: boolean,
  isReversed: boolean,
) {
  const copyGoods = [...goods];

  if (isSorted) {
    copyGoods.sort((good1, good2) => {
      switch (sortBy) {
        case SortType.LENGTH:
          return good1.length - good2.length;
        case SortType.ALPHABET:
          return good1.localeCompare(good2);

        default:
          return 0;
      }
    });
  }

  if (isReversed) {
    copyGoods.reverse();
  }

  return copyGoods;
}

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    goods: goodsFromServer,
    isVisible: true,
    isReversed: false,
    isSorted: false,
    sortBy: SortType.NONE,
  };

  toShowGoods = () => {
    this.setState((state) => ({
      isVisible: !state.isVisible,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({
      sortBy: SortType.ALPHABET,
      isSorted: true,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: SortType.LENGTH,
      isSorted: true,
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: SortType.NONE,
      isSorted: false,
    });
  };

  render() {
    const { isVisible } = this.state;

    const sortedGoods = getOrderedGoods(
      this.state.goods,
      this.state.sortBy,
      this.state.isSorted,
      this.state.isReversed,
    );

    return (
      <div className="App box">
        <h1 className="message-header">Goods</h1>
        {isVisible && (
          <div>
            <h3 className="message-body">
              Everything starts here.
              Just push the button
            </h3>
            <button
              className="button button__start"
              type="button"
              onClick={this.toShowGoods}
            >
              Start
            </button>
          </div>
        )}
        {!isVisible && (
          <div className="wrapper">
            <ul className="list">
              {sortedGoods.map(good => (
                <li
                  className="list__item"
                  key={good}
                >
                  {good}
                </li>
              ))}
            </ul>
            <button
              className="button"
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              className="button"
              type="button"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>
            <button
              className="button"
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <button
              className="button"
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
