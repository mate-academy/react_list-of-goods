import React from 'react';
import './App.css';

import { List } from './components/List';

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
    started: false,
  }

  render() {
    return (
      <div className="App">
        {!this.state.started
        && (
          <button
            type="button"
            className="start"
            onClick={() => {
              this.setState({ started: true });
            }}
          >
            Start
          </button>
        )}

        {this.state.started
        && <List goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
