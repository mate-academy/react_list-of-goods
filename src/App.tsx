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
};

class App extends React.Component<{}, State> {
  state = {
    started: false,
    reversed: false,
    sorted: false,
    sortBy: 'alpha',
  };

  startApp = () => {
    this.setState(state => ({
      started: !state.started,
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

  reverse = () => {
    this.setState(state => ({
      reversed: !state.reversed,
    }));
  };

  reset = () => {
    this.setState({
      reversed: false,
      sorted: false,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>

        {!this.state.started
          ? <button type="button" onClick={this.startApp}>Start</button>
          : (
            <>
              <GoodsList
                goods={goodsFromServer}
                reversed={this.state.reversed}
                sorted={this.state.sorted}
                sortBy={this.state.sortBy}
              />
              <button type="button" onClick={this.reverse}>Reverse</button>
              <button type="button" onClick={this.sortAlpha}>Sort alphabetically</button>
              <button type="button" onClick={this.sortLength}>Sort by length</button>
              <button type="button" onClick={this.reset}>Reset</button>
            </>
          )}
      </div>
    );
  }
}

export default App;
