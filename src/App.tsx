import React from 'react';

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

interface State {
  isStarted: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
  };

  handleStart = () => {
    this.setState({ isStarted: true });
  };

  render() {
    const { isStarted } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isStarted && (
          <button
            onClick={this.handleStart}
            type="button"
          >
            start
          </button>
        )}

        {isStarted && <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
