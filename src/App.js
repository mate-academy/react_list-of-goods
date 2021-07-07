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
    isStarted: false,
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  render() {
    const { isStarted } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        {isStarted
          ? <GoodList goods={goodsFromServer} />
          : (
            <button
              type="button"
              onClick={this.start}
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
