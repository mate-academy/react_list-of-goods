import React from 'react';
import { GoodsList } from './Components/GoodsList';

import './App.scss';

const goodsFromServer: string[] = [
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

interface State {
  isVisible: boolean;
  sortCheck: boolean;
  goodsArray: string[];
}

export class App extends React.Component<{}, State> {
  state = {
    isVisible: true,
    sortCheck: true,
    goodsArray: [...goodsFromServer],
  };

  getShow = () => {
    this.setState((currentState) => ({
      isVisible: !currentState.isVisible,
    }));
  };

  getRevers = () => {
    this.setState((currentState) => ({
      goodsArray: [...currentState.goodsArray].reverse(),
    }));
  };

  getAlphabetSort = () => {
    this.setState((currentState) => ({
      sortCheck: !currentState.sortCheck,
      goodsArray: [...currentState.goodsArray]
        .sort((a, b) => (
          currentState.sortCheck
            ? a.localeCompare(b)
            : b.localeCompare(a)
        )),
    }));
  };

  getReset = () => {
    this.setState({
      goodsArray: [...goodsFromServer],
    });
  };

  getLengthSort = () => {
    this.setState((currentState) => ({
      sortCheck: !currentState.sortCheck,
      goodsArray: [...currentState.goodsArray]
        .sort((a, b) => (
          currentState.sortCheck
            ? a.length - b.length
            : b.length - a.length
        )),
    }));
  };

  render() {
    const { goodsArray } = this.state;

    return (
      <div className="App">
        <div className="App__buttonsList">
          <button
            className="App__button"
            type="button"
            onClick={this.getShow}
          >
            Start
          </button>
          <button
            className="App__button"
            type="button"
            onClick={this.getRevers}
          >
            Revers
          </button>
          <button
            className="App__button"
            type="button"
            onClick={this.getAlphabetSort}
          >
            Sort alphabetically
          </button>
          <button
            className="App__button"
            type="button"
            onClick={this.getReset}
          >
            Reset
          </button>
          <button
            className="App__button"
            type="button"
            onClick={this.getLengthSort}
          >
            Sort by length
          </button>
        </div>
        {this.state.isVisible && <GoodsList goodsList={goodsArray} />}
      </div>
    );
  }
}
