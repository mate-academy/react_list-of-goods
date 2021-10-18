import React from 'react';
import './App.css';

import { GoodList } from './components/GoodList/GoodList';

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
  isReverse: boolean;
  isSortedByAlph: boolean;
  isSortedByLeng: boolean;
  selectNumber: number;
};

class App extends React.Component<{}, State> {
  state = {
    isReverse: false,
    isSortedByAlph: false,
    isSortedByLeng: false,
    selectNumber: 1,
  };

  handleButtonReverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  };

  handleButtonReset = () => {
    this.setState({
      isReverse: false,
      isSortedByAlph: false,
      isSortedByLeng: false,
      selectNumber: 1,
    });
  };

  handleButtonSort = () => {
    this.setState(({ isSortedByAlph }) => ({
      isSortedByAlph: !isSortedByAlph,
      isSortedByLeng: false,
    }));
  };

  handleButtonSortByLength = () => {
    this.setState(({ isSortedByLeng }) => ({
      isSortedByLeng: !isSortedByLeng,
      isSortedByAlph: false,
    }));
  };

  render() {
    const {
      isReverse,
      isSortedByAlph,
      isSortedByLeng,
      selectNumber,
    } = this.state;
    const goods = [...goodsFromServer].filter(
      item => item.length >= selectNumber,
    );
    const arrForSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const buttonClass = 'button is-primary';

    goods.filter(item => item.length >= selectNumber);

    if (isSortedByAlph) {
      goods.sort((g1, g2) => g1.localeCompare(g2));
    }

    if (isSortedByLeng) {
      goods.sort((g1, g2) => g1.length - g2.length);
    }

    if (isReverse) {
      goods.reverse();
    }

    return (
      <div className="App">
        <h1 className="title is-1 mt-5">Goods</h1>

        <div className="buttons__container">
          <button
            type="button"
            className={this.state.isReverse
              ? `${buttonClass} is-active`
              : `${buttonClass}`}
            onClick={this.handleButtonReverse}
          >
            Reverse
          </button>
          <button
            type="button"
            className="button is-primary"
            onClick={this.handleButtonReset}
          >
            Reset
          </button>
          <button
            type="button"
            className={this.state.isSortedByAlph
              ? `${buttonClass} is-active`
              : `${buttonClass}`}
            onClick={this.handleButtonSort}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className={this.state.isSortedByLeng
              ? `${buttonClass} is-active`
              : `${buttonClass}`}
            onClick={this.handleButtonSortByLength}
          >
            Sort by length
          </button>
          <select
            value={this.state.selectNumber}
            onChange={(event) => {
              this.setState({ selectNumber: +event.target.value });
            }}
          >
            {arrForSelect.map(item => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <GoodList goods={goods} />
      </div>
    );
  }
}

export default App;
