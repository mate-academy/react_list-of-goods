import React, { Component } from 'react';
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

class App extends Component {
  state = {
    isStartButton: false,
    goods: [...goodsFromServer],
    initialGoods: [...goodsFromServer],
    length: 1,
  };

  handleStart = () => {
    this.setState({
      isStartButton: true,
    });
  }

  handleReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  handleSortAZ = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => a.localeCompare(b)),
    }));
  }

  handleSortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => a.length - b.length),
    }));
  }

  handleReset = () => {
    this.setState(prevState => ({
      goods: prevState.initialGoods,
      length: 1,
    }));
  }

  handleSelect = ({ target }) => {
    this.setState(prevState => ({
      length: target.value,
      goods: prevState.initialGoods.filter(item => item.length >= target.value),
    }));
  };

  render() {
    const { isStartButton, goods, length } = this.state;

    return (
      <div className="App">
        {
          isStartButton
            ? (
              <GoodsList
                goods={goods}
                handleReverse={this.handleReverse}
                handleSortAZ={this.handleSortAZ}
                handleReset={this.handleReset}
                handleSortByLength={this.handleSortByLength}
                handleSelect={this.handleSelect}
                value={length}
              />
            )
            : (
              <button
                type="button"
                onClick={this.handleStart}
                className="start-btn"
              >
                Start
              </button>
            )
        }
      </div>
    );
  }
}

export default App;
