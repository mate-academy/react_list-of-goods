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

class App extends React.Component<{}, { isStarted: boolean }> {
  state = {
    isStarted: false,
  };

  startHandler = () => {
    this.setState({ isStarted: true });
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {!this.state.isStarted && (
          <button type="button" className="button" onClick={this.startHandler}>
            Start
          </button>
        )}
        {this.state.isStarted && <GoodsList data={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
