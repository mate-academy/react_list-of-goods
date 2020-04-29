import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

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
    isVisible: false,
  }

  render() {
    const goods = goodsFromServer.slice();

    return (
      <div className="app">
        {this.state.isVisible
          ? <GoodsList goods={goods} />
          : (
            <button
              type="button"
              onClick={() => this.setState(state => ({
                isVisible: true,
              }))}
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
