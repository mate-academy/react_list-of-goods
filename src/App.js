import React from 'react';
import './App.css';

import { GoodsList } from './components/GoodsList';

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
        {
          this.state.started
            ? <GoodsList goods={goodsFromServer} />
            : (
              <button
                type="button"
                className="button"
                onClick={() => {
                  this.setState(state => ({ started: !state.started }));
                }}
              >
                Start
              </button>
            )
        }
      </div>
    );
  }
}

export default App;
