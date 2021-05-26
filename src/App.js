import React, { Component } from 'react';
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
    goods: goodsFromServer,
    showList: false,
  }

toggleListHandler = () => {
  this.setState(state => ({
    showList: !state.showList,
  }));
};

reverseList = () => {
  this.setState(state => ({
    goods: [...state.goods].reverse(),
  }));
};

sortList = () => {
  this.setState(state => ({
    goods: [...state.goods].sort(),
  }));
}

resetList = () => {
  this.setState({
    goods: goodsFromServer,
  });
};

sortByLength = () => {
  this.setState(state => ({
    goods: [...state.goods].sort((a, b) => a.length - b.length),
  }));
};

render() {
  return (
    <div className="app">
      <h1>Goods</h1>
      <button
        className={this.state.showList && 'visibility'}
        type="button"
        onClick={this.toggleListHandler}
      >
        Start
      </button>
      <button
        className={!this.state.showList && 'visibility'}
        type="button"
        onClick={this.reverseList}
      >
        Reverse
      </button>
      <button
        className={!this.state.showList && 'visibility'}
        type="button"
        onClick={this.sortList}
      >
        Sort
      </button>
      <button
        className={!this.state.showList && 'visibility'}
        type="button"
        onClick={this.resetList}
      >
        Reset
      </button>
      <button
        className={!this.state.showList && 'visibility'}
        type="button"
        onClick={this.sortByLength}
      >
        Sort by length
      </button>
      <ul>
        {this.state.showList && this.state.goods.map(product => (
          <li key={product}>{product}</li>
        ))
        }
      </ul>
    </div>
  );
}
}

export default App;
