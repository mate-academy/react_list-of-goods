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
  startBtn: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    startBtn: false,
  };

  start = () => {
    return (this.setState({ startBtn: true })
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.startBtn
          ? <GoodsList goods={goodsFromServer} />
          : (
            <button type="button" onClick={this.start}>
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
