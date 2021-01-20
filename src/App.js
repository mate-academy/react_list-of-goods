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
    goodsVisibility: false,
    goodsList: goodsFromServer,
  }

  startHandler = () => {
    this.setState({ goodsVisibility: true });
  }

  reverseHandler = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].reverse(),
    }));
  };

  resetHandler = () => {
    this.setState({
      goodsList: goodsFromServer,
    });
  };

  sortAlphabetHandler = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort(
        (a, b) => (
          a.toLowerCase()
          > b.toLowerCase() ? 1 : -1
        ),
      ),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort(
        (a, b) => (
          a.length > b.length ? 1 : -1
        ),
      ),
    }));
  };

  render() {
    const { goodsVisibility, goodsList } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!goodsVisibility && (
          <button
            type="button"
            onClick={this.startHandler}
          >
            Start
          </button>
        )}
        {goodsVisibility && (
          <GoodsList
            goodsList={goodsList}
            reverse={this.reverseHandler}
            sortAlphabet={this.sortAlphabetHandler}
            reset={this.resetHandler}
            sortByLength={this.sortByLength}
          />
        )}
      </div>
    );
  }
}

export default App;
