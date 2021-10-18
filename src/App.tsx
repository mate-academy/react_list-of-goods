import React from 'react';
import './App.css';
import { GoodsList } from './componets/GoodsList';

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

interface State {
  started: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    started: false,
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {!this.state.started && (
          <button
            type="button"
            onClick={() => {
              this.setState({ started: true });
            }}
          >
            Start
          </button>
        )}
        {this.state.started && <GoodsList goodsList={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
