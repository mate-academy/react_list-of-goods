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
  sortBy: string,
  lengthLimit: number,
  lengthOptions: string[];
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    started: false,
    reversed: false,
    sortBy: 'default',
    lengthLimit: 1,
    lengthOptions: Object.keys(Array(10).fill(0)),
  };

  startApp = () => {
    this.setState({
      started: true,
    });
  };

  reset = () => {
    this.setState({
      reversed: false,
      sortBy: 'default',
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
      sortBy: 'alpha',
    });
  };

  sortByLength = () => {
    this.setState({
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
      sortBy,
      lengthLimit,
      lengthOptions,
    } = this.state;

    const visibleGoods = goods.filter(g => g.length >= lengthLimit);

    switch (sortBy) {
      case 'alpha':
        visibleGoods.sort((a, b) => a.localeCompare(b));
        break;

      case 'length':
        visibleGoods.sort((a, b) => a.length - b.length);
        break;

      default:
        break;
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
                {lengthOptions.map(key => (
                  <option value={+key + 1}>{+key + 1}</option>
                ))}
              </select>
            </>
          )}
      </div>
    );
  }
}

export default App;
