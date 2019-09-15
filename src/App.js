import React, { Component } from 'react';
import './App.scss';

import Button from './components/Button/Button';
import GoodsList from './components/Goods/GoodsList';

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

export default class App extends Component {
  state = {
    firstLoad: true,
  };

  onClickStart = () => {
    this.setState({
      firstLoad: false,
    });
  }

  render() {
    return (
      <div className="app">
        {this.state.firstLoad
          ? <Button text="Start" onClick={this.onClickStart} />
          : <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}
