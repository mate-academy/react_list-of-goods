import React from 'react';
import { GoodsList } from './components/GoodsList';
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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    listVisibility: false,
  }

  showList = () => {
    this.setState(state => ({
      ...state,
      listVisibility: true,
    }));
  }

  reverseList = () => {
    this.setState(state => ({
      ...state,
      goods: [...state.goods].reverse(),
    }));
  };

  sortByAlphabeticalOrder = () => {
    this.setState(state => ({
      ...state,
      goods: [...state.goods].sort(),
    }));
  };

  reset = () => {
    this.setState(state => ({
      ...state,
      goods: goodsFromServer,
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      ...state,
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1 className="title is-1 mx-6">
          {`Goods ${goodsFromServer.length}`}
        </h1>

        <GoodsList
          goods={this.state.goods}
          visibility={this.state.listVisibility}
          sortByAlphabeticalOrder={this.sortByAlphabeticalOrder}
          sortByLength={this.sortByLength}
          reverseList={this.reverseList}
          reset={this.reset}
        />

        {this.state.listVisibility || (
          <button
            type="button"
            className="button is-success is-rounded mx-6"
            onClick={this.showList}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
