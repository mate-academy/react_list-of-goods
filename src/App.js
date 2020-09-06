import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

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
  };

  showList = () => {
    this.setState({ isVisible: true });
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {`Total: ${goodsFromServer.length}`}
        {!this.state.isVisible && (
          <button type="button" onClick={this.showList}>Start</button>
        )}
        {this.state.isVisible && (
          <GoodsList products={goodsFromServer} />
        )}
      </div>
    );
  }
}

export default App;
