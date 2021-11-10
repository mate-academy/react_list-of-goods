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

interface State {
  goods: string[],
  howToSort: string,
  isVisible: boolean,
  reverse: boolean,
  reset: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    howToSort: 'dont sort',
    isVisible: false,
    reverse: false,
    reset: false,
  };

  makeListVisible = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
      reset: false,
    }));
  };

  reverseList = () => {
    this.setState(state => ({
      reverse: !state.reverse,
      reset: false,
    }));
  };

  resetList = () => {
    this.setState({
      reset: true,
      reverse: false,
    });
  };

  sortAlphabetical = () => {
    this.setState({
      howToSort: 'alphabetical',
      reset: false,
    });
  };

  sortByLength = () => {
    this.setState({
      howToSort: 'length',
      reset: false,
    });
  };

  sortingVisibleGoods = () => {
    const {
      howToSort,
      goods,
      reverse,
      reset,
    } = this.state;
    let preparedGoods = [...goods].sort((product1, product2) => {
      switch (howToSort) {
        case 'alphabetical':
          return product1.localeCompare(product2);
        case 'length':
          return product1.length - product2.length;
        default:
          return 0;
      }
    });

    if (reset) {
      preparedGoods = [...goods];

      return preparedGoods;
    }

    if (reverse) {
      return preparedGoods.reverse();
    }

    return preparedGoods;
  };

  render() {
    const {
      isVisible,
      reverse,
    } = this.state;

    const visibleGoods = this.sortingVisibleGoods();

    return (
      <div className="App">
        <h1>Goods</h1>
        <div>
          {!isVisible && (
            <button
              type="button"
              onClick={this.makeListVisible}
            >
              Start
            </button>
          )}
          <button
            disabled={!isVisible}
            className={reverse ? 'active' : 'initial'}
            type="button"
            onClick={this.reverseList}
          >
            {reverse ? 'Reversed' : 'Reverse'}
          </button>

          <button
            disabled={!isVisible}
            type="button"
            onClick={this.sortAlphabetical}
          >
            Sort Alphabetical
          </button>

          <button
            disabled={!isVisible}
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            disabled={!isVisible}
            type="button"
            onClick={this.resetList}
          >
            Reset
          </button>
        </div>

        {isVisible && (
          <ul>
            {visibleGoods.map(product => <li key={product}>{product}</li>)}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
