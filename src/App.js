import React, { Component } from 'react';
import classNames from 'classnames';
import { GoodsList } from './component/GoodsList';
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

export class App extends Component {
  state = {
    goods: [...goodsFromServer],
    visible: false,
  };

  startApp = () => {
    this.setState({ visible: true });
  };

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortList = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  resetList = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  }

  sortLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { goods, visible } = this.state;

    return (
      <>
        <button
          className={classNames('button', { hidden: visible })}
          type="button"
          onClick={this.startApp}
        >
          Start
        </button>
        <div className={classNames({ hidden: !visible })}>
          <h1>Goods</h1>
          <GoodsList goods={goods} />
          <button
            className="button"
            type="button"
            onClick={this.reverseList}
          >
            Reverse
          </button>
          <button
            className="button"
            type="button"
            onClick={this.sortList}
          >
            Sort alphabetically
          </button>
          <button
            className="button"
            type="button"
            onClick={this.resetList}
          >
            Reset
          </button>
          <button
            className="button"
            type="button"
            onClick={this.sortLength}
          >
            Sort by length
          </button>
        </div>
      </>
    );
  }
}

export default App;
