import React from 'react';
import './App.css';

import { GoodsList } from './Components/GoodsList';

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

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type State = {
  goodsList: string[],
  isShowGoodsList: boolean,
  selected: number,
  isReversed: boolean,
  sortBy: string,
};

class App extends React.Component {
  state = {
    goodsList: goodsFromServer,
    isShowGoodsList: false,
    selected: 1,
    isReversed: false,
    sortBy: '',
  };

  start = () => {
    this.setState((state: State) => ({
      isShowGoodsList: !state.isShowGoodsList,
    }));
  };

  reverse = () => {
    this.setState((state: State) => ({
      isReversed: !state.isReversed,
    }));
  };

  sort = (sortBy: string) => {
    this.setState({ sortBy });
  };

  reset = () => {
    this.setState({
      selected: 1,
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const {
      goodsList,
      isShowGoodsList,
      selected,
      isReversed,
      sortBy,
    } = this.state;

    return (
      <div className="App">
        <h1>
          Goods
          {' '}
          {goodsList.length}
        </h1>
        <select
          name="select"
          id="1"
          value={selected}
          onChange={({ target }) => {
            this.setState({ selected: Number(target.value) });
          }}
        >
          {options.map((option: number) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        {isShowGoodsList && (
          <GoodsList
            goodsList={goodsList}
            selected={selected}
            isReversed={isReversed}
            sortBy={sortBy}
          />
        )}
        {!isShowGoodsList && (
          <button
            type="button"
            className="button buttonStart"
            onClick={this.start}
          >
            Start
          </button>
        )}
        <button
          type="button"
          className="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          className="button"
          onClick={() => {
            this.sort('Sort alphabetically');
          }}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          className="button"
          onClick={() => {
            this.sort('Sort by length');
          }}
        >
          Sort by length
        </button>
        <button
          type="button"
          className="button"
          onClick={this.reset}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default App;
