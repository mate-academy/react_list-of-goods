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
    listVisible: false,
  };

  onStartSelected = () => {
    this.setState(state => ({
      listVisible: !state.listVisible,
    }));
  };

  render() {
    return (
      <div className="app">
        {
          this.state.listVisible
            ? <GoodsList goods={goodsFromServer} />
            : (
              <button
                className="app__start"
                type="button"
                onClick={this.onStartSelected}
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
