import React from 'react';
import './App.css';

import { GoodsList } from './components/GoodsList';

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

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type State = {
  selectedGoods: string[],
  isVisible: boolean,
  numbersSelect: number[],
  numberValue: number,
  sortBy: string,
  isReversed: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: goodsFromServer,
    isVisible: false,
    numbersSelect: numbers,
    numberValue: 0,
    sortBy: '',
    isReversed: false,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAb = () => {
    this.setState({ sortBy: 'alphab' });
  };

  sortLength = () => {
    this.setState({ sortBy: 'length' });
  };

  render() {
    const {
      selectedGoods,
      isVisible,
      numbersSelect,
      numberValue,
      sortBy,
      isReversed,
    } = this.state;

    const visibleGoods = selectedGoods.filter(good => (
      good.length >= numberValue
    ));

    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'alphab':
          return g1.localeCompare(g2);

        case 'length':
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App content is-large has-text-centered">
        <h1 className="fs-2">Goods</h1>
        {isVisible
          ? <GoodsList goods={visibleGoods} />
          : (
            <button
              type="button"
              className="button is-medium is-primary"
              onClick={() => {
                this.setState({ isVisible: true });
              }}
            >
              Start
            </button>
          )}

        {isVisible && (
          <>
            <button
              type="button"
              className="button is-medium is-link mx-2"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              className="button is-medium is-primary mx-2"
              onClick={this.sortAb}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className="button is-medium is-danger mx-2"
              onClick={() => this.setState({ sortBy: '', isReversed: false })}
            >
              Reset
            </button>

            <button
              type="button"
              className="button is-medium is-warning mx-2"
              onClick={this.sortLength}
            >
              Sort by length
            </button>

            <select
              className="select is-medium is-primary mx-4"
              onChange={(event) => (
                this.setState({
                  numberValue: +(event.target.value),
                })
              )}
            >
              {numbersSelect.map(number => (
                <option
                  value={number}
                  key={number}
                >
                  {number}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
    );
  }
}

export default App;
