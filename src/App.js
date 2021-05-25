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
    goods: goodsFromServer,
    showGoods: false,
  }

  showGoods = () => {
    this.setState(state => ({
      showGoods: !state.showGoods,
    }));
  }

  render() {
    return (
      <div className="App">
        <button
          type="button"
          onClick={this.showGoods}
        >
          Start
        </button>

        {this.state.showGoods && (
        <GoodsList goods={this.state.goods} />
        )}
      </div>
    );
  }
}

export default App;
