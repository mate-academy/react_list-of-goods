import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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

class App extends React.Component {
  state = {
    isListStarted: false,
    sortBy: null,
    isListReversed: false,
  }

  handleStart = () => {
    this.setState(state => ({
      isListStarted: !state.isListStarted,
    }));
  }

  handleReverse = () => {
    this.setState(state => ({
      isListReversed: !state.isListReversed,
    }));
  }

  handleAlphabeticallySort= () => {
    this.setState({
      sortBy: 'alphabetically',
    });
  }

  handleSortByLength= () => {
    this.setState({
      sortBy: 'length',
    });
  }

  handleReset= () => {
    this.setState({
      sortBy: null,
      isListReversed: false,
    });
  }

  render() {
    const preparedListOfGoods = [...goodsFromServer];

    preparedListOfGoods.sort((a, b) => {
      switch (this.state.sortBy) {
        case ('length'):
          return a.length - b.length;
        case ('alphabetically'):
          return a.localeCompare(b);
        default:
          return 0;
      }
    });

    if (this.state.isListReversed) {
      preparedListOfGoods.reverse();
    }

    return (
      <>
        {!this.state.isListStarted
          ? <button type="button" onClick={this.handleStart}>Start</button>
          : null}
        <div className="App">
          {this.state.isListStarted ? (
            <>
              <GoodsList goodsList={preparedListOfGoods} />
              <button
                type="button"
                onClick={this.handleReverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.handleAlphabeticallySort}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.handleSortByLength}
              >
                Sort by length
              </button>
              <button
                type="button"
                onClick={this.handleReset}
              >
                Reset
              </button>
            </>
          ) : null}
        </div>
      </>
    );
  }
}

export default App;
