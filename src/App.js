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
    }));
  }

  handleSelect = (e) => {
    const list = [...goodsFromServer];
    const { value } = e.target;

    this.setState(prevState => ({
      goods: list.filter(item => item.length <= value),
    }));
  };

  render() {
    const { isStartButton, goods } = this.state;

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
