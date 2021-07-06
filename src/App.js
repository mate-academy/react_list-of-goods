import React from 'react';
import './App.css';
import ListOfGoods from './ListOfGoods';

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
    isButton: true,
  }

  startFunc = () => {
    this.setState({
      isButton: false,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {(this.state.isButton)
          ? <button type="button" onClick={this.startFunc}>Start</button>
          : <ListOfGoods goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
