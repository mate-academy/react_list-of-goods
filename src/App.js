import React from 'react';
import './App.css';
import { Goods } from './components/Goods';

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
    listVisible: false,
  }

  letsStart = () => {
    this.setState({ listVisible: true });
  }

  render() {
    const { listVisible } = this.state;

    if (!listVisible) {
      return (
        <div className="App">
          <h1>Goods</h1>
          <button
            type="button"
            className="start__button"
            onClick={this.letsStart}
          >
            Start
          </button>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <Goods goods={goodsFromServer} />
      </div>
    );
  }
}

export default App;
