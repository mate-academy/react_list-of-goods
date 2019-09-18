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
    lengthFilterDirection: false,
  }

  handleClickAZ = () => {
    this.setState(prevState => (
      prevState.clickAZ === false
        ? {
          goods: [...prevState.goods].sort(),
          clickAZ: true,
        }
        : {
          goods: [...prevState.goods].sort().reverse(),
          clickAZ: false,
        }
    ));
  };

  handleClickByLength = () => {
    this.setState(prevState => (
      prevState.lengthFilterDirection === false
        ? {
          goods: [...prevState.goods].sort((a, b) => b.length - a.length),
          lengthFilterDirection: true,
        }
        : {
          goods: [...prevState.goods].sort((a, b) => a.length - b.length),
          lengthFilterDirection: false,
        }
    ));
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
    const { value } = event.target;

    this.setState(prevState => ({
      goods: [...prevState.tempGoods].filter(el => el.length >= value),
    }));
  }

  handleClickStart = () => {
    this.setState({
      startClicked: true,
    });
  }

  render() {
    const { startClicked, goods } = this.state;

    return startClicked === true ? (
      <div className="app">
        <h1 className="h1">Goods 1</h1>
        <FiltersList
          sortAZ={this.handleClickAZ}
          sortByLength={this.handleClickByLength}
          reverseSort={this.handleClickReverse}
          reset={this.handleClickReset}
          selectLengthSort={this.handleSelectChange}
        />
        <ul className="list">
          {goods.map(good => (
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
