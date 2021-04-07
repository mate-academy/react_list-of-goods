import React from 'react';
import './App.css';
import { List } from './conponents';

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

export class App extends React.Component {
  state = {
    goods: [...goodsFromServer],
    isVisible: false,
  }

  show = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
    }));
  }

  reverse =() => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((first, second) => (
        first.localeCompare(second))),
    }));
  }

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((first, second) => (
        first.length - second.length)),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          className="btn btn-dark"
          type="button"
          onClick={this.show}
        >
          {!this.state.isVisible ? 'Show' : 'Hide'}
        </button>
        {
          (!this.state.isVisible)
          || (
          <div className="wrapper">
            <button
              className="btn btn-primary"
              onClick={this.reverse}
              type="button"
            >
              Reverse
            </button>
            <button
              className="btn btn-primary"
              onClick={this.sortByAlphabet}
              type="button"
            >
              Sort alphabetically
            </button>
            <button
              className="btn btn-primary"
              onClick={this.reset}
              type="button"
            >
              Reset
            </button>
            <button
              className="btn btn-primary"
              onClick={this.sortByLength}
              type="button"
            >
              Sort by length
            </button>
            <List goods={this.state.goods} />
          </div>
          )
        }
      </div>
    );
  }
}
