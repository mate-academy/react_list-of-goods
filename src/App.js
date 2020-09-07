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
    const { isListOpen } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isListOpen
          ? (
            <button
              type="button"
              className="button"
              onClick={this.openList}
            >
              Start
            </button>
          )
          : <ListOfGoods goods={goodsFromServer} />
        }
      </div>
    );
  }
}

export default App;
