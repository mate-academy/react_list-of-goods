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
    listIsVisible: false,
  }

  showList = () => {
    this.setState({ listIsVisible: true });
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {!this.state.listIsVisible && (
          <button type="button" onClick={this.showList}>
            Start
          </button>
        )}
        {this.state.listIsVisible && (
          <GoodsList goods={goodsFromServer} />
        )}
      </div>
    );
  }
}

export default App;
