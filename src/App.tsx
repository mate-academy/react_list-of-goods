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
  started: boolean,
  reversed: boolean,
  sorted: boolean,
  sortBy: string,
  lengthLimit: number,
};

class App extends React.Component<{}, State> {
  state = {
    started: false,
    reversed: false,
    sorted: false,
    sortBy: 'alpha',
    lengthLimit: 1,
  };

  startApp = () => {
    this.setState(state => ({
      started: !state.started,
    }));
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

  sortAlpha = () => {
    this.setState({
      sorted: true,
      sortBy: 'alpha',
    });
  };

  sortLength = () => {
    this.setState({
      sorted: true,
      sortBy: 'length',
    });
  };

  setLengthLimit = (limit: string) => {
    this.setState({
      lengthLimit: +limit,
    });
  };

  render() {
    const {
      started,
      reversed,
      sorted,
      sortBy,
      lengthLimit,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        {!started
          ? <button type="button" onClick={this.startApp}>Start</button>
          : (
            <>
              <GoodsList
                goods={goodsFromServer}
                reversed={reversed}
                sorted={sorted}
                sortBy={sortBy}
                lengthLimit={lengthLimit}
              />

              <button type="button" onClick={this.reset}>Reset</button>
              <button type="button" onClick={this.reverse}>Reverse</button>
              <button type="button" onClick={this.sortAlpha}>Sort alphabetically</button>
              <button type="button" onClick={this.sortLength}>Sort by length</button>

              <select
                name="length"
                id="length"
                value={lengthLimit}
                onChange={(event) => {
                  this.setLengthLimit(event.target.value);
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
            </>
          )}
      </div>
    );
  }
}

export default App;
