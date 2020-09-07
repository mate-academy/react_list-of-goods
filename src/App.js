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

  handleStart = () => {
    this.setState({ listVisible: true });
  }

  render() {
    const { listVisible } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        { listVisible
          ? (<Goods goods={goodsFromServer} />)
          : (
            <button
              type="button"
              className="start__button"
              onClick={this.handleStart}
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
