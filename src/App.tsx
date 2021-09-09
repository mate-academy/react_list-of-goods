import React from 'react';
import './App.css';
import { GoodsList } from './component';

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
  isStarted: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  render() {
    return (
      <div className="App">
        <h1>
          Goods
        </h1>
        {this.state.isStarted
          ? <GoodsList goods={goodsFromServer} />
          : (
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={this.start}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
