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
    isLoaded: false,
  };

  onStartSelected = () => {
    this.setState(prevState => ({
      isLoaded: !prevState.isLoaded,
    }));
  };

  render() {
    return (
      <div className="app">
        {
          this.state.isLoaded
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
