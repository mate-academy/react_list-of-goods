import React from 'react';
import './App.css';
import { ListOfGoods } from './Components/ListOfGoods';

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
    showGods: false,
  };

  showListOfGoods = () => {
    this.setState(({ showGods }) => ({
      showGods: !showGods,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__header">Goods</h1>
        {
          this.state.showGods
            ? (<ListOfGoods goodsFromServer={goodsFromServer} />)
            : (
              <button
                className="App__header-button"
                type="button"
                onClick={this.showListOfGoods}
              >
                Start
              </button>
            )
        }
      </div>
    );
  }
}

export default App;
