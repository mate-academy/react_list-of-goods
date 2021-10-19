import React from 'react';
import { GoodsList } from './conponents/GoodsList';
import { GoodsType } from './types/GoodsType';
import './App.css';

const goodsFromServer: GoodsType[] = [
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
  listVisibility: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    listVisibility: false,
  };

  visibilitySwicher = () => {
    this.setState({ listVisibility: true });
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {!this.state.listVisibility && (
          <button
            type="button"
            onClick={this.visibilitySwicher}
          >
            Start
          </button>
        )}

        {this.state.listVisibility && <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
