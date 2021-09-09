import React from 'react';
import { GoodsList } from './Components/GoodsList';

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

interface State {
  goodsList: string[];
  getStart: boolean;
  isReversed: boolean;
  isSortByAlph: boolean;
  isSortByLength: boolean;
}

export class App extends React.Component<{}, State> {
  state: State = {
    goodsList: goodsFromServer,
    isReversed: false,
    getStart: false,
    isSortByAlph: false,
    isSortByLength: false,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlph = () => {
    this.setState(state => ({
      isSortByAlph: !state.isSortByAlph,
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      isSortByLength: !state.isSortByLength,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      isSortByAlph: false,
      isSortByLength: false,
    });
  };

  start = () => {
    this.setState({ getStart: true });
  };

  render() {
    const {
      goodsList, getStart, isReversed, isSortByAlph, isSortByLength,
    } = this.state;

    const showList = [...goodsList];

    if (isSortByAlph) {
      showList.sort((good1, good2) => good1.localeCompare(good2));
    }

    if (isSortByLength) {
      showList.sort((good1, good2) => good1.length - good2.length);
    }

    if (isReversed) {
      showList.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>

        <button
          type="button"
          onClick={this.start}
        >
          Start
        </button>

        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortByAlph}
        >
          Sort by alphabeticall
        </button>

        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="btn btn-start"
          onClick={this.reset}
        >
          Reset
        </button>

        {getStart && (<GoodsList list={showList} />)}

      </div>
    );
  }
}
