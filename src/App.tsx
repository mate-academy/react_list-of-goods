import React from 'react';
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
  showGoods: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    showGoods: false,
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            this.setState({ showGoods: true });
          }}
          disabled={this.state.showGoods}
        >
          Start
        </button>
        {this.state.showGoods
          && <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
