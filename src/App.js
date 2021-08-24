import React from 'react';
import './App.css';
import { GoodsList } from './Component/Component';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    goodsFromServer: [...goodsFromServer],
    goodsVisible: false,
    isReversed: false,
    sortAlphabetically: false,
    sortByLength: false,
    isResetted: false,
  }

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({ sortAlphabetically: !state.sortAlphabetically }));
  };

  sortByLength = () => {
    this.setState(state => ({ sortByLength: !state.sortByLength }));
  };

  start = () => this.setState({ goodsVisible: true });

  reset = () => this.setState(state => ({ isResetted: !state.isResetted }));

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {goodsFromServer.length}
        <div>
          <button
            type="button"
            onClick={this.start}
            className={this.state.goodsVisible ? 'hiddenBtn' : ''}
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
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          {this.state.goodsVisible
            ? (<GoodsList {...this.state} />) : ''
          }
        </div>
      </div>
    );
  }
}

export default App;
