import React from 'react';
import './App.css';

import ListControls from './ListControls';
import GoodsList from './GoodsList';

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
    shouldShowGoods: false,
    goods: goodsFromServer,
  }

  changeGoodsList = (changedGoodsList) => {
    this.setState({
      goods: changedGoodsList,
    });
  }

  showGoods = () => {
    this.setState({
      shouldShowGoods: true,
    });
  }

  render() {
    const { shouldShowGoods, goods } = this.state;

    return (
      <div className="app">
        {!shouldShowGoods
          ? (
            <button
              type="button"
              className="app__start-button"
              onClick={this.showGoods}
            >
              start
            </button>
          )
          : (
            <div className="goods">
              <h1 className="goods__title">Goods</h1>

              <ListControls
                changeGoodsList={this.changeGoodsList}
                initialGoods={goodsFromServer}
                currentGoods={goods}
              />

              <GoodsList goods={goods} />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
