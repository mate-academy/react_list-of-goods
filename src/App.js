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
    isVisible: false,
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {goodsFromServer.length}
        <div className="wrapper" />
        {this.state.isVisible && <GoodsList goods={goodsFromServer} />}
        <button
          type="button"
          onClick={(event) => {
            const elem = event.target;

            elem.style.display = 'none';
            this.setState({ isVisible: true });
          }}
        >
          Start
        </button>
      </div>
    );
  }
}

export default App;
