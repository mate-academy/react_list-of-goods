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

type State = {
  information: string[],
  isListVisible: boolean,
  isReversed: boolean,
  sortBy: string,
};

type Props = {};

class App extends React.Component<Props, State> {
  state = {
    information: goodsFromServer,
    isListVisible: false,
    isReversed: false,
    sortBy: '',
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabetically' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {!this.state.isListVisible && (
          <button
            type="button"
            onClick={() => this.setState({ isListVisible: true })}
            className="button"
          >
            Start
          </button>
        )}
        {this.state.isListVisible && <GoodsList {...this.state} />}

        {this.state.isListVisible && (
          <button type="button" onClick={this.reverse} className="button">
            Reversed
          </button>
        )}

        {this.state.isListVisible && (
          <button type="button" onClick={this.sortAlphabetically} className="button">
            Sort alphabetically
          </button>
        )}

        {this.state.isListVisible && (
          <button type="button" onClick={this.sortByLength} className="button">
            Sort length
          </button>
        )}

        {this.state.isListVisible && (
          <button type="button" onClick={this.reset} className="button">
            Reset
          </button>
        )}
      </div>
    );
  }
}

export default App;
