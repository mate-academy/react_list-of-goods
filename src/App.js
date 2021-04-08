import React from 'react';
import { GoodsList } from './GoodsList';

import 'bulma/css/bulma.css';
import './App.css';

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

export class App extends React.Component {
  state = {
    isGoodsListVisible: false,
  }

  showGoodsList = () => (
    this.setState(state => ({
      isGoodsListVisible: !state.isGoodsListVisible,
    }))
  )

  render() {
    return (
      <div className="App">
        <h1 className="title">Goods:</h1>

        {this.state.isGoodsListVisible
          ? (
            <GoodsList goods={goodsFromServer} />
          )
          : (
            <button
              type="button"
              className="button is-hovered is-primary is-outlined is-large"
              onClick={this.showGoodsList}
            >
              Start
            </button>
          )
        }
      </div>
    );
  }
}
