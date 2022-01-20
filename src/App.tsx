import React from 'react';
import { GoodsList } from './GoodsList';
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
  goodsFromServer: string[];
  isReversed: boolean;
  sortBy: string;
  isVisible: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    goodsFromServer,
    isReversed: false,
    sortBy: '',
    isVisible: false,
  };

  showGoodsList = () => {
    this.setState({
      isVisible: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({
      sortBy: 'alphabet',
      isReversed: false,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      isReversed: false,
    });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.showGoodsList}
          className="btn btn-success"
        >
          Start
        </button>

        <button
          type="button"
          onClick={this.reverse}
          className="btn btn-warning"
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortAlphabetically}
          className="btn btn-warning"
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.sortByLength}
          className="btn btn-warning"
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={this.reset}
          className="btn btn-danger"
        >
          Reset
        </button>

        {this.state.isVisible && (<GoodsList {...this.state} />)}
      </div>
    );
  }
}

export default App;
