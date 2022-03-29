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
  isGoodsVisible: boolean,
  isReversed: boolean,
  isSortedAlphabetically: boolean,
  isSortedByLength: boolean
}

class App extends React.Component<{}, State> {
  state = {
    isGoodsVisible: false,
    isReversed: false,
    isSortedAlphabetically: false,
    isSortedByLength: false,
  };

  setGoodsVisible = () => this.setState(state => ({
    isGoodsVisible: !state.isGoodsVisible,
  }));

  reverseGoods = () => this.setState(state => ({
    isReversed: !state.isReversed,
  }));

  sortAlphabetically = () => this.setState({
    isSortedAlphabetically: true,
    isSortedByLength: false,
  });

  sortByLength = () => this.setState({
    isSortedByLength: true,
    isSortedAlphabetically: false,
  });

  reset = () => this.setState({
    isSortedAlphabetically: false,
    isSortedByLength: false,
  });

  render() {
    const {
      isGoodsVisible, isReversed, isSortedAlphabetically, isSortedByLength,
    } = this.state;
    const renderedGoods = [...goodsFromServer];

    if (isSortedAlphabetically) {
      renderedGoods.sort((good1, good2) => good1.localeCompare(good2));
    }

    if (isSortedByLength) {
      renderedGoods.sort((good1, good2) => good1.length - good2.length);
    }

    if (isReversed) {
      renderedGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {isGoodsVisible
          ? (
            <ul>
              {renderedGoods.map(good => (
                <li key={good}>{good}</li>
              ))}
            </ul>
          )
          : (
            <button
              type="button"
              onClick={this.setGoodsVisible}
            >
              Start
            </button>
          )}

        <button
          type="button"
          onClick={this.reverseGoods}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default App;
