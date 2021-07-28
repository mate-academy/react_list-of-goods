import React from 'react';
import './App.css';
import { Goods } from './Goods';

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
    goods: goodsFromServer,
    isListVisible: false,
  };

  start = () => {
    this.setState({
      isListVisible: true,
    });
  };

  render() {
    const { isListVisible, goods } = this.state;

    if (isListVisible) {
      return (
        <div className="App">
          <Goods goods={goods} />
        </div>
      );
    }

    return (
      <div>
        <h1>Goods</h1>
        <button onClick={this.start} type="button">
          Start
        </button>
      </div>
    );
  }
}
export default App;
