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
  sortBy: string
}

class App extends React.Component<{}, State> {
  state = {
    isGoodsVisible: false,
    isReversed: false,
    sortBy: '',
  };

  setGoodsVisible = () => this.setState({
    isGoodsVisible: true,
  });

  reverseGoods = () => this.setState(state => ({
    isReversed: !state.isReversed,
  }));

  sortAlphabetically = () => this.setState({
    sortBy: 'name',
  });

  sortByLength = () => this.setState({
    sortBy: 'length',
  });

  reset = () => this.setState({
    sortBy: '',
    isReversed: false,
  });

  render() {
    const { isGoodsVisible, isReversed, sortBy } = this.state;
    const renderedGoods = [...goodsFromServer];

    renderedGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'name':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      renderedGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {isGoodsVisible
          ? (
            <>
              <ul>
                {renderedGoods.map(good => (
                  <li key={good}>{good}</li>
                ))}
              </ul>

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
            </>
          )
          : (
            <button
              type="button"
              onClick={this.setGoodsVisible}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
