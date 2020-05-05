import React, { Component } from 'react';
import './App.css';
import GoodsList from './components/GoodsList/GoodsList';
import SelectList from './components/SelectList/SelectList';

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

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class App extends Component {
  state = {
    start: true,
    goods: [...goodsFromServer],
    defaultValue: 1,
  }

  startChangePage = () => this.setState({ start: false });

  reverseGoodsList = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].reverse(),
    }));
  }

  sortGoodsList = () => this.setState(({ goods }) => ({
    goods: [...goods].sort(),
  }))

  resetGoodsList = () => this.setState(() => ({
    goods: [...goodsFromServer],
    defaultValue: 1,
  }))

  sortByLengthGoodsList = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].sort((a, b) => (
        a.length - b.length
      )),
    }));
  }

  selectGoodsList = (event) => {
    const { target } = event;

    return this.setState({
      goods: goodsFromServer.filter(item => item.length >= +target.value),
      defaultValue: +target.value,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.start
        && (
          <button
            type="button"
            onClick={this.startChangePage}
          >
            Start
          </button>
        )}

        {!this.state.start
        && (
          <>
            <GoodsList list={this.state.goods} />

            <button
              type="button"
              onClick={this.reverseGoodsList}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortGoodsList}
            >
              Sort
            </button>

            <button
              type="button"
              onClick={this.resetGoodsList}
            >
              Reset
            </button>

            <button
              type="button"
              onClick={this.sortByLengthGoodsList}
            >
              Sort by length
            </button>

            <SelectList
              numbers={numbers}
              callback={this.selectGoodsList}
              value={this.state.defaultValue}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
