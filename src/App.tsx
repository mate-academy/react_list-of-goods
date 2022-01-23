// import classNames from 'classnames';
import React from 'react';
import './App.css';
import { Goodlist } from './component/GoodsList';

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
  goods: string[];
  isVisible: boolean,
}
export default class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isVisible: false,
  };

  show = () => {
    this.setState((state) => ({ isVisible: !state.isVisible }));
  };

  revers = () => {
    this.setState((state) => ({
      goods: state.goods.reverse(),
    }));
  };

  reset = () => {
    this.setState({ goods: [...goodsFromServer] });
  };

  sortByAlphabet = () => {
    this.setState((state) => ({
      goods: state.goods.sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: state.goods.sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { isVisible, goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.show}
        >
          Start
        </button>
        <button
          type="button"
          onClick={this.revers}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortByAlphabet}
        >
          Sort by alphabet
        </button>
        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        {isVisible && <Goodlist goods={goods} />}
      </div>
    );
  }
}
