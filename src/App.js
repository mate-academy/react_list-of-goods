import React from 'react';
import './App.css';

import GoodList from './GoodList';

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
    isStarted: false,
    goodsList: goodsFromServer,
  }

  startHandler = () => {
    this.setState({
      isStarted: true,
    });
  }

  resetHandler = () => {
    this.setState({
      goodsList: goodsFromServer,
    });
  }

  reverseHandler = () => {
    this.setState(prevState => ({
      goodsList: [...prevState.goodsList].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      goodsList: [...prevState.goodsList].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goodsList: [...prevState.goodsList].sort(
        (a, b) => (a.length > b.length ? 1 : -1),
      ),
    }));
  }

  render() {
    const { isStarted, goodsList } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isStarted && (
          <button
            type="button"
            onClick={this.startHandler}
          >
            Start
          </button>
        )}

        {isStarted && (
          <GoodList
            goodsList={goodsList}
            reverse={this.reverseHandler}
            sortByAlphabet={this.sortByAlphabet}
            sortByLength={this.sortByLength}
            reset={this.resetHandler}
          />
        )}
      </div>
    );
  }
}

export default App;
