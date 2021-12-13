import { Component } from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';

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

class App extends Component<{}, State> {
  state: State = {
    isStarted: false,
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">List of Goods</h1>
        {!this.state.isStarted && (
          <button
            type="button"
            onClick={() => {
              this.setState({ isStarted: true });
            }}
            className="App__button-start"
          >
            Start a program!
          </button>
        )}
        {this.state.isStarted && <GoodsList goodsList={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
