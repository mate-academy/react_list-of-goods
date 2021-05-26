import React, { Component } from 'react';
import { GoodsList } from './component/GoodsList';
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

export class App extends Component {
  state = {
    goods: [...goodsFromServer],
    visible: false,
  };

  startApp = () => {
    this.setState({ visible: true });
  };

  render() {
    const { goods, visible } = this.state;

    return (
      <>
        {!visible && (
          <button className="button" type="button" onClick={this.startApp}>
            Start
          </button>
        )}

        {visible && (
          <div>
            <h1>Goods</h1>
            <GoodsList goods={goods} />
          </div>
        )}
      </>
    );
  }
}

export default App;
