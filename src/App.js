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
    isGoodsShown: false,
  }

  showGoods = () => {
    this.setState({
      isGoodsShown: true,
    });
  }

  render() {
    const { isGoodsShown } = this.state;

    return (
      <div className="App">
        {isGoodsShown
          ? <GoodsList goods={goodsFromServer} />
          : (
            <button type="button" onClick={this.showGoods}>
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
