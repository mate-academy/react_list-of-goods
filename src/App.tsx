import React from 'react';
import { GoodsList } from './component/GoodsList';
import './App.css';

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

type State = {
  show: boolean,
  revers: boolean,
  sort: string,
  goods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    // eslint-disable-next-line react/no-unused-state
    show: false,
    // eslint-disable-next-line react/no-unused-state
    revers: false,
    // eslint-disable-next-line react/no-unused-state
    sort: '',
    goods: [...goodsFromServer],
  };

  toggleList = () => {
    this.setState(state => ({
      ...state,
      show: !state.show,
    }));
  };

  revers = () => {
    this.setState(state => ({
      ...state,
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlpgabet = () => {
    this.setState(state => ({
      ...state,
      goods: [...state.goods].sort(),
    }));
  };

  sortLength = () => {
    this.setState(state => ({
      ...state,
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState(state => ({
      ...state,
      goods: [...goodsFromServer],
    }));
  };

  render() {
    return (
      <div className="box">
        <h1 className="title is-1">Goods</h1>
        {this.state.show && <GoodsList goods={this.state.goods} />}
        <button
          type="button"
          onClick={this.toggleList}
          className="button is-success is-light"
        >
          Start
        </button>

        <button
          type="button"
          onClick={this.revers}
          className="button is-info is-light"
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortAlpgabet}
          className="button is-info is-light"
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.sortLength}
          className="button is-info is-light"
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={this.reset}
          className="button is-danger is-light"
        >
          Reset
        </button>

      </div>
    );
  }
}

export default App;
