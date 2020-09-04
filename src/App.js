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
    visible: false,
  };

  start = () => {
    this.setState(state => ({
      visible: !state.visible,
    }));
  };

  render() {
    const { visible } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          onClick={this.start}
          className="button"
          type="button"
        >
          {visible ? ('Close') : ('Start')}
        </button>
        {visible && (<GoodsList goods={goodsFromServer} />)}
      </div>
    );
  }
}

export default App;
