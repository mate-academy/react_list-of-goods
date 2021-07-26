import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';

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
].map(good => ({
  id: uuidv4(),
  name: good,
}));

export class App extends React.Component {
  state = {
    isGoodsVisible: false,
  };

  toggleVisibility = () => {
    this.setState(state => ({
      isGoodsVisible: !state.isGoodsVisible,
    }));
  }

  render() {
    const { isGoodsVisible } = this.state;

    return (
      <div className="App">
        { isGoodsVisible ? (
          <GoodsList goods={goodsFromServer} />
        ) : (
          <Button onClick={this.toggleVisibility} name="Start" />
        )}
      </div>
    );
  }
}
