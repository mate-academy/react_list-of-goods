import React, { Component } from 'react';
import { GoodsList } from './GoodsList';
import { Select } from './Select';
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

class App extends Component {
  state = {
    goods: [...goodsFromServer],
    isStarted: false,
    selectedIndex: 1,
  }

  handleStart = () => (
    this.setState({
      isStarted: true,
      selectedIndex: 1,
    })
  )

  handleReset = () => (
    this.setState({
      goods: goodsFromServer,
      selectedIndex: 1,
    })
  )

  handleReverse = () => (
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }))
  )

  sortByLength = () => (
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => a.length - b.length),
    }))
  )

  sortAlphabetically = () => (
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => a.localeCompare(b)),
    }))
  )

  handleChange = (e) => {
    this.setState({ selectedIndex: e.target.value });
    this.setState(prevState => ({
      goods: goodsFromServer
        .filter(good => good.length >= prevState.selectedIndex),
    }));
  };

  render() {
    const { goods, selectedIndex, isStarted } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isStarted ? (
          <button
            type="button"
            className="button"
            onClick={this.handleStart}
          >
            Start
          </button>
        ) : (
          <div>
            <button
              type="button"
              className="button"
              onClick={this.handleReset}
            >
              reset
            </button>
            <button
              type="button"
              className="button"
              onClick={this.handleReverse}
            >
              reverse
            </button>
            <button
              type="button"
              className="button"
              onClick={this.sortByLength}
            >
              sort by length
            </button>
            <button
              type="button"
              className="button"
              onClick={this.sortAlphabetically}
            >
              sort alphabetically
            </button>
            <Select
              selectedIndex={selectedIndex}
              handleChange={this.handleChange}
            />
            <div className="list">
              <GoodsList goods={goods} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
