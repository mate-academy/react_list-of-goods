import React from 'react';
import './App.css';
import { GoodsList } from './Components/GoodsList/GoodsList';

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

const selectOptionsValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type State = {
  isVisible: boolean,
  isReversed: boolean,
  sortBy: string,
  selectValue: number,
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
    isReversed: false,
    sortBy: '',
    selectValue: 1,
  };

  isClickStart = () => {
    this.setState({ isVisible: true });
  };

  isReverse = () => {
    this.setState((state) => ({ isReversed: !state.isReversed }));
  };

  sortBy = (sortIdentifier: string) => {
    this.setState({ sortBy: sortIdentifier });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
      selectValue: 1,
    });
  };

  isSelect = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;

    this.setState({
      selectValue: +value,
    });
  };

  render() {
    const {
      isVisible, isReversed, sortBy, selectValue,
    } = this.state;

    return (
      <div className="App box">
        {!isVisible
        && (
          <button
            type="button"
            className="button is-success"
            onClick={this.isClickStart}
          >
            Start
          </button>
        )}
        <h1 className="title is-1">Goods</h1>
        <div className="select is-success">
          <select
            value={selectValue}
            onChange={this.isSelect}
          >
            {selectOptionsValue
              .map(el => <option key={el} value={el}>{el}</option>)}
          </select>

        </div>
        <button
          type="button"
          onClick={this.isReverse}
          className="button is-info is-light"
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={() => this.sortBy('alphabetically')}
          className="button is-success is-light"
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={() => this.sortBy('length')}
          className="button is-link is-light"
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
        {isVisible
          && (
            <GoodsList
              goodsFromServer={goodsFromServer}
              isReversed={isReversed}
              sortBy={sortBy}
              selectValue={selectValue}
            />
          )}
      </div>
    );
  }
}

export default App;
