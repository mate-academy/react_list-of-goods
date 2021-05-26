import React from 'react';
import './App.css';

import GoodsList from './components/GoodsList/GoodsLIst';

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
    isGoodsVisible: false,
  }

  changeGoodsStatus = () => {
    this.setState(state => ({
      isGoodsVisible: !state.isGoodsVisible,
    }));
  };

  render() {
    const { isGoodsVisible } = this.state;

    return (
      <div>
        <button
          type="button"
          onClick={this.changeGoodsStatus}
          className={isGoodsVisible ? 'App__start-active' : 'App__start'}
        >
          Start
        </button>

        {isGoodsVisible && <GoodsList goods={goodsFromServer} />}

      </div>
    );
  }
}

export default App;
