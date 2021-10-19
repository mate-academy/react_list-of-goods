import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

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

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>

        {!this.state.isStarted && (
          <button
            type="button"
            onClick={() => {
              this.setState({ isStarted: true });
            }}
          >
            Start
          </button>
        )}
        {this.state.isStarted && <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
