import React from 'react';
import './App.css';
import { GoodList } from './components/GoodList';

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
    show: false,
  }

  showGoods() {
    this.setState(state => ({ show: !state.show }));
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          hidden={this.state.show}
          onClick={
            () => this.showGoods()
          }
        >
          Start
        </button>
        {
          this.state.show && (
            <GoodList goodsFromServer={goodsFromServer} />
          )
        }
      </div>
    );
  }
}

export default App;
