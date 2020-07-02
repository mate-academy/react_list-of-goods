import React from 'react';
import './App.css';
import { GoodsList } from './Components/GoodsList';

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
    isVisible: true,
  }

  start = () => {
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <div className="App">
        <h1>List of goods</h1>
        {(this.state.isVisible)
          ? <button type="button" onClick={this.start}>Start</button>
          : <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
