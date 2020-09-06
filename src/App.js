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
    isListOpen: false,
  }

  openList = () => {
    this.setState({ isListOpen: true });
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {!this.state.isListOpen && (
          <button
            type="button"
            className="button"
            onClick={this.openList}
          >
            Start
          </button>
        )}
        {this.state.isListOpen && (
          <ListOfGoods goods={goodsFromServer} />
        )}
      </div>
    );
  }
}

export default App;
