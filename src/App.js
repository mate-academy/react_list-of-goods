import React from 'react';
import './App.css';
import Goodslist from './components/Goodslist/Goodslist';

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
    isStarted: true,
  }

  handleStart = () => {
    this.setState(prevState => ({
      isStarted: !prevState.isStarted,
    }));
  }

  render() {
    const { isStarted } = this.state;

    return (
      <div className="App">
        {
          isStarted
            ? (
              <button
                type="button"
                onClick={this.handleStart}
              >
              Start
              </button>
            ) : (
              <Goodslist list={goodsFromServer} />
            )
        }
      </div>
    );
  }
}

export default App;
