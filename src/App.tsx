import React from 'react';
import GoodsList from './components/GoodsList';

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
  goods: string[],
  started: boolean,
  reversed: boolean,
  sorted: boolean,
  sortBy: string,
  lengthLimit: number,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    started: false,
    reversed: false,
    sorted: false,
    sortBy: 'alpha',
    lengthLimit: 1,
  };

  startApp = () => {
    this.setState({
      started: true,
    });
  };

  reset = () => {
    this.setState({
      reversed: false,
      sorted: false,
      lengthLimit: 1,
    });
  };

  reverse = () => {
    this.setState(state => ({
      reversed: !state.reversed,
    }));
  };

  sortByAlpha = () => {
    this.setState({
      sorted: true,
      sortBy: 'alpha',
    });
  };

  sortByLength = () => {
    this.setState({
      sorted: true,
      sortBy: 'length',
    });
  };

  onLengthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      lengthLimit: +event.target.value,
    });
  };

  render() {
    const {
      goods,
      started,
      reversed,
      sorted,
      sortBy,
      lengthLimit,
    } = this.state;

    const visibleGoods = goods.filter(g => g.length >= lengthLimit);

    if (sorted) {
      visibleGoods.sort((a, b) => {
        switch (sortBy) {
          case 'length':
            return a.length - b.length;

          case 'alpha':
            return a.localeCompare(b);

          default:
            return 0;
        }
      });
    }

    if (reversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>

        {!started
          ? <button type="button" onClick={this.startApp}>Start</button>
          : (
            <>
              <GoodsList
                goods={visibleGoods}
              />

              <button type="button" onClick={this.reset}>Reset</button>
              <button type="button" onClick={this.reverse}>Reverse</button>
              <button type="button" onClick={this.sortByAlpha}>Sort alphabetically</button>
              <button type="button" onClick={this.sortByLength}>Sort by length</button>

              <select
                name="length"
                id="length"
                value={lengthLimit}
                onChange={this.onLengthChange}
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
            </>
          )}
      </div>
    );
  }
}

export default App;
