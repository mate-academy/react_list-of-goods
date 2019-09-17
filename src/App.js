import React, { Component } from 'react';
import './App.css';

import GoodsList from './components/GoodsList/GoodsList';
import FiltersList from './components/FiltersList/FiltersList';

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
    goods: goodsFromServer,
    tempGoods: goodsFromServer,
    startClicked: false,
    clickAZ: false,
    clickByLength: false,

  }

  handleClickAZ = () => {
    this.state.clickAZ === false
      ? this.setState(prevState => ({
        goods: [...prevState.goods].sort(),
        clickAZ: true,
      }))
      : this.setState(prevState => ({
        goods: [...prevState.goods].sort().reverse(),
        clickAZ: false,
      }));
  }

  handleClickByLength = () => {
    this.state.clickByLength === false
      ? this.setState(prevState => ({
        goods: [...prevState.goods].sort((a, b) => b.length - a.length),
        clickByLength: true,
      }))
      : this.setState(prevState => ({
        goods: [...prevState.goods].sort((a, b) => a.length - b.length),
        clickByLength: false,
      }));
  }

  handleClickReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  handleClickReset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  handleSelectChange = (event) => {
    const numb = event.target.value;

    this.setState(prevState => ({
      goods: [...prevState.tempGoods].filter(el => el.length >= numb),
    }));
  }

  handleClickStart = () => {
    this.setState({
      startClicked: true,
    });
  }

  render() {
    return this.state.startClicked === true ? (
      <div className="App">
        <h1>Goods 1</h1>
        <FiltersList
          sortAZ={this.handleClickAZ}
          sortByLength={this.handleClickByLength}
          reverseSort={this.handleClickReverse}
          reset={this.handleClickReset}
          selectLengthSort={this.handleSelectChange}
        />
        <ul className="list">
          {this.state.goods.map(good => (
            <GoodsList key={good} good={good} />
          ))}
        </ul>
      </div>
    ) : (
      <button
        className="buttons start"
        onClick={this.handleClickStart}
        type="button"
      >
        Run!
      </button>
    );
  }
}

export default App;
