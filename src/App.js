import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';

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
  }

  start = () => {
    this.setState(prevState => ({
      isStarted: !prevState.isStarted,
    }));
  }

  render() {
    const { isStarted } = this.state;

    return (
      <div className="App">
        <h1>{`${goodsFromServer.length} Goods`}</h1>
        {!isStarted
          ? (
            <button
              type="button"
              onClick={this.start}
            >
              Start
            </button>
          )
          : (<GoodsList goods={goodsFromServer} />)
        }
      </div>
    );
  }
}

export default App;
