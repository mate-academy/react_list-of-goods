import React from 'react';
import './App.css';

import { GoodsList } from './GoodsList/GoodsList';

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
    init: false,
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.init
          ? (
            <GoodsList
              goods={goodsFromServer}
            />
          )
          : (
            <button
              type="button"
              onClick={() => (
                this.setState({ init: true })
              )}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
