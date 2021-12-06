import React from 'react';
import './App.css';
import classNames from 'classnames';

import { GoodsList } from './component/GoodsList/GoodsList';

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
  goods: string[],
  isReversed: boolean,
  sortBy: string,
  length: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    isReversed: false,
    sortBy: '',
    length: '1',
  };

  startFirstRender = () => {
    this.setState({ goods: goodsFromServer });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByNameLength = () => {
    this.setState({ sortBy: 'nameLength' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      length: '1',
    });
  };

  render() {
    const {
      goods, isReversed, sortBy, length,
    } = this.state;

    const goodsForRender = goods.filter((good) => {
      return good.length >= Number(length);
    });

    goodsForRender.sort((goodA, goodB) => {
      switch (sortBy) {
        case 'alphabet':
          return goodA.localeCompare(goodB);

        case 'nameLength':
          return goodA.length - goodB.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsForRender.reverse();
    }

    return (
      <div className="App">

        <h1>Goods</h1>

        <button
          className={classNames('btn', { 'btn--hide': goods.length > 0 })}
          type="button"
          onClick={this.startFirstRender}
        >
          START
        </button>
        <label
          htmlFor="length"
          className={classNames('select', { 'select--hide': goods.length === 0 })}
        >
          choose length:
          {' '}
          <select
            name="length"
            id="length"
            value={length}
            onChange={(event) => {
              this.setState({ length: event.target.value });
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>

        <GoodsList goods={goodsForRender} />

        <button
          className={classNames('btn', { 'btn--hide': goods.length === 0 })}
          type="button"
          onClick={this.reverse}
        >
          REVERSE
        </button>

        <button
          className={classNames('btn', { 'btn--hide': goods.length === 0 })}
          type="button"
          onClick={this.sortByAlphabet}
        >
          sort by ALPHABET
        </button>

        <button
          className={classNames('btn', { 'btn--hide': goods.length === 0 })}
          type="button"
          onClick={this.sortByNameLength}
        >
          sort by NAME LENGTH
        </button>

        <button
          className={classNames('btn', { 'btn--hide': goods.length === 0 })}
          type="button"
          onClick={this.reset}
        >
          RESET
        </button>
      </div>
    );
  }
}

export default App;
